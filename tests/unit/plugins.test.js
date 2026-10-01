/**
 * Plugin API (0.4.0): config.utilities / config.variants / theme.keyframes+animation / config.plugins.
 */
import { test, describe } from 'node:test';
import assert from 'node:assert/strict';
import { compileSource } from '../../src/index.js';
import { mergeConfig } from '../../src/config/defaults.js';

const cfg = () => mergeConfig({
  preflight: false,
  theme: {
    textShadow: { soft: '0 1px 2px rgb(0 0 0 / .3)' },
    keyframes: { wiggle: '0%,100% { transform: rotate(-3deg) } 50% { transform: rotate(3deg) }', unused: '0% { opacity: 0 }' },
    animation: { wiggle: 'wiggle 1s ease-in-out infinite' }
  },
  utilities: {
    'text-shadow': { attr: 'visual', template: 'text-shadow: {value};', scale: 'textShadow' },
    glass: { attr: 'visual', css: 'backdrop-filter: blur(12px);' },
    'gap-cols': { attr: 'layout', template: 'column-gap: {value};', scale: 'spacing' }
  },
  variants: { hocus: '&:hover, &:focus', 'theme-dark': '[data-theme=dark] &', 'motion-ok': '@media (prefers-reduced-motion: no-preference)' },
  plugins: [({ addUtilities, addVariants, theme }) => {
    addUtilities({ 'brand-ring': { attr: 'visual', css: `box-shadow: 0 0 0 3px ${theme('colors.primary')};` } });
    addVariants({ 'group-open': '[open] &' });
  }]
});
const run = (html) => { const r = compileSource(html, cfg()); return { u: r.css.slice(r.css.indexOf('Utilities */')).replace(/\s+/g, ' '), css: r.css, errors: r.errors || [] }; };

describe('plugin API', () => {
  test('declarative utilities: keyword, scaled template (custom theme scale), arbitrary, built-in scale', () => {
    const { u, errors } = run('<b visual="glass text-shadow:soft text-shadow:[1px_1px_red]" layout="gap-cols:big"></b>');
    assert.deepEqual(errors, []);
    assert.ok(u.includes('[visual~="glass"] { backdrop-filter: blur(12px); }'));
    assert.ok(u.includes('[visual~="text-shadow:soft"] { text-shadow: 0 1px 2px rgb(0 0 0 / .3); }'));
    assert.ok(u.includes('[visual~="text-shadow:[1px_1px_red]"] { text-shadow: 1px 1px red; }'));
    assert.ok(u.includes('[layout~="gap-cols:big"] { column-gap: var(--s-big); }'));
  });
  test('unknown value of a custom utility is a diagnostic', () => {
    const { errors } = run('<b visual="text-shadow:nope"></b>');
    assert.equal(errors[0]?.code, 'UNKNOWN_VALUE');
  });
  test('custom variants: alternatives, ancestor, media', () => {
    const { u } = run('<b visual="hocus:bg:red-500 theme-dark:text:white motion-ok:bg:black"></b>');
    assert.ok(u.includes('[visual~="hocus:bg:red-500"]:is(:hover, :focus) {'));
    assert.ok(u.includes('[visual~="theme-dark:text:white"]:where([data-theme=dark] *) {'));
    assert.ok(u.includes('@media (prefers-reduced-motion: no-preference) { [visual~="motion-ok:bg:black"]'));
  });
  test('functional plugins can add utilities and variants and read the theme', () => {
    const { u, errors } = run('<b visual="brand-ring group-open:bg:black"></b>');
    assert.deepEqual(errors, []);
    assert.ok(u.includes('[visual~="brand-ring"] { box-shadow: 0 0 0 3px #2563EB; }'));
    assert.ok(u.includes('[visual~="group-open:bg:black"]:where([open] *) {'));
  });
  test('theme.animation values work with animate:, keyframes emitted only when referenced', () => {
    const { css, u } = run('<b visual="animate:wiggle"></b>');
    assert.ok(u.includes('animation: wiggle 1s ease-in-out infinite'));
    assert.ok(css.includes('@keyframes wiggle {'));
    assert.ok(!css.includes('@keyframes unused'));
  });
  test('plugin definitions cannot inject CSS', () => {
    const c = mergeConfig({ preflight: false, variants: { evil: '&:hover}body{display:none' }, utilities: { x: { css: 'color: red' } } });
    const r = compileSource('<b visual="evil:bg:red-500 x"></b>', c);
    assert.ok(!r.css.includes('body{'));
    assert.equal(r.errors?.[0]?.code, 'UNKNOWN_VARIANT');
  });
});
