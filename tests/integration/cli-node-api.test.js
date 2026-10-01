/**
 * Programmatic API (src/node.js): build() / watch() / loadConfig() / defineConfig()
 */
import { describe, it, beforeEach, afterEach } from 'node:test';
import assert from 'node:assert/strict';
import { mkdtempSync, rmSync, writeFileSync, mkdirSync, existsSync, readFileSync, readdirSync } from 'fs';
import { tmpdir } from 'os';
import { join, dirname } from 'path';
import { build, watch, loadConfig, defineConfig, ConfigError, BuildError } from '../../src/node.js';
import { GENERATED_MARKERS, writeGeneratedFile, hasGeneratedMarker, markerFor } from '../../src/utils/node-io.js';

describe('node API', () => {
  let dir;
  beforeEach(() => { dir = mkdtempSync(join(tmpdir(), 'sscss-api-')); });
  afterEach(() => rmSync(dir, { recursive: true, force: true }));
  const write = (p, c) => { mkdirSync(dirname(join(dir, p)), { recursive: true }); writeFileSync(join(dir, p), c); };

  it('defineConfig is an identity helper', () => {
    const cfg = { content: ['x'] };
    assert.equal(defineConfig(cfg), cfg);
  });

  it('build() with output:false returns CSS without writing anything', async () => {
    write('index.html', '<div layout="flex" space="p:medium">x</div>');
    const before = readdirSync(dir);
    const result = await build({ cwd: dir, output: false, config: { content: ['./**/*.html'], preflight: false } });
    assert.equal(result.ok, true);
    assert.deepEqual(result.errors, []);
    assert.ok(result.css.includes('display: flex'));
    assert.deepEqual(result.files, [join(dir, 'index.html')]);
    assert.deepEqual(result.outputs, { skipped: [] });
    assert.equal(typeof result.durationMs, 'number');
    assert.equal(result.configPath, null);
    assert.deepEqual(readdirSync(dir), before, 'nothing written');
  });

  it('build() writes CSS to output path (relative to cwd) and supports minify/content/safelist overrides', async () => {
    write('src/a.html', '<div layout="flex">x</div>');
    write('other.html', '<div layout="grid">x</div>');
    const result = await build({
      cwd: dir,
      output: 'dist-out/app.css',
      content: ['./src/**/*.html'],
      minify: true,
      safelist: ['visual=bg:primary'],
      config: { preflight: false }
    });
    assert.equal(result.outputs.css, join(dir, 'dist-out', 'app.css'));
    const css = readFileSync(result.outputs.css, 'utf-8');
    assert.ok(css.includes('display:flex'), 'minified');
    assert.ok(!css.includes('display:grid'), 'content override excludes other.html');
    assert.ok(css.includes('bg:primary'), 'safelist applied');
  });

  it('build() reports diagnostics with file/line; ignoreInvalid moves them to warnings', async () => {
    write('index.html', '<p></p>\n<div layout="flex nope_token">x</div>');
    let r = await build({ cwd: dir, output: false, config: { content: ['./**/*.html'] } });
    assert.equal(r.ok, false);
    assert.equal(r.errors.length, 1);
    assert.equal(r.errors[0].raw, 'nope_token');
    assert.equal(r.errors[0].attrType, 'layout');
    assert.equal(r.errors[0].file, join(dir, 'index.html'));
    assert.equal(r.errors[0].line, 2);
    assert.equal(typeof r.errors[0].code, 'string');
    assert.equal(typeof r.errors[0].message, 'string');

    r = await build({ cwd: dir, output: false, ignoreInvalid: true, config: { content: ['./**/*.html'] } });
    assert.equal(r.ok, true);
    assert.equal(r.warnings.filter(w => w.raw === 'nope_token').length, 1);
  });

  it('build() throws ConfigError / BuildError appropriately', async () => {
    await assert.rejects(build({ cwd: dir, config: 'missing.mjs' }), ConfigError);
    write('senangstart.config.mjs', 'export default { content: 42 }');
    await assert.rejects(build({ cwd: dir }), (e) => e instanceof ConfigError && e.code === 'CONFIG_INVALID');
    rmSync(join(dir, 'senangstart.config.mjs'));
    await assert.rejects(build({ cwd: dir, output: false }), (e) => e instanceof BuildError && e.code === 'NO_SOURCES');
  });

  it('build() with only a safelist and no files still produces CSS', async () => {
    const r = await build({ cwd: dir, output: false, config: { content: ['./none/**/*.html'], preflight: false, safelist: ['flex'] } });
    assert.ok(r.css.includes('display: flex'));
  });

  it('loadConfig() merges + validates and exposes path/source/warnings', async () => {
    write('senangstart.config.json', '{"preflight": false, "extra": 1}');
    const loaded = await loadConfig(undefined, { cwd: dir });
    assert.equal(loaded.source, 'discovered');
    assert.equal(loaded.path, join(dir, 'senangstart.config.json'));
    assert.equal(loaded.config.preflight, false);
    assert.ok(loaded.warnings.some(w => w.includes('extra')));
  });

  it('opt-in typescript/aiContext outputs honour the marker protection', async () => {
    write('index.html', '<div layout="flex">x</div>');
    write('types/senang.d.ts', '// hand written types');
    const r = await build({
      cwd: dir,
      config: { content: ['./**/*.html'], output: { css: './out.css', aiContext: './ai.md', typescript: './types/senang.d.ts' } }
    });
    assert.equal(readFileSync(join(dir, 'types', 'senang.d.ts'), 'utf-8'), '// hand written types', 'user file untouched');
    assert.equal(r.outputs.typescript, undefined);
    assert.ok(r.outputs.skipped.some(s => s.kind === 'typescript' && /refusing to overwrite/.test(s.reason)));
    assert.equal(r.outputs.aiContext, join(dir, 'ai.md'));
    assert.ok(readFileSync(join(dir, 'ai.md'), 'utf-8').startsWith(GENERATED_MARKERS.hash));
    assert.ok(r.warnings.some(w => w.code === 'output-protected'));
  });

  it('watch() rebuilds on file change and config change, and close() stops it', async () => {
    write('index.html', '<div layout="flex">x</div>');
    write('senangstart.config.mjs', `export default { content: ['./**/*.html'], output: { css: './w1.css' }, preflight: false }`);

    const results = [];
    let resolveNext;
    const next = () => new Promise(r => { resolveNext = r; });
    const watcher = await watch({ cwd: dir, debounceMs: 20 }, (result, error, meta) => {
      results.push({ result, error, meta });
      if (resolveNext) { const r = resolveNext; resolveNext = null; r(); }
    });

    try {
      assert.equal(results.length, 1, 'initial build reported');
      assert.equal(results[0].meta.event, 'initial');
      assert.ok(existsSync(join(dir, 'w1.css')));

      let p = next();
      await new Promise(r => setTimeout(r, 150));
      write('page2.html', '<div layout="grid">y</div>');
      await Promise.race([p, new Promise((_, rej) => setTimeout(() => rej(new Error('timeout waiting for rebuild')), 8000))]);
      const last = results.at(-1);
      assert.equal(last.error, undefined);
      assert.ok(last.result.css.includes('display: grid'));
      assert.equal(last.result.files.length, 2);

      p = next();
      write('senangstart.config.mjs', `export default { content: ['./**/*.html'], output: { css: './w2.css' }, preflight: false }`);
      await Promise.race([p, new Promise((_, rej) => setTimeout(() => rej(new Error('timeout waiting for config rebuild')), 8000))]);
      assert.equal(results.at(-1).meta.event, 'config');
      assert.ok(existsSync(join(dir, 'w2.css')), 'fresh config applied');

      // Break the config: error is reported, watcher survives
      p = next();
      write('senangstart.config.mjs', `export default { content: [`);
      await Promise.race([p, new Promise((_, rej) => setTimeout(() => rej(new Error('timeout waiting for error')), 8000))]);
      assert.ok(results.at(-1).error instanceof ConfigError);
    } finally {
      await watcher.close();
    }
    const count = results.length;
    write('page3.html', '<div layout="flex">z</div>');
    await new Promise(r => setTimeout(r, 300));
    assert.equal(results.length, count, 'no builds after close()');
  });
});

describe('node-io generated-file helpers', () => {
  it('markerFor picks a block comment for code files and # for others', () => {
    assert.equal(markerFor('a.d.ts'), GENERATED_MARKERS.block);
    assert.equal(markerFor('x.css'), GENERATED_MARKERS.block);
    assert.equal(markerFor('.cursorrules'), GENERATED_MARKERS.hash);
    assert.equal(markerFor('ai.md'), GENERATED_MARKERS.hash);
  });

  it('hasGeneratedMarker only inspects the head of the file', () => {
    assert.equal(hasGeneratedMarker(`${GENERATED_MARKERS.block}\nbody`), true);
    assert.equal(hasGeneratedMarker('a\nb\nc\nd\ne\nf\n' + GENERATED_MARKERS.hash), false);
    assert.equal(hasGeneratedMarker(null), false);
  });

  it('writeGeneratedFile creates, overwrites own files, protects user files', async () => {
    const dir = mkdtempSync(join(tmpdir(), 'sscss-gen-'));
    try {
      const p = join(dir, 'nested', 'out.d.ts');
      let r = await writeGeneratedFile(p, 'export {};');
      assert.equal(r.written, true);
      assert.ok(readFileSync(p, 'utf-8').startsWith(GENERATED_MARKERS.block));
      r = await writeGeneratedFile(p, 'export const x = 1;');
      assert.equal(r.written, true);
      writeFileSync(p, 'user content');
      r = await writeGeneratedFile(p, 'export {};');
      assert.equal(r.written, false);
      assert.equal(r.skipped, true);
      assert.match(r.reason, /refusing to overwrite/);
      assert.equal(readFileSync(p, 'utf-8'), 'user content');
    } finally {
      rmSync(dir, { recursive: true, force: true });
    }
  });
});
