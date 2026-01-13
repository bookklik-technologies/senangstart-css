#!/usr/bin/env node

/**
 * Bundle JIT Runtime with esbuild
 * Bundles src/cdn/jit.js into a self-contained IIFE for browser use
 */

import * as esbuild from 'esbuild';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, '..');

console.log('📦 Bundling JIT runtime...');

// Build unminified version
await esbuild.build({
  entryPoints: [join(root, 'src', 'cdn', 'jit.js')],
  bundle: true,
  format: 'iife',
  outfile: join(root, 'dist', 'senangstart-css.js'),
  minify: false,
  banner: {
    js: '/* SenangStart CSS - JIT Runtime v0.2.0 | MIT License */'
  }
});

console.log('✓ Created dist/senangstart-css.js');

// Build minified version
await esbuild.build({
  entryPoints: [join(root, 'src', 'cdn', 'jit.js')],
  bundle: true,
  format: 'iife',
  outfile: join(root, 'dist', 'senangstart-css.min.js'),
  minify: true,
  banner: {
    js: '/* SenangStart CSS v0.2.0 | MIT */'
  }
});

console.log('✓ Created dist/senangstart-css.min.js');
console.log('');
console.log('📦 Bundle complete!');
