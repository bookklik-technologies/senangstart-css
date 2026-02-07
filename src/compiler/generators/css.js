/**
 * SenangStart CSS - CSS Generator
 * Generates CSS from tokens using attribute selectors
 */

import { generatePreflight } from './preflight.js';
import { sanitizeValue } from '../../utils/common.js';
import { buildAllMaps } from '../../definitions/index.js';

// Initialize maps from definitions - Single Source of Truth
const { layoutMap, typographyKeywords } = buildAllMaps();

// Helper to sanitize arbitrary values using common utility
function sanitizeArbitraryValue(value) {
  return sanitizeValue(value);
}

// CSS color keywords that should be passed through directly without var() wrapping
const CSS_COLOR_KEYWORDS = ['transparent', 'currentColor', 'inherit', 'initial', 'unset'];

/**
 * Resolve a color value to CSS
 * @param {string} value - The color value
 * @param {boolean} isArbitrary - Whether the value is arbitrary (wrapped in [])
 * @returns {string} - The resolved CSS color value
 */
function resolveColorValue(value, isArbitrary) {
  if (isArbitrary) {
    return value;
  }
  // Check if it's a CSS keyword that should pass through directly
  if (CSS_COLOR_KEYWORDS.includes(value)) {
    return value;
  }
  // Otherwise wrap in CSS variable
  return `var(--c-${value})`;
}

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
  
  // Font size line-height variables (paired with font sizes)
  if (theme.fontSizeLineHeight) {
    for (const [key, value] of Object.entries(theme.fontSizeLineHeight)) {
      css += `  --font-lh-${key}: ${value};\n`;
    }
  }
  
  // Font weight variables
  for (const [key, value] of Object.entries(theme.fontWeight)) {
    css += `  --fw-${key}: ${value};\n`;
  }
  
  // Color variables
  for (const [key, value] of Object.entries(theme.colors)) {
    css += `  --c-${key}: ${value};\n`;
  }
  
  // Placeholder color variable
  if (theme.placeholder) {
    css += `  --placeholder-color: ${theme.placeholder};\n`;
  } else {
    css += '  --placeholder-color: #9ca3af;\n';
  }
  
  // Gradient direction variables for better gradient support
  css += '  --gradient-from: transparent;\n';
  css += '  --gradient-via: transparent;\n';
  css += '  --gradient-to: transparent;\n';
  css += '  --gradient-stops: var(--gradient-from), var(--gradient-via), var(--gradient-to);\n';
  
  // Z-index variables
  for (const [key, value] of Object.entries(theme.zIndex)) {
    css += `  --z-${key}: ${value};\n`;
  }
  
  // ============================================
  // TAILWIND SCALE COMPATIBILITY (tw-* prefix)
  // ============================================
  
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
    css += `  --tw-${key.replace(/\./g, '\\\\.')}: ${value};\n`;
  }

  
  // Tailwind Border Radius Scale
  const twRadius = {
    'none': '0px', 'sm': '0.125rem', 'DEFAULT': '0.25rem', 'md': '0.375rem',
    'lg': '0.5rem', 'xl': '0.75rem', '2xl': '1rem', '3xl': '1.5rem', 'full': '9999px'
  };
  for (const [key, value] of Object.entries(twRadius)) {
    css += `  --r-tw-${key}: ${value};\n`;
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
    css += `  --shadow-tw-${key}: ${value};\n`;
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
  
  // Divide reverse variables (used by divide-x:reverse and divide-y:reverse)
  css += '  --ss-divide-x-reverse: 0;\n';
  css += '  --ss-divide-y-reverse: 0;\n';
  
  // Ring utility variables
  css += '  --ring-inset: 0 0 0 0;\n';
  
  css += '}\n\n';
  return css;
}

/**
 * Generate CSS rule for a layout token
 */
function generateLayoutRule(token, config) {
  const { property, value, isArbitrary } = token;
  
  // Check for simple layout keywords first (property === value means it's a keyword like 'flex', 'grid', etc.)
  // layoutMap is now imported from definitions
  if (property === value && layoutMap[property]) {
    return layoutMap[property];
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
  
  // Content Visibility
  if (property === 'content-visibility') {
    return `content-visibility: ${value};`;
  }
  
  // Contain
  if (property === 'contain') {
    const containMap = {
      'none': 'none',
      'strict': 'strict',
      'content': 'content',
      'size': 'size',
      'layout': 'layout',
      'style': 'style',
      'paint': 'paint'
    };
    const cssValue = isArbitrary ? value : (containMap[value] || value);
    return `contain: ${cssValue};`;
  }
  
  // Writing Mode (for RTL support)
  if (property === 'writing') {
    const writingMap = {
      'horizontal-tb': 'horizontal-tb',
      'vertical-rl': 'vertical-rl',
      'vertical-lr': 'vertical-lr'
    };
    const cssValue = isArbitrary ? value.replace(/_/g, ' ') : (writingMap[value] || value);
    return `writing-mode: ${cssValue};`;
  }
  
  // Percentage adjectives for positioning utilities
  const positioningPercentages = {
    'full': '100%',
    'half': '50%',
    'third': '33.333333%',
    'third-2x': '66.666667%',
    'quarter': '25%',
    'quarter-2x': '50%',
    'quarter-3x': '75%',
    // Keep fractional values for backwards compatibility
    '1/1': '100%',
    '1/2': '50%',
    '1/3': '33.333333%',
    '2/3': '66.666667%',
    '1/4': '25%',
    '2/4': '50%',
    '3/4': '75%'
  };
  
  // Helper function to resolve positioning value
  const resolvePositioningValue = (val, arb) => {
    if (arb) return val;
    if (!val || val === '0') return '0';
    // Check for negative percentage adjective
    if (val.startsWith('-')) {
      const positiveVal = val.substring(1);
      if (positioningPercentages[positiveVal]) {
        return `-${positioningPercentages[positiveVal]}`;
      }
    }
    // Check for percentage adjective
    if (positioningPercentages[val]) {
      return positioningPercentages[val];
    }
    return `var(--s-${val})`;
  };
  
  // Inset (all sides)
  if (property === 'inset') {
    const cssValue = resolvePositioningValue(value, isArbitrary);
    return `inset: ${cssValue};`;
  }
  
  // Individual positioning: top, right, bottom, left
  if (['top', 'right', 'bottom', 'left'].includes(property)) {
    const cssValue = resolvePositioningValue(value, isArbitrary);
    return `${property}: ${cssValue};`;
  }
  
  // Inset X (left + right)
  if (property === 'inset-x') {
    const cssValue = resolvePositioningValue(value, isArbitrary);
    return `left: ${cssValue}; right: ${cssValue};`;
  }
  
  // Inset Y (top + bottom)
  if (property === 'inset-y') {
    const cssValue = resolvePositioningValue(value, isArbitrary);
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
      const sanitized = sanitizeArbitraryValue(value);
      return `grid-template-columns: ${sanitized.replace(/_/g, ' ')};`;
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
      const sanitized = sanitizeArbitraryValue(value);
      return `grid-template-rows: ${sanitized.replace(/_/g, ' ')};`;
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
  
  // Border Spacing (for tables)
  if (property === 'border-spacing') {
    const cssValue = isArbitrary ? value : `var(--s-${value})`;
    return `border-spacing: ${cssValue};`;
  }
  
  // Border Spacing X (horizontal)
  if (property === 'border-spacing-x') {
    const cssValue = isArbitrary ? value : `var(--s-${value})`;
    return `border-spacing: ${cssValue} 0;`;
  }
  
  // Border Spacing Y (vertical)
  if (property === 'border-spacing-y') {
    const cssValue = isArbitrary ? value : `var(--s-${value})`;
    return `border-spacing: 0 ${cssValue};`;
  }
  
  return layoutMap[property] || '';
}

/**
 * Generate CSS rule for a space token
 */
function generateSpaceRule(token, config) {
  const { property, value, isArbitrary } = token;
  
  // Handle special sizing values for width/height utilities
  const sizingSpecialValues = {
    'min': 'min-content',
    'max': 'max-content',
    'fit': 'fit-content'
  };
  
  // Check if this is a sizing utility with a special value
  const sizingProps = ['w', 'h', 'min-w', 'max-w', 'min-h', 'max-h'];
  if (sizingProps.includes(property) && sizingSpecialValues[value]) {
    const cssVal = sizingSpecialValues[value];
    const propMap = {
      'w': `width: ${cssVal};`,
      'h': `height: ${cssVal};`,
      'min-w': `min-width: ${cssVal};`,
      'max-w': `max-width: ${cssVal};`,
      'min-h': `min-height: ${cssVal};`,
      'max-h': `max-height: ${cssVal};`
    };
    return propMap[property] || '';
  }
  
  // Percentage adjectives for sizing utilities (human-readable alternatives to fractions)
  const percentageAdjectives = {
    'full': '100%',
    'half': '50%',
    'third': '33.333333%',
    'third-2x': '66.666667%',
    'quarter': '25%',
    'quarter-2x': '50%',
    'quarter-3x': '75%',
    // Keep fractional values for backwards compatibility
    '1/1': '100%',
    '1/2': '50%',
    '1/3': '33.333333%',
    '2/3': '66.666667%',
    '1/4': '25%',
    '2/4': '50%',
    '3/4': '75%'
  };
  
  // Check if this is a sizing utility with a percentage adjective
  if (sizingProps.includes(property) && percentageAdjectives[value]) {
    const cssVal = percentageAdjectives[value];
    const propMap = {
      'w': `width: ${cssVal};`,
      'h': `height: ${cssVal};`,
      'min-w': `min-width: ${cssVal};`,
      'max-w': `max-width: ${cssVal};`,
      'min-h': `min-height: ${cssVal};`,
      'max-h': `max-height: ${cssVal};`
    };
    return propMap[property] || '';
  }
  
  // Determine the CSS value
  let cssValue;
  if (isArbitrary) {
    cssValue = value;
  } else {
    // Check for negative value
    const isNegative = value && value.startsWith('-');
    const cleanValue = isNegative ? value.substring(1) : (value || '');
    
    let baseValue;
    if (cleanValue.startsWith('tw-')) {
      const twValue = cleanValue.slice(3); // Remove 'tw-' prefix
      baseValue = `var(--tw-${twValue.replace(/\./g, '\\\\.')})`;
    } else {
      baseValue = `var(--s-${cleanValue})`;
    }
    
    // Apply negative calculation if needed
    cssValue = isNegative ? `calc(${baseValue} * -1)` : baseValue;
  }
  
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
  // Check static keywords first (imported from definitions)
  if (typographyKeywords[property]) {
    return typographyKeywords[property];
  }
  
  const rules = {
    // Background Color
    'bg': () => {
      const cssValue = resolveColorValue(value, isArbitrary);
      return `background-color: ${cssValue};`;
    },
    
    // Background Image
    'bg-image': () => {
      if (!value || value === 'none') return 'background-image: none;';
      
      // Handle gradient definitions
      if (value.startsWith('gradient-to-')) {
        const directionMap = {
          't': 'to top',
          'tr': 'to top right',
          'r': 'to right',
          'br': 'to bottom right',
          'b': 'to bottom',
          'bl': 'to bottom left',
          'l': 'to left',
          'tl': 'to top left'
        };
        const directionCode = value.replace('gradient-to-', '');
        const direction = directionMap[directionCode];
        
        if (direction) {
          return `background-image: linear-gradient(${direction}, var(--ss-gradient-stops, transparent));`;
        }
      }
      
      const cssValue = isArbitrary ? sanitizeArbitraryValue(`url(${value})`) : `url(${value})`;
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

    // Gradient Color Stops
    'from': () => {
      const cssValue = resolveColorValue(value, isArbitrary);
      return `--ss-gradient-from: ${cssValue}; --ss-gradient-to: rgb(255 255 255 / 0); --ss-gradient-stops: var(--ss-gradient-from), var(--ss-gradient-to);`;
    },
    
    'via': () => {
      const cssValue = resolveColorValue(value, isArbitrary);
      return `--ss-gradient-to: rgb(255 255 255 / 0); --ss-gradient-stops: var(--ss-gradient-from), ${cssValue}, var(--ss-gradient-to);`;
    },
    
    'to': () => {
      const cssValue = resolveColorValue(value, isArbitrary);
      return `--ss-gradient-to: ${cssValue};`;
    },
    
    // Text color
    'text': () => {
      if (['left', 'center', 'right', 'justify'].includes(value)) {
        return `text-align: ${value};`;
      }
      const cssValue = resolveColorValue(value, isArbitrary);
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
    
    // Font size (with paired line-height)
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
      const cssValue = resolveColorValue(value, isArbitrary);
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
      const cssValue = resolveColorValue(value, isArbitrary);
      return `border-color: ${cssValue}; border-style: solid;`;
    },
    
    // Border color - directional
    'border-t': () => {
      const cssValue = resolveColorValue(value, isArbitrary);
      return `border-top-color: ${cssValue}; border-top-style: solid;`;
    },
    'border-b': () => {
      const cssValue = resolveColorValue(value, isArbitrary);
      return `border-bottom-color: ${cssValue}; border-bottom-style: solid;`;
    },
    'border-l': () => {
      const cssValue = resolveColorValue(value, isArbitrary);
      return `border-left-color: ${cssValue}; border-left-style: solid;`;
    },
    'border-r': () => {
      const cssValue = resolveColorValue(value, isArbitrary);
      return `border-right-color: ${cssValue}; border-right-style: solid;`;
    },
    'border-x': () => {
      const cssValue = resolveColorValue(value, isArbitrary);
      return `border-left-color: ${cssValue}; border-right-color: ${cssValue}; border-left-style: solid; border-right-style: solid;`;
    },
    'border-y': () => {
      const cssValue = resolveColorValue(value, isArbitrary);
      return `border-top-color: ${cssValue}; border-bottom-color: ${cssValue}; border-top-style: solid; border-bottom-style: solid;`;
    },
    
    // Border width
    'border-w': () => {
      const cssValue = isArbitrary ? value : `var(--s-${value})`;
      return `border-width: ${cssValue};`;
    },
    
    // Border width - directional  
    'border-t-w': () => {
      const cssValue = isArbitrary ? value : `var(--s-${value})`;
      return `border-top-width: ${cssValue};`;
    },
    'border-b-w': () => {
      const cssValue = isArbitrary ? value : `var(--s-${value})`;
      return `border-bottom-width: ${cssValue};`;
    },
    'border-l-w': () => {
      const cssValue = isArbitrary ? value : `var(--s-${value})`;
      return `border-left-width: ${cssValue};`;
    },
    'border-r-w': () => {
      const cssValue = isArbitrary ? value : `var(--s-${value})`;
      return `border-right-width: ${cssValue};`;
    },
    'border-x-w': () => {
      const cssValue = isArbitrary ? value : `var(--s-${value})`;
      return `border-left-width: ${cssValue}; border-right-width: ${cssValue};`;
    },
    'border-y-w': () => {
      const cssValue = isArbitrary ? value : `var(--s-${value})`;
      return `border-top-width: ${cssValue}; border-bottom-width: ${cssValue};`;
    },
    
    // Border style
    'border-style': () => {
      return `border-style: ${value};`;
    },
    
    // Border radius
    'rounded': () => {
      return `border-radius: var(--r-${value});`;
    },
    
    // Directional border radius
    'rounded-t': () => {
      const cssValue = isArbitrary ? value : `var(--r-${value})`;
      return `border-top-left-radius: ${cssValue}; border-top-right-radius: ${cssValue};`;
    },
    'rounded-b': () => {
      const cssValue = isArbitrary ? value : `var(--r-${value})`;
      return `border-bottom-left-radius: ${cssValue}; border-bottom-right-radius: ${cssValue};`;
    },
    'rounded-l': () => {
      const cssValue = isArbitrary ? value : `var(--r-${value})`;
      return `border-top-left-radius: ${cssValue}; border-bottom-left-radius: ${cssValue};`;
    },
    'rounded-r': () => {
      const cssValue = isArbitrary ? value : `var(--r-${value})`;
      return `border-top-right-radius: ${cssValue}; border-bottom-right-radius: ${cssValue};`;
    },
    'rounded-tl': () => {
      const cssValue = isArbitrary ? value : `var(--r-${value})`;
      return `border-top-left-radius: ${cssValue};`;
    },
    'rounded-tr': () => {
      const cssValue = isArbitrary ? value : `var(--r-${value})`;
      return `border-top-right-radius: ${cssValue};`;
    },
    'rounded-bl': () => {
      const cssValue = isArbitrary ? value : `var(--r-${value})`;
      return `border-bottom-left-radius: ${cssValue};`;
    },
    'rounded-br': () => {
      const cssValue = isArbitrary ? value : `var(--r-${value})`;
      return `border-bottom-right-radius: ${cssValue};`;
    },
    
    // =====================
    // DIVIDE UTILITIES
    // =====================
    
    // Divide color - all sides
    'divide': () => {
      const cssValue = resolveColorValue(value, isArbitrary);
      return `border-color: ${cssValue}; border-style: solid;`;
    },
    
    // Divide color - directional
    'divide-x': () => {
      // Handle divide-x:reverse specially
      if (value === 'reverse') {
        return '--ss-divide-x-reverse: 1;';
      }
      const cssValue = resolveColorValue(value, isArbitrary);
      // Apply to both to ensure color is inherited, width will control visibility
      return `border-left-color: ${cssValue}; border-right-color: ${cssValue}; border-left-style: solid; border-right-style: solid;`;
    },
    'divide-y': () => {
      // Handle divide-y:reverse specially
      if (value === 'reverse') {
        return '--ss-divide-y-reverse: 1;';
      }
      const cssValue = resolveColorValue(value, isArbitrary);
      // Apply to both to ensure color is inherited, width will control visibility
      return `border-top-color: ${cssValue}; border-bottom-color: ${cssValue}; border-top-style: solid; border-bottom-style: solid;`;
    },
    
    // Divide width - all sides
    'divide-w': () => {
      const cssValue = isArbitrary ? value : `var(--s-${value})`;
      return `border-top-width: calc(${cssValue} * (1 - var(--ss-divide-y-reverse))); border-bottom-width: calc(${cssValue} * var(--ss-divide-y-reverse)); border-left-width: calc(${cssValue} * (1 - var(--ss-divide-x-reverse))); border-right-width: calc(${cssValue} * var(--ss-divide-x-reverse));`;
    },
    
    // Divide width - directional
    'divide-x-w': () => {
      const cssValue = isArbitrary ? value : `var(--s-${value})`;
      return `border-right-width: calc(${cssValue} * var(--ss-divide-x-reverse)); border-left-width: calc(${cssValue} * (1 - var(--ss-divide-x-reverse)));`;
    },
    'divide-y-w': () => {
      const cssValue = isArbitrary ? value : `var(--s-${value})`;
      return `border-bottom-width: calc(${cssValue} * var(--ss-divide-y-reverse)); border-top-width: calc(${cssValue} * (1 - var(--ss-divide-y-reverse)));`;
    },
    
    // Divide style
    'divide-style': () => {
      return `border-style: ${value};`;
    },
    
    // Outline Width
    'outline-w': () => {
      const cssValue = isArbitrary ? value : `var(--s-${value})`;
      return `outline-width: ${cssValue};`;
    },
    
    // Outline Color
    'outline': () => {
      const cssValue = resolveColorValue(value, isArbitrary);
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
    
    // Ring Width
    'ring-w': () => {
      const cssValue = isArbitrary ? value : `var(--s-${value})`;
      return `--ss-ring-width: ${cssValue};`;
    },
    
    // Ring Color
    'ring-color': () => {
      const cssValue = resolveColorValue(value, isArbitrary);
      return `--ss-ring-color: ${cssValue};`;
    },
    
    // Ring Offset Width
    'ring-offset': () => {
      const cssValue = isArbitrary ? value : `var(--s-${value})`;
      return `--ss-ring-offset-width: ${cssValue};`;
    },
    
    // Ring Offset Color
    'ring-offset-color': () => {
      const cssValue = resolveColorValue(value, isArbitrary);
      return `--ss-ring-offset-color: ${cssValue};`;
    },
    
    // Ring (Main utility)
    'ring': () => {
      if (value === 'none') {
        return 'box-shadow: 0 0 #0000;';
      }
      
      const ringPresets = {
        'thin': '1px',
        'regular': '2px',
        'small': '4px',
        'medium': '6px',
        'big': '8px'
      };
      
      const width = isArbitrary ? value : (ringPresets[value] || (parseInt(value) ? `${value}px` : `var(--s-${value})`));
      
      // Set both the variable and the box-shadow that uses it
      // This allows ring:[size] to work on its own or with ring-color:[color]
      return `--ss-ring-width: ${width}; box-shadow: var(--ring-inset) 0 0 0 calc(var(--ss-ring-width) + var(--ss-ring-offset-width, 0px)) var(--c-primary);`;
    },
    
    // Box shadow
    'shadow': () => {
      return `box-shadow: var(--shadow-${value});`;
    },
    
    // Opacity
    'opacity': () => {
      // Convert percentage (0-100) to decimal (0-1)
      const numValue = parseInt(value, 10);
      if (!isNaN(numValue) && numValue >= 0 && numValue <= 100) {
        return `opacity: ${numValue / 100};`;
      }
      // For arbitrary values or already decimal, pass through
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
      const sanitizedUrl = sanitizeArbitraryValue(value);
      const cssValue = isArbitrary ? `url(${sanitizedUrl})` : `url(${value})`;
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
      const sanitizedValue = sanitizeArbitraryValue(value).replace(/"/g, '\\"');
      return `content: "${sanitizedValue}";`;
    },
    
    // Filter utilities
    'blur': () => {
      const blurScale = {
        'none': '0',
        'tiny': '2px',
        'small': '4px',
        'medium': '8px',
        'big': '12px',
        'giant': '24px',
        'vast': '48px'
      };
      const cssValue = isArbitrary ? value : (blurScale[value] || blurScale['medium']);
      return `filter: blur(${cssValue});`;
    },
    
    'brightness': () => {
      const brightnessScale = {
        'dim': 0.5,
        'dark': 0.75,
        'normal': 1,
        'bright': 1.25,
        'vivid': 1.5
      };
      const cssValue = isArbitrary ? value : (brightnessScale[value] || brightnessScale['normal']);
      return `filter: brightness(${cssValue});`;
    },
    
    'contrast': () => {
      const contrastScale = {
        'low': 0.5,
        'reduced': 0.75,
        'normal': 1,
        'high': 1.25,
        'max': 1.5
      };
      const cssValue = isArbitrary ? value : (contrastScale[value] || contrastScale['normal']);
      return `filter: contrast(${cssValue});`;
    },
    
    'drop-shadow': () => {
      const shadowPresets = {
        'none': 'none',
        'tiny': '0 1px 1px rgba(0,0,0,0.05)',
        'small': '0 1px 2px rgba(0,0,0,0.1), 0 1px 1px rgba(0,0,0,0.06)',
        'medium': '0 4px 3px rgba(0,0,0,0.07), 0 2px 2px rgba(0,0,0,0.06)',
        'big': '0 10px 8px rgba(0,0,0,0.04), 0 4px 3px rgba(0,0,0,0.1)',
        'giant': '0 20px 13px rgba(0,0,0,0.03), 0 8px 5px rgba(0,0,0,0.08)'
      };
      const cssValue = isArbitrary ? value.replace(/_/g, ' ') : (shadowPresets[value] || shadowPresets['medium']);
      return `filter: drop-shadow(${cssValue});`;
    },
    
    'grayscale': () => {
      const grayscaleScale = {
        'none': '0%',
        'partial': '50%',
        'full': '100%'
      };
      const cssValue = isArbitrary ? value : (grayscaleScale[value] || grayscaleScale['full']);
      return `filter: grayscale(${cssValue});`;
    },
    
    'hue-rotate': () => {
      const cssValue = isArbitrary ? value : `${value}deg`;
      return `filter: hue-rotate(${cssValue});`;
    },
    
    'invert': () => {
      const invertScale = {
        'none': '0%',
        'partial': '50%',
        'full': '100%'
      };
      const cssValue = isArbitrary ? value : (invertScale[value] || invertScale['full']);
      return `filter: invert(${cssValue});`;
    },
    
    'saturate': () => {
      const saturateScale = {
        'none': 0,
        'low': 0.5,
        'normal': 1,
        'high': 1.5,
        'vivid': 2
      };
      const cssValue = isArbitrary ? value : (saturateScale[value] || saturateScale['normal']);
      return `filter: saturate(${cssValue});`;
    },
    
    'sepia': () => {
      const sepiaScale = {
        'none': '0%',
        'partial': '50%',
        'full': '100%'
      };
      const cssValue = isArbitrary ? value : (sepiaScale[value] || sepiaScale['full']);
      return `filter: sepia(${cssValue});`;
    },
    
    // Backdrop Filter utilities
    'backdrop-blur': () => {
      const blurScale = {
        'none': '0',
        'tiny': '2px',
        'small': '4px',
        'medium': '8px',
        'big': '12px',
        'giant': '24px',
        'vast': '48px'
      };
      const cssValue = isArbitrary ? value : (blurScale[value] || blurScale['medium']);
      return `backdrop-filter: blur(${cssValue});`;
    },
    
    'backdrop-brightness': () => {
      const brightnessScale = {
        'dim': 0.5,
        'dark': 0.75,
        'normal': 1,
        'bright': 1.25,
        'vivid': 1.5
      };
      const cssValue = isArbitrary ? value : (brightnessScale[value] || brightnessScale['normal']);
      return `backdrop-filter: brightness(${cssValue});`;
    },
    
    'backdrop-contrast': () => {
      const contrastScale = {
        'low': 0.5,
        'reduced': 0.75,
        'normal': 1,
        'high': 1.25,
        'max': 1.5
      };
      const cssValue = isArbitrary ? value : (contrastScale[value] || contrastScale['normal']);
      return `backdrop-filter: contrast(${cssValue});`;
    },
    
    'backdrop-grayscale': () => {
      const grayscaleScale = {
        'none': '0%',
        'partial': '50%',
        'full': '100%'
      };
      const cssValue = isArbitrary ? value : (grayscaleScale[value] || grayscaleScale['full']);
      return `backdrop-filter: grayscale(${cssValue});`;
    },
    
    'backdrop-hue-rotate': () => {
      const cssValue = isArbitrary ? value : `${value}deg`;
      return `backdrop-filter: hue-rotate(${cssValue});`;
    },
    
    'backdrop-invert': () => {
      const invertScale = {
        'none': '0%',
        'partial': '50%',
        'full': '100%'
      };
      const cssValue = isArbitrary ? value : (invertScale[value] || invertScale['full']);
      return `backdrop-filter: invert(${cssValue});`;
    },
    
    'backdrop-opacity': () => {
      const opacityScale = {
        'invisible': 0,
        'faint': 0.25,
        'half': 0.5,
        'visible': 0.75,
        'solid': 1
      };
      const cssValue = isArbitrary ? value : (opacityScale[value] || opacityScale['solid']);
      return `backdrop-filter: opacity(${cssValue});`;
    },
    
    'backdrop-saturate': () => {
      const saturateScale = {
        'none': 0,
        'low': 0.5,
        'normal': 1,
        'high': 1.5,
        'vivid': 2
      };
      const cssValue = isArbitrary ? value : (saturateScale[value] || saturateScale['normal']);
      return `backdrop-filter: saturate(${cssValue});`;
    },
    
    'backdrop-sepia': () => {
      const sepiaScale = {
        'none': '0%',
        'partial': '50%',
        'full': '100%'
      };
      const cssValue = isArbitrary ? value : (sepiaScale[value] || sepiaScale['full']);
      return `backdrop-filter: sepia(${cssValue});`;
    },
    
    // =====================
    // TRANSITION UTILITIES
    // =====================
    
    // Transition Property
    'transition': () => {
      const transitionPresets = {
        'none': 'none',
        'all': 'all',
        'DEFAULT': 'color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter',
        'colors': 'color, background-color, border-color, text-decoration-color, fill, stroke',
        'opacity': 'opacity',
        'shadow': 'box-shadow',
        'transform': 'transform'
      };
      const prop = transitionPresets[value] || transitionPresets['DEFAULT'];
      return `transition-property: ${prop}; transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1); transition-duration: 150ms;`;
    },
    
    'transition-none': () => {
      return 'transition-property: none;';
    },
    
    // Transition Duration
    'duration': () => {
      const durationScale = {
        'instant': '75ms',
        'quick': '100ms',
        'fast': '150ms',
        'normal': '200ms',
        'slow': '300ms',
        'slower': '500ms',
        'lazy': '700ms'
      };
      const cssValue = isArbitrary ? value : (durationScale[value] || durationScale['normal']);
      return `transition-duration: ${cssValue};`;
    },
    
    // Transition Timing Function
    'ease': () => {
      const easingMap = {
        'linear': 'linear',
        'in': 'cubic-bezier(0.4, 0, 1, 1)',
        'out': 'cubic-bezier(0, 0, 0.2, 1)',
        'in-out': 'cubic-bezier(0.4, 0, 0.2, 1)'
      };
      const cssValue = isArbitrary ? value : (easingMap[value] || easingMap['in-out']);
      return `transition-timing-function: ${cssValue};`;
    },
    
    // Transition Delay
    'delay': () => {
      const delayScale = {
        'instant': '75ms',
        'quick': '100ms',
        'fast': '150ms',
        'normal': '200ms',
        'slow': '300ms',
        'slower': '500ms',
        'lazy': '700ms'
      };
      const cssValue = isArbitrary ? value : (delayScale[value] || delayScale['normal']);
      return `transition-delay: ${cssValue};`;
    },
    
    // Transition Behavior
    'transition-behavior': () => {
      return `transition-behavior: ${value};`;
    },
    
    // =====================
    // ANIMATION UTILITIES
    // =====================
    
    'animate': () => {
      const animationPresets = {
        'none': 'none',
        'spin': 'spin 1s linear infinite',
        'ping': 'ping 1s cubic-bezier(0, 0, 0.2, 1) infinite',
        'pulse': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'bounce': 'bounce 1s infinite'
      };
      const cssValue = isArbitrary ? value.replace(/_/g, ' ') : (animationPresets[value] || value);
      return `animation: ${cssValue};`;
    },
    
    // Animation Duration
    'animation-duration': () => {
      const durationScale = {
        'instant': '75ms',
        'quick': '100ms',
        'fast': '150ms',
        'normal': '200ms',
        'slow': '300ms',
        'slower': '500ms',
        'lazy': '700ms'
      };
      const cssValue = isArbitrary ? value : (durationScale[value] || durationScale['normal']);
      return `animation-duration: ${cssValue};`;
    },
    
    // Animation Delay
    'animation-delay': () => {
      const delayScale = {
        'instant': '75ms',
        'quick': '100ms',
        'fast': '150ms',
        'normal': '200ms',
        'slow': '300ms',
        'slower': '500ms',
        'lazy': '700ms'
      };
      const cssValue = isArbitrary ? value : (delayScale[value] || delayScale['normal']);
      return `animation-delay: ${cssValue};`;
    },
    
    // Animation Iteration Count
    'animation-iteration': () => {
      return `animation-iteration-count: ${value};`;
    },
    
    // Animation Direction
    'animation-direction': () => {
      return `animation-direction: ${value};`;
    },
    
    // Animation Fill Mode
    'animation-fill': () => {
      return `animation-fill-mode: ${value};`;
    },
    
    // Animation Play State
    'animation-play': () => {
      return `animation-play-state: ${value};`;
    },
    
    // =====================
    // TRANSFORM UTILITIES
    // =====================
    
    // Scale
    'scale': () => {
      const cssValue = isArbitrary ? value : (parseInt(value) / 100);
      return `transform: scale(${cssValue});`;
    },
    
    'scale-x': () => {
      const cssValue = isArbitrary ? value : (parseInt(value) / 100);
      return `transform: scaleX(${cssValue});`;
    },
    
    'scale-y': () => {
      const cssValue = isArbitrary ? value : (parseInt(value) / 100);
      return `transform: scaleY(${cssValue});`;
    },
    
    // Rotate
    'rotate': () => {
      const cssValue = isArbitrary ? value : `${value}deg`;
      return `transform: rotate(${cssValue});`;
    },
    
    // Translate
    'translate-x': () => {
      const translatePresets = {
        'full': '100%',
        'half': '50%',
        'third': '33.333333%',
        'third-2x': '66.666667%',
        'quarter': '25%',
        'quarter-2x': '50%',
        'quarter-3x': '75%',
        // Legacy fraction format (for backward compatibility)
        '1/2': '50%',
        '1/3': '33.333333%',
        '2/3': '66.666667%',
        '1/4': '25%',
        '3/4': '75%',
        // Negatives (prefixed with -)
        '-full': '-100%',
        '-half': '-50%',
        '-third': '-33.333333%',
        '-third-2x': '-66.666667%',
        '-quarter': '-25%',
        '-quarter-2x': '-50%',
        '-quarter-3x': '-75%',
        '-1/2': '-50%',
        '-1/3': '-33.333333%',
        '-2/3': '-66.666667%',
        '-1/4': '-25%',
        '-3/4': '-75%'
      };
      const cssValue = isArbitrary ? value : (translatePresets[value] || `var(--s-${value})`);
      return `transform: translateX(${cssValue});`;
    },
    
    'translate-y': () => {
      const translatePresets = {
        'full': '100%',
        'half': '50%',
        'third': '33.333333%',
        'third-2x': '66.666667%',
        'quarter': '25%',
        'quarter-2x': '50%',
        'quarter-3x': '75%',
        // Legacy fraction format (for backward compatibility)
        '1/2': '50%',
        '1/3': '33.333333%',
        '2/3': '66.666667%',
        '1/4': '25%',
        '3/4': '75%',
        // Negatives (prefixed with -)
        '-full': '-100%',
        '-half': '-50%',
        '-third': '-33.333333%',
        '-third-2x': '-66.666667%',
        '-quarter': '-25%',
        '-quarter-2x': '-50%',
        '-quarter-3x': '-75%',
        '-1/2': '-50%',
        '-1/3': '-33.333333%',
        '-2/3': '-66.666667%',
        '-1/4': '-25%',
        '-3/4': '-75%'
      };
      const cssValue = isArbitrary ? value : (translatePresets[value] || `var(--s-${value})`);
      return `transform: translateY(${cssValue});`;
    },
    
    // Skew
    'skew-x': () => {
      const cssValue = isArbitrary ? value : `${value}deg`;
      return `transform: skewX(${cssValue});`;
    },
    
    'skew-y': () => {
      const cssValue = isArbitrary ? value : `${value}deg`;
      return `transform: skewY(${cssValue});`;
    },
    
    '-skew-x': () => {
      const cssValue = isArbitrary ? `-${value}` : `-${value}deg`;
      return `transform: skewX(${cssValue});`;
    },
    
    '-skew-y': () => {
      const cssValue = isArbitrary ? `-${value}` : `-${value}deg`;
      return `transform: skewY(${cssValue});`;
    },
    
    // 3D Rotation (Rotate X/Y/Z)
    'rotate-x': () => {
      const cssValue = isArbitrary ? value : `${value}deg`;
      return `transform: rotateX(${cssValue});`;
    },
    
    'rotate-y': () => {
      const cssValue = isArbitrary ? value : `${value}deg`;
      return `transform: rotateY(${cssValue});`;
    },
    
    'rotate-z': () => {
      const cssValue = isArbitrary ? value : `${value}deg`;
      return `transform: rotateZ(${cssValue});`;
    },
    
    // 3D Translation (Translate Z)
    'translate-z': () => {
      const translatePresets = {
        'near': '50px',
        'far': '-50px',
        '0': '0'
      };
      const cssValue = isArbitrary ? value : (translatePresets[value] || `var(--s-${value})`);
      return `transform: translateZ(${cssValue});`;
    },
    
    // Transform Origin
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
    
    // Transform Style (for 3D transforms)
    'transform-style': () => {
      return `transform-style: ${value};`;
    },
    
    // Backface Visibility
    'backface': () => {
      return `backface-visibility: ${value};`;
    },
    
    // Perspective
    'perspective': () => {
      const perspectivePresets = {
        'none': 'none',
        'small': '250px',
        'medium': '500px',
        'big': '750px',
        'giant': '1000px',
        'vast': '1500px'
      };
      const cssValue = isArbitrary ? value : (perspectivePresets[value] || perspectivePresets['medium']);
      return `perspective: ${cssValue};`;
    },
    
    // Perspective Origin
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
    
    // =====================
    // INTERACTIVITY UTILITIES
    // =====================
    
    // Accent Color
    'accent': () => {
      const cssValue = isArbitrary ? value : `var(--c-${value})`;
      return `accent-color: ${cssValue};`;
    },
    
    // Appearance
    'appearance': () => {
      return `appearance: ${value};`;
    },
    
    // Caret Color
    'caret': () => {
      const cssValue = isArbitrary ? value : `var(--c-${value})`;
      return `caret-color: ${cssValue};`;
    },
    
    // Color Scheme
    'color-scheme': () => {
      return `color-scheme: ${value};`;
    },
    
    // Cursor
    'cursor': () => {
      return `cursor: ${value};`;
    },
    
    // Field Sizing
    'field-sizing': () => {
      return `field-sizing: ${value};`;
    },
    
    // Pointer Events
    'pointer-events': () => {
      return `pointer-events: ${value};`;
    },
    
    // Resize
    'resize': () => {
      const resizeMap = {
        'none': 'none',
        'both': 'both',
        'x': 'horizontal',
        'y': 'vertical'
      };
      const cssValue = resizeMap[value] || value;
      return `resize: ${cssValue};`;
    },
    
    // Scroll Behavior
    'scroll': () => {
      return `scroll-behavior: ${value};`;
    },
    
    // Scroll Margin
    'scroll-m': () => {
      const cssValue = isArbitrary ? value : `var(--s-${value})`;
      return `scroll-margin: ${cssValue};`;
    },
    'scroll-m-t': () => {
      const cssValue = isArbitrary ? value : `var(--s-${value})`;
      return `scroll-margin-top: ${cssValue};`;
    },
    'scroll-m-r': () => {
      const cssValue = isArbitrary ? value : `var(--s-${value})`;
      return `scroll-margin-right: ${cssValue};`;
    },
    'scroll-m-b': () => {
      const cssValue = isArbitrary ? value : `var(--s-${value})`;
      return `scroll-margin-bottom: ${cssValue};`;
    },
    'scroll-m-l': () => {
      const cssValue = isArbitrary ? value : `var(--s-${value})`;
      return `scroll-margin-left: ${cssValue};`;
    },
    'scroll-m-x': () => {
      const cssValue = isArbitrary ? value : `var(--s-${value})`;
      return `scroll-margin-left: ${cssValue}; scroll-margin-right: ${cssValue};`;
    },
    'scroll-m-y': () => {
      const cssValue = isArbitrary ? value : `var(--s-${value})`;
      return `scroll-margin-top: ${cssValue}; scroll-margin-bottom: ${cssValue};`;
    },
    
    // Scroll Padding
    'scroll-p': () => {
      const cssValue = isArbitrary ? value : `var(--s-${value})`;
      return `scroll-padding: ${cssValue};`;
    },
    'scroll-p-t': () => {
      const cssValue = isArbitrary ? value : `var(--s-${value})`;
      return `scroll-padding-top: ${cssValue};`;
    },
    'scroll-p-r': () => {
      const cssValue = isArbitrary ? value : `var(--s-${value})`;
      return `scroll-padding-right: ${cssValue};`;
    },
    'scroll-p-b': () => {
      const cssValue = isArbitrary ? value : `var(--s-${value})`;
      return `scroll-padding-bottom: ${cssValue};`;
    },
    'scroll-p-l': () => {
      const cssValue = isArbitrary ? value : `var(--s-${value})`;
      return `scroll-padding-left: ${cssValue};`;
    },
    'scroll-p-x': () => {
      const cssValue = isArbitrary ? value : `var(--s-${value})`;
      return `scroll-padding-left: ${cssValue}; scroll-padding-right: ${cssValue};`;
    },
    'scroll-p-y': () => {
      const cssValue = isArbitrary ? value : `var(--s-${value})`;
      return `scroll-padding-top: ${cssValue}; scroll-padding-bottom: ${cssValue};`;
    },
    
    // Scroll Snap Align
    'snap-align': () => {
      return `scroll-snap-align: ${value};`;
    },
    
    // Scroll Snap Stop
    'snap-stop': () => {
      return `scroll-snap-stop: ${value};`;
    },
    
    // Scroll Snap Type
    'snap': () => {
      const snapMap = {
        'none': 'none',
        'x': 'x mandatory',
        'x-proximity': 'x proximity',
        'y': 'y mandatory',
        'y-proximity': 'y proximity',
        'both': 'both mandatory',
        'both-proximity': 'both proximity'
      };
      const cssValue = snapMap[value] || value;
      return `scroll-snap-type: ${cssValue};`;
    },
    
    // Touch Action
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
      const cssValue = touchMap[value] || value;
      return `touch-action: ${cssValue};`;
    },
    
    // User Select
    'select': () => {
      return `user-select: ${value};`;
    },
    
    // Will Change
    'will-change': () => {
      const willChangeMap = {
        'auto': 'auto',
        'scroll': 'scroll-position',
        'contents': 'contents',
        'transform': 'transform',
        'opacity': 'opacity'
      };
      const cssValue = willChangeMap[value] || value;
      return `will-change: ${cssValue};`;
    },
    
    // =====================
    // SVG UTILITIES
    // =====================
    
    // Fill
    'fill': () => {
      if (value === 'none') {
        return 'fill: none;';
      }
      if (value === 'current') {
        return 'fill: currentColor;';
      }
      const cssValue = isArbitrary ? value : `var(--c-${value})`;
      return `fill: ${cssValue};`;
    },
    
    // Stroke
    'stroke': () => {
      if (value === 'none') {
        return 'stroke: none;';
      }
      if (value === 'current') {
        return 'stroke: currentColor;';
      }
      const cssValue = isArbitrary ? value : `var(--c-${value})`;
      return `stroke: ${cssValue};`;
    },
    
    // Stroke Width
    'stroke-w': () => {
      const cssValue = isArbitrary ? value : `${value}px`;
      return `stroke-width: ${cssValue};`;
    },
    
    // =====================
    // ACCESSIBILITY UTILITIES
    // =====================
    
    // Forced Color Adjust
    'forced-colors': () => {
      return `forced-color-adjust: ${value};`;
    }
  };
  
  const generator = rules[property];
  return generator ? generator() : '';
}

/**
 * Validate a CSS rule declaration
 * @param {string} declaration - CSS declaration (e.g., "property: value;")
 * @returns {boolean} - True if valid
 */
function isValidCSSRule(declaration) {
  if (!declaration || typeof declaration !== 'string') {
    return false;
  }

  declaration = declaration.trim();
  if (!declaration) return false;

  if (!declaration.endsWith(';')) return false;

  const parts = declaration.substring(0, declaration.length - 1).split(':');
  if (parts.length < 2) return false;

  const property = parts[0].trim();
  const value = parts.slice(1).join(':').trim();

  if (!property || !value) return false;

  return true;
}

/**
 * Generate a single CSS rule from a token
 * @param {Object} token - Token object
 * @param {Object} config - Configuration object
 * @param {boolean} skipDarkWrapper - If true, don't add dark mode wrapper (used when generating inside dark block)
 */
export function generateRule(token, config, skipDarkWrapper = false, interactIds = new Set()) {
  try {
    if (!token || typeof token !== 'object') {
      console.warn('[SenangStart] Invalid token object:', token);
      return '';
    }

    const { raw, attrType, breakpoint, state } = token;

    if (!attrType || typeof attrType !== 'string') {
      console.warn('[SenangStart] Invalid token attrType:', attrType);
      return '';
    }

    if (!raw || typeof raw !== 'string') {
      console.warn('[SenangStart] Invalid token raw:', raw);
      return '';
    }

    let cssDeclaration = '';

    switch (attrType) {
      case 'layout':
        try {
          cssDeclaration = generateLayoutRule(token, config);
        } catch (e) {
          console.warn(`[SenangStart] Error generating layout rule for "${raw}": ${e.message}`);
          return '';
        }
        break;
      case 'space':
        try {
          cssDeclaration = generateSpaceRule(token, config);
        } catch (e) {
          console.warn(`[SenangStart] Error generating space rule for "${raw}": ${e.message}`);
          return '';
        }
        break;
      case 'visual':
        try {
          cssDeclaration = generateVisualRule(token, config);
        } catch (e) {
          console.warn(`[SenangStart] Error generating visual rule for "${raw}": ${e.message}`);
          return '';
        }
        break;
      default:
        console.warn(`[SenangStart] Unknown attrType: ${attrType}`);
        return '';
    }

    if (!cssDeclaration) return '';

    if (!isValidCSSRule(cssDeclaration)) {
      console.warn(`[SenangStart] Invalid CSS rule generated for "${raw}": ${cssDeclaration}`);
      return '';
    }

    // Check if this is a divide utility (needs special selector)
    const isDivide = raw && raw.startsWith('divide');

    // Build selector
    let selector = '';

    if (isDivide) {
      // Divide utilities use special child selector pattern
      selector = `[${attrType}~="${raw}"] > :not([hidden]) ~ :not([hidden])`;
    } else {
      selector = `[${attrType}~="${raw}"]`;
    }

    // Add state pseudo-class (but not for 'dark' - it's handled separately)
    if (state && state !== 'dark') {
      if (isDivide) {
        // For divide utilities, add state to the element after tilde
        // Divide utilities don't support group/peer states yet to avoid complexity
        selector = `[${attrType}~="${raw}"] > :not([hidden]) ~ :not([hidden]):${state}`;
      } else {
        // Helper to map state to CSS selector
        const getStateSelector = (s) => {
          const map = {
            'expanded': '[aria-expanded="true"]',
            'selected': '[aria-selected="true"]',
            'disabled': ':disabled'
          };
          return map[s] || `:${s}`;
        };

        const selectors = [];

        // 1. Standard State Selector
        selectors.push(`${selector}${getStateSelector(state)}`);

        // 2. Group & Peer State Selectors
        // Only for supported triggers
        const groupTriggers = {
          'hover': 'hoverable',
          'focus': 'focusable',
          'focus-visible': 'focusable',
          'active': 'pressable',
          'expanded': 'expandable',
          'selected': 'selectable'
        };

        if (groupTriggers[state]) {
          const parentAttr = groupTriggers[state];
          // For focus, we trigger on focus-within of the container
          let triggerState = state;
          if (state === 'focus' || state === 'focus-visible') triggerState = 'focus-within';

          const triggerSelector = getStateSelector(triggerState);

          // Group Selector
          // [layout~="hoverable"]:not([layout~="disabled"]):hover [visual~="..."]
          const groupSelector = `[layout~="${parentAttr}"]:not([layout~="disabled"])${triggerSelector} ${selector}`;
          selectors.push(groupSelector);

          // Peer Selectors
          // [interact~="id"]:not([layout~="disabled"]):hover ~ [listens~="id"][visual~="..."]
          if (interactIds && interactIds.size > 0) {
            for (const id of interactIds) {
              const peerSelector = `[interact~="${id}"]:not([layout~="disabled"])${triggerSelector} ~ [listens~="${id}"]${selector}`;
              selectors.push(peerSelector);
            }
          }
        }

        selector = selectors.join(',\n');
      }
    }

    return `${selector} { ${cssDeclaration} }\n`;
  } catch (e) {
    console.warn(`[SenangStart] Error in generateRule: ${e.message}`);
    return '';
  }
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
 * Generate CSS from tokens with detailed error reporting
 * Each token is processed in isolation - one failure doesn't crash the build
 * @param {Array} tokens - Array of token objects
 * @param {Object} config - Configuration object
 * @returns {Object} - { css: string, errors: Array<{type, token, message}> }
 */
export function generateCSSWithErrors(tokens, config) {
  const errors = [];
  try {
    let css = '';

    // Validate inputs
    if (!config || typeof config !== 'object') {
      errors.push({ type: 'config', message: 'Invalid config provided' });
      return { css: '', errors };
    }

    if (!Array.isArray(tokens)) {
      errors.push({ type: 'tokens', message: 'Invalid tokens provided' });
      return { css: '', errors };
    }

    // Add CSS variables
    try {
      css += generateCSSVariables(config);
    } catch (e) {
      errors.push({ type: 'variables', message: e.message });
      console.warn(`[SenangStart] Error generating CSS variables: ${e.message}`);
    }

    // Add Preflight base styles if enabled (default: true)
    if (config.preflight !== false) {
      try {
        css += generatePreflight(config);
      } catch (e) {
        errors.push({ type: 'preflight', message: e.message });
        console.warn(`[SenangStart] Error generating preflight: ${e.message}`);
      }
    }

    // Add animation keyframes
    css += `/* SenangStart CSS - Animation Keyframes */
@keyframes spin {
  to { transform: rotate(360deg); }
}
@keyframes ping {
  75%, 100% { transform: scale(2); opacity: 0; }
}
@keyframes pulse {
  50% { opacity: .5; }
}
@keyframes bounce {
  0%, 100% { transform: translateY(-25%); animation-timing-function: cubic-bezier(0.8, 0, 1, 1); }
  50% { transform: none; animation-timing-function: cubic-bezier(0, 0, 0.2, 1); }
}

/* SenangStart CSS - Utility Classes */
`;

    // Group tokens by breakpoint and dark mode
    const baseTokens = [];
    const darkTokens = [];
    const breakpointTokens = {};

    // Initialize breakpoint collections from config
    const { screens } = config.theme || {};
    if (screens && typeof screens === 'object') {
      for (const bp of Object.keys(screens)) {
        breakpointTokens[bp] = [];
      }
    }

    for (const token of tokens) {
      try {
        if (token && typeof token === 'object') {
          if (token.state === 'dark') {
            darkTokens.push(token);
          } else if (token.breakpoint) {
            if (!breakpointTokens[token.breakpoint]) {
              breakpointTokens[token.breakpoint] = [];
            }
            breakpointTokens[token.breakpoint].push(token);
          } else {
            baseTokens.push(token);
          }
        } else {
          errors.push({ type: 'token_format', token: token, message: 'Token is not an object' });
        }
      } catch (e) {
        errors.push({ type: 'token_processing', token: token?.raw, message: e.message });
        console.warn(`[SenangStart] Error processing token: ${e.message}`);
      }
    }

    // Collect interact IDs for Peer selector generation
    const interactIds = new Set();
    for (const token of tokens) {
      try {
        if (token && token.attrType === 'interact' && token.raw) {
          interactIds.add(token.raw);
        }
      } catch (e) {
        errors.push({ type: 'interact_collection', token: token?.raw, message: e.message });
        console.warn(`[SenangStart] Error collecting interact IDs: ${e.message}`);
      }
    }

    // Track display properties to handle conflicts like Tailwind
    const displayProps = ['flex', 'grid', 'inline-flex', 'inline-grid', 'block', 'inline', 'hidden', 'contents'];
    const baseDisplayTokens = new Map();

    // Find display properties in base tokens
    for (const token of baseTokens) {
      try {
        if (token.attrType && displayProps.includes(token.property)) {
          if (!baseDisplayTokens.has(token.attrType)) {
            baseDisplayTokens.set(token.attrType, new Set());
          }
          baseDisplayTokens.get(token.attrType).add(token.raw);
        }
      } catch (e) {
        errors.push({ type: 'display_track', token: token?.raw, message: e.message });
        console.warn(`[SenangStart] Error tracking display properties: ${e.message}`);
      }
    }

    // Generate base rules
    for (const token of baseTokens) {
      try {
        const rule = generateRule(token, config, false, interactIds);
        if (rule) {
          css += rule;
        } else {
          errors.push({ type: 'rule_generation', token: token.raw, message: 'No rule generated' });
        }
      } catch (e) {
        errors.push({ type: 'rule_generation', token: token.raw, message: e.message });
        console.warn(`[SenangStart] Error generating base rule: ${e.message}`);
      }
    }

    // Generate responsive rules
    for (const [bp, bpTokens] of Object.entries(breakpointTokens)) {
      try {
        if (bpTokens.length > 0) {
          // Use screen value if defined, otherwise use breakpoint name itself
          const screenWidth = screens && screens[bp] ? screens[bp] : bp;
          css += `\n@media (min-width: ${screenWidth}) {\n`;

          const processedResetSelectors = new Set();
          for (const bpToken of bpTokens) {
            try {
              if (bpToken.attrType && displayProps.includes(bpToken.property)) {
                if (baseDisplayTokens.has(bpToken.attrType)) {
                  const baseDisplays = baseDisplayTokens.get(bpToken.attrType);
                  if (baseDisplays.size > 0 && !baseDisplays.has(bpToken.raw) && !processedResetSelectors.has(bpToken.raw)) {
                    const selector = `[${bpToken.attrType}~="${bpToken.raw}"]`;
                    css += `  ${selector} { display: revert-layer; }\n`;
                    processedResetSelectors.add(bpToken.raw);
                  }
                }
              }
            } catch (e) {
              errors.push({ type: 'display_reset', token: bpToken.raw, message: e.message });
              console.warn(`[SenangStart] Error generating display reset: ${e.message}`);
            }
          }

          for (const token of bpTokens) {
            try {
              const rule = generateRule(token, config, false, interactIds);
              if (rule) {
                css += '  ' + rule;
              } else {
                errors.push({ type: 'responsive_rule', token: token.raw, message: 'No rule generated' });
              }
            } catch (e) {
              errors.push({ type: 'responsive_rule', token: token.raw, message: e.message });
              console.warn(`[SenangStart] Error generating responsive rule: ${e.message}`);
            }
          }
          css += '}\n';
        }
      } catch (e) {
        errors.push({ type: 'breakpoint_generation', message: `Error generating breakpoint ${bp}: ${e.message}` });
        console.warn(`[SenangStart] Error generating breakpoint ${bp}: ${e.message}`);
      }
    }

    // Generate dark mode rules
    if (darkTokens.length > 0) {
      try {
        const darkMode = config.darkMode || 'media';
        const darkSelector = getDarkModeSelector(config);

        if (darkMode === 'media') {
          css += `\n/* Dark Mode (prefers-color-scheme) */\n`;
          css += `@media (prefers-color-scheme: dark) {\n`;
          for (const token of darkTokens) {
            try {
              const rule = generateRule(token, config, true, interactIds);
              if (rule) {
                css += '  ' + rule;
              } else {
                errors.push({ type: 'dark_rule', token: token.raw, message: 'No rule generated' });
              }
            } catch (e) {
              errors.push({ type: 'dark_rule', token: token.raw, message: e.message });
              console.warn(`[SenangStart] Error generating dark rule (media): ${e.message}`);
            }
          }
          css += '}\n';
        } else {
          css += `\n/* Dark Mode (${darkSelector}) */\n`;
          for (const token of darkTokens) {
            try {
              const baseRule = generateRule(token, config, true, interactIds);
              if (baseRule) {
                const wrappedRule = baseRule.replace(/^(\[[^\]]+\])/, `${darkSelector} $1`);
                css += wrappedRule;
              } else {
                errors.push({ type: 'dark_rule', token: token.raw, message: 'No rule generated' });
              }
            } catch (e) {
              errors.push({ type: 'dark_rule', token: token.raw, message: e.message });
              console.warn(`[SenangStart] Error generating dark rule (selector): ${e.message}`);
            }
          }
        }
      } catch (e) {
        errors.push({ type: 'dark_mode_generation', message: e.message });
        console.warn(`[SenangStart] Error generating dark mode rules: ${e.message}`);
      }
    }

    return { css, errors };
  } catch (e) {
    errors.push({ type: 'fatal', message: e.message });
    console.error(`[SenangStart] Fatal error in generateCSSWithErrors: ${e.message}`);
    return { css: '', errors };
  }
}

/**
 * Generate CSS from tokens (Backward compatible wrapper)
 * @param {Array} tokens - Array of token objects
 * @param {Object} config - Configuration object
 * @returns {string} - Generated CSS
 */
export function generateCSS(tokens, config) {
  const { css } = generateCSSWithErrors(tokens, config);
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
