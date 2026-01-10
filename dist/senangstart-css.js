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

(function() {
  'use strict';

  // ============================================
  // DEFAULT CONFIGURATION
  // ============================================
  
  const defaultConfig = {
    theme: {
      spacing: {
        'none':   '0px',
        'tiny':   '4px',
        'small':  '8px',
        'medium': '16px',
        'big':    '32px',
        'giant':  '64px',
        'vast':   '128px'
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
        'tiny':   '12px',
        'small':  '14px',
        'medium': '16px',
        'big':    '20px',
        'giant':  '32px',
        'vast':   '48px'
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
        'desk': '1280px'
      },
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
      zIndex: {
        'base':   '0',
        'low':    '10',
        'mid':    '50',
        'high':   '100',
        'top':    '9999'
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
  
  function loadInlineConfig() {
    const configEl = document.querySelector('script[type="senangstart/config"]');
    if (!configEl) return {};
    
    try {
      return JSON.parse(configEl.textContent);
    } catch (e) {
      console.error('[SenangStart] Invalid config JSON:', e);
      return {};
    }
  }

  function mergeConfig(user) {
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
    'clear-none': 'clear: none;'
  };

  // ============================================
  // RULE GENERATORS
  // ============================================
  
  const breakpoints = ['mob', 'tab', 'lap', 'desk'];
  const states = ['hover', 'focus', 'active', 'disabled', 'dark'];

  function parseToken(raw) {
    const token = {
      raw,
      breakpoint: null,
      state: null,
      property: null,
      value: null,
      isArbitrary: false
    };

    const parts = raw.split(':');
    let idx = 0;

    // Check for breakpoint
    if (breakpoints.includes(parts[0])) {
      token.breakpoint = parts[0];
      idx++;
    }

    // Check for state
    if (states.includes(parts[idx])) {
      token.state = parts[idx];
      idx++;
    }

    // Property
    if (idx < parts.length) {
      token.property = parts[idx];
      idx++;
    }

    // Value
    if (idx < parts.length) {
      let value = parts.slice(idx).join(':');
      const arbitraryMatch = value.match(/^\[(.+)\]$/);
      if (arbitraryMatch) {
        token.value = arbitraryMatch[1].replace(/_/g, ' ');
        token.isArbitrary = true;
      } else {
        token.value = value;
      }
    }

    return token;
  }

  function generateLayoutRule(token) {
    const { property, value, isArbitrary } = token;
    
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
    
    const cssValue = isArbitrary ? value : `var(--s-${value})`;
    
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
        const cssValue = isArbitrary ? value : `var(--font-${value})`;
        return `font-size: ${cssValue};`;
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
        // Font weight
        return `font-weight: var(--fw-${value});`;
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
      'border-w': () => {
        const cssValue = isArbitrary ? value : `var(--s-${value})`;
        return `border-width: ${cssValue}; border-style: solid;`;
      },
      'rounded': () => `border-radius: var(--r-${value});`,
      'shadow': () => `box-shadow: var(--shadow-${value});`,
      'opacity': () => `opacity: ${value};`,
      'content': () => `content: "${value}";`
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

    let selector = `[${attrType}~="${raw}"]`;
    // Add pseudo-class for states (but not for 'dark' - handled separately)
    if (token.state && token.state !== 'dark') {
      selector += `:${token.state}`;
    }

    return `${selector} { ${cssDeclaration} }\n`;
  }

  // ============================================
  // DOM SCANNER
  // ============================================
  
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
    
    const baseRules = [];
    const darkRules = [];
    const mediaRules = {
      mob: [],
      tab: [],
      lap: [],
      desk: []
    };

    for (const [attrType, values] of Object.entries(tokens)) {
      for (const raw of values) {
        const rule = generateRule(raw, attrType);
        if (rule) {
          // Check for dark: prefix
          if (raw.match(/^(mob:|tab:|lap:|desk:)?dark:/)) {
            darkRules.push(rule);
          }
          // Check for breakpoint prefix
          else {
            const bpMatch = raw.match(/^(mob|tab|lap|desk):/);
            if (bpMatch) {
              mediaRules[bpMatch[1]].push(rule);
            } else {
              baseRules.push(rule);
            }
          }
        }
      }
    }

    // Add base rules
    css += baseRules.join('');

    // Add media queries
    const { screens } = config.theme;
    for (const [bp, rules] of Object.entries(mediaRules)) {
      if (rules.length > 0) {
        css += `\n@media (min-width: ${screens[bp]}) {\n`;
        css += rules.map(r => '  ' + r).join('');
        css += '}\n';
      }
    }

    // Add dark mode rules
    if (darkRules.length > 0) {
      const darkMode = config.darkMode || 'media';
      
      if (darkMode === 'media') {
        css += `\n@media (prefers-color-scheme: dark) {\n`;
        css += darkRules.map(r => '  ' + r).join('');
        css += '}\n';
      } else {
        // Selector strategy
        const darkSelector = Array.isArray(darkMode) ? darkMode[1] : '.dark';
        css += `\n/* Dark Mode */\n`;
        for (const rule of darkRules) {
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
