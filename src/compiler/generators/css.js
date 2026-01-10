/**
 * SenangStart CSS - CSS Generator
 * Generates CSS from tokens using attribute selectors
 */

import { generatePreflight } from './preflight.js';

/**
 * Generate CSS custom properties from config
 * @param {Object} config - Configuration object
 * @returns {string} - CSS custom properties block
 */
export function generateCSSVariables(config) {
  const { theme } = config;
  let css = ':root {\n';
  
  // Spacing variables
  for (const [key, value] of Object.entries(theme.spacing)) {
    css += `  --s-${key}: ${value};\n`;
  }
  
  // Radius variables
  for (const [key, value] of Object.entries(theme.radius)) {
    css += `  --r-${key}: ${value};\n`;
  }
  
  // Shadow variables
  for (const [key, value] of Object.entries(theme.shadow)) {
    css += `  --shadow-${key}: ${value};\n`;
  }
  
  // Font size variables
  for (const [key, value] of Object.entries(theme.fontSize)) {
    css += `  --font-${key}: ${value};\n`;
  }
  
  // Font weight variables
  for (const [key, value] of Object.entries(theme.fontWeight)) {
    css += `  --fw-${key}: ${value};\n`;
  }
  
  // Color variables
  for (const [key, value] of Object.entries(theme.colors)) {
    css += `  --c-${key}: ${value};\n`;
  }
  
  // Z-index variables
  for (const [key, value] of Object.entries(theme.zIndex)) {
    css += `  --z-${key}: ${value};\n`;
  }
  
  css += '}\n\n';
  return css;
}

/**
 * Generate CSS rule for a layout token
 */
function generateLayoutRule(token, config) {
  const { property, value } = token;
  
  const layoutMap = {
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
    
    // Justify Content
    'justify-start': 'justify-content: flex-start;',
    'justify-end': 'justify-content: flex-end;',
    'justify-center': 'justify-content: center;',
    'justify-between': 'justify-content: space-between;',
    'justify-around': 'justify-content: space-around;',
    'justify-evenly': 'justify-content: space-evenly;',
    'justify-stretch': 'justify-content: stretch;',
    
    // Justify Items (Grid)
    'justify-items-start': 'justify-items: start;',
    'justify-items-end': 'justify-items: end;',
    'justify-items-center': 'justify-items: center;',
    'justify-items-stretch': 'justify-items: stretch;',
    
    // Justify Self
    'justify-self-auto': 'justify-self: auto;',
    'justify-self-start': 'justify-self: start;',
    'justify-self-end': 'justify-self: end;',
    'justify-self-center': 'justify-self: center;',
    'justify-self-stretch': 'justify-self: stretch;',
    
    // Align Content
    'content-start': 'align-content: flex-start;',
    'content-end': 'align-content: flex-end;',
    'content-center': 'align-content: center;',
    'content-between': 'align-content: space-between;',
    'content-around': 'align-content: space-around;',
    'content-evenly': 'align-content: space-evenly;',
    'content-stretch': 'align-content: stretch;',
    
    // Align Items
    'items-start': 'align-items: flex-start;',
    'items-end': 'align-items: flex-end;',
    'items-center': 'align-items: center;',
    'items-baseline': 'align-items: baseline;',
    'items-stretch': 'align-items: stretch;',
    
    // Align Self
    'self-auto': 'align-self: auto;',
    'self-start': 'align-self: flex-start;',
    'self-end': 'align-self: flex-end;',
    'self-center': 'align-self: center;',
    'self-baseline': 'align-self: baseline;',
    'self-stretch': 'align-self: stretch;',
    
    // Place Content (Grid shorthand)
    'place-content-start': 'place-content: start;',
    'place-content-end': 'place-content: end;',
    'place-content-center': 'place-content: center;',
    'place-content-between': 'place-content: space-between;',
    'place-content-around': 'place-content: space-around;',
    'place-content-evenly': 'place-content: space-evenly;',
    'place-content-stretch': 'place-content: stretch;',
    
    // Place Items (Grid shorthand)
    'place-items-start': 'place-items: start;',
    'place-items-end': 'place-items: end;',
    'place-items-center': 'place-items: center;',
    'place-items-stretch': 'place-items: stretch;',
    
    // Place Self (Grid shorthand)
    'place-self-auto': 'place-self: auto;',
    'place-self-start': 'place-self: start;',
    'place-self-end': 'place-self: end;',
    'place-self-center': 'place-self: center;',
    'place-self-stretch': 'place-self: stretch;',
    
    // Grid Auto Flow
    'grid-flow-row': 'grid-auto-flow: row;',
    'grid-flow-col': 'grid-auto-flow: column;',
    'grid-flow-dense': 'grid-auto-flow: dense;',
    'grid-flow-row-dense': 'grid-auto-flow: row dense;',
    'grid-flow-col-dense': 'grid-auto-flow: column dense;',
    
    // Shorthand Alignment (backwards compat)
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
  
  return layoutMap[property] || '';
}

/**
 * Generate CSS rule for a space token
 */
function generateSpaceRule(token, config) {
  const { property, value, isArbitrary } = token;
  
  // Determine the CSS value
  const cssValue = isArbitrary ? value : `var(--s-${value})`;
  
  // Handle special values
  if (value === 'auto') {
    const autoValue = 'auto';
    
    const propertyMap = {
      'm': `margin: ${autoValue};`,
      'm-x': `margin-left: ${autoValue}; margin-right: ${autoValue};`,
      'm-y': `margin-top: ${autoValue}; margin-bottom: ${autoValue};`,
      'm-t': `margin-top: ${autoValue};`,
      'm-r': `margin-right: ${autoValue};`,
      'm-b': `margin-bottom: ${autoValue};`,
      'm-l': `margin-left: ${autoValue};`
    };
    
    return propertyMap[property] || '';
  }
  
  const propertyMap = {
    // Padding
    'p': `padding: ${cssValue};`,
    'p-t': `padding-top: ${cssValue};`,
    'p-r': `padding-right: ${cssValue};`,
    'p-b': `padding-bottom: ${cssValue};`,
    'p-l': `padding-left: ${cssValue};`,
    'p-x': `padding-left: ${cssValue}; padding-right: ${cssValue};`,
    'p-y': `padding-top: ${cssValue}; padding-bottom: ${cssValue};`,
    
    // Margin
    'm': `margin: ${cssValue};`,
    'm-t': `margin-top: ${cssValue};`,
    'm-r': `margin-right: ${cssValue};`,
    'm-b': `margin-bottom: ${cssValue};`,
    'm-l': `margin-left: ${cssValue};`,
    'm-x': `margin-left: ${cssValue}; margin-right: ${cssValue};`,
    'm-y': `margin-top: ${cssValue}; margin-bottom: ${cssValue};`,
    
    // Gap
    'g': `gap: ${cssValue};`,
    'g-x': `column-gap: ${cssValue};`,
    'g-y': `row-gap: ${cssValue};`,
    
    // Sizing
    'w': `width: ${cssValue};`,
    'h': `height: ${cssValue};`,
    'min-w': `min-width: ${cssValue};`,
    'max-w': `max-width: ${cssValue};`,
    'min-h': `min-height: ${cssValue};`,
    'max-h': `max-height: ${cssValue};`
  };
  
  return propertyMap[property] || '';
}

/**
 * Generate CSS rule for a visual token
 */
function generateVisualRule(token, config) {
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
    // Background Color
    'bg': () => {
      const cssValue = isArbitrary ? value : `var(--c-${value})`;
      return `background-color: ${cssValue};`;
    },
    
    // Background Image
    'bg-image': () => {
      const cssValue = isArbitrary ? value : `url(${value})`;
      return `background-image: ${cssValue};`;
    },
    
    // Background Attachment
    'bg-attachment': () => {
      return `background-attachment: ${value};`;
    },
    
    // Background Clip
    'bg-clip': () => {
      const clipMap = {
        'border': 'border-box',
        'padding': 'padding-box',
        'content': 'content-box',
        'text': 'text'
      };
      const cssValue = clipMap[value] || value;
      return `background-clip: ${cssValue};`;
    },
    
    // Background Origin
    'bg-origin': () => {
      const originMap = {
        'border': 'border-box',
        'padding': 'padding-box',
        'content': 'content-box'
      };
      const cssValue = originMap[value] || value;
      return `background-origin: ${cssValue};`;
    },
    
    // Background Position
    'bg-position': () => {
      const positionMap = {
        'center': 'center',
        'top': 'top',
        'bottom': 'bottom',
        'left': 'left',
        'right': 'right',
        'top-left': 'top left',
        'top-right': 'top right',
        'bottom-left': 'bottom left',
        'bottom-right': 'bottom right'
      };
      const cssValue = isArbitrary ? value.replace(/_/g, ' ') : (positionMap[value] || value);
      return `background-position: ${cssValue};`;
    },
    
    // Background Repeat
    'bg-repeat': () => {
      const repeatMap = {
        'repeat': 'repeat',
        'no-repeat': 'no-repeat',
        'repeat-x': 'repeat-x',
        'repeat-y': 'repeat-y',
        'round': 'round',
        'space': 'space'
      };
      const cssValue = repeatMap[value] || value;
      return `background-repeat: ${cssValue};`;
    },
    
    // Background Size
    'bg-size': () => {
      const sizeMap = {
        'auto': 'auto',
        'cover': 'cover',
        'contain': 'contain'
      };
      const cssValue = isArbitrary ? value.replace(/_/g, ' ') : (sizeMap[value] || value);
      return `background-size: ${cssValue};`;
    },
    
    // Background Blend Mode
    'bg-blend': () => {
      return `background-blend-mode: ${value};`;
    },
    
    // Text color
    'text': () => {
      if (['left', 'center', 'right', 'justify'].includes(value)) {
        return `text-align: ${value};`;
      }
      const cssValue = isArbitrary ? value : `var(--c-${value})`;
      return `color: ${cssValue};`;
    },
    
    // Text Shadow
    'text-shadow': () => {
      const shadowPresets = {
        'none': 'none',
        'small': '0 1px 2px rgba(0,0,0,0.1)',
        'medium': '0 2px 4px rgba(0,0,0,0.15)',
        'big': '0 4px 8px rgba(0,0,0,0.2)'
      };
      const cssValue = isArbitrary ? value.replace(/_/g, ' ') : (shadowPresets[value] || value);
      return `text-shadow: ${cssValue};`;
    },
    
    // Font size
    'text-size': () => {
      const cssValue = isArbitrary ? value : `var(--font-${value})`;
      return `font-size: ${cssValue};`;
    },
    
    // Font weight / family
    'font': () => {
      const fontFamilies = {
        'sans': 'ui-sans-serif, system-ui, sans-serif',
        'serif': 'ui-serif, Georgia, serif',
        'mono': 'ui-monospace, monospace'
      };
      if (fontFamilies[value]) {
        return `font-family: ${fontFamilies[value]};`;
      }
      return `font-weight: var(--fw-${value});`;
    },
    
    // Letter spacing
    'tracking': () => {
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
    
    // Line height
    'leading': () => {
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
    
    // Line clamp
    'line-clamp': () => {
      return `overflow: hidden; display: -webkit-box; -webkit-box-orient: vertical; -webkit-line-clamp: ${value};`;
    },
    
    // Text decoration color
    'decoration': () => {
      const cssValue = isArbitrary ? value : `var(--c-${value})`;
      return `text-decoration-color: ${cssValue};`;
    },
    
    // Text decoration thickness
    'decoration-thickness': () => {
      const cssValue = isArbitrary ? value : `${value}px`;
      return `text-decoration-thickness: ${cssValue};`;
    },
    
    // Underline offset
    'underline-offset': () => {
      const cssValue = isArbitrary ? value : `${value}px`;
      return `text-underline-offset: ${cssValue};`;
    },
    
    // Text indent
    'indent': () => {
      const cssValue = isArbitrary ? value : `var(--s-${value})`;
      return `text-indent: ${cssValue};`;
    },
    
    // Border color
    'border': () => {
      const cssValue = isArbitrary ? value : `var(--c-${value})`;
      return `border-color: ${cssValue}; border-style: solid;`;
    },
    
    // Border width
    'border-w': () => {
      const cssValue = isArbitrary ? value : `var(--s-${value})`;
      return `border-width: ${cssValue}; border-style: solid;`;
    },
    
    // Border style
    'border-style': () => {
      return `border-style: ${value};`;
    },
    
    // Border radius
    'rounded': () => {
      return `border-radius: var(--r-${value});`;
    },
    
    // Outline Width
    'outline-w': () => {
      const cssValue = isArbitrary ? value : `var(--s-${value})`;
      return `outline-width: ${cssValue};`;
    },
    
    // Outline Color
    'outline': () => {
      const cssValue = isArbitrary ? value : `var(--c-${value})`;
      return `outline-color: ${cssValue};`;
    },
    
    // Outline Style
    'outline-style': () => {
      return `outline-style: ${value};`;
    },
    
    // Outline Offset
    'outline-offset': () => {
      const cssValue = isArbitrary ? value : `var(--s-${value})`;
      return `outline-offset: ${cssValue};`;
    },
    
    // Box shadow
    'shadow': () => {
      return `box-shadow: var(--shadow-${value});`;
    },
    
    // Opacity
    'opacity': () => {
      return `opacity: ${value};`;
    },
    
    // Mix Blend Mode
    'mix-blend': () => {
      return `mix-blend-mode: ${value};`;
    },
    
    // Mask Clip
    'mask-clip': () => {
      const clipMap = {
        'border': 'border-box',
        'padding': 'padding-box',
        'content': 'content-box',
        'text': 'text'
      };
      const cssValue = clipMap[value] || value;
      return `mask-clip: ${cssValue};`;
    },
    
    // Mask Composite
    'mask-composite': () => {
      return `mask-composite: ${value};`;
    },
    
    // Mask Image
    'mask-image': () => {
      const cssValue = isArbitrary ? value : `url(${value})`;
      return `mask-image: ${cssValue};`;
    },
    
    // Mask Mode
    'mask-mode': () => {
      return `mask-mode: ${value};`;
    },
    
    // Mask Origin
    'mask-origin': () => {
      const originMap = {
        'border': 'border-box',
        'padding': 'padding-box',
        'content': 'content-box'
      };
      const cssValue = originMap[value] || value;
      return `mask-origin: ${cssValue};`;
    },
    
    // Mask Position
    'mask-position': () => {
      const positionMap = {
        'center': 'center',
        'top': 'top',
        'bottom': 'bottom',
        'left': 'left',
        'right': 'right',
        'top-left': 'top left',
        'top-right': 'top right',
        'bottom-left': 'bottom left',
        'bottom-right': 'bottom right'
      };
      const cssValue = isArbitrary ? value.replace(/_/g, ' ') : (positionMap[value] || value);
      return `mask-position: ${cssValue};`;
    },
    
    // Mask Repeat
    'mask-repeat': () => {
      const repeatMap = {
        'repeat': 'repeat',
        'no-repeat': 'no-repeat',
        'repeat-x': 'repeat-x',
        'repeat-y': 'repeat-y',
        'round': 'round',
        'space': 'space'
      };
      const cssValue = repeatMap[value] || value;
      return `mask-repeat: ${cssValue};`;
    },
    
    // Mask Size
    'mask-size': () => {
      const sizeMap = {
        'auto': 'auto',
        'cover': 'cover',
        'contain': 'contain'
      };
      const cssValue = isArbitrary ? value.replace(/_/g, ' ') : (sizeMap[value] || value);
      return `mask-size: ${cssValue};`;
    },
    
    // Mask Type
    'mask-type': () => {
      return `mask-type: ${value};`;
    },
    
    // Content
    'content': () => {
      return `content: "${value}";`;
    }
  };
  
  const generator = rules[property];
  return generator ? generator() : '';
}

/**
 * Generate a single CSS rule from a token
 * @param {Object} token - Token object
 * @param {Object} config - Configuration object
 * @param {boolean} skipDarkWrapper - If true, don't add dark mode wrapper (used when generating inside dark block)
 */
export function generateRule(token, config, skipDarkWrapper = false) {
  const { raw, attrType, breakpoint, state } = token;
  
  let cssDeclaration = '';
  
  switch (attrType) {
    case 'layout':
      cssDeclaration = generateLayoutRule(token, config);
      break;
    case 'space':
      cssDeclaration = generateSpaceRule(token, config);
      break;
    case 'visual':
      cssDeclaration = generateVisualRule(token, config);
      break;
  }
  
  if (!cssDeclaration) return '';
  
  // Build selector
  let selector = `[${attrType}~="${raw}"]`;
  
  // Add state pseudo-class (but not for 'dark' - it's handled separately)
  if (state && state !== 'dark') {
    selector += `:${state}`;
  }
  
  return `${selector} { ${cssDeclaration} }\n`;
}

/**
 * Get the dark mode selector based on config
 * @param {Object} config - Configuration object
 * @returns {string} - Dark mode selector
 */
function getDarkModeSelector(config) {
  const darkMode = config.darkMode || 'media';
  
  if (Array.isArray(darkMode)) {
    // Custom selector: ['selector', '.my-dark-class'] or ['selector', '[data-theme="dark"]']
    return darkMode[1] || '.dark';
  }
  
  if (darkMode === 'selector') {
    return '.dark';
  }
  
  // 'media' strategy - handled separately
  return null;
}

/**
 * Generate complete CSS from tokens
 * @param {Array} tokens - Array of token objects
 * @param {Object} config - Configuration object
 * @returns {string} - Complete CSS string
 */
export function generateCSS(tokens, config) {
  let css = '';
  
  // Add CSS variables
  css += generateCSSVariables(config);
  
  // Add Preflight base styles if enabled (default: true)
  if (config.preflight !== false) {
    css += generatePreflight(config);
  }
  
  css += `/* SenangStart CSS - Utility Classes */
`;
  
  // Group tokens by breakpoint and dark mode
  const baseTokens = [];
  const darkTokens = [];
  const breakpointTokens = {
    mob: [],
    tab: [],
    lap: [],
    desk: []
  };
  
  for (const token of tokens) {
    if (token.state === 'dark') {
      darkTokens.push(token);
    } else if (token.breakpoint) {
      breakpointTokens[token.breakpoint]?.push(token);
    } else {
      baseTokens.push(token);
    }
  }
  
  // Generate base rules
  for (const token of baseTokens) {
    css += generateRule(token, config);
  }
  
  // Generate responsive rules
  const { screens } = config.theme;
  
  for (const [bp, bpTokens] of Object.entries(breakpointTokens)) {
    if (bpTokens.length > 0) {
      css += `\n@media (min-width: ${screens[bp]}) {\n`;
      for (const token of bpTokens) {
        css += '  ' + generateRule(token, config);
      }
      css += '}\n';
    }
  }
  
  // Generate dark mode rules
  if (darkTokens.length > 0) {
    const darkMode = config.darkMode || 'media';
    const darkSelector = getDarkModeSelector(config);
    
    if (darkMode === 'media') {
      // Media query strategy
      css += `\n/* Dark Mode (prefers-color-scheme) */\n`;
      css += `@media (prefers-color-scheme: dark) {\n`;
      for (const token of darkTokens) {
        css += '  ' + generateRule(token, config, true);
      }
      css += '}\n';
    } else {
      // Selector strategy (.dark class or custom selector)
      css += `\n/* Dark Mode (${darkSelector}) */\n`;
      for (const token of darkTokens) {
        const baseRule = generateRule(token, config, true);
        // Wrap selector with dark parent
        const wrappedRule = baseRule.replace(/^(\[[^\]]+\])/, `${darkSelector} $1`);
        css += wrappedRule;
      }
    }
  }
  
  return css;
}

/**
 * Minify CSS by removing whitespace and comments
 */
export function minifyCSS(css) {
  return css
    .replace(/\/\*[\s\S]*?\*\//g, '') // Remove comments
    .replace(/\s+/g, ' ')             // Collapse whitespace
    .replace(/\s*{\s*/g, '{')         // Remove space around {
    .replace(/\s*}\s*/g, '}')         // Remove space around }
    .replace(/\s*;\s*/g, ';')         // Remove space around ;
    .replace(/\s*:\s*/g, ':')         // Remove space around :
    .trim();
}

export default { generateCSS, generateCSSVariables, generateRule, minifyCSS };
