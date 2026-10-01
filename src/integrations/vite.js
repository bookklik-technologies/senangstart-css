/**
 * SenangStart CSS - Vite plugin
 *
 *   // vite.config.js
 *   import senangstart from '@bookklik/senangstart-css/vite';
 *   export default { plugins: [senangstart()] };
 *
 *   // main.js — either import the virtual module …
 *   import 'virtual:senangstart.css';
 *   // … or put a directive in any CSS file Vite processes:
 *   //   @import "senangstart";      (or)      @senangstart;
 *
 * Dev: content files + the config file are watched; edits trigger an HMR CSS
 * update (no full reload). Token errors are logged as warnings.
 * Build: CSS is generated once per build and minified by Vite's CSS pipeline.
 * Token errors fail the build unless `ignoreInvalid: true`.
 */

import { resolve } from 'path';
import {
  PLUGIN_NAME,
  VIRTUAL_ID,
  hasDirective,
  replaceDirectives,
  toBuildOptions,
  runBuild,
  formatDiagnostic,
  contentWatchTargets,
  isIgnoredPath,
  isInside
} from './shared.js';

/** Resolved id for the virtual module. Ends in .css so Vite's CSS pipeline handles it. */
const RESOLVED_VIRTUAL_ID = '/__senangstart.css';
const CSS_LANG_RE = /\.(css|pcss|postcss|scss|sass|less|styl|stylus)(?:$|\?)/;
const SKIP_QUERY_RE = /[?&](?:raw|url|worker|sharedworker|inline-css)\b/;

/**
 * @param {import('../../types/vite.js').SenangStartViteOptions} [options]
 * @returns {import('vite').Plugin}
 */
export function senangstart(options = {}) {
  let root = process.cwd();
  let isBuild = false;
  /** @type {import('vite').ViteDevServer|null} */
  let server = null;
  let logger = null;

  /** @type {import('../node.js').BuildResult|null} */
  let result = null;
  let inflight = null;
  let dirty = true;
  let freshNext = true; // first build cache-busts (dev-server restarts reuse the process)
  let fileSet = new Set();
  let watchTargets = { dirs: [], files: [] };
  /** CSS module ids (directive files + the virtual module) that depend on our output. */
  const dependents = new Set();
  let reported = false; // diagnostics reported for the current result?

  const cwd = () => resolve(options.cwd || root);

  async function generate() {
    // Serialise builds; a change that lands mid-build marks us dirty again.
    while (inflight) await inflight.catch(() => {});
    if (!dirty && result) return result;
    const fresh = freshNext;
    freshNext = false;
    dirty = false;
    inflight = (async () => {
      try {
        const r = await runBuild(toBuildOptions(options, {
          cwd: cwd(),
          fresh,
          // Vite minifies CSS itself in build; never double-minify by default.
          minify: false
        }));
        result = r;
        reported = false;
        fileSet = new Set(r.files);
        watchTargets = contentWatchTargets(r.config && r.config.content, cwd());
        syncDevWatcher();
        return r;
      } catch (e) {
        dirty = true; // retry next time
        throw e;
      } finally {
        inflight = null;
      }
    })();
    return inflight;
  }

  function syncDevWatcher() {
    if (!server || !result) return;
    const targets = [...result.files];
    if (result.configPath) targets.push(result.configPath);
    // Vite already watches its root; add glob bases that live outside it.
    for (const { dir } of watchTargets.dirs) if (!isInside(root, dir)) targets.push(dir);
    if (targets.length) server.watcher.add(targets);
  }

  /**
   * Report diagnostics once per generated result.
   * @param {import('rollup').PluginContext} ctx
   */
  function report(ctx, r) {
    if (reported) return;
    reported = true;
    const base = cwd();
    for (const w of r.warnings) {
      if (w.code === 'no-sources' && !isBuild) continue;
      ctx.warn(formatDiagnostic(w, base));
    }
    if (r.errors.length === 0) return;
    const lines = r.errors.map((d) => formatDiagnostic(d, base));
    if (isBuild && !options.ignoreInvalid) {
      ctx.error(`[senangstart] ${r.errors.length} invalid token(s):\n  ${lines.join('\n  ')}\n(set ignoreInvalid: true to downgrade to warnings)`);
    }
    for (const l of lines) ctx.warn(l);
  }

  async function cssFor(ctx) {
    const r = await generate();
    report(ctx, r);
    if (isBuild) {
      for (const f of r.files) ctx.addWatchFile(f);
      if (r.configPath) ctx.addWatchFile(r.configPath);
    }
    return r.css;
  }

  // ---- dev HMR -------------------------------------------------------------

  let timer = null;
  /** CSS clients had before the current batch of file events (null = no batch pending). */
  let baseline = null;

  /**
   * Mark our output stale *immediately* (so a page reload triggered by the
   * same file event — e.g. laravel-vite-plugin `refresh: true` — regenerates
   * instead of getting cached CSS), then debounce the HMR push.
   */
  function schedule(fresh) {
    if (baseline === null) baseline = result ? result.css : '';
    dirty = true;
    if (fresh) freshNext = true;
    invalidateDependents(false);
    if (timer) clearTimeout(timer);
    timer = setTimeout(flush, 30);
  }

  async function flush() {
    timer = null;
    let r;
    try {
      r = await generate();
    } catch (e) {
      baseline = null;
      logger?.error(`[senangstart] ${e.message}`, { timestamp: true, error: e });
      server?.ws?.send({ type: 'error', err: { message: `[senangstart] ${e.message}`, stack: e.stack || '', plugin: PLUGIN_NAME } });
      return;
    }
    const changed = r.css !== baseline;
    baseline = null;
    if (!changed) return;
    if (!reported) {
      for (const w of r.errors) logger?.warn(`[senangstart] ${formatDiagnostic(w, cwd())}`, { timestamp: true });
      reported = true;
    }
    await invalidateDependents(true);
  }

  async function invalidateDependents(push) {
    if (!server) return;
    const graph = server.moduleGraph;
    for (const id of dependents) {
      const mods = graph.getModulesByFile ? graph.getModulesByFile(id) : null;
      const list = mods && mods.size ? [...mods] : [graph.getModuleById(id)].filter(Boolean);
      for (const mod of list) {
        graph.invalidateModule(mod);
        // reloadModule propagates through the CSS module's HMR boundary
        // (self-accepting style module / <link> css-update) — no full reload.
        if (push) await server.reloadModule(mod);
      }
    }
  }

  function isContentCandidate(file) {
    if (isIgnoredPath(file)) return false;
    if (CSS_LANG_RE.test(file)) return false; // never react to our own output
    if (watchTargets.files.includes(file)) return true;
    return watchTargets.dirs.some(({ dir }) => isInside(dir, file));
  }

  function onWatchEvent(event, path) {
    const file = resolve(path);
    if (result && result.configPath && file === resolve(result.configPath)) {
      schedule(true);
      return;
    }
    if (event === 'change') {
      if (fileSet.has(file)) schedule(false);
      return;
    }
    // add / unlink — the CSS-equality check in flush() drops no-op rebuilds.
    if (fileSet.has(file) || isContentCandidate(file)) schedule(false);
  }

  return {
    name: PLUGIN_NAME,
    enforce: 'pre',

    configResolved(config) {
      root = config.root;
      isBuild = config.command === 'build';
      logger = config.logger;
    },

    configureServer(devServer) {
      server = devServer;
      server.watcher.on('change', (p) => onWatchEvent('change', p));
      server.watcher.on('add', (p) => onWatchEvent('add', p));
      server.watcher.on('unlink', (p) => onWatchEvent('unlink', p));
      // Warm up so the first request is fast and the watcher knows our files.
      generate().catch((e) => logger?.error(`[senangstart] ${e.message}`, { timestamp: true }));
    },

    buildStart() {
      if (isBuild) {
        dirty = true;
        reported = false;
      }
    },

    watchChange(id) {
      // `vite build --watch`
      if (!isBuild) return;
      const file = resolve(id);
      if (result && result.configPath && file === resolve(result.configPath)) freshNext = true;
    },

    resolveId(id) {
      if (id === VIRTUAL_ID || id === RESOLVED_VIRTUAL_ID) return RESOLVED_VIRTUAL_ID;
      return null;
    },

    async load(id) {
      if (id !== RESOLVED_VIRTUAL_ID && !id.startsWith(RESOLVED_VIRTUAL_ID + '?')) return null;
      dependents.add(RESOLVED_VIRTUAL_ID);
      const css = await cssFor(this);
      return { code: css, map: null };
    },

    async transform(code, id) {
      if (id.startsWith(RESOLVED_VIRTUAL_ID)) return null;
      if (!CSS_LANG_RE.test(id) || SKIP_QUERY_RE.test(id)) return null;
      if (!hasDirective(code)) return null;
      dependents.add(id.split('?')[0]);
      const css = await cssFor(this);
      return { code: replaceDirectives(code, css), map: null };
    }
  };
}

export default senangstart;
