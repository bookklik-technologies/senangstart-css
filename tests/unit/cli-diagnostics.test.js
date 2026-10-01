/**
 * Diagnostics printer handles both the legacy token/generator error shapes
 * and the new structured { raw, attrType, code, message, suggestion? } shape.
 */
import { describe, it, afterEach } from 'node:test';
import assert from 'node:assert/strict';
import { normalizeDiagnostic, normalizeDiagnostics, formatDiagnostic, printDiagnostics } from '../../src/cli/lib/diagnostics.js';
import { configureLogger, resetLogger } from '../../src/utils/logger.js';

function capture(fn) {
  const out = [];
  const err = [];
  const origLog = console.log;
  const origWrite = process.stderr.write;
  console.log = (...a) => out.push(a.join(' '));
  process.stderr.write = (chunk) => { err.push(String(chunk)); return true; };
  try { fn(); } finally { console.log = origLog; process.stderr.write = origWrite; }
  return { out, err };
}

describe('Diagnostics normalisation', () => {
  it('normalises legacy tokenizer shape (token with .error)', () => {
    const d = normalizeDiagnostic({ raw: 'p:', attrType: 'space', error: 'Invalid token format' });
    assert.equal(d.raw, 'p:');
    assert.equal(d.attrType, 'space');
    assert.equal(d.code, 'invalid-token');
    assert.equal(d.message, 'Invalid token format');
    assert.equal(d.level, 'error');
  });

  it('normalises legacy generator shape ({ type, token, message })', () => {
    const d = normalizeDiagnostic({ type: 'rule_generation', token: 'bogus', message: 'No rule generated' });
    assert.equal(d.raw, 'bogus');
    assert.equal(d.code, 'rule_generation');
    assert.equal(d.message, 'No rule generated');
  });

  it('normalises the new structured shape and keeps suggestion', () => {
    const d = normalizeDiagnostic({ raw: 'bg:primry', attrType: 'visual', code: 'unknown-value', message: 'Unknown color', suggestion: 'bg:primary' });
    assert.equal(d.code, 'unknown-value');
    assert.equal(d.suggestion, 'bg:primary');
    assert.equal(d.attrType, 'visual');
  });

  it('accepts the new shape with level: "warning"', () => {
    const d = normalizeDiagnostic({ raw: 'x', code: 'deprecated', message: 'old syntax', level: 'warning' });
    assert.equal(d.level, 'warning');
  });

  it('handles strings, nulls and token-less generator errors', () => {
    assert.equal(normalizeDiagnostic(null), null);
    assert.equal(normalizeDiagnostic('boom').message, 'boom');
    const d = normalizeDiagnostic({ type: 'preflight', message: 'failed' });
    assert.equal(d.raw, '');
    assert.equal(d.code, 'preflight');
    assert.equal(normalizeDiagnostics([null, undefined, { type: 'x', token: 'y', message: 'z' }]).length, 1);
    assert.deepEqual(normalizeDiagnostics(undefined), []);
  });
});

describe('Diagnostics formatting', () => {
  it('formats "file:line token (attr) → message (did you mean X?)"', () => {
    const line = formatDiagnostic({ file: '/proj/src/a.html', line: 12, raw: 'bg:primry', attrType: 'visual', message: 'Unknown color', suggestion: 'bg:primary', level: 'error', code: 'x' }, { cwd: '/proj' });
    assert.equal(line, 'src/a.html:12 bg:primry (visual) → Unknown color (did you mean bg:primary?)');
  });

  it('omits missing parts gracefully', () => {
    assert.equal(formatDiagnostic({ raw: 'flexx', message: 'No rule', level: 'error', code: 'x' }), 'flexx → No rule');
    assert.equal(formatDiagnostic({ raw: '', message: 'config oops', level: 'error', code: 'x' }), 'config oops');
    assert.equal(formatDiagnostic({ file: 'a.html', raw: 'x', message: 'm', level: 'error', code: 'x' }), 'a.html x → m');
  });
});

describe('Diagnostics printing', () => {
  afterEach(() => resetLogger());

  it('prints errors to stderr with a summary count and returns counts', () => {
    configureLogger({ color: false });
    const diags = normalizeDiagnostics([
      { raw: 'a', attrType: 'layout', error: 'bad' },
      { type: 'rule_generation', token: 'b', message: 'No rule generated' }
    ]);
    let counts;
    const { err } = capture(() => { counts = printDiagnostics(diags); });
    assert.deepEqual(counts, { errors: 2, warnings: 0 });
    assert.ok(err.some(l => l.includes('2 errors found in source')));
    assert.ok(err.every(l => l.includes('✗')));
  });

  it('--ignore-invalid downgrades everything to warnings', () => {
    configureLogger({ color: false });
    const diags = normalizeDiagnostics([{ raw: 'a', attrType: 'layout', error: 'bad' }]);
    let counts;
    const { err } = capture(() => { counts = printDiagnostics(diags, { ignoreInvalid: true }); });
    assert.deepEqual(counts, { errors: 0, warnings: 1 });
    assert.ok(err.some(l => l.includes('1 warning found in source (ignored via --ignore-invalid)')));
    assert.ok(err.every(l => l.includes('⚠')));
  });

  it('prints nothing for an empty list', () => {
    const { out, err } = capture(() => printDiagnostics([]));
    assert.equal(out.length + err.length, 0);
  });
});
