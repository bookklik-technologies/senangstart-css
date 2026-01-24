/**
 * Example: Adding a Simple Visual Utility
 * 
 * This example shows how to add a new 'glow' utility that adds
 * a colored shadow effect to elements.
 * 
 * Usage: visual="glow:primary glow:blue-500"
 */

// ================================================
// Step 1: Add to Definition File
// ================================================
// File: src/definitions/visual.js or create visual-glow.js

export const glowDefinition = {
  name: 'glow',
  property: 'box-shadow',
  category: 'visual',
  attribute: 'visual',
  description: 'Adds a colored glow effect around the element',
  descriptionMs: 'Menambah kesan cahaya berwarna di sekeliling elemen',
  syntax: 'glow:<color>',
  values: [
    { name: 'primary', value: '0 0 20px var(--ss-color-primary)', description: 'Primary color glow' },
    { name: 'secondary', value: '0 0 20px var(--ss-color-secondary)', description: 'Secondary color glow' },
    { name: 'none', value: 'none', description: 'Remove glow' }
  ],
  examples: [
    { code: 'visual="glow:primary"', description: 'Blue glow effect' },
    { code: 'visual="glow:secondary"', description: 'Purple glow effect' },
    { code: 'visual="hover:glow:primary"', description: 'Glow on hover' }
  ],
  notes: 'Accepts any color from the color palette'
};

// ================================================
// Step 2: Add Handler to JIT Engine
// ================================================
// File: src/cdn/senangstart-engine.js
// Add in generateVisualRule() function:

/*
if (prop === 'glow') {
  if (value === 'none') {
    return 'box-shadow: none';
  }
  const color = config.theme.colors[value];
  if (color) {
    return `box-shadow: 0 0 20px ${color}`;
  }
  // Arbitrary color support
  if (value.startsWith('[') && value.endsWith(']')) {
    return `box-shadow: 0 0 20px ${value.slice(1, -1)}`;
  }
}
*/

// ================================================
// Step 3: Add Handler to CSS Generator
// ================================================
// File: src/compiler/generators/css.js
// Add in generateVisualRule() function (same logic as JIT):

/*
if (prop === 'glow') {
  if (value === 'none') {
    return 'box-shadow: none';
  }
  const color = config.theme.colors[value];
  if (color) {
    return `box-shadow: 0 0 20px ${color}`;
  }
  if (token.isArbitrary) {
    return `box-shadow: 0 0 20px ${sanitizeArbitraryValue(value)}`;
  }
}
*/

// ================================================
// Step 4: Write Test
// ================================================
// File: tests/unit/compiler/generators/glow.test.js

/*
import { test, describe } from 'node:test';
import assert from 'node:assert';
import { generateVisualRule } from '../../../../src/compiler/generators/css.js';

const mockConfig = {
  theme: {
    colors: {
      'primary': '#3B82F6',
      'secondary': '#8B5CF6'
    }
  }
};

describe('glow utility', () => {
  test('generates glow with primary color', () => {
    const token = { property: 'glow', value: 'primary', attrType: 'visual' };
    const result = generateVisualRule(token, mockConfig);
    assert.strictEqual(result, 'box-shadow: 0 0 20px #3B82F6');
  });

  test('generates glow:none', () => {
    const token = { property: 'glow', value: 'none', attrType: 'visual' };
    const result = generateVisualRule(token, mockConfig);
    assert.strictEqual(result, 'box-shadow: none');
  });
});
*/

// ================================================
// Step 5: Generate Documentation
// ================================================
// Run: npm run docs:generate
// This creates docs/reference/visual/glow.md automatically
