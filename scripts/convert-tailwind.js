#!/usr/bin/env node
/**
 * Backwards-compatible entry point. The converter now lives in src/converter and
 * is also available as `senangstart convert` (or `sen convert`).
 *
 *   node scripts/convert-tailwind.js input.html -o output.html
 *   node scripts/convert-tailwind.js --string "<div class='flex p-4'>"
 *   node scripts/convert-tailwind.js --exact --string "<div class='p-4 rounded-lg'>"
 */
import { program } from '../src/cli/program.js';

export { convertClass, convertClasses, convertHTML, rewriteClassAttributes } from '../src/converter/index.js';

const isMain = process.argv[1] && /convert-tailwind\.js$/.test(process.argv[1].replace(/\\/g, '/'));
if (isMain) {
  program.parseAsync(['node', 'senangstart', 'convert', ...process.argv.slice(2)]);
}
