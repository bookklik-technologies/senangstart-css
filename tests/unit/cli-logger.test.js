/**
 * Logger hardening: stderr routing, NO_COLOR / non-TTY, quiet/verbose/json.
 */
import { describe, it, beforeEach, afterEach } from 'node:test';
import assert from 'node:assert/strict';
import { logger, configureLogger, resetLogger, supportsColor, stripAnsi, getLoggerState } from '../../src/utils/logger.js';

function capture(fn) {
  const out = [];
  const err = [];
  const origLog = console.log;
  const origWrite = process.stderr.write;
  console.log = (...a) => out.push(a.join(' '));
  process.stderr.write = (chunk) => { err.push(String(chunk)); return true; };
  try {
    fn();
  } finally {
    console.log = origLog;
    process.stderr.write = origWrite;
  }
  return { out, err };
}

describe('Logger', () => {
  beforeEach(() => resetLogger());
  afterEach(() => resetLogger());

  it('routes warn/error to stderr and info/success/build/watch to stdout', () => {
    const { out, err } = capture(() => {
      logger.info('i'); logger.success('s'); logger.build('b'); logger.watch('w');
      logger.warn('W'); logger.error('E');
    });
    assert.equal(out.length, 4);
    assert.equal(err.length, 2);
    assert.ok(err[0].includes('W'));
    assert.ok(err[1].includes('E'));
  });

  it('emits no ANSI codes when color is disabled', () => {
    configureLogger({ color: false });
    const { out, err } = capture(() => { logger.info('plain'); logger.error('plain'); });
    for (const line of [...out, ...err]) {
      assert.equal(stripAnsi(line), line, `unexpected ANSI in: ${JSON.stringify(line)}`);
    }
    assert.ok(out[0].startsWith('[senang]'));
  });

  it('emits ANSI codes when color is forced on', () => {
    configureLogger({ color: true });
    const { out } = capture(() => logger.info('colored'));
    assert.notEqual(stripAnsi(out[0]), out[0]);
  });

  it('supportsColor respects NO_COLOR and non-TTY streams', () => {
    const env = { ...process.env };
    try {
      delete process.env.FORCE_COLOR;
      process.env.NO_COLOR = '1';
      assert.equal(supportsColor({ isTTY: true }), false);
      delete process.env.NO_COLOR;
      assert.equal(supportsColor({ isTTY: false }), false);
      assert.equal(supportsColor(undefined), false);
      process.env.TERM = 'xterm-256color';
      assert.equal(supportsColor({ isTTY: true }), true);
      process.env.FORCE_COLOR = '0';
      assert.equal(supportsColor({ isTTY: true }), false);
    } finally {
      for (const k of Object.keys(process.env)) if (!(k in env)) delete process.env[k];
      Object.assign(process.env, env);
    }
  });

  it('--quiet suppresses everything except errors', () => {
    configureLogger({ quiet: true });
    const { out, err } = capture(() => { logger.info('i'); logger.warn('w'); logger.debug('d'); logger.error('e'); });
    assert.equal(out.length, 0);
    assert.equal(err.length, 1);
    assert.ok(err[0].includes('e'));
  });

  it('--verbose enables debug output; default hides it', () => {
    let res = capture(() => logger.debug('hidden'));
    assert.equal(res.out.length, 0);
    configureLogger({ verbose: true });
    res = capture(() => logger.debug('shown'));
    assert.equal(res.out.length, 1);
    assert.ok(res.out[0].includes('shown'));
    assert.equal(getLoggerState().levelName, 'verbose');
  });

  it('json mode silences human output but logger.json prints JSON to stdout', () => {
    configureLogger({ json: true });
    const { out, err } = capture(() => { logger.info('i'); logger.error('e'); logger.json({ ok: true }); });
    assert.equal(err.length, 0);
    assert.equal(out.length, 1);
    assert.deepEqual(JSON.parse(out[0]), { ok: true });
  });
});
