/**
 * SenangStart CSS - Extractor fixture tests
 *
 * Every fixture in tests/fixtures/extractor/ has a sibling *.expected.json with
 * the EXACT token set per attribute type. Any extra token is a failure – junk
 * must never leak into the build.
 */

import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import { parseSource } from '../../src/compiler/parser.js';

const FIXTURE_DIR = join(dirname(fileURLToPath(import.meta.url)), '..', 'fixtures', 'extractor');
const ATTRS = ['layout', 'space', 'visual', 'interact', 'listens'];

const FIXTURES = [
  { name: 'jsx', file: 'jsx.tsx' },
  { name: 'vue', file: 'vue.vue' },
  { name: 'svelte', file: 'svelte.svelte' },
  { name: 'blade', file: 'blade.blade.php' },
  { name: 'php', file: 'php.php' },
  { name: 'astro', file: 'astro.astro' },
  { name: 'html', file: 'html.html' },
  { name: 'edge-cases', file: 'edge-cases.html' }
];

const sorted = (iterable) => [...new Set(iterable)].sort();

describe('Extractor fixtures', () => {
  for (const { name, file } of FIXTURES) {
    describe(file, () => {
      const source = readFileSync(join(FIXTURE_DIR, file), 'utf8');
      const expected = JSON.parse(readFileSync(join(FIXTURE_DIR, `${name}.expected.json`), 'utf8'));
      const result = parseSource(source, { file });

      for (const attr of ATTRS) {
        it(`extracts exactly the expected ${attr} tokens`, () => {
          assert.deepEqual(sorted(result[attr]), sorted(expected[attr]));
        });
      }

      it('never emits a token containing the word "trap"', () => {
        for (const attr of ATTRS) {
          for (const token of result[attr]) {
            assert.ok(!token.includes('trap'), `${attr} leaked trap token "${token}"`);
          }
        }
      });

      it('records the expected skipped fragments', () => {
        const raws = result.skipped.map((s) => s.raw);
        for (const raw of expected.skippedIncludes || []) {
          assert.ok(raws.includes(raw), `expected "${raw}" in skipped, got ${JSON.stringify(raws)}`);
        }
        const reasons = new Set(result.skipped.map((s) => s.reason));
        for (const reason of expected.skippedReasons || []) {
          assert.ok(reasons.has(reason), `expected a skipped entry with reason "${reason}", got ${[...reasons]}`);
        }
      });

      it('reports a file:line location for every token', () => {
        for (const attr of ATTRS) {
          for (const token of result[attr]) {
            const locs = result.locations.get(`${attr}:${token}`);
            assert.ok(Array.isArray(locs) && locs.length > 0, `no location for ${attr}:${token}`);
            assert.equal(locs[0].file, file);
            assert.ok(Number.isInteger(locs[0].line) && locs[0].line >= 1);
            assert.ok(Number.isInteger(locs[0].column) && locs[0].column >= 1);
          }
        }
      });
    });
  }
});
