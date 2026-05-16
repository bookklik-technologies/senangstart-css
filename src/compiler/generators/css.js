/**
 * SenangStart CSS - CSS Generator
 * Generates CSS from tokens using attribute selectors
 */

import { generatePreflight } from './preflight.js';
import { sanitizeValue } from '../../utils/common.js';
import { buildAllMaps } from '../../definitions/index.js';
import { TW_SPACING, TW_RADIUS, TW_SHADOW, TW_FONT_SIZE, TW_LEADING, TW_FONT_WEIGHT, CSS_COLOR_KEYWORDS } from '../../core/constants.js';
import { getVisualRule } from './visual-rules.js';

// Initialize maps from definitions - Single Source of Truth
const { layoutMap, typographyKeywords } = buildAllMaps();

// Helper to sanitize arbitrary values using common utility
function sanitizeArbitraryValue(value) {
  return sanitizeValue(value);
}

// Shared CSS maps (defined once, not inside functions)
const positioningPercentages = {
  'full': '100%',
  'half': '50%',
  'third': '33.333333%',
  'third-2x': '66.666667%',
  'quarter': '25%',
  'quarter-2x': '50%',
  'quarter-3x': '75%',
  '1/1': '100%',
  '1/2': '50%',
  '1/3': '33.333333%',
  '2/3': '66.666667%',
  '1/4': '25%',
  '2/4': '50%',
  '3/4': '75%'
};

const percentageAdjectives = {
  'full': '100%',
  'half': '50%',
  'third': '33.333333%',
  'third-2x': '66.666667%',
  'quarter': '25%',
  'quarter-2x': '50%',
  'quarter-3x': '75%',
  '1/1': '100%',
  '1/2': '50%',
  '1/3': '33.333333%',
  '2/3': '66.666667%',
  '1/4': '25%',
  '2/4': '50%',
  '3/4': '75%'
};

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
  for (const [key, value] of Object.entries(TW_SPACING)) {
    css += `  --tw-${key}: ${value};\n`;
  }

   
  // Tailwind Border Radius Scale
  for (const [key, value] of Object.entries(TW_RADIUS)) {
    css += `  --r-tw-${key}: ${value};\n`;
  }
  
  // Tailwind Shadow Scale
  for (const [key, value] of Object.entries(TW_SHADOW)) {
    css += `  --shadow-tw-${key}: ${value};\n`;
  }
  
  // Tailwind Font Size Scale
  for (const [key, value] of Object.entries(TW_FONT_SIZE)) {
    css += `  --tw-text-${key}: ${value};\n`;
  }
  
  // Tailwind Line Height Scale (paired with font sizes)
  for (const [key, value] of Object.entries(TW_LEADING)) {
    css += `  --tw-leading-${key}: ${value};\n`;
  }
  
  // Tailwind Font Weight Scale
  for (const [key, value] of Object.entries(TW_FONT_WEIGHT)) {
    css += `  --tw-font-${key}: ${value};\n`;
  }
  
  // Divide reverse variables (used by divide-x:reverse and divide-y:reverse)
  css += '  --ss-divide-x-reverse: 0;\n';
  css += '  --ss-divide-y-reverse: 0;\n';
  
  // Ring utility variables
  css += '  --ring-inset: ;\n';
  css += '  --ss-ring-color: var(--c-primary);\n';
  
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
  const resolvePositioningValue = (val, arb) => {
    if (arb) return val;
    if (!val || val === '0') return '0';
    if (val.startsWith('-')) {
      const positiveVal = val.substring(1);
      if (positioningPercentages[positiveVal]) {
        return `-${positioningPercentages[positiveVal]}`;
      }
    }
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
      baseValue = `var(--tw-${twValue.replace(/\./g, '-')})`;
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
  if (typographyKeywords[property]) {
    return typographyKeywords[property];
  }

  const ruleFn = getVisualRule(property);
  return ruleFn ? ruleFn(value, isArbitrary) : '';
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
            'disabled': ':disabled',
            'placeholder': '::placeholder'
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
    const displayProps = ['flex', 'grid', 'inline-flex', 'inline-grid', 'block', 'inline', 'inline-block', 'hidden'];
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
                const wrappedRule = baseRule.replace(/^(\[[^\]]+?\])/m, `${darkSelector} $1`);
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
 * Preserves spaces inside CSS values (font shorthand, media queries, etc.)
 */
export function minifyCSS(css) {
  return css
    .replace(/\/\*[\s\S]*?\*\//g, '')       // Remove comments
    .replace(/\s+/g, ' ')                    // Collapse whitespace to single space
    .replace(/ ?\{ ?/g, '{')                 // Remove space around {
    .replace(/ ?\} ?/g, '}')                 // Remove space around }
    .replace(/; ?/g, ';')                    // Remove space after ;
    .replace(/([a-z-]) ?: ?/g, '$1:')      // Remove space around : only after property names
    .replace(/, ?/g, ',')                    // Remove space after ,
    .trim();
}

export default { generateCSS, generateCSSVariables, generateRule, minifyCSS };
