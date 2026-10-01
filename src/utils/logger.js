/**
 * SenangStart CSS - Console Logger
 *
 * - info/success/build/watch/debug → stdout
 * - warn/error                     → stderr
 * - Colors are disabled in browsers, when NO_COLOR is set, when FORCE_COLOR=0,
 *   or when the target stream is not a TTY (CI logs, pipes, redirects).
 * - Levels: `quiet` (errors only), default, `verbose` (adds debug output).
 * - `json` mode silences all human-readable output so a machine-readable
 *   summary can be printed on stdout by the caller (see `logger.json()`).
 */

const isBrowser = typeof window !== 'undefined' && typeof window.document !== 'undefined';
const proc = typeof process !== 'undefined' ? process : null;

/**
 * Decide whether ANSI colors should be emitted for a given stream.
 * @param {NodeJS.WriteStream|undefined} stream
 * @returns {boolean}
 */
export function supportsColor(stream) {
  if (isBrowser || !proc) return false;
  const env = proc.env || {};
  if ('NO_COLOR' in env && env.NO_COLOR !== '') return false;
  if (env.FORCE_COLOR === '0') return false;
  if (env.FORCE_COLOR && env.FORCE_COLOR !== '0') return true;
  if (env.TERM === 'dumb') return false;
  return Boolean(stream && stream.isTTY);
}

const ANSI = {
  reset: '\x1b[0m',
  bright: '\x1b[1m',
  dim: '\x1b[2m',
  red: '\x1b[31m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  magenta: '\x1b[35m',
  cyan: '\x1b[36m',
  white: '\x1b[37m'
};

const NO_ANSI = Object.fromEntries(Object.keys(ANSI).map(k => [k, '']));

const LEVELS = { quiet: 0, normal: 1, verbose: 2 };

const state = {
  level: LEVELS.normal,
  json: false,
  colorOut: supportsColor(proc?.stdout),
  colorErr: supportsColor(proc?.stderr)
};

function palette(isErr) {
  return (isErr ? state.colorErr : state.colorOut) ? ANSI : NO_ANSI;
}

function prefix(isErr) {
  const c = palette(isErr);
  return c.magenta ? `${c.magenta}${c.bright}[senang]${c.reset}` : '[senang]';
}

function out(msg) {
  if (state.json) return;
  console.log(msg);
}

function err(msg) {
  if (state.json) return;
  if (proc && proc.stderr && typeof proc.stderr.write === 'function') {
    proc.stderr.write(msg + '\n');
  } else {
    console.error(msg);
  }
}

/**
 * Configure logger behaviour (used by CLI flags).
 * @param {{ quiet?: boolean, verbose?: boolean, json?: boolean, color?: boolean }} opts
 */
export function configureLogger(opts = {}) {
  if (opts.quiet) state.level = LEVELS.quiet;
  else if (opts.verbose) state.level = LEVELS.verbose;
  else if (opts.quiet === false || opts.verbose === false) state.level = LEVELS.normal;

  if (typeof opts.json === 'boolean') state.json = opts.json;
  if (typeof opts.color === 'boolean') {
    state.colorOut = opts.color;
    state.colorErr = opts.color;
  }
  return getLoggerState();
}

/** Reset logger to defaults (mainly for tests). */
export function resetLogger() {
  state.level = LEVELS.normal;
  state.json = false;
  state.colorOut = supportsColor(proc?.stdout);
  state.colorErr = supportsColor(proc?.stderr);
}

/** Current logger state snapshot. */
export function getLoggerState() {
  return { ...state, levelName: Object.keys(LEVELS).find(k => LEVELS[k] === state.level) };
}

/**
 * Strip ANSI escape codes from a string.
 * @param {string} str
 */
export function stripAnsi(str) {
  return String(str).replace(/\u001b\[[0-9;]*m/g, '');
}

export const logger = {
  info: (msg) => {
    if (state.level < LEVELS.normal) return;
    const c = palette(false);
    out(`${prefix(false)} ${c.blue}ℹ${c.reset} ${msg}`);
  },

  success: (msg) => {
    if (state.level < LEVELS.normal) return;
    const c = palette(false);
    out(`${prefix(false)} ${c.green}✓${c.reset} ${msg}`);
  },

  /** Verbose-only output. */
  debug: (msg) => {
    if (state.level < LEVELS.verbose) return;
    const c = palette(false);
    out(`${prefix(false)} ${c.dim}·${c.reset} ${c.dim}${msg}${c.reset}`);
  },

  warn: (msg) => {
    if (state.level < LEVELS.normal) return;
    const c = palette(true);
    err(`${prefix(true)} ${c.yellow}⚠${c.reset} ${msg}`);
  },

  error: (msg) => {
    // Errors are always printed (even in --quiet), except in --json mode.
    const c = palette(true);
    err(`${prefix(true)} ${c.red}✗${c.reset} ${msg}`);
  },

  build: (msg) => {
    if (state.level < LEVELS.normal) return;
    const c = palette(false);
    out(`${prefix(false)} ${c.cyan}⚡${c.reset} ${msg}`);
  },

  watch: (msg) => {
    if (state.level < LEVELS.normal) return;
    const c = palette(false);
    out(`${prefix(false)} ${c.green}👁${c.reset} ${msg}`);
  },

  /**
   * Print a machine-readable JSON document to stdout. Ignores quiet/json state
   * on purpose — this IS the machine output.
   * @param {unknown} data
   */
  json: (data) => {
    console.log(JSON.stringify(data, null, 2));
  },

  configure: configureLogger,
  reset: resetLogger,
  getState: getLoggerState
};

export default logger;
