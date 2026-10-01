/**
 * Variant engine: stacking and new variant families (audit H3, parity #2-4, #16-18, #23).
 */
import { test, describe } from 'node:test';
import assert from 'node:assert/strict';
import { compileSource } from '../../src/index.js';
import { defaultConfig, mergeConfig } from '../../src/config/defaults.js';

const cfg = (extra = {}) => ({ ...mergeConfig(defaultConfig, {}), preflight: false, ...extra });
const utilities = (attr, raw, extra) => {
  const { css } = compileSource(`<b ${attr}="${raw}"></b>`, cfg(extra));
  return css.slice(css.indexOf('Utilities */')).replace(/\s+/g, ' ');
};

describe('variant stacking', () => {
  for (const raw of ['dark:hover:bg:red-500', 'hover:dark:bg:red-500']) {
    test(`${raw} → hover inside dark media, any order`, () => {
      const u = utilities('visual', raw);
      assert.match(u, /@media \(prefers-color-scheme: dark\) \{ \[visual~="[^"]+"\]:hover/);
      assert.ok(u.includes('background-color: var(--c-red-500)'));
    });
  }
  test('tab:dark:hover nests breakpoint inside dark and keeps :hover', () => {
    const u = utilities('visual', 'tab:dark:hover:bg:red-500');
    assert.match(u, /prefers-color-scheme: dark\) \{ @media \(min-width: 768px\) \{ \[visual~="tab:dark:hover:bg:red-500"\]:hover/);
  });
  test('dark:hover in selector mode', () => {
    const u = utilities('visual', 'dark:hover:bg:red-500', { darkMode: 'selector' });
    assert.ok(u.includes(':where(.dark, :is(.dark) *)[visual~="dark:hover:bg:red-500"]:hover'));
  });
  test('two states combine', () => {
    assert.ok(utilities('visual', 'hover:focus:bg:red-500').includes(':hover:focus {'));
  });
  test('pseudo-elements go last and get a default content', () => {
    const u = utilities('visual', 'hover:before:bg:red-500');
    assert.ok(u.includes(':hover::before {'));
    assert.ok(u.includes('content: var(--ss-content, "")'));
    assert.ok(utilities('visual', 'before:content:[x]').includes('::before { content: "x"; }'));
  });
});

describe('new variant families', () => {
  const cases = [
    ['visual', 'first:bg:red-500', ':first-child {'],
    ['visual', 'last:bg:red-500', ':last-child {'],
    ['visual', 'odd:bg:red-500', ':nth-child(odd) {'],
    ['visual', 'even:bg:red-500', ':nth-child(even) {'],
    ['visual', 'visited:text:red-500', ':visited {'],
    ['visual', 'aria-checked:bg:red-500', '[aria-checked="true"] {'],
    ['visual', 'aria-[sort=asc]:bg:red-500', '[aria-sort="asc"] {'],
    ['visual', 'data-active:bg:red-500', '[data-active] {'],
    ['visual', 'data-[state=open]:bg:red-500', '[data-state="open"] {'],
    ['space', 'has-[img]:p:big', ':has(img) {'],
    ['visual', 'not-first:bg:red-500', ':not(:first-child) {'],
    ['visual', 'rtl:text:right', ':where([dir="rtl"], [dir="rtl"] *) {'],
    ['visual', 'motion-reduce:animate:none', '@media (prefers-reduced-motion: reduce)'],
    ['visual', 'motion-safe:animate:spin', '@media (prefers-reduced-motion: no-preference)'],
    ['visual', 'landscape:bg:red-500', '@media (orientation: landscape)'],
    ['layout', 'print:hidden', '@media print {'],
    ['space', 'max-tab:p:big', '@media (max-width: 767.98px)'],
    ['space', 'tab-lap:p:big', '@media (min-width: 768px) and (max-width: 1023.98px)'],
  ];
  for (const [attr, raw, needle] of cases) {
    test(`${raw}`, () => assert.ok(utilities(attr, raw).includes(needle), utilities(attr, raw)));
  }
  test('custom screens from config work', () => {
    const c = mergeConfig(defaultConfig, {});
    c.theme = { ...c.theme, screens: { ...c.theme.screens, wide: '1600px' } };
    const { css } = compileSource('<b space="wide:p:big"></b>', { ...c, preflight: false });
    assert.ok(css.includes('@media (min-width: 1600px)'));
  });
});

describe('peer selectors', () => {
  test('emitted only for interact ids that something listens to', () => {
    const html = '<button interact="menu other"></button><div listens="menu" visual="hover:bg:red-500"></div>';
    const { css } = compileSource(html, cfg());
    assert.ok(css.includes('[interact~="menu"]'));
    assert.ok(!css.includes('[interact~="other"]'));
  });
});
