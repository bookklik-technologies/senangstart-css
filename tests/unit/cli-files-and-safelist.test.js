/**
 * Source discovery via tinyglobby + safelist expansion + config loader.
 */
import { describe, it, before, after } from 'node:test';
import assert from 'node:assert/strict';
import { mkdtempSync, rmSync, writeFileSync, mkdirSync, symlinkSync } from 'fs';
import { tmpdir } from 'os';
import { join, resolve } from 'path';
import { findFiles, splitPatterns, DEFAULT_IGNORE } from '../../src/cli/lib/files.js';
import { expandSafelist, inferAttrType } from '../../src/cli/lib/safelist.js';
import { loadConfig, discoverConfig, ConfigError, resolveConfigPath, configCandidates } from '../../src/cli/lib/config-loader.js';

let dir;
before(() => {
  dir = mkdtempSync(join(tmpdir(), 'sscss-files-'));
  const w = (p, c = '<div layout="flex"></div>') => { mkdirSync(join(dir, p, '..'), { recursive: true }); writeFileSync(join(dir, p), c); };
  w('index.html');
  w('src/App.jsx');
  w('src/deep/nested/Page.vue');
  w('resources/views/home.blade.php');
  w('resources/views/partials/nav.blade.php');
  w('legacy/old.html');
  w('node_modules/pkg/index.html');
  w('.git/hooks/x.html');
  w('dist/bundle.html');
  w('notes.md');
  mkdirSync(join(dir, 'outside'), { recursive: true });
  writeFileSync(join(dir, 'outside', 'linked.html'), '<div layout="grid"></div>');
  try {
    symlinkSync(join(dir, 'outside'), join(dir, 'src', 'link'), 'dir');
  } catch {
    // symlinks may be unavailable (Windows without privileges)
  }
});
after(() => rmSync(dir, { recursive: true, force: true }));

const rel = (files) => files.map(f => f.slice(dir.length + 1).split('\\').join('/')).sort();

describe('findFiles (tinyglobby)', () => {
  it('matches nested dirs and ignores node_modules/.git/dist by default', async () => {
    const files = await findFiles(['./**/*.html'], { cwd: dir });
    assert.deepEqual(rel(files), ['index.html', 'legacy/old.html', 'outside/linked.html']);
  });

  it('supports multi-dot extensions like *.blade.php', async () => {
    const files = await findFiles(['./resources/**/*.blade.php'], { cwd: dir });
    assert.deepEqual(rel(files), ['resources/views/home.blade.php', 'resources/views/partials/nav.blade.php']);
  });

  it('supports negation patterns', async () => {
    const files = await findFiles(['./**/*.html', '!./legacy/**', '!outside/**'], { cwd: dir });
    assert.deepEqual(rel(files), ['index.html']);
  });

  it('supports literal file paths and brace expansion', async () => {
    const files = await findFiles(['notes.md', './src/**/*.{jsx,vue}'], { cwd: dir });
    assert.deepEqual(rel(files), ['notes.md', 'src/App.jsx', 'src/deep/nested/Page.vue']);
  });

  it('does not follow symlinked directories', async () => {
    const files = await findFiles(['./src/**/*.html'], { cwd: dir });
    assert.deepEqual(rel(files), []);
  });

  it('accepts absolute patterns inside cwd and returns absolute sorted paths', async () => {
    const files = await findFiles([join(dir, 'src', '**', '*.jsx')], { cwd: dir });
    assert.deepEqual(files, [resolve(dir, 'src/App.jsx')]);
  });

  it('falls back to default globs when patterns are empty', async () => {
    const files = await findFiles([], { cwd: dir });
    assert.ok(rel(files).includes('index.html'));
    assert.ok(rel(files).includes('resources/views/home.blade.php'));
    assert.ok(rel(files).includes('notes.md'));
    assert.ok(!rel(files).some(f => f.startsWith('node_modules')));
  });

  it('splitPatterns separates include/exclude/literals', () => {
    const r = splitPatterns(['./**/*.html', '!./x/**', 'notes.md'], dir);
    assert.deepEqual(r.include, ['**/*.html']);
    assert.deepEqual(r.exclude, ['x/**']);
    assert.equal(r.literals.length, 1);
    assert.ok(DEFAULT_IGNORE.includes('**/node_modules/**'));
  });
});

describe('expandSafelist', () => {
  it('infers attribute types for bare tokens', () => {
    assert.equal(inferAttrType('flex'), 'layout');
    assert.equal(inferAttrType('tab:hover:center'), 'layout');
    assert.equal(inferAttrType('z:top'), 'layout');
    assert.equal(inferAttrType('p:medium'), 'space');
    assert.equal(inferAttrType('mob:g:small'), 'space');
    assert.equal(inferAttrType('bg:primary'), 'visual');
    assert.equal(inferAttrType('italic'), 'visual');
  });

  it('supports attr=token strings and { attr, tokens } objects', () => {
    const warnings = [];
    const sets = expandSafelist(['visual=bg:primary text:white', 'flex', 'p:medium', { attr: 'listens', tokens: ['card-1'] }, { attr: 'nope', tokens: ['x'] }, 42], { onInvalid: (m) => warnings.push(m) });
    assert.ok(sets.visual.has('bg:primary') && sets.visual.has('text:white'));
    assert.ok(sets.layout.has('flex'));
    assert.ok(sets.space.has('p:medium'));
    assert.ok(sets.listens.has('card-1'));
    assert.equal(warnings.length, 2);
  });

  it('returns empty sets for non-arrays', () => {
    const sets = expandSafelist(undefined);
    assert.equal(sets.layout.size + sets.space.size + sets.visual.size, 0);
  });
});

describe('config loader', () => {
  it('resolveConfigPath handles relative and absolute paths', () => {
    assert.equal(resolveConfigPath('a.js', '/root'), resolve('/root', 'a.js'));
    assert.equal(resolveConfigPath(resolve('/abs/a.js'), '/root'), resolve('/abs/a.js'));
  });

  it('discovers .js/.mjs/.cjs/.json configs in order', async () => {
    const d = mkdtempSync(join(tmpdir(), 'sscss-cfg-'));
    try {
      assert.equal(discoverConfig(d), null);
      writeFileSync(join(d, 'senangstart.config.json'), '{"preflight": false}');
      assert.equal(discoverConfig(d), join(d, 'senangstart.config.json'));
      writeFileSync(join(d, 'senangstart.config.mjs'), 'export default { preflight: true }');
      assert.equal(discoverConfig(d), join(d, 'senangstart.config.mjs'));
      const loaded = await loadConfig(undefined, { cwd: d });
      assert.equal(loaded.source, 'discovered');
      assert.equal(loaded.config.preflight, true);
      assert.ok(configCandidates().includes('senangstart.config.cjs'));
    } finally {
      rmSync(d, { recursive: true, force: true });
    }
  });

  it('loads JSON configs and config factories', async () => {
    const d = mkdtempSync(join(tmpdir(), 'sscss-cfg-'));
    try {
      writeFileSync(join(d, 'c.json'), '{"output": {"css": "./j.css"}}');
      writeFileSync(join(d, 'f.mjs'), 'export default () => ({ output: { css: "./f.css" } })');
      assert.equal((await loadConfig('c.json', { cwd: d })).config.output.css, './j.css');
      assert.equal((await loadConfig('f.mjs', { cwd: d })).config.output.css, './f.css');
    } finally {
      rmSync(d, { recursive: true, force: true });
    }
  });

  it('throws ConfigError for missing explicit config, syntax errors and invalid types', async () => {
    const d = mkdtempSync(join(tmpdir(), 'sscss-cfg-'));
    try {
      await assert.rejects(loadConfig('missing.js', { cwd: d }), (e) => e instanceof ConfigError && e.code === 'CONFIG_NOT_FOUND');
      writeFileSync(join(d, 'senangstart.config.mjs'), 'export default { content: [ ');
      await assert.rejects(loadConfig(undefined, { cwd: d }), (e) => e instanceof ConfigError && e.code === 'CONFIG_LOAD');
      writeFileSync(join(d, 'bad.json'), '{ not json');
      await assert.rejects(loadConfig('bad.json', { cwd: d }), (e) => e.code === 'CONFIG_PARSE');
      writeFileSync(join(d, 'types.json'), '{ "content": "x" }');
      await assert.rejects(loadConfig('types.json', { cwd: d }), (e) => e.code === 'CONFIG_INVALID' && /content/.test(e.message));
      const lenient = await loadConfig('types.json', { cwd: d, strict: false });
      assert.ok(lenient.errors.length > 0);
    } finally {
      rmSync(d, { recursive: true, force: true });
    }
  });

  it('accepts a raw object and reports unknown-key warnings', async () => {
    const loaded = await loadConfig({ preflight: false, whoops: 1 });
    assert.equal(loaded.source, 'object');
    assert.equal(loaded.config.preflight, false);
    assert.ok(loaded.warnings.some(w => w.includes('whoops')));
  });

  it('fresh: true re-imports a changed ESM config', async () => {
    const d = mkdtempSync(join(tmpdir(), 'sscss-cfg-'));
    try {
      const p = join(d, 'senangstart.config.mjs');
      writeFileSync(p, 'export default { output: { css: "./one.css" } }');
      assert.equal((await loadConfig(p, { fresh: true })).config.output.css, './one.css');
      writeFileSync(p, 'export default { output: { css: "./two.css" } }');
      assert.equal((await loadConfig(p, { fresh: true })).config.output.css, './two.css');
    } finally {
      rmSync(d, { recursive: true, force: true });
    }
  });
});
