/**
 * SenangStart CSS - Main Compiler Orchestrator
 * Coordinates parsing, tokenizing, and generating output
 */

import { parseSource, parseMultipleSources } from './parser.js';
import { tokenizeAll } from './tokenizer.js';
import { generateCSS, minifyCSS } from './generators/css.js';
import { generateAIContext } from './generators/ai-context.js';
import { generateTypeScript } from './generators/typescript.js';

/**
 * Log invalid tokens as warnings
 * @param {Array} tokens - Array of token objects
 */
function logInvalidTokens(tokens) {
  const invalidTokens = tokens.filter(token => token.error);
  if (invalidTokens.length > 0 && typeof console !== 'undefined') {
    console.warn(`\n${invalidTokens.length} error(s) found in source:`);
    for (const token of invalidTokens) {
      console.warn(`  • ${token.raw} (${token.attrType}): ${token.error}`);
    }
  }
  return invalidTokens;
}

/**
 * Compile a single source string
 * @param {string} content - Source content
 * @param {Object} config - Configuration
 * @returns {Object} - Compilation results
 */
export function compileSource(content, config) {
  const parsed = parseSource(content);
  const tokens = tokenizeAll(parsed);
  const invalidTokens = logInvalidTokens(tokens);
  
  const css = generateCSS(tokens, config);
  const hasErrors = invalidTokens.length > 0;
  
  return {
    tokens,
    css,
    errors: hasErrors ? invalidTokens : null,
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

  const parsed = parseMultipleSources(files);
  const tokens = tokenizeAll(parsed);
  const invalidTokens = logInvalidTokens(tokens);
  
  const css = generateCSS(tokens, config);
  const hasErrors = invalidTokens.length > 0;
  
  return {
    tokens,
    css,
    errors: hasErrors ? invalidTokens : null,
    minifiedCSS: !hasErrors && config.output?.minify ? minifyCSS(css) : null
  };
}

export default { compileSource, compileMultiple };
