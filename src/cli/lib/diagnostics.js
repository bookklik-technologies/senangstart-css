/**
 * SenangStart CSS - Diagnostics normalisation & printing
 *
 * The engine is moving from token objects with `.raw/.error` (and generator
 * errors `{ type, token, message }`) to structured diagnostics
 * `{ raw, attrType, code, message, suggestion? }`. This module accepts BOTH
 * shapes and produces one normalised form:
 *
 *   { raw, attrType, code, message, suggestion?, file?, line?, level }
 */

import logger from '../../utils/logger.js';

/**
 * @typedef {Object} Diagnostic
 * @property {string} raw
 * @property {string|undefined} attrType
 * @property {string} code
 * @property {string} message
 * @property {string} [suggestion]
 * @property {string} [file]
 * @property {number} [line]
 * @property {'error'|'warning'} level
 */

/**
 * Normalise any known error shape into a Diagnostic.
 * @param {unknown} input
 * @param {{ level?: 'error'|'warning' }} [opts]
 * @returns {Diagnostic|null} null for shapes that carry no token (config-level noise)
 */
export function normalizeDiagnostic(input, opts = {}) {
  const level = opts.level || 'error';
  if (input === null || input === undefined) return null;

  if (typeof input === 'string') {
    return { raw: '', attrType: undefined, code: 'error', message: input, level };
  }

  if (typeof input !== 'object') {
    return { raw: String(input), attrType: undefined, code: 'error', message: String(input), level };
  }

  // New shape: { raw, attrType, code, message, suggestion? }
  if (typeof input.code === 'string' && typeof input.message === 'string' && 'raw' in input) {
    return {
      raw: String(input.raw ?? ''),
      attrType: input.attrType,
      code: input.code,
      message: input.message,
      suggestion: input.suggestion || undefined,
      file: input.file || undefined,
      line: typeof input.line === 'number' ? input.line : undefined,
      level: input.level === 'warning' ? 'warning' : level
    };
  }

  // Old tokenizer shape: token object with .error
  if (typeof input.error === 'string' && 'raw' in input) {
    return {
      raw: String(input.raw ?? ''),
      attrType: input.attrType,
      code: 'invalid-token',
      message: input.error,
      suggestion: input.suggestion || undefined,
      level
    };
  }

  // Old generator shape: { type, token, message }
  if ('token' in input && input.token !== undefined && input.token !== null) {
    const raw = typeof input.token === 'string' ? input.token : (input.token.raw ?? String(input.token));
    return {
      raw: String(raw),
      attrType: input.attrType || (typeof input.token === 'object' ? input.token.attrType : undefined),
      code: input.type || 'generation-error',
      message: input.message || 'Unknown error',
      suggestion: input.suggestion || undefined,
      level
    };
  }

  // Generic { type, message } without token → not a token diagnostic
  if (typeof input.message === 'string') {
    return { raw: '', attrType: undefined, code: input.type || input.code || 'error', message: input.message, level };
  }

  return null;
}

/**
 * Normalise a list of mixed-shape errors.
 * @param {unknown[]} list
 * @param {{ level?: 'error'|'warning' }} [opts]
 * @returns {Diagnostic[]}
 */
export function normalizeDiagnostics(list, opts = {}) {
  if (!Array.isArray(list)) return [];
  return list.map(d => normalizeDiagnostic(d, opts)).filter(Boolean);
}

/**
 * Format one diagnostic as "file:line token → message (did you mean X?)".
 * @param {Diagnostic} d
 * @param {{ cwd?: string }} [opts]
 */
export function formatDiagnostic(d, opts = {}) {
  const parts = [];
  if (d.file) {
    let file = d.file;
    if (opts.cwd && file.startsWith(opts.cwd)) {
      file = file.slice(opts.cwd.length).replace(/^[\\/]/, '');
    }
    file = file.replace(/\\/g, '/');
    parts.push(d.line ? `${file}:${d.line}` : file);
  }
  const token = d.raw ? `${d.raw}${d.attrType ? ` (${d.attrType})` : ''}` : '';
  if (token) parts.push(token);
  let line = parts.join(' ');
  line += (line ? ' → ' : '') + d.message;
  if (d.suggestion) line += ` (did you mean ${d.suggestion}?)`;
  return line;
}

/**
 * Print diagnostics through the logger with a summary line.
 *
 * @param {Diagnostic[]} diagnostics
 * @param {{ ignoreInvalid?: boolean, cwd?: string }} [opts]
 *   ignoreInvalid: downgrade errors to warnings
 * @returns {{ errors: number, warnings: number }}
 */
export function printDiagnostics(diagnostics, opts = {}) {
  const list = Array.isArray(diagnostics) ? diagnostics : [];
  let errors = 0;
  let warnings = 0;

  for (const d of list) {
    const asWarning = opts.ignoreInvalid || d.level === 'warning';
    if (asWarning) {
      warnings++;
      logger.warn(`  • ${formatDiagnostic(d, opts)}`);
    } else {
      errors++;
      logger.error(`  • ${formatDiagnostic(d, opts)}`);
    }
  }

  if (errors > 0 || warnings > 0) {
    const summary = [];
    if (errors > 0) summary.push(`${errors} error${errors === 1 ? '' : 's'}`);
    if (warnings > 0) summary.push(`${warnings} warning${warnings === 1 ? '' : 's'}`);
    (errors > 0 ? logger.error : logger.warn)(`${summary.join(', ')} found in source${opts.ignoreInvalid ? ' (ignored via --ignore-invalid)' : ''}`);
  }

  return { errors, warnings };
}

export default { normalizeDiagnostic, normalizeDiagnostics, formatDiagnostic, printDiagnostics };
