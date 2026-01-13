/**
 * SenangStart CSS - Build Command
 * One-time compilation of CSS from source files
 */

import { readFileSync, writeFileSync, mkdirSync, existsSync, readdirSync, statSync } from 'fs';
import { join, dirname, resolve } from 'path';
import { defaultConfig, mergeConfig } from '../../config/defaults.js';
import { parseSource } from '../../compiler/parser.js';
import { tokenizeAll } from '../../compiler/tokenizer.js';
import { generateCSS, minifyCSS } from '../../compiler/generators/css.js';
import { generateAIContext } from '../../compiler/generators/ai-context.js';
import { generateTypeScript } from '../../compiler/generators/typescript.js';
import logger from '../../utils/logger.js';

/**
 * Find files matching content patterns
 */
function findFiles(patterns) {
  const allFiles = [];
  const extensions = ['html', 'htm', 'jsx', 'tsx', 'vue', 'svelte'];
  
  function walk(dir) {
    try {
      const entries = readdirSync(dir);
      for (const entry of entries) {
        const fullPath = join(dir, entry);
        try {
          const stat = statSync(fullPath);
          if (stat.isDirectory()) {
            if (!entry.startsWith('.') && entry !== 'node_modules' && entry !== 'dist') {
              walk(fullPath);
            }
          } else if (stat.isFile()) {
            const ext = entry.split('.').pop().toLowerCase();
            if (extensions.includes(ext)) {
              allFiles.push(fullPath);
            }
          }
        } catch (e) {
          logger.debug(`Skipping file: ${entry} - ${e.message}`);
        }
      }
    } catch (e) {
      logger.debug(`Skipping directory: ${dir} - ${e.message}`);
    }
  }
  
  walk(process.cwd());
  return allFiles;
}

/**
 * Load user config with path traversal protection
 */
async function loadConfig(configPath) {
  const fullPath = join(process.cwd(), configPath);

  if (!existsSync(fullPath)) {
    logger.warn('No config file found, using defaults');
    return defaultConfig;
  }

  // Validate path is within allowed directory
  const resolvedPath = dirname(fullPath);
  const cwdResolved = resolve(process.cwd());
  if (!resolvedPath.startsWith(cwdResolved)) {
    logger.error(`Invalid config path: ${configPath}`);
    return defaultConfig;
  }

  try {
    const userConfig = await import('file://' + fullPath);
    return mergeConfig(userConfig.default || userConfig);
  } catch (e) {
    logger.error(`Failed to load config: ${e.message}`);
    return defaultConfig;
  }
}

/**
 * Ensure directory exists
 */
function ensureDir(filePath) {
  const dir = dirname(filePath);
  if (!existsSync(dir)) {
    mkdirSync(dir, { recursive: true });
  }
}

/**
 * Build command handler
 */
export async function build(options = {}) {
  const startTime = Date.now();
  
  logger.build('Starting build...');
  
  // Load config
  const config = await loadConfig(options.config || 'senangstart.config.js');
  
  // Override minify if specified
  if (options.minify) {
    config.output.minify = true;
  }
  
  // Override preflight if specified (Commander converts --no-preflight to preflight: false)
  if (options.preflight === false) {
    config.preflight = false;
  }
  
  // Find source files
  const files = await findFiles(config.content);
  
  if (files.length === 0) {
    logger.warn('No source files found');
    return;
  }
  
  logger.info(`Found ${files.length} source files`);
  
  // Parse all files
  const allTokens = {
    layout: new Set(),
    space: new Set(),
    visual: new Set()
  };
  
  for (const filePath of files) {
    try {
      const content = readFileSync(filePath, 'utf-8');
      const parsed = parseSource(content);
      
      parsed.layout.forEach(t => allTokens.layout.add(t));
      parsed.space.forEach(t => allTokens.space.add(t));
      parsed.visual.forEach(t => allTokens.visual.add(t));
    } catch (e) {
      logger.warn(`Could not parse ${filePath}`);
    }
  }
  
  // Tokenize
  const tokens = tokenizeAll(allTokens);
  
  logger.info(`Extracted ${tokens.length} unique tokens`);
  
  // Generate CSS
  let css = generateCSS(tokens, config);
  
  if (config.output.minify) {
    css = minifyCSS(css);
  }
  
  // Write CSS
  const cssPath = join(process.cwd(), config.output.css);
  ensureDir(cssPath);
  writeFileSync(cssPath, css);
  logger.success(`Generated ${config.output.css}`);
  
  // Generate AI context
  if (config.output.aiContext) {
    const aiContext = generateAIContext(config);
    const aiPath = join(process.cwd(), config.output.aiContext);
    ensureDir(aiPath);
    writeFileSync(aiPath, aiContext);
    logger.success(`Generated ${config.output.aiContext}`);
  }
  
  // Generate TypeScript definitions
  if (config.output.typescript) {
    const tsTypes = generateTypeScript(config);
    const tsPath = join(process.cwd(), config.output.typescript);
    ensureDir(tsPath);
    writeFileSync(tsPath, tsTypes);
    logger.success(`Generated ${config.output.typescript}`);
  }
  
  const elapsed = Date.now() - startTime;
  logger.build(`Build completed in ${elapsed}ms`);
}

export default build;
