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

  var MAX_ATTR_LENGTH = 1000;
  var MAX_TOKEN_LENGTH = 200;

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
    var configEl = document.querySelector('script[type="senangstart/config"]');
    if (!configEl) return {};

    var text = (configEl.textContent || '').trim();
    if (!text) return {};

    // Validate content length to prevent DoS
    if (text.length > 50000) {
      console.error('[SenangStart] Config content exceeds maximum length');
      return {};
    }

    try {
      var parsed = JSON.parse(text);
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
    var user = loadInlineConfig();
    return mergeConfig(user);
  }

  // ============================================
  // DOM SCANNER (with sanitization)
  // ============================================

  function sanitizeAttributeValue(value) {
    if (typeof value !== 'string') return '';
    if (value.length > MAX_ATTR_LENGTH) return '';
    
    var sanitized = value;
    
    // Strip escape characters
    sanitized = sanitized.replace(/[\\`$]/g, '');
    
    // Block url() with dangerous protocols
    var dangerousProtocols = /url\s*\(\s*['"]?\s*(?:javascript|data|vbscript|file|about)/gi;
    sanitized = sanitized.replace(dangerousProtocols, 'url(about:blank');
    
    // Block script execution vectors
    var scriptVectors = [
      /expression\s*\(/gi,
      /\beval\s*\(/gi,
      /\balert\s*\(/gi,
      /\bdocument\./g,
      /\bwindow\./g,
      /on\w+\s*=/gi,
      /<script[^>]*>/gi,
      /<\/script>/gi
    ];
    for (var i = 0; i < scriptVectors.length; i++) {
      sanitized = sanitized.replace(scriptVectors[i], '');
    }
    
    // Strip at-rules
    sanitized = sanitized.replace(/@(?:import|charset|namespace|supports|keyframes|font-face|media|page)/gi, '');
    
    // Strip angle brackets and quotes
    if (/[<>"']/.test(sanitized)) return '';
    
    // Strip semicolons to prevent CSS injection via statement breaking
    sanitized = sanitized.replace(/;/g, '_');
    
    // Validate bracket nesting (reject if deeply nested or unbalanced)
    var openB = (sanitized.match(/\[/g) || []).length;
    var closeB = (sanitized.match(/\]/g) || []).length;
    if (Math.abs(openB - closeB) > 1 || Math.max(openB, closeB) > 10) return '';
    
    // Final length check
    if (sanitized.length > 500) sanitized = sanitized.substring(0, 500);
    
    return sanitized;
  }

  function scanElement(el, tokens) {
    var attrs = ['layout', 'space', 'visual'];
    for (var i = 0; i < attrs.length; i++) {
      var value = el.getAttribute(attrs[i]);
      if (value) {
        value = sanitizeAttributeValue(value);
        if (!value) continue;
        var parts = value.split(/\s+/);
        for (var j = 0; j < parts.length; j++) {
          var token = parts[j];
          if (token && token.length <= MAX_TOKEN_LENGTH) {
            tokens[attrs[i]].add(token);
          }
        }
      }
    }

    var stateAttrs = ['interact', 'listens'];
    for (var i = 0; i < stateAttrs.length; i++) {
      var value = el.getAttribute(stateAttrs[i]);
      if (value) {
        value = sanitizeAttributeValue(value);
        if (!value) continue;
        var parts = value.split(/\s+/);
        for (var j = 0; j < parts.length; j++) {
          var id = parts[j];
          if (id && id.length <= MAX_TOKEN_LENGTH) {
            tokens[stateAttrs[i]].add(id);
          }
        }
      }
    }
  }

  function scanRoot(root, tokens) {
    var elements = root.querySelectorAll('[layout], [space], [visual], [interact], [listens]');
    for (var i = 0; i < elements.length; i++) {
      scanElement(elements[i], tokens);
    }
  }

  function scanDOM() {
    var tokens = {
      layout: new Set(),
      space: new Set(),
      visual: new Set(),
      interact: new Set(),
      listens: new Set()
    };

    if (!document.body) return tokens;

    scanRoot(document, tokens);

    var allEls = document.querySelectorAll('*');
    for (var i = 0; i < allEls.length; i++) {
      if (allEls[i].shadowRoot) {
        scanRoot(allEls[i].shadowRoot, tokens);
      }
    }

    return tokens;
  }

  // ============================================
  // TOKEN CACHE (optimized comparison)
  // ============================================

  function tokensEqual(a, b) {
    var keys = ['layout', 'space', 'visual', 'interact', 'listens'];
    for (var i = 0; i < keys.length; i++) {
      var setA = a[keys[i]];
      var setB = b[keys[i]];
      if (setA.size !== setB.size) return false;
      // Only compare contents if sizes differ (size check already passed above)
      // For equal-size sets, we need to check items only if they might differ
    }
    // If all sizes match, do a full comparison (needed for correctness)
    for (var i = 0; i < keys.length; i++) {
      var setA = a[keys[i]];
      var setB = b[keys[i]];
      for (var item of setA) {
        if (!setB.has(item)) return false;
      }
    }
    return true;
  }

  // ============================================
  // CSS COMPILER
  // ============================================

  function compileCSS(domTokens, config) {
    var tokens = tokenizeAll(domTokens);
    return generateCSS(tokens, config);
  }

  // ============================================
  // STYLE INJECTION (with basic CSS validation)
  // ============================================

  function sanitizeCSSOutput(css) {
    // Remove any <script> tags that might have been injected
    // and dangerous at-rules that could exfiltrate data
    return css
      .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
      .replace(/@import\s+url\(\s*['"]?(?:javascript|data|vbscript)\s*:/gi, '');
  }

  function injectStyles(css) {
    var sanitized = sanitizeCSSOutput(css);

    var head = document.head || document.getElementsByTagName('head')[0];
    if (!head) return;

    var styleEl = document.getElementById('senangstart-jit');
    if (!styleEl) {
      styleEl = document.createElement('style');
      styleEl.id = 'senangstart-jit';
      head.appendChild(styleEl);
    }
    styleEl.textContent = sanitized;
  }

  // ============================================
  // INITIALIZATION
  // ============================================

  function init() {
    var config = getFinalConfig();

    // Guard: ensure document.body is available
    if (!document.body) {
      console.warn('[SenangStart] document.body not ready; deferring initialization');
      if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', function() { init(); });
        return;
      }
    }

    var cachedTokens = scanDOM();
    var css = compileCSS(cachedTokens, config);
    injectStyles(css);

    var debounceTimer = null;
    var DEBOUNCE_MS = 200;

    function recompile() {
      observer.disconnect();

      var newTokens = scanDOM();

      if (tokensEqual(cachedTokens, newTokens)) {
        observer.observe(document.body, {
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

      observer.observe(document.body, {
        childList: true,
        subtree: true,
        attributes: true,
        attributeFilter: ['layout', 'space', 'visual', 'interact', 'listens']
      });
    }

    var observer = new MutationObserver(function() {
      if (debounceTimer) clearTimeout(debounceTimer);
      debounceTimer = setTimeout(recompile, DEBOUNCE_MS);
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true,
      attributes: true,
      attributeFilter: ['layout', 'space', 'visual', 'interact', 'listens']
    });

    console.log('%c[SenangStart CSS]%c Just-in-Time runtime initialized \u2713',
      'color: #2563EB; font-weight: bold;',
      'color: #10B981;'
    );
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
    var el = document.createElement('div');
    el.style.cssText = 'background:#fef2f2;color:#991b1b;padding:8px 16px;font-family:monospace;font-size:14px;';
    el.textContent = 'SenangStart CSS failed to load. See console for details.';
    document.body.prepend(el);
  }
}