/**
 * SenangStart CSS - Browser JIT Runtime
 * Zero-config, browser-based CSS compilation
 *
 * This engine runs in the browser, scans the DOM for attributes,
 * and generates CSS on the fly using the core compiler.
 *
 * Usage:
 * <script src="https://unpkg.com/@bookklik/senangstart-css/dist/senangstart-css.min.js"></script>
 */

import { tokenizeAll } from '../core/tokenizer-core.js';
import { generateCSS } from '../compiler/generators/css.js';
import { mergeConfig } from '../config/defaults.js';
import { splitSafeTokens } from './scan.js';

try {
(function() {
  'use strict';


  // ============================================
  // CONFIG LOADER
  // ============================================

  function validateConfig(config) {
    if (!config || typeof config !== 'object' || Array.isArray(config)) return false;
    if (config.theme && (typeof config.theme !== 'object' || Array.isArray(config.theme))) return false;
    if (config.content && !Array.isArray(config.content)) return false;
    if (config.output && typeof config.output !== 'object') return false;
    return true;
  }

  function loadInlineConfig() {
    const configEl = document.querySelector('script[type="senangstart/config"]');
    if (!configEl) return {};

    const text = (configEl.textContent || '').trim();
    if (!text) return {};

    // Validate content length to prevent DoS
    if (text.length > 50000) {
      console.error('[SenangStart] Config content exceeds maximum length');
      return {};
    }

    try {
      const parsed = JSON.parse(text);
      if (!validateConfig(parsed)) {
        console.error('[SenangStart] Invalid config structure');
        return {};
      }
      return parsed;
    } catch (e) {
      console.error('[SenangStart] Invalid config JSON:', e.message);
      return {};
    }
  }

  function getFinalConfig() {
    const user = loadInlineConfig();
    return mergeConfig(user);
  }

  // ============================================
  // TOKEN STORE (incremental)
  // ============================================

  const ATTRS = ['layout', 'space', 'visual', 'interact', 'listens'];
  const OBSERVE_OPTS = { childList: true, subtree: true, attributes: true, attributeFilter: ATTRS };
  const tokens = { layout: new Set(), space: new Set(), visual: new Set(), interact: new Set(), listens: new Set() };
  let dirty = false;

  /** Add an element's tokens to the store; returns true when something new was seen. */
  function scanElement(el) {
    if (!el || el.nodeType !== 1 || typeof el.getAttribute !== 'function') return;
    for (let i = 0; i < ATTRS.length; i++) {
      if (!el.hasAttribute(ATTRS[i])) continue;
      const parts = splitSafeTokens(el.getAttribute(ATTRS[i]));
      const set = tokens[ATTRS[i]];
      for (let j = 0; j < parts.length; j++) {
        if (!set.has(parts[j])) { set.add(parts[j]); dirty = true; }
      }
    }
    if (el.shadowRoot) registerRoot(el.shadowRoot);
  }

  /** Scan an element and everything beneath it (including open shadow roots). */
  function scanTree(root) {
    if (!root) return;
    if (root.nodeType === 1) scanElement(root);
    if (typeof root.querySelectorAll !== 'function') return;
    const els = root.querySelectorAll('[layout], [space], [visual], [interact], [listens]');
    for (let i = 0; i < els.length; i++) scanElement(els[i]);
    // shadow hosts without senangstart attributes of their own
    const hosts = root.querySelectorAll('*');
    for (let i = 0; i < hosts.length; i++) if (hosts[i].shadowRoot) registerRoot(hosts[i].shadowRoot);
  }

  // ============================================
  // SHADOW DOM
  // ============================================

  const roots = new Set();          // document + every shadow root we style
  let observer = null;

  function registerRoot(root) {
    if (!root || roots.has(root)) return;
    roots.add(root);
    adoptInto(root);
    if (observer) observer.observe(root, OBSERVE_OPTS);
    if (root !== document) scanTree(root);
  }

  // Shadow roots attached after load (custom elements upgrading) are picked up
  // by hooking attachShadow; this also covers closed roots.
  function hookAttachShadow() {
    if (typeof Element === 'undefined' || !Element.prototype.attachShadow) return;
    const original = Element.prototype.attachShadow;
    if (original.__senangstart) return;
    const patched = function attachShadow(init) {
      const root = original.call(this, init);
      // defer: the root is empty at this point; content arrives in the same task
      queueMicrotask(function () { registerRoot(root); scheduleCompile(); });
      return root;
    };
    patched.__senangstart = true;
    Element.prototype.attachShadow = patched;
  }

  // ============================================
  // STYLE INJECTION
  // ============================================

  const supportsConstructed = typeof CSSStyleSheet !== 'undefined'
    && 'replaceSync' in CSSStyleSheet.prototype
    && 'adoptedStyleSheets' in document;
  let sheet = null;          // constructed sheet shared by document + shadow roots
  let lastCSS = '';

  function adoptInto(root) {
    if (!supportsConstructed) {
      if (root !== document && root.nodeType === 11) {
        // fallback: a <style> clone per shadow root
        let el = root.querySelector('style[data-senangstart]');
        if (!el) { el = document.createElement('style'); el.setAttribute('data-senangstart', ''); root.appendChild(el); }
        el.textContent = lastCSS;
      }
      return;
    }
    if (!sheet) sheet = new CSSStyleSheet();
    if (!root.adoptedStyleSheets.includes(sheet)) root.adoptedStyleSheets = [...root.adoptedStyleSheets, sheet];
  }

  function injectStyles(css) {
    if (css === lastCSS) return;
    lastCSS = css;
    if (supportsConstructed) {
      if (!sheet) sheet = new CSSStyleSheet();
      sheet.replaceSync(css);
      return;
    }
    // Fallback (no constructed stylesheets): one <style> in <head> + per-root clones
    const head = document.head || document.getElementsByTagName('head')[0];
    if (head) {
      let styleEl = document.getElementById('senangstart-jit');
      if (!styleEl) { styleEl = document.createElement('style'); styleEl.id = 'senangstart-jit'; head.appendChild(styleEl); }
      styleEl.textContent = css;
    }
    for (const root of roots) if (root !== document) adoptInto(root);
  }

  // ============================================
  // COMPILE
  // ============================================

  let config = null;
  let scheduled = false;

  function compile() {
    scheduled = false;
    if (!dirty) return;
    dirty = false;
    const list = tokenizeAll(tokens, config);
    injectStyles(generateCSS(list, config));
  }

  // Compile synchronously after the current mutation batch (microtask), so new
  // elements are styled before the next paint — no debounce, no FOUC.
  function scheduleCompile() {
    if (scheduled) return;
    scheduled = true;
    queueMicrotask(compile);
  }

  function onMutations(records) {
    for (let i = 0; i < records.length; i++) {
      const r = records[i];
      if (r.type === 'attributes') {
        scanElement(r.target);
      } else if (r.type === 'childList') {
        for (let j = 0; j < r.addedNodes.length; j++) scanTree(r.addedNodes[j]);
      }
    }
    if (dirty) scheduleCompile();
  }

  // ============================================
  // INITIALIZATION
  // ============================================

  function init() {
    config = getFinalConfig();

    if (!document.body && document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', function () { init(); });
      return;
    }

    observer = new MutationObserver(onMutations);
    hookAttachShadow();
    registerRoot(document);           // adopts the sheet + observes the document
    scanTree(document);               // initial full scan (registers shadow roots)
    dirty = true;
    compile();

    // Public debug / integration API
    window.SenangStart = {
      version: typeof __SENANGSTART_VERSION__ !== 'undefined' ? __SENANGSTART_VERSION__ : 'dev',
      css: function () { return lastCSS; },
      tokens: function () {
        const out = {};
        for (const k of ATTRS) out[k] = [...tokens[k]];
        return out;
      },
      recompile: function () { dirty = true; compile(); return lastCSS; },
      config: config
    };

    if (config.debug) {
      console.log('%c[SenangStart CSS]%c JIT runtime initialized \u2713',
        'color: #2563EB; font-weight: bold;', 'color: #10B981;');
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
} catch (e) {
  console.error('[SenangStart] Failed to initialize JIT runtime:', e.message);
  if (typeof document !== 'undefined' && document.body) {
    const el = document.createElement('div');
    el.style.cssText = 'background:#fef2f2;color:#991b1b;padding:8px 16px;font-family:monospace;font-size:14px;';
    el.textContent = 'SenangStart CSS failed to load. See console for details.';
    document.body.prepend(el);
  }
}