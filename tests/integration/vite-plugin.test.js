/**
 * Vite plugin (src/integrations/vite.js) exercised through Vite's real
 * programmatic API against temp fixture projects.
 */
import { describe, it, before, after } from 'node:test';
import assert from 'node:assert/strict';
import { mkdtempSync, rmSync, writeFileSync, mkdirSync } from 'fs';
import { tmpdir } from 'os';
import { join, dirname } from 'path';
import { build as viteBuild, createServer } from 'vite';
import senangstart, { senangstart as named } from '../../src/integrations/vite.js';

function makeProject(files) {
  const dir = mkdtempSync(join(tmpdir(), 'sscss-vite-'));
  for (const [p, c] of Object.entries(files)) {
    mkdirSync(dirname(join(dir, p)), { recursive: true });
    writeFileSync(join(dir, p), c);
  }
  return dir;
}

const baseFiles = (body) => ({
  'index.html': `<!doctype html><html><body>${body}<script type="module" src="/main.js"></script></body></html>`,
  'main.js': "import 'virtual:senangstart.css';\n",
  'senangstart.config.json': JSON.stringify({ content: ['./index.html', './src/**/*.js'], preflight: false })
});

async function buildProject(root, pluginOptions = {}) {
  const out = await viteBuild({
    root,
    configFile: false,
    logLevel: 'silent',
    plugins: [senangstart(pluginOptions)],
    build: { write: false, outDir: 'dist', minify: true }
  });
  const outputs = Array.isArray(out) ? out.flatMap(o => o.output) : out.output;
  return outputs.filter(o => o.type === 'asset' && o.fileName.endsWith('.css')).map(o => String(o.source)).join('\n');
}

describe('vite plugin', () => {
  const dirs = [];
  after(() => { for (const d of dirs) rmSync(d, { recursive: true, force: true }); });

  it('exports a default and a named factory returning a pre plugin', () => {
    assert.equal(senangstart, named);
    const p = senangstart();
    assert.equal(p.name, 'senangstart');
    assert.equal(p.enforce, 'pre');
  });

  it('build: virtual:senangstart.css emits a minified CSS asset with utility rules', async () => {
    const root = makeProject(baseFiles('<div space="p:big" layout="flex" visual="bg:primary">x</div>'));
    dirs.push(root);
    const css = await buildProject(root);
    assert.ok(css.includes('[space~="p:big"]') || css.includes('[space~=p\\:big]'), 'space utility present');
    assert.ok(css.includes('display:flex'), 'minified by Vite');
    assert.ok(!css.includes('\n  '), 'no pretty-printed indentation');
  });

  it('build: @import "senangstart" / @senangstart; directives are replaced in CSS files', async () => {
    const root = makeProject({
      ...baseFiles('<div layout="grid" visual="bg:primary">x</div>'),
      'main.js': "import './src/app.css';\n",
      'src/app.css': '@import "senangstart";\n.own { color: red }\n',
      'src/widget.js': 'export const w = `<i space="m:small"></i>`;'
    });
    dirs.push(root);
    const css = await buildProject(root);
    assert.ok(css.includes('display:grid'));
    assert.ok(css.includes('m:small'), 'scans JS content files too');
    assert.ok(css.includes('.own{color:red}'), 'rest of the file preserved');
    assert.ok(!css.includes('senangstart"'), 'directive removed');
  });

  it('build: an invalid token fails the build; ignoreInvalid downgrades it', async () => {
    const root = makeProject(baseFiles('<div space="p:definitely-not-a-size">x</div><p layout="flex"></p>'));
    dirs.push(root);
    await assert.rejects(() => buildProject(root), /invalid token|definitely-not-a-size/);
    const css = await buildProject(root, { ignoreInvalid: true });
    assert.ok(css.includes('display:flex'));
  });

  describe('dev server', () => {
    let root;
    let server;
    const sent = [];

    before(async () => {
      root = makeProject({ ...baseFiles('<div space="p:big">x</div>'), 'src/app.css': '@senangstart;\n.mine { color: red }\n' });
      dirs.push(root);
      server = await createServer({
        root,
        configFile: false,
        logLevel: 'silent',
        plugins: [senangstart()],
        server: { middlewareMode: true, ws: false, watcher: { usePolling: false } },
        appType: 'custom',
        optimizeDeps: { noDiscovery: true, include: [] }
      });
      const record = (payload) => { sent.push(payload); };
      const hot = server.environments?.client?.hot;
      if (hot) {
        const orig = hot.send.bind(hot);
        hot.send = (...a) => { record(a[0]); return orig(...a); };
      }
      const origWs = server.ws.send.bind(server.ws);
      server.ws.send = (...a) => { record(a[0]); return origWs(...a); };
    });
    after(async () => { if (server) await server.close(); });

    async function loadCss() {
      // Import the CSS module the way a browser would (as a JS style module)
      const res = await server.transformRequest('/__senangstart.css');
      return res.code;
    }

    async function waitFor(fn, ms = 6000) {
      const start = Date.now();
      while (Date.now() - start < ms) {
        if (await fn()) return true;
        await new Promise(r => setTimeout(r, 50));
      }
      return false;
    }

    it('serves virtual:senangstart.css', async () => {
      const resolved = await server.pluginContainer.resolveId('virtual:senangstart.css');
      assert.equal(resolved.id, '/__senangstart.css');
      const code = await loadCss();
      assert.ok(code.includes('p:big'));
      const directive = (await server.transformRequest('/src/app.css')).code;
      assert.ok(directive.includes('p:big') && directive.includes('.mine'), 'directive CSS file expanded in dev');
    });

    it('content change → CSS HMR update (not a full reload)', async () => {
      sent.length = 0;
      writeFileSync(join(root, 'index.html'), baseFiles('<div space="p:big" visual="bg:primary">x</div>')['index.html']);
      const updatedPaths = () => sent.filter(p => p && p.type === 'update').flatMap(p => p.updates.map(u => u.path));
      const ok = await waitFor(() => {
        const ps = updatedPaths();
        return ps.some(p => p.includes('__senangstart.css')) && ps.some(p => p.includes('/src/app.css'));
      });
      assert.ok(ok, `expected an HMR update, got ${JSON.stringify(sent.map(p => p && p.type))}`);
      const paths = updatedPaths();
      assert.ok(paths.some(p => p.includes('__senangstart.css')), 'update targets the virtual CSS module');
      assert.ok(paths.some(p => p.includes('/src/app.css')), 'update targets the directive CSS file');
      assert.ok(!sent.some(p => p && p.type === 'full-reload' && /senangstart/.test(JSON.stringify(p))), 'no senangstart-triggered full reload');
      const code = await loadCss();
      assert.ok(code.includes('bg:primary'), 'new utility present after update');
    });

    it('new content file matching a glob is picked up', async () => {
      sent.length = 0;
      mkdirSync(join(root, 'src'), { recursive: true });
      writeFileSync(join(root, 'src', 'comp.js'), 'export default `<b layout="grid"></b>`;');
      const ok = await waitFor(async () => (await loadCss()).includes('display: grid'));
      assert.ok(ok, 'grid utility appears after adding a content file');
    });

    it('config change rebuilds with a fresh config', async () => {
      writeFileSync(join(root, 'senangstart.config.json'), JSON.stringify({ content: ['./index.html', './src/**/*.js'], preflight: false, safelist: ['visual=bg:danger'] }));
      const ok = await waitFor(async () => (await loadCss()).includes('bg:danger'));
      assert.ok(ok, 'safelist from edited config applied');
    });
  });
});
