/**
 * CSS Generator Error Handling Tests
 * Tests for error boundaries and graceful degradation
 */

import { describe, it } from 'node:test';
import assert from 'node:assert';
import { generateRule, generateCSS } from '../../../src/compiler/generators/css.js';
import { defaultConfig } from '../../../src/config/defaults.js';

describe('CSS Generator Error Handling', () => {
  describe('generateRule', () => {
    it('handles null token gracefully', () => {
      const result = generateRule(null, defaultConfig);
      assert.strictEqual(result, '');
    });

    it('handles undefined token gracefully', () => {
      const result = generateRule(undefined, defaultConfig);
      assert.strictEqual(result, '');
    });

    it('handles token with missing attrType', () => {
      const token = {
        raw: 'flex',
        property: 'flex',
        value: 'flex'
      };
      const result = generateRule(token, defaultConfig);
      assert.strictEqual(result, '');
    });

    it('handles token with missing raw value', () => {
      const token = {
        attrType: 'layout',
        property: 'flex',
        value: 'flex'
      };
      const result = generateRule(token, defaultConfig);
      assert.strictEqual(result, '');
    });

    it('handles token with invalid attrType', () => {
      const token = {
        raw: 'flex',
        attrType: 'invalid',
        property: 'flex',
        value: 'flex'
      };
      const result = generateRule(token, defaultConfig);
      assert.strictEqual(result, '');
    });

    it('handles malformed layout rule without crashing', () => {
      const token = {
        raw: 'test',
        attrType: 'layout',
        property: null,
        value: null
      };
      const result = generateRule(token, defaultConfig);
      assert.strictEqual(result, '');
    });

    it('handles malformed space rule without crashing', () => {
      const token = {
        raw: 'test',
        attrType: 'space',
        property: null,
        value: null
      };
      const result = generateRule(token, defaultConfig);
      assert.strictEqual(result, '');
    });

    it('handles malformed visual rule without crashing', () => {
      const token = {
        raw: 'test',
        attrType: 'visual',
        property: null,
        value: null
      };
      const result = generateRule(token, defaultConfig);
      assert.strictEqual(result, '');
    });
  });

  describe('generateCSS', () => {
    it('handles null tokens array', () => {
      const result = generateCSS(null, defaultConfig);
      assert.strictEqual(result, '');
    });

    it('handles undefined tokens array', () => {
      const result = generateCSS(undefined, defaultConfig);
      assert.strictEqual(result, '');
    });

    it('handles empty tokens array', () => {
      const result = generateCSS([], defaultConfig);
      assert.ok(typeof result === 'string');
      assert.ok(result.includes(':root'));
      assert.ok(!result.includes('[layout~="'));
    });

    it('handles malformed tokens without crashing', () => {
      const malformedTokens = [
        null,
        undefined,
        { raw: 'test' },
        { attrType: 'layout' },
        { raw: 'test', attrType: 'invalid' }
      ];
      const result = generateCSS(malformedTokens, defaultConfig);
      assert.ok(typeof result === 'string');
      assert.ok(result.includes(':root'));
    });

    it('handles valid tokens mixed with malformed ones', () => {
      const mixedTokens = [
        { raw: 'flex', attrType: 'layout', property: 'flex', value: 'flex' },
        null,
        { raw: 'center', attrType: 'layout', property: 'items', value: 'center' },
        undefined,
        { raw: 'p:medium', attrType: 'space', property: 'p', value: 'medium' }
      ];
      const result = generateCSS(mixedTokens, defaultConfig);
      assert.ok(typeof result === 'string');
      assert.ok(result.includes('[layout~="flex"]'));
      assert.ok(result.includes('[layout~="center"]'));
      assert.ok(result.includes('[space~="p:medium"]'));
    });

    it('handles null config gracefully', () => {
      const result = generateCSS([], null);
      assert.strictEqual(result, '');
    });

    it('handles invalid config gracefully', () => {
      const result = generateCSS([], 'invalid');
      assert.strictEqual(result, '');
    });

    it('handles config with missing theme', () => {
      const invalidConfig = { ...defaultConfig, theme: null };
      const result = generateCSS([], invalidConfig);
      assert.ok(typeof result === 'string');
    });

    it('handles tokens with invalid state values', () => {
      const invalidTokens = [
        { raw: 'flex:invalid', attrType: 'layout', property: 'flex', value: 'flex', state: 'invalid-state' }
      ];
      const result = generateCSS(invalidTokens, defaultConfig);
      assert.ok(typeof result === 'string');
    });

    it('handles tokens with invalid breakpoint values', () => {
      const invalidTokens = [
        { raw: 'invalid:flex', attrType: 'layout', property: 'flex', value: 'flex', breakpoint: 'invalid-bp' }
      ];
      const result = generateCSS(invalidTokens, defaultConfig);
      assert.ok(typeof result === 'string');
    });
  });

  describe('CSS Rule Validation', () => {
    it('always generates valid declarations with semicolons', () => {
      const token = {
        raw: 'flex',
        attrType: 'layout',
        property: 'flex',
        value: 'flex'
      };
      const result = generateRule(token, defaultConfig);
      assert.ok(result.includes('{'));
      assert.ok(result.includes('}'));
      assert.ok(result.includes(';'));
      assert.ok(result.endsWith('}\n'));
    });

    it('rejects declarations without property', () => {
      const token = {
        raw: 'test',
        attrType: 'layout',
        property: '',
        value: 'flex'
      };
      const result = generateRule(token, defaultConfig);
      assert.strictEqual(result, '');
    });

    it('rejects declarations without value', () => {
      const token = {
        raw: 'test',
        attrType: 'layout',
        property: 'display',
        value: ''
      };
      const result = generateRule(token, defaultConfig);
      assert.strictEqual(result, '');
    });
  });
});
