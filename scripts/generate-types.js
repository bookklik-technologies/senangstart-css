#!/usr/bin/env node

/**
 * Generate the committed, package-level type & editor data files from the
 * utility definitions and the default theme:
 *
 *   types/generated-tokens.d.ts   exported Known*Token / scale / variant types
 *   types/senang.d.ts             standalone ambient file (same content the CLI
 *                                 writes for `output.typescript`, default theme)
 *   types/senang-data.json        slim machine-readable token data (editors, llms.txt)
 *   types/senang.html-data.json   VS Code HTML custom data (attribute value completions)
 *
 * Deterministic and idempotent: running twice produces byte-identical output.
 *
 * Usage:
 *   node scripts/generate-types.js            # write files
 *   node scripts/generate-types.js --check    # exit 1 if committed files are stale
 */

import { writeFileSync, readFileSync, existsSync, mkdirSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, '..');
const check = process.argv.includes('--check');

/**
 * Build every generated artifact as { relativePath: content }.
 * Exported for tests.
 */
export async function buildArtifacts() {
  const { defaultConfig } = await import('../src/config/defaults.js');
  const {
    generateTypeScript,
    generateTokenTypes,
    generateSenangData,
    generateHtmlData
  } = await import('../src/compiler/generators/typescript.js');

  return {
    'types/generated-tokens.d.ts': generateTokenTypes(defaultConfig),
    'types/senang.d.ts': generateTypeScript(defaultConfig),
    'types/senang-data.json': JSON.stringify(generateSenangData(defaultConfig), null, 2) + '\n',
    'types/senang.html-data.json': JSON.stringify(generateHtmlData(defaultConfig), null, 2) + '\n'
  };
}

async function main() {
  const artifacts = await buildArtifacts();
  let stale = 0;

  for (const [rel, content] of Object.entries(artifacts)) {
    const outPath = join(root, rel);
    const current = existsSync(outPath) ? readFileSync(outPath, 'utf-8') : null;
    if (check) {
      if (current !== content) {
        stale++;
        console.error(`\u2717 ${rel} is out of date (run: npm run generate:types)`);
      }
      continue;
    }
    if (current === content) {
      console.log(`\u2713 ${rel} (unchanged)`);
      continue;
    }
    mkdirSync(dirname(outPath), { recursive: true });
    writeFileSync(outPath, content, 'utf-8');
    console.log(`\u2713 Generated ${rel}`);
  }

  if (check) {
    if (stale) process.exit(1);
    console.log('\u2713 Generated type files are up to date');
  }
}

const isMain = process.argv[1] && fileURLToPath(import.meta.url) === process.argv[1];
if (isMain) {
  main().catch(err => {
    console.error('\u2717 Failed to generate types:', err.message);
    process.exit(1);
  });
}
