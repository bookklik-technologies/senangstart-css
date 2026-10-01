/**
 * SenangStart CSS - Dev Command (CLI wrapper)
 *
 * Thin wrapper over `watch()` from `src/node.js`:
 *   - watches exactly the resolved config.content globs + the config file
 *   - debounced rebuilds, fresh config on config change
 *   - errors are printed, never crash the process
 *   - SIGINT / SIGTERM close the watcher and exit 0
 */

import { watch, ConfigError } from '../../node.js';
import logger, { configureLogger } from '../../utils/logger.js';
import { toBuildOptions, reportBuild } from './build.js';

/**
 * Dev command handler - watches files and rebuilds on changes.
 * @param {Object} options - commander options
 * @param {{ exitOnSignal?: boolean }} [hooks] - test hook: set exitOnSignal=false to avoid process.exit
 * @returns {Promise<{ close(): Promise<void> }>}
 */
export async function dev(options = {}, hooks = {}) {
  if (options.quiet !== undefined || options.verbose !== undefined) {
    configureLogger({ quiet: !!options.quiet, verbose: !!options.verbose });
  }
  const cwd = options.cwd || process.cwd();
  const buildOptions = toBuildOptions({ ...options, watch: true });

  logger.watch('Starting development mode...');

  let consecutiveErrors = 0;
  const MAX_CONSECUTIVE_ERRORS = 5;

  const watcher = await watch(buildOptions, (result, error, meta = {}) => {
    if (meta.event === 'config') {
      logger.watch(`Config changed: ${meta.path} — reloading config`);
    } else if (meta.event && meta.event !== 'initial' && meta.event !== 'watcher-error') {
      logger.watch(`Change detected (${meta.event}): ${meta.path}`);
    }

    if (error) {
      consecutiveErrors++;
      if (meta.event === 'watcher-error') {
        logger.error(`Watcher error: ${error.message}`);
      } else if (error instanceof ConfigError) {
        logger.error(error.message);
        logger.info('Fix the config file and save it to retry.');
      } else {
        logger.error(`Build failed (${consecutiveErrors}/${MAX_CONSECUTIVE_ERRORS}): ${error.message}`);
      }
      if (consecutiveErrors >= MAX_CONSECUTIVE_ERRORS) {
        logger.warn(`${consecutiveErrors} consecutive failures — still watching, but check your setup.`);
      }
      return;
    }

    consecutiveErrors = 0;
    reportBuild(result, { cwd, ignoreInvalid: options.ignoreInvalid === true });
    if (!result.ok) {
      logger.warn(`${result.errors.length} invalid token(s) — output written, fix them to clear the errors.`);
    }
  });

  logger.watch('Watching for changes... (Ctrl+C to stop)');

  const exitOnSignal = hooks.exitOnSignal !== false;
  let shuttingDown = false;
  const shutdown = async (signal) => {
    if (shuttingDown) return;
    shuttingDown = true;
    logger.watch(`Received ${signal}, shutting down...`);
    try {
      await watcher.close();
    } catch {
      // ignore
    }
    process.off('SIGINT', onSigint);
    process.off('SIGTERM', onSigterm);
    if (exitOnSignal) process.exit(0);
  };
  const onSigint = () => { shutdown('SIGINT'); };
  const onSigterm = () => { shutdown('SIGTERM'); };
  process.on('SIGINT', onSigint);
  process.on('SIGTERM', onSigterm);

  return {
    async close() {
      process.off('SIGINT', onSigint);
      process.off('SIGTERM', onSigterm);
      await watcher.close();
    }
  };
}

export default dev;
