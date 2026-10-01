/**
 * `senangstart convert` — Tailwind → SenangStart migration.
 *   sen convert input.html -o output.html
 *   sen convert --string '<div class="flex p-4">'
 *   sen convert "src/*.html" --write  (in place; globs are supported)
 */
import { readFileSync, writeFileSync } from 'fs';
import { resolve } from 'path';
import { glob } from 'tinyglobby';
import { convertHTML, rewriteClassAttributes } from '../../converter/index.js';
import { logger } from '../../utils/logger.js';

export async function convert(inputs, opts = {}) {
  const options = { exact: !!opts.exact, prefix: opts.prefix || '', keepClass: !!opts.keepClass };
  if (opts.string !== undefined) {
    if (opts.string === true || opts.string === '') {
      logger.error('Error: --string requires an HTML string argument');
      return 1;
    }
    process.stdout.write(convertHTML(opts.string, options) + '\n');
    return 0;
  }
  const files = inputs.length ? await glob(inputs, { cwd: opts.cwd || process.cwd(), absolute: true, onlyFiles: true }) : [];
  if (files.length === 0) {
    logger.error('Error: Input file required (pass file paths/globs, or --string <html>)');
    return 1;
  }
  if (files.length > 1 && opts.output) {
    logger.error('-o/--output only works with a single input file; use --write for many files.');
    return 1;
  }
  const unknownTotal = new Map();
  for (const file of files) {
    const src = readFileSync(file, 'utf8');
    const { html, converted, unknown } = rewriteClassAttributes(src, options);
    for (const [k, n] of unknown) unknownTotal.set(k, (unknownTotal.get(k) || 0) + n);
    if (opts.write) writeFileSync(file, html);
    else if (opts.output) writeFileSync(resolve(opts.cwd || process.cwd(), opts.output), html);
    else if (files.length === 1) process.stdout.write(html);
    logger.info(`${file}: ${converted} class attribute(s) converted${unknown.size ? `, ${unknown.size} unknown class(es) kept` : ''}`);
  }
  if (unknownTotal.size) {
    const list = [...unknownTotal.entries()].sort((a, b) => b[1] - a[1]).slice(0, 30).map(([k, n]) => `${k} (×${n})`).join(', ');
    logger.warn(`Unconverted Tailwind classes kept in class="": ${list}`);
  }
  return 0;
}

export default { convert };
