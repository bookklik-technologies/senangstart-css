/**
 * Builds tests/golden/declarations.json — a map of raw token -> declarations
 * produced by the CURRENT engine, for every documented property/value in
 * docs/syntax-reference.json plus representative arbitrary values.
 *
 * Usage:  node tests/golden/build-golden.mjs            (regenerate)
 *         node tests/golden/build-golden.mjs --check    (compare, exit 1 on diff)
 *
 * The golden file is the regression net for the registry refactor: the new
 * engine must produce identical declarations for every token in it (ordering
 * and layering may change; declarations may not, except for entries listed in
 * tests/golden/intentional-changes.json).
 */
import { readFileSync, writeFileSync, existsSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { tokenize } from '../../src/core/tokenizer-core.js';
import { generateRule } from '../../src/compiler/generators/css.js';
import { defaultConfig, mergeConfig } from '../../src/config/defaults.js';
import { getAllDefinitions } from '../../src/definitions/index.js';

const here = dirname(fileURLToPath(import.meta.url));
const config = mergeConfig(defaultConfig, {});
const out = {};
const origWarn = console.warn; console.warn = () => {};

function declsOf(css) {
  // extract "{ ... }" body of the first rule
  const m = css.match(/\{([^{}]*)\}/);
  if (!m) return null;
  return m[1].split(';').map(s => s.trim()).filter(Boolean).sort();
}
function add(raw, attrType) {
  const t = tokenize(raw, attrType);
  const css = generateRule(t, config);
  out[`${attrType}=${raw}`] = css ? declsOf(css) : null;
}

const scaleSamples = {
  spacing: ['none', 'tiny', 'small', 'medium', 'big', 'giant', 'vast', 'small-2x'],
  colors: ['primary', 'white', 'black', 'blue-500', 'gray-100', 'transparent', 'current', 'primary/50'],
};

const defs = Object.values(getAllDefinitions());
/** Expand `rounded-{t|b|tl}` style prefixes from a syntax string into concrete property prefixes. */
function prefixesFromSyntax(syntax, attr) {
  const out = new Set();
  const re = new RegExp(`${attr}="([a-z0-9-]*)(?:\\{([^}]+)\\})?([a-z0-9-]*):`, 'g');
  let m;
  while ((m = re.exec(syntax || ''))) {
    const [, pre, alts, post] = m;
    if (alts) for (const a of alts.split('|')) out.add(`${pre}${a}${post}`);
    else out.add(`${pre}${post}`);
  }
  return [...out];
}
function expandRange(v) {
  const m = /^(\d+)-(\d+)$/.exec(v);
  if (!m) return [v];
  const a = +m[1], b = +m[2]; const r = [];
  for (let i = a; i <= b && r.length < 12; i++) r.push(String(i));
  return r;
}
for (const def of defs) {
  const attr = def.property;
  if (!['layout', 'space', 'visual'].includes(attr)) continue;
  const values = Array.isArray(def.values) ? def.values : [];
  const prefixes = prefixesFromSyntax(def.syntax, attr);
  for (const v of values) {
    if (v && typeof v === 'object' && v.property) {
      // space-style: property + scale
      const samples = (def.scaleValues && def.scaleValues.length ? def.scaleValues : scaleSamples[def.usesScale] || ['small', 'medium', 'big']).slice(0, 14);
      for (const s of samples) add(`${v.property}:${s}`, attr);
      if (def.supportsArbitrary) add(`${v.property}:[13px]`, attr);
      continue;
    }
    const val = typeof v === 'string' ? v : v?.value;
    if (!val) continue;
    if (prefixes.length === 0) { for (const x of expandRange(val)) add(x, attr); continue; }
    for (const p of prefixes) for (const x of expandRange(val)) add(`${p}:${x}`, attr);
  }
  // scale-driven defs with no explicit values (e.g. colors)
  if (values.length === 0 || (def.usesScale && scaleSamples[def.usesScale])) {
    const samples = scaleSamples[def.usesScale] || def.scaleValues || [];
    for (const p of prefixes) {
      for (const s of samples) add(`${p}:${s}`, attr);
      if (def.supportsArbitrary) add(`${p}:[13px]`, attr);
    }
  }
}
// representative variants
for (const raw of ['tab:p:big', 'hover:p:big', 'tab:hover:p:big', 'dark:p:big', 'm:-small', 'p:[calc(100%_-_2rem)]']) add(raw, 'space');
for (const raw of ['hover:bg:primary', 'dark:bg:black', 'focus:ring:small', 'bg:[#123456]', 'bg:[#123456]/50', 'text:[rgb(1_2_3)]', 'placeholder:text:gray-400']) add(raw, 'visual');
for (const raw of ['flex', 'grid', 'center', 'col', 'z:top', 'overflow:hidden', 'grid-cols:3', 'tab:hidden', 'hidden', 'container', 'hoverable']) add(raw, 'layout');

console.warn = origWarn;
const file = join(here, 'declarations.json');
const json = JSON.stringify(out, null, 1);
if (process.argv.includes('--check')) {
  if (!existsSync(file)) { console.error('golden file missing'); process.exit(1); }
  const prev = JSON.parse(readFileSync(file, 'utf8'));
  const allowed = existsSync(join(here, 'intentional-changes.json')) ? JSON.parse(readFileSync(join(here, 'intentional-changes.json'), 'utf8')) : {};
  let diffs = 0;
  for (const k of Object.keys(prev)) {
    const a = JSON.stringify(prev[k]), b = JSON.stringify(out[k]);
    if (a !== b && !(k in allowed)) { diffs++; if (diffs <= (process.env.GOLDEN_ALL ? 1e9 : 40)) console.log(`DIFF ${k}\n  was: ${a}\n  now: ${b}`); }
  }
  console.log(`${Object.keys(prev).length} golden tokens, ${diffs} unexpected diffs`);
  process.exit(diffs ? 1 : 0);
} else {
  writeFileSync(file, json);
  const nulls = Object.values(out).filter(v => v === null).length;
  console.log(`wrote ${Object.keys(out).length} tokens (${nulls} produce no CSS today)`);
}
