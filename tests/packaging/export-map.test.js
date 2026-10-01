/**
 * Export-map validity (publint-style checks implemented locally, offline):
 *   - every export target (incl. nested conditions) exists on disk
 *   - "types" is the first condition and points at a .d.ts/.d.cts that exists
 *   - every target ships in the tarball (`npm pack --dry-run --json`)
 *   - integrations load without vite/postcss being imported at module level
 *   - optional peers, keywords, examples/tests never published
 */
import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync, existsSync, statSync } from 'fs';
import { execFileSync } from 'child_process';
import { join, dirname } from 'path';
import { fileURLToPath, pathToFileURL } from 'url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..', '..');
const pkg = JSON.parse(readFileSync(join(root, 'package.json'), 'utf-8'));

/** Flatten an exports entry into [{ subpath, conditions: string[], target }]. */
function flatten(subpath, value, conditions = []) {
  if (typeof value === 'string') return [{ subpath, conditions, target: value }];
  if (value && typeof value === 'object') {
    return Object.entries(value).flatMap(([cond, v]) => flatten(subpath, v, [...conditions, cond]));
  }
  return [];
}

const entries = Object.entries(pkg.exports).flatMap(([sub, v]) => flatten(sub, v));

let packedFiles = null;
function packed() {
  if (packedFiles) return packedFiles;
  try {
    const out = execFileSync('npm', ['pack', '--dry-run', '--json', '--ignore-scripts'], {
      cwd: root, encoding: 'utf-8', stdio: ['ignore', 'pipe', 'ignore'], timeout: 30000
    });
    packedFiles = new Set(JSON.parse(out)[0].files.map(f => f.path.replace(/\\/g, '/')));
  } catch {
    packedFiles = false; // npm unavailable — tarball checks are skipped
  }
  return packedFiles;
}

describe('export map validity', () => {
  it('every export target exists on disk', () => {
    for (const { subpath, conditions, target } of entries) {
      assert.ok(target.startsWith('./'), `${subpath} [${conditions}] target must start with ./`);
      if (target.includes('*')) {
        const dir = target.slice(0, target.indexOf('*'));
        assert.ok(existsSync(join(root, dir)) && statSync(join(root, dir)).isDirectory(), `${subpath}: ${dir} must be a directory`);
        continue;
      }
      assert.ok(existsSync(join(root, target)), `${subpath} [${conditions.join('>')}] → ${target} must exist`);
    }
  });

  it('"types" conditions come first and point at declaration files', () => {
    const check = (subpath, obj) => {
      const keys = Object.keys(obj);
      if (keys.includes('types')) {
        assert.equal(keys[0], 'types', `${subpath}: "types" must be the first condition`);
        assert.match(obj.types, /\.d\.c?ts$/, `${subpath}: types must be a .d.ts`);
      }
      for (const v of Object.values(obj)) if (v && typeof v === 'object') check(subpath, v);
    };
    for (const [sub, v] of Object.entries(pkg.exports)) if (v && typeof v === 'object') check(sub, v);
  });

  it('JS entry points (./node, ./vite, ./postcss) declare types', () => {
    for (const sub of ['./node', './vite', './postcss']) {
      const e = pkg.exports[sub];
      assert.equal(typeof e, 'object', `${sub} must be a conditions object`);
      assert.ok(e.types && existsSync(join(root, e.types)), `${sub} types must exist`);
    }
  });

  it('documented type-only subpaths (react, vue, svelte, solid, preact, astro, typed) are exported', () => {
    for (const sub of ['./react', './vue', './svelte', './solid', './preact', './astro', './typed', './attributes']) {
      assert.ok(pkg.exports[sub], `${sub} must be exported (docs tell users to import it)`);
    }
  });

  it('top-level main/module/types exist', () => {
    for (const f of [pkg.main, pkg.module, pkg.types]) assert.ok(existsSync(join(root, f)), `${f} must exist`);
  });

  it('integration entry points import cleanly without vite/postcss and export factories', async () => {
    for (const sub of ['./vite', './postcss']) {
      const file = join(root, pkg.exports[sub].import);
      const src = readFileSync(file, 'utf-8');
      assert.ok(!/from\s+['"](vite|postcss)['"]/.test(src), `${sub} must not hard-import its optional peer`);
      const mod = await import(pathToFileURL(file).href);
      assert.equal(typeof mod.default, 'function');
      assert.equal(mod.default, mod.senangstart);
    }
    const postcssPlugin = (await import(pathToFileURL(join(root, pkg.exports['./postcss'].import)).href)).default;
    assert.equal(postcssPlugin.postcss, true);
  });

  it('vite and postcss are optional peer dependencies', () => {
    assert.match(pkg.peerDependencies.vite, />=\s*5/);
    assert.match(pkg.peerDependencies.postcss, />=\s*8\.4/);
    assert.equal(pkg.peerDependenciesMeta.vite.optional, true);
    assert.equal(pkg.peerDependenciesMeta.postcss.optional, true);
    assert.ok(!pkg.dependencies.vite && !pkg.dependencies.postcss, 'must not be hard dependencies');
  });

  it('keywords include vite-plugin and postcss-plugin', () => {
    assert.ok(pkg.keywords.includes('vite-plugin'));
    assert.ok(pkg.keywords.includes('postcss-plugin'));
  });

  it('every export target ships in the tarball; examples/tests do not', (t) => {
    const files = packed();
    if (!files) { t.skip('npm pack unavailable'); return; }
    for (const { subpath, target } of entries) {
      const rel = target.replace(/^\.\//, '');
      if (rel.includes('*')) {
        const prefix = rel.slice(0, rel.indexOf('*'));
        assert.ok([...files].some(f => f.startsWith(prefix)), `${subpath}: something under ${prefix} must ship`);
      } else {
        assert.ok(files.has(rel), `${subpath} → ${rel} must be in the tarball`);
      }
    }
    for (const f of files) {
      assert.ok(!f.startsWith('examples/'), `examples must not ship (${f})`);
      assert.ok(!f.startsWith('tests/'), `tests must not ship (${f})`);
    }
    assert.ok(!pkg.files.includes('examples'));
  });
});
