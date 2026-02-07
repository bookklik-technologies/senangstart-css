/**
 * SenangStart CSS - Dev Command
 * Watch mode with live compilation
 */

import chokidar from 'chokidar';
import { build } from './build.js';
import logger from '../../utils/logger.js';

/**
 * Dev command handler - watches files and rebuilds on changes
 */
export async function dev(options = {}) {
  logger.watch('Starting development mode...');

  // Error tracking for cooldown mechanism
  let consecutiveErrors = 0;
  let lastErrorTime = 0;
  const MAX_CONSECUTIVE_ERRORS = 5;
  const COOLDOWN_DURATION = 30000; // 30 seconds

  // Build lock to prevent overlapping builds
  let buildInProgress = false;
  let pendingBuild = false;

  async function runBuild() {
    // Check if we're in cooldown
    if (consecutiveErrors >= MAX_CONSECUTIVE_ERRORS) {
      const timeSinceLastError = Date.now() - lastErrorTime;
      if (timeSinceLastError < COOLDOWN_DURATION) {
        const cooldownRemaining = Math.ceil((COOLDOWN_DURATION - timeSinceLastError) / 1000);
        logger.warn(`Cooldown active: ${cooldownRemaining}s remaining. Skipping build.`);
        return;
      }
      // Cooldown expired, reset error count
      consecutiveErrors = 0;
    }

    try {
      await build(options);
      // Reset error count on successful build
      consecutiveErrors = 0;
    } catch (error) {
      consecutiveErrors++;
      lastErrorTime = Date.now();
      logger.error(`Build failed (${consecutiveErrors}/${MAX_CONSECUTIVE_ERRORS}): ${error.message}`);

      // Enter cooldown if max errors reached
      if (consecutiveErrors >= MAX_CONSECUTIVE_ERRORS) {
        logger.warn(`Maximum consecutive errors (${MAX_CONSECUTIVE_ERRORS}) reached.`);
        logger.warn(`Entering ${COOLDOWN_DURATION / 1000}s cooldown to prevent resource exhaustion.`);
      }
    }
  }

  // Initial build
  await runBuild();

  function createWatcher() {
    // Watch patterns
    const watchPatterns = [
      './**/*.html',
      './**/*.htm',
      './src/**/*.{html,jsx,tsx,vue,svelte}',
      './pages/**/*.{html,jsx,tsx}',
      './components/**/*.{html,jsx,tsx,vue,svelte}'
    ];

    // Ignore patterns
    const ignorePatterns = [
      '**/node_modules/**',
      '**/dist/**',
      '**/.git/**',
      '**/public/**'
    ];

    // Create watcher
    const watcher = chokidar.watch(watchPatterns, {
      ignored: ignorePatterns,
      persistent: true,
      ignoreInitial: true
    });

    // Handle watcher errors
    watcher.on('error', (error) => {
      logger.error(`Watcher error: ${error.message}`);
      consecutiveErrors++;
      lastErrorTime = Date.now();

      // Try to restart watcher after error
      logger.info('Attempting to restart watcher...');
      try {
        watcher.close();
        setTimeout(() => {
          const newWatcher = createWatcher();
          Object.assign(watcher, newWatcher);
          logger.success('Watcher restarted successfully');
        }, 1000);
      } catch (restartError) {
        logger.error(`Failed to restart watcher: ${restartError.message}`);
      }
    });

    return watcher;
  }

  // Initialize watcher
  const watcher = createWatcher();

  // Debounce timer
  let debounceTimer = null;

  async function debouncedBuild() {
    if (buildInProgress) {
      pendingBuild = true;
      return;
    }

    buildInProgress = true;

    if (debounceTimer) {
      clearTimeout(debounceTimer);
    }

    debounceTimer = setTimeout(async () => {
      logger.watch('Change detected, rebuilding...');
      await runBuild();
      buildInProgress = false;

      // Handle pending build
      if (pendingBuild) {
        pendingBuild = false;
        debouncedBuild();
      }
    }, 100);
  }

  // Watch events
  watcher
    .on('change', (path) => {
      logger.info(`Changed: ${path}`);
      debouncedBuild();
    })
    .on('add', (path) => {
      logger.info(`Added: ${path}`);
      debouncedBuild();
    })
    .on('unlink', (path) => {
      logger.info(`Removed: ${path}`);
      debouncedBuild();
    });

  logger.watch('Watching for changes... (Ctrl+C to stop)');
}

export default dev;

