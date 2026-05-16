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
import { defaultConfig, mergeConfig } from '../config/defaults.js';

try {
(function() {
  'use strict';

  // ============================================
  // CONFIG LOADER
  // ============================================

  function validateConfig(config) {
    if (!config || typeof config !== 'object' || Array.isArray(config)) return false;
    if (config.theme && (typeof config.theme !== 'object' || Array.isArray(config.theme))) return false;
    return true;
  }

  function loadInlineConfig() {
    const configEl = document.querySelector('script[type="senangstart/config"]');
    if (!configEl) return {};

    try {
      const parsed = JSON.parse(configEl.textContent);
      if (!validateConfig(parsed)) {
        console.error('[SenangStart] Invalid config structure');
        return {};
      }
      return parsed;
    } catch (e) {
      console.error('[SenangStart] Invalid config JSON:', e);
      return {};
    }
  }

  function getFinalConfig() {
    const user = loadInlineConfig();
    return mergeConfig(user);
  }

  // ============================================
  // DOM SCANNER
  // ============================================
  function scanElement(el, tokens) {
    ['layout', 'space', 'visual'].forEach(attr => {
      const value = el.getAttribute(attr);
      if (value) {
        value.split(/\s+/).forEach(token => {
          if (token) tokens[attr].add(token);
        });
      }
    });

    ['interact', 'listens'].forEach(attr => {
      const value = el.getAttribute(attr);
      if (value) {
        value.split(/\s+/).forEach(id => {
          if (id) tokens[attr].add(id);
        });
      }
    });
  }

  function scanRoot(root, tokens) {
    const elements = root.querySelectorAll('[layout], [space], [visual], [interact], [listens]');
    elements.forEach(el => scanElement(el, tokens));
  }

  function scanDOM() {
    const tokens = {
      layout: new Set(),
      space: new Set(),
      visual: new Set(),
      interact: new Set(),
      listens: new Set()
    };

    scanRoot(document, tokens);

    document.querySelectorAll('*').forEach(el => {
      if (el.shadowRoot) {
        scanRoot(el.shadowRoot, tokens);
      }
    });

    return tokens;
  }

  // ============================================
  // TOKEN CACHE
  // ============================================
  
  function tokensEqual(a, b) {
    const keys = ['layout', 'space', 'visual', 'interact', 'listens'];
    for (const key of keys) {
      const setA = a[key] || new Set();
      const setB = b[key] || new Set();
      if (setA.size !== setB.size) return false;
      for (const item of setA) {
        if (!setB.has(item)) return false;
      }
    }
    return true;
  }

  // ============================================
  // CSS COMPILER
  // ============================================
  
  function compileCSS(domTokens, config) {
    const tokens = tokenizeAll(domTokens);
    return generateCSS(tokens, config);
  }

  // ============================================
  // STYLE INJECTION
  // ============================================
  
  function injectStyles(css) {
    let styleEl = document.getElementById('senangstart-jit');
    if (!styleEl) {
      styleEl = document.createElement('style');
      styleEl.id = 'senangstart-jit';
      document.head.appendChild(styleEl);
    }
    styleEl.textContent = css;
  }

  // ============================================
  // INITIALIZATION
  // ============================================
  
  function init() {
    const config = getFinalConfig();
    
    let cachedTokens = scanDOM();
    let css = compileCSS(cachedTokens, config);
    injectStyles(css);

    var debounceTimer = null;
    var DEBOUNCE_MS = 200;

    function recompile() {
      unboundedObserver.disconnect();

      var newTokens = scanDOM();

      if (tokensEqual(cachedTokens, newTokens)) {
        unboundedObserver.observe(document.body, {
          childList: true,
          subtree: true,
          attributes: true,
          attributeFilter: ['layout', 'space', 'visual', 'interact', 'listens']
        });
        return;
      }

      cachedTokens = newTokens;
      css = compileCSS(newTokens, config);
      injectStyles(css);

      unboundedObserver.observe(document.body, {
        childList: true,
        subtree: true,
        attributes: true,
        attributeFilter: ['layout', 'space', 'visual', 'interact', 'listens']
      });
    }

    // Use a throttled observer that debounces rapid mutations
    var unboundedObserver = new MutationObserver(function() {
      if (debounceTimer) clearTimeout(debounceTimer);
      debounceTimer = setTimeout(recompile, DEBOUNCE_MS);
    });

    unboundedObserver.observe(document.body, {
      childList: true,
      subtree: true,
      attributes: true,
      attributeFilter: ['layout', 'space', 'visual', 'interact', 'listens']
    });

    console.log('%c[SenangStart CSS]%c Just-in-Time runtime initialized ✓', 
      'color: #2563EB; font-weight: bold;', 
      'color: #10B981;'
    );
  }

  // Run on DOMContentLoaded or immediately if already loaded
  // Handles 'loading', 'interactive', and 'complete' states
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
} catch (e) {
  console.error('[SenangStart] Failed to initialize JIT runtime:', e.message);
  // Write a visible warning for debugging but don't crash the page
  if (typeof document !== 'undefined') {
    var el = document.createElement('div');
    el.style.cssText = 'background:#fef2f2;color:#991b1b;padding:8px 16px;font-family:monospace;font-size:14px;';
    el.textContent = 'SenangStart CSS failed to load. See console for details.';
    document.body && document.body.prepend(el);
  }
}
