/**
 * SenangStart CSS - Plugin API
 *
 * Two equivalent ways to extend the framework from senangstart.config:
 *
 *   // declarative
 *   export default {
 *     utilities: {
 *       'text-shadow': { attr: 'visual', template: 'text-shadow: {value};', scale: 'textShadow' },
 *       glass:         { attr: 'visual', css: 'backdrop-filter: blur(12px); background: rgb(255 255 255 / .1);' }
 *     },
 *     variants: {
 *       hocus:   '&:hover, &:focus',                       // state (alternatives → :is())
 *       'theme-dark': '[data-theme=dark] &',               // ancestor
 *       'motion-ok': '@media (prefers-reduced-motion: no-preference)'
 *     },
 *     theme: {
 *       textShadow: { soft: '0 1px 2px rgb(0 0 0 / .3)' },
 *       keyframes:  { wiggle: '0%,100% { transform: rotate(-3deg) } 50% { transform: rotate(3deg) }' },
 *       animation:  { wiggle: 'wiggle 1s ease-in-out infinite' }
 *     }
 *   }
 *
 *   // functional
 *   plugins: [({ addUtilities, addVariants, addKeyframes, theme }) => { … }]
 *
 * Utility spec fields (same as `engine.utilities` metadata in src/definitions):
 *   attr        'layout' | 'space' | 'visual' (default 'visual')
 *   css         static declarations → a keyword utility (`glass`)
 *   template    'prop: {value};' → a valued utility (`text-shadow:soft`)
 *   scale       theme key whose entries are accepted values
 *   literals    { key: cssValue } fixed values
 *   enum        { key: 'full declarations;' }
 *   passthrough accept any CSS identifier
 *   numeric     { unit: 'deg' | 'px' | '', divide?: number }
 *   arbitrary   allow [..] values (default true for templates)
 */

const store = new WeakMap();

/**
 * Resolved extensions for a config (cached per config object).
 * @param {Object} config
 * @returns {{ utilities: Object, variants: Object, keyframes: Object, animation: Object }}
 */
export function extensionsFor(config) {
  if (!config || typeof config !== 'object') return EMPTY;
  const hit = store.get(config);
  if (hit) return hit;

  const ext = {
    utilities: { ...(config.utilities || {}) },
    variants: { ...(config.variants || {}) },
    keyframes: { ...((config.theme && config.theme.keyframes) || {}) },
    animation: { ...((config.theme && config.theme.animation) || {}) }
  };

  const plugins = Array.isArray(config.plugins) ? config.plugins : [];
  const api = {
    addUtilities(obj) { Object.assign(ext.utilities, obj || {}); },
    addUtility(key, spec) { ext.utilities[key] = spec; },
    addVariants(obj) { Object.assign(ext.variants, obj || {}); },
    addVariant(name, selectorOrAtRule) { ext.variants[name] = selectorOrAtRule; },
    addKeyframes(obj) { Object.assign(ext.keyframes, obj || {}); },
    addAnimation(obj) { Object.assign(ext.animation, obj || {}); },
    theme(path, fallback) {
      let cur = config.theme;
      for (const part of String(path).split('.')) {
        if (cur === null || cur === undefined) return fallback;
        cur = cur[part];
      }
      return cur === undefined ? fallback : cur;
    },
    config
  };
  for (const plugin of plugins) {
    const fn = typeof plugin === 'function' ? plugin : (plugin && typeof plugin.handler === 'function' ? plugin.handler : null);
    if (fn) fn(api);
  }

  if (Object.keys(ext.utilities).length === 0 && Object.keys(ext.variants).length === 0
    && Object.keys(ext.keyframes).length === 0 && Object.keys(ext.animation).length === 0) {
    store.set(config, EMPTY);
    return EMPTY;
  }
  store.set(config, ext);
  return ext;
}

const EMPTY = Object.freeze({ utilities: {}, variants: {}, keyframes: {}, animation: {} });

/**
 * Parse a custom variant definition into the shape parseVariant() returns.
 *   '@media (…)' / '@supports (…)'  → { type: 'media', query }
 *   '&:hover, &:focus'             → { type: 'state', selector: ':is(:hover, :focus)' }
 *   '[data-theme=dark] &'          → { type: 'state', selector: ':where([data-theme=dark] *)' }
 *   ':hover'                       → { type: 'state', selector: ':hover' }
 * @param {string} name
 * @param {string} def
 */
export function parseCustomVariant(name, def) {
  if (typeof def !== 'string' || !def.trim()) return null;
  const d = def.trim();
  if (/[{};<>]/.test(d)) return null;
  if (d.startsWith('@media')) return { type: 'media', name, query: d.slice(6).trim() };
  if (d.startsWith('@supports')) return { type: 'media', name, query: `${d.slice(1)}` , atRule: 'supports' };
  if (d.startsWith('@')) return null;
  const alts = d.split(',').map((s) => s.trim()).filter(Boolean);
  const suffixes = [];
  for (const alt of alts) {
    if (alt.endsWith('&')) {
      const anc = alt.slice(0, -1).trim();
      suffixes.push(`:where(${anc} *)`);
    } else if (alt.startsWith('&')) {
      suffixes.push(alt.slice(1));
    } else {
      suffixes.push(alt.startsWith(':') || alt.startsWith('[') ? alt : `:${alt}`);
    }
  }
  const selector = suffixes.length === 1 ? suffixes[0] : `:is(${suffixes.join(', ')})`;
  return { type: 'state', name, selector };
}

/**
 * @keyframes blocks for the custom keyframes a stylesheet references.
 * @param {Object} config
 * @param {string} css - generated utilities
 * @returns {string}
 */
export function customKeyframes(config, css) {
  const { keyframes } = extensionsFor(config);
  let out = '';
  for (const [name, body] of Object.entries(keyframes)) {
    if (!/^[a-zA-Z_][\w-]*$/.test(name)) continue;
    if (!new RegExp(`animation(?:-name)?:[^;]*\\b${name}\\b`).test(css)) continue;
    out += `@keyframes ${name} { ${String(body).trim()} }\n`;
  }
  return out;
}

export default { extensionsFor, parseCustomVariant, customKeyframes };
