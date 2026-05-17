#!/usr/bin/env node

/**
 * Generate TypeScript definitions from the default config.
 * Ensures types/senang.d.ts is up to date after install.
 */

import { writeFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, '..');

async function main() {
  const { defaultConfig } = await import('../src/config/defaults.js');
  const { generateTypeScript } = await import('../src/compiler/generators/typescript.js');

  const typesContent = generateTypeScript(defaultConfig);
  const outPath = join(root, 'types', 'senang.d.ts');

  writeFileSync(outPath, typesContent, 'utf-8');
  console.log(`\u2713 Generated types/senang.d.ts`);
}

main().catch(err => {
  console.error('\u2717 Failed to generate types:', err.message);
});
