/**
 * SenangStart CSS - Logger Tests
 */
import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { logger } from '../../../src/utils/logger.js';

describe('Logger', () => {
  it('exports logger with all methods', () => {
    assert.equal(typeof logger.info, 'function');
    assert.equal(typeof logger.success, 'function');
    assert.equal(typeof logger.warn, 'function');
    assert.equal(typeof logger.error, 'function');
    assert.equal(typeof logger.build, 'function');
    assert.equal(typeof logger.watch, 'function');
  });

  it('calls info without throwing', () => {
    assert.doesNotThrow(() => logger.info('test message'));
  });

  it('calls error without throwing', () => {
    assert.doesNotThrow(() => logger.error('test error'));
  });

  it('calls success without throwing', () => {
    assert.doesNotThrow(() => logger.success('test success'));
  });

  it('calls warn without throwing', () => {
    assert.doesNotThrow(() => logger.warn('test warning'));
  });

  it('calls build without throwing', () => {
    assert.doesNotThrow(() => logger.build('test build'));
  });

  it('calls watch without throwing', () => {
    assert.doesNotThrow(() => logger.watch('test watch'));
  });
});