/**
 * Diagnostics: unknown tokens are errors with suggestions, not silent (audit M6).
 */
import { test, describe } from 'node:test';
import assert from 'node:assert/strict';
import { compileSource, tokenize } from '../../src/index.js';

const diag = (html) => {
  const r = compileSource(html, { preflight: false });
  return { errors: r.errors || [], css: r.css };
};

describe('diagnostics', () => {
  test('unknown colour → UNKNOWN_VALUE with suggestion, no undefined var() emitted', () => {
    const { errors, css } = diag('<b visual="bg:primry"></b>');
    assert.equal(errors[0].code, 'UNKNOWN_VALUE');
    assert.equal(errors[0].suggestion, 'primary');
    assert.ok(!css.includes('--c-primry'));
  });
  test('unknown spacing value', () => {
    const { errors } = diag('<b space="p:bigg"></b>');
    assert.equal(errors[0].code, 'UNKNOWN_VALUE');
    assert.equal(errors[0].suggestion, 'big');
  });
  test('unknown utility → UNKNOWN_PROPERTY with suggestion', () => {
    const { errors } = diag('<b visual="bgg:red-500"></b>');
    assert.equal(errors[0].code, 'UNKNOWN_PROPERTY');
    assert.equal(errors[0].suggestion, 'bg');
  });
  test('utility in the wrong attribute', () => {
    const { errors } = diag('<b visual="p:big"></b>');
    assert.equal(errors[0].code, 'UNKNOWN_PROPERTY');
    assert.match(errors[0].message, /space utility/);
  });
  test('unknown variant → UNKNOWN_VARIANT with suggestion', () => {
    const { errors } = diag('<b visual="hovr:bg:red-500"></b>');
    assert.equal(errors[0].code, 'UNKNOWN_VARIANT');
    assert.equal(errors[0].suggestion, 'hover');
  });
  test('injection payload → INVALID_VALUE at the tokenizer (the extractor also drops it as junk)', () => {
    const t = tokenize('justify:x}body{display:none', 'layout');
    assert.equal(t.errorCode, 'INVALID_VALUE');
    assert.equal(diag('<b layout="justify:x}body{display:none"></b>').css.includes('body{'), false);
  });
  test('valid tokens, arbitrary custom properties and marker keywords produce no errors', () => {
    const { errors } = diag('<b layout="flex hoverable" visual="bg:primary hover:bg:blue-500 text:[var(--brand)]" space="p:big"></b>');
    assert.deepEqual(errors, []);
  });
  test('compile API never writes to the console', () => {
    const orig = { warn: console.warn, log: console.log, error: console.error };
    let calls = 0;
    console.warn = console.log = console.error = () => { calls++; };
    try { compileSource('<b visual="bogus:x nope:y bg:[a}b]"></b>'); } finally { Object.assign(console, orig); }
    assert.equal(calls, 0);
  });
});
