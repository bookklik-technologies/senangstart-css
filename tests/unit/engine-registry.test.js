/**
 * Table-driven registry resolver kinds (src/engine). The full declaration
 * snapshot lives in tests/golden (npm run golden).
 */
import { test, describe } from 'node:test';
import assert from 'node:assert/strict';
import { generateDeclarations } from '../../src/engine/index.js';
import { tokenize } from '../../src/core/tokenizer-core.js';
import { defaultConfig, mergeConfig } from '../../src/config/defaults.js';

const config = mergeConfig(defaultConfig, {});
const css = (attr, raw, cfg = config) => generateDeclarations(tokenize(raw, attr, cfg), cfg).css;

describe('registry resolver kinds', () => {
  const cases = [
    ['keyword', 'layout', 'flex', 'display: flex;'],
    ['enum', 'layout', 'justify:between', 'justify-content: space-between;'],
    ['scale var', 'space', 'p:big', 'padding: var(--s-big);'],
    ['multi-property template', 'space', 'p-x:big', 'padding-left: var(--s-big); padding-right: var(--s-big);'],
    ['negative scale', 'space', 'm:-small', 'margin: calc(var(--s-small) * -1);'],
    ['colour', 'visual', 'bg:primary', 'background-color: var(--c-primary);'],
    ['colour + opacity', 'visual', 'bg:primary/50', 'background-color: color-mix(in srgb, var(--c-primary) 50%, transparent);'],
    ['currentColor', 'visual', 'text:current', 'color: currentColor;'],
    ['arbitrary', 'space', 'p:[13px]', 'padding: 13px;'],
    ['arbitrary calc auto-spacing', 'space', 'w:[calc(100%-2rem)]', 'width: calc(100% - 2rem);'],
    ['inline scale (no var)', 'visual', 'brightness:vivid', 'filter: brightness(1.5);'],
    ['url wrap, no double wrap', 'visual', 'bg-image:[url(x.png)]', 'background-image: url(x.png);'],
    ['url literal keyword', 'visual', 'mask-image:none', 'mask-image: none;'],
    ['tailwind compat scale', 'space', 'p:tw-4', 'padding: var(--tw-4);'],
  ];
  for (const [kind, attr, raw, expected] of cases) {
    test(`${kind}: ${attr}="${raw}"`, () => {
      const out = css(attr, raw);
      assert.ok(out && out.replace(/\s+/g, ' ').includes(expected.replace(/\s+/g, ' ')), `got ${out}`);
    });
  }

  test('unknown value returns a diagnostic, not CSS', () => {
    const r = generateDeclarations(tokenize('p:bigg', 'space', config), config);
    assert.equal(r.css, null);
    assert.equal(r.error.code, 'UNKNOWN_VALUE');
  });

  test('scales missing from a partial theme fall back to defaults', () => {
    const partial = { theme: { spacing: { big: '32px' } } };
    assert.ok(css('visual', 'blur:small', partial));
  });
});
