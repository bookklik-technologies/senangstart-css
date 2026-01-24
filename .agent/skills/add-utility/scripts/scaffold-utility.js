#!/usr/bin/env node

/**
 * Scaffold New Utility
 * 
 * Helper script to generate boilerplate for a new SenangStart utility.
 * Creates definition, adds stub to JIT engine, and generates test file.
 * 
 * Usage: node .agent/skills/add-utility/scripts/scaffold-utility.js <name> <category>
 * 
 * Example: node .agent/skills/add-utility/scripts/scaffold-utility.js glow visual
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, '../../../../');

// Parse arguments
const args = process.argv.slice(2);
const utilityName = args[0];
const category = args[1] || 'visual';

if (!utilityName) {
  console.log(`
📦 SenangStart Utility Scaffold

Usage: node scaffold-utility.js <name> [category]

Arguments:
  name      Utility name (e.g., 'glow', 'outline-offset')
  category  Category: layout | space | visual (default: visual)

Example:
  node scaffold-utility.js glow visual
  node scaffold-utility.js gap-x space
  node scaffold-utility.js grid-flow layout
`);
  process.exit(0);
}

console.log(`\n🔧 Scaffolding utility: ${utilityName} (${category})\n`);

// ============================================
// 1. Generate Definition Template
// ============================================

const definitionTemplate = `/**
 * ${utilityName} - SenangStart CSS Utility Definition
 * Category: ${category}
 * 
 * TODO: Update values, descriptions, and examples
 */

export const ${toCamelCase(utilityName)}Definition = {
  name: '${utilityName}',
  property: 'TODO-css-property',
  category: '${category}',
  attribute: '${category}',
  description: 'TODO: English description',
  descriptionMs: 'TODO: Malay description',
  syntax: '${utilityName}:<value>',
  values: [
    { name: 'small', value: 'TODO', description: 'Small value' },
    { name: 'medium', value: 'TODO', description: 'Medium value' },
    { name: 'big', value: 'TODO', description: 'Big value' },
    { name: 'none', value: 'none', description: 'Disable' }
  ],
  examples: [
    { code: '${category}="${utilityName}:small"', description: 'Basic usage' },
    { code: '${category}="hover:${utilityName}:medium"', description: 'On hover' }
  ],
  notes: 'TODO: Additional notes for documentation'
};

export default { ${toCamelCase(utilityName)}Definition };
`;

// ============================================
// 2. Generate Test Template
// ============================================

const testTemplate = `/**
 * ${utilityName} Utility Tests
 */

import { test, describe } from 'node:test';
import assert from 'node:assert';
// import { generateVisualRule } from '../../../../src/compiler/generators/css.js';

const mockConfig = {
  theme: {
    // TODO: Add required theme scales
  }
};

describe('${utilityName} utility', () => {
  test('generates correct CSS for small value', () => {
    const token = { 
      property: '${utilityName}', 
      value: 'small', 
      attrType: '${category}' 
    };
    // TODO: Uncomment and update when generator is implemented
    // const result = generate${capitalize(category)}Rule(token, mockConfig);
    // assert.strictEqual(result, 'TODO-expected-css');
    assert.ok(true, 'TODO: Implement test');
  });

  test('generates correct CSS for none value', () => {
    const token = { 
      property: '${utilityName}', 
      value: 'none', 
      attrType: '${category}' 
    };
    // TODO: Implement
    assert.ok(true, 'TODO: Implement test');
  });

  test('handles arbitrary values', () => {
    const token = { 
      property: '${utilityName}', 
      value: '10px', 
      attrType: '${category}',
      isArbitrary: true
    };
    // TODO: Implement
    assert.ok(true, 'TODO: Implement test');
  });
});
`;

// ============================================
// 3. Generate JIT Engine Stub
// ============================================

const jitStubTemplate = `
// ============================================
// ${utilityName.toUpperCase()} UTILITY
// Add this to generate${capitalize(category)}Rule() in src/cdn/senangstart-engine.js
// ============================================

/*
if (prop === '${utilityName}') {
  if (value === 'none') {
    return 'TODO-css-property: none';
  }
  // TODO: Add scale lookup
  // const scaled = config.theme.TODO_SCALE?.[value];
  // if (scaled) return \`TODO-css-property: \${scaled}\`;
  
  // Arbitrary value support
  if (value.startsWith('[') && value.endsWith(']')) {
    return \`TODO-css-property: \${value.slice(1, -1)}\`;
  }
}
*/
`;

// ============================================
// Write Files
// ============================================

// Create output directory
const outputDir = path.join(rootDir, '.agent', 'skills', 'add-utility', 'generated');
fs.mkdirSync(outputDir, { recursive: true });

// Write definition
const defPath = path.join(outputDir, `${utilityName}-definition.js`);
fs.writeFileSync(defPath, definitionTemplate);
console.log(`✓ Created definition template: ${path.relative(rootDir, defPath)}`);

// Write test
const testPath = path.join(outputDir, `${utilityName}.test.js`);
fs.writeFileSync(testPath, testTemplate);
console.log(`✓ Created test template: ${path.relative(rootDir, testPath)}`);

// Write JIT stub
const jitPath = path.join(outputDir, `${utilityName}-jit-stub.js`);
fs.writeFileSync(jitPath, jitStubTemplate);
console.log(`✓ Created JIT stub: ${path.relative(rootDir, jitPath)}`);

console.log(`
📋 Next Steps:

1. Move definition to src/definitions/${category}.js or create new file
2. Export from src/definitions/index.js
3. Add handler to src/cdn/senangstart-engine.js (use stub as reference)
4. Add handler to src/compiler/generators/css.js (same logic)
5. Move test to tests/unit/compiler/generators/
6. Run: npm run docs:generate
7. Run: npm test

Generated files are in: .agent/skills/add-utility/generated/
`);

// ============================================
// Helper Functions
// ============================================

function toCamelCase(str) {
  return str.replace(/-([a-z])/g, (_, c) => c.toUpperCase());
}

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
