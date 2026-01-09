/**
 * SenangStart CSS - Default Configuration
 * The "Natural Object" Scale using intuitive adjectives
 */

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

  theme: {
    // 1. SPACING: The "Natural Object" Scale
    // Logic: How big is the object/gap physically?
    spacing: {
      'none':   '0px',      // No space
      'tiny':   '4px',      // Pebble (Borders, offsets)
      'small':  '8px',      // Matchbox (Grouping inside components)
      'medium': '16px',     // Smartphone (Standard default)
      'big':    '32px',     // Laptop (Separation between groups)
      'giant':  '64px',     // Door (Layout sections)
      'vast':   '128px'     // House (Hero sections)
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

    // 4. FONT SIZES: Reading Scale
    fontSize: {
      'tiny':   '12px',
      'small':  '14px',
      'medium': '16px',
      'big':    '20px',
      'giant':  '32px',
      'vast':   '48px'
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
      'desk': '1280px'      // Desktop
    },

    // 7. COLORS: SenangStart Brand Palette
    colors: {
      'white':     '#FFFFFF',
      'black':     '#000000',
      'grey':      '#6B7280',
      'dark':      '#3E4A5D',     // Brand dark
      'light':     '#DBEAFE',     // Brand light/secondary
      'primary':   '#2563EB',     // Brand primary
      'secondary': '#DBEAFE',     // Brand secondary
      'success':   '#10B981',
      'warning':   '#F59E0B',
      'danger':    '#EF4444'
    },

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
  
  if (userConfig.theme) {
    merged.theme = {
      spacing: { ...merged.theme.spacing, ...userConfig.theme?.spacing },
      radius: { ...merged.theme.radius, ...userConfig.theme?.radius },
      shadow: { ...merged.theme.shadow, ...userConfig.theme?.shadow },
      fontSize: { ...merged.theme.fontSize, ...userConfig.theme?.fontSize },
      fontWeight: { ...merged.theme.fontWeight, ...userConfig.theme?.fontWeight },
      screens: { ...merged.theme.screens, ...userConfig.theme?.screens },
      colors: { ...merged.theme.colors, ...userConfig.theme?.colors },
      zIndex: { ...merged.theme.zIndex, ...userConfig.theme?.zIndex }
    };
  }
  
  return merged;
}

export default defaultConfig;
