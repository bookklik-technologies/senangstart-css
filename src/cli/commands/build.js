/**
 * SenangStart CSS - Build Command (CLI wrapper)
 *
 * Thin wrapper over the programmatic API in `src/node.js`:
 *   - maps CLI flags → BuildOptions
 *   - prints diagnostics (old + new engine error shapes)
 *   - sets the process exit code (1 on errors, 0 with --ignore-invalid)
 *   - `--json` prints a machine-readable summary on stdout
 */

import { relative } from 'path';
import { build as buildCSS, ConfigError } from '../../node.js';
import logger, { configureLogger } from '../../utils/logger.js';
import { printDiagnostics } from '../lib/diagnostics.js';

export { isPathInsideRoot } from '../../utils/node-io.js';

/**
 * Convert CLI options (commander) into programmatic BuildOptions.
 * @param {Object} options
 */
export function toBuildOptions(options = {}) {
  const buildOptions = {
    cwd: options.cwd,
    config: options.config,
    output: options.output,
    fresh: options.watch === true || options.fresh === true
  };
  if (options.minify === true) buildOptions.minify = true;
  if (options.preflight === false) buildOptions.preflight = false;
  if (options.ignoreInvalid === true) buildOptions.ignoreInvalid = true;
  if (Array.isArray(options.content) && options.content.length > 0) buildOptions.content = options.content;
  if (Array.isArray(options.safelist) && options.safelist.length > 0) buildOptions.safelist = options.safelist;
  return buildOptions;
}

function displayPath(p, cwd) {
  if (!p) return p;
  const rel = relative(cwd, p);
  return rel && !rel.startsWith('..') ? rel : p;
}

/**
 * Shape a BuildResult into the --json summary document.
 * @param {import('../../node.js').BuildResult} result
 * @param {string} cwd
 */
export function toJsonSummary(result, cwd) {
  return {
    ok: result.ok,
    durationMs: result.durationMs,
    files: result.files.map(f => displayPath(f, cwd)),
    fileCount: result.files.length,
    tokenCount: result.tokenCount,
    cssBytes: Buffer.byteLength(result.css, 'utf-8'),
    outputs: {
      css: result.outputs.css ? displayPath(result.outputs.css, cwd) : null,
      aiContext: result.outputs.aiContext ? displayPath(result.outputs.aiContext, cwd) : null,
      typescript: result.outputs.typescript ? displayPath(result.outputs.typescript, cwd) : null,
      skipped: result.outputs.skipped.map(s => ({ ...s, path: displayPath(s.path, cwd) }))
    },
    errors: result.errors.map(d => ({ ...d, file: d.file ? displayPath(d.file, cwd) : undefined })),
    warnings: result.warnings.map(d => ({ ...d, file: d.file ? displayPath(d.file, cwd) : undefined })),
    configPath: result.configPath ? displayPath(result.configPath, cwd) : null
  };
}

/**
 * Print a human-readable report for a build result.
 * @param {import('../../node.js').BuildResult} result
 * @param {{ cwd: string, ignoreInvalid?: boolean }} ctx
 */
export function reportBuild(result, ctx) {
  const { cwd } = ctx;
  logger.info(`Found ${result.files.length} source file${result.files.length === 1 ? '' : 's'}`);
  logger.debug(result.files.map(f => `  ${displayPath(f, cwd)}`).join('\n'));
  logger.info(`Generated ${result.tokenCount} tokens`);

  // Non-token warnings (config, file reads, protected outputs)
  const tokenWarnings = result.warnings.filter(w => w.raw);
  const otherWarnings = result.warnings.filter(w => !w.raw);
  for (const w of otherWarnings) {
    if (w.code === 'output-protected' || w.code === 'output-failed') {
      logger.error(w.message);
    } else {
      logger.warn(w.message);
    }
  }

  const ignoreInvalid = ctx.ignoreInvalid === true || (result.config?.build?.ignoreInvalid === true);
  printDiagnostics([...result.errors, ...tokenWarnings], { cwd, ignoreInvalid });

  if (result.outputs.css) logger.success(`Generated ${displayPath(result.outputs.css, cwd)}`);
  if (result.outputs.aiContext) logger.success(`Generated ${displayPath(result.outputs.aiContext, cwd)}`);
  if (result.outputs.typescript) logger.success(`Generated ${displayPath(result.outputs.typescript, cwd)}`);
  logger.build(`Build completed in ${result.durationMs}ms`);
}

/**
 * Build command handler.
 * @param {Object} options - commander options (+ watch: true when called from dev)
 * @returns {Promise<import('../../node.js').BuildResult|null>}
 */
export async function build(options = {}) {
  if (options.quiet !== undefined || options.verbose !== undefined || options.json !== undefined) {
    configureLogger({ quiet: !!options.quiet, verbose: !!options.verbose, json: !!options.json });
  }
  const cwd = options.cwd || process.cwd();
  const buildOptions = toBuildOptions(options);

  logger.build('Starting build...');

  let result;
  try {
    result = await buildCSS(buildOptions);
  } catch (error) {
    if (options.watch) {
      // dev mode: surface and keep running
      throw error;
    }
    if (options.json) {
      logger.json({ ok: false, error: { name: error.name, code: error.code, message: error.message } });
    } else if (error instanceof ConfigError) {
      logger.error(error.message);
    } else {
      logger.error(`Build failed: ${error.message}`);
    }
    process.exitCode = 1;
    return null;
  }

  if (result.configPath) {
    logger.debug(`Using config ${displayPath(result.configPath, cwd)}`);
  } else if (!buildOptions.config) {
    logger.info('No config file found, using defaults');
  }

  if (options.json) {
    logger.json(toJsonSummary(result, cwd));
  } else {
    reportBuild(result, { cwd, ignoreInvalid: options.ignoreInvalid === true });
  }

  // Fail the build (non-zero exit) when invalid tokens were found.
  // In watch mode (dev), the process stays alive — errors are surfaced via
  // the logger and the exit code is not set.
  if (!result.ok && !options.watch) {
    logger.error(`Build failed: ${result.errors.length} invalid token(s). Fix the errors above or pass --ignore-invalid.`);
    process.exitCode = 1;
  }

  return result;
}

export default build;
