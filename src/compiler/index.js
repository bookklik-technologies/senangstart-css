import { mergeConfig } from '../config/defaults.js';
/**
 * SenangStart CSS - Main Compiler Orchestrator
 * Coordinates parsing, tokenizing, and generating output
 */

import { parseSource, parseMultipleSources } from './parser.js';
import { tokenizeAll } from './tokenizer.js';
import { generateCSSWithErrors, minifyCSS } from './generators/css.js';

/**
 * Log invalid tokens as warnings
 * @param {Array} tokens - Array of token objects
 */
function tokenDiagnostics(tokens) {
  return tokens.filter(token => token.error).map(token => ({
    raw: token.raw,
    attrType: token.attrType,
    code: token.errorCode || 'INVALID_TOKEN',
    message: token.error,
    error: token.error // legacy field
  }));
}

/**
 * Generate CSS and collect token + generation diagnostics (no console output).
 * @returns {{ css: string, errors: Object[] }}
 */
function generateWithDiagnostics(tokens, config) {
  const { css, errors: genErrors } = generateCSSWithErrors(tokens, config);
  const errors = tokenDiagnostics(tokens);
  for (const e of genErrors) {
    if (e && e.code && e.raw !== undefined) errors.push({ ...e, error: e.message });
  }
  return { css, errors };
}

/**
 * Accept a full config, a partial user config, or nothing (audit M9).
 * @param {Object} [config]
 * @returns {Object}
 */
function resolveConfig(config) {
  const t = config && config.theme;
  if (t && t.spacing && t.colors && t.screens) return config;
  return mergeConfig(config || {});
}

/**
 * Compile a single source string
 * @param {string} content - Source content
 * @param {Object} config - Configuration
 * @returns {Object} - Compilation results
 */
export function compileSource(content, config) {
  if (typeof content !== 'string') {
    throw new TypeError(`compileSource: content must be a string, got ${typeof content}`);
  }

  config = resolveConfig(config);
  const parsed = parseSource(content);
  const tokens = tokenizeAll(parsed, config);
  const { css, errors: diagnostics } = generateWithDiagnostics(tokens, config);
  const hasErrors = diagnostics.length > 0;

  return {
    tokens,
    css,
    errors: hasErrors ? diagnostics : null,
    minifiedCSS: !hasErrors && config.output?.minify ? minifyCSS(css) : null
  };
}

/**
 * Compile multiple source files
 * @param {Array<{path: string, content: string}>} files - Source files
 * @param {Object} config - Configuration
 * @returns {Object} - Compilation results
 */
export function compileMultiple(files, config) {
  if (!Array.isArray(files)) {
    throw new TypeError('compileMultiple expects an array of {path, content} objects');
  }
  for (let i = 0; i < files.length; i++) {
    const file = files[i];
    if (!file || typeof file.content !== 'string') {
      throw new TypeError(`files[${i}] must have a 'content' string property, got: ${typeof file?.content}`);
    }
  }

  config = resolveConfig(config);
  const parsed = parseMultipleSources(files);
  const tokens = tokenizeAll(parsed, config);
  const { css, errors: diagnostics } = generateWithDiagnostics(tokens, config);
  const hasErrors = diagnostics.length > 0;

  return {
    tokens,
    css,
    errors: hasErrors ? diagnostics : null,
    minifiedCSS: !hasErrors && config.output?.minify ? minifyCSS(css) : null
  };
}

export default { compileSource, compileMultiple };
