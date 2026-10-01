/**
 * Builds the conformance pages: for every fixture in tests/conformance/fixtures,
 *   .generated/<name>.tailwind.html   — original markup + Tailwind v4 CSS
 *   .generated/<name>.senang.html     — converted markup (exact mode) + SenangStart CSS
 * Run by the Playwright conformance spec (and usable standalone for debugging).
 */
import { readdirSync, readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { compile } from '@tailwindcss/node';
import { convertHTML } from '../../src/converter/index.js';
import { compileSource } from '../../src/index.js';

const here = dirname(fileURLToPath(import.meta.url));
const fixturesDir = join(here, 'fixtures');
const outDir = join(here, '.generated');
mkdirSync(outDir, { recursive: true });

const SHELL = (title, css, body) => `<!DOCTYPE html><html><head><meta charset="utf-8"><title>${title}</title>
<style>${css}</style></head><body><div id="root" style="width:900px;margin:0;padding:0">${body}</div></body></html>`;

export async function buildPages() {
  const tw = await compile('@import "tailwindcss";', { base: process.cwd(), onDependency() {} });
  const out = [];
  for (const file of readdirSync(fixturesDir).filter((f) => f.endsWith('.html'))) {
    const name = file.replace(/\.html$/, '');
    const markup = readFileSync(join(fixturesDir, file), 'utf8');

    // Tailwind: collect candidates from class attributes
    const candidates = [...markup.matchAll(/class="([^"]*)"/g)].flatMap((m) => m[1].split(/\s+/)).filter(Boolean);
    const twCss = tw.build([...new Set(candidates)]);
    writeFileSync(join(outDir, `${name}.tailwind.html`), SHELL(`${name} (tailwind)`, twCss, markup));

    // SenangStart: convert (exact scale) + compile
    const converted = convertHTML(markup, { exact: true });
    const { css, errors } = compileSource(converted, { preflight: true });
    writeFileSync(join(outDir, `${name}.senang.html`), SHELL(`${name} (senangstart)`, css, converted));
    writeFileSync(join(outDir, `${name}.converted.html`), converted);
    out.push({ name, errors: errors || [], unknown: [...converted.matchAll(/class="([^"]*)"/g)].flatMap((m) => m[1].split(/\s+/)).filter(Boolean) });
  }
  return out;
}

if (process.argv[1] && process.argv[1].endsWith('build-pages.mjs')) {
  const res = await buildPages();
  for (const r of res) console.log(r.name, 'diagnostics:', r.errors.length, 'unconverted:', r.unknown.join(' ') || '—');
}
