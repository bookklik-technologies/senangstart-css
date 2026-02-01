import { describe, it } from 'node:test';
import assert from 'node:assert';
import {
  getAllDefinitions,
  getDefinitionsByCategory,
  getDefinition,
  validateDefinitions,
  buildAllMaps
} from '../../../src/definitions/index.js';

describe('Utility Definitions Index', () => {
  describe('getAllDefinitions', () => {
    it('returns a flat array of all definitions', () => {
      const allDefs = getAllDefinitions();
      assert.ok(Array.isArray(allDefs));
      assert.ok(allDefs.length > 0);
      // Verify some known definitions are present
      const names = allDefs.map(d => d.name);
      assert.ok(names.includes('display'));
      assert.ok(names.includes('padding'));
      assert.ok(names.includes('text-color'));
      assert.ok(names.includes('background-color'));
    });
  });

  describe('getDefinitionsByCategory', () => {
    it('returns definitions grouped by category', () => {
      const byCategory = getDefinitionsByCategory();
      assert.ok(byCategory.layout);
      assert.ok(byCategory.space);
      assert.ok(byCategory.visual);
      assert.ok(Array.isArray(byCategory.layout));
      assert.ok(Array.isArray(byCategory.space));
      assert.ok(Array.isArray(byCategory.visual));
    });
  });

  describe('getDefinition', () => {
    it('returns a specific definition by name', () => {
      const def = getDefinition('display');
      assert.strictEqual(def.name, 'display');
      assert.strictEqual(def.category, 'layout');
    });

    it('returns null for unknown definitions', () => {
      const def = getDefinition('nonexistent-definition');
      assert.strictEqual(def, null);
    });
  });

  describe('validateDefinitions', () => {
    it('validates that all definitions are complete', () => {
      const result = validateDefinitions();
      assert.strictEqual(result.valid, true);
      assert.strictEqual(result.errors.length, 0);
    });

    it('reports missing fields', () => {
      const brokenDefs = [
        { name: 'broken' } // Missing property, description, descriptionMs, category
      ];
      const result = validateDefinitions(brokenDefs);
      assert.strictEqual(result.valid, false);
      assert.ok(result.errors.some(e => e.includes("Missing 'property'")));
      assert.ok(result.errors.some(e => e.includes("Missing 'description'")));
      assert.ok(result.errors.some(e => e.includes("Missing 'descriptionMs'")));
      assert.ok(result.errors.some(e => e.includes("Missing 'category'")));
    });

    it('reports unknown name for missing fields if name is missing', () => {
      const brokenDefs = [
        { property: 'test' } // Missing name
      ];
      const result = validateDefinitions(brokenDefs);
      assert.ok(result.errors.some(e => e.includes("in definition 'unknown'")));
    });

    it('reports missing examples', () => {
      const brokenDefs = [
        {
          name: 'no-examples',
          property: 'test',
          description: 'test',
          descriptionMs: 'test',
          category: 'test',
          examples: []
        }
      ];
      const result = validateDefinitions(brokenDefs);
      assert.strictEqual(result.valid, false);
      assert.ok(result.errors.some(e => e.includes("Missing examples in definition 'no-examples'")));
    });
  });

  describe('buildAllMaps', () => {
    it('builds all CSS generator maps', () => {
      const maps = buildAllMaps();
      assert.ok(maps.layoutMap);
      assert.ok(maps.spacePropertyMap);
      assert.ok(maps.typographyKeywords);
      
      // Check for some expected values
      assert.strictEqual(maps.layoutMap['flex'], 'display: flex;');
      assert.strictEqual(maps.spacePropertyMap['p'], 'padding: var(--s-{value});');
      assert.ok(maps.typographyKeywords['italic'] !== undefined);
    });
  });
});
