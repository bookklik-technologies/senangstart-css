/**
 * SenangStart CSS - Syntax Extractor
 * Extracts all syntax patterns from definitions for audit purposes
 * 
 * Usage: node scripts/extract-syntax.js
 * Output: docs/SYNTAX-REFERENCE.md
 */

import { getAllDefinitions } from '../src/definitions/index.js';
import { writeFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

function extractSyntax() {
  const definitions = getAllDefinitions();
  
  // Group definitions by category
  const grouped = {
    layout: [],
    space: [],
    visual: []
  };
  
  for (const def of definitions) {
    const category = def.category || 'visual';
    if (grouped[category]) {
      grouped[category].push(def);
    } else {
      grouped.visual.push(def);
    }
  }
  
  // Build markdown output
  let output = `# SenangStart CSS - Syntax Reference

> Auto-generated on ${new Date().toISOString().split('T')[0]}
> Total definitions: ${definitions.length}

This document provides a complete reference of all utility syntax patterns in SenangStart CSS.

---

## Summary

| Category | Count |
|----------|-------|
| Layout | ${grouped.layout.length} |
| Space | ${grouped.space.length} |
| Visual | ${grouped.visual.length} |
| **Total** | **${definitions.length}** |

---

## Layout Utilities

| Name | Syntax | Description |
|------|--------|-------------|
`;

  for (const def of grouped.layout.sort((a, b) => a.name.localeCompare(b.name))) {
    const syntax = def.syntax.replace(/"/g, '`').replace(/layout=/g, '');
    output += `| ${def.name} | ${syntax} | ${def.description} |\n`;
  }

  output += `
---

## Space Utilities

| Name | Syntax | Description |
|------|--------|-------------|
`;

  for (const def of grouped.space.sort((a, b) => a.name.localeCompare(b.name))) {
    const syntax = def.syntax.replace(/"/g, '`').replace(/space=/g, '');
    output += `| ${def.name} | ${syntax} | ${def.description} |\n`;
  }

  output += `
---

## Visual Utilities

| Name | Syntax | Description |
|------|--------|-------------|
`;

  for (const def of grouped.visual.sort((a, b) => a.name.localeCompare(b.name))) {
    const syntax = def.syntax.replace(/"/g, '`').replace(/visual=/g, '');
    output += `| ${def.name} | ${syntax} | ${def.description} |\n`;
  }

  output += `
---

## Detailed Values

`;

  // Add detailed value tables for each definition
  for (const category of ['layout', 'space', 'visual']) {
    output += `### ${category.charAt(0).toUpperCase() + category.slice(1)} Values\n\n`;
    
    for (const def of grouped[category].sort((a, b) => a.name.localeCompare(b.name))) {
      if (def.values && def.values.length > 0) {
        output += `#### ${def.name}\n\n`;
        output += `| Value | CSS Output |\n|-------|------------|\n`;
        
        for (const v of def.values) {
          const css = v.css.replace(/\|/g, '\\|');
          output += `| \`${v.value}\` | \`${css}\` |\n`;
        }
        output += '\n';
      }
    }
  }

  return output;
}

// Main execution
console.log('\n📋 SenangStart CSS Syntax Extractor\n');

try {
  const markdown = extractSyntax();
  const outputPath = join(__dirname, '..', 'docs', 'SYNTAX-REFERENCE.md');
  
  writeFileSync(outputPath, markdown);
  console.log(`✅ Extracted syntax to: ${outputPath}`);
  
  // Also output a JSON version for programmatic access
  const definitions = getAllDefinitions();
  const jsonData = definitions.map(def => ({
    name: def.name,
    property: def.property,
    syntax: def.syntax,
    category: def.category,
    values: (def.values || []).map(v => v.value),
    supportsArbitrary: def.supportsArbitrary || false
  }));
  
  const jsonPath = join(__dirname, '..', 'docs', 'syntax-reference.json');
  writeFileSync(jsonPath, JSON.stringify(jsonData, null, 2));
  console.log(`✅ Extracted JSON to: ${jsonPath}`);
  
} catch (error) {
  console.error('❌ Error:', error.message);
  process.exit(1);
}
