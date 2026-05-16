#!/usr/bin/env node

/**
 * SenangStart CSS - CLI Entry Point
 * The Intent-First CSS Engine
 */

import { readFileSync } from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
import { program } from 'commander';
import { init } from './commands/init.js';
import { build } from './commands/build.js';
import { dev } from './commands/dev.js';

const __dirname = dirname(fileURLToPath(import.meta.url));
const pkg = JSON.parse(readFileSync(join(__dirname, '..', '..', 'package.json'), 'utf-8'));

program
  .name('senangstart')
  .description('SenangStart CSS - The Intent-First CSS Engine\n\n  "Speak Human. Compile to Logic."')
  .version(pkg.version);

program
  .command('init')
  .description('Initialize a new senangstart.config.js')
  .action(init);

program
  .command('build')
  .description('Compile CSS from source files')
  .option('--minify', 'Minify CSS output')
  .option('--no-preflight', 'Exclude Preflight base styles')
  .option('--config <path>', 'Path to config file', 'senangstart.config.js')
  .action(build);

program
  .command('dev')
  .description('Watch mode with live compilation')
  .option('--no-preflight', 'Exclude Preflight base styles')
  .option('--config <path>', 'Path to config file', 'senangstart.config.js')
  .action(dev);

program.parse();
