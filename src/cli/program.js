/**
 * SenangStart CSS - CLI program definition (commander)
 *
 * Importing this module has NO side effects: it only builds and exports the
 * commander program. The bin entry (`src/cli/index.js`) calls `program.parse()`.
 */

import { readFileSync } from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
import { Command } from 'commander';
import { init } from './commands/init.js';
import { build } from './commands/build.js';
import { dev } from './commands/dev.js';
import { convert } from './commands/convert.js';
import { configureLogger } from '../utils/logger.js';

const __dirname = dirname(fileURLToPath(import.meta.url));

/** Read the package version (falls back to 0.0.0 if package.json is unreadable). */
export function getVersion() {
  try {
    const pkg = JSON.parse(readFileSync(join(__dirname, '..', '..', 'package.json'), 'utf-8'));
    return pkg.version || '0.0.0';
  } catch {
    return '0.0.0';
  }
}

/**
 * Apply global logging flags before any command action runs.
 * @param {Command} cmd
 */
function applyGlobalFlags(cmd) {
  const opts = cmd.optsWithGlobals ? cmd.optsWithGlobals() : cmd.opts();
  configureLogger({
    quiet: Boolean(opts.quiet),
    verbose: Boolean(opts.verbose),
    json: Boolean(opts.json),
    ...(opts.color === false ? { color: false } : {})
  });
}

/**
 * Create a fresh commander program.
 * @returns {Command}
 */
export function createProgram() {
  const program = new Command();

  program
    .name('senangstart')
    .description('SenangStart CSS - The Intent-First CSS Engine\n\n  "Speak Human. Compile to Logic."')
    .version(getVersion())
    .option('-q, --quiet', 'Only print errors')
    .option('--verbose', 'Print debug output')
    .option('--json', 'Print a machine-readable JSON summary (build only)')
    .option('--no-color', 'Disable ANSI colors (NO_COLOR env is also respected)')
    .hook('preAction', (thisCommand, actionCommand) => applyGlobalFlags(actionCommand));

  program
    .command('init')
    .description('Create a senangstart.config.mjs (or .js in ESM packages)')
    .option('-f, --force', 'Overwrite an existing config file')
    .option('--js', 'Write senangstart.config.js regardless of package type')
    .action((opts) => init(opts));

  program
    .command('build')
    .description('Compile CSS from source files')
    .option('--minify', 'Minify CSS output')
    .option('--no-preflight', 'Exclude Preflight base styles')
    .option('--ignore-invalid', 'Warn instead of failing on invalid tokens')
    .option('-c, --config <path>', 'Path to config file (default: auto-discover senangstart.config.{js,mjs,cjs,json})')
    .option('-o, --output <path>', 'Output CSS file path (relative to cwd or absolute)')
    .option('--content <glob...>', 'Override content globs')
    .option('--safelist <token...>', 'Extra tokens to always include (e.g. visual=bg:primary)')
    .option('--cwd <dir>', 'Project root (default: current directory)')
    .action((opts, cmd) => build({ ...opts, ...pickGlobals(cmd) }));

  program
    .command('dev')
    .description('Watch mode with live compilation')
    .option('--no-preflight', 'Exclude Preflight base styles')
    .option('--ignore-invalid', 'Warn instead of failing on invalid tokens')
    .option('-c, --config <path>', 'Path to config file (default: auto-discover)')
    .option('-o, --output <path>', 'Output CSS file path')
    .option('--content <glob...>', 'Override content globs')
    .option('--cwd <dir>', 'Project root (default: current directory)')
    .action((opts, cmd) => dev({ ...opts, ...pickGlobals(cmd) }));

  program
    .command('convert [inputs...]')
    .description('Convert Tailwind class attributes to SenangStart attributes (HTML, Blade, JSX…)')
    .option('-s, --string [html]', 'Convert an inline HTML string')
    .option('-o, --output <path>', 'Write the result to a file (single input)')
    .option('-w, --write', 'Rewrite input files in place')
    .option('--exact', "Keep Tailwind's numeric scale (p:tw-4) instead of the semantic scale")
    .option('--prefix <prefix>', 'Attribute prefix to emit (matches config.prefix)')
    .option('--keep-class', 'Keep the original class attribute alongside the converted attributes')
    .option('--cwd <dir>', 'Project root (default: current directory)')
    .action(async (inputs, opts, cmd) => { process.exitCode = await convert(inputs, { ...opts, ...pickGlobals(cmd) }); });

  return program;
}

function pickGlobals(cmd) {
  const g = cmd.optsWithGlobals ? cmd.optsWithGlobals() : {};
  return { quiet: g.quiet, verbose: g.verbose, json: g.json };
}

/** Shared default program instance. */
export const program = createProgram();

export default program;
