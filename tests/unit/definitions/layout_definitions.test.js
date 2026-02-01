import { describe, it } from 'node:test';
import assert from 'node:assert';
import { buildLayoutMap } from '../../../src/definitions/layout.js';

describe('Layout Definitions', () => {
  describe('buildLayoutMap', () => {
    it('builds a map of layout values to CSS', () => {
      const map = buildLayoutMap();
      assert.ok(typeof map === 'object');
      // Check for some common layout values
      assert.strictEqual(map['flex'], 'display: flex;');
      assert.strictEqual(map['grid'], 'display: grid;');
      assert.strictEqual(map['hidden'], 'display: none;');
    });

    it('skips range values like "1-12"', () => {
      const map = buildLayoutMap();
      // Values like '1-12' (used in grid-cols etc) should be skipped by buildLayoutMap
      // as they are handled by dynamic generators or special syntax
      assert.strictEqual(map['1-12'], undefined);
    });

    it('skips mocked range values to hit coverage', () => {
      const mockDefinitions = {
        test: {
          name: 'test',
          syntax: 'layout="["',
          dynamic: false,
          values: [
            { value: '1-5', css: 'test: {n};' },
            { value: 'normal', css: 'test: normal;' }
          ]
        }
      };
      const map = buildLayoutMap(mockDefinitions);
      assert.strictEqual(map['1-5'], undefined);
      assert.strictEqual(map['normal'], 'test: normal;');
    });
  });
});
