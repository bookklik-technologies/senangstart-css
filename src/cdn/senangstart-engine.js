/**
 * SenangStart CSS - Browser JIT Runtime
 * Zero-config, browser-based CSS compilation
 * 
 * Usage:
 * <script src="https://unpkg.com/@bookklik/senangstart-css/dist/senangstart-css.min.js"></script>
 * 
 * Or with custom config:
 * <script type="senangstart/config">{ "theme": { "colors": { "brand": "#8B5CF6" } } }</script>
 * <script src="https://unpkg.com/@bookklik/senangstart-css/dist/senangstart-css.min.js"></script>
 */

// Core module imports (bundled by esbuild)
import { BREAKPOINTS, STATES, LAYOUT_KEYWORDS } from '../core/constants.js';
import { tokenize, parseToken } from '../core/tokenizer-core.js';

(function() {
  'use strict';

  // ============================================
  // DEFAULT CONFIGURATION
  // ============================================
  
  const defaultConfig = {
    theme: {
      spacing: {
      'none':      '0px',       // No space
      'thin':      '1px',       // Hairline (for borders)
      'regular':   '2px',       // Standard border
      'thick':     '3px',       // Bold border
      'tiny':      '4px',       // Small offsets
      'tiny-2x':   '6px',       // Tiny multiplied
        'small':     '8px',
        'small-2x':  '10px',
        'small-3x':  '12px',
        'small-4x':  '14px',
        'medium':    '16px',
        'medium-2x': '20px',
        'medium-3x': '24px',
        'medium-4x': '28px',
        'large':     '32px',
        'large-2x':  '36px',
        'large-3x':  '40px',
        'large-4x':  '44px',
        'big':       '48px',
        'big-2x':    '56px',
        'big-3x':    '64px',
        'big-4x':    '80px',
        'giant':     '96px',
        'giant-2x':  '112px',
        'giant-3x':  '128px',
        'giant-4x':  '144px',
        'vast':      '160px',
        'vast-2x':   '176px',
        'vast-3x':   '192px',
        'vast-4x':   '208px',
        'vast-5x':   '224px',
        'vast-6x':   '240px',
        'vast-7x':   '256px',
        'vast-8x':   '288px',
        'vast-9x':   '320px',
        'vast-10x':  '384px'
      },
      radius: {
        'none':   '0px',
        'small':  '4px',
        'medium': '8px',
        'big':    '16px',
        'round':  '9999px'
      },
      shadow: {
        'none':   'none',
        'small':  '0 1px 2px rgba(0,0,0,0.05)',
        'medium': '0 4px 6px rgba(0,0,0,0.1)',
        'big':    '0 10px 15px rgba(0,0,0,0.15)',
        'giant':  '0 25px 50px rgba(0,0,0,0.25)'
      },
      fontSize: {
        'mini':     '0.75rem',   // 12px
        'small':    '0.875rem',  // 14px
        'base':     '1rem',      // 16px
        'large':    '1.125rem',  // 18px
        'big':      '1.25rem',   // 20px
        'huge':     '1.5rem',    // 24px
        'grand':    '1.875rem',  // 30px
        'giant':    '2.25rem',   // 36px
        'mount':    '3rem',      // 48px
        'mega':     '3.75rem',   // 60px
        'giga':     '4.5rem',    // 72px
        'tera':     '6rem',      // 96px
        'hero':     '8rem'       // 128px
      },
      fontSizeLineHeight: {
        'mini':     '1rem',      // 16px
        'small':    '1.25rem',   // 20px
        'base':     '1.5rem',    // 24px
        'large':    '1.75rem',   // 28px
        'big':      '1.75rem',   // 28px
        'huge':     '2rem',      // 32px
        'grand':    '2.25rem',   // 36px
        'giant':    '2.5rem',    // 40px
        'mount':    '1',         // unitless 1
        'mega':     '1',         // unitless 1
        'giga':     '1',         // unitless 1
        'tera':     '1',         // unitless 1
        'hero':     '1'          // unitless 1
      },
      fontWeight: {
        'normal': '400',
        'medium': '500',
        'bold':   '700'
      },
      screens: {
        'mob':  '480px',
        'tab':  '768px',
        'lap':  '1024px',
        'desk': '1280px',
        // Tailwind compatibility
        'tw-sm': '640px',
        'tw-md': '768px',
        'tw-lg': '1024px',
        'tw-xl': '1280px',
        'tw-2xl': '1536px'
      },
      colors: {
        // Base colors
        'white':     '#FFFFFF',
        'black':     '#000000',
        
        // Brand/Semantic colors
        'grey':      '#6B7280',
        'dark':      '#3E4A5D',
        'light':     '#DBEAFE',
        'primary':   '#2563EB',
        'secondary': '#DBEAFE',
        'success':   '#10B981',
        'warning':   '#F59E0B',
        'danger':    '#EF4444',

        // Red
        'red-50': '#FEF2F2', 'red-100': '#FEE2E2', 'red-200': '#FECACA', 'red-300': '#FCA5A5', 'red-400': '#F87171',
        'red-500': '#EF4444', 'red-600': '#DC2626', 'red-700': '#B91C1C', 'red-800': '#991B1B', 'red-900': '#7F1D1D', 'red-950': '#450A0A',

        // Orange
        'orange-50': '#FFF7ED', 'orange-100': '#FFEDD5', 'orange-200': '#FED7AA', 'orange-300': '#FDBA74', 'orange-400': '#FB923C',
        'orange-500': '#F97316', 'orange-600': '#EA580C', 'orange-700': '#C2410C', 'orange-800': '#9A3412', 'orange-900': '#7C2D12', 'orange-950': '#431407',

        // Amber
        'amber-50': '#FFFBEB', 'amber-100': '#FEF3C7', 'amber-200': '#FDE68A', 'amber-300': '#FCD34D', 'amber-400': '#FBBF24',
        'amber-500': '#F59E0B', 'amber-600': '#D97706', 'amber-700': '#B45309', 'amber-800': '#92400E', 'amber-900': '#78350F', 'amber-950': '#451A03',

        // Yellow
        'yellow-50': '#FEFCE8', 'yellow-100': '#FEF9C3', 'yellow-200': '#FEF08A', 'yellow-300': '#FDE047', 'yellow-400': '#FACC15',
        'yellow-500': '#EAB308', 'yellow-600': '#CA8A04', 'yellow-700': '#A16207', 'yellow-800': '#854D0E', 'yellow-900': '#713F12', 'yellow-950': '#422006',

        // Lime
        'lime-50': '#F7FEE7', 'lime-100': '#ECFCCB', 'lime-200': '#D9F99D', 'lime-300': '#BEF264', 'lime-400': '#A3E635',
        'lime-500': '#84CC16', 'lime-600': '#65A30D', 'lime-700': '#4D7C0F', 'lime-800': '#3F6212', 'lime-900': '#365314', 'lime-950': '#1A2E05',

        // Green
        'green-50': '#F0FDF4', 'green-100': '#DCFCE7', 'green-200': '#BBF7D0', 'green-300': '#86EFAC', 'green-400': '#4ADE80',
        'green-500': '#22C55E', 'green-600': '#16A34A', 'green-700': '#15803D', 'green-800': '#166534', 'green-900': '#14532D', 'green-950': '#052E16',

        // Emerald
        'emerald-50': '#ECFDF5', 'emerald-100': '#D1FAE5', 'emerald-200': '#A7F3D0', 'emerald-300': '#6EE7B7', 'emerald-400': '#34D399',
        'emerald-500': '#10B981', 'emerald-600': '#059669', 'emerald-700': '#047857', 'emerald-800': '#065F46', 'emerald-900': '#064E3B', 'emerald-950': '#022C22',

        // Teal
        'teal-50': '#F0FDFA', 'teal-100': '#CCFBF1', 'teal-200': '#99F6E4', 'teal-300': '#5EEAD4', 'teal-400': '#2DD4BF',
        'teal-500': '#14B8A6', 'teal-600': '#0D9488', 'teal-700': '#0F766E', 'teal-800': '#115E59', 'teal-900': '#134E4A', 'teal-950': '#042F2E',

        // Cyan
        'cyan-50': '#ECFEFF', 'cyan-100': '#CFFAFE', 'cyan-200': '#A5F3FC', 'cyan-300': '#67E8F9', 'cyan-400': '#22D3EE',
        'cyan-500': '#06B6D4', 'cyan-600': '#0891B2', 'cyan-700': '#0E7490', 'cyan-800': '#155E75', 'cyan-900': '#164E63', 'cyan-950': '#083344',

        // Sky
        'sky-50': '#F0F9FF', 'sky-100': '#E0F2FE', 'sky-200': '#BAE6FD', 'sky-300': '#7DD3FC', 'sky-400': '#38BDF8',
        'sky-500': '#0EA5E9', 'sky-600': '#0284C7', 'sky-700': '#0369A1', 'sky-800': '#075985', 'sky-900': '#0C4A6E', 'sky-950': '#082F49',

        // Blue
        'blue-50': '#EFF6FF', 'blue-100': '#DBEAFE', 'blue-200': '#BFDBFE', 'blue-300': '#93C5FD', 'blue-400': '#60A5FA',
        'blue-500': '#3B82F6', 'blue-600': '#2563EB', 'blue-700': '#1D4ED8', 'blue-800': '#1E40AF', 'blue-900': '#1E3A8A', 'blue-950': '#172554',

        // Indigo
        'indigo-50': '#EEF2FF', 'indigo-100': '#E0E7FF', 'indigo-200': '#C7D2FE', 'indigo-300': '#A5B4FC', 'indigo-400': '#818CF8',
        'indigo-500': '#6366F1', 'indigo-600': '#4F46E5', 'indigo-700': '#4338CA', 'indigo-800': '#3730A3', 'indigo-900': '#312E81', 'indigo-950': '#1E1B4B',

        // Violet
        'violet-50': '#F5F3FF', 'violet-100': '#EDE9FE', 'violet-200': '#DDD6FE', 'violet-300': '#C4B5FD', 'violet-400': '#A78BFA',
        'violet-500': '#8B5CF6', 'violet-600': '#7C3AED', 'violet-700': '#6D28D9', 'violet-800': '#5B21B6', 'violet-900': '#4C1D95', 'violet-950': '#2E1065',

        // Purple
        'purple-50': '#FAF5FF', 'purple-100': '#F3E8FF', 'purple-200': '#E9D5FF', 'purple-300': '#D8B4FE', 'purple-400': '#C084FC',
        'purple-500': '#A855F7', 'purple-600': '#9333EA', 'purple-700': '#7E22CE', 'purple-800': '#6B21A8', 'purple-900': '#581C87', 'purple-950': '#3B0764',

        // Fuchsia
        'fuchsia-50': '#FDF4FF', 'fuchsia-100': '#FAE8FF', 'fuchsia-200': '#F5D0FE', 'fuchsia-300': '#F0ABFC', 'fuchsia-400': '#E879F9',
        'fuchsia-500': '#D946EF', 'fuchsia-600': '#C026D3', 'fuchsia-700': '#A21CAF', 'fuchsia-800': '#86198F', 'fuchsia-900': '#701A75', 'fuchsia-950': '#4A044E',

        // Pink
        'pink-50': '#FDF2F8', 'pink-100': '#FCE7F3', 'pink-200': '#FBCFE8', 'pink-300': '#F9A8D4', 'pink-400': '#F472B6',
        'pink-500': '#EC4899', 'pink-600': '#DB2777', 'pink-700': '#BE185D', 'pink-800': '#9D174D', 'pink-900': '#831843', 'pink-950': '#500724',

        // Rose
        'rose-50': '#FFF1F2', 'rose-100': '#FFE4E6', 'rose-200': '#FECDD3', 'rose-300': '#FDA4AF', 'rose-400': '#FB7185',
        'rose-500': '#F43F5E', 'rose-600': '#E11D48', 'rose-700': '#BE123C', 'rose-800': '#9F1239', 'rose-900': '#881337', 'rose-950': '#4C0519',

        // Slate
        'slate-50': '#F8FAFC', 'slate-100': '#F1F5F9', 'slate-200': '#E2E8F0', 'slate-300': '#CBD5E1', 'slate-400': '#94A3B8',
        'slate-500': '#64748B', 'slate-600': '#475569', 'slate-700': '#334155', 'slate-800': '#1E293B', 'slate-900': '#0F172A', 'slate-950': '#020617',

        // Gray
        'gray-50': '#F9FAFB', 'gray-100': '#F3F4F6', 'gray-200': '#E5E7EB', 'gray-300': '#D1D5DB', 'gray-400': '#9CA3AF',
        'gray-500': '#6B7280', 'gray-600': '#4B5563', 'gray-700': '#374151', 'gray-800': '#1F2937', 'gray-900': '#111827', 'gray-950': '#030712',

        // Zinc
        'zinc-50': '#FAFAFA', 'zinc-100': '#F4F4F5', 'zinc-200': '#E4E4E7', 'zinc-300': '#D4D4D8', 'zinc-400': '#A1A1AA',
        'zinc-500': '#71717A', 'zinc-600': '#52525B', 'zinc-700': '#3F3F46', 'zinc-800': '#27272A', 'zinc-900': '#18181B', 'zinc-950': '#09090B',

        // Neutral
        'neutral-50': '#FAFAFA', 'neutral-100': '#F5F5F5', 'neutral-200': '#E5E5E5', 'neutral-300': '#D4D4D4', 'neutral-400': '#A3A3A3',
        'neutral-500': '#737373', 'neutral-600': '#525252', 'neutral-700': '#404040', 'neutral-800': '#262626', 'neutral-900': '#171717', 'neutral-950': '#0A0A0A',

        // Stone
        'stone-50': '#FAFAF9', 'stone-100': '#F5F5F4', 'stone-200': '#E7E5E4', 'stone-300': '#D6D3D1', 'stone-400': '#A8A29E',
        'stone-500': '#78716C', 'stone-600': '#57534E', 'stone-700': '#44403C', 'stone-800': '#292524', 'stone-900': '#1C1917', 'stone-950': '#0C0A09'
      },
      zIndex: {
        'base':   '0',
        'low':    '10',
        'mid':    '50',
        'high':   '100',
        'top':    '9999'
      },
      ring: {
        'none':    '0px',
        'thin':    '1px',
        'regular': '2px',
        'thick':   '3px',
        'small':   '4px',
        'medium':  '6px',
        'big':     '8px'
      }
    },
    // Dark mode configuration
    // 'media' - Uses @media (prefers-color-scheme: dark)
    // 'selector' - Uses .dark class on html/body
    darkMode: 'media',
    // Preflight: Include opinionated base reset styles
    // true - Include all preflight styles (default)
    // false - Disable preflight completely
    preflight: true
  };

  // ============================================
  // CONFIG LOADER
  // ============================================

  const configSchema = {
    theme: {
      type: 'object',
      properties: {
        spacing: { type: 'object' },
        radius: { type: 'object' },
        shadow: { type: 'object' },
        fontSize: { type: 'object' },
        fontWeight: { type: 'object' },
        screens: { type: 'object' },
        colors: { type: 'object' },
        zIndex: { type: 'object' },
        ring: { type: 'object' }
      }
    },
    darkMode: { type: 'string', enum: ['media', 'selector'] },
    preflight: { type: 'boolean' }
  };

  function validateConfig(config) {
    if (!config || typeof config !== 'object' || Array.isArray(config)) {
      return false;
    }

    if (config.theme && (typeof config.theme !== 'object' || Array.isArray(config.theme))) {
      return false;
    }

    if (config.darkMode !== undefined &&
        config.darkMode !== 'media' &&
        config.darkMode !== 'selector' &&
        !Array.isArray(config.darkMode)) {
      return false;
    }

    if (config.preflight !== undefined && typeof config.preflight !== 'boolean') {
      return false;
    }

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

  function mergeConfig(user) {
    if (!validateConfig(user)) {
      console.error('[SenangStart] Invalid user config, using defaults');
      return JSON.parse(JSON.stringify(defaultConfig));
    }

    const merged = JSON.parse(JSON.stringify(defaultConfig));

    if (user.theme) {
      for (const key of Object.keys(merged.theme)) {
        if (user.theme[key]) {
          merged.theme[key] = { ...merged.theme[key], ...user.theme[key] };
        }
      }
    }

    // Handle darkMode option
    if (user.darkMode !== undefined) {
      merged.darkMode = user.darkMode;
    }

    // Handle preflight option
    if (user.preflight !== undefined) {
      merged.preflight = user.preflight;
    }

    return merged;
  }

  // ============================================
  // CSS VARIABLE GENERATOR
  // ============================================
  
  function generateCSSVariables(config) {
    const { theme } = config;
    let css = ':root {\n';
    
    // Spacing
    for (const [key, value] of Object.entries(theme.spacing)) {
      css += `  --s-${key}: ${value};\n`;
    }
    
    // Radius
    for (const [key, value] of Object.entries(theme.radius)) {
      css += `  --r-${key}: ${value};\n`;
    }
    
    // Shadow
    for (const [key, value] of Object.entries(theme.shadow)) {
      css += `  --shadow-${key}: ${value};\n`;
    }
    
    // Font size
    for (const [key, value] of Object.entries(theme.fontSize)) {
      css += `  --font-${key}: ${value};\n`;
    }
    
    // Font size line-height (paired with font sizes)
    if (theme.fontSizeLineHeight) {
      for (const [key, value] of Object.entries(theme.fontSizeLineHeight)) {
        css += `  --font-lh-${key}: ${value};\n`;
      }
    }
    
    // Font weight
    for (const [key, value] of Object.entries(theme.fontWeight)) {
      css += `  --fw-${key}: ${value};\n`;
    }
    
    // Colors
    for (const [key, value] of Object.entries(theme.colors)) {
      css += `  --c-${key}: ${value};\n`;
    }
    
    // Z-index
    for (const [key, value] of Object.entries(theme.zIndex)) {
      css += `  --z-${key}: ${value};\n`;
    }
    
    // Ring (focus ring utilities)
    if (theme.ring) {
      for (const [key, value] of Object.entries(theme.ring)) {
        css += `  --ring-${key}: ${value};\n`;
      }
    }
    // Ring default values
    css += `  --ring-color: var(--c-primary);\n`;
    css += `  --ring-offset: 0px;\n`;
    css += `  --ring-offset-color: #fff;\n`;
    
    // ============================================
    // TAILWIND SCALE COMPATIBILITY (tw-* prefix)
    // ============================================
    // 
    // These scales allow using Tailwind's familiar numeric system with SenangStart.
    // Usage: p:tw-4, m-t:tw-8, rounded:tw-lg, shadow:tw-md, text-size:tw-2xl
    // 
    // Reference: https://tailwindcss.com/docs/customizing-spacing#default-spacing-scale
    
    // Tailwind Spacing Scale
    const twSpacing = {
      '0': '0px', 'px': '1px',
      '0.5': '0.125rem', '1': '0.25rem', '1.5': '0.375rem', '2': '0.5rem', '2.5': '0.625rem',
      '3': '0.75rem', '3.5': '0.875rem', '4': '1rem', '5': '1.25rem', '6': '1.5rem',
      '7': '1.75rem', '8': '2rem', '9': '2.25rem', '10': '2.5rem', '11': '2.75rem', '12': '3rem',
      '14': '3.5rem', '16': '4rem', '20': '5rem', '24': '6rem', '28': '7rem', '32': '8rem',
      '36': '9rem', '40': '10rem', '44': '11rem', '48': '12rem', '52': '13rem', '56': '14rem',
      '60': '15rem', '64': '16rem', '72': '18rem', '80': '20rem', '96': '24rem'
    };
    for (const [key, value] of Object.entries(twSpacing)) {
      css += `  --tw-${key}: ${value};\n`;
    }
    
    // Tailwind Border Radius Scale
    const twRadius = {
      'none': '0px', 'sm': '0.125rem', 'DEFAULT': '0.25rem', 'md': '0.375rem',
      'lg': '0.5rem', 'xl': '0.75rem', '2xl': '1rem', '3xl': '1.5rem', 'full': '9999px'
    };
    for (const [key, value] of Object.entries(twRadius)) {
      css += `  --tw-rounded-${key}: ${value};\n`;
    }
    
    // Tailwind Shadow Scale
    const twShadow = {
      'sm': '0 1px 2px 0 rgb(0 0 0 / 0.05)',
      'DEFAULT': '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
      'md': '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
      'lg': '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
      'xl': '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
      '2xl': '0 25px 50px -12px rgb(0 0 0 / 0.25)',
      'inner': 'inset 0 2px 4px 0 rgb(0 0 0 / 0.05)',
      'none': '0 0 #0000'
    };
    for (const [key, value] of Object.entries(twShadow)) {
      css += `  --tw-shadow-${key}: ${value};\n`;
    }
    
    // Tailwind Font Size Scale
    const twFontSize = {
      'xs': '0.75rem', 'sm': '0.875rem', 'base': '1rem', 'lg': '1.125rem', 'xl': '1.25rem',
      '2xl': '1.5rem', '3xl': '1.875rem', '4xl': '2.25rem', '5xl': '3rem',
      '6xl': '3.75rem', '7xl': '4.5rem', '8xl': '6rem', '9xl': '8rem'
    };
    for (const [key, value] of Object.entries(twFontSize)) {
      css += `  --tw-text-${key}: ${value};\n`;
    }
    
    // Tailwind Line Height Scale (paired with font sizes)
    const twLeading = {
      'xs': '1rem', 'sm': '1.25rem', 'base': '1.5rem', 'lg': '1.75rem', 'xl': '1.75rem',
      '2xl': '2rem', '3xl': '2.25rem', '4xl': '2.5rem', '5xl': '1',
      '6xl': '1', '7xl': '1', '8xl': '1', '9xl': '1'
    };
    for (const [key, value] of Object.entries(twLeading)) {
      css += `  --tw-leading-${key}: ${value};\n`;
    }
    
    // Tailwind Font Weight Scale
    const twFontWeight = {
      'thin': '100',
      'extralight': '200',
      'light': '300',
      'normal': '400',
      'medium': '500',
      'semibold': '600',
      'bold': '700',
      'extrabold': '800',
      'black': '900'
    };
    for (const [key, value] of Object.entries(twFontWeight)) {
      css += `  --tw-font-${key}: ${value};\n`;
    }
    
    css += '}\n\n';
    
    return css;
  }

  // ============================================
  // PREFLIGHT GENERATOR
  // ============================================

  function generatePreflight() {
    return `/* SenangStart Preflight - Opinionated Base Styles */
*,
::before,
::after {
  box-sizing: border-box;
  border-width: 0;
  border-style: solid;
  border-color: currentColor;
}

html, :host {
  line-height: 1.5;
  -webkit-text-size-adjust: 100%;
  -moz-tab-size: 4;
  tab-size: 4;
  font-family: ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  font-feature-settings: normal;
  font-variation-settings: normal;
  -webkit-tap-highlight-color: transparent;
}

body {
  margin: 0;
  line-height: inherit;
}

hr {
  height: 0;
  color: inherit;
  border-top-width: 1px;
}

h1, h2, h3, h4, h5, h6 {
  font-size: inherit;
  font-weight: inherit;
}

a {
  color: inherit;
  text-decoration: inherit;
}

b, strong {
  font-weight: bolder;
}

code, kbd, samp, pre {
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
  font-size: 1em;
}

small {
  font-size: 80%;
}

sub, sup {
  font-size: 75%;
  line-height: 0;
  position: relative;
  vertical-align: baseline;
}

sub { bottom: -0.25em; }
sup { top: -0.5em; }

table {
  text-indent: 0;
  border-color: inherit;
  border-collapse: collapse;
}

button, input, optgroup, select, textarea {
  font-family: inherit;
  font-size: 100%;
  font-weight: inherit;
  line-height: inherit;
  color: inherit;
  margin: 0;
  padding: 0;
}

button, select {
  text-transform: none;
}

button,
input:where([type='button']),
input:where([type='reset']),
input:where([type='submit']) {
  -webkit-appearance: button;
  background-color: transparent;
  background-image: none;
}

progress {
  vertical-align: baseline;
}

[type='search'] {
  -webkit-appearance: textfield;
  outline-offset: -2px;
}

summary {
  display: list-item;
}

blockquote, dl, dd, h1, h2, h3, h4, h5, h6, hr, figure, p, pre {
  margin: 0;
}

fieldset { margin: 0; padding: 0; }
legend { padding: 0; }

ol, ul, menu {
  list-style: none;
  margin: 0;
  padding: 0;
}

dialog { padding: 0; }

textarea { resize: vertical; }

input::placeholder, textarea::placeholder {
  opacity: 1;
  color: #9ca3af;
}

button, [role="button"] {
  cursor: pointer;
}

:disabled {
  cursor: default;
}

img, svg, video, canvas, audio, iframe, embed, object {
  display: block;
  vertical-align: middle;
}

img, video {
  max-width: 100%;
  height: auto;
}

[hidden] {
  display: none;
}

/* Keyframe Animations */
@keyframes spin {
  to { transform: rotate(360deg); }
}

@keyframes ping {
  75%, 100% {
    transform: scale(2);
    opacity: 0;
  }
}

@keyframes pulse {
  50% { opacity: .5; }
}

@keyframes bounce {
  0%, 100% {
    transform: translateY(-25%);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  50% {
    transform: none;
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
}

`;
  }

  // ============================================
  // LAYOUT KEYWORDS
  // ============================================
  
  const layoutKeywords = {
    // Display
    'flex': 'display: flex;',
    'grid': 'display: grid;',
    'inline-flex': 'display: inline-flex;',
    'inline-grid': 'display: inline-grid;',
    'block': 'display: block;',
    'inline': 'display: inline-block;',
    'hidden': 'display: none;',
    
    // Flex Direction
    'row': 'flex-direction: row;',
    'col': 'flex-direction: column;',
    'row-reverse': 'flex-direction: row-reverse;',
    'col-reverse': 'flex-direction: column-reverse;',
    
    // Flex Wrap
    'wrap': 'flex-wrap: wrap;',
    'nowrap': 'flex-wrap: nowrap;',
    'wrap-reverse': 'flex-wrap: wrap-reverse;',
    
    // Flex Item
    'grow': 'flex-grow: 1;',
    'grow-0': 'flex-grow: 0;',
    'shrink': 'flex-shrink: 1;',
    'shrink-0': 'flex-shrink: 0;',
    
    // Grid Auto Flow
    'grid-flow-row': 'grid-auto-flow: row;',
    'grid-flow-col': 'grid-auto-flow: column;',
    'grid-flow-dense': 'grid-auto-flow: dense;',
    'grid-flow-row-dense': 'grid-auto-flow: row dense;',
    'grid-flow-col-dense': 'grid-auto-flow: column dense;',
    
    // Shorthand Alignment (backwards compat - simple keywords)
    'center': 'justify-content: center; align-items: center;',
    'start': 'justify-content: flex-start; align-items: flex-start;',
    'end': 'justify-content: flex-end; align-items: flex-end;',
    'between': 'justify-content: space-between;',
    'around': 'justify-content: space-around;',
    'evenly': 'justify-content: space-evenly;',
    
    // Position
    'absolute': 'position: absolute;',
    'relative': 'position: relative;',
    'fixed': 'position: fixed;',
    'sticky': 'position: sticky;',
    'static': 'position: static;',
    
    // Visibility
    'visible': 'visibility: visible;',
    'invisible': 'visibility: hidden;',
    
    // Isolation
    'isolate': 'isolation: isolate;',
    'isolate-auto': 'isolation: auto;',
    
    // Box Sizing
    'box-border': 'box-sizing: border-box;',
    'box-content': 'box-sizing: content-box;',
    
    // Float
    'float-left': 'float: left;',
    'float-right': 'float: right;',
    'float-none': 'float: none;',
    
    // Clear
    'clear-left': 'clear: left;',
    'clear-right': 'clear: right;',
    'clear-both': 'clear: both;',
    'clear-none': 'clear: none;',
    
    // Container
    'container': 'width: 100%; margin-left: auto; margin-right: auto;',
    
    // Table Border Collapse
    'border-collapse': 'border-collapse: collapse;',
    'border-separate': 'border-collapse: separate;'
  };

  // ============================================
  // RULE GENERATORS
  // ============================================
  
  // Import shared constants from core
  const breakpoints = BREAKPOINTS;
  const states = STATES;

// Use shared parseToken from core module
  // (parseToken is imported from core, using local alias for scoping)

  function generateLayoutRule(token) {
    const { property, value, isArbitrary } = token;
    
    // Container
    if (property === 'container') {
      return 'width: 100%; margin-left: auto; margin-right: auto;';
    }

    // Justify Content (justify:[value])
    if (property === 'justify') {
      const justifyMap = {
        'start': 'flex-start',
        'end': 'flex-end',
        'center': 'center',
        'between': 'space-between',
        'around': 'space-around',
        'evenly': 'space-evenly',
        'stretch': 'stretch'
      };
      return `justify-content: ${justifyMap[value] || value};`;
    }
    
    // Justify Items (justify-items:[value])
    if (property === 'justify-items') {
      return `justify-items: ${value};`;
    }
    
    // Justify Self (justify-self:[value])
    if (property === 'justify-self') {
      return `justify-self: ${value};`;
    }
    
    // Align Content (content:[value])
    if (property === 'content') {
      const contentMap = {
        'start': 'flex-start',
        'end': 'flex-end',
        'center': 'center',
        'between': 'space-between',
        'around': 'space-around',
        'evenly': 'space-evenly',
        'stretch': 'stretch'
      };
      return `align-content: ${contentMap[value] || value};`;
    }
    
    // Align Items (items:[value])
    if (property === 'items') {
      const itemsMap = {
        'start': 'flex-start',
        'end': 'flex-end',
        'center': 'center',
        'baseline': 'baseline',
        'stretch': 'stretch'
      };
      return `align-items: ${itemsMap[value] || value};`;
    }
    
    // Align Self (self:[value])
    if (property === 'self') {
      const selfMap = {
        'auto': 'auto',
        'start': 'flex-start',
        'end': 'flex-end',
        'center': 'center',
        'baseline': 'baseline',
        'stretch': 'stretch'
      };
      return `align-self: ${selfMap[value] || value};`;
    }
    
    // Place Content (place-content:[value])
    if (property === 'place-content') {
      const placeContentMap = {
        'start': 'start',
        'end': 'end',
        'center': 'center',
        'between': 'space-between',
        'around': 'space-around',
        'evenly': 'space-evenly',
        'stretch': 'stretch'
      };
      return `place-content: ${placeContentMap[value] || value};`;
    }
    
    // Place Items (place-items:[value])
    if (property === 'place-items') {
      return `place-items: ${value};`;
    }
    
    // Place Self (place-self:[value])
    if (property === 'place-self') {
      return `place-self: ${value};`;
    }
    
    // Z-index
    if (property === 'z') {
      return `z-index: var(--z-${value});`;
    }
    
    // Overflow
    if (property === 'overflow') {
      return `overflow: ${value};`;
    }
    
    // Overflow X/Y
    if (property === 'overflow-x') {
      return `overflow-x: ${value};`;
    }
    if (property === 'overflow-y') {
      return `overflow-y: ${value};`;
    }
    
    // Aspect Ratio
    if (property === 'aspect') {
      const aspectMap = {
        'square': '1 / 1',
        'video': '16 / 9',
        'auto': 'auto'
      };
      const cssValue = isArbitrary ? value.replace(/_/g, ' ') : (aspectMap[value] || value);
      return `aspect-ratio: ${cssValue};`;
    }
    
    // Object Fit
    if (property === 'object') {
      return `object-fit: ${value};`;
    }
    
    // Object Position
    if (property === 'object-pos') {
      const cssValue = isArbitrary ? value.replace(/_/g, ' ') : value;
      return `object-position: ${cssValue};`;
    }
    
    // Inset (all sides)
    if (property === 'inset') {
      const cssValue = isArbitrary ? value : (value === '0' ? '0' : `var(--s-${value})`);
      return `inset: ${cssValue};`;
    }
    
    // Individual positioning: top, right, bottom, left
    if (['top', 'right', 'bottom', 'left'].includes(property)) {
      const cssValue = isArbitrary ? value : (value === '0' ? '0' : `var(--s-${value})`);
      return `${property}: ${cssValue};`;
    }
    
    // Inset X (left + right)
    if (property === 'inset-x') {
      const cssValue = isArbitrary ? value : (value === '0' ? '0' : `var(--s-${value})`);
      return `left: ${cssValue}; right: ${cssValue};`;
    }
    
    // Inset Y (top + bottom)
    if (property === 'inset-y') {
      const cssValue = isArbitrary ? value : (value === '0' ? '0' : `var(--s-${value})`);
      return `top: ${cssValue}; bottom: ${cssValue};`;
    }
    
    // Columns
    if (property === 'cols') {
      return `columns: ${value};`;
    }
    
    // Overscroll Behavior
    if (property === 'overscroll') {
      return `overscroll-behavior: ${value};`;
    }
    if (property === 'overscroll-x') {
      return `overscroll-behavior-x: ${value};`;
    }
    if (property === 'overscroll-y') {
      return `overscroll-behavior-y: ${value};`;
    }
    
    // Flex Basis
    if (property === 'basis') {
      const cssValue = isArbitrary ? value : `var(--s-${value})`;
      return `flex-basis: ${cssValue};`;
    }
    
    // Flex (shorthand)
    if (property === 'flex') {
      const flexPresets = {
        '1': '1 1 0%',
        'auto': '1 1 auto',
        'initial': '0 1 auto',
        'none': 'none'
      };
      const cssValue = isArbitrary ? value.replace(/_/g, ' ') : (flexPresets[value] || value);
      return `flex: ${cssValue};`;
    }
    
    // Order
    if (property === 'order') {
      const orderPresets = {
        'first': '-9999',
        'last': '9999',
        'none': '0'
      };
      const cssValue = orderPresets[value] || value;
      return `order: ${cssValue};`;
    }
    
    // Grid Template Columns
    if (property === 'grid-cols') {
      if (value === 'none') {
        return 'grid-template-columns: none;';
      }
      if (value === 'subgrid') {
        return 'grid-template-columns: subgrid;';
      }
      if (isArbitrary) {
        return `grid-template-columns: ${value.replace(/_/g, ' ')};`;
      }
      // Numeric value: repeat(n, minmax(0, 1fr))
      return `grid-template-columns: repeat(${value}, minmax(0, 1fr));`;
    }
    
    // Grid Template Rows
    if (property === 'grid-rows') {
      if (value === 'none') {
        return 'grid-template-rows: none;';
      }
      if (value === 'subgrid') {
        return 'grid-template-rows: subgrid;';
      }
      if (isArbitrary) {
        return `grid-template-rows: ${value.replace(/_/g, ' ')};`;
      }
      return `grid-template-rows: repeat(${value}, minmax(0, 1fr));`;
    }
    
    // Grid Column Span
    if (property === 'col-span') {
      if (value === 'full') {
        return 'grid-column: 1 / -1;';
      }
      return `grid-column: span ${value} / span ${value};`;
    }
    
    // Grid Column Start/End
    if (property === 'col-start') {
      return `grid-column-start: ${value};`;
    }
    if (property === 'col-end') {
      return `grid-column-end: ${value};`;
    }
    
    // Grid Row Span
    if (property === 'row-span') {
      if (value === 'full') {
        return 'grid-row: 1 / -1;';
      }
      return `grid-row: span ${value} / span ${value};`;
    }
    
    // Grid Row Start/End
    if (property === 'row-start') {
      return `grid-row-start: ${value};`;
    }
    if (property === 'row-end') {
      return `grid-row-end: ${value};`;
    }
    
    // Grid Auto Columns
    if (property === 'auto-cols') {
      const autoPresets = {
        'auto': 'auto',
        'min': 'min-content',
        'max': 'max-content',
        'fr': 'minmax(0, 1fr)'
      };
      const cssValue = isArbitrary ? value : (autoPresets[value] || value);
      return `grid-auto-columns: ${cssValue};`;
    }
    
    // Grid Auto Rows
    if (property === 'auto-rows') {
      const autoPresets = {
        'auto': 'auto',
        'min': 'min-content',
        'max': 'max-content',
        'fr': 'minmax(0, 1fr)'
      };
      const cssValue = isArbitrary ? value : (autoPresets[value] || value);
      return `grid-auto-rows: ${cssValue};`;
    }
    
    // Table Layout
    if (property === 'table') {
      const tableMap = { 'auto': 'auto', 'fixed': 'fixed' };
      return `table-layout: ${tableMap[value] || value};`;
    }
    
    // Caption Side
    if (property === 'caption') {
      return `caption-side: ${value};`;
    }
    
    // Border Spacing
    if (property === 'border-spacing') {
      const cssValue = isArbitrary ? value : `var(--s-${value})`;
      return `border-spacing: ${cssValue};`;
    }
    if (property === 'border-spacing-x') {
      const cssValue = isArbitrary ? value : `var(--s-${value})`;
      return `border-spacing: ${cssValue} 0;`;
    }
    if (property === 'border-spacing-y') {
      const cssValue = isArbitrary ? value : `var(--s-${value})`;
      return `border-spacing: 0 ${cssValue};`;
    }
    
    return layoutKeywords[property] || '';
  }

  function generateSpaceRule(token) {
    const { property, value, isArbitrary } = token;
    
    if (value === 'auto') {
      const autoMap = {
        'm': 'margin: auto;',
        'm-x': 'margin-left: auto; margin-right: auto;',
        'm-y': 'margin-top: auto; margin-bottom: auto;',
        'm-t': 'margin-top: auto;',
        'm-r': 'margin-right: auto;',
        'm-b': 'margin-bottom: auto;',
        'm-l': 'margin-left: auto;'
      };
      return autoMap[property] || '';
    }
    
    // Handle special sizing values for width/height utilities
    const sizingSpecialValues = {
      'min': 'min-content',
      'max': 'max-content',
      'fit': 'fit-content'
    };
    
    // Check if this is a sizing utility with a special value
    const sizingProps = ['w', 'h', 'min-w', 'max-w', 'min-h', 'max-h'];
    if (sizingProps.includes(property) && sizingSpecialValues[value]) {
      const cssValue = sizingSpecialValues[value];
      const propMap = {
        'w': `width: ${cssValue};`,
        'h': `height: ${cssValue};`,
        'min-w': `min-width: ${cssValue};`,
        'max-w': `max-width: ${cssValue};`,
        'min-h': `min-height: ${cssValue};`,
        'max-h': `max-height: ${cssValue};`
      };
      return propMap[property] || '';
    }
    
    // Handle Tailwind scale prefix (tw-*)
    let cssValue;
    if (isArbitrary) {
      cssValue = value;
    } else if (value.startsWith('tw-')) {
      const twValue = value.slice(3); // Remove 'tw-' prefix
      cssValue = `var(--tw-${twValue})`;
    } else {
      cssValue = `var(--s-${value})`;
    }
    
    const map = {
      'p': `padding: ${cssValue};`,
      'p-t': `padding-top: ${cssValue};`,
      'p-r': `padding-right: ${cssValue};`,
      'p-b': `padding-bottom: ${cssValue};`,
      'p-l': `padding-left: ${cssValue};`,
      'p-x': `padding-left: ${cssValue}; padding-right: ${cssValue};`,
      'p-y': `padding-top: ${cssValue}; padding-bottom: ${cssValue};`,
      'm': `margin: ${cssValue};`,
      'm-t': `margin-top: ${cssValue};`,
      'm-r': `margin-right: ${cssValue};`,
      'm-b': `margin-bottom: ${cssValue};`,
      'm-l': `margin-left: ${cssValue};`,
      'm-x': `margin-left: ${cssValue}; margin-right: ${cssValue};`,
      'm-y': `margin-top: ${cssValue}; margin-bottom: ${cssValue};`,
      'g': `gap: ${cssValue};`,
      'g-x': `column-gap: ${cssValue};`,
      'g-y': `row-gap: ${cssValue};`,
      'w': `width: ${cssValue};`,
      'h': `height: ${cssValue};`,
      'min-w': `min-width: ${cssValue};`,
      'max-w': `max-width: ${cssValue};`,
      'min-h': `min-height: ${cssValue};`,
      'max-h': `max-height: ${cssValue};`
    };
    
    return map[property] || '';
  }

  function generateVisualRule(token) {
    const { property, value, isArbitrary } = token;
    
    // Static typography keywords
    const typographyKeywords = {
      // Font Style
      'italic': 'font-style: italic;',
      'not-italic': 'font-style: normal;',
      
      // Font Stretch
      'font-stretch-condensed': 'font-stretch: condensed;',
      'font-stretch-expanded': 'font-stretch: expanded;',
      'font-stretch-normal': 'font-stretch: normal;',
      
      // Font Smoothing
      'antialiased': '-webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale;',
      'subpixel-antialiased': '-webkit-font-smoothing: auto; -moz-osx-font-smoothing: auto;',
      
      // Font Variant Numeric
      'normal-nums': 'font-variant-numeric: normal;',
      'ordinal': 'font-variant-numeric: ordinal;',
      'slashed-zero': 'font-variant-numeric: slashed-zero;',
      'lining-nums': 'font-variant-numeric: lining-nums;',
      'oldstyle-nums': 'font-variant-numeric: oldstyle-nums;',
      'proportional-nums': 'font-variant-numeric: proportional-nums;',
      'tabular-nums': 'font-variant-numeric: tabular-nums;',
      
      // Text Transform
      'uppercase': 'text-transform: uppercase;',
      'lowercase': 'text-transform: lowercase;',
      'capitalize': 'text-transform: capitalize;',
      'normal-case': 'text-transform: none;',
      
      // Text Decoration Line
      'underline': 'text-decoration-line: underline;',
      'overline': 'text-decoration-line: overline;',
      'line-through': 'text-decoration-line: line-through;',
      'no-underline': 'text-decoration-line: none;',
      
      // Text Decoration Style
      'decoration-solid': 'text-decoration-style: solid;',
      'decoration-double': 'text-decoration-style: double;',
      'decoration-dotted': 'text-decoration-style: dotted;',
      'decoration-dashed': 'text-decoration-style: dashed;',
      'decoration-wavy': 'text-decoration-style: wavy;',
      
      // Text Overflow
      'truncate': 'overflow: hidden; text-overflow: ellipsis; white-space: nowrap;',
      'text-ellipsis': 'text-overflow: ellipsis;',
      'text-clip': 'text-overflow: clip;',
      
      // Text Wrap
      'text-wrap': 'text-wrap: wrap;',
      'text-nowrap': 'text-wrap: nowrap;',
      'text-balance': 'text-wrap: balance;',
      'text-pretty': 'text-wrap: pretty;',
      
      // Whitespace
      'whitespace-normal': 'white-space: normal;',
      'whitespace-nowrap': 'white-space: nowrap;',
      'whitespace-pre': 'white-space: pre;',
      'whitespace-pre-line': 'white-space: pre-line;',
      'whitespace-pre-wrap': 'white-space: pre-wrap;',
      'whitespace-break-spaces': 'white-space: break-spaces;',
      
      // Word Break
      'break-normal': 'overflow-wrap: normal; word-break: normal;',
      'break-words': 'overflow-wrap: break-word;',
      'break-all': 'word-break: break-all;',
      'break-keep': 'word-break: keep-all;',
      
      // Hyphens
      'hyphens-none': 'hyphens: none;',
      'hyphens-manual': 'hyphens: manual;',
      'hyphens-auto': 'hyphens: auto;',
      
      // Vertical Align
      'align-baseline': 'vertical-align: baseline;',
      'align-top': 'vertical-align: top;',
      'align-middle': 'vertical-align: middle;',
      'align-bottom': 'vertical-align: bottom;',
      'align-text-top': 'vertical-align: text-top;',
      'align-text-bottom': 'vertical-align: text-bottom;',
      'align-sub': 'vertical-align: sub;',
      'align-super': 'vertical-align: super;',
      
      // List Style Type
      'list-none': 'list-style-type: none;',
      'list-disc': 'list-style-type: disc;',
      'list-decimal': 'list-style-type: decimal;',
      'list-square': 'list-style-type: square;',
      
      // List Style Position
      'list-inside': 'list-style-position: inside;',
      'list-outside': 'list-style-position: outside;'
    };
    
    // Check static keywords first
    if (typographyKeywords[property]) {
      return typographyKeywords[property];
    }
    
    const rules = {
      'bg': () => {
        const cssValue = isArbitrary ? value : `var(--c-${value})`;
        return `background-color: ${cssValue};`;
      },
      'text': () => {
        if (['left', 'center', 'right', 'justify'].includes(value)) {
          return `text-align: ${value};`;
        }
        const cssValue = isArbitrary ? value : `var(--c-${value})`;
        return `color: ${cssValue};`;
      },
      'text-size': () => {
        let cssValue;
        let lineHeightValue;
        if (isArbitrary) {
          cssValue = value;
          // No line-height for arbitrary values
          return `font-size: ${cssValue};`;
        } else if (value.startsWith('tw-')) {
          const twValue = value.slice(3);
          cssValue = `var(--tw-text-${twValue})`;
          lineHeightValue = `var(--tw-leading-${twValue})`;
        } else {
          cssValue = `var(--font-${value})`;
          lineHeightValue = `var(--font-lh-${value})`;
        }
        return `font-size: ${cssValue}; line-height: ${lineHeightValue};`;
      },
      'font': () => {
        // Check for font-family presets
        const fontFamilies = {
          'sans': 'ui-sans-serif, system-ui, sans-serif',
          'serif': 'ui-serif, Georgia, serif',
          'mono': 'ui-monospace, monospace'
        };
        if (fontFamilies[value]) {
          return `font-family: ${fontFamilies[value]};`;
        }
        // Font weight with tw- prefix support
        let cssValue;
        if (isArbitrary) {
          cssValue = value;
        } else if (value.startsWith('tw-')) {
          const twValue = value.slice(3);
          cssValue = `var(--tw-font-${twValue})`;
        } else {
          cssValue = `var(--fw-${value})`;
        }
        return `font-weight: ${cssValue};`;
      },
      'tracking': () => {
        // Letter spacing
        const trackingScale = {
          'tighter': '-0.05em',
          'tight': '-0.025em',
          'normal': '0',
          'wide': '0.025em',
          'wider': '0.05em',
          'widest': '0.1em'
        };
        const cssValue = isArbitrary ? value : (trackingScale[value] || value);
        return `letter-spacing: ${cssValue};`;
      },
      'leading': () => {
        // Line height
        const leadingScale = {
          'none': '1',
          'tight': '1.25',
          'snug': '1.375',
          'normal': '1.5',
          'relaxed': '1.625',
          'loose': '2'
        };
        const cssValue = isArbitrary ? value : (leadingScale[value] || value);
        return `line-height: ${cssValue};`;
      },
      'line-clamp': () => {
        return `overflow: hidden; display: -webkit-box; -webkit-box-orient: vertical; -webkit-line-clamp: ${value};`;
      },
      'decoration': () => {
        // Text decoration color
        const cssValue = isArbitrary ? value : `var(--c-${value})`;
        return `text-decoration-color: ${cssValue};`;
      },
      'decoration-thickness': () => {
        const cssValue = isArbitrary ? value : `${value}px`;
        return `text-decoration-thickness: ${cssValue};`;
      },
      'underline-offset': () => {
        const cssValue = isArbitrary ? value : `${value}px`;
        return `text-underline-offset: ${cssValue};`;
      },
      'indent': () => {
        const cssValue = isArbitrary ? value : `var(--s-${value})`;
        return `text-indent: ${cssValue};`;
      },
      'border': () => {
        const cssValue = isArbitrary ? value : `var(--c-${value})`;
        return `border-color: ${cssValue}; border-style: solid;`;
      },
      // Border color - directional
      'border-t': () => {
        const cssValue = isArbitrary ? value : `var(--c-${value})`;
        return `border-top-color: ${cssValue}; border-top-style: solid;`;
      },
      'border-b': () => {
        const cssValue = isArbitrary ? value : `var(--c-${value})`;
        return `border-bottom-color: ${cssValue}; border-bottom-style: solid;`;
      },
      'border-l': () => {
        const cssValue = isArbitrary ? value : `var(--c-${value})`;
        return `border-left-color: ${cssValue}; border-left-style: solid;`;
      },
      'border-r': () => {
        const cssValue = isArbitrary ? value : `var(--c-${value})`;
        return `border-right-color: ${cssValue}; border-right-style: solid;`;
      },
      'border-x': () => {
        const cssValue = isArbitrary ? value : `var(--c-${value})`;
        return `border-left-color: ${cssValue}; border-right-color: ${cssValue}; border-left-style: solid; border-right-style: solid;`;
      },
      'border-y': () => {
        const cssValue = isArbitrary ? value : `var(--c-${value})`;
        return `border-top-color: ${cssValue}; border-bottom-color: ${cssValue}; border-top-style: solid; border-bottom-style: solid;`;
      },
      'border-w': () => {
        const cssValue = isArbitrary ? value : `var(--s-${value})`;
        return `border-width: ${cssValue}; border-style: solid;`;
      },
      // Border width - directional
      'border-t-w': () => {
        const cssValue = isArbitrary ? value : `var(--s-${value})`;
        return `border-top-width: ${cssValue}; border-top-style: solid;`;
      },
      'border-b-w': () => {
        const cssValue = isArbitrary ? value : `var(--s-${value})`;
        return `border-bottom-width: ${cssValue}; border-bottom-style: solid;`;
      },
      'border-l-w': () => {
        const cssValue = isArbitrary ? value : `var(--s-${value})`;
        return `border-left-width: ${cssValue}; border-left-style: solid;`;
      },
      'border-r-w': () => {
        const cssValue = isArbitrary ? value : `var(--s-${value})`;
        return `border-right-width: ${cssValue}; border-right-style: solid;`;
      },
      'border-x-w': () => {
        const cssValue = isArbitrary ? value : `var(--s-${value})`;
        return `border-left-width: ${cssValue}; border-right-width: ${cssValue}; border-left-style: solid; border-right-style: solid;`;
      },
      'border-y-w': () => {
        const cssValue = isArbitrary ? value : `var(--s-${value})`;
        return `border-top-width: ${cssValue}; border-bottom-width: ${cssValue}; border-top-style: solid; border-bottom-style: solid;`;
      },
      'rounded': () => {
        let cssValue;
        if (isArbitrary) {
          cssValue = value;
        } else if (value.startsWith('tw-')) {
          const twValue = value.slice(3);
          cssValue = `var(--tw-rounded-${twValue})`;
        } else {
          cssValue = `var(--r-${value})`;
        }
        return `border-radius: ${cssValue};`;
      },
      'shadow': () => {
        let cssValue;
        if (isArbitrary) {
          cssValue = value;
        } else if (value.startsWith('tw-')) {
          const twValue = value.slice(3);
          cssValue = `var(--tw-shadow-${twValue})`;
        } else {
          cssValue = `var(--shadow-${value})`;
        }
        return `box-shadow: ${cssValue};`;
      },
      'opacity': () => {
        const opacityValue = isArbitrary ? value : (parseFloat(value) / 100);
        return `opacity: ${opacityValue};`;
      },
      'content': () => `content: "${value}";`,
      
      // ============================================
      // TRANSFORM UTILITIES
      // ============================================
      'scale': () => {
        const scaleValue = isArbitrary ? value : (parseFloat(value) / 100);
        return `transform: scale(${scaleValue});`;
      },
      'scale-x': () => {
        const scaleValue = isArbitrary ? value : (parseFloat(value) / 100);
        return `transform: scaleX(${scaleValue});`;
      },
      'scale-y': () => {
        const scaleValue = isArbitrary ? value : (parseFloat(value) / 100);
        return `transform: scaleY(${scaleValue});`;
      },
      'rotate': () => {
        const rotateValue = isArbitrary ? value : `${value}deg`;
        return `transform: rotate(${rotateValue});`;
      },
      'translate-x': () => {
        const translatePresets = { '0': '0', 'full': '100%', '1/2': '50%', '-full': '-100%', '-1/2': '-50%' };
        const cssValue = isArbitrary ? value : (translatePresets[value] || `var(--s-${value})`);
        return `transform: translateX(${cssValue});`;
      },
      'translate-y': () => {
        const translatePresets = { '0': '0', 'full': '100%', '1/2': '50%', '-full': '-100%', '-1/2': '-50%' };
        const cssValue = isArbitrary ? value : (translatePresets[value] || `var(--s-${value})`);
        return `transform: translateY(${cssValue});`;
      },
      'skew-x': () => {
        const skewValue = isArbitrary ? value : `${value}deg`;
        return `transform: skewX(${skewValue});`;
      },
      'skew-y': () => {
        const skewValue = isArbitrary ? value : `${value}deg`;
        return `transform: skewY(${skewValue});`;
      },
      'origin': () => {
        const originMap = {
          'center': 'center',
          'top': 'top',
          'top-right': 'top right',
          'right': 'right',
          'bottom-right': 'bottom right',
          'bottom': 'bottom',
          'bottom-left': 'bottom left',
          'left': 'left',
          'top-left': 'top left'
        };
        const cssValue = isArbitrary ? value.replace(/_/g, ' ') : (originMap[value] || value);
        return `transform-origin: ${cssValue};`;
      },
      
      // ============================================
      // TRANSITION UTILITIES
      // ============================================
      'transition': () => {
        const transitionMap = {
          'none': 'transition-property: none;',
          'all': 'transition-property: all; transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1); transition-duration: 150ms;',
          'colors': 'transition-property: color, background-color, border-color; transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1); transition-duration: 150ms;',
          'opacity': 'transition-property: opacity; transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1); transition-duration: 150ms;',
          'shadow': 'transition-property: box-shadow; transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1); transition-duration: 150ms;',
          'transform': 'transition-property: transform; transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1); transition-duration: 150ms;'
        };
        return transitionMap[value] || `transition-property: ${value};`;
      },
      'duration': () => {
        const durationMap = {
          'instant': '75ms',
          'quick': '100ms',
          'fast': '150ms',
          'normal': '200ms',
          'slow': '300ms',
          'slower': '500ms',
          'lazy': '700ms'
        };
        const cssValue = isArbitrary ? value : (durationMap[value] || `${value}ms`);
        return `transition-duration: ${cssValue};`;
      },
      'ease': () => {
        const easeMap = {
          'linear': 'linear',
          'in': 'cubic-bezier(0.4, 0, 1, 1)',
          'out': 'cubic-bezier(0, 0, 0.2, 1)',
          'in-out': 'cubic-bezier(0.4, 0, 0.2, 1)'
        };
        const cssValue = easeMap[value] || value;
        return `transition-timing-function: ${cssValue};`;
      },
      'delay': () => {
        const delayMap = {
          'instant': '75ms',
          'quick': '100ms',
          'fast': '150ms',
          'normal': '200ms',
          'slow': '300ms'
        };
        const cssValue = isArbitrary ? value : (delayMap[value] || `${value}ms`);
        return `transition-delay: ${cssValue};`;
      },
      'animate': () => {
        const animateMap = {
          'none': 'animation: none;',
          'spin': 'animation: spin 1s linear infinite;',
          'ping': 'animation: ping 1s cubic-bezier(0, 0, 0.2, 1) infinite;',
          'pulse': 'animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;',
          'bounce': 'animation: bounce 1s infinite;'
        };
        return animateMap[value] || `animation: ${value};`;
      },
      
      // ============================================
      // FILTER UTILITIES
      // ============================================
      'blur': () => {
        const blurScale = {
          'none': '0',
          'sm': '4px',
          'md': '8px',
          'lg': '12px',
          'xl': '16px',
          '2xl': '24px',
          '3xl': '40px'
        };
        const cssValue = isArbitrary ? value : (blurScale[value] || `${value}px`);
        return `filter: blur(${cssValue});`;
      },
      'brightness': () => {
        const brightnessScale = {
          '0': '0',
          '50': '0.5',
          '75': '0.75',
          '90': '0.9',
          '95': '0.95',
          '100': '1',
          '105': '1.05',
          '110': '1.1',
          '125': '1.25',
          '150': '1.5',
          '200': '2'
        };
        const cssValue = isArbitrary ? value : (brightnessScale[value] || (parseFloat(value) / 100));
        return `filter: brightness(${cssValue});`;
      },
      'contrast': () => {
        const contrastScale = {
          '0': '0',
          '50': '0.5',
          '75': '0.75',
          '100': '1',
          '125': '1.25',
          '150': '1.5',
          '200': '2'
        };
        const cssValue = isArbitrary ? value : (contrastScale[value] || (parseFloat(value) / 100));
        return `filter: contrast(${cssValue});`;
      },
      'grayscale': () => {
        const grayscaleScale = { '0': '0', '100': '1', 'full': '1' };
        const cssValue = isArbitrary ? value : (grayscaleScale[value] || (parseFloat(value) / 100));
        return `filter: grayscale(${cssValue});`;
      },
      'hue-rotate': () => {
        const cssValue = isArbitrary ? value : `${value}deg`;
        return `filter: hue-rotate(${cssValue});`;
      },
      'invert': () => {
        const invertScale = { '0': '0', '100': '1', 'full': '1' };
        const cssValue = isArbitrary ? value : (invertScale[value] || (parseFloat(value) / 100));
        return `filter: invert(${cssValue});`;
      },
      'saturate': () => {
        const saturateScale = {
          '0': '0',
          '50': '0.5',
          '100': '1',
          '150': '1.5',
          '200': '2'
        };
        const cssValue = isArbitrary ? value : (saturateScale[value] || (parseFloat(value) / 100));
        return `filter: saturate(${cssValue});`;
      },
      'sepia': () => {
        const sepiaScale = { '0': '0', '100': '1', 'full': '1' };
        const cssValue = isArbitrary ? value : (sepiaScale[value] || (parseFloat(value) / 100));
        return `filter: sepia(${cssValue});`;
      },
      'drop-shadow': () => {
        const shadowMap = {
          'sm': 'drop-shadow(0 1px 1px rgb(0 0 0 / 0.05))',
          'md': 'drop-shadow(0 4px 3px rgb(0 0 0 / 0.07)) drop-shadow(0 2px 2px rgb(0 0 0 / 0.06))',
          'lg': 'drop-shadow(0 10px 8px rgb(0 0 0 / 0.04)) drop-shadow(0 4px 3px rgb(0 0 0 / 0.1))',
          'xl': 'drop-shadow(0 20px 13px rgb(0 0 0 / 0.03)) drop-shadow(0 8px 5px rgb(0 0 0 / 0.08))',
          '2xl': 'drop-shadow(0 25px 25px rgb(0 0 0 / 0.15))',
          'none': 'drop-shadow(0 0 #0000)'
        };
        const cssValue = isArbitrary ? `drop-shadow(${value.replace(/_/g, ' ')})` : (shadowMap[value] || shadowMap['md']);
        return `filter: ${cssValue};`;
      },
      
      // ============================================
      // BACKGROUND UTILITIES
      // ============================================
      'bg-size': () => {
        const sizeMap = { 'auto': 'auto', 'cover': 'cover', 'contain': 'contain' };
        const cssValue = isArbitrary ? value.replace(/_/g, ' ') : (sizeMap[value] || value);
        return `background-size: ${cssValue};`;
      },
      'bg-pos': () => {
        const posMap = {
          'center': 'center',
          'top': 'top',
          'top-right': 'top right',
          'right': 'right',
          'bottom-right': 'bottom right',
          'bottom': 'bottom',
          'bottom-left': 'bottom left',
          'left': 'left',
          'top-left': 'top left'
        };
        const cssValue = isArbitrary ? value.replace(/_/g, ' ') : (posMap[value] || value);
        return `background-position: ${cssValue};`;
      },
      'bg-repeat': () => {
        const repeatMap = {
          'repeat': 'repeat',
          'no-repeat': 'no-repeat',
          'repeat-x': 'repeat-x',
          'repeat-y': 'repeat-y',
          'round': 'round',
          'space': 'space'
        };
        return `background-repeat: ${repeatMap[value] || value};`;
      },
      'bg-attachment': () => {
        return `background-attachment: ${value};`;
      },
      'bg-clip': () => {
        const clipMap = {
          'border': 'border-box',
          'padding': 'padding-box',
          'content': 'content-box',
          'text': 'text'
        };
        return `background-clip: ${clipMap[value] || value};`;
      },
      'bg-origin': () => {
        const originMap = {
          'border': 'border-box',
          'padding': 'padding-box',
          'content': 'content-box'
        };
        return `background-origin: ${originMap[value] || value};`;
      },
      'bg-blend': () => {
        return `background-blend-mode: ${value};`;
      },
      'bg-image': () => {
        const gradientMap = {
          'none': 'none',
          'gradient-to-t': 'linear-gradient(to top, var(--tw-gradient-stops))',
          'gradient-to-tr': 'linear-gradient(to top right, var(--tw-gradient-stops))',
          'gradient-to-r': 'linear-gradient(to right, var(--tw-gradient-stops))',
          'gradient-to-br': 'linear-gradient(to bottom right, var(--tw-gradient-stops))',
          'gradient-to-b': 'linear-gradient(to bottom, var(--tw-gradient-stops))',
          'gradient-to-bl': 'linear-gradient(to bottom left, var(--tw-gradient-stops))',
          'gradient-to-l': 'linear-gradient(to left, var(--tw-gradient-stops))',
          'gradient-to-tl': 'linear-gradient(to top left, var(--tw-gradient-stops))'
        };
        const cssValue = isArbitrary ? value.replace(/_/g, ' ') : (gradientMap[value] || value);
        return `background-image: ${cssValue};`;
      },
      
      // ============================================
      // GRADIENT COLOR STOPS
      // ============================================
      'from': () => {
        const color = isArbitrary ? value : `var(--c-${value})`;
        return `--tw-gradient-from: ${color}; --tw-gradient-to: transparent; --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);`;
      },
      'via': () => {
        const color = isArbitrary ? value : `var(--c-${value})`;
        return `--tw-gradient-via: ${color}; --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-via), var(--tw-gradient-to);`;
      },
      'to': () => {
        const color = isArbitrary ? value : `var(--c-${value})`;
        return `--tw-gradient-to: ${color};`;
      },
      
      // ============================================
      // BACKDROP FILTER UTILITIES
      // ============================================
      'backdrop-blur': () => {
        const blurScale = {
          'none': '0',
          'sm': '4px',
          'md': '8px',
          'lg': '12px',
          'xl': '16px',
          '2xl': '24px',
          '3xl': '40px'
        };
        const cssValue = isArbitrary ? value : (blurScale[value] || `${value}px`);
        return `backdrop-filter: blur(${cssValue});`;
      },
      'backdrop-brightness': () => {
        const cssValue = isArbitrary ? value : (parseFloat(value) / 100);
        return `backdrop-filter: brightness(${cssValue});`;
      },
      'backdrop-contrast': () => {
        const cssValue = isArbitrary ? value : (parseFloat(value) / 100);
        return `backdrop-filter: contrast(${cssValue});`;
      },
      'backdrop-grayscale': () => {
        const grayscaleScale = { '0': '0', '100': '1', 'full': '1' };
        const cssValue = isArbitrary ? value : (grayscaleScale[value] || (parseFloat(value) / 100));
        return `backdrop-filter: grayscale(${cssValue});`;
      },
      'backdrop-hue-rotate': () => {
        const cssValue = isArbitrary ? value : `${value}deg`;
        return `backdrop-filter: hue-rotate(${cssValue});`;
      },
      'backdrop-invert': () => {
        const invertScale = { '0': '0', '100': '1', 'full': '1' };
        const cssValue = isArbitrary ? value : (invertScale[value] || (parseFloat(value) / 100));
        return `backdrop-filter: invert(${cssValue});`;
      },
      'backdrop-opacity': () => {
        const cssValue = isArbitrary ? value : (parseFloat(value) / 100);
        return `backdrop-filter: opacity(${cssValue});`;
      },
      'backdrop-saturate': () => {
        const cssValue = isArbitrary ? value : (parseFloat(value) / 100);
        return `backdrop-filter: saturate(${cssValue});`;
      },
      'backdrop-sepia': () => {
        const sepiaScale = { '0': '0', '100': '1', 'full': '1' };
        const cssValue = isArbitrary ? value : (sepiaScale[value] || (parseFloat(value) / 100));
        return `backdrop-filter: sepia(${cssValue});`;
      },
      
      // ============================================
      // ANIMATION EXTENDED PROPERTIES
      // ============================================
      'animation-duration': () => {
        const durationMap = {
          'instant': '75ms',
          'quick': '100ms',
          'fast': '150ms',
          'normal': '200ms',
          'slow': '300ms',
          'slower': '500ms',
          'lazy': '700ms'
        };
        const cssValue = isArbitrary ? value : (durationMap[value] || `${value}ms`);
        return `animation-duration: ${cssValue};`;
      },
      'animation-delay': () => {
        const delayMap = {
          'instant': '75ms',
          'quick': '100ms',
          'fast': '150ms',
          'normal': '200ms',
          'slow': '300ms'
        };
        const cssValue = isArbitrary ? value : (delayMap[value] || `${value}ms`);
        return `animation-delay: ${cssValue};`;
      },
      'animation-iteration': () => {
        const iterationMap = { 'infinite': 'infinite', 'once': '1', 'twice': '2' };
        const cssValue = iterationMap[value] || value;
        return `animation-iteration-count: ${cssValue};`;
      },
      'animation-direction': () => {
        return `animation-direction: ${value};`;
      },
      'animation-fill': () => {
        return `animation-fill-mode: ${value};`;
      },
      'animation-play': () => {
        return `animation-play-state: ${value};`;
      },
      'animation-timing': () => {
        const easeMap = {
          'linear': 'linear',
          'in': 'cubic-bezier(0.4, 0, 1, 1)',
          'out': 'cubic-bezier(0, 0, 0.2, 1)',
          'in-out': 'cubic-bezier(0.4, 0, 0.2, 1)'
        };
        const cssValue = easeMap[value] || value;
        return `animation-timing-function: ${cssValue};`;
      },
      
      // ============================================
      // SCROLL & INTERACTIVITY UTILITIES
      // ============================================
      'scroll-behavior': () => {
        return `scroll-behavior: ${value};`;
      },
      'scroll-m': () => {
        const cssValue = isArbitrary ? value : `var(--s-${value})`;
        return `scroll-margin: ${cssValue};`;
      },
      'scroll-m-x': () => {
        const cssValue = isArbitrary ? value : `var(--s-${value})`;
        return `scroll-margin-left: ${cssValue}; scroll-margin-right: ${cssValue};`;
      },
      'scroll-m-y': () => {
        const cssValue = isArbitrary ? value : `var(--s-${value})`;
        return `scroll-margin-top: ${cssValue}; scroll-margin-bottom: ${cssValue};`;
      },
      'scroll-p': () => {
        const cssValue = isArbitrary ? value : `var(--s-${value})`;
        return `scroll-padding: ${cssValue};`;
      },
      'scroll-p-x': () => {
        const cssValue = isArbitrary ? value : `var(--s-${value})`;
        return `scroll-padding-left: ${cssValue}; scroll-padding-right: ${cssValue};`;
      },
      'scroll-p-y': () => {
        const cssValue = isArbitrary ? value : `var(--s-${value})`;
        return `scroll-padding-top: ${cssValue}; scroll-padding-bottom: ${cssValue};`;
      },
      'snap-align': () => {
        return `scroll-snap-align: ${value};`;
      },
      'snap-stop': () => {
        return `scroll-snap-stop: ${value};`;
      },
      'snap-type': () => {
        const typeMap = {
          'none': 'none',
          'x': 'x mandatory',
          'y': 'y mandatory',
          'both': 'both mandatory',
          'x-proximity': 'x proximity',
          'y-proximity': 'y proximity'
        };
        return `scroll-snap-type: ${typeMap[value] || value};`;
      },
      'touch': () => {
        const touchMap = {
          'auto': 'auto',
          'none': 'none',
          'pan-x': 'pan-x',
          'pan-y': 'pan-y',
          'pan-left': 'pan-left',
          'pan-right': 'pan-right',
          'pan-up': 'pan-up',
          'pan-down': 'pan-down',
          'pinch-zoom': 'pinch-zoom',
          'manipulation': 'manipulation'
        };
        return `touch-action: ${touchMap[value] || value};`;
      },
      'resize': () => {
        const resizeMap = {
          'none': 'none',
          'both': 'both',
          'x': 'horizontal',
          'y': 'vertical'
        };
        return `resize: ${resizeMap[value] || value};`;
      },
      'will-change': () => {
        const willChangeMap = {
          'auto': 'auto',
          'scroll': 'scroll-position',
          'contents': 'contents',
          'transform': 'transform',
          'opacity': 'opacity'
        };
        return `will-change: ${willChangeMap[value] || value};`;
      },
      'color-scheme': () => {
        return `color-scheme: ${value};`;
      },
      'field-sizing': () => {
        return `field-sizing: ${value};`;
      },
      'forced-color': () => {
        return `forced-color-adjust: ${value};`;
      },
      
      // ============================================
      // BORDER & OUTLINE UTILITIES
      // ============================================
      'border-style': () => {
        return `border-style: ${value};`;
      },
      'outline': () => {
        const cssValue = isArbitrary ? value : `var(--c-${value})`;
        return `outline-color: ${cssValue};`;
      },
      'outline-style': () => {
        return `outline-style: ${value};`;
      },
      'outline-w': () => {
        const cssValue = isArbitrary ? value : `${value}px`;
        return `outline-width: ${cssValue};`;
      },
      'outline-offset': () => {
        const cssValue = isArbitrary ? value : `${value}px`;
        return `outline-offset: ${cssValue};`;
      },
      
      // ============================================
      // RING UTILITIES (Focus Ring)
      // ============================================
      'ring': () => {
        if (value === 'none') {
          return `box-shadow: 0 0 0 0 transparent;`;
        }
        const cssValue = isArbitrary ? value : `var(--ring-${value})`;
        return `box-shadow: 0 0 0 var(--ring-offset) var(--ring-offset-color), 0 0 0 calc(${cssValue} + var(--ring-offset)) var(--ring-color);`;
      },
      'ring-color': () => {
        const cssValue = isArbitrary ? value : `var(--c-${value})`;
        return `--ring-color: ${cssValue};`;
      },
      'ring-offset': () => {
        const cssValue = isArbitrary ? value : `${value}px`;
        return `--ring-offset: ${cssValue};`;
      },
      'ring-offset-color': () => {
        const cssValue = isArbitrary ? value : `var(--c-${value})`;
        return `--ring-offset-color ${cssValue};`;
      },
      

      
      // ============================================
      // DIVIDE UTILITIES
      // ============================================
      'divide': () => {
        const cssValue = isArbitrary ? value : `var(--c-${value})`;
        return `border-color: ${cssValue}; border-style: solid;`;
      },
      'divide-x': () => {
        // Handle divide-x:reverse specially
        if (value === 'reverse') {
          return '--ss-divide-x-reverse: 1;';
        }
        const cssValue = isArbitrary ? value : `var(--c-${value})`;
        return `border-left-color: ${cssValue}; border-right-color: ${cssValue}; border-left-style: solid; border-right-style: solid;`;
      },
      'divide-y': () => {
        // Handle divide-y:reverse specially
        if (value === 'reverse') {
          return '--ss-divide-y-reverse: 1;';
        }
        const cssValue = isArbitrary ? value : `var(--c-${value})`;
        return `border-top-color: ${cssValue}; border-bottom-color: ${cssValue}; border-top-style: solid; border-bottom-style: solid;`;
      },
      'divide-w': () => {
        const cssValue = isArbitrary ? value : `var(--s-${value})`;
        return `border-width: ${cssValue}; border-style: solid;`;
      },
      'divide-x-w': () => {
        const cssValue = isArbitrary ? value : `var(--s-${value})`;
        return `
          border-right-width: calc(${cssValue} * var(--ss-divide-x-reverse, 0));
          border-left-width: calc(${cssValue} * (1 - var(--ss-divide-x-reverse, 0)));
          border-left-style: solid; 
          border-right-style: solid;
        `;
      },
      'divide-y-w': () => {
        const cssValue = isArbitrary ? value : `var(--s-${value})`;
        return `
          border-bottom-width: calc(${cssValue} * var(--ss-divide-y-reverse, 0));
          border-top-width: calc(${cssValue} * (1 - var(--ss-divide-y-reverse, 0)));
          border-top-style: solid; 
          border-bottom-style: solid;
        `;
      },
      'divide-x:reverse': () => {
        return '--ss-divide-x-reverse: 1;';
      },
      'divide-y:reverse': () => {
        return '--ss-divide-y-reverse: 1;';
      },
      'divide-style': () => {
        return `border-style: ${value};`;
      },
      
      // ============================================
      // SVG UTILITIES
      // ============================================

      'stroke': () => {
        const cssValue = isArbitrary ? value : `var(--c-${value})`;
        return `stroke: ${cssValue};`;
      },
      'stroke-w': () => {
        const cssValue = isArbitrary ? value : value;
        return `stroke-width: ${cssValue};`;
      },
      'fill': () => {
        if (value === 'none') return 'fill: none;';
        const cssValue = isArbitrary ? value : `var(--c-${value})`;
        return `fill: ${cssValue};`;
      },
      
      // ============================================
      // MIX BLEND MODE
      // ============================================
      'mix-blend': () => {
        return `mix-blend-mode: ${value};`;
      },
      
      // ============================================
      // 3D TRANSFORM UTILITIES
      // ============================================
      'perspective': () => {
        const perspectiveMap = {
          'none': 'none',
          'sm': '500px',
          'md': '1000px',
          'lg': '1500px',
          'xl': '2000px'
        };
        const cssValue = isArbitrary ? value : (perspectiveMap[value] || value);
        return `perspective: ${cssValue};`;
      },
      'perspective-origin': () => {
        const originMap = {
          'center': 'center',
          'top': 'top',
          'top-right': 'top right',
          'right': 'right',
          'bottom-right': 'bottom right',
          'bottom': 'bottom',
          'bottom-left': 'bottom left',
          'left': 'left',
          'top-left': 'top left'
        };
        const cssValue = isArbitrary ? value.replace(/_/g, ' ') : (originMap[value] || value);
        return `perspective-origin: ${cssValue};`;
      },
      'rotate-x': () => {
        const rotateValue = isArbitrary ? value : `${value}deg`;
        return `transform: rotateX(${rotateValue});`;
      },
      'rotate-y': () => {
        const rotateValue = isArbitrary ? value : `${value}deg`;
        return `transform: rotateY(${rotateValue});`;
      },
      'rotate-z': () => {
        const rotateValue = isArbitrary ? value : `${value}deg`;
        return `transform: rotateZ(${rotateValue});`;
      },
      'transform-style': () => {
        return `transform-style: ${value};`;
      },
      'backface': () => {
        const backfaceMap = { 'visible': 'visible', 'hidden': 'hidden' };
        return `backface-visibility: ${backfaceMap[value] || value};`;
      }
    };
    
    const gen = rules[property];
    return gen ? gen() : '';
  }

   function generateRule(raw, attrType) {
    // Handle simple layout keywords
    if (attrType === 'layout' && layoutKeywords[raw]) {
      return `[layout~="${raw}"] { ${layoutKeywords[raw]} }\n`;
    }
    
    const token = parseToken(raw);
    let cssDeclaration = '';
    
    switch (attrType) {
      case 'layout':
        cssDeclaration = generateLayoutRule(token);
        break;
      case 'space':
        cssDeclaration = generateSpaceRule(token);
        break;
      case 'visual':
        cssDeclaration = generateVisualRule(token);
        break;
    }
    
    if (!cssDeclaration) return '';
    
    // Check if this is a divide utility
    const isDivide = raw.startsWith('divide') && !raw.includes(':reverse');
    
    // Build selector
    let selector = '';
    if (isDivide) {
      // Divide utilities use special child selector pattern
      selector = `[visual~="${raw}"] > :not([hidden]) ~ :not([hidden])`;
    } else {
      selector = `[${attrType}~="${raw}"]`;
    }
    
    // Add pseudo-class for states (but not for 'dark' - it's handled separately)
    if (token.state && token.state !== 'dark') {
      if (isDivide) {
        // For divide utilities, add state after the tilde
        selector = `[visual~="${raw}"] > :not([hidden]) ~ :not([hidden]):${token.state}`;
      } else {
        selector += `:${token.state}`;
      }
    }
    
    return `${selector} { ${cssDeclaration} }\n`;
  }
  function scanDOM() {
    const tokens = {
      layout: new Set(),
      space: new Set(),
      visual: new Set()
    };

    const elements = document.querySelectorAll('[layout], [space], [visual]');
    
    elements.forEach(el => {
      ['layout', 'space', 'visual'].forEach(attr => {
        const value = el.getAttribute(attr);
        if (value) {
          value.split(/\s+/).forEach(token => {
            if (token) tokens[attr].add(token);
          });
        }
      });
    });

    return tokens;
  }

// ============================================
  // CSS COMPILER
  // ============================================
  
  function compileCSS(tokens, config) {
    let css = generateCSSVariables(config);
    
    // Add Preflight if enabled (default: true)
    if (config.preflight !== false) {
      css += generatePreflight();
    }
    
    // Convert tokens to array for processing
    const tokenArray = [];
    for (const [attrType, values] of Object.entries(tokens)) {
      for (const raw of values) {
        tokenArray.push({ raw, attrType });
      }
    }
    
    // Group tokens by breakpoint and dark mode
    const baseTokens = [];
    const darkTokens = [];
    const breakpointTokens = {};
    
    // Initialize breakpoint collections from config
    const { screens } = config.theme;
    for (const bp of Object.keys(screens)) {
      breakpointTokens[bp] = [];
    }
    
    // Parse tokens and group them
    for (const token of tokenArray) {
      const parsed = tokenize(token.raw, token.attrType);
      if (parsed.state === 'dark') {
        darkTokens.push(parsed);
      } else if (parsed.breakpoint) {
        if (!breakpointTokens[parsed.breakpoint]) {
          breakpointTokens[parsed.breakpoint] = [];
        }
        breakpointTokens[parsed.breakpoint].push(parsed);
      } else {
        baseTokens.push(parsed);
      }
    }
    
    // Track display properties to handle conflicts like Tailwind
    const displayProps = ['flex', 'grid', 'inline-flex', 'inline-grid', 'block', 'inline', 'hidden', 'contents'];
    
    // Map: attrType -> Set of raw values that have display properties in base
    const baseDisplayTokens = new Map();
    
    // Find display properties in base tokens
    for (const token of baseTokens) {
      if (token.attrType && displayProps.includes(token.property)) {
        if (!baseDisplayTokens.has(token.attrType)) {
          baseDisplayTokens.set(token.attrType, new Set());
        }
        baseDisplayTokens.get(token.attrType).add(token.raw);
      }
    }
    
    // Generate base rules
    for (const token of baseTokens) {
      css += generateRule(token.raw, token.attrType);
    }
    
    // Generate responsive rules
    for (const [bp, bpTokens] of Object.entries(breakpointTokens)) {
      if (bpTokens.length > 0) {
        css += `\n@media (min-width: ${screens[bp]}) {\n`;
        
        // Add display reset rules for responsive tokens that have display properties
        // when the same attribute has ANY base display properties
        const processedResetSelectors = new Set();
        
        for (const bpToken of bpTokens) {
          if (bpToken.attrType && displayProps.includes(bpToken.property)) {
            // Check if there are any base tokens with display properties for this attrType
            if (baseDisplayTokens.has(bpToken.attrType)) {
              const baseDisplays = baseDisplayTokens.get(bpToken.attrType);
              
              // Only add reset if:
              // 1. There are base display tokens for this attrType
              // 2. This responsive token's raw value is different from base display tokens
              if (baseDisplays.size > 0 && !baseDisplays.has(bpToken.raw) && !processedResetSelectors.has(bpToken.raw)) {
                // Add reset rule for this responsive token
                const selector = `[${bpToken.attrType}~="${bpToken.raw}"]`;
                css += `  ${selector} { display: revert-layer; }\n`;
                processedResetSelectors.add(bpToken.raw);
              }
            }
          }
        }
        
        // Generate responsive token rules
        for (const token of bpTokens) {
          css += '  ' + generateRule(token.raw, token.attrType);
        }
        css += '}\n';
      }
    }
    
    // Generate dark mode rules
    if (darkTokens.length > 0) {
      const darkMode = config.darkMode || 'media';
      
      if (darkMode === 'media') {
        css += `\n@media (prefers-color-scheme: dark) {\n`;
        for (const token of darkTokens) {
          css += '  ' + generateRule(token.raw, token.attrType);
        }
        css += '}\n';
      } else {
        // Selector strategy
        const darkSelector = Array.isArray(darkMode) ? darkMode[1] : '.dark';
        css += `\n/* Dark Mode */\n`;
        for (const token of darkTokens) {
          const rule = generateRule(token.raw, token.attrType);
          css += rule.replace(/^(\[[^\]]+\])/, `${darkSelector} $1`);
        }
      }
    }
    
    return css;
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
    const userConfig = loadInlineConfig();
    const config = mergeConfig(userConfig);
    
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
      attributeFilter: ['layout', 'space', 'visual']
    });

    console.log('%c[SenangStart CSS]%c JIT runtime initialized ✓', 
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
