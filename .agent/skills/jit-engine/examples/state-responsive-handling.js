/**
 * Example: State and Responsive Handling
 * 
 * This example shows how states (hover, focus) and 
 * responsive prefixes (mob, tab) work in the engine.
 */

// ================================================
// State Handling in JIT Engine
// ================================================

/*
// States are parsed in processTokens() before calling generators
function processTokens(attrValue, attrType) {
  const tokens = attrValue.trim().split(/\s+/);
  
  for (const token of tokens) {
    const parts = token.split(':');
    let state = null;
    let breakpoint = null;
    let propIdx = 0;
    
    // Check for breakpoint prefix (mob:, tab:, etc.)
    if (BREAKPOINTS.includes(parts[0])) {
      breakpoint = parts[0];
      propIdx++;
    }
    
    // Check for state prefix (hover:, focus:, etc.)
    if (STATES.includes(parts[propIdx])) {
      state = parts[propIdx];
      propIdx++;
    }
    
    // Rest is property:value
    const property = parts[propIdx];
    const value = parts.slice(propIdx + 1).join(':');
    
    generateRule({ property, value, state, breakpoint });
  }
}
*/

// ================================================
// Generating State-Based CSS
// ================================================

/*
function generateSelector(rawToken, attrType, state) {
  // Escape special characters in selector
  const escaped = rawToken.replace(/:/g, '\\:');
  const baseSelector = `[${attrType}~="${rawToken}"]`;
  
  if (state) {
    // Add pseudo-class
    return `${baseSelector}:${state}`;
  }
  
  return baseSelector;
}

// Example output:
// [visual~="hover:bg:blue-500"]:hover { background-color: #3B82F6 }
*/

// ================================================
// Responsive Breakpoint Handling
// ================================================

/*
function wrapWithMediaQuery(css, breakpoint, config) {
  if (!breakpoint) return css;
  
  const minWidth = config.theme.screens[breakpoint];
  return `@media (min-width: ${minWidth}) {\n  ${css}\n}`;
}

// Example output:
// @media (min-width: 768px) {
//   [layout~="tab:flex"] { display: flex }
// }
*/

// ================================================
// Group Hover (Parent-Child States)
// ================================================

/*
// group-hover: requires parent with 'group' class
if (state === 'group-hover') {
  // Selector: .group:hover [visual~="group-hover:bg:blue-500"]
  return `.group:hover ${baseSelector}`;
}

// Usage:
// <div layout="group">
//   <span visual="group-hover:text:blue-500">Hover parent to change me</span>
// </div>
*/

// ================================================
// Dark Mode State
// ================================================

/*
function getDarkModeSelector(config) {
  if (config.darkMode === 'media') {
    return '@media (prefers-color-scheme: dark)';
  }
  return '.dark';  // Selector mode
}

// For dark: state
if (state === 'dark') {
  if (config.darkMode === 'media') {
    return `@media (prefers-color-scheme: dark) {\n  ${baseSelector} { ${css} }\n}`;
  } else {
    return `.dark ${baseSelector} { ${css} }`;
  }
}
*/

// ================================================
// Combining States and Breakpoints
// ================================================

/*
// Token: tab:hover:bg:blue-500
// Breakdown:
//   breakpoint: 'tab' (768px)
//   state: 'hover'
//   property: 'bg'
//   value: 'blue-500'

// Output:
// @media (min-width: 768px) {
//   [visual~="tab:hover:bg:blue-500"]:hover {
//     background-color: #3B82F6
//   }
// }
*/

// ================================================
// Available States (from constants.js)
// ================================================

const STATES = [
  'hover',
  'focus',
  'active',
  'focus-visible',
  'focus-within',
  'disabled',
  'group-hover',
  'first',
  'last',
  'odd',
  'even',
  'dark'
];

// ================================================
// Available Breakpoints (from constants.js)
// ================================================

const BREAKPOINTS = [
  'mob',   // 480px  (mobile)
  'tab',   // 768px  (tablet)
  'lap',   // 1024px (laptop)
  'desk',  // 1280px (desktop)
  // Tailwind compat
  'tw-sm', // 640px
  'tw-md', // 768px
  'tw-lg', // 1024px
  'tw-xl', // 1280px
  'tw-2xl' // 1536px
];
