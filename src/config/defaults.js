/**
 * SenangStart CSS - Default Configuration
 * The "Natural Object" Scale using intuitive adjectives
 */

import { COLOR_PALETTE } from './colors.js';

export const defaultConfig = {
  // Input files to scan for attributes
  content: [
    './**/*.html',
    './src/**/*.{html,jsx,tsx,vue,svelte}',
    './pages/**/*.{html,jsx,tsx}',
    './components/**/*.{html,jsx,tsx}'
  ],

  // Output configuration
  output: {
    css: './public/senangstart.css',
    minify: false,
    aiContext: './.cursorrules',
    typescript: './types/senang.d.ts'
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

  theme: {
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

  // Extend or override defaults
  extend: {}
};

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
 * Merge user config with defaults
 */
export function mergeConfig(userConfig = {}) {
  const merged = { ...defaultConfig };

  if (userConfig.content) {
    merged.content = userConfig.content;
  }

  if (userConfig.output) {
    merged.output = { ...merged.output, ...userConfig.output };
  }

  if (userConfig.darkMode !== undefined) {
    merged.darkMode = userConfig.darkMode;
  }

  if (userConfig.preflight !== undefined) {
    merged.preflight = userConfig.preflight;
  }

  if (userConfig.theme) {
    merged.theme = deepMerge(merged.theme, userConfig.theme);
  }

  const warnings = validateTheme(merged.theme);
  if (warnings.length > 0) {
    for (const w of warnings) {
      console.warn(`[senang] Theme validation: ${w}`);
    }
  }

  return merged;
}

export { defaultConfig as default };

