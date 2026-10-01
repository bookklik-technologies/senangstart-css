/**
 * package.json hygiene for the 0.4.0 roadmap:
 *   - scripts use quoted globs (node --test "tests/**\/*.test.js")
 *   - engines >= 20
 *   - sideEffects list (CLI + CDN + dist IIFEs)
 *   - export map entries: ./node, ./cli (side-effect free), ./vite, ./postcss,
 *     ./schema, ./dist/*
 *   - size-limit config present
 *
 * File existence for every export target is checked in ./export-map.test.js.
 */
import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync, existsSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath, pathToFileURL } from 'url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..', '..');
const pkg = JSON.parse(readFileSync(join(root, 'package.json'), 'utf-8'));

describe('package.json manifest (0.4.0)', () => {
  it('test scripts use quoted recursive globs', () => {
    assert.equal(pkg.scripts.test, 'node --test "tests/**/*.test.js"');
    assert.equal(pkg.scripts['test:unit'], 'node --test "tests/unit/**/*.test.js"');
    assert.equal(pkg.scripts['test:integration'], 'node --test "tests/integration/**/*.test.js"');
    assert.equal(pkg.scripts['test:packaging'], 'node --test "tests/packaging/**/*.test.js"');
  });

  it('declares golden/size/typecheck/lint:all scripts', () => {
    assert.equal(pkg.scripts.golden, 'node tests/golden/build-golden.mjs --check');
    assert.equal(pkg.scripts.size, 'size-limit');
    assert.equal(pkg.scripts.typecheck, 'tsc -p tests/types/tsconfig.json');
    assert.ok(pkg.scripts['lint:all'].includes('lint'));
  });

  it('requires Node >= 20', () => {
    assert.equal(pkg.engines.node, '>=20.0.0');
  });

  it('marks CLI/CDN/dist IIFE files as side-effectful', () => {
    assert.deepEqual(pkg.sideEffects, ['./src/cli/**', './src/cdn/**', './dist/*.js']);
  });

  it('exposes ./node (ESM) pointing at src/node.js', async () => {
    const entry = pkg.exports['./node'];
    assert.equal(entry.import, './src/node.js');
    assert.ok(existsSync(join(root, entry.import)));
    const mod = await import(pathToFileURL(join(root, entry.import)).href);
    for (const fn of ['build', 'watch', 'loadConfig', 'defineConfig']) {
      assert.equal(typeof mod[fn], 'function', `./node must export ${fn}`);
    }
  });

  it('./cli export is the side-effect-free program module (bin stays index.js)', () => {
    assert.equal(pkg.exports['./cli'], './src/cli/program.js');
    assert.equal(pkg.bin.senangstart, './src/cli/index.js');
    assert.equal(pkg.bin.sen, './src/cli/index.js');
    assert.ok(existsSync(join(root, pkg.exports['./cli'])));
  });

  it('declares ./vite, ./postcss (with types), ./schema and ./dist/* exports', () => {
    assert.deepEqual(pkg.exports['./vite'], {
      types: './types/vite.d.ts',
      import: './src/integrations/vite.js',
      default: './src/integrations/vite.js'
    });
    assert.deepEqual(pkg.exports['./postcss'], {
      types: './types/postcss.d.ts',
      import: './src/integrations/postcss.js',
      default: './src/integrations/postcss.js'
    });
    assert.equal(pkg.exports['./node'].types, './types/node.d.ts');
    assert.equal(pkg.exports['./schema'], './schema/senangstart.config.schema.json');
    assert.equal(pkg.exports['./dist/*'], './dist/*');
  });

  it('ships templates, schema and CHANGELOG; never scripts/ or tests/', () => {
    for (const f of ['dist', 'src', 'types', 'templates', 'schema', 'CHANGELOG.md']) {
      assert.ok(pkg.files.includes(f), `files must include ${f}`);
    }
    assert.ok(!pkg.files.includes('scripts'));
    assert.ok(!pkg.files.includes('tests'));
    assert.ok(existsSync(join(root, 'templates', 'senangstart.config.mjs')));
  });

  it('has a size-limit config for the CDN runtime and standalone CSS', () => {
    const entries = pkg['size-limit'];
    assert.ok(Array.isArray(entries));
    const paths = entries.map(e => e.path);
    assert.ok(paths.includes('dist/senangstart-css.min.js'));
    assert.ok(paths.includes('dist/senangstart.min.css'));
    assert.ok(pkg.devDependencies['size-limit']);
    assert.ok(pkg.devDependencies['@size-limit/file']);
  });

  it('depends on tinyglobby, chokidar v3 and commander at runtime', () => {
    assert.ok(pkg.dependencies.tinyglobby);
    assert.match(pkg.dependencies.chokidar, /^\^3/);
    assert.ok(pkg.dependencies.commander);
  });

  it('publishes with provenance/public access', () => {
    assert.equal(pkg.publishConfig.access, 'public');
  });
});
