/**
 * Compares the new engine (src/engine) against the golden snapshot.
 * Reports: matches, tokens the old engine supported but the new one does not
 * (regressions), tokens with different declarations, and tokens only the new
 * engine supports (fixes). Exit 1 if regressions or unexplained diffs exist.
 */
import { readFileSync, existsSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { tokenize } from '../../src/core/tokenizer-core.js';
import { generateDeclarations } from '../../src/engine/index.js';
import { defaultConfig, mergeConfig } from '../../src/config/defaults.js';

const here = dirname(fileURLToPath(import.meta.url));
const golden = JSON.parse(readFileSync(join(here, 'declarations.json'), 'utf8'));
const allowedPath = join(here, 'engine-intentional.json');
const allowed = existsSync(allowedPath) ? JSON.parse(readFileSync(allowedPath, 'utf8')) : {};
const config = mergeConfig(defaultConfig, {});
const norm = (css) => css ? css.split(';').map(s => s.trim()).filter(Boolean).sort() : null;

const res = { match: 0, regress: [], diff: [], fixed: [], bothNull: 0 };
for (const [key, was] of Object.entries(golden)) {
  if (/:(hover|focus|dark|tab|placeholder):|^(space|visual|layout)=(tab|hover|dark|focus|placeholder):/.test(key)) continue; // variant tokens compared separately
  const [attr, raw] = [key.slice(0, key.indexOf('=')), key.slice(key.indexOf('=') + 1)];
  const now = norm(generateDeclarations(tokenize(raw, attr, config), config).css);
  const a = JSON.stringify(was), b = JSON.stringify(now);
  if (a === b) { was === null ? res.bothNull++ : res.match++; continue; }
  if (key in allowed) continue;
  if (was && !now) res.regress.push(key);
  else if (!was && now) res.fixed.push(`${key} → ${now.join('; ')}`);
  else res.diff.push(`${key}\n    was: ${was.join('; ')}\n    now: ${now.join('; ')}`);
}
console.log(`match ${res.match} · both-null ${res.bothNull} · fixed ${res.fixed.length} · DIFF ${res.diff.length} · REGRESS ${res.regress.length}`);
if (process.argv.includes('-v')) {
  for (const k of res.regress) console.log('REGRESS', k);
  for (const k of res.diff) console.log('DIFF', k);
  for (const k of res.fixed) console.log('FIXED', k);
}
process.exit(res.regress.length || res.diff.length ? 1 : 0);
