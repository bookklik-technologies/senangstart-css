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
 * Compile a single source string
 * @param {string} content - Source content
 * @param {Object} config - Configuration
 * @returns {Object} - Compilation results
 */
export function compileSource(content, config) {
  const parsed = parseSource(content);
  const tokens = tokenizeAll(parsed);
  const css = generateCSS(tokens, config);
  
  return {
    tokens,
    css,
    minifiedCSS: config.output?.minify ? minifyCSS(css) : null
  };
}

/**
 * Compile multiple source files
 * @param {Array<{path: string, content: string}>} files - Source files
 * @param {Object} config - Configuration
 * @returns {Object} - Compilation results
 */
export function compileMultiple(files, config) {
  const parsed = parseMultipleSources(files);
  const tokens = tokenizeAll(parsed);
  const css = generateCSS(tokens, config);
  
  return {
    tokens,
    css,
    minifiedCSS: config.output?.minify ? minifyCSS(css) : null,
    aiContext: generateAIContext(config),
    typescript: generateTypeScript(config)
  };
}

export default { compileSource, compileMultiple };
