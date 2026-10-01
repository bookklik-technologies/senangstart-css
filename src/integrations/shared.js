/**
 * SenangStart CSS - Shared helpers for the bundler integrations
 * (./vite.js and ./postcss.js). Not a public entry point.
 */

import { resolve, isAbsolute, relative, sep } from 'path';
import { build, BuildError } from '../node.js';
import { splitPatterns, DEFAULT_CONTENT, DEFAULT_IGNORE } from '../cli/lib/files.js';

/** Plugin name used for Vite/PostCSS messages. */
export const PLUGIN_NAME = 'senangstart';

/** Virtual module id served by the Vite plugin. */
export const VIRTUAL_ID = 'virtual:senangstart.css';

/**
 * Matches the CSS directives the integrations replace with generated CSS:
 *   @senangstart;   @import "senangstart";   @import 'senangstart';
 * (also tolerates `@import url(senangstart);` and a missing trailing `;` at EOF)
 */
export const DIRECTIVE_RE = /@senangstart\s*(?:;|$)|@import\s+(?:url\(\s*)?(['"]?)senangstart\1\s*\)?\s*(?:;|$)/gm;

/** Quick pre-check before running the (global) regex. */
export function hasDirective(code) {
  return typeof code === 'string' && code.includes('senangstart') && new RegExp(DIRECTIVE_RE.source, 'm').test(code);
}

/**
 * Replace the first directive with `css` and drop any further directives.
 * @param {string} code
 * @param {string} css
 * @returns {string}
 */
export function replaceDirectives(code, css) {
  let first = true;
  return code.replace(new RegExp(DIRECTIVE_RE.source, 'gm'), () => {
    if (!first) return '';
    first = false;
    return css;
  });
}

/** Option keys forwarded verbatim to build(). */
const FORWARDED = ['config', 'content', 'safelist', 'preflight', 'ignoreInvalid', 'minify'];

/**
 * Translate integration options into build() options (never writes files).
 * @param {Object} options
 * @param {{ cwd: string, fresh?: boolean, minify?: boolean }} extra
 */
export function toBuildOptions(options = {}, extra = {}) {
  const out = { cwd: resolve(options.cwd || extra.cwd || process.cwd()), output: false };
  for (const key of FORWARDED) if (options[key] !== undefined) out[key] = options[key];
  if (out.minify === undefined && typeof extra.minify === 'boolean') out.minify = extra.minify;
  if (extra.fresh) out.fresh = true;
  // Side outputs (aiContext / typescript) are a CLI concern; never write from a bundler.
  out.aiContext = false;
  out.typescript = false;
  return out;
}

/**
 * Run build(), turning "no sources" into an empty result instead of a throw so
 * a fresh project (or a CSS file processed before any markup exists) works.
 * @returns {Promise<import('../node.js').BuildResult & { empty?: boolean }>}
 */
export async function runBuild(buildOptions) {
  try {
    return await build(buildOptions);
  } catch (e) {
    if (e instanceof BuildError && e.code === 'NO_SOURCES') {
      return {
        css: '',
        errors: [],
        warnings: [{ raw: '', attrType: undefined, code: 'no-sources', message: e.message, level: 'warning' }],
        files: [],
        outputs: { skipped: [] },
        durationMs: 0,
        ok: true,
        tokenCount: 0,
        config: { content: buildOptions.content || null },
        configPath: null,
        empty: true
      };
    }
    throw e;
  }
}

/**
 * Human readable one-line diagnostic: "file:line  [space] p:nope — message (did you mean …?)".
 * @param {import('../cli/lib/diagnostics.js').Diagnostic} d
 * @param {string} [cwd]
 */
export function formatDiagnostic(d, cwd) {
  let where = '';
  if (d.file) {
    const rel = cwd ? relative(cwd, d.file) : d.file;
    where = `${rel && !rel.startsWith('..') ? rel : d.file}${d.line ? `:${d.line}` : ''}: `;
  }
  const token = d.raw ? `${d.attrType ? `${d.attrType}="${d.raw}"` : `"${d.raw}"`} ` : '';
  const hint = d.suggestion ? ` (did you mean "${d.suggestion}"?)` : '';
  return `${where}${token}${token ? '— ' : ''}${d.message}${hint}`;
}

const GLOB_CHARS = /[*?[\]{}()!]/;

/**
 * Split content globs into watchable { dir, glob } pairs (absolute dirs) plus
 * literal files. Negations are ignored (they only narrow the set).
 * @param {string[]|undefined} content
 * @param {string} cwd
 * @returns {{ dirs: Array<{ dir: string, glob: string }>, files: string[] }}
 */
export function contentWatchTargets(content, cwd) {
  const list = Array.isArray(content) && content.length > 0 ? content : [...DEFAULT_CONTENT];
  const { include, literals } = splitPatterns(list, cwd);
  const dirs = [];
  const seen = new Set();
  for (const pattern of include) {
    const parts = pattern.split('/');
    const base = [];
    while (parts.length > 1 && !GLOB_CHARS.test(parts[0])) base.push(parts.shift());
    const dir = resolve(cwd, base.join('/') || '.');
    const glob = parts.join('/');
    const key = `${dir}\0${glob}`;
    if (seen.has(key)) continue;
    seen.add(key);
    dirs.push({ dir, glob });
  }
  return { dirs, files: literals };
}

const IGNORED_SEGMENTS = new Set(
  DEFAULT_IGNORE.map((p) => p.replace(/^\*\*\//, '').replace(/\/\*\*$/, ''))
);

/** Is `file` inside a default-ignored directory (node_modules, .git, dist, …)? */
export function isIgnoredPath(file) {
  return file.split(sep === '\\' ? /[\\/]/ : '/').some((seg) => IGNORED_SEGMENTS.has(seg));
}

/** Is `file` inside `dir` (or equal to it)? */
export function isInside(dir, file) {
  const rel = relative(dir, file);
  return rel === '' || (!rel.startsWith('..') && !isAbsolute(rel));
}
