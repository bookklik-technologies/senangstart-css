/**
 * Parity features (0.4.0): !important modifier, arbitrary properties, container queries.
 */
import { test, describe } from 'node:test';
import assert from 'node:assert/strict';
import { compileSource } from '../../src/index.js';

const util = (html, cfg = {}) => {
  const r = compileSource(html, { preflight: false, ...cfg });
  return { u: r.css.slice(r.css.indexOf('Utilities */')).replace(/\s+/g, ' '), errors: r.errors || [] };
};

describe('!important modifier', () => {
  test('leading and trailing forms', () => {
    const { u, errors } = util('<b space="!p:big m:small!" visual="!hover:bg:red-500"></b>');
    assert.deepEqual(errors, []);
    assert.ok(u.includes('[space~="!p:big"] { padding: var(--s-big) !important; }'));
    assert.ok(u.includes('[space~="m:small!"] { margin: var(--s-small) !important; }'));
    assert.ok(u.includes('[visual~="!hover:bg:red-500"]:hover'));
    assert.ok(u.includes('background-color: var(--c-red-500) !important'));
  });
  test('applies to every declaration of a multi-property utility', () => {
    const { u } = util('<b space="!p-x:big"></b>');
    assert.ok(u.includes('padding-left: var(--s-big) !important; padding-right: var(--s-big) !important;'));
  });
});

describe('arbitrary properties', () => {
  test('[prop:value] and custom properties, with variants', () => {
    const { u, errors } = util('<b visual="[mask-type:luminance] [--brand:#123456] hover:[outline:2px_solid_red] tab:[scroll-snap-type:x_mandatory]"></b>');
    assert.deepEqual(errors, []);
    assert.ok(u.includes('[visual~="[mask-type:luminance]"] { mask-type: luminance; }'));
    assert.ok(u.includes('[visual~="[--brand:#123456]"] { --brand: #123456; }'));
    assert.ok(u.includes('[visual~="hover:[outline:2px_solid_red]"]:hover,') && u.includes('{ outline: 2px solid red; }'));
    assert.ok(u.includes('@media (min-width: 768px) { [visual~="tab:[scroll-snap-type:x_mandatory]"] { scroll-snap-type: x mandatory; }'));
  });
  test('injection through an arbitrary property is rejected', () => {
    const { u } = util('<b visual="[color:red}body{display:none]"></b>');
    assert.ok(!u.includes('body'));
  });
});

describe('container queries', () => {
  test('@size: variants use theme.containers, falling back to screens; named containers; max', () => {
    const { u, errors } = util('<b layout="container-type:inline container-name:side" visual="@tab:bg:blue-500 @tab/side:text:white @max-tab:bg:black"></b>');
    assert.deepEqual(errors, []);
    assert.ok(u.includes('[layout~="container-type:inline"] { container-type: inline-size; }'));
    assert.ok(u.includes('[layout~="container-name:side"] { container-name: side; }'));
    assert.ok(u.includes('@container (min-width: 768px) { [visual~="@tab:bg:blue-500"] { background-color: var(--c-blue-500); } }'));
    assert.ok(u.includes('@container side (min-width: 768px) { [visual~="@tab/side:text:white"]'));
    assert.ok(u.includes('@container (max-width: 767.98px) { [visual~="@max-tab:bg:black"]'));
  });
  test('custom theme.containers sizes', () => {
    const { u } = util('<b space="@card:p:big"></b>', { theme: { containers: { card: '20rem' } } });
    assert.ok(u.includes('@container (min-width: 20rem)'));
  });
  test('container + media stack', () => {
    const { u } = util('<b space="tab:@card:p:big"></b>', { theme: { containers: { card: '20rem' } } });
    assert.ok(u.includes('@media (min-width: 768px) {'));
    assert.ok(u.includes('@container (min-width: 20rem) { [space~="tab:@card:p:big"]'));
  });
});

describe('prefix option', () => {
  test('prefixed attributes are scanned and emitted; unprefixed ones are ignored', () => {
    const html = '<div ss-layout="flex hoverable" ss-visual="hover:bg:red-500 dark:bg:black" layout="grid"><i ss-interact="x"></i><b ss-listens="x" ss-space="p:big"></b></div>';
    const { u, errors } = util(html, { prefix: 'ss', darkMode: 'selector' });
    assert.deepEqual(errors, []);
    assert.ok(u.includes('[ss-layout~="flex"] { display: flex; }'));
    assert.ok(!u.includes('[layout~="grid"]'));
    assert.ok(u.includes('[ss-layout~="hoverable"]:not([ss-layout~="disabled"]):hover [ss-visual~="hover:bg:red-500"]'));
    assert.ok(u.includes('[ss-interact~="x"]:not([ss-layout~="disabled"]):hover ~ [ss-listens~="x"]'));
    assert.ok(u.includes(':where(.dark, :is(.dark) *)[ss-visual~="dark:bg:black"]'));
  });
  test("'ss' and 'ss-' are equivalent; preflight container rules use the prefix", () => {
    const a = compileSource('<div ss-layout="container"></div>', { prefix: 'ss' }).css;
    const b = compileSource('<div ss-layout="container"></div>', { prefix: 'ss-' }).css;
    assert.equal(a, b);
    assert.ok(a.includes('[ss-layout~="container"] {\n    max-width'));
  });
});

describe('gradients', () => {
  test('angles, radial, conic and stop positions', () => {
    const { u, errors } = util('<b visual="bg-image:gradient-[45deg] bg-image:radial-[at_top] bg-image:conic-[from_90deg] bg-image:radial from:blue-500 via:white to:red-500 from-pos:10 via-pos:60 to-pos:[95%]"></b>');
    assert.deepEqual(errors, []);
    assert.ok(u.includes('linear-gradient(45deg, var(--ss-gradient-stops, transparent))'));
    assert.ok(u.includes('radial-gradient(at top, var(--ss-gradient-stops, transparent))'));
    assert.ok(u.includes('conic-gradient(from 90deg, var(--ss-gradient-stops, transparent))'));
    assert.ok(u.includes('--ss-gradient-from-position: 10%'));
    assert.ok(u.includes('--ss-gradient-via-position: 60%'));
    assert.ok(u.includes('--ss-gradient-to-position: 95%'));
    assert.ok(u.includes('--ss-gradient-via: var(--c-white)'));
  });
  test('gradient variables are registered as non-inheriting @property when used', () => {
    const { css } = compileSource('<b visual="from:blue-500"></b>', { preflight: false });
    assert.ok(css.includes('@property --ss-gradient-from { syntax: "*"; inherits: false; }'));
  });
  test('injection via a gradient pattern is rejected', () => {
    const { u } = util('<b visual="bg-image:gradient-[45deg)}body{x:y;(]"></b>');
    assert.ok(!u.includes('body'));
  });
});
