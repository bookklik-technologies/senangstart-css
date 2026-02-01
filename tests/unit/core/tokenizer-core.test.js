/**
 * SenangStart CSS - Tokenizer Core Unit Tests
 */

import { describe, it } from 'node:test';
import assert from 'node:assert';
import { tokenize, isValidToken } from '../../../src/core/tokenizer-core.js';

describe('Tokenizer Core', () => {

  describe('isValidToken', () => {

    it('returns false for missing property', () => {
      assert.strictEqual(isValidToken({ value: 'val' }), false);
    });

    it('returns false for non-string property', () => {
      assert.strictEqual(isValidToken({ property: 123, value: 'val' }), false);
    });

    it('returns false for too long property', () => {
      assert.strictEqual(isValidToken({ property: 'a'.repeat(101), value: 'val' }), false);
    });

    it('returns false for non-string value', () => {
      assert.strictEqual(isValidToken({ property: 'prop', value: 123 }), false);
    });

    it('returns false for too long value', () => {
      assert.strictEqual(isValidToken({ property: 'prop', value: 'a'.repeat(501) }), false);
    });

    it('returns false for invalid breakpoint', () => {
      assert.strictEqual(isValidToken({ property: 'prop', value: 'val', breakpoint: 'unknown' }), false);
    });

    it('returns false for invalid state', () => {
      assert.strictEqual(isValidToken({ property: 'prop', value: 'val', state: 'unknown' }), false);
    });

    it('returns true for valid minimal token', () => {
      assert.strictEqual(isValidToken({ property: 'prop', value: 'val' }), true);
    });

    it('returns true for valid full token', () => {
      assert.strictEqual(isValidToken({ 
        property: 'prop', 
        value: 'val', 
        breakpoint: 'tab', 
        state: 'hover' 
      }), true);
    });

    it('returns true for null value', () => {
      assert.strictEqual(isValidToken({ property: 'prop', value: null }), true);
    });
  });

  describe('tokenize - Validation Edge Cases', () => {

    it('returns error for non-string raw input', () => {
      const token = tokenize(123, 'space');
      assert.strictEqual(token.error, 'Invalid token format');
    });

    it('returns error for empty raw input', () => {
      const token = tokenize('', 'space');
      assert.strictEqual(token.error, 'Invalid token format');
    });

    it('returns error for too long raw input', () => {
      const token = tokenize('a'.repeat(201), 'space');
      assert.strictEqual(token.error, 'Invalid token format');
    });

    it('returns error for invalid token structure', () => {
      // unknown:bg:white -> unknown is not a breakpoint, so it becomes property 'unknown'
      // but if we force an invalid state or something
      const token = tokenize('unknown:state:prop:val', 'space');
      // wait, tokenize doesn't throw on unknown prefixes unless validated by isValidToken
      // if parts[0] is not a breakpoint, it's not shifted.
      
      const invalidToken = tokenize('prop:val:too:many:parts', 'space');
      // This will still be a valid token structure but might not be what's expected.
      
      // Force isValidToken to fail by using a reserved word that isn't a breakpoint or state in a prefix position
      // but since tokenize logic only checks BREAKPOINTS.includes(parts[0]), it defaults to property.
      
      // Let's test a case where it results in an invalid token structure
      const longProp = 'a'.repeat(101);
      const tokenLong = tokenize(`${longProp}:val`, 'space');
      assert.strictEqual(tokenLong.error, 'Invalid token structure');
    });

    it('handles single part tokens for space/visual attributes', () => {
      const token = tokenize('single', 'space');
      assert.strictEqual(token.property, 'single');
      assert.strictEqual(token.value, 'single');
    });
  });

});
