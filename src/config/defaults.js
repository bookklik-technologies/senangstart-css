/**
 * SenangStart CSS - Default Configuration
 * The "Natural Object" Scale using intuitive adjectives
 */

import { COLOR_PALETTE } from './colors.js';

export const defaultConfig = {
  // Input files to scan for attributes
  // Globs are resolved with tinyglobby relative to the project root.
  // Negation is supported (`'!./legacy/**'`); node_modules/.git/dist are ignored by default.
  content: [
    './**/*.html',
    './**/*.{php,blade.php}',
    './**/*.{js,jsx,ts,tsx}',
    './**/*.{vue,svelte,astro}',
    './**/*.{md,mdx}'
  ],

  // Tokens to always include even if not found in `content` (reserved for the
  // variant engine; consumed by the build pipeline). Entries are raw tokens
  // (`'visual=bg:primary'`, `'flex'`, `'p:medium'`) or `{ attr, tokens }`.
  safelist: [],

  // Reserved: attribute/selector prefix for the variant engine (e.g. 'ss-').
  // Defined here so configs validate; behaviour is implemented by the engine.
  prefix: '',

  // Emit CSS wrapped in cascade layers (@layer senang.base, senang.utilities …).
  // Behaviour implemented by the engine team; defined here for config validation.
  layers: true,

  // Output configuration
  output: {
    css: './public/senangstart.css',
    minify: false,
    // OPT-IN: AI context file (e.g. './.cursorrules'). `null`/`false` = disabled.
    // Generated files carry a marker header; existing files without it are never overwritten.
    aiContext: null,
    // OPT-IN: TypeScript definitions (e.g. './types/senang.d.ts'). `null`/`false` = disabled.
    typescript: null
  },

  // Dark mode configuration
  // 'media' - Uses @media (prefers-color-scheme: dark)
  // 'selector' - Uses .dark class on html/body
  // ['selector', '.custom-dark'] - Uses custom selector
  darkMode: 'media',

  // Preflight: Include opinionated base reset styles
  // true - Include all preflight styles (default)
  // false - Disable preflight completely
  preflight: true,

  // Build behavior
  build: {
    // false (default) - build fails with exit code 1 on invalid tokens
    // true - warn instead of failing (same as --ignore-invalid CLI flag)
    ignoreInvalid: false
  },

  theme: {
    // Expose every theme scale as CSS custom properties (not only used ones).
    // Behaviour implemented by the engine team; defined here for config validation.
    exposeAll: false,

    // 1. SPACING: The "Natural Object" Scale with multiplier variants
    // Logic: How big is the object/gap physically?
    spacing: {
      'none':      '0px',       // No space
      'thin':      '1px',       // Hairline (for borders)
      'regular':   '2px',       // Standard border
      'thick':     '3px',       // Bold border
      'tiny':      '4px',       // Small offsets
      'tiny-2x':   '6px',       // Tiny multiplied
      'small':     '8px',       // Grouping inside components
      'small-2x':  '10px',      //
      'small-3x':  '12px',      //
      'small-4x':  '14px',      //
      'medium':    '16px',      // Standard default
      'medium-2x': '20px',      //
      'medium-3x': '24px',      //
      'medium-4x': '28px',      //
      'large':     '32px',      // Separation between groups
      'large-2x':  '36px',      //
      'large-3x':  '40px',      //
      'large-4x':  '44px',      //
      'big':       '48px',      // Layout sections
      'big-2x':    '56px',      //
      'big-3x':    '64px',      //
      'big-4x':    '80px',      //
      'giant':     '96px',      // Hero sections
      'giant-2x':  '112px',     //
      'giant-3x':  '128px',     //
      'giant-4x':  '144px',     //
      'vast':      '160px',     // Page-level spacing
      'vast-2x':   '176px',     //
      'vast-3x':   '192px',     //
      'vast-4x':   '208px',     //
      'vast-5x':   '224px',     //
      'vast-6x':   '240px',     //
      'vast-7x':   '256px',     //
      'vast-8x':   '288px',     //
      'vast-9x':   '320px',     //
      'vast-10x':  '384px',     //
    },

    // 2. RADIUS: Tactile Feel
    radius: {
      'none':   '0px',      // Sharp corners
      'small':  '4px',      // Subtle nudge
      'medium': '8px',      // Soft corner
      'big':    '16px',     // Distinct curve
      'round':  '9999px'    // Pill/Circle
    },

    // 3. SHADOWS: Depth Perception
    shadow: {
      'none':   'none',
      'small':  '0 1px 2px rgba(0,0,0,0.05)',
      'medium': '0 4px 6px rgba(0,0,0,0.1)',
      'big':    '0 10px 15px rgba(0,0,0,0.15)',
      'giant':  '0 25px 50px rgba(0,0,0,0.25)'
    },

    // 4. FONT SIZES: Reading Scale (with paired line-heights)
    fontSize: {
      'mini':     '0.75rem',   // 12px
      'small':    '0.875rem',  // 14px
      'base':     '1rem',      // 16px
      'large':    '1.125rem',  // 18px
      'big':      '1.25rem',   // 20px (xl)
      'huge':     '1.5rem',    // 24px (2xl)
      'grand':    '1.875rem',  // 30px (3xl)
      'giant':    '2.25rem',   // 36px (4xl)
      'mount':    '3rem',      // 48px (5xl)
      'mega':     '3.75rem',   // 60px (6xl)
      'giga':     '4.5rem',    // 72px (7xl)
      'tera':     '6rem',      // 96px (8xl)
      'hero':     '8rem'       // 128px
    },

    // 4b. FONT SIZE LINE-HEIGHTS: Paired with font sizes
    fontSizeLineHeight: {
      'mini':     '1rem',      // 16px
      'small':    '1.25rem',   // 20px
      'base':     '1.5rem',    // 24px
      'large':    '1.75rem',   // 28px
      'big':      '1.75rem',   // 28px
      'huge':     '2rem',      // 32px
      'grand':    '2.25rem',   // 36px
      'giant':    '2.5rem',    // 40px
      'mount':    '1',         // 48px (unitless 1)
      'mega':     '1',         // 60px (unitless 1)
      'giga':     '1',         // 72px (unitless 1)
      'tera':     '1',         // 96px (unitless 1)
      'hero':     '1'          // 128px (unitless 1)
    },

    // 5. FONT WEIGHTS
    fontWeight: {
      'normal': '400',
      'medium': '500',
      'bold':   '700'
    },

    // 6. BREAKPOINTS: Device Intent
    screens: {
      'mob':  '480px',      // Mobile
      'tab':  '768px',      // Tablet
      'lap':  '1024px',     // Laptop
      'desk': '1280px',     // Desktop
      'print': 'print',       // Print media query

      // Tailwind Compatibility
      'tw-sm': '640px',
      'tw-md': '768px',
      'tw-lg': '1024px',
      'tw-xl': '1280px',
      'tw-2xl': '1536px'
    },

    // 7. COLORS: Palette Scales
    // Placeholder color for form inputs
    placeholder: '#9ca3af',
    colors: COLOR_PALETTE,

    // 8. CONTAINER: Responsive max-widths per breakpoint
    // Keys match screens. If not set, max-width defaults to the breakpoint width.
    container: {
      'mob': '480px',
      'tab': '768px',
      'lap': '1024px',
      'desk': '1280px'
    },

    // 9. Z-INDEX: Stacking Order
    zIndex: {
      'base':   '0',
      'low':    '10',
      'mid':    '50',
      'high':   '100',
      'top':    '9999'
    },

    // 10. FILTER SCALES: Visual effects with adjective-based values
    blur: { none: '0', tiny: '2px', small: '4px', medium: '8px', big: '12px', giant: '24px', vast: '48px' },
    brightness: { dim: '0.5', dark: '0.75', normal: '1', bright: '1.25', vivid: '1.5' },
    contrast: { low: '0.5', reduced: '0.75', normal: '1', high: '1.25', max: '1.5' },
    grayscale: { none: '0%', partial: '50%', full: '100%' },
    invert: { none: '0%', partial: '50%', full: '100%' },
    saturate: { none: '0', low: '0.5', normal: '1', high: '1.5', vivid: '2' },
    sepia: { none: '0%', partial: '50%', full: '100%' },
    dropShadow: { none: 'none', tiny: '0 1px 1px rgba(0,0,0,0.05)', small: '0 1px 2px rgba(0,0,0,0.1), 0 1px 1px rgba(0,0,0,0.06)', medium: '0 4px 3px rgba(0,0,0,0.07), 0 2px 2px rgba(0,0,0,0.06)', big: '0 10px 8px rgba(0,0,0,0.04), 0 4px 3px rgba(0,0,0,0.1)', giant: '0 20px 13px rgba(0,0,0,0.03), 0 8px 5px rgba(0,0,0,0.08)' },
    backdropOpacity: { invisible: '0', faint: '0.25', half: '0.5', visible: '0.75', solid: '1' },
    transitionProperty: { none: 'none', all: 'all', DEFAULT: 'color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter', colors: 'color, background-color, border-color, text-decoration-color, fill, stroke', opacity: 'opacity', shadow: 'box-shadow', transform: 'transform' },
    animationDuration: { instant: '75ms', quick: '100ms', fast: '150ms', normal: '200ms', slow: '300ms', slower: '500ms', lazy: '700ms' },
    animationDelay: { instant: '75ms', quick: '100ms', fast: '150ms', normal: '200ms', slow: '300ms', slower: '500ms', lazy: '700ms' },
    perspective: { none: 'none', dramatic: '100px', near: '300px', normal: '500px', midrange: '800px', far: '1000px', distant: '1200px' }
  },

  // Deprecated alias of `theme.extend` (kept for backwards compatibility).
  extend: {}
};

/**
 * Recursively freeze an object (defaults must never be mutated at runtime).
 * @template T
 * @param {T} obj
 * @returns {T}
 */
export function deepFreeze(obj) {
  if (obj && typeof obj === 'object' && !Object.isFrozen(obj)) {
    Object.freeze(obj);
    for (const value of Object.values(obj)) deepFreeze(value);
  }
  return obj;
}

deepFreeze(defaultConfig);

/** Top-level keys the config loader understands. */
export const KNOWN_CONFIG_KEYS = Object.freeze([
  'content', 'safelist', 'prefix', 'layers', 'output', 'darkMode', 'preflight', 'build', 'theme', 'extend'
]);

/** Known `output` keys. */
export const KNOWN_OUTPUT_KEYS = Object.freeze(['css', 'minify', 'aiContext', 'typescript']);

/** Known `build` keys. */
export const KNOWN_BUILD_KEYS = Object.freeze(['ignoreInvalid']);

/**
 * Deep merge utility - safely merges nested objects
 * Uses WeakMap to track source objects and avoid false positives from shared references
 * @param {Object} target - Target object
 * @param {Object} source - Source object to merge
 * @param {WeakMap} [visited] - Track visited source objects to prevent infinite recursion
 * @returns {Object} - Merged object
 */
export function deepMerge(target, source, visited = new WeakMap()) {
  if (visited.has(source)) {
    return visited.get(source);
  }

  const result = { ...target };
  visited.set(source, result);

  for (const key of Object.keys(source)) {
    if (source[key] && typeof source[key] === 'object' && !Array.isArray(source[key])) {
      result[key] = deepMerge(result[key] || {}, source[key], visited);
    } else {
      result[key] = source[key];
    }
  }

  return result;
}

/**
 * Validate theme values for common mistakes
 * @param {Object} theme - The theme object to validate
 * @returns {string[]} - Array of warning messages
 */
export function validateTheme(theme) {
  const warnings = [];
  if (!theme || typeof theme !== 'object') return warnings;

  const VALID_UNITS = /^(\d+(\.\d+)?)(px|rem|em|%|vh|vw|vmin|vmax|cm|mm|in|pt|pc|ch|ex|fr|s|ms|deg|rad|grad|turn|Hz|kHz|dpi|dpcm|dppx)?$/;
  const VALID_COLOR = /^(#([0-9a-fA-F]{3}|[0-9a-fA-F]{6}|[0-9a-fA-F]{8}))$|^(rgb|hsl|lab|lch|oklch|oklab)a?\(|^(var\(--|calc\()/;

  // Validate spacing values
  if (theme.spacing) {
    for (const [key, val] of Object.entries(theme.spacing)) {
      if (typeof val !== 'string') {
        warnings.push(`theme.spacing["${key}"]: expected string, got ${typeof val}`);
      } else if (!VALID_UNITS.test(val) && !val.startsWith('var(')) {
        warnings.push(`theme.spacing["${key}"]: invalid value "${val}" — expected CSS length`);
      }
    }
  }

  // Validate color values
  if (theme.colors) {
    for (const [key, val] of Object.entries(theme.colors)) {
      if (typeof val !== 'string') {
        warnings.push(`theme.colors["${key}"]: expected string, got ${typeof val}`);
      } else if (!VALID_COLOR.test(val) && !/^[a-zA-Z]/.test(val)) {
        warnings.push(`theme.colors["${key}"]: suspicious value "${val}"`);
      }
    }
  }

  // Validate screens are valid breakpoints
  if (theme.screens) {
    for (const [key, val] of Object.entries(theme.screens)) {
      if (typeof val !== 'string') {
        warnings.push(`theme.screens["${key}"]: expected string, got ${typeof val}`);
      } else if (val !== 'print' && !VALID_UNITS.test(val)) {
        warnings.push(`theme.screens["${key}"]: invalid breakpoint "${val}" — expected CSS length or "print"`);
      }
    }
  }

  // Validate numeric theme sections (brightness, contrast, saturate, backdropOpacity)
  const numericSections = ['brightness', 'contrast', 'saturate', 'backdropOpacity'];
  for (const section of numericSections) {
    if (theme[section]) {
      for (const [key, val] of Object.entries(theme[section])) {
        if (typeof val === 'string' && isNaN(parseFloat(val))) {
          warnings.push(`theme.${section}["${key}"]: expected numeric value, got "${val}"`);
        }
      }
    }
  }

  // Validate percentage theme sections (grayscale, invert, sepia)
  const percentageSections = ['grayscale', 'invert', 'sepia'];
  for (const section of percentageSections) {
    if (theme[section]) {
      for (const [key, val] of Object.entries(theme[section])) {
        if (typeof val !== 'string' || !/^\d+%$/.test(val)) {
          warnings.push(`theme.${section}["${key}"]: expected percentage value, got "${val}"`);
        }
      }
    }
  }

  // Validate blur, perspective, container as CSS lengths
  const lengthSections = ['blur', 'perspective', 'container'];
  for (const section of lengthSections) {
    if (theme[section]) {
      for (const [key, val] of Object.entries(theme[section])) {
        if (typeof val !== 'string') {
          warnings.push(`theme.${section}["${key}"]: expected string, got ${typeof val}`);
        } else if (val !== 'none' && !VALID_UNITS.test(val) && !val.startsWith('var(')) {
          warnings.push(`theme.${section}["${key}"]: invalid value "${val}" — expected CSS length or "none"`);
        }
      }
    }
  }

  // Validate zIndex as integers
  if (theme.zIndex) {
    for (const [key, val] of Object.entries(theme.zIndex)) {
      if (typeof val === 'string' && isNaN(parseInt(val, 10))) {
        warnings.push(`theme.zIndex["${key}"]: expected integer, got "${val}"`);
      }
    }
  }

  // Validate string-based theme sections (transitionProperty, animationDuration, animationDelay)
  const stringSections = ['transitionProperty', 'animationDuration', 'animationDelay', 'dropShadow'];
  for (const section of stringSections) {
    if (theme[section]) {
      for (const [key, val] of Object.entries(theme[section])) {
        if (typeof val !== 'string') {
          warnings.push(`theme.${section}["${key}"]: expected string, got ${typeof val}`);
        }
      }
    }
  }

  return warnings;
}

/**
 * Structured-clone helper that tolerates functions/class instances by falling
 * back to a JSON round-trip for the offending subtree.
 * @param {unknown} value
 */
function clone(value) {
  try {
    return globalThis.structuredClone(value);
  } catch {
    return JSON.parse(JSON.stringify(value));
  }
}

function isPlainObject(v) {
  return v !== null && typeof v === 'object' && !Array.isArray(v);
}

/**
 * Validate a (user or merged) config object.
 * - Unknown top-level keys → warning
 * - Wrong types → error
 * - Theme value problems → warning (see validateTheme)
 *
 * @param {Object} config
 * @returns {{ errors: string[], warnings: string[] }}
 */
export function validateConfig(config) {
  const errors = [];
  const warnings = [];

  if (!isPlainObject(config)) {
    errors.push(`config: expected an object, got ${config === null ? 'null' : Array.isArray(config) ? 'array' : typeof config}`);
    return { errors, warnings };
  }

  for (const key of Object.keys(config)) {
    if (!KNOWN_CONFIG_KEYS.includes(key)) {
      warnings.push(`Unknown config key "${key}" (known keys: ${KNOWN_CONFIG_KEYS.join(', ')})`);
    }
  }

  if (config.content !== undefined) {
    if (!Array.isArray(config.content)) {
      errors.push(`content: expected an array of glob strings, got ${typeof config.content}`);
    } else if (config.content.some(p => typeof p !== 'string' || p.length === 0)) {
      errors.push('content: every entry must be a non-empty string');
    }
  }

  if (config.safelist !== undefined) {
    if (!Array.isArray(config.safelist)) {
      errors.push(`safelist: expected an array, got ${typeof config.safelist}`);
    } else {
      config.safelist.forEach((entry, idx) => {
        if (typeof entry === 'string') return;
        if (isPlainObject(entry) && typeof entry.attr === 'string' && Array.isArray(entry.tokens)) return;
        errors.push(`safelist[${idx}]: expected a string or { attr: string, tokens: string[] }`);
      });
    }
  }

  if (config.prefix !== undefined && typeof config.prefix !== 'string') {
    errors.push(`prefix: expected a string, got ${typeof config.prefix}`);
  }

  if (config.layers !== undefined && typeof config.layers !== 'boolean') {
    errors.push(`layers: expected a boolean, got ${typeof config.layers}`);
  }

  if (config.preflight !== undefined && typeof config.preflight !== 'boolean') {
    errors.push(`preflight: expected a boolean, got ${typeof config.preflight}`);
  }

  if (config.darkMode !== undefined) {
    const dm = config.darkMode;
    const ok = dm === 'media' || dm === 'selector' || dm === false ||
      (Array.isArray(dm) && dm[0] === 'selector' && typeof dm[1] === 'string');
    if (!ok) {
      errors.push(`darkMode: expected 'media' | 'selector' | ['selector', '<css selector>'] | false`);
    }
  }

  if (config.output !== undefined) {
    if (!isPlainObject(config.output)) {
      errors.push(`output: expected an object, got ${typeof config.output}`);
    } else {
      for (const key of Object.keys(config.output)) {
        if (!KNOWN_OUTPUT_KEYS.includes(key)) warnings.push(`Unknown output key "output.${key}"`);
      }
      const { css, minify, aiContext, typescript } = config.output;
      if (css !== undefined && (typeof css !== 'string' || css.length === 0)) {
        errors.push('output.css: expected a non-empty path string');
      }
      if (minify !== undefined && typeof minify !== 'boolean') {
        errors.push(`output.minify: expected a boolean, got ${typeof minify}`);
      }
      for (const [name, val] of [['aiContext', aiContext], ['typescript', typescript]]) {
        if (val !== undefined && val !== null && val !== false && typeof val !== 'string') {
          errors.push(`output.${name}: expected a path string, null or false, got ${typeof val}`);
        }
      }
    }
  }

  if (config.build !== undefined) {
    if (!isPlainObject(config.build)) {
      errors.push(`build: expected an object, got ${typeof config.build}`);
    } else {
      for (const key of Object.keys(config.build)) {
        if (!KNOWN_BUILD_KEYS.includes(key)) warnings.push(`Unknown build key "build.${key}"`);
      }
      if (config.build.ignoreInvalid !== undefined && typeof config.build.ignoreInvalid !== 'boolean') {
        errors.push(`build.ignoreInvalid: expected a boolean, got ${typeof config.build.ignoreInvalid}`);
      }
    }
  }

  if (config.theme !== undefined) {
    if (!isPlainObject(config.theme)) {
      errors.push(`theme: expected an object, got ${typeof config.theme}`);
    } else {
      if (config.theme.extend !== undefined && !isPlainObject(config.theme.extend)) {
        errors.push(`theme.extend: expected an object, got ${typeof config.theme.extend}`);
      }
      if (config.theme.exposeAll !== undefined && typeof config.theme.exposeAll !== 'boolean') {
        errors.push(`theme.exposeAll: expected a boolean, got ${typeof config.theme.exposeAll}`);
      }
      const scales = { ...config.theme };
      const _extend = scales.extend;
      delete scales.extend;
      delete scales.exposeAll;
      warnings.push(...validateTheme(scales));
      if (isPlainObject(_extend)) warnings.push(...validateTheme(_extend).map(w => w.replace('theme.', 'theme.extend.')));
    }
  }

  if (config.extend !== undefined && !isPlainObject(config.extend)) {
    errors.push(`extend: expected an object, got ${typeof config.extend}`);
  }

  return { errors, warnings };
}

/**
 * Merge user config with defaults.
 *
 * - Always returns a fresh deep clone (defaults are frozen and never mutated).
 * - `theme.<scale>` REPLACES nothing: user scales are deep-merged into the
 *   defaults (backwards compatible behaviour).
 * - `theme.extend.<scale>` merges into the base theme as well (Tailwind-style);
 *   it is applied AFTER direct theme keys so it always wins.
 * - Top-level `extend` is treated as a deprecated alias of `theme.extend`.
 *
 * @param {Object} [userConfig]
 * @param {{ silent?: boolean }} [options] - silent: suppress console theme warnings
 * @returns {Object} merged config
 */
export function mergeConfig(userConfig = {}, options = {}) {
  const silent = options === true || options?.silent === true;
  const merged = clone(defaultConfig);
  if (!isPlainObject(userConfig)) return merged;

  const user = clone(userConfig);

  if (Array.isArray(user.content)) merged.content = user.content;
  if (Array.isArray(user.safelist)) merged.safelist = user.safelist;
  if (typeof user.prefix === 'string') merged.prefix = user.prefix;
  if (typeof user.layers === 'boolean') merged.layers = user.layers;

  if (isPlainObject(user.output)) merged.output = { ...merged.output, ...user.output };
  if (user.darkMode !== undefined) merged.darkMode = user.darkMode;
  if (user.preflight !== undefined) merged.preflight = user.preflight;
  if (isPlainObject(user.build)) merged.build = { ...merged.build, ...user.build };

  let themeExtend = null;
  if (isPlainObject(user.theme)) {
    const { extend, ...directTheme } = user.theme;
    merged.theme = deepMerge(merged.theme, directTheme);
    if (isPlainObject(extend)) themeExtend = extend;
  }
  if (isPlainObject(user.extend) && Object.keys(user.extend).length > 0) {
    themeExtend = themeExtend ? deepMerge(user.extend, themeExtend) : user.extend;
    merged.extend = user.extend;
  }
  if (themeExtend) {
    merged.theme = deepMerge(merged.theme, themeExtend);
  }

  if (!silent) {
    const scales = { ...merged.theme };
    delete scales.exposeAll;
    const warnings = validateTheme(scales);
    for (const w of warnings) {
      console.warn(`[senang] Theme validation: ${w}`);
    }
  }

  return merged;
}

export { defaultConfig as default };

