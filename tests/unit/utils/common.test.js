import { describe, it } from 'node:test';
import assert from 'node:assert';
import { sanitizeValue } from '../../../src/utils/common.js';

describe('Common Utilities', () => {
  describe('sanitizeValue', () => {
    it('returns empty string for non-string input', () => {
      // @ts-ignore
      assert.strictEqual(sanitizeValue(null), '');
      // @ts-ignore
      assert.strictEqual(sanitizeValue(undefined), '');
      // @ts-ignore
      assert.strictEqual(sanitizeValue(123), '');
      // @ts-ignore
      assert.strictEqual(sanitizeValue({}), '');
    });

    it('sanitizes dangerous characters', () => {
      assert.strictEqual(sanitizeValue('color: red;'), 'color: red_');
    });

    it('returns the same string if no dangerous characters are present', () => {
      assert.strictEqual(sanitizeValue('red-500'), 'red-500');
    });
  });
});
