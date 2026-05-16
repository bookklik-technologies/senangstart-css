#!/usr/bin/env node

/**
 * Build script for creating the dist folder
 * Uses esbuild to bundle JIT runtime from ESM sources
 */

import * as esbuild from 'esbuild';
import { mkdirSync, statSync, copyFileSync, readFileSync } from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, '..');

// Read version from package.json
const pkg = JSON.parse(readFileSync(join(root, 'package.json'), 'utf-8'));
const version = pkg.version;

// Ensure dist folder exists
const distDir = join(root, 'dist');
mkdirSync(distDir, { recursive: true });

console.log(`📦 Building SenangStart CSS v${version}...\n`);

// Build unminified version
await esbuild.build({
  entryPoints: [join(root, 'src', 'cdn', 'senangstart-engine.js')],
  bundle: true,
  format: 'iife',
  sourcemap: true,
  outfile: join(distDir, 'senangstart-css.js'),
  minify: false,
  banner: {
    js: `/* SenangStart CSS - JIT Runtime v${version} | MIT License */`
  }
});

const unminSize = statSync(join(distDir, 'senangstart-css.js')).size;
console.log(`✓ Created senangstart-css.js (${(unminSize / 1024).toFixed(1)} KB)`);

// Build minified version
await esbuild.build({
  entryPoints: [join(root, 'src', 'cdn', 'senangstart-engine.js')],
  bundle: true,
  format: 'iife',
  sourcemap: true,
  outfile: join(distDir, 'senangstart-css.min.js'),
  minify: true,
  banner: {
    js: `/* SenangStart CSS v${version} | MIT */`
  }
});

const minSize = statSync(join(distDir, 'senangstart-css.min.js')).size;
console.log(`✓ Created senangstart-css.min.js (${(minSize / 1024).toFixed(1)} KB)`);

// Build Tailwind converter - unminified
await esbuild.build({
  entryPoints: [join(root, 'src', 'cdn', 'tw-conversion-engine.js')],
  bundle: true,
  format: 'iife',
  sourcemap: true,
  outfile: join(distDir, 'senangstart-tw.js'),
  minify: false,
  banner: {
    js: `/* SenangStart CSS - Tailwind Converter v${version} | MIT License */`
  }
});

const twUnminSize = statSync(join(distDir, 'senangstart-tw.js')).size;
console.log(`✓ Created senangstart-tw.js (${(twUnminSize / 1024).toFixed(1)} KB)`);

// Build Tailwind converter - minified
await esbuild.build({
  entryPoints: [join(root, 'src', 'cdn', 'tw-conversion-engine.js')],
  bundle: true,
  format: 'iife',
  sourcemap: true,
  outfile: join(distDir, 'senangstart-tw.min.js'),
  minify: true,
  banner: {
    js: `/* SenangStart TW v${version} | MIT */`
  }
});

const twMinSize = statSync(join(distDir, 'senangstart-tw.min.js')).size;
console.log(`✓ Created senangstart-tw.min.js (${(twMinSize / 1024).toFixed(1)} KB)`);

// Copy to docs/public/assets for VitePress
const docsAssetsDir = join(root, 'docs', 'public', 'assets');
mkdirSync(docsAssetsDir, { recursive: true });
copyFileSync(
  join(distDir, 'senangstart-css.min.js'),
  join(docsAssetsDir, 'senangstart-css.min.js')
);
console.log(`✓ Copied to docs/public/assets/senangstart-css.min.js`);

console.log('\n📦 Dist build complete!');
console.log('   dist/senangstart-css.js');
console.log('   dist/senangstart-css.min.js');
console.log('   dist/senangstart-tw.js');
console.log('   dist/senangstart-tw.min.js');

