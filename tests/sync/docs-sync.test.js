/**
 * SenangStart CSS - Documentation-Code Sync Tests
 * Ensures definitions produce correct CSS and documentation stays in sync
 */

import { describe, it } from 'node:test';
import assert from 'node:assert';
import { 
  getAllDefinitions,
  getDefinitionsByCategory,
  validateDefinitions,
  buildAllMaps,
  layoutDefinitions,
  spaceDefinitions,
  visualDefinitions
} from '../../src/definitions/index.js';
import { generateCSS } from '../../src/compiler/generators/css.js';
import { createTestConfig } from '../helpers/test-utils.js';

describe('Definitions Validation', () => {

  it('all definitions have required fields', () => {
    const { valid, errors } = validateDefinitions();
    
    if (!valid) {
      console.error('Validation errors:', errors);
    }
    
    assert.ok(valid, `Definition validation failed: ${errors.join(', ')}`);
  });

  it('all definitions have name field', () => {
    const definitions = getAllDefinitions();
    
    for (const def of definitions) {
      assert.ok(def.name, 'Definition missing name field');
    }
  });

  it('all definitions have category field', () => {
    const definitions = getAllDefinitions();
    
    for (const def of definitions) {
      assert.ok(def.category, `Definition '${def.name}' missing category field`);
      assert.ok(
        ['layout', 'space', 'visual'].includes(def.category),
        `Definition '${def.name}' has invalid category '${def.category}'`
      );
    }
  });

  it('all definitions have bilingual descriptions', () => {
    const definitions = getAllDefinitions();
    
    for (const def of definitions) {
      assert.ok(def.description, `Definition '${def.name}' missing English description`);
      assert.ok(def.descriptionMs, `Definition '${def.name}' missing Malay description`);
    }
  });

  it('all definitions have at least one example', () => {
    const definitions = getAllDefinitions();
    
    for (const def of definitions) {
      assert.ok(
        def.examples && def.examples.length > 0,
        `Definition '${def.name}' missing examples`
      );
    }
  });

});

describe('Layout Definition CSS Generation', () => {

  it('display definitions produce correct CSS', () => {
    const config = createTestConfig();
    const displayDef = layoutDefinitions.display;
    
    for (const v of displayDef.values) {
      const token = { 
        property: v.value, 
        value: v.value, 
        attrType: 'layout', 
        raw: v.value 
      };
      const css = generateCSS([token], config);
      
      // Extract expected property from definition
      const expectedProperty = v.css.split(':')[0].trim();
      assert.ok(
        css.includes(expectedProperty),
        `Display '${v.value}' should generate '${expectedProperty}' in CSS`
      );
    }
  });

  it('flex direction definitions produce correct CSS', () => {
    const config = createTestConfig();
    const flexDirDef = layoutDefinitions.flexDirection;
    
    for (const v of flexDirDef.values) {
      const token = { 
        property: v.value, 
        value: v.value, 
        attrType: 'layout', 
        raw: v.value 
      };
      const css = generateCSS([token], config);
      
      assert.ok(
        css.includes('flex-direction'),
        `Flex direction '${v.value}' should output flex-direction CSS`
      );
    }
  });

  it('position definitions produce correct CSS', () => {
    const config = createTestConfig();
    const posDef = layoutDefinitions.position;
    
    for (const v of posDef.values) {
      const token = { 
        property: v.value, 
        value: v.value, 
        attrType: 'layout', 
        raw: v.value 
      };
      const css = generateCSS([token], config);
      
      assert.ok(
        css.includes('position:') || css.includes('position:'),
        `Position '${v.value}' should output position CSS`
      );
    }
  });

  it('justify content definitions produce correct CSS', () => {
    const config = createTestConfig();
    const justifyDef = layoutDefinitions.justifyContent;
    
    for (const v of justifyDef.values) {
      const token = { 
        property: 'justify', 
        value: v.value, 
        attrType: 'layout', 
        raw: `justify:${v.value}` 
      };
      const css = generateCSS([token], config);
      
      assert.ok(
        css.includes('justify-content'),
        `Justify '${v.value}' should output justify-content CSS`
      );
    }
  });

  it('align items definitions produce correct CSS', () => {
    const config = createTestConfig();
    const alignDef = layoutDefinitions.alignItems;
    
    for (const v of alignDef.values) {
      const token = { 
        property: 'items', 
        value: v.value, 
        attrType: 'layout', 
        raw: `items:${v.value}` 
      };
      const css = generateCSS([token], config);
      
      assert.ok(
        css.includes('align-items'),
        `Items '${v.value}' should output align-items CSS`
      );
    }
  });

});

describe('Visual Definition CSS Generation', () => {

  it('typography keywords produce correct CSS', () => {
    const config = createTestConfig();
    const typoDef = visualDefinitions.typographyKeywords;
    
    // Test a sample of typography keywords
    const sampleKeywords = ['italic', 'uppercase', 'underline', 'truncate'];
    
    for (const keyword of sampleKeywords) {
      const valueDef = typoDef.values.find(v => v.value === keyword);
      assert.ok(valueDef, `Typography keyword '${keyword}' should be defined`);
      
      const token = { 
        property: keyword, 
        value: keyword, 
        attrType: 'visual', 
        raw: keyword 
      };
      const css = generateCSS([token], config);
      
      // Check that CSS contains expected property
      const expectedCSSPart = valueDef.css.split(':')[0].trim();
      assert.ok(
        css.toLowerCase().includes(expectedCSSPart.toLowerCase().replace('-webkit-', '')),
        `Typography '${keyword}' should output expected CSS property`
      );
    }
  });

  it('opacity definitions produce correct CSS', () => {
    const config = createTestConfig();
    
    const token = { 
      property: 'opacity', 
      value: '50', 
      attrType: 'visual', 
      raw: 'opacity:50' 
    };
    const css = generateCSS([token], config);
    
    assert.ok(css.includes('opacity: 0.5'), 'Opacity 50 should output opacity: 0.5');
  });

  it('border radius definitions use scale variables', () => {
    const config = createTestConfig();
    const radiusDef = visualDefinitions.borderRadius;
    
    for (const v of radiusDef.values) {
      const token = { 
        property: 'rounded', 
        value: v.value, 
        attrType: 'visual', 
        raw: `rounded:${v.value}` 
      };
      const css = generateCSS([token], config);
      
      assert.ok(
        css.includes('border-radius'),
        `Rounded '${v.value}' should output border-radius CSS`
      );
    }
  });

});

describe('Space Definition CSS Generation', () => {

  it('padding definitions use spacing scale', () => {
    const config = createTestConfig();
    
    const token = { 
      property: 'p', 
      value: 'medium', 
      attrType: 'space', 
      raw: 'p:medium' 
    };
    const css = generateCSS([token], config);
    
    assert.ok(
      css.includes('padding') && css.includes('var(--s-medium)'),
      'Padding should use spacing variable'
    );
  });

  it('margin auto works correctly', () => {
    const config = createTestConfig();
    
    const token = { 
      property: 'm-x', 
      value: 'auto', 
      attrType: 'space', 
      raw: 'm-x:auto' 
    };
    const css = generateCSS([token], config);
    
    assert.ok(
      css.includes('margin-left: auto') && css.includes('margin-right: auto'),
      'Margin-x auto should set both sides to auto'
    );
  });

  it('gap definitions use spacing scale', () => {
    const config = createTestConfig();
    
    const token = { 
      property: 'g', 
      value: 'big', 
      attrType: 'space', 
      raw: 'g:big' 
    };
    const css = generateCSS([token], config);
    
    assert.ok(
      css.includes('gap') && css.includes('var(--s-big)'),
      'Gap should use spacing variable'
    );
  });

});

describe('Definition Maps', () => {

  it('buildAllMaps returns expected structure', () => {
    const maps = buildAllMaps();
    
    assert.ok(maps.layoutMap, 'Should have layoutMap');
    assert.ok(maps.typographyKeywords, 'Should have typographyKeywords');
  });

  it('layout map contains display values', () => {
    const maps = buildAllMaps();
    
    assert.ok(maps.layoutMap['flex'], 'Layout map should contain flex');
    assert.ok(maps.layoutMap['grid'], 'Layout map should contain grid');
    assert.ok(maps.layoutMap['hidden'], 'Layout map should contain hidden');
  });

  it('typography keywords map contains expected values', () => {
    const maps = buildAllMaps();
    
    assert.ok(maps.typographyKeywords['italic'], 'Should contain italic');
    assert.ok(maps.typographyKeywords['uppercase'], 'Should contain uppercase');
    assert.ok(maps.typographyKeywords['underline'], 'Should contain underline');
  });

});

describe('Definition Categories', () => {

  it('getDefinitionsByCategory returns all three categories', () => {
    const byCategory = getDefinitionsByCategory();
    
    assert.ok(byCategory.layout, 'Should have layout category');
    assert.ok(byCategory.space, 'Should have space category');
    assert.ok(byCategory.visual, 'Should have visual category');
  });

  it('layout category contains expected definitions', () => {
    const byCategory = getDefinitionsByCategory();
    const layoutNames = byCategory.layout.map(d => d.name);
    
    assert.ok(layoutNames.includes('display'), 'Layout should include display');
    assert.ok(layoutNames.includes('flex-direction'), 'Layout should include flex-direction');
    assert.ok(layoutNames.includes('position'), 'Layout should include position');
  });

  it('space category contains expected definitions', () => {
    const byCategory = getDefinitionsByCategory();
    const spaceNames = byCategory.space.map(d => d.name);
    
    assert.ok(spaceNames.includes('padding'), 'Space should include padding');
    assert.ok(spaceNames.includes('margin'), 'Space should include margin');
    assert.ok(spaceNames.includes('gap'), 'Space should include gap');
  });

  it('visual category contains expected definitions', () => {
    const byCategory = getDefinitionsByCategory();
    const visualNames = byCategory.visual.map(d => d.name);
    
    assert.ok(visualNames.includes('background-color'), 'Visual should include background-color');
    assert.ok(visualNames.includes('typography-keywords'), 'Visual should include typography-keywords');
  });

});
