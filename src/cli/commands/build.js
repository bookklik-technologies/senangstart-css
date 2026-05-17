/**
 * SenangStart CSS - Build Command
 * One-time compilation of CSS from source files
 */

import { writeFileSync, mkdirSync, existsSync } from 'fs';
import { readdir, stat } from 'fs/promises';
import { join, dirname, resolve } from 'path';
import { defaultConfig, mergeConfig } from '../../config/defaults.js';
import { parseSource } from '../../compiler/parser.js';
import { tokenizeAll, tokenizeAllWithBatching } from '../../compiler/tokenizer.js';
import { generateCSS, minifyCSS } from '../../compiler/generators/css.js';
import { generateAIContext } from '../../compiler/generators/ai-context.js';
import { generateTypeScript } from '../../compiler/generators/typescript.js';
import logger from '../../utils/logger.js';
import { validateThemeValue, getMemoryUsage } from '../../utils/common.js';
import { readMultipleFilesWithTimeout } from '../../utils/node-io.js';

const SKIP_DIRS = new Set([
  'node_modules', 'dist', '.git', '.cache', '.next', '.nuxt', '.output',
  'coverage', '.nyc_output', '.turbo', '.vercel', 'build', '.build'
]);

/**
 * Parse glob patterns to extract scan directories and file extensions
 */
function parseContentPatterns(patterns) {
  if (!patterns || !Array.isArray(patterns) || patterns.length === 0) {
    // Fallback to defaults
    patterns = [
      './**/*.html',
      './src/**/*.{html,jsx,tsx,vue,svelte}',
      './pages/**/*.{html,jsx,tsx}',
      './components/**/*.{html,jsx,tsx}'
    ];
  }

  const dirExtensions = {}; // dir -> Set of extensions
  const walkAll = new Set(); // extensions to match in any directory

  for (const pattern of patterns) {
    // Extract extensions: match *.ext or *.{ext1,ext2,...}
    const extMatches = pattern.match(/\*\.(\w+)|\*\.\{([^}]+)\}/g);
    if (!extMatches) continue;

    const extensions = [];
    for (const m of extMatches) {
      const inner = m.replace(/^\*\.\{?/, '').replace(/\}$/, '');
      for (const ext of inner.split(',')) {
        extensions.push(ext.trim().toLowerCase());
      }
    }

    if (extensions.length === 0) continue;

    // Determine if this is a root-walk pattern (./**/*.ext) or scoped pattern (./dir/**/*.ext)
    const dirPart = pattern.split('/**/')[0];
    if (dirPart === '.' || dirPart === './' || dirPart === '') {
      // Walk from cwd
      for (const ext of extensions) {
        walkAll.add(ext);
      }
    } else {
      // Scoped to a directory
      const dir = dirPart.replace(/^\.\//, '');
      if (!dirExtensions[dir]) {
        dirExtensions[dir] = new Set();
      }
      for (const ext of extensions) {
        dirExtensions[dir].add(ext);
      }
    }
  }

  return { dirExtensions, walkAll };
}

/**
 * Find files matching content patterns
 */
async function findFiles(patterns) {
  const { dirExtensions, walkAll } = parseContentPatterns(patterns);
  const allFiles = [];
  const seen = new Set();

  async function walk(dir, allowedExts) {
    try {
      const entries = await readdir(dir);
      for (const entry of entries) {
        const fullPath = join(dir, entry);
        try {
          const statResult = await stat(fullPath);
          if (statResult.isDirectory()) {
            if (!entry.startsWith('.') && !SKIP_DIRS.has(entry)) {
              await walk(fullPath, allowedExts);
            }
          } else if (statResult.isFile()) {
            const ext = entry.split('.').pop().toLowerCase();
            if (allowedExts.has(ext) && !seen.has(fullPath)) {
              seen.add(fullPath);
              allFiles.push(fullPath);
            }
          }
        } catch (e) {
          // skip inaccessible files
        }
      }
    } catch (e) {
      // skip inaccessible directories
    }
  }

  for (const [subDir, extensions] of Object.entries(dirExtensions)) {
    const dirPath = join(process.cwd(), subDir);
    try {
      const statResult = await stat(dirPath);
      if (statResult.isDirectory()) {
        await walk(dirPath, extensions);
      }
    } catch (e) {
      // directory doesn't exist, skip
    }
  }

  if (walkAll.size > 0) {
    await walk(process.cwd(), walkAll);
  }

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
  const resolvedFilePath = resolve(fullPath);
  const cwdResolved = resolve(process.cwd());
  if (!resolvedFilePath.startsWith(cwdResolved)) {
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
  let hasErrors = false;
  
  logger.build('Starting build...');
  
  // Load config
  const config = await loadConfig(options.config || 'senangstart.config.js');
  
  // Override output path if specified
  if (options.output) {
    config.output.css = options.output;
  }
  
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
    throw new Error('No source files found matching content patterns. Aborting build.');
  }
  
  logger.info(`Found ${files.length} source files`);

  // Parse all files with timeout protection
  const allTokens = {
    layout: new Set(),
    space: new Set(),
    visual: new Set(),
    interact: new Set(),
    listens: new Set()
  };

  let failedFiles = 0;
  const fileReadResults = await readMultipleFilesWithTimeout(files, 5000);

  for (const { path: filePath, content, error } of fileReadResults) {
    if (error) {
      logger.warn(`Skipping ${filePath}: ${error.message}`);
      failedFiles++;
      continue;
    }

    try {
      const parsed = parseSource(content);

      parsed.layout.forEach(t => allTokens.layout.add(t));
      parsed.space.forEach(t => allTokens.space.add(t));
      parsed.visual.forEach(t => allTokens.visual.add(t));
      if (parsed.interact) parsed.interact.forEach(t => allTokens.interact.add(t));
      if (parsed.listens) parsed.listens.forEach(t => allTokens.listens.add(t));
    } catch (e) {
      logger.warn(`Could not parse ${filePath}: ${e.message}`);
      failedFiles++;
    }
  }

  // If every single file failed, that's a hard error
  if (failedFiles > 0 && failedFiles === files.length) {
    throw new Error('All source files failed to process. Aborting build.');
  }
  
  if (failedFiles > 0) {
    logger.warn(`${failedFiles} file(s) failed to process`);
  }

  // Calculate total token count
  const totalTokens = allTokens.layout.size + allTokens.space.size + allTokens.visual.size + allTokens.interact.size + allTokens.listens.size;
  logger.info(`Found ${totalTokens} unique token values`);

  // Check memory usage and decide whether to use batch processing
  const currentMemory = getMemoryUsage();
  const useBatching = totalTokens > 10000 || currentMemory > 200;

  // Tokenize
  let tokens;
  try {
    if (useBatching) {
      logger.info('Using batch processing for memory protection');
      tokens = await tokenizeAllWithBatching(allTokens, 1000);
    } else {
      tokens = tokenizeAll(allTokens);
    }
  } catch (e) {
    throw new Error(`Tokenization failed: ${e.message}`);
  }

  logger.info(`Generated ${tokens.length} tokens`);
  
  // Check for invalid tokens
  const invalidTokens = tokens.filter(token => token.error);
  if (invalidTokens.length > 0) {
    logger.warn(`${invalidTokens.length} error(s) found in source:`);
    for (const token of invalidTokens) {
      logger.warn(`  • ${token.raw} (${token.attrType}): ${token.error}`);
    }
  }
  
  // Generate CSS
  let css;
  try {
    css = generateCSS(tokens, config);
  } catch (e) {
    throw new Error(`CSS generation failed: ${e.message}`);
  }
  
  if (config.output.minify) {
    try {
      css = minifyCSS(css);
    } catch (e) {
      throw new Error(`CSS minification failed: ${e.message}`);
    }
  }
  
  // Write CSS
  const cssPath = join(process.cwd(), config.output.css);
  try {
    ensureDir(cssPath);
    writeFileSync(cssPath, css);
    logger.success(`Generated ${config.output.css}`);
  } catch (e) {
    logger.error(`Failed to write CSS: ${e.message}`);
    hasErrors = true;
  }
  
  // Generate AI context
  if (config.output.aiContext) {
    try {
      const aiContext = generateAIContext(config);
      const aiPath = join(process.cwd(), config.output.aiContext);
      ensureDir(aiPath);
      writeFileSync(aiPath, aiContext);
      logger.success(`Generated ${config.output.aiContext}`);
    } catch (e) {
      logger.error(`Failed to write AI context: ${e.message}`);
      hasErrors = true;
    }
  }
  
  // Generate TypeScript definitions
  if (config.output.typescript) {
    try {
      const tsTypes = generateTypeScript(config);
      const tsPath = join(process.cwd(), config.output.typescript);
      ensureDir(tsPath);
      writeFileSync(tsPath, tsTypes);
      logger.success(`Generated ${config.output.typescript}`);
    } catch (e) {
      logger.error(`Failed to write TypeScript definitions: ${e.message}`);
      hasErrors = true;
    }
  }
  
  const elapsed = Date.now() - startTime;
  logger.build(`Build completed in ${elapsed}ms`);
  
  if (hasErrors) {
    logger.warn('Build completed with warnings');
  }
}

export default build;
