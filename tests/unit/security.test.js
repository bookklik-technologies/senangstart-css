/**
 * SenangStart CSS - Security Unit Tests
 */

import { describe, it } from 'node:test';
import assert from 'node:assert';
import { parseSource } from '../../src/compiler/parser.js';
import { tokenize, tokenizeAll } from '../../src/compiler/tokenizer.js';
import { mergeConfig, deepMerge } from '../../src/config/defaults.js';

describe('Security Tests', () => {

  describe('Parser - ReDoS Prevention', () => {

    it('handles maliciously long attribute values without freezing', () => {
      const longValue = 'a'.repeat(10000);
      const maliciousHtml = `<div layout="${longValue}"></div>`;

      const startTime = Date.now();
      const result = parseSource(maliciousHtml);
      const elapsed = Date.now() - startTime;

      assert.ok(elapsed < 1000, `Parser took too long: ${elapsed}ms`);
    });

    it('truncates excessively long attribute values', () => {
      const longValue = 'a'.repeat(10000);
      const html = `<div layout="${longValue}"></div>`;

      const result = parseSource(html);

      assert.ok(result.layout.size <= 1);
    });

    it('handles deeply nested quotes without catastrophic backtracking', () => {
      const maliciousHtml = `<div layout="${'"'.repeat(1000)}"></div>`;

      const startTime = Date.now();
      const result = parseSource(maliciousHtml);
      const elapsed = Date.now() - startTime;

      assert.ok(elapsed < 500, `Parser took too long: ${elapsed}ms`);
    });

  });

  describe('Tokenizer - Input Validation', () => {

    it('rejects empty token strings', () => {
      const result = tokenize('', 'layout');
      assert.strictEqual(result.error, 'Invalid token format');
    });

    it('rejects excessively long token strings', () => {
      const longToken = 'a'.repeat(201);
      const result = tokenize(longToken, 'layout');
      assert.strictEqual(result.error, 'Invalid token format');
    });

    it('validates token property length', () => {
      const result = tokenize('propertynameexceedsonehundredcharactersdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd:medium', 'layout');
      assert.strictEqual(result.error, 'Invalid token structure');
    });

    it('rejects invalid breakpoint prefixes', () => {
      const result = tokenize('invalid:breakpoint:p:medium', 'layout');
      assert.strictEqual(result.breakpoint, null);
    });

    it('rejects invalid state prefixes', () => {
      const result = tokenize('invalid:state:p:medium', 'layout');
      assert.strictEqual(result.state, null);
    });

    it('sanitizes semicolons in values to prevent CSS injection', () => {
      const result = tokenize('p:[color:red;]', 'space');
      assert.strictEqual(result.value, 'color:red_');
      assert.strictEqual(result.isArbitrary, true);
    });

    it('allows braces for legitimate use cases like content icons', () => {
      const result = tokenize('content:["{icon}"]', 'visual');
      assert.strictEqual(result.value, '"{icon}"');
      assert.strictEqual(result.isArbitrary, true);
    });

    it('sanitizes semicolons in arbitrary values', () => {
      const result = tokenize('content:[test;]', 'visual');
      assert.strictEqual(result.value, 'test_');
    });

  });

  describe('Config - Deep Merge', () => {

    it('deep merges nested theme objects', () => {
      const userConfig = {
        theme: {
          customSection: {
            nested: {
              deep: 'value'
            }
          }
        }
      };

      const result = mergeConfig(userConfig);
      assert.strictEqual(result.theme.customSection.nested.deep, 'value');
    });

    it('preserves defaults when user adds nested properties', () => {
      const userConfig = {
        theme: {
          colors: {
            'custom': '#123456'
          }
        }
      };

      const result = mergeConfig(userConfig);
      assert.strictEqual(result.theme.colors.custom, '#123456');
      assert.strictEqual(result.theme.colors.primary, '#2563EB');
    });

    it('handles circular references gracefully', () => {
      const obj = { test: 'value' };
      obj.self = obj;

      const userConfig = {
        theme: {
          colors: obj
        }
      };

      // Should not throw and should handle the circular reference
      assert.doesNotThrow(() => mergeConfig(userConfig));
    });

  });

  describe('Deep Merge Utility', () => {

    it('merges nested objects recursively', () => {
      const target = {
        a: { b: { c: 1 } },
        d: 2
      };

      const source = {
        a: { b: { e: 3 } },
        f: 4
      };

      const result = deepMerge(target, source);

      assert.deepStrictEqual(result, {
        a: { b: { c: 1, e: 3 } },
        d: 2,
        f: 4
      });
    });

    it('overrides primitive values', () => {
      const result = deepMerge(
        { value: 'original' },
        { value: 'updated' }
      );

      assert.strictEqual(result.value, 'updated');
    });

    it('handles undefined source values', () => {
      const result = deepMerge(
        { a: 1 },
        { b: undefined }
      );

      assert.strictEqual(result.a, 1);
      assert.strictEqual(result.b, undefined);
    });

  });

  describe('TokenizeAll - Security', () => {

    it('filters out tokens with errors', () => {
      const parsed = {
        layout: new Set(['']),
        space: new Set(['p:medium']),
        visual: new Set([])
      };

      const tokens = tokenizeAll(parsed);

      const errorToken = tokens.find(t => t.error);
      assert.ok(errorToken, 'Should have an error token');

      const validTokens = tokens.filter(t => !t.error);
      assert.ok(validTokens.length >= 1);
      assert.strictEqual(validTokens[0].property, 'p');
      assert.strictEqual(validTokens[0].value, 'medium');
    });

  });

});
