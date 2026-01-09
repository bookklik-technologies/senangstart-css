#!/usr/bin/env node

/**
 * SenangStart CSS - CLI Entry Point
 * The Intent-First CSS Engine
 */

import { program } from 'commander';
import { init } from './commands/init.js';
import { build } from './commands/build.js';
import { dev } from './commands/dev.js';

program
  .name('senangstart')
  .description('SenangStart CSS - The Intent-First CSS Engine\n\n  "Speak Human. Compile to Logic."')
  .version('1.0.0');

program
  .command('init')
  .description('Initialize a new senangstart.config.js')
  .action(init);

program
  .command('build')
  .description('Compile CSS from source files')
  .option('--minify', 'Minify CSS output')
  .option('--config <path>', 'Path to config file', 'senangstart.config.js')
  .action(build);

program
  .command('dev')
  .description('Watch mode with live compilation')
  .option('--config <path>', 'Path to config file', 'senangstart.config.js')
  .action(dev);

program.parse();
