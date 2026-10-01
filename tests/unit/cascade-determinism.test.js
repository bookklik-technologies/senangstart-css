/**
 * Cascade determinism and ordering (audit findings H1, H2, H3).
 */
import { test, describe } from 'node:test';
import assert from 'node:assert/strict';
import { compileSource, compileMultiple } from '../../src/index.js';
import { defaultConfig, mergeConfig } from '../../src/config/defaults.js';

const cfg = (extra = {}) => ({ ...mergeConfig(defaultConfig, {}), preflight: false, ...extra });
const pos = (css, s) => { const i = css.indexOf(s); assert.ok(i >= 0, `missing ${s}`); return i; };

describe('deterministic cascade', () => {
  test('output is byte-identical regardless of token/file order', () => {
    const a = '<a space="p-t:small" visual="hover:bg:green-500"></a>';
    const b = '<b space="p:big p-x:small" visual="bg:yellow-200 rounded-t:big rounded:small"></b>';
    const c = '<c layout="flex tab:grid desk:block tw-sm:hidden" space="m:big m-l:tiny"></c>';
    const orders = [[a, b, c], [c, b, a], [b, a, c]];
    const outs = orders.map(srcs => compileMultiple(srcs.map((content, i) => ({ content, path: `f${i}.html` })), cfg()).css);
    assert.equal(outs[1], outs[0]);
    assert.equal(outs[2], outs[0]);
  });

  test('shorthands precede longhands', () => {
    const { css } = compileSource('<b space="p-t:small p-x:big p:big"></b><i visual="rounded-t:big rounded:small"></i>', cfg());
    assert.ok(pos(css, '[space~="p:big"]') < pos(css, '[space~="p-x:big"]'));
    assert.ok(pos(css, '[space~="p-x:big"]') < pos(css, '[space~="p-t:small"]'));
    assert.ok(pos(css, '[visual~="rounded:small"]') < pos(css, '[visual~="rounded-t:big"]'));
  });

  test('breakpoints are ordered by min-width, not config key order', () => {
    const { css } = compileSource('<b space="desk:p:big tw-sm:p:small tab:p:tiny"></b>', cfg());
    assert.ok(pos(css, '(min-width: 640px)') < pos(css, '(min-width: 768px)'));
    assert.ok(pos(css, '(min-width: 768px)') < pos(css, '(min-width: 1280px)'));
  });

  test('output is wrapped in cascade layers by default and can be disabled', () => {
    const { css } = compileSource('<b space="p:big"></b>', cfg());
    assert.ok(css.startsWith('@layer senangstart.theme, senangstart.base, senangstart.components, senangstart.utilities;'));
    assert.ok(css.includes('@layer senangstart.utilities {'));
    const flat = compileSource('<b space="p:big"></b>', cfg({ layers: false })).css;
    assert.ok(!flat.includes('@layer'));
  });
});

describe('dark mode', () => {
  test("darkMode 'class' is an alias of 'selector' (was: dark styles always applied)", () => {
    const { css } = compileSource('<b visual="dark:bg:black"></b>', cfg({ darkMode: 'class' }));
    assert.ok(css.includes(':where(.dark, :is(.dark) *)[visual~="dark:bg:black"]'));
    assert.ok(!css.includes('(null)'));
  });

  test('dark wrapper adds no specificity, so hover still wins in dark mode', () => {
    const { css } = compileSource('<b visual="dark:bg:black hover:bg:gray-500"></b>', cfg({ darkMode: 'selector' }));
    // hover rule has (0,2,0); dark rule wrapper is :where() → (0,1,0)
    assert.ok(/:where\(\.dark, :is\(\.dark\) \*\)\[visual~="dark:bg:black"\]/.test(css));
    assert.ok(css.includes('[visual~="hover:bg:gray-500"]:hover'));
  });

  test('custom dark selector containing commas is not split apart', () => {
    const { css } = compileSource('<b visual="dark:bg:[rgb(1,2,3)]"></b>', cfg({ darkMode: ['selector', '[data-theme=dark]'] }));
    assert.ok(css.includes(':where([data-theme=dark], :is([data-theme=dark]) *)[visual~="dark:bg:[rgb(1,2,3)]"]'), css.slice(-500));
  });
});

describe('theme variable pruning', () => {
  test('unused palette shades are pruned; semantic tokens and used shades are kept', () => {
    const { css } = compileSource('<b visual="bg:blue-500 text:primary"></b>', cfg());
    assert.ok(css.includes('--c-blue-500:'), 'used shade kept');
    assert.ok(!css.includes('--c-red-500:'), 'unused shade pruned');
    assert.ok(css.includes('--c-primary:'), 'semantic token kept for user CSS');
    assert.ok(css.includes('--s-big:'), 'spacing scale kept for user CSS');
  });

  test('theme.exposeAll keeps every variable', () => {
    const c = cfg();
    c.theme = { ...c.theme, exposeAll: true };
    const { css } = compileSource('<b visual="bg:blue-500"></b>', c);
    assert.ok(css.includes('--c-red-500:'));
  });
});
