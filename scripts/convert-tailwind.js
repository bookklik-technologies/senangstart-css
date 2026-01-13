#!/usr/bin/env node
/**
 * Tailwind CSS to SenangStart CSS Converter
 * Converts Tailwind class syntax to SenangStart attribute syntax
 * 
 * Usage:
 *   node scripts/convert-tailwind.js input.html -o output.html
 *   node scripts/convert-tailwind.js --string "<div class='flex'>"
 *   node scripts/convert-tailwind.js --clipboard
 */

import { readFileSync, writeFileSync } from 'fs';
import { argv } from 'process';

// ======================
// SPACING SCALE MAPPING
// ======================
// Maps Tailwind spacing numbers to SenangStart semantic scale
const spacingScale = {
  '0': 'none',
  'px': '[1px]',
  '0.5': 'tiny',
  '1': 'tiny',
  '1.5': 'tiny',
  '2': 'tiny',
  '2.5': 'small',
  '3': 'small',
  '3.5': 'small',
  '4': 'small',
  '5': 'medium',
  '6': 'medium',
  '7': 'medium',
  '8': 'big',
  '9': 'big',
  '10': 'big',
  '11': 'big',
  '12': 'giant',
  '14': 'giant',
  '16': 'giant',
  '20': 'vast',
  '24': 'vast',
  '28': 'vast',
  '32': 'vast',
  '36': 'vast',
  '40': 'vast',
  '44': 'vast',
  '48': 'vast',
  '52': 'vast',
  '56': 'vast',
  '60': 'vast',
  '64': 'vast',
  '72': 'vast',
  '80': 'vast',
  '96': 'vast',
  'full': '[100%]',
  'screen': '[100vw]',
  'min': '[min-content]',
  'max': '[max-content]',
  'fit': '[fit-content]',
  'auto': 'auto'
};

// ======================
// BORDER RADIUS MAPPING
// ======================
const radiusScale = {
  'none': 'none',
  'sm': 'small',
  '': 'small',        // rounded without suffix
  'md': 'medium',
  'lg': 'medium',
  'xl': 'big',
  '2xl': 'big',
  '3xl': 'big',
  'full': 'round'
};

// ======================
// SHADOW MAPPING
// ======================
const shadowScale = {
  'sm': 'small',
  '': 'small',        // shadow without suffix
  'md': 'medium',
  'lg': 'big',
  'xl': 'giant',
  '2xl': 'giant',
  'none': 'none'
};

// ======================
// FONT SIZE MAPPING
// ======================
const fontSizeScale = {
  'xs': 'tiny',
  'sm': 'small',
  'base': 'medium',
  'lg': 'big',
  'xl': 'big',
  '2xl': 'giant',
  '3xl': 'giant',
  '4xl': 'vast',
  '5xl': 'vast',
  '6xl': 'vast',
  '7xl': 'vast',
  '8xl': 'vast',
  '9xl': 'vast'
};

// ======================
// LAYOUT CLASS MAPPINGS
// ======================
const layoutMappings = {
  // Display
  'flex': 'flex',
  'inline-flex': 'inline-flex',
  'grid': 'grid',
  'inline-grid': 'inline-grid',
  'block': 'block',
  'inline-block': 'inline',
  'inline': 'inline',
  'hidden': 'hidden',
  
  // Flex direction
  'flex-row': 'row',
  'flex-col': 'col',
  'flex-row-reverse': 'row-reverse',
  'flex-col-reverse': 'col-reverse',
  
  // Flex wrap
  'flex-wrap': 'wrap',
  'flex-nowrap': 'nowrap',
  'flex-wrap-reverse': 'wrap-reverse',
  
  // Flex grow/shrink
  'flex-grow': 'grow',
  'flex-grow-0': 'grow-0',
  'grow': 'grow',
  'grow-0': 'grow-0',
  'flex-shrink': 'shrink',
  'flex-shrink-0': 'shrink-0',
  'shrink': 'shrink',
  'shrink-0': 'shrink-0',
  
  // Flex shorthand
  'flex-1': 'flex:1',
  'flex-auto': 'flex:auto',
  'flex-initial': 'flex:initial',
  'flex-none': 'flex:none',
  
  // Justify content
  'justify-start': 'justify:start',
  'justify-end': 'justify:end',
  'justify-center': 'justify:center',
  'justify-between': 'justify:between',
  'justify-around': 'justify:around',
  'justify-evenly': 'justify:evenly',
  'justify-stretch': 'justify:stretch',
  
  // Align items
  'items-start': 'items:start',
  'items-end': 'items:end',
  'items-center': 'items:center',
  'items-baseline': 'items:baseline',
  'items-stretch': 'items:stretch',
  
  // Align self
  'self-auto': 'self:auto',
  'self-start': 'self:start',
  'self-end': 'self:end',
  'self-center': 'self:center',
  'self-stretch': 'self:stretch',
  'self-baseline': 'self:baseline',
  
  // Align content
  'content-start': 'content:start',
  'content-end': 'content:end',
  'content-center': 'content:center',
  'content-between': 'content:between',
  'content-around': 'content:around',
  'content-evenly': 'content:evenly',
  'content-stretch': 'content:stretch',
  
  // Shorthand alignment
  'center': 'center',
  
  // Position
  'static': 'static',
  'relative': 'relative',
  'absolute': 'absolute',
  'fixed': 'fixed',
  'sticky': 'sticky',
  
  // Visibility
  'visible': 'visible',
  'invisible': 'invisible',
  'collapse': 'collapse',
  
  // Overflow
  'overflow-auto': 'overflow:auto',
  'overflow-hidden': 'overflow:hidden',
  'overflow-visible': 'overflow:visible',
  'overflow-scroll': 'overflow:scroll',
  'overflow-x-auto': 'overflow-x:auto',
  'overflow-x-hidden': 'overflow-x:hidden',
  'overflow-y-auto': 'overflow-y:auto',
  'overflow-y-hidden': 'overflow-y:hidden',
  
  // Object fit
  'object-contain': 'object:contain',
  'object-cover': 'object:cover',
  'object-fill': 'object:fill',
  'object-none': 'object:none',
  'object-scale-down': 'object:scale-down',
  
  // Box sizing
  'box-border': 'box:border',
  'box-content': 'box:content',
  
  // Table
  'table': 'table',
  'table-auto': 'table:auto',
  'table-fixed': 'table:fixed',
  'border-collapse': 'border-collapse',
  'border-separate': 'border-separate'
};

// ======================
// VISUAL KEYWORD MAPPINGS
// ======================
const visualKeywordMappings = {
  // Font style
  'italic': 'italic',
  'not-italic': 'not-italic',
  
  // Font smoothing
  'antialiased': 'antialiased',
  'subpixel-antialiased': 'subpixel-antialiased',
  
  // Text transform
  'uppercase': 'uppercase',
  'lowercase': 'lowercase',
  'capitalize': 'capitalize',
  'normal-case': 'normal-case',
  
  // Text decoration
  'underline': 'underline',
  'overline': 'overline',
  'line-through': 'line-through',
  'no-underline': 'no-underline',
  
  // Text decoration style
  'decoration-solid': 'decoration-solid',
  'decoration-double': 'decoration-double',
  'decoration-dotted': 'decoration-dotted',
  'decoration-dashed': 'decoration-dashed',
  'decoration-wavy': 'decoration-wavy',
  
  // Text overflow
  'truncate': 'truncate',
  'text-ellipsis': 'text-ellipsis',
  'text-clip': 'text-clip',
  
  // Text wrap
  'text-wrap': 'text-wrap',
  'text-nowrap': 'text-nowrap',
  'text-balance': 'text-balance',
  'text-pretty': 'text-pretty',
  
  // Whitespace
  'whitespace-normal': 'whitespace-normal',
  'whitespace-nowrap': 'whitespace-nowrap',
  'whitespace-pre': 'whitespace-pre',
  'whitespace-pre-line': 'whitespace-pre-line',
  'whitespace-pre-wrap': 'whitespace-pre-wrap',
  'whitespace-break-spaces': 'whitespace-break-spaces',
  
  // Word break
  'break-normal': 'break-normal',
  'break-words': 'break-words',
  'break-all': 'break-all',
  'break-keep': 'break-keep',
  
  // Hyphens
  'hyphens-none': 'hyphens-none',
  'hyphens-manual': 'hyphens-manual',
  'hyphens-auto': 'hyphens-auto',
  
  // List style
  'list-none': 'list-none',
  'list-disc': 'list-disc',
  'list-decimal': 'list-decimal',
  'list-inside': 'list-inside',
  'list-outside': 'list-outside',
  
  // Cursor
  'cursor-auto': 'cursor:auto',
  'cursor-default': 'cursor:default',
  'cursor-pointer': 'cursor:pointer',
  'cursor-wait': 'cursor:wait',
  'cursor-text': 'cursor:text',
  'cursor-move': 'cursor:move',
  'cursor-not-allowed': 'cursor:not-allowed',
  'cursor-grab': 'cursor:grab',
  'cursor-grabbing': 'cursor:grabbing',
  
  // User select
  'select-none': 'select:none',
  'select-text': 'select:text',
  'select-all': 'select:all',
  'select-auto': 'select:auto',
  
  // Pointer events
  'pointer-events-none': 'pointer-events:none',
  'pointer-events-auto': 'pointer-events:auto',
  
  // Appearance
  'appearance-none': 'appearance:none',
  'appearance-auto': 'appearance:auto'
};

// ======================
// CONVERTER FUNCTIONS
// ======================

/**
 * Get spacing scale value from Tailwind number
 */
function getSpacingScale(value) {
  if (spacingScale[value]) {
    return spacingScale[value];
  }
  // Handle arbitrary values like [20px]
  if (value.startsWith('[') && value.endsWith(']')) {
    return value;
  }
  // Unknown spacing, passthrough as arbitrary
  return `[${value}]`;
}

/**
 * Convert a single Tailwind class to SenangStart
 * Returns { category: 'layout'|'space'|'visual'|null, value: string }
 */
function convertClass(twClass) {
  // Check for responsive/state prefixes
  const prefixMatch = twClass.match(/^(sm:|md:|lg:|xl:|2xl:|hover:|focus:|active:|disabled:|dark:)(.+)$/);
  let prefix = '';
  let baseClass = twClass;
  
  if (prefixMatch) {
    prefix = prefixMatch[1];
    baseClass = prefixMatch[2];
    // Convert prefix format
    if (prefix === 'dark:') {
      prefix = 'dark:';
    } else if (prefix.endsWith(':')) {
      prefix = prefix.slice(0, -1) + ':';
    }
  }
  
  // Direct layout mappings
  if (layoutMappings[baseClass]) {
    return { category: 'layout', value: prefix + layoutMappings[baseClass] };
  }
  
  // Direct visual keyword mappings
  if (visualKeywordMappings[baseClass]) {
    return { category: 'visual', value: prefix + visualKeywordMappings[baseClass] };
  }
  
  // Text color (text-{color})
  const textColorMatch = baseClass.match(/^text-((?:slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose|white|black|transparent|current|inherit)(?:-\d{2,3})?)$/);
  if (textColorMatch) {
    return { category: 'visual', value: prefix + 'text:' + textColorMatch[1] };
  }
  
  // Text alignment
  if (['text-left', 'text-center', 'text-right', 'text-justify'].includes(baseClass)) {
    return { category: 'visual', value: prefix + 'text:' + baseClass.replace('text-', '') };
  }
  
  // Text size
  const textSizeMatch = baseClass.match(/^text-(xs|sm|base|lg|xl|2xl|3xl|4xl|5xl|6xl|7xl|8xl|9xl)$/);
  if (textSizeMatch) {
    const size = fontSizeScale[textSizeMatch[1]] || textSizeMatch[1];
    return { category: 'visual', value: prefix + 'text-size:' + size };
  }
  
  // Background color
  const bgMatch = baseClass.match(/^bg-((?:slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose|white|black|transparent|current|inherit)(?:-\d{2,3})?)$/);
  if (bgMatch) {
    return { category: 'visual', value: prefix + 'bg:' + bgMatch[1] };
  }
  
  // Border color
  const borderColorMatch = baseClass.match(/^border-((?:slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose|white|black|transparent|current|inherit)(?:-\d{2,3})?)$/);
  if (borderColorMatch) {
    return { category: 'visual', value: prefix + 'border:' + borderColorMatch[1] };
  }
  
  // Padding
  const paddingMatch = baseClass.match(/^p([trblxy])?-(.+)$/);
  if (paddingMatch) {
    const side = paddingMatch[1] ? '-' + paddingMatch[1] : '';
    const value = getSpacingScale(paddingMatch[2]);
    return { category: 'space', value: prefix + 'p' + side + ':' + value };
  }
  
  // Margin - must start with m and optionally have side modifier, then a digit or known keyword
  const marginMatch = baseClass.match(/^-?m([trblxy])?-(\d+\.?\d*|px|auto|full|screen|min|max|fit|\[.+\])$/);
  if (marginMatch) {
    const isNegative = baseClass.startsWith('-');
    const side = marginMatch[1] ? '-' + marginMatch[1] : '';
    let value = getSpacingScale(marginMatch[2]);
    if (isNegative && !value.startsWith('[')) {
      value = '[-' + value + ']';
    }
    return { category: 'space', value: prefix + 'm' + side + ':' + value };
  }
  
  // Gap
  const gapMatch = baseClass.match(/^gap-([xy])?-?(.+)$/);
  if (gapMatch) {
    const axis = gapMatch[1] ? '-' + gapMatch[1] : '';
    const value = getSpacingScale(gapMatch[2]);
    return { category: 'space', value: prefix + 'g' + axis + ':' + value };
  }
  
  // Width
  const widthMatch = baseClass.match(/^(min-w|max-w|w)-(.+)$/);
  if (widthMatch) {
    const prop = widthMatch[1] === 'w' ? 'w' : widthMatch[1];
    const value = getSpacingScale(widthMatch[2]);
    return { category: 'space', value: prefix + prop + ':' + value };
  }
  
  // Height
  const heightMatch = baseClass.match(/^(min-h|max-h|h)-(.+)$/);
  if (heightMatch) {
    const prop = heightMatch[1] === 'h' ? 'h' : heightMatch[1];
    let value = getSpacingScale(heightMatch[2]);
    if (heightMatch[2] === 'screen') {
      value = '[100vh]';
    }
    return { category: 'space', value: prefix + prop + ':' + value };
  }
  
  // Border radius
  const roundedMatch = baseClass.match(/^rounded(?:-(.+))?$/);
  if (roundedMatch) {
    const size = roundedMatch[1] || '';
    // Check if it's a side-specific rounded (rounded-t, rounded-b, etc.)
    if (['t', 'r', 'b', 'l', 'tl', 'tr', 'bl', 'br'].includes(size)) {
      return { category: 'visual', value: prefix + 'rounded-' + size + ':medium' };
    }
    const scale = radiusScale[size] || 'medium';
    return { category: 'visual', value: prefix + 'rounded:' + scale };
  }
  
  // Box shadow
  const shadowMatch = baseClass.match(/^shadow(?:-(.+))?$/);
  if (shadowMatch) {
    const size = shadowMatch[1] || '';
    const scale = shadowScale[size] || 'medium';
    return { category: 'visual', value: prefix + 'shadow:' + scale };
  }
  
  // Opacity
  const opacityMatch = baseClass.match(/^opacity-(\d+)$/);
  if (opacityMatch) {
    return { category: 'visual', value: prefix + 'opacity:' + opacityMatch[1] };
  }
  
  // Font weight
  const fontWeightMatch = baseClass.match(/^font-(thin|extralight|light|normal|medium|semibold|bold|extrabold|black)$/);
  if (fontWeightMatch) {
    const weight = fontWeightMatch[1];
    // Map to simplified scale
    const weightMap = {
      'thin': 'thin',
      'extralight': 'light',
      'light': 'light',
      'normal': 'normal',
      'medium': 'medium',
      'semibold': 'semibold',
      'bold': 'bold',
      'extrabold': 'bold',
      'black': 'bold'
    };
    return { category: 'visual', value: prefix + 'font:' + (weightMap[weight] || weight) };
  }
  
  // Font family
  if (['font-sans', 'font-serif', 'font-mono'].includes(baseClass)) {
    return { category: 'visual', value: prefix + 'font:' + baseClass.replace('font-', '') };
  }
  
  // Leading (line height)
  const leadingMatch = baseClass.match(/^leading-(.+)$/);
  if (leadingMatch) {
    return { category: 'visual', value: prefix + 'leading:' + leadingMatch[1] };
  }
  
  // Tracking (letter spacing)
  const trackingMatch = baseClass.match(/^tracking-(.+)$/);
  if (trackingMatch) {
    return { category: 'visual', value: prefix + 'tracking:' + trackingMatch[1] };
  }
  
  // Z-index
  const zMatch = baseClass.match(/^z-(.+)$/);
  if (zMatch) {
    return { category: 'layout', value: prefix + 'z:' + zMatch[1] };
  }
  
  // Inset (top, right, bottom, left)
  const insetMatch = baseClass.match(/^(inset|top|right|bottom|left)-(.+)$/);
  if (insetMatch) {
    const value = getSpacingScale(insetMatch[2]);
    return { category: 'layout', value: prefix + insetMatch[1] + ':' + value };
  }
  
  // Grid columns
  const gridColsMatch = baseClass.match(/^grid-cols-(.+)$/);
  if (gridColsMatch) {
    return { category: 'layout', value: prefix + 'grid-cols:' + gridColsMatch[1] };
  }
  
  // Grid rows
  const gridRowsMatch = baseClass.match(/^grid-rows-(.+)$/);
  if (gridRowsMatch) {
    return { category: 'layout', value: prefix + 'grid-rows:' + gridRowsMatch[1] };
  }
  
  // Col span
  const colSpanMatch = baseClass.match(/^col-span-(.+)$/);
  if (colSpanMatch) {
    return { category: 'layout', value: prefix + 'col-span:' + colSpanMatch[1] };
  }
  
  // Row span
  const rowSpanMatch = baseClass.match(/^row-span-(.+)$/);
  if (rowSpanMatch) {
    return { category: 'layout', value: prefix + 'row-span:' + rowSpanMatch[1] };
  }
  
  // Order
  const orderMatch = baseClass.match(/^order-(.+)$/);
  if (orderMatch) {
    return { category: 'layout', value: prefix + 'order:' + orderMatch[1] };
  }
  
  // Aspect ratio
  const aspectMatch = baseClass.match(/^aspect-(.+)$/);
  if (aspectMatch) {
    return { category: 'layout', value: prefix + 'aspect:' + aspectMatch[1] };
  }
  
  // Blur
  const blurMatch = baseClass.match(/^blur(?:-(.+))?$/);
  if (blurMatch) {
    const size = blurMatch[1] || 'medium';
    return { category: 'visual', value: prefix + 'blur:' + size };
  }
  
  // Border width
  const borderWidthMatch = baseClass.match(/^border(?:-([trblxy]))?(?:-(\d+))?$/);
  if (borderWidthMatch || baseClass === 'border') {
    const side = borderWidthMatch?.[1] ? '-' + borderWidthMatch[1] : '';
    const width = borderWidthMatch?.[2] || '1';
    return { category: 'visual', value: prefix + 'border' + side + ':[' + width + 'px]' };
  }
  
  // Transition
  if (baseClass.startsWith('transition')) {
    if (baseClass === 'transition') {
      return { category: 'visual', value: prefix + 'transition:all' };
    }
    const transitionMatch = baseClass.match(/^transition-(.+)$/);
    if (transitionMatch) {
      return { category: 'visual', value: prefix + 'transition:' + transitionMatch[1] };
    }
  }
  
  // Duration
  const durationMatch = baseClass.match(/^duration-(.+)$/);
  if (durationMatch) {
    return { category: 'visual', value: prefix + 'duration:' + durationMatch[1] };
  }
  
  // Ease
  const easeMatch = baseClass.match(/^ease-(.+)$/);
  if (easeMatch) {
    return { category: 'visual', value: prefix + 'ease:' + easeMatch[1] };
  }
  
  // Transform utilities
  if (['transform', 'transform-gpu', 'transform-none'].includes(baseClass)) {
    return { category: 'visual', value: prefix + baseClass };
  }
  
  // Scale
  const scaleMatch = baseClass.match(/^scale-(.+)$/);
  if (scaleMatch) {
    return { category: 'visual', value: prefix + 'scale:' + scaleMatch[1] };
  }
  
  // Rotate
  const rotateMatch = baseClass.match(/^-?rotate-(.+)$/);
  if (rotateMatch) {
    const isNegative = baseClass.startsWith('-');
    return { category: 'visual', value: prefix + 'rotate:' + (isNegative ? '-' : '') + rotateMatch[1] };
  }
  
  // Translate
  const translateMatch = baseClass.match(/^-?translate-([xy])-(.+)$/);
  if (translateMatch) {
    const isNegative = baseClass.startsWith('-');
    const value = getSpacingScale(translateMatch[2]);
    return { category: 'visual', value: prefix + 'translate-' + translateMatch[1] + ':' + (isNegative ? '-' : '') + value };
  }
  
  // Skew
  const skewMatch = baseClass.match(/^-?skew-([xy])-(.+)$/);
  if (skewMatch) {
    const isNegative = baseClass.startsWith('-');
    return { category: 'visual', value: prefix + 'skew-' + skewMatch[1] + ':' + (isNegative ? '-' : '') + skewMatch[2] };
  }
  
  // Arbitrary values in square brackets
  const arbitraryMatch = baseClass.match(/^([a-z-]+)-\[(.+)\]$/);
  if (arbitraryMatch) {
    const prop = arbitraryMatch[1];
    const value = arbitraryMatch[2];
    
    // Determine category based on property
    if (['p', 'px', 'py', 'pt', 'pr', 'pb', 'pl', 'm', 'mx', 'my', 'mt', 'mr', 'mb', 'ml', 'gap', 'w', 'h', 'min-w', 'max-w', 'min-h', 'max-h'].includes(prop)) {
      const propMap = { px: 'p-x', py: 'p-y', mx: 'm-x', my: 'm-y' };
      return { category: 'space', value: prefix + (propMap[prop] || prop) + ':[' + value + ']' };
    }
    
    // Default to visual
    return { category: 'visual', value: prefix + prop + ':[' + value + ']' };
  }
  
  // Unknown class - return null
  return null;
}

/**
 * Convert HTML string with Tailwind classes to SenangStart syntax
 */
export function convertHTML(html) {
  // Match elements with class attribute
  const classRegex = /class\s*=\s*["']([^"']+)["']/gi;
  
  let result = html;
  let match;
  
  // Find all class attributes
  const matches = [];
  while ((match = classRegex.exec(html)) !== null) {
    matches.push({
      full: match[0],
      classes: match[1],
      index: match.index
    });
  }
  
  // Process in reverse to maintain indices
  for (let i = matches.length - 1; i >= 0; i--) {
    const m = matches[i];
    const converted = convertClasses(m.classes);
    
    // Build replacement attributes
    const attrs = [];
    if (converted.layout.length > 0) {
      attrs.push(`layout="${converted.layout.join(' ')}"`);
    }
    if (converted.space.length > 0) {
      attrs.push(`space="${converted.space.join(' ')}"`);
    }
    if (converted.visual.length > 0) {
      attrs.push(`visual="${converted.visual.join(' ')}"`);
    }
    if (converted.unrecognized.length > 0) {
      attrs.push(`class="${converted.unrecognized.join(' ')}"`);
    }
    
    const replacement = attrs.join(' ');
    result = result.slice(0, m.index) + replacement + result.slice(m.index + m.full.length);
  }
  
  return result;
}

/**
 * Convert a class string to categorized SenangStart values
 */
export function convertClasses(classString) {
  const classes = classString.trim().split(/\s+/);
  
  const result = {
    layout: [],
    space: [],
    visual: [],
    unrecognized: []
  };
  
  for (const cls of classes) {
    if (!cls) continue;
    
    const converted = convertClass(cls);
    
    if (converted) {
      result[converted.category].push(converted.value);
    } else {
      result.unrecognized.push(cls);
    }
  }
  
  return result;
}

/**
 * CLI entry point
 */
function main() {
  const args = argv.slice(2);
  
  if (args.length === 0 || args.includes('--help') || args.includes('-h')) {
    console.log(`
Tailwind CSS to SenangStart CSS Converter

Usage:
  node scripts/convert-tailwind.js <input.html> [-o <output.html>]
  node scripts/convert-tailwind.js --string "<div class='flex'>"
  
Options:
  -o, --output    Output file path (default: stdout)
  --string        Convert a single HTML string
  -h, --help      Show this help message

Examples:
  node scripts/convert-tailwind.js template.html -o converted.html
  node scripts/convert-tailwind.js --string "<div class='flex items-center p-4'>"
`);
    return;
  }
  
  // String mode
  if (args.includes('--string')) {
    const stringIndex = args.indexOf('--string');
    const htmlString = args[stringIndex + 1];
    
    if (!htmlString) {
      console.error('Error: --string requires an HTML string argument');
      process.exit(1);
    }
    
    const result = convertHTML(htmlString);
    console.log(result);
    return;
  }
  
  // File mode
  const inputFile = args.find(arg => !arg.startsWith('-') && args.indexOf(arg) !== args.indexOf('-o') + 1 && args.indexOf(arg) !== args.indexOf('--output') + 1);
  
  if (!inputFile) {
    console.error('Error: Input file required');
    process.exit(1);
  }
  
  let outputFile = null;
  const outputIndex = args.indexOf('-o') !== -1 ? args.indexOf('-o') : args.indexOf('--output');
  if (outputIndex !== -1 && args[outputIndex + 1]) {
    outputFile = args[outputIndex + 1];
  }
  
  try {
    const input = readFileSync(inputFile, 'utf-8');
    const result = convertHTML(input);
    
    if (outputFile) {
      writeFileSync(outputFile, result);
      console.log(`Converted: ${inputFile} -> ${outputFile}`);
    } else {
      console.log(result);
    }
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
}

// Run CLI if executed directly
if (import.meta.url === `file://${process.argv[1].replace(/\\/g, '/')}` || 
    process.argv[1]?.endsWith('convert-tailwind.js')) {
  main();
}

// Export for testing
export { convertClass, spacingScale, layoutMappings, visualKeywordMappings };
