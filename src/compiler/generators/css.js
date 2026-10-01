/**
 * SenangStart CSS - CSS Generator
 * Generates CSS from tokens using attribute selectors
 */

import { escapeCSSString } from '../../core/value-grammar.js';
import { parseVariant, tokenVariants, stateSelector } from '../../engine/variants.js';
import { diagnoseToken, checkUndefinedVars } from './diagnose.js';
import { generatePreflight } from './preflight.js';
import { sanitizeValue } from '../../utils/common.js';
import { buildAllMaps } from '../../definitions/index.js';
import { TW_SPACING, TW_RADIUS, TW_SHADOW, TW_FONT_SIZE, TW_LEADING, TW_FONT_WEIGHT } from '../../core/constants.js';
import { getVisualRule } from './visual-rules.js';

// Initialize maps from definitions - Single Source of Truth
const { layoutMap, typographyKeywords } = buildAllMaps();

// Helper to sanitize arbitrary values using common utility
function sanitizeArbitraryValue(value) {
  return sanitizeValue(value);
}

// Shared CSS maps (defined once, not inside functions)
// Percentage keywords/fractions used by both positioning and sizing utilities
const percentageValues = {
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
function generateLayoutRule(token, _config) {
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
      if (percentageValues[positiveVal]) {
        return `-${percentageValues[positiveVal]}`;
      }
    }
    if (percentageValues[val]) {
      return percentageValues[val];
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
function generateSpaceRule(token, _config) {
  const { property, value, isArbitrary } = token;

  // Handle special sizing values for width/height utilities
  const sizingSpecialValues = {
    'min': 'min-content',
    'max': 'max-content',
    'fit': 'fit-content'
  };

  // Check if this is a sizing utility with a special value
  const sizingProps = ['w', 'h', 'min-w', 'max-w', 'min-h', 'max-h', 'size'];
  if (sizingProps.includes(property) && sizingSpecialValues[value]) {
    const cssVal = sizingSpecialValues[value];
    const propMap = {
      'w': `width: ${cssVal};`,
      'h': `height: ${cssVal};`,
      'min-w': `min-width: ${cssVal};`,
      'max-w': `max-width: ${cssVal};`,
      'min-h': `min-height: ${cssVal};`,
      'max-h': `max-height: ${cssVal};`,
      'size': `width: ${cssVal}; height: ${cssVal};`
    };
    return propMap[property] || '';
  }

  // Check if this is a sizing utility with a percentage adjective
  if (sizingProps.includes(property) && percentageValues[value]) {
    const cssVal = percentageValues[value];
    const propMap = {
      'w': `width: ${cssVal};`,
      'h': `height: ${cssVal};`,
      'min-w': `min-width: ${cssVal};`,
      'max-w': `max-width: ${cssVal};`,
      'min-h': `min-height: ${cssVal};`,
      'max-h': `max-height: ${cssVal};`,
      'size': `width: ${cssVal}; height: ${cssVal};`
    };
    return propMap[property] || '';
  }

  // Determine the CSS value
  let cssValue;
  const NEGATABLE_PROPERTIES = new Set([
    'm', 'm-t', 'm-r', 'm-b', 'm-l', 'm-x', 'm-y'
  ]);

  if (isArbitrary) {
    cssValue = value;
  } else {
    const isNegative = value && value.startsWith('-');
    const cleanValue = isNegative ? value.substring(1) : (value || '');

    let baseValue;
    if (cleanValue.startsWith('tw-')) {
      const twValue = cleanValue.slice(3);
      baseValue = `var(--tw-${twValue.replace(/\./g, '-')})`;
    } else {
      baseValue = `var(--s-${cleanValue})`;
    }

    // Only apply negative calc for margin properties (padding, gap, sizing don't support negative values)
    cssValue = (isNegative && NEGATABLE_PROPERTIES.has(property))
      ? `calc(${baseValue} * -1)`
      : baseValue;
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
    'max-h': `max-height: ${cssValue};`,
    'size': `width: ${cssValue}; height: ${cssValue};`
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
  return ruleFn ? ruleFn(value, isArbitrary, config) : '';
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
export function generateRule(token, config, _skipDarkWrapper = false, interactIds = new Set()) {
  try {
    if (!token || typeof token !== 'object') {
      return '';
    }

    const { raw, attrType, state } = token;

    // Tokens flagged by the tokenizer (security gate, invalid structure) never emit CSS
    if (token.error) return '';

    if (!attrType || typeof attrType !== 'string') {
      return '';
    }

    if (!raw || typeof raw !== 'string') {
      return '';
    }

    let cssDeclaration = '';

    switch (attrType) {
      case 'layout':
        try {
          cssDeclaration = generateLayoutRule(token, config);
        } catch {
          return '';
        }
        break;
      case 'space':
        try {
          cssDeclaration = generateSpaceRule(token, config);
        } catch {
          return '';
        }
        break;
      case 'visual':
        try {
          cssDeclaration = generateVisualRule(token, config);
        } catch {
          return '';
        }
        break;
      default:
        return '';
    }

    if (!cssDeclaration) return '';

    if (!isValidCSSRule(cssDeclaration)) {
      return '';
    }

    // Keyword values that map to CSS keywords rather than theme tokens
    if (!token.isArbitrary) {
      cssDeclaration = cssDeclaration
        .replace(/var\(--c-current\)/g, 'currentColor')
        .replace(/var\(--c-inherit\)/g, 'inherit')
        .replace(/(flex-basis:\s*)var\(--s-(auto|0)\)/g, (_, p1, v) => `${p1}${v === '0' ? '0px' : v}`);
    }

    // Check if this is a divide utility (needs special selector)
    const isDivide = raw && raw.startsWith('divide');

    // Build selector
    let selector = '';

    if (isDivide) {
      // Divide utilities use special child selector pattern
      selector = `[${attrType}~="${escapeCSSString(raw)}"] > :not([hidden]) ~ :not([hidden])`;
    } else {
      selector = `[${attrType}~="${escapeCSSString(raw)}"]`;
    }

    // Variant stack → state selectors (pseudo-classes, aria/data/has/not,
    // pseudo-elements last) and media-feature wrappers. Breakpoints and dark
    // are handled by the caller (bucketing).
    const parsed = tokenVariants(token).map((v) => parseVariant(v, config)).filter(Boolean);
    const stateVs = parsed.filter((p) => p.type === 'state');
    const mediaVs = parsed.filter((p) => p.type === 'media');
    if (stateVs.length === 0 && state && state !== 'dark' && !Array.isArray(token.variants)) {
      // hand-built legacy token without a variants array
      const p = parseVariant(state, config);
      if (p && p.type === 'state') stateVs.push(p);
    }

    if (stateVs.length > 0) {
      const classes = stateVs.filter((p) => !p.pseudoElement).map(stateSelector).join('');
      const elements = stateVs.filter((p) => p.pseudoElement).map(stateSelector).join('');
      const suffix = classes + elements;
      if (stateVs.some((p) => p.content) && !/(^|;)\s*content\s*:/.test(cssDeclaration)) {
        cssDeclaration = `content: var(--ss-content, ""); ${cssDeclaration}`;
      }

      if (isDivide) {
        selector = `[${attrType}~="${escapeCSSString(raw)}"] > :not([hidden]) ~ :not([hidden])${suffix}`;
      } else {
        const selectors = [`${selector}${suffix}`];

        // Group & peer selectors: only for a single interactive state
        const groupTriggers = {
          hover: ['hoverable', ':hover'],
          focus: ['focusable', ':focus-within'],
          'focus-visible': ['focusable', ':focus-within'],
          active: ['pressable', ':active'],
          expanded: ['expandable', '[aria-expanded="true"]'],
          selected: ['selectable', '[aria-selected="true"]']
        };
        const only = stateVs.length === 1 ? groupTriggers[stateVs[0].name] : null;
        if (only) {
          const [parentAttr, trigger] = only;
          selectors.push(`[layout~="${parentAttr}"]:not([layout~="disabled"])${trigger} ${selector}`);
          if (interactIds && interactIds.size > 0) {
            for (const id of interactIds) {
              const eid = escapeCSSString(id);
              selectors.push(`[interact~="${eid}"]:not([layout~="disabled"])${trigger} ~ [listens~="${eid}"]${selector}`);
            }
          }
        }
        selector = selectors.join(',\n');
      }
    }

    if (mediaVs.length > 0) {
      const query = mediaVs.map((p) => p.query).join(' and ');
      return `@media ${query} { ${selector} { ${cssDeclaration} } }\n`;
    }

    return `${selector} { ${cssDeclaration} }\n`;
  } catch {
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
  if (Array.isArray(darkMode)) return darkMode[1] || '.dark';
  if (darkMode === 'selector' || darkMode === 'class') return '.dark';
  return null;
}

/**
 * Normalised dark-mode strategy: 'media' or 'selector'.
 * 'class' (Tailwind v3 name) is accepted as an alias of 'selector'.
 * @param {Object} config
 * @returns {'media'|'selector'}
 */
function getDarkModeStrategy(config) {
  const darkMode = config.darkMode || 'media';
  if (Array.isArray(darkMode) || darkMode === 'selector' || darkMode === 'class') return 'selector';
  return 'media';
}

/**
 * Split a selector list on top-level commas only (ignores commas inside
 * quotes, [] and ()).
 * @param {string} list
 * @returns {string[]}
 */
function splitSelectorList(list) {
  const out = [];
  let depth = 0;
  let quote = null;
  let start = 0;
  for (let i = 0; i < list.length; i++) {
    const ch = list[i];
    if (quote) {
      if (ch === '\\') i++;
      else if (ch === quote) quote = null;
      continue;
    }
    if (ch === '"' || ch === "'") quote = ch;
    else if (ch === '[' || ch === '(') depth++;
    else if (ch === ']' || ch === ')') depth--;
    else if (ch === ',' && depth === 0) {
      out.push(list.slice(start, i));
      start = i + 1;
    }
  }
  out.push(list.slice(start));
  return out;
}

/**
 * Prefix every selector in a CSS rule with a descendant selector.
 * Handles comma-separated selector lists (including group/peer selectors)
 * without touching declaration blocks.
 * @param {string} rule - Single rule string, e.g. "[a~="x"],\n[b~="y"] { decl }\n"
 * @param {string} prefix - Selector to prepend, e.g. ".dark"
 * @returns {string} Prefixed rule
 */
function prefixRuleSelectors(rule, darkSelector) {
  const braceIndex = rule.indexOf('{');
  if (braceIndex === -1) return rule;
  const selectorPart = rule.slice(0, braceIndex);
  const rest = rule.slice(braceIndex);
  // Zero-specificity wrapper that matches the dark element itself and its
  // descendants, so state variants (hover:…) still win over dark: rules.
  const wrapper = `:where(${darkSelector}, :is(${darkSelector}) *)`;
  const prefixed = splitSelectorList(selectorPart)
    .map((sel) => {
      const trimmed = sel.trim();
      if (!trimmed || trimmed.startsWith('@')) return sel;
      return `${wrapper}${trimmed}`;
    })
    .join(',\n');
  return `${prefixed} ${rest}`;
}

/**
 * Indent every non-empty line of a CSS fragment.
 * @param {string} css - CSS fragment
 * @param {string} indent - Indentation string, e.g. "  "
 * @returns {string} Indented CSS
 */
function indentCSS(css, indent) {
  return css
    .split('\n')
    .map((line) => (line.trim() ? indent + line : line))
    .join('\n');
}

/**
 * Emit rules for a group of dark tokens, optionally nested inside a
 * breakpoint media query when the group has a breakpoint.
 * @param {Array} bpTokens - Dark tokens sharing the same breakpoint
 * @param {string|null} breakpoint - Breakpoint name or null for base
 * @param {Object} ctx - { config, screens, interactIds, errors, wrapSelector (string|null) }
 * @returns {string} CSS fragment
 */
function generateDarkRules(bpTokens, breakpoint, ctx) {
  const { config, screens, interactIds, errors, wrapSelector } = ctx;
  const entries = [];
  const seen = new Set();
  for (const token of bpTokens) {
    const id = `${token.attrType}\u0000${token.raw}`;
    if (seen.has(id)) continue;
    seen.add(id);
    const rule = safeRule(token, config, true, interactIds, errors, 'dark_rule', ctx.defined);
    if (rule) entries.push({ rule, key: ruleSortKey(rule, `${token.attrType}=${token.raw}`) });
  }
  entries.sort(compareRuleKeys);
  const emitRules = (indent) => entries
    .map(({ rule }) => indentCSS(wrapSelector ? prefixRuleSelectors(rule, wrapSelector) : rule, indent))
    .join('');

  if (!breakpoint) return emitRules(ctx.baseIndent || '');
  const inner = ctx.baseIndent ? '    ' : '  ';
  const outer = ctx.baseIndent ? '  ' : '';
  return `${outer}${breakpointQuery(breakpoint, screens, config)} {\n${emitRules(inner)}${outer}}\n`;
}

/**
 * Generate CSS from tokens with detailed error reporting
 * Each token is processed in isolation - one failure doesn't crash the build
 * @param {Array} tokens - Array of token objects
 * @param {Object} config - Configuration object
 * @returns {Object} - { css: string, errors: Array<{type, token, message}> }
 */

// ============================================
// DETERMINISTIC CASCADE HELPERS
// ============================================

/** Physical/positional longhands that are "children" of a shorthand despite having no hyphen. */
const ZERO_HYPHEN_LONGHANDS = new Set(['top', 'right', 'bottom', 'left']);

/**
 * Shorthand depth of a CSS property: shorthands sort before their longhands
 * (padding < padding-left, inset < top, border < border-top < border-top-width).
 * @param {string} prop
 * @returns {number}
 */
function propertyDepth(prop) {
  if (prop.startsWith('--')) return 0;
  if (ZERO_HYPHEN_LONGHANDS.has(prop)) return 1;
  return (prop.match(/-/g) || []).length;
}

/**
 * Sort key for a generated rule. Rules are ordered by shorthand depth, then by
 * number of declarations (p-x before p-l), then by raw token — so the output
 * is identical regardless of file or token discovery order.
 * @param {string} rule
 * @param {string} raw
 */
function ruleSortKey(rule, raw) {
  if (rule.startsWith('@')) {
    const inner = rule.slice(rule.indexOf('{') + 1, rule.lastIndexOf('}'));
    const k = ruleSortKey(inner.trim(), raw);
    return { ...k, depth: k.depth + 100 }; // media-feature rules after plain rules
  }
  const body = rule.slice(rule.indexOf('{') + 1, rule.lastIndexOf('}'));
  const props = body.split(';').map(d => d.split(':')[0].trim()).filter(Boolean);
  const depth = props.length ? Math.min(...props.map(propertyDepth)) : 0;
  return { depth, count: props.length, raw };
}

function compareRuleKeys(a, b) {
  if (a.key.depth !== b.key.depth) return a.key.depth - b.key.depth;
  if (a.key.count !== b.key.count) return b.key.count - a.key.count;
  return a.key.raw < b.key.raw ? -1 : a.key.raw > b.key.raw ? 1 : 0;
}

/**
 * Generate rules for a list of tokens and return them in deterministic order.
 * @returns {string[]}
 */
function generateSortedRules(tokens, config, interactIds, errors, errorType, defined) {
  const entries = [];
  const seen = new Set();
  for (const token of tokens) {
    const id = `${token.attrType}\u0000${token.raw}`;
    if (seen.has(id)) continue;
    seen.add(id);
    const rule = safeRule(token, config, false, interactIds, errors, errorType, defined);
    if (rule) entries.push({ rule, key: ruleSortKey(rule, `${token.attrType}=${token.raw}`) });
  }
  entries.sort(compareRuleKeys);
  return entries.map(e => e.rule);
}

/**
 * Generate one rule, recording a specific diagnostic when it fails or when it
 * references theme tokens that do not exist. Tokenizer-flagged tokens are
 * reported by the tokenizer and skipped silently here.
 */
function safeRule(token, config, skipDark, interactIds, errors, errorType, defined) {
  if (token.error) return '';
  if (token.attrType === 'interact' || token.attrType === 'listens') return '';
  let rule = '';
  try {
    rule = generateRule(token, config, skipDark, interactIds);
  } catch (e) {
    errors.push({ ...diagnoseToken(token, config), type: errorType, message: e.message });
    return '';
  }
  if (!rule) {
    // Marker keywords (hoverable, focusable…) intentionally produce no CSS
    if (token.attrType === 'layout' && MARKER_KEYWORDS.has(token.raw)) return '';
    errors.push({ ...diagnoseToken(token, config), type: errorType });
    return '';
  }
  const undef = checkUndefinedVars(rule, token, defined);
  if (undef) {
    errors.push({ ...undef, type: errorType });
    return '';
  }
  return rule;
}

const MARKER_KEYWORDS = new Set(['hoverable', 'focusable', 'pressable', 'expandable', 'selectable', 'disabled']);

/**
 * Convert a screen value to pixels for ordering ('print' and unknowns sort last).
 * @param {string} value
 * @returns {number}
 */
export function screenToPx(value) {
  if (typeof value !== 'string') return Number.POSITIVE_INFINITY;
  const m = value.trim().match(/^(-?\d*\.?\d+)(px|rem|em)?$/);
  if (!m) return Number.POSITIVE_INFINITY;
  const n = parseFloat(m[1]);
  return m[2] === 'rem' || m[2] === 'em' ? n * 16 : n;
}

/**
 * Media query prelude for a breakpoint.
 * @param {string} bp
 * @param {Object} screens
 */
function breakpointQuery(bp, screens, config) {
  const p = config ? parseVariant(bp, config) : null;
  const below = (name) => {
    const px = screenToPx(screens && screens[name]);
    return Number.isFinite(px) ? `(max-width: ${+(px - 0.02).toFixed(2)}px)` : `not all and (min-width: ${screens[name]})`;
  };
  if (p && p.type === 'max') return `@media ${below(p.to)}`;
  if (p && p.type === 'range') return `@media (min-width: ${screens[p.from]}) and ${below(p.to)}`;
  const value = screens && screens[bp] ? screens[bp] : bp;
  if (bp === 'print' || value === 'print') return '@media print';
  return `@media (min-width: ${value})`;
}

/**
 * Ordering key for a breakpoint bucket: min-width ascending, then max-* descending,
 * then ranges by lower bound; print last.
 */
function breakpointOrder(bp, screens, config) {
  const p = parseVariant(bp, config);
  const px = (n) => screenToPx(screens && screens[n]);
  if (p && p.type === 'max') return [1, -px(p.to)];
  if (p && p.type === 'range') return [2, px(p.from), px(p.to)];
  const v = px(bp);
  return Number.isFinite(v) ? [0, v] : [3, 0];
}

function compareBreakpoints(a, b, screens, config) {
  const ka = breakpointOrder(a, screens, config);
  const kb = breakpointOrder(b, screens, config);
  for (let i = 0; i < Math.max(ka.length, kb.length); i++) {
    const d = (ka[i] ?? 0) - (kb[i] ?? 0);
    if (d) return d;
  }
  return a < b ? -1 : a > b ? 1 : 0;
}

/** True when a token carries the dark variant anywhere in its stack. */
function isDarkToken(token) {
  if (Array.isArray(token.variants) && token.variants.length) return token.variants.includes('dark');
  return token.state === 'dark';
}


/** Palette shades (`--c-blue-500`) and Tailwind-compat scales (`--tw-*`) are pruned when unused. */
const PRUNABLE_VAR = /^--(?:c-[a-z]+-(?:50|[1-9]00|950)|tw-[\w-]+)$/;

/**
 * Remove unreferenced prunable variables from a `:root { … }` block.
 * References are resolved transitively (a kept variable keeps the variables it uses).
 * @param {string} rootCss - output of generateCSSVariables
 * @param {string} usedCss - every other CSS chunk that may reference variables
 * @returns {string}
 */
export function pruneCSSVariables(rootCss, usedCss) {
  const lines = rootCss.split('\n');
  const defs = new Map();
  for (const line of lines) {
    const m = line.match(/^\s*(--[\w-]+)\s*:\s*(.*);\s*$/);
    if (m) defs.set(m[1], m[2]);
  }
  const keep = new Set();
  const queue = [];
  const visit = (text) => {
    for (const m of text.matchAll(/var\(\s*(--[\w-]+)/g)) {
      if (!keep.has(m[1])) { keep.add(m[1]); queue.push(m[1]); }
    }
  };
  visit(usedCss);
  for (const name of defs.keys()) if (!PRUNABLE_VAR.test(name)) { keep.add(name); queue.push(name); }
  while (queue.length) {
    const v = defs.get(queue.pop());
    if (v) visit(v);
  }
  return lines.filter((line) => {
    const m = line.match(/^\s*(--[\w-]+)\s*:/);
    return !m || keep.has(m[1]);
  }).join('\n');
}

/** Wrap a CSS chunk in a cascade layer when layers are enabled. */
function inLayer(name, css, config) {
  if (!css || config.layers === false) return css;
  return `@layer ${name} {\n${css}}\n`;
}

export const LAYER_ORDER = '@layer senangstart.theme, senangstart.base, senangstart.utilities;\n';

export function generateCSSWithErrors(tokens, config) {
  const errors = [];
  try {
    if (!config || typeof config !== 'object') {
      errors.push({ type: 'config', message: 'Invalid config provided' });
      return { css: '', errors };
    }
    if (!Array.isArray(tokens)) {
      errors.push({ type: 'tokens', message: 'Invalid tokens provided' });
      return { css: '', errors };
    }

    const layered = config.layers !== false;
    let css = layered ? LAYER_ORDER : '';

    // Theme variables (pruned once utilities are known — see end of function)
    let rootVars = '';
    try {
      rootVars = generateCSSVariables(config);
    } catch (e) {
      errors.push({ type: 'variables', message: e.message });
    }

    // Preflight base styles (default: on)
    let preflight = '';
    if (config.preflight !== false) {
      try {
        preflight = generatePreflight(config);
      } catch (e) {
        errors.push({ type: 'preflight', message: e.message });
      }
    }

    // Keyframes are global names, unaffected by layers
    const keyframes = `/* SenangStart CSS - Animation Keyframes */
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
`;

    // Bucket tokens: base, per-breakpoint, dark (per-breakpoint)
    const baseTokens = [];
    const darkTokensByBreakpoint = new Map();
    const breakpointTokens = new Map();
    const { screens } = config.theme || {};

    for (const token of tokens) {
      if (!token || typeof token !== 'object') {
        errors.push({ type: 'token_format', token, message: 'Token is not an object' });
        continue;
      }
      if (isDarkToken(token)) {
        const bpKey = token.breakpoint || null;
        if (!darkTokensByBreakpoint.has(bpKey)) darkTokensByBreakpoint.set(bpKey, []);
        darkTokensByBreakpoint.get(bpKey).push(token);
      } else if (token.breakpoint) {
        if (!breakpointTokens.has(token.breakpoint)) breakpointTokens.set(token.breakpoint, []);
        breakpointTokens.get(token.breakpoint).push(token);
      } else {
        baseTokens.push(token);
      }
    }

    // Interact IDs for peer selectors
    // Peer selectors are only emitted for interact ids that something listens to
    // (previously every hover utility got one selector per interact id — M4).
    const interactIds = new Set();
    const listenIds = new Set();
    for (const token of tokens) {
      if (token && token.attrType === 'listens' && token.raw) listenIds.add(token.raw);
    }
    for (const token of tokens) {
      if (token && token.attrType === 'interact' && token.raw && listenIds.has(token.raw)) interactIds.add(token.raw);
    }

    // Variables the theme defines — used to flag unknown scale values
    const defined = new Set([...rootVars.matchAll(/(--[\w-]+)\s*:/g)].map(m => m[1]));

    // Utilities, in deterministic order
    let utilities = '/* SenangStart CSS - Utilities */\n';
    for (const rule of generateSortedRules(baseTokens, config, interactIds, errors, 'rule_generation', defined)) {
      utilities += rule;
    }

    // Breakpoints ordered by numeric min-width (mobile-first); print last
    const orderedBps = [...breakpointTokens.keys()].sort((a, b) => compareBreakpoints(a, b, screens, config));
    for (const bp of orderedBps) {
      const rules = generateSortedRules(breakpointTokens.get(bp), config, interactIds, errors, 'responsive_rule', defined);
      if (rules.length === 0) continue;
      utilities += `\n${breakpointQuery(bp, screens, config)} {\n`;
      for (const rule of rules) utilities += '  ' + rule;
      utilities += '}\n';
    }

    // Dark mode (after light rules so it wins at equal specificity)
    if (darkTokensByBreakpoint.size > 0) {
      try {
        const darkMode = getDarkModeStrategy(config);
        const darkSelector = getDarkModeSelector(config);
        const darkCtx = { config, screens, interactIds, errors, defined, baseIndent: darkMode === 'media' ? '  ' : '' };
        const darkBps = [...darkTokensByBreakpoint.keys()].sort((a, b) => {
          if (a === null) return -1;
          if (b === null) return 1;
          return compareBreakpoints(a, b, screens, config);
        });
        if (darkMode === 'media') {
          utilities += `\n/* Dark Mode (prefers-color-scheme) */\n@media (prefers-color-scheme: dark) {\n`;
          for (const bp of darkBps) utilities += generateDarkRules(darkTokensByBreakpoint.get(bp), bp, darkCtx);
          utilities += '}\n';
        } else {
          utilities += `\n/* Dark Mode (${darkSelector}) */\n`;
          const selectorCtx = { ...darkCtx, wrapSelector: darkSelector };
          for (const bp of darkBps) utilities += generateDarkRules(darkTokensByBreakpoint.get(bp), bp, selectorCtx);
        }
      } catch (e) {
        errors.push({ type: 'dark_mode_generation', message: e.message });
      }
    }

    const exposeAll = config.theme && config.theme.exposeAll === true;
    const theme = exposeAll ? rootVars : pruneCSSVariables(rootVars, preflight + utilities);
    css += inLayer('senangstart.theme', theme, config);
    css += inLayer('senangstart.base', preflight, config);
    css += keyframes;
    css += inLayer('senangstart.utilities', utilities, config);
    return { css, errors };
  } catch (e) {
    errors.push({ type: 'fatal', message: e.message });
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
 * String/comment-aware: quoted strings (e.g. content:"a: b") and url(...)
 * tokens (e.g. url(data:image/png;base64,...)) are never mangled.
 */
export function minifyCSS(css) {
  if (typeof css !== 'string' || css === '') return '';

  // Pass 1: strip comments with a scanner that respects quoted strings
  let stripped = '';
  let state = 'normal'; // normal | string | comment
  let quote = '';
  for (let i = 0; i < css.length; i++) {
    const ch = css[i];
    if (state === 'comment') {
      if (ch === '*' && css[i + 1] === '/') {
        state = 'normal';
        i++;
      }
      continue;
    }
    if (state === 'string') {
      stripped += ch;
      if (ch === '\\') {
        stripped += css[i + 1] || '';
        i++;
      } else if (ch === quote) {
        state = 'normal';
      }
      continue;
    }
    if (ch === '"' || ch === "'") {
      state = 'string';
      quote = ch;
      stripped += ch;
      continue;
    }
    if (ch === '/' && css[i + 1] === '*') {
      state = 'comment';
      i++;
      continue;
    }
    stripped += ch;
  }

  // Pass 2: preserve quoted strings as placeholders, collapse the rest
  const preserved = [];
  const collapsed = stripped
    .replace(/"(?:[^"\\]|\\.)*"|'(?:[^'\\]|\\.)*'/g, (m) => `\u0000${preserved.push(m) - 1}\u0000`)
    .replace(/\s+/g, ' ')                    // Collapse whitespace to single space
    .replace(/ ?\{ ?/g, '{')                 // Remove space around {
    .replace(/ ?\} ?/g, '}')                 // Remove space around }
    .replace(/; ?/g, ';')                    // Remove space after ;
    .replace(/([a-z-]) ?: ?/g, '$1:')        // Remove space around : only after property names
    .replace(/, ?/g, ',')                    // Remove space after ,
    .trim();

  // Pass 3: restore preserved strings
  return collapsed.replace(/\u0000(\d+)\u0000/g, (_, i) => preserved[Number(i)] ?? '');
}

export default { generateCSS, generateCSSVariables, generateRule, minifyCSS };
