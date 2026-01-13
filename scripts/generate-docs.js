#!/usr/bin/env node

/**
 * SenangStart CSS - Documentation Generator
 * Generates markdown documentation from utility definitions
 * 
 * Usage: node scripts/generate-docs.js [--locale en|ms] [--dry-run]
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { getDefinitionsByCategory, getAllDefinitions } from '../src/definitions/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

// Configuration
const config = {
  docsDir: path.join(rootDir, 'docs'),
  locales: ['en', 'ms'],
  categories: {
    layout: 'layout',
    space: 'space',
    visual: 'visual'
  }
};

/**
 * Generate markdown for a single definition
 */
function generateMarkdown(definition, locale = 'en') {
  const isMs = locale === 'ms';
  const lines = [];
  
  // Title
  lines.push(`# ${formatTitle(definition.name)}`);
  lines.push('');
  
  // Description
  const description = isMs ? definition.descriptionMs : definition.description;
  lines.push(description);
  lines.push('');
  
  // Syntax section (if available)
  if (definition.syntax) {
    lines.push(isMs ? '## Sintaks' : '## Syntax');
    lines.push('```');
    lines.push(definition.syntax);
    lines.push('```');
    lines.push('');
  }
  
  // Values table
  if (definition.values && definition.values.length > 0) {
    lines.push(isMs ? '## Nilai' : '## Values');
    lines.push('');
    
    // Check if values have properties (like space definitions)
    const hasProperty = definition.values[0].property !== undefined;
    
    if (hasProperty) {
      lines.push(isMs 
        ? '| Properti | CSS Output | Huraian |'
        : '| Property | CSS Output | Description |');
      lines.push('|--------|------------|-------------|');
      
      for (const v of definition.values) {
        const desc = isMs ? (v.descriptionMs || v.description) : v.description;
        const cssDisplay = v.css.replace(/{value}/g, '{value}').replace(/;/g, '');
        lines.push(`| \`${v.property}\` | \`${cssDisplay}\` | ${desc} |`);
      }
    } else {
      lines.push(isMs 
        ? '| Nilai | CSS Output | Huraian |'
        : '| Value | CSS Output | Description |');
      lines.push('|-------|------------|-------------|');
      
      for (const v of definition.values) {
        const desc = isMs ? (v.descriptionMs || v.description) : v.description;
        const cssDisplay = v.css.replace(/;$/, '');
        lines.push(`| \`${v.value}\` | \`${cssDisplay}\` | ${desc} |`);
      }
    }
    lines.push('');
  }
  
  // Scale values (if applicable)
  if (definition.scaleValues) {
    lines.push(isMs ? '## Nilai Skala' : '## Scale Values');
    lines.push('');
    lines.push(definition.scaleValues.map(v => `\`${v}\``).join(', '));
    lines.push('');
  }
  
  // Examples
  if (definition.examples && definition.examples.length > 0) {
    lines.push(isMs ? '## Contoh' : '## Examples');
    lines.push('');
    lines.push('```html');
    for (const example of definition.examples) {
      lines.push(example.code);
    }
    lines.push('```');
    lines.push('');
  }
  
  // Preview (live HTML demos)
  if (definition.preview && definition.preview.length > 0) {
    lines.push(isMs ? '## Pratonton' : '## Preview');
    lines.push('');
    
    for (let i = 0; i < definition.preview.length; i++) {
      const p = definition.preview[i];
      const title = isMs ? (p.titleMs || p.title) : p.title;
      
      // Wrapper container for each preview
      lines.push('<div space="p-x:big p-b:medium m-t:medium" visual="border-w:thin border:neutral-100 dark:border:neutral-800 rounded:medium">');
      lines.push('');
      
      // Title for this preview
      if (title) {
        lines.push(`### ${title}`);
        lines.push('');
      }
      
      // Live preview
      lines.push(`<div layout="flex col" space="g:medium">`);
      
      // Description with highlighted code (above the preview)
      const desc = isMs ? p.descriptionMs : p.description;
      const highlightCode = p.highlightValue ? `<code>${definition.property}="${p.highlightValue}"</code>` : '';
      lines.push(`  <p space="m:none" visual="text:neutral-600 dark:text:neutral-400 text-sm">${highlightCode}${highlightCode && desc ? ' - ' : ''}${desc}</p>`);
      
      lines.push(p.html);
      lines.push('</div>');
      lines.push('');
      
      // Code block showing the HTML used (collapsible)
      lines.push('<details>');
      lines.push(`<summary>${isMs ? 'Lihat Kod' : 'View Code'}</summary>`);
      lines.push('');
      lines.push('```html');
      lines.push(p.html);
      lines.push('```');
      lines.push('');
      lines.push('</details>');
      lines.push('');
      
      // Close wrapper container
      lines.push('</div>');
      lines.push('');
    }
  }
  
  // Arbitrary values support
  if (definition.supportsArbitrary) {
    lines.push(isMs ? '## Nilai Arbitrari' : '## Arbitrary Values');
    lines.push('');
    lines.push(isMs 
      ? 'Sokong nilai tersuai menggunakan sintaks kurungan segi empat:'
      : 'Supports custom values using bracket syntax:');
    lines.push('');
    lines.push('```html');
    lines.push(`<div ${definition.property}="${definition.name.split('-')[0]}:[custom-value]">Custom</div>`);
    lines.push('```');
    lines.push('');
  }
  
  // Footnotes (e.g., Tailwind scale compatibility notes)
  if (definition.footnotes && definition.footnotes.length > 0) {
    lines.push(isMs ? '## Nota' : '## Notes');
    lines.push('');
    
    for (const footnote of definition.footnotes) {
      const title = isMs ? (footnote.titleMs || footnote.title) : footnote.title;
      const content = isMs ? (footnote.contentMs || footnote.content) : footnote.content;
      
      // Use VitePress TIP alert for footnotes
      lines.push('> [!TIP]');
      lines.push(`> **${title}**`);
      lines.push(`> `);
      lines.push(`> ${content}`);
      if (footnote.link) {
        lines.push(`> `);
        lines.push(`> [${isMs ? 'Rujukan' : 'Reference'}](${footnote.link})`);
      }
      lines.push('');
    }
  }
  
  // Responsive
  // lines.push(isMs ? '## Responsif' : '## Responsive');
  // lines.push('');
  // lines.push('```html');
  // if (definition.examples && definition.examples[0]) {
  //   const baseExample = definition.examples[0].code;
  //   lines.push(`<!-- ${isMs ? 'Contoh responsif' : 'Responsive example'} -->`);
  //   lines.push(`<div ${definition.property}="mob:... tab:... lap:...">`);
  //   lines.push(`  ${isMs ? 'Kandungan responsif' : 'Responsive content'}`);
  //   lines.push('</div>');
  // }
  // lines.push('```');
  // lines.push('');
  
  return lines.join('\n');
}

/**
 * Format definition name as title
 */
function formatTitle(name) {
  return name
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

/**
 * Get output path for a definition
 */
function getOutputPath(definition, locale) {
  const category = config.categories[definition.category] || 'other';
  const filename = `${definition.name}.md`;
  
  if (locale === 'ms') {
    return path.join(config.docsDir, 'ms', 'reference', category, filename);
  }
  return path.join(config.docsDir, 'reference', category, filename);
}

/**
 * Ensure directory exists
 */
function ensureDir(filePath) {
  const dir = path.dirname(filePath);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
}

/**
 * Generate all documentation
 */
function generateAllDocs(options = {}) {
  const { dryRun = false, locale = 'all' } = options;
  const definitions = getAllDefinitions();
  const results = { generated: [], skipped: [], errors: [] };
  
  const locales = locale === 'all' ? config.locales : [locale];
  
  console.log(`\n📚 SenangStart CSS Documentation Generator`);
  console.log(`   Generating docs for ${definitions.length} definitions...`);
  if (dryRun) {
    console.log(`   (Dry run - no files will be written)\n`);
  }
  
  for (const def of definitions) {
    for (const loc of locales) {
      try {
        const outputPath = getOutputPath(def, loc);
        const markdown = generateMarkdown(def, loc);
        
        if (dryRun) {
          console.log(`  Would create: ${path.relative(rootDir, outputPath)}`);
          results.generated.push(outputPath);
        } else {
          ensureDir(outputPath);
          fs.writeFileSync(outputPath, markdown, 'utf8');
          console.log(`  ✓ Created: ${path.relative(rootDir, outputPath)}`);
          results.generated.push(outputPath);
        }
      } catch (error) {
        console.error(`  ✗ Error generating ${def.name} (${loc}): ${error.message}`);
        results.errors.push({ definition: def.name, locale: loc, error: error.message });
      }
    }
  }
  
  // Summary
  console.log(`\n📊 Summary:`);
  console.log(`   Generated: ${results.generated.length} files`);
  console.log(`   Skipped: ${results.skipped.length} files`);
  console.log(`   Errors: ${results.errors.length} files`);
  
  return results;
}

/**
 * Compare generated docs with existing docs
 * Returns list of differences
 */
function compareDocs(options = {}) {
  const definitions = getAllDefinitions();
  const differences = [];
  
  console.log(`\n🔍 Comparing definitions with existing documentation...`);
  
  for (const def of definitions) {
    for (const locale of config.locales) {
      const outputPath = getOutputPath(def, locale);
      
      if (!fs.existsSync(outputPath)) {
        differences.push({
          type: 'missing',
          definition: def.name,
          locale,
          path: outputPath
        });
        continue;
      }
      
      const existingContent = fs.readFileSync(outputPath, 'utf8');
      const generatedContent = generateMarkdown(def, locale);
      
      // Simple comparison - check if values table matches
      // This is a basic check; could be made more sophisticated
      const existingValues = extractValuesFromTable(existingContent);
      const definedValues = def.values?.map(v => v.value || v.property) || [];
      
      const missingInDocs = definedValues.filter(v => !existingValues.includes(v));
      const extraInDocs = existingValues.filter(v => !definedValues.includes(v));
      
      if (missingInDocs.length > 0 || extraInDocs.length > 0) {
        differences.push({
          type: 'mismatch',
          definition: def.name,
          locale,
          path: outputPath,
          missingInDocs,
          extraInDocs
        });
      }
    }
  }
  
  if (differences.length === 0) {
    console.log('   ✓ All documentation is in sync!\n');
  } else {
    console.log(`   ⚠ Found ${differences.length} differences:\n`);
    for (const diff of differences) {
      if (diff.type === 'missing') {
        console.log(`   Missing: ${diff.definition} (${diff.locale})`);
      } else {
        console.log(`   Mismatch: ${diff.definition} (${diff.locale})`);
        if (diff.missingInDocs?.length > 0) {
          console.log(`     - Missing in docs: ${diff.missingInDocs.join(', ')}`);
        }
        if (diff.extraInDocs?.length > 0) {
          console.log(`     - Extra in docs: ${diff.extraInDocs.join(', ')}`);
        }
      }
    }
  }
  
  return differences;
}

/**
 * Extract values from a markdown table
 */
function extractValuesFromTable(markdown) {
  const values = [];
  const tableRegex = /\|[^|]+\|[^|]+\|[^|]+\|/g;
  const matches = markdown.match(tableRegex) || [];
  
  for (const match of matches) {
    // Skip header rows
    if (match.includes('Value') || match.includes('Nilai') || match.includes('---')) continue;
    
    // Extract first cell (value name)
    const cellMatch = match.match(/\|\s*`([^`]+)`/);
    if (cellMatch) {
      values.push(cellMatch[1]);
    }
  }
  
  return values;
}

// CLI handling
const args = process.argv.slice(2);
const options = {
  dryRun: args.includes('--dry-run'),
  locale: 'all',
  compare: args.includes('--compare')
};

// Parse locale option
const localeIndex = args.indexOf('--locale');
if (localeIndex !== -1 && args[localeIndex + 1]) {
  options.locale = args[localeIndex + 1];
}

// Run
if (options.compare) {
  compareDocs(options);
} else {
  generateAllDocs(options);
}
