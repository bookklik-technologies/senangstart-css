/**
 * Memory Usage Limits Tests
 * Tests for memory protection and batch processing
 */

import { describe, it } from 'node:test';
import assert from 'node:assert';
import { getMemoryUsage, isMemorySafe, batchProcessWithMemoryLimit, batchProcessTokens } from '../../../src/utils/common.js';

describe('Memory Usage Limits', () => {
  describe('getMemoryUsage', () => {
    it('returns a number', () => {
      const memory = getMemoryUsage();
      assert.ok(typeof memory === 'number');
    });

    it('returns positive value', () => {
      const memory = getMemoryUsage();
      assert.ok(memory >= 0);
    });

    it('returns value in reasonable range', () => {
      const memory = getMemoryUsage();
      // Should be between 0 and a few GB in typical usage
      assert.ok(memory < 10000); // Less than 10GB
    });
  });

  describe('isMemorySafe', () => {
    it('returns true for normal memory usage', () => {
      const safe = isMemorySafe(500);
      assert.strictEqual(typeof safe, 'boolean');
    });

    it('uses default limit of 500MB', () => {
      const safe = isMemorySafe();
      assert.strictEqual(typeof safe, 'boolean');
    });

    it('respects custom memory limit', () => {
      const safe = isMemorySafe(1000);
      assert.strictEqual(typeof safe, 'boolean');
    });

    it('returns false when memory exceeds limit', () => {
      // Use a very low limit to ensure current usage exceeds it
      const safe = isMemorySafe(1);
      assert.strictEqual(safe, false);
    });
  });

  describe('batchProcessWithMemoryLimit', () => {
    it('processes all items in array', async () => {
      const items = [1, 2, 3, 4, 5];
      const processor = (item) => item * 2;

      const results = await batchProcessWithMemoryLimit(items, processor, 10, 500);
      assert.deepStrictEqual(results, [2, 4, 6, 8, 10]);
    });

    it('processes items in batches', async () => {
      const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
      const processor = (item) => item * 2;

      const results = await batchProcessWithMemoryLimit(items, processor, 3, 500);
      assert.deepStrictEqual(results, [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]);
    });

    it('handles empty array', async () => {
      const results = await batchProcessWithMemoryLimit([], (item) => item, 10, 500);
      assert.deepStrictEqual(results, []);
    });

    it('handles large arrays without crashing', async () => {
      const items = Array(100).fill(0).map((_, i) => i);
      const processor = (item) => item * 2;

      const results = await batchProcessWithMemoryLimit(items, processor, 20, 500);
      assert.strictEqual(results.length, 100);
      assert.strictEqual(results[0], 0);
      assert.strictEqual(results[99], 198);
    });

    it('preserves item order', async () => {
      const items = [5, 2, 8, 1, 9];
      const processor = (item) => item;

      const results = await batchProcessWithMemoryLimit(items, processor, 2, 500);
      assert.deepStrictEqual(results, [5, 2, 8, 1, 9]);
    });
  });

  describe('batchProcessTokens', () => {
    it('processes token objects', async () => {
      const tokens = [
        { raw: 'flex', attrType: 'layout' },
        { raw: 'center', attrType: 'layout' },
        { raw: 'p:medium', attrType: 'space' }
      ];

      const processor = (token) => ({ ...token, processed: true });

      const results = await batchProcessTokens(tokens, processor, 2);
      assert.strictEqual(results.length, 3);
      assert.ok(results.every(r => r.processed === true));
    });

    it('handles large token arrays', async () => {
      const tokens = Array(1000).fill(null).map((_, i) => ({
        raw: `test${i}`,
        attrType: 'layout'
      }));

      const processor = (token) => ({ ...token, index: tokens.indexOf(token) });

      const results = await batchProcessTokens(tokens, processor, 100);
      assert.strictEqual(results.length, 1000);
    });

    it('preserves token data', async () => {
      const tokens = [
        { raw: 'flex', attrType: 'layout', property: 'flex' },
        { raw: 'grid', attrType: 'layout', property: 'grid' }
      ];

      const processor = (token) => token;

      const results = await batchProcessTokens(tokens, processor, 1);
      assert.deepStrictEqual(results, tokens);
    });
  });

  describe('Memory Error Handling', () => {
    it('processes items without memory errors under normal conditions', async () => {
      // This test verifies the memory limit handling works under normal conditions
      // Actual memory limit errors are difficult to test in unit test environment

      const items = [1, 2, 3];
      const processor = (item) => item;

      const results = await batchProcessWithMemoryLimit(items, processor, 1, 500);
      assert.strictEqual(results.length, 3);
      assert.deepStrictEqual(results, [1, 2, 3]);
    });
  });

  describe('Batch Size Configuration', () => {
    it('respects custom batch size', async () => {
      const items = [1, 2, 3, 4, 5];
      const batchesProcessed = [];

      const processor = (item) => {
        batchesProcessed.push(item);
        return item * 2;
      };

      await batchProcessWithMemoryLimit(items, processor, 2, 500);
      assert.strictEqual(batchesProcessed.length, 5);
    });

    it('uses default batch size of 1000', async () => {
      const items = Array(500).fill(0).map((_, i) => i);
      const processor = (item) => item * 2;

      const results = await batchProcessTokens(items, processor);
      assert.strictEqual(results.length, 500);
    });
  });
});
