#!/usr/bin/env node

/**
 * SenangStart CSS - CLI bin entry
 * The Intent-First CSS Engine
 *
 * All command wiring lives in ./program.js (side-effect free). This file only
 * parses argv so that `import '@bookklik/senangstart-css/cli'` never runs a
 * command by accident.
 */

import { program } from './program.js';

program.parseAsync(process.argv).catch((error) => {
  // Commander already printed usage errors; anything else is unexpected.
  const message = error && error.message ? error.message : String(error);
  process.stderr.write(`[senang] ✗ ${message}\n`);
  process.exitCode = 1;
});
