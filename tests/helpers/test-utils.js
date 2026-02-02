/**
 * SenangStart CSS - Test Helpers
 * Utility functions for testing
 */

/**
 * Create a minimal test configuration
 * @param {Object} overrides - Config overrides
 * @returns {Object} - Merged config
 */
export function createTestConfig(overrides = {}) {
  const baseConfig = {
    content: ['./**/*.html'],
    output: {
      css: './output.css',
      minify: false
    },
    darkMode: 'media',
    preflight: false, // Disable for simpler test output
    theme: {
      spacing: {
        'none': '0px',
        'tiny': '4px',
        'small': '8px',
        'medium': '16px',
        'big': '32px',
        'giant': '64px',
        'vast': '128px'
      },
      radius: {
        'none': '0px',
        'small': '4px',
        'medium': '8px',
        'big': '16px',
        'full': '9999px'
      },
      shadow: {
        'none': 'none',
        'small': '0 1px 2px rgba(0,0,0,0.05)',
        'medium': '0 4px 6px rgba(0,0,0,0.1)',
        'big': '0 10px 15px rgba(0,0,0,0.1)'
      },
      fontSize: {
        'tiny': '12px',
        'small': '14px',
        'medium': '16px',
        'big': '20px',
        'giant': '32px'
      },
      fontWeight: {
        'normal': '400',
        'medium': '500',
        'bold': '700'
      },
      screens: {
        'mob': '480px',
        'tab': '768px',
        'lap': '1024px',
        'desk': '1280px'
      },
      colors: {
        'white': '#FFFFFF',
        'black': '#000000',
        'primary': '#2563EB',
        'secondary': '#1E40AF',
        'success': '#10B981',
        'warning': '#F59E0B',
        'danger': '#EF4444',
        'grey': '#6B7280'
      },
      zIndex: {
        'base': '0',
        'low': '10',
        'mid': '50',
        'high': '100',
        'top': '9999'
      }
    }
  };

  return deepMerge(baseConfig, overrides);
}

/**
 * Deep merge two objects
 */
function deepMerge(target, source) {
  const result = { ...target };
  
  for (const key of Object.keys(source)) {
    if (source[key] && typeof source[key] === 'object' && !Array.isArray(source[key])) {
      result[key] = deepMerge(result[key] || {}, source[key]);
    } else {
      result[key] = source[key];
    }
  }
  
  return result;
}

/**
 * Normalize CSS for comparison
 * Removes extra whitespace, normalizes line endings
 * @param {string} css - CSS string
 * @returns {string} - Normalized CSS
 */
export function normalizeCSS(css) {
  return css
    .replace(/\r\n/g, '\n')           // Normalize line endings
    .replace(/\s+/g, ' ')              // Collapse whitespace
    .replace(/\s*{\s*/g, ' { ')        // Normalize braces
    .replace(/\s*}\s*/g, ' } ')
    .replace(/\s*;\s*/g, '; ')         // Normalize semicolons
    .replace(/\s*:\s*/g, ': ')         // Normalize colons
    .trim();
}

/**
 * Extract CSS rules for a specific selector pattern
 * @param {string} css - Full CSS string
 * @param {string} pattern - Selector pattern to find
 * @returns {string|null} - Matched rule or null
 */
export function findCSSRule(css, pattern) {
  const regex = new RegExp(`\\[${pattern}\\]\\s*{([^}]+)}`, 'i');
  const match = css.match(regex);
  return match ? match[1].trim() : null;
}

/**
 * Create a mock HTML source with SenangStart attributes
 * @param {Object} attrs - Attributes { layout, space, visual }
 * @returns {string} - HTML string
 */
export function createMockHTML(attrs) {
  const parts = [];
  if (attrs.layout) parts.push(`layout="${attrs.layout}"`);
  if (attrs.space) parts.push(`space="${attrs.space}"`);
  if (attrs.visual) parts.push(`visual="${attrs.visual}"`);
  
  return `<div ${parts.join(' ')}>Test</div>`;
}

export default { createTestConfig, normalizeCSS, findCSSRule, createMockHTML };
