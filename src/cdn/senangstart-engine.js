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
  function scanDOM() {
    const tokens = {
      layout: new Set(),
      space: new Set(),
      visual: new Set(),
      interact: new Set(), // Collected interact IDs
      listens: new Set()   // Collected listens IDs
    };

    const elements = document.querySelectorAll('[layout], [space], [visual], [interact], [listens]');
    
    elements.forEach(el => {
      ['layout', 'space', 'visual'].forEach(attr => {
        const value = el.getAttribute(attr);
        if (value) {
          value.split(/\s+/).forEach(token => {
            if (token) tokens[attr].add(token);
          });
        }
      });
      
      // Collect interact and listens IDs directly
      ['interact', 'listens'].forEach(attr => {
        const value = el.getAttribute(attr);
        if (value) {
          value.split(/\s+/).forEach(id => {
            if (id) tokens[attr].add(id);
          });
        }
      });
    });

    return tokens;
  }

  // ============================================
  // CSS COMPILER
  // ============================================
  
  function compileCSS(domTokens, config) {
    // 1. Convert raw DOM tokens (Sets) to parsed token array
    // tokenizeAll expects { layout: Set, ... } which matches domTokens structure
    const tokens = tokenizeAll(domTokens);
    
    // 2. Generate CSS using the core generator
    // generateCSS expects array of tokens and config
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
    
    const tokens = scanDOM();
    const css = compileCSS(tokens, config);
    injectStyles(css);

    // Watch for DOM changes
    const observer = new MutationObserver(() => {
      const newTokens = scanDOM();
      const newCSS = compileCSS(newTokens, config);
      injectStyles(newCSS);
    });

    observer.observe(document.body, {
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
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
