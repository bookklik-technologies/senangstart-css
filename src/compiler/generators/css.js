/**
 * SenangStart CSS - CSS Generator
 * Generates CSS from tokens using attribute selectors
 */

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
    'block': 'display: block;',
    'inline': 'display: inline-block;',
    'hidden': 'display: none;',
    
    // Flex direction
    'row': 'flex-direction: row;',
    'col': 'flex-direction: column;',
    'row-reverse': 'flex-direction: row-reverse;',
    'col-reverse': 'flex-direction: column-reverse;',
    
    // Alignment
    'center': 'justify-content: center; align-items: center;',
    'start': 'justify-content: flex-start; align-items: flex-start;',
    'end': 'justify-content: flex-end; align-items: flex-end;',
    'between': 'justify-content: space-between;',
    'around': 'justify-content: space-around;',
    'evenly': 'justify-content: space-evenly;',
    
    // Wrap
    'wrap': 'flex-wrap: wrap;',
    'nowrap': 'flex-wrap: nowrap;',
    
    // Position
    'absolute': 'position: absolute;',
    'relative': 'position: relative;',
    'fixed': 'position: fixed;',
    'sticky': 'position: sticky;'
  };
  
  // Z-index
  if (property === 'z') {
    return `z-index: var(--z-${value});`;
  }
  
  // Overflow
  if (property === 'overflow') {
    return `overflow: ${value};`;
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
  
  const rules = {
    // Background
    'bg': () => {
      const cssValue = isArbitrary ? value : `var(--c-${value})`;
      return `background-color: ${cssValue};`;
    },
    
    // Text color
    'text': () => {
      // Check if it's alignment
      if (['left', 'center', 'right'].includes(value)) {
        return `text-align: ${value};`;
      }
      const cssValue = isArbitrary ? value : `var(--c-${value})`;
      return `color: ${cssValue};`;
    },
    
    // Font size
    'text-size': () => {
      const cssValue = isArbitrary ? value : `var(--font-${value})`;
      return `font-size: ${cssValue};`;
    },
    
    // Font weight
    'font': () => {
      const cssValue = `var(--fw-${value})`;
      return `font-weight: ${cssValue};`;
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
    
    // Border radius
    'rounded': () => {
      const cssValue = `var(--r-${value})`;
      return `border-radius: ${cssValue};`;
    },
    
    // Box shadow
    'shadow': () => {
      const cssValue = `var(--shadow-${value})`;
      return `box-shadow: ${cssValue};`;
    },
    
    // Opacity
    'opacity': () => {
      const cssValue = isArbitrary ? value : value;
      return `opacity: ${cssValue};`;
    }
  };
  
  const generator = rules[property];
  return generator ? generator() : '';
}

/**
 * Generate a single CSS rule from a token
 */
export function generateRule(token, config) {
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
  
  // Add state pseudo-class
  if (state) {
    selector += `:${state}`;
  }
  
  return `${selector} { ${cssDeclaration} }\n`;
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
  
  // Add base reset styles
  css += `/* SenangStart CSS - Base Reset */
*, *::before, *::after {
  box-sizing: border-box;
}

/* Layout utilities */
`;
  
  // Group tokens by breakpoint
  const baseTokens = [];
  const breakpointTokens = {
    mob: [],
    tab: [],
    lap: [],
    desk: []
  };
  
  for (const token of tokens) {
    if (token.breakpoint) {
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
