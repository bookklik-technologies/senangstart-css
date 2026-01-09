#!/usr/bin/env node

/**
 * Build script for creating the dist folder
 * Copies and minifies files for NPM distribution
 */

import { mkdirSync, copyFileSync, readFileSync, writeFileSync, existsSync } from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, '..');

// Ensure dist folder exists
const distDir = join(root, 'dist');
mkdirSync(distDir, { recursive: true });

// Copy jit.js as senangstart-css.js
const jitSrc = join(root, 'src', 'cdn', 'jit.js');
const jitDest = join(distDir, 'senangstart-css.js');
copyFileSync(jitSrc, jitDest);
console.log('✓ Created senangstart-css.js');

// Simple minification (removes comments and extra whitespace)
function minifyJS(code) {
  return code
    // Remove multi-line comments
    .replace(/\/\*[\s\S]*?\*\//g, '')
    // Remove single-line comments (but not URLs)
    .replace(/(?<!:)\/\/.*$/gm, '')
    // Remove leading/trailing whitespace per line
    .split('\n')
    .map(line => line.trim())
    .filter(line => line.length > 0)
    .join('\n')
    // Reduce multiple newlines to single
    .replace(/\n+/g, '\n');
}

// Create minified version
const jitContent = readFileSync(jitSrc, 'utf8');
const jitMinified = minifyJS(jitContent);
writeFileSync(join(distDir, 'senangstart-css.min.js'), jitMinified);
console.log('✓ Created senangstart-css.min.js');

console.log('\n📦 Dist build complete!');
console.log('   dist/senangstart-css.js');
console.log('   dist/senangstart-css.min.js');
