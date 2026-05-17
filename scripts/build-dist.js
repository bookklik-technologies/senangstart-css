#!/usr/bin/env node

/**
 * Build script for creating the dist folder
 * Uses esbuild to bundle JIT runtime from ESM sources
 * Also generates standalone CSS (preflight + CSS variables) for non-JIT consumers
 */

import * as esbuild from 'esbuild';
import { mkdirSync, statSync, copyFileSync, readFileSync, writeFileSync } from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, '..');

async function main() {
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
  console.log(`\u2713 Created senangstart-css.js (${(unminSize / 1024).toFixed(1)} KB)`);

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
  console.log(`\u2713 Created senangstart-css.min.js (${(minSize / 1024).toFixed(1)} KB)`);

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
  console.log(`\u2713 Created senangstart-tw.js (${(twUnminSize / 1024).toFixed(1)} KB)`);

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
  console.log(`\u2713 Created senangstart-tw.min.js (${(twMinSize / 1024).toFixed(1)} KB)`);

  // Build CJS bundle for programmatic Node.js consumers
  await esbuild.build({
    entryPoints: [join(root, 'src', 'index.js')],
    bundle: true,
    format: 'cjs',
    platform: 'node',
    sourcemap: true,
    outfile: join(distDir, 'senangstart-css.cjs'),
    minify: false,
    external: ['chokidar', 'commander', 'fs', 'fs/promises', 'path'],
    banner: {
      js: `/* SenangStart CSS - CJS Runtime v${version} | MIT License */`
    }
  });

  const cjsSize = statSync(join(distDir, 'senangstart-css.cjs')).size;
  console.log(`\u2713 Created senangstart-css.cjs (${(cjsSize / 1024).toFixed(1)} KB)`);

  // Generate standalone CSS for non-JIT consumers
  const { defaultConfig } = await import('../src/config/defaults.js');
  const { generateCSSVariables } = await import('../src/compiler/generators/css.js');
  const { generatePreflight } = await import('../src/compiler/generators/preflight.js');

  const standaloneCSS = [
    `/* SenangStart CSS v${version} | MIT License */`,
    `/* Preflight + CSS Variables — for non-JIT consumers */`,
    '',
    generatePreflight(defaultConfig),
    '',
    generateCSSVariables(defaultConfig),
    ''
  ].join('\n');

  writeFileSync(join(distDir, 'senangstart.css'), standaloneCSS, 'utf-8');
  const cssSize = statSync(join(distDir, 'senangstart.css')).size;
  console.log(`\u2713 Created senangstart.css (${(cssSize / 1024).toFixed(1)} KB) [preflight + variables]`);

  const minifiedCSS = standaloneCSS
    .replace(/\/\*[\s\S]*?\*\//g, '')
    .replace(/\s+/g, ' ')
    .replace(/\s*([{}:;,])\s*/g, '$1')
    .replace(/;}/g, '}')
    .trim();
  writeFileSync(join(distDir, 'senangstart.min.css'), minifiedCSS, 'utf-8');
  const minCssSize = statSync(join(distDir, 'senangstart.min.css')).size;
  console.log(`\u2713 Created senangstart.min.css (${(minCssSize / 1024).toFixed(1)} KB) [minified]`);

  // Copy to docs/public/assets for VitePress
  const docsAssetsDir = join(root, 'docs', 'public', 'assets');
  mkdirSync(docsAssetsDir, { recursive: true });
  copyFileSync(
    join(distDir, 'senangstart-css.min.js'),
    join(docsAssetsDir, 'senangstart-css.min.js')
  );
  copyFileSync(
    join(distDir, 'senangstart.css'),
    join(docsAssetsDir, 'senangstart.css')
  );
  copyFileSync(
    join(distDir, 'senangstart.min.css'),
    join(docsAssetsDir, 'senangstart.min.css')
  );
  console.log(`\u2713 Copied to docs/public/assets/`);

  console.log('\n📦 Dist build complete!');
  console.log('   dist/senangstart-css.js');
  console.log('   dist/senangstart-css.min.js');
  console.log('   dist/senangstart-css.cjs');
  console.log('   dist/senangstart-tw.js');
  console.log('   dist/senangstart-tw.min.js');
  console.log('   dist/senangstart.css');
  console.log('   dist/senangstart.min.css');
}

main().catch(err => {
  console.error('\n❌ Build failed:', err.message);
  console.error(err.stack);
  process.exit(1);
});

