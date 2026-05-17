/**
 * SenangStart CSS - Dev Command
 * Watch mode with live compilation
 */

import { createRequire } from 'module';
import chokidar from 'chokidar';
import { build } from './build.js';
import logger from '../../utils/logger.js';

const require = createRequire(import.meta.url);

/**
 * Dev command handler - watches files and rebuilds on changes
 */
export async function dev(options = {}) {
  logger.watch('Starting development mode...');

  let consecutiveErrors = 0;
  let lastErrorTime = 0;
  const MAX_CONSECUTIVE_ERRORS = 5;
  const COOLDOWN_DURATION = 30000;

  let buildInProgress = false;
  let pendingBuild = false;
  let debounceTimer = null;

  async function runBuild() {
    if (consecutiveErrors >= MAX_CONSECUTIVE_ERRORS) {
      const timeSinceLastError = Date.now() - lastErrorTime;
      if (timeSinceLastError < COOLDOWN_DURATION) {
        const cooldownRemaining = Math.ceil((COOLDOWN_DURATION - timeSinceLastError) / 1000);
        logger.warn(`Cooldown active: ${cooldownRemaining}s remaining. Skipping build.`);
        return;
      }
      consecutiveErrors = 0;
    }

    try {
      await build(options);
      consecutiveErrors = 0;
    } catch (error) {
      consecutiveErrors++;
      lastErrorTime = Date.now();
      logger.error(`Build failed (${consecutiveErrors}/${MAX_CONSECUTIVE_ERRORS}): ${error.message}`);

      if (consecutiveErrors >= MAX_CONSECUTIVE_ERRORS) {
        logger.warn(`Maximum consecutive errors (${MAX_CONSECUTIVE_ERRORS}) reached.`);
        logger.warn(`Entering ${COOLDOWN_DURATION / 1000}s cooldown to prevent resource exhaustion.`);
      }
    }
  }

  async function debouncedBuild() {
    if (buildInProgress) {
      pendingBuild = true;
      return;
    }

    if (debounceTimer) {
      clearTimeout(debounceTimer);
    }

    debounceTimer = setTimeout(async () => {
      buildInProgress = true;
      logger.watch('Change detected, rebuilding...');
      try {
        await runBuild();
      } finally {
        buildInProgress = false;
      }

      if (pendingBuild) {
        pendingBuild = false;
        debouncedBuild();
      }
    }, 100);
  }

  const configPatterns = [
    'senangstart.config.js',
    'senangstart.config.mjs',
    'senangstart.config.cjs'
  ];

  const watchPatterns = [
    './**/*.html',
    './**/*.htm',
    './src/**/*.{html,jsx,tsx,vue,svelte}',
    './pages/**/*.{html,jsx,tsx}',
    './components/**/*.{html,jsx,tsx,vue,svelte}',
    ...configPatterns
  ];

  const ignorePatterns = [
    '**/node_modules/**',
    '**/dist/**',
    '**/.git/**',
    '**/public/**'
  ];

  function handleChange(path) {
    const isConfig = configPatterns.some(p => path.endsWith(p));
    if (isConfig) {
      logger.watch(`Config changed: ${path} — full rebuild required`);
      try {
        const resolved = require.resolve(path);
        delete require.cache[resolved];
      } catch (e) {
        // Config may use native ESM — cache clear is best-effort
      }
    } else {
      logger.info(`Changed: ${path}`);
    }
    debouncedBuild();
  }

  function setupWatcher(w) {
    return w
      .on('change', handleChange)
      .on('add', (path) => {
        logger.info(`Added: ${path}`);
        debouncedBuild();
      })
      .on('unlink', (path) => {
        logger.info(`Removed: ${path}`);
        debouncedBuild();
      })
      .on('error', (error) => {
        logger.error(`Watcher error: ${error.message}`);
        consecutiveErrors++;
        lastErrorTime = Date.now();
      });
  }

  let watcher = setupWatcher(chokidar.watch(watchPatterns, {
    ignored: ignorePatterns,
    persistent: true,
    ignoreInitial: true
  }));

  // Graceful shutdown
  function shutdown() {
    logger.watch('Shutting down...');
    if (debounceTimer) clearTimeout(debounceTimer);
    watcher.close().then(() => {
      process.exit(0);
    }).catch(() => {
      process.exit(0);
    });
  }

  process.on('SIGINT', shutdown);
  process.on('SIGTERM', shutdown);

  // Initial build
  await runBuild();

  logger.watch('Watching for changes... (Ctrl+C to stop)');
}

export default dev;