/**
 * SenangStart CSS - Packaging Smoke Tests (Phase 2, item 2.1)
 *
 * Verifies that the published artifacts are valid and consistent:
 *   - package.json exports point to files that exist
 *   - CJS consumers (require) and ESM consumers (import) get identical APIs
 *   - Browser IIFE bundles exist and are self-executing
 *
 * dist/ is committed to the repository, so these run in CI checkouts too.
 */
import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { createRequire } from 'node:module';
import { readFileSync, existsSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath, pathToFileURL } from 'url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..', '..');
const require = createRequire(import.meta.url);
const pkg = JSON.parse(readFileSync(join(root, 'package.json'), 'utf-8'));

const EXPECTED_EXPORTS = [
  'tokenize',
  'tokenizeAll',
  'parseSource',
  'parseMultipleSources',
  'generateCSS',
  'generateCSSVariables',
  'generatePreflight',
  'compileSource',
  'compileMultiple',
  'defaultConfig',
  'mergeConfig',
  'constants'
];

describe('Packaging (Phase 2)', () => {

  describe('package.json exports integrity', () => {
    it('main/module/types entries point to existing files', () => {
      assert.ok(existsSync(join(root, pkg.main)), `main "${pkg.main}" must exist`);
      assert.ok(existsSync(join(root, pkg.module)), `module "${pkg.module}" must exist`);
      assert.ok(existsSync(join(root, pkg.types)), `types "${pkg.types}" must exist`);
    });

    it('all export targets point to existing files', () => {
      const dot = pkg.exports['.'];
      const targets = [];
      for (const value of Object.values(dot)) {
        if (typeof value === 'string') {
          targets.push(value);
        } else if (value && typeof value === 'object') {
          for (const nested of Object.values(value)) targets.push(nested);
        }
      }
      targets.push(pkg.exports['./cli']);
      for (const target of targets) {
        assert.ok(existsSync(join(root, target)), `export target "${target}" must exist`);
      }
    });

    it('ESM consumers resolve to a bundled artifact, not raw src/', () => {
      assert.equal(pkg.exports['.'].import.default, './dist/senangstart-css.mjs');
      assert.equal(pkg.module, './dist/senangstart-css.mjs');
      assert.ok(!JSON.stringify(pkg.exports).includes('src/index.js'), 'must not expose raw src/ as package entry');
    });

    it('does not ship build tooling (scripts/ excluded from files)', () => {
      assert.ok(!pkg.files.includes('scripts'), 'scripts/ must not be published');
    });

    it('has no install-time scripts (postinstall removed)', () => {
      assert.equal(pkg.scripts.postinstall, undefined, 'postinstall must not run on consumer installs');
    });
  });

  describe('CJS artifact (require)', () => {
    const cjs = require(join(root, 'dist/senangstart-css.cjs'));

    it('exports the full public API', () => {
      for (const name of EXPECTED_EXPORTS) {
        assert.ok(cjs[name] !== undefined, `CJS must export ${name}`);
      }
    });

    it('compiles source end-to-end', () => {
      const result = cjs.compileSource(
        '<div layout="flex" space="p:medium" visual="bg:primary">Test</div>',
        cjs.defaultConfig
      );
      assert.ok(result.css.includes('display: flex'));
      assert.ok(result.css.includes('padding: var(--s-medium)'));
    });
  });

  describe('ESM artifact (import)', () => {
    let esm;

    it('imports and exports the full public API', async () => {
      esm = await import(pathToFileURL(join(root, 'dist/senangstart-css.mjs')).href);
      for (const name of EXPECTED_EXPORTS) {
        assert.ok(esm[name] !== undefined, `ESM must export ${name}`);
      }
    });

    it('CJS and ESM export the same API surface', async () => {
      const cjsKeys = Object.keys(require(join(root, 'dist/senangstart-css.cjs'))).sort();
      const esmKeys = Object.keys(esm).sort();
      assert.deepEqual(esmKeys, cjsKeys, 'CJS and ESM must export identical keys');
    });

    it('compiles source end-to-end', async () => {
      const result = esm.compileSource(
        '<div layout="flex" space="p:medium" visual="bg:primary">Test</div>',
        esm.defaultConfig
      );
      assert.ok(result.css.includes('display: flex'));
      assert.ok(result.css.includes('padding: var(--s-medium)'));
    });
  });

  describe('Browser IIFE bundles', () => {
    it('JIT engine bundle exists and is self-executing', () => {
      const file = join(root, 'dist/senangstart-css.min.js');
      assert.ok(existsSync(file), 'dist/senangstart-css.min.js must exist');
      const content = readFileSync(file, 'utf-8');
      assert.ok(content.includes('SenangStart'), 'bundle must carry its banner');
      assert.ok(!content.includes('import '), 'IIFE must not contain ESM import statements');
      assert.ok(!content.includes('require('), 'IIFE must not contain CJS require calls');
    });

    it('Tailwind converter bundle exists', () => {
      assert.ok(existsSync(join(root, 'dist/senangstart-tw.min.js')));
    });

    it('standalone CSS artifacts exist', () => {
      assert.ok(existsSync(join(root, 'dist/senangstart.css')));
      assert.ok(existsSync(join(root, 'dist/senangstart.min.css')));
    });
  });
});
