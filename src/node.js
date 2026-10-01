/**
 * SenangStart CSS - Programmatic Node.js API
 *
 *   import { build, watch, loadConfig, defineConfig } from '@bookklik/senangstart-css/node';
 *
 * The CLI (`senangstart build` / `senangstart dev`) is a thin wrapper over
 * these functions. This module is ESM-only.
 *
 * @typedef {Object} BuildOptions
 * @property {string|Object} [config]   Config path (relative to cwd or absolute) or raw config object.
 *                                      Omit to auto-discover senangstart.config.{js,mjs,cjs,json,ts}.
 * @property {string} [cwd]             Project root (default: process.cwd()).
 * @property {string[]} [content]       Override content globs.
 * @property {string|false} [output]    CSS output path; `false` = don't write anything.
 * @property {boolean} [minify]         Override output.minify.
 * @property {string[]} [safelist]      Extra safelist entries (appended to config.safelist).
 * @property {boolean} [preflight]      Override preflight.
 * @property {boolean} [ignoreInvalid]  Downgrade token errors to warnings.
 * @property {string|false} [aiContext] Override output.aiContext (opt-in side output).
 * @property {string|false} [typescript] Override output.typescript (opt-in side output).
 * @property {boolean} [fresh]          Cache-bust the config import (watch mode).
 *
 * @typedef {import('./cli/lib/diagnostics.js').Diagnostic} Diagnostic
 *
 * @typedef {Object} BuildResult
 * @property {string} css
 * @property {Diagnostic[]} errors
 * @property {Diagnostic[]} warnings
 * @property {string[]} files                       Absolute paths of scanned source files.
 * @property {{ css?: string, aiContext?: string, typescript?: string, skipped: Array<{ path: string, reason: string }> }} outputs
 * @property {number} durationMs
 * @property {boolean} ok                           errors.length === 0
 * @property {number} tokenCount
 * @property {Object} config                        The resolved (merged) config.
 * @property {string|null} configPath
 */

import { promises as fsPromises } from 'fs';
import { resolve } from 'path';
import { parseSource } from './compiler/parser.js';
import { tokenizeAll, tokenizeAllWithBatching } from './compiler/tokenizer.js';
import { generateCSSWithErrors, minifyCSS } from './compiler/generators/css.js';
import { generateAIContext } from './compiler/generators/ai-context.js';
import { getMemoryUsage } from './utils/common.js';
import { readMultipleFilesWithTimeout, ensureDir, writeGeneratedFile } from './utils/node-io.js';
import { loadConfig as loadConfigInternal, ConfigError } from './cli/lib/config-loader.js';
import { findFiles } from './cli/lib/files.js';
import { normalizeDiagnostics } from './cli/lib/diagnostics.js';
import { expandSafelist, emptyTokenSets } from './cli/lib/safelist.js';

export { ConfigError };

export class BuildError extends Error {
  constructor(message, details = {}) {
    super(message);
    this.name = 'BuildError';
    this.code = details.code || 'BUILD_ERROR';
    if (details.cause) this.cause = details.cause;
  }
}

/**
 * Identity helper for typed configs.
 * @template T
 * @param {T} config
 * @returns {T}
 */
export function defineConfig(config) {
  return config;
}

/**
 * Load, validate and merge a config.
 * @param {string|Object|null|undefined} pathOrObject
 * @param {{ cwd?: string, fresh?: boolean, strict?: boolean }} [options]
 * @returns {Promise<{ config: Object, path: string|null, source: string, warnings: string[], errors: string[] }>}
 */
export async function loadConfig(pathOrObject, options = {}) {
  return loadConfigInternal(pathOrObject, options);
}

/**
 * The TypeScript generator is being relocated by the types team; load it lazily
 * so the build never fails just because `output.typescript` is unavailable.
 * @returns {Promise<((config: Object) => string)|null>}
 */
async function loadTypeScriptGenerator() {
  const candidates = ['./compiler/generators/typescript.js'];
  for (const spec of candidates) {
    try {
      const mod = await import(spec);
      if (typeof mod.generateTypeScript === 'function') return mod.generateTypeScript;
    } catch (e) {
      if (e && e.code !== 'ERR_MODULE_NOT_FOUND') throw e;
    }
  }
  return null;
}

/**
 * Find the line number of the first occurrence of `needle` in `content`.
 */
function lineOf(content, needle) {
  if (!content || !needle) return undefined;
  const idx = content.indexOf(needle);
  if (idx < 0) return undefined;
  let line = 1;
  for (let i = 0; i < idx; i++) if (content.charCodeAt(i) === 10) line++;
  return line;
}

/**
 * Apply CLI/API overrides onto a merged config (config is a fresh clone).
 */
function applyOverrides(config, options) {
  if (Array.isArray(options.content) && options.content.length > 0) config.content = options.content;
  if (typeof options.output === 'string' && options.output.length > 0) config.output.css = options.output;
  if (typeof options.minify === 'boolean') config.output.minify = options.minify;
  if (typeof options.preflight === 'boolean') config.preflight = options.preflight;
  if (options.aiContext !== undefined) config.output.aiContext = options.aiContext;
  if (options.typescript !== undefined) config.output.typescript = options.typescript;
  if (typeof options.ignoreInvalid === 'boolean') {
    config.build = { ...(config.build || {}), ignoreInvalid: options.ignoreInvalid };
  }
  if (Array.isArray(options.safelist) && options.safelist.length > 0) {
    config.safelist = [...(config.safelist || []), ...options.safelist];
  }
  return config;
}

/**
 * Build CSS once.
 * @param {BuildOptions} [options]
 * @returns {Promise<BuildResult>}
 * @throws {ConfigError} when the config is missing/invalid
 * @throws {BuildError} when no source files are found or generation fails
 */
export async function build(options = {}) {
  const startTime = Date.now();
  const cwd = resolve(options.cwd || process.cwd());
  const warnings = [];

  // 1. Config
  const loaded = await loadConfigInternal(options.config, { cwd, fresh: options.fresh === true });
  const config = applyOverrides(loaded.config, options);
  for (const w of loaded.warnings) warnings.push({ raw: '', attrType: undefined, code: 'config-warning', message: w, level: 'warning' });

  const ignoreInvalid = config.build?.ignoreInvalid === true;

  // 2. Source files
  const files = await findFiles(config.content, { cwd });
  const safelistSets = expandSafelist(config.safelist, {
    onInvalid: (msg) => warnings.push({ raw: '', attrType: undefined, code: 'safelist', message: msg, level: 'warning' })
  });
  const safelistCount = Object.values(safelistSets).reduce((n, s) => n + s.size, 0);

  if (files.length === 0 && safelistCount === 0) {
    throw new BuildError('No source files found matching content patterns. Aborting build.', { code: 'NO_SOURCES' });
  }

  // 3. Parse
  const allTokens = emptyTokenSets();
  /** @type {Map<string, {file: string, content: string}>} raw → first occurrence */
  const origin = new Map();
  let failedFiles = 0;

  const reads = await readMultipleFilesWithTimeout(files, 5000);
  for (const { path: filePath, content, error } of reads) {
    if (error) {
      failedFiles++;
      warnings.push({ raw: '', attrType: undefined, code: 'file-read', message: `Skipping ${filePath}: ${error.message}`, level: 'warning', file: filePath });
      continue;
    }
    try {
      const parsed = parseSource(content);
      for (const attr of Object.keys(allTokens)) {
        if (!parsed[attr]) continue;
        for (const t of parsed[attr]) {
          allTokens[attr].add(t);
          if (!origin.has(t)) origin.set(t, { file: filePath, content });
        }
      }
    } catch (e) {
      failedFiles++;
      warnings.push({ raw: '', attrType: undefined, code: 'file-parse', message: `Could not parse ${filePath}: ${e.message}`, level: 'warning', file: filePath });
    }
  }

  if (files.length > 0 && failedFiles === files.length && safelistCount === 0) {
    throw new BuildError('All source files failed to process. Aborting build.', { code: 'ALL_FILES_FAILED' });
  }

  // 4. Safelist → appended to the token set
  for (const attr of Object.keys(allTokens)) {
    for (const t of safelistSets[attr]) allTokens[attr].add(t);
  }

  // 5. Tokenize (batched for very large sets)
  const totalRaw = Object.values(allTokens).reduce((n, s) => n + s.size, 0);
  const useBatching = totalRaw > 10000 || getMemoryUsage() > 200;
  let tokens;
  try {
    tokens = useBatching ? await tokenizeAllWithBatching(allTokens, 1000, config) : tokenizeAll(allTokens, config);
  } catch (e) {
    throw new BuildError(`Tokenization failed: ${e.message}`, { code: 'TOKENIZE', cause: e });
  }

  // 6. Generate
  let css;
  let generationErrors = [];
  try {
    const result = generateCSSWithErrors(tokens, config);
    css = result.css;
    generationErrors = result.errors || [];
  } catch (e) {
    throw new BuildError(`CSS generation failed: ${e.message}`, { code: 'GENERATE', cause: e });
  }
  if (!css) {
    throw new BuildError('CSS generation failed: no CSS generated', { code: 'GENERATE_EMPTY' });
  }

  // 7. Diagnostics (both old and new error shapes)
  const tokenLevel = ignoreInvalid ? 'warning' : 'error';
  const tokenDiags = normalizeDiagnostics(tokens.filter(t => t && (t.error || t.code)), { level: tokenLevel });
  const withToken = generationErrors.filter(e => e && (e.token !== undefined || ('raw' in e && e.code)));
  const withoutToken = generationErrors.filter(e => e && !(e.token !== undefined || ('raw' in e && e.code)));
  const genDiags = normalizeDiagnostics(withToken, { level: tokenLevel });
  const noiseDiags = normalizeDiagnostics(withoutToken, { level: 'warning' });

  const attrByRaw = new Map();
  for (const t of tokens) if (t && t.raw !== undefined && !attrByRaw.has(t.raw)) attrByRaw.set(t.raw, t.attrType);

  const seen = new Set();
  const diagnostics = [];
  for (const d of [...tokenDiags, ...genDiags]) {
    if (!d.attrType && attrByRaw.has(d.raw)) d.attrType = attrByRaw.get(d.raw);
    const key = `${d.code}|${d.attrType}|${d.raw}|${d.message}`;
    if (seen.has(key)) continue;
    seen.add(key);
    const o = origin.get(d.raw);
    if (o) {
      d.file = d.file || o.file;
      d.line = d.line || lineOf(o.content, d.raw);
    }
    diagnostics.push(d);
  }

  const errors = diagnostics.filter(d => d.level === 'error');
  warnings.push(...diagnostics.filter(d => d.level === 'warning'), ...noiseDiags);

  // 8. Minify
  if (config.output.minify) {
    try {
      css = minifyCSS(css);
    } catch (e) {
      throw new BuildError(`CSS minification failed: ${e.message}`, { code: 'MINIFY', cause: e });
    }
  }

  // 9. Outputs
  const outputs = { skipped: [] };
  if (options.output !== false) {
    const cssPath = resolve(cwd, config.output.css);
    try {
      await ensureDir(cssPath);
      await fsPromises.writeFile(cssPath, css, 'utf-8');
      outputs.css = cssPath;
    } catch (e) {
      throw new BuildError(`Failed to write CSS to ${cssPath}: ${e.message}`, { code: 'WRITE_CSS', cause: e });
    }

    // Opt-in side outputs — never overwrite user-owned files.
    const side = [
      ['aiContext', config.output.aiContext, () => generateAIContext(config)],
      ['typescript', config.output.typescript, async () => {
        const gen = await loadTypeScriptGenerator();
        if (!gen) throw new Error('TypeScript generator is not available in this build');
        return gen(config);
      }]
    ];
    for (const [key, target, generate] of side) {
      if (typeof target !== 'string' || target.length === 0) continue;
      const absPath = resolve(cwd, target);
      try {
        const res = await writeGeneratedFile(absPath, await generate());
        if (res.written) {
          outputs[key] = absPath;
        } else {
          outputs.skipped.push({ path: absPath, reason: res.reason, kind: key });
          warnings.push({ raw: '', attrType: undefined, code: 'output-protected', message: `Skipped ${key} output ${absPath}: ${res.reason}`, level: 'warning', file: absPath });
        }
      } catch (e) {
        outputs.skipped.push({ path: absPath, reason: e.message, kind: key });
        warnings.push({ raw: '', attrType: undefined, code: 'output-failed', message: `Failed to write ${key} output ${absPath}: ${e.message}`, level: 'warning', file: absPath });
      }
    }
  }

  return {
    css,
    errors,
    warnings,
    files,
    outputs,
    durationMs: Date.now() - startTime,
    ok: errors.length === 0,
    tokenCount: tokens.length,
    config,
    configPath: loaded.path
  };
}

/**
 * Watch content globs + the config file and rebuild on change.
 *
 * @param {BuildOptions & { debounceMs?: number }} options
 * @param {(result: BuildResult|null, error?: Error, meta?: { event: string, path?: string }) => void} onResult
 *   Called after every build (initial + each rebuild). On failure `result` is
 *   null and `error` is set. Never throws; the watcher keeps running.
 * @returns {Promise<{ close(): Promise<void>, rebuild(): Promise<void> }>}
 */
export async function watch(options = {}, onResult = () => {}) {
  const { default: chokidar } = await import('chokidar');
  const cwd = resolve(options.cwd || process.cwd());
  const debounceMs = typeof options.debounceMs === 'number' ? options.debounceMs : 100;

  let watcher = null;
  let closed = false;
  let building = false;
  let pending = null; // { event, path }
  let timer = null;
  let watchedContent = null;
  let watchedConfig = null;

  const emit = (result, error, meta) => {
    try {
      onResult(result, error, meta);
    } catch {
      // consumer errors must not kill the watcher
    }
  };

  async function runBuild(meta) {
    building = true;
    try {
      const result = await build({ ...options, fresh: true });
      await syncWatcher(result.config.content, result.configPath);
      emit(result, undefined, meta);
    } catch (error) {
      emit(null, error, meta);
    } finally {
      building = false;
      if (pending && !closed) {
        const next = pending;
        pending = null;
        schedule(next);
      }
    }
  }

  function schedule(meta) {
    if (closed) return;
    if (building) {
      pending = meta;
      return;
    }
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      timer = null;
      runBuild(meta);
    }, debounceMs);
  }

  function toWatchPaths(content) {
    const paths = [];
    const ignored = [
      '**/node_modules/**', '**/.git/**', '**/dist/**', '**/.cache/**', '**/.next/**', '**/.nuxt/**', '**/coverage/**'
    ];
    for (const p of content || []) {
      if (typeof p !== 'string') continue;
      if (p.startsWith('!')) {
        ignored.push(p.slice(1).replace(/^\.\//, ''));
      } else {
        paths.push(p.replace(/^\.\//, ''));
      }
    }
    return { paths, ignored };
  }

  async function syncWatcher(content, configPath) {
    const contentKey = JSON.stringify(content || []);
    if (watcher && contentKey === watchedContent && configPath === watchedConfig) return;

    if (watcher) {
      await watcher.close().catch(() => {});
      watcher = null;
    }
    if (closed) return;

    const { paths, ignored } = toWatchPaths(content);
    const targets = [...paths];
    if (configPath) targets.push(configPath);

    watchedContent = contentKey;
    watchedConfig = configPath;

    watcher = chokidar.watch(targets, {
      cwd,
      ignored,
      persistent: true,
      ignoreInitial: true,
      followSymlinks: false,
      awaitWriteFinish: { stabilityThreshold: 50, pollInterval: 10 }
    });

    const onEvent = (event) => (path) => {
      const abs = resolve(cwd, path);
      const isConfig = configPath && abs === resolve(configPath);
      schedule({ event: isConfig ? 'config' : event, path: abs });
    };
    watcher
      .on('change', onEvent('change'))
      .on('add', onEvent('add'))
      .on('unlink', onEvent('unlink'))
      .on('error', (error) => emit(null, error, { event: 'watcher-error' }));
  }

  // Initial build (sets up the watcher from the resolved config). If the
  // initial config load fails we still watch for the config file so the user
  // can fix it without restarting.
  try {
    const result = await build({ ...options, fresh: true });
    await syncWatcher(result.config.content, result.configPath);
    emit(result, undefined, { event: 'initial' });
  } catch (error) {
    emit(null, error, { event: 'initial' });
    const fallbackContent = Array.isArray(options.content) ? options.content : ['./**/*.html'];
    let configPath = null;
    try {
      const { resolveConfigPath, discoverConfig } = await import('./cli/lib/config-loader.js');
      configPath = typeof options.config === 'string' ? resolveConfigPath(options.config, cwd) : discoverConfig(cwd);
    } catch {
      // ignore
    }
    await syncWatcher(fallbackContent, configPath);
  }

  return {
    async close() {
      closed = true;
      if (timer) clearTimeout(timer);
      if (watcher) {
        const w = watcher;
        watcher = null;
        await w.close().catch(() => {});
      }
    },
    async rebuild() {
      await runBuild({ event: 'manual' });
    }
  };
}

export default { build, watch, loadConfig, defineConfig };
