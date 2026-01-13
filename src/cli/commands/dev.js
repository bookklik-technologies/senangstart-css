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

  // Build lock to prevent overlapping builds
  let buildInProgress = false;
  let pendingBuild = false;

  // Initial build
  await build(options);

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
      await build(options);
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
