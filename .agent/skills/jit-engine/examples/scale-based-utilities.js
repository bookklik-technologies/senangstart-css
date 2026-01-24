/**
 * Example: Handling Scale-Based Utilities
 * 
 * This example shows patterns for utilities that use theme scales
 * like spacing, colors, or custom scales.
 */

// ================================================
// Pattern 1: Using Existing Scale (spacing)
// ================================================

/*
// In generateVisualRule():
if (prop === 'outline-offset') {
  const space = config.theme.spacing[value];
  if (space) {
    return `outline-offset: ${space}`;
  }
  // Fallback to raw value for arbitrary
  if (token.isArbitrary) {
    return `outline-offset: ${value}`;
  }
}
*/

// ================================================
// Pattern 2: Adding a New Custom Scale
// ================================================

// Step 1: Add scale to defaultConfig in senangstart-engine.js
/*
const defaultConfig = {
  theme: {
    // ... existing scales
    blur: {
      'none': '0',
      'tiny': '2px',
      'small': '4px',
      'medium': '8px',
      'big': '16px',
      'giant': '24px'
    }
  }
};
*/

// Step 2: Generate CSS variables in generateCSSVariables()
/*
Object.entries(config.theme.blur).forEach(([name, value]) => {
  vars += `  --ss-blur-${name}: ${value};\n`;
});
*/

// Step 3: Use in generator
/*
if (prop === 'blur') {
  const blur = config.theme.blur[value];
  if (blur) {
    return `filter: blur(${blur})`;
  }
}
*/

// ================================================
// Pattern 3: Directional Utilities
// ================================================

/*
// Handle p-t, p-r, p-b, p-l, p-x, p-y patterns
if (prop.startsWith('p-')) {
  const space = config.theme.spacing[value];
  if (!space) return null;
  
  const dir = prop.substring(2);
  switch (dir) {
    case 't': return `padding-top: ${space}`;
    case 'r': return `padding-right: ${space}`;
    case 'b': return `padding-bottom: ${space}`;
    case 'l': return `padding-left: ${space}`;
    case 'x': return `padding-left: ${space}; padding-right: ${space}`;
    case 'y': return `padding-top: ${space}; padding-bottom: ${space}`;
  }
}
*/

// ================================================
// Pattern 4: Negative Values
// ================================================

/*
// Handle negative margin: m-t:-small
if (prop.startsWith('m-') || prop === 'm') {
  let isNegative = false;
  let val = value;
  
  if (value.startsWith('-')) {
    isNegative = true;
    val = value.substring(1);
  }
  
  const space = config.theme.spacing[val];
  if (space) {
    const finalValue = isNegative ? `-${space}` : space;
    return `margin-${direction}: ${finalValue}`;
  }
}
*/

// ================================================
// Pattern 5: Tailwind Compatibility (tw- prefix)
// ================================================

/*
// In defaultConfig, add tw-* values for Tailwind compatibility
const defaultConfig = {
  theme: {
    spacing: {
      // Native semantic values
      'none': '0px',
      'small': '8px',
      // Tailwind compatibility values
      'tw-0': '0px',
      'tw-1': '0.25rem',
      'tw-2': '0.5rem',
      'tw-4': '1rem',
      // ...
    }
  }
};
*/
