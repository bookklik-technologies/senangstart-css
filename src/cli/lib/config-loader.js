/**
 * SenangStart CSS - Config discovery & loading
 *
 * Rules:
 *  - Paths are resolved with `path.resolve(cwd, p)` → absolute paths and
 *    configs outside cwd are allowed.
 *  - An explicitly requested config that is missing or fails to load throws
 *    a ConfigError (CLI maps it to exit code 1).
 *  - An auto-discovered config that fails to load ALSO throws — we never
 *    silently build with defaults when the user has a config.
 *  - No config found at all → defaults (with an informational note).
 *  - `fresh: true` cache-busts ESM imports (`?t=<now>`) so watch mode picks
 *    up edits to the config file.
 */

import { existsSync, statSync, readFileSync } from 'fs';
import { resolve, extname, isAbsolute } from 'path';
import { pathToFileURL } from 'url';
import { mergeConfig, validateConfig } from '../../config/defaults.js';

let freshCounter = 0;

export class ConfigError extends Error {
  /**
   * @param {string} message
   * @param {{ path?: string, cause?: unknown, code?: string }} [details]
   */
  constructor(message, details = {}) {
    super(message);
    this.name = 'ConfigError';
    this.code = details.code || 'CONFIG_ERROR';
    this.path = details.path;
    if (details.cause) this.cause = details.cause;
  }
}

/** Whether this Node runtime can import `.ts` without a loader. */
export function supportsTypeScriptConfig() {
  const feature = typeof process !== 'undefined' && process.features && process.features.typescript;
  return Boolean(feature);
}

/**
 * Config file basenames searched in order.
 * @returns {string[]}
 */
export function configCandidates() {
  const names = [
    'senangstart.config.js',
    'senangstart.config.mjs',
    'senangstart.config.cjs',
    'senangstart.config.json'
  ];
  if (supportsTypeScriptConfig()) {
    names.push('senangstart.config.ts', 'senangstart.config.mts');
  }
  return names;
}

/**
 * Find a config file in `cwd`.
 * @param {string} [cwd]
 * @returns {string|null} absolute path or null
 */
export function discoverConfig(cwd = process.cwd()) {
  for (const name of configCandidates()) {
    const candidate = resolve(cwd, name);
    if (existsSync(candidate)) {
      try {
        if (statSync(candidate).isFile()) return candidate;
      } catch {
        // ignore
      }
    }
  }
  return null;
}

/**
 * Resolve a user-supplied config path against cwd.
 * @param {string} configPath
 * @param {string} [cwd]
 */
export function resolveConfigPath(configPath, cwd = process.cwd()) {
  return isAbsolute(configPath) ? configPath : resolve(cwd, configPath);
}

/**
 * Import a config module from disk.
 * @param {string} absPath
 * @param {{ fresh?: boolean }} [options]
 * @returns {Promise<Object>} raw (unmerged) user config
 */
export async function importConfigFile(absPath, options = {}) {
  const ext = extname(absPath).toLowerCase();

  if (ext === '.json') {
    try {
      const raw = readFileSync(absPath, 'utf-8');
      return JSON.parse(raw);
    } catch (e) {
      throw new ConfigError(`Failed to parse JSON config ${absPath}: ${e.message}`, { path: absPath, cause: e, code: 'CONFIG_PARSE' });
    }
  }

  if ((ext === '.ts' || ext === '.mts' || ext === '.cts') && !supportsTypeScriptConfig()) {
    throw new ConfigError(
      `TypeScript config ${absPath} requires Node with type stripping (Node ≥ 22.18 / 23+) or a loader. ` +
      `Rename to senangstart.config.mjs or run node with --experimental-strip-types.`,
      { path: absPath, code: 'CONFIG_TS_UNSUPPORTED' }
    );
  }

  let url = pathToFileURL(absPath).href;
  if (options.fresh) {
    // Date.now() alone can collide within the same millisecond → add a counter
    url += `?t=${Date.now()}-${++freshCounter}`;
  }

  let mod;
  try {
    mod = await import(url);
  } catch (e) {
    throw new ConfigError(`Failed to load config ${absPath}: ${e.message}`, { path: absPath, cause: e, code: 'CONFIG_LOAD' });
  }

  let value = mod && 'default' in mod ? mod.default : mod;
  if (typeof value === 'function') {
    try {
      value = await value();
    } catch (e) {
      throw new ConfigError(`Config factory in ${absPath} threw: ${e.message}`, { path: absPath, cause: e, code: 'CONFIG_FACTORY' });
    }
  }
  // Module namespace objects have a null prototype; normalise to a plain object
  if (value && typeof value === 'object' && !Array.isArray(value)) {
    value = { ...value };
  }
  return value;
}

/**
 * Load + merge + validate a config.
 *
 * @param {string|Object|null|undefined} pathOrObject
 *   - string: explicit path (relative to cwd or absolute). Must exist.
 *   - object: raw user config (merged in-memory)
 *   - null/undefined: auto-discover in cwd, fall back to defaults
 * @param {{ cwd?: string, fresh?: boolean, strict?: boolean }} [options]
 *   strict (default true): throw ConfigError when validateConfig reports errors
 * @returns {Promise<{ config: Object, path: string|null, source: 'explicit'|'discovered'|'object'|'defaults', warnings: string[], errors: string[] }>}
 */
export async function loadConfig(pathOrObject, options = {}) {
  const cwd = options.cwd || process.cwd();
  const strict = options.strict !== false;

  let raw = {};
  let path = null;
  let source = 'defaults';

  if (pathOrObject && typeof pathOrObject === 'object') {
    raw = pathOrObject;
    source = 'object';
  } else if (typeof pathOrObject === 'string' && pathOrObject.length > 0) {
    path = resolveConfigPath(pathOrObject, cwd);
    if (!existsSync(path)) {
      throw new ConfigError(`Config file not found: ${path}`, { path, code: 'CONFIG_NOT_FOUND' });
    }
    raw = await importConfigFile(path, { fresh: options.fresh });
    source = 'explicit';
  } else {
    path = discoverConfig(cwd);
    if (path) {
      raw = await importConfigFile(path, { fresh: options.fresh });
      source = 'discovered';
    }
  }

  if (raw === undefined || raw === null) raw = {};
  const { errors, warnings } = validateConfig(raw);

  if (strict && errors.length > 0) {
    const where = path ? ` (${path})` : '';
    throw new ConfigError(`Invalid config${where}:\n  - ${errors.join('\n  - ')}`, { path, code: 'CONFIG_INVALID' });
  }

  const config = mergeConfig(raw, { silent: true });
  return { config, path, source, warnings, errors };
}

export default loadConfig;
