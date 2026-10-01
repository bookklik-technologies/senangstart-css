/**
 * PostCSS plugin (src/integrations/postcss.js) run through postcss() against
 * temp fixture projects.
 */
import { describe, it, beforeEach, afterEach } from 'node:test';
import assert from 'node:assert/strict';
import { mkdtempSync, rmSync, writeFileSync, mkdirSync } from 'fs';
import { tmpdir } from 'os';
import { join, dirname } from 'path';
import postcss from 'postcss';
import senangstart, { senangstart as named } from '../../src/integrations/postcss.js';

describe('postcss plugin', () => {
  let dir;
  beforeEach(() => { dir = mkdtempSync(join(tmpdir(), 'sscss-postcss-')); });
  afterEach(() => rmSync(dir, { recursive: true, force: true }));
  const write = (p, c) => { mkdirSync(dirname(join(dir, p)), { recursive: true }); writeFileSync(join(dir, p), c); };
  const run = (css, opts = {}) => postcss([senangstart({ cwd: dir, preflight: false, ...opts })]).process(css, { from: join(dir, 'src/app.css') });

  it('is a valid PostCSS 8 plugin creator', () => {
    assert.equal(senangstart, named);
    assert.equal(senangstart.postcss, true);
    assert.equal(senangstart().postcssPlugin, 'senangstart');
  });

  it('replaces @import "senangstart"; with generated CSS and keeps the rest', async () => {
    write('index.html', '<div space="p:big" layout="flex" visual="bg:primary">x</div>');
    const result = await run('.before { color: red }\n@import "senangstart";\n.after { color: blue }', { content: ['./**/*.html'] });
    assert.ok(result.css.includes('[space~="p:big"]'));
    assert.ok(result.css.includes('display: flex'));
    assert.ok(result.css.indexOf('.before') < result.css.indexOf('p:big'), 'inserted in place');
    assert.ok(result.css.indexOf('p:big') < result.css.indexOf('.after'));
    assert.ok(!/@import\s+["']senangstart/.test(result.css), 'directive removed');
  });

  it('supports @senangstart; and only expands the first of several directives', async () => {
    write('index.html', '<div layout="grid">x</div>');
    const result = await run("@senangstart;\n@import 'senangstart';", { content: ['./**/*.html'] });
    assert.equal(result.css.split('display: grid').length - 1, 1, 'emitted once');
    assert.ok(!result.css.includes('senangstart;'));
  });

  it('does nothing when no directive is present', async () => {
    write('index.html', '<div layout="flex">x</div>');
    const input = '@import "other.css";\n.a { color: red }';
    const result = await run(input, { content: ['./**/*.html'] });
    assert.equal(result.css, input);
    assert.equal(result.messages.length, 0);
  });

  it('registers dependency and dir-dependency messages for watchers', async () => {
    write('views/a.blade.php', '<div layout="flex">x</div>');
    write('views/partials/b.blade.php', '<div layout="grid">x</div>');
    write('senangstart.config.json', JSON.stringify({ content: ['./views/**/*.blade.php'] }));
    const result = await run('@senangstart;');
    const deps = result.messages.filter(m => m.type === 'dependency').map(m => m.file).sort();
    assert.deepEqual(deps, [
      join(dir, 'senangstart.config.json'),
      join(dir, 'views/a.blade.php'),
      join(dir, 'views/partials/b.blade.php')
    ].sort());
    const dirDeps = result.messages.filter(m => m.type === 'dir-dependency');
    assert.deepEqual(dirDeps.map(m => [m.dir, m.glob]), [[join(dir, 'views'), '**/*.blade.php']]);
    for (const m of result.messages) {
      assert.equal(m.plugin, 'senangstart');
      assert.equal(m.parent, join(dir, 'src/app.css'));
    }
  });

  it('invalid tokens throw by default; ignoreInvalid reports them as warnings', async () => {
    write('index.html', '<div space="p:nope-size" layout="flex">x</div>');
    await assert.rejects(() => run('@senangstart;', { content: ['./**/*.html'] }), (e) => {
      assert.equal(e.name, 'CssSyntaxError');
      assert.match(e.message, /p:nope-size/);
      assert.match(e.message, /index\.html:1/);
      return true;
    });
    const result = await run('@senangstart;', { content: ['./**/*.html'], ignoreInvalid: true });
    assert.ok(result.css.includes('display: flex'));
    const warnings = result.warnings().map(w => w.text);
    assert.ok(warnings.some(t => t.includes('p:nope-size')), warnings.join('\n'));
    assert.ok(result.warnings().every(w => w.plugin === 'senangstart'));
  });

  it('a project without matching sources yields a warning, not a crash', async () => {
    const result = await run('@senangstart;\n.x{}', { content: ['./nothing/**/*.html'] });
    assert.ok(result.css.includes('.x'));
    assert.ok(result.warnings().some(w => /No source files/.test(w.text)));
  });
});
