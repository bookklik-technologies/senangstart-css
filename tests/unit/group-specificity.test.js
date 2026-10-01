/**
 * Group (hoverable/focusable…) and peer (interact/listens) selectors must have the
 * same specificity as the child's own state rule, (0,2,0), and state variants are
 * ordered so `disabled:` wins over `hover:`.
 */
import { test, describe } from 'node:test';
import assert from 'node:assert/strict';
import { compileSource } from '../../src/index.js';

/** Minimal specificity calculator for the selector shapes SenangStart emits. */
function specificity(sel) {
  let s = sel.replace(/:where\((?:[^()]|\([^()]*\))*\)/g, '');            // :where() counts 0
  s = s.replace(/:not\(((?:[^()]|\([^()]*\))*)\)/g, ' $1 ');                // :not(x) counts as x
  const ids = (s.match(/#[\w-]+/g) || []).length;
  const attrs = (s.match(/\[[^\]]*\]/g) || []).length;
  s = s.replace(/\[[^\]]*\]/g, '');
  const pseudoEl = (s.match(/::[\w-]+/g) || []).length;
  s = s.replace(/::[\w-]+/g, '');
  const pseudoCl = (s.match(/:[\w-]+/g) || []).length;
  return [ids, attrs + pseudoCl, pseudoEl];
}

const rulesFor = (css, needle) => {
  const m = css.match(new RegExp(`([^{}]*${needle.replace(/[[\]~"^$.*+?()|\\]/g, '\\$&')}[^{}]*)\\{`, ''));
  return m ? m[1].split(',\n').map((x) => x.trim()) : [];
};

describe('group / peer selector specificity', () => {
  const html = '<i interact="m"></i><div layout="hoverable focusable"><b listens="m" visual="text:black hover:text:white focus:text:blue-500 disabled:text:gray-400"></b></div>';
  const { css } = compileSource(html, { preflight: false });

  test('direct, group and peer selectors are all (0,2,0)', () => {
    for (const needle of ['[visual~="hover:text:white"]', '[visual~="focus:text:blue-500"]']) {
      const sels = rulesFor(css, needle);
      assert.equal(sels.length, 3, `expected direct+group+peer for ${needle}: ${sels.join(' | ')}`);
      for (const s of sels) assert.deepEqual(specificity(s), [0, 2, 0], s);
    }
    assert.deepEqual(specificity('[visual~="disabled:text:gray-400"]:disabled'), [0, 2, 0]);
  });

  test('group rules still beat the child base utility (0,1,0)', () => {
    assert.deepEqual(specificity('[visual~="text:black"]'), [0, 1, 0]);
  });

  test('state variants are ordered base < hover < focus < disabled', () => {
    const at = (s) => { const i = css.indexOf(s); assert.ok(i >= 0, s); return i; };
    assert.ok(at('[visual~="text:black"] {') < at('[visual~="hover:text:white"]:hover'));
    assert.ok(at('[visual~="hover:text:white"]:hover') < at('[visual~="focus:text:blue-500"]:focus'));
    assert.ok(at('[visual~="focus:text:blue-500"]:focus') < at('[visual~="disabled:text:gray-400"]:disabled'));
  });
});
