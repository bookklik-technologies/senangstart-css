/**
 * SenangStart CSS - Core API
 * Exporting the compiler engine for programmatic usage
 */

// Core Tokenizer
import { tokenize, tokenizeAll } from './core/tokenizer-core.js';

// Parsers
import { parseSource, parseMultipleSources } from './compiler/parser.js';

// Generators
import { generateCSS, generateCSSVariables } from './compiler/generators/css.js';
import { generatePreflight } from './compiler/generators/preflight.js';

// Configuration
import { defaultConfig, mergeConfig } from './config/defaults.js';

// Constants
import * as constants from './core/constants.js';

// High-level Compiler
import { compileSource, compileMultiple } from './compiler/index.js';

export {
  // Core
  tokenize,
  tokenizeAll,
  parseSource,
  parseMultipleSources,
  
  // Generators
  generateCSS,
  generateCSSVariables,
  generatePreflight,
  
  // High-level
  compileSource,
  compileMultiple,
  
  // Configuration
  defaultConfig,
  mergeConfig,
  
  // Constants
  constants
};
