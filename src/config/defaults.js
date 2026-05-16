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

    // 8. Z-INDEX: Stacking Order
    zIndex: {
      'base':   '0',
      'low':    '10',
      'mid':    '50',
      'high':   '100',
      'top':    '9999'
    }
  },

  // Extend or override defaults
  extend: {}
};

/**
 * Deep merge utility - safely merges nested objects
 * @param {Object} target - Target object
 * @param {Object} source - Source object to merge
 * @param {WeakSet} [visited] - Track visited objects to prevent infinite recursion
 * @returns {Object} - Merged object
 */
export function deepMerge(target, source, visited = new WeakSet()) {
  if (visited.has(target) || visited.has(source)) {
    return source;
  }

  visited.add(target);
  visited.add(source);

  const result = { ...target };

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

