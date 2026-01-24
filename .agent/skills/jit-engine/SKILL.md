---
name: JIT Engine Development
description: Developing and extending the browser-based JIT CSS engine
---

# JIT Engine Development

This skill covers development of `src/cdn/senangstart-engine.js` - the browser-based Just-In-Time CSS compilation engine.

## Engine Overview

The JIT engine is an IIFE (~83KB unminified) that runs in the browser with zero configuration. It:

1. Observes DOM for elements with `layout`, `space`, or `visual` attributes
2. Parses attribute values into utility tokens
3. Generates CSS rules on-demand
4. Injects styles via a `<style>` element
5. Watches for DOM mutations to handle dynamic content

## File Structure

```javascript
// src/cdn/senangstart-engine.js

// Imports from core modules
import { BREAKPOINTS, STATES, LAYOUT_KEYWORDS } from '../core/constants.js';
import { tokenize, parseToken } from '../core/tokenizer-core.js';

(function() {
  'use strict';

  // 1. Default Configuration
  const defaultConfig = { theme: {...}, darkMode: 'media', preflight: true };

  // 2. Config Loader
  function validateConfig(config) {...}
  function loadInlineConfig() {...}
  function mergeConfig(user) {...}

  // 3. CSS Variable Generator
  function generateCSSVariables(config) {...}

  // 4. Utility Generators
  function generateLayoutRule(prop, value, config) {...}
  function generateSpaceRule(prop, value, config) {...}
  function generateVisualRule(prop, value, config) {...}

  // 5. DOM Observer & Style Injection
  function processElement(element) {...}
  function observeDOM() {...}

  // 6. Initialize
  document.addEventListener('DOMContentLoaded', init);
})();
```

## Default Configuration

Located at the top of the engine, `defaultConfig` defines all theme scales:

```javascript
const defaultConfig = {
  theme: {
    spacing: {
      'none': '0px',
      'thin': '1px',
      // ... full scale
      'vast-10x': '384px'
    },
    radius: { 'none': '0px', 'small': '4px', ... },
    shadow: { 'none': 'none', 'small': '...', ... },
    fontSize: { 'tiny': '0.75rem', ... },
    fontWeight: { 'normal': '400', 'medium': '500', 'bold': '700' },
    screens: { 'mob': '480px', 'tab': '768px', ... },
    colors: { 'white': '#FFFFFF', 'primary': '#3B82F6', ... },
    zIndex: { 'base': '0', 'low': '10', ... },
    ring: { 'none': '0px', 'thin': '1px', ... }
  },
  darkMode: 'media',
  preflight: true
};
```

## Adding a New Utility Handler

### Step 1: Identify the Category

- `generateLayoutRule()` - For layout utilities
- `generateSpaceRule()` - For spacing utilities  
- `generateVisualRule()` - For visual utilities

### Step 2: Add Pattern Matching

In the appropriate generator function:

```javascript
function generateVisualRule(prop, value, config) {
  // Existing handlers...

  // ADD: New utility
  if (prop === 'my-utility') {
    // Option 1: Simple keyword mapping
    if (value === 'on') return 'my-css-property: value-on';
    if (value === 'off') return 'my-css-property: value-off';
    
    // Option 2: Scale-based
    const scaleValue = config.theme.myScale?.[value];
    if (scaleValue) return `my-css-property: ${scaleValue}`;
    
    // Option 3: Arbitrary value with [brackets]
    if (value.startsWith('[') && value.endsWith(']')) {
      return `my-css-property: ${value.slice(1, -1)}`;
    }
  }

  // ... rest of handlers
}
```

### Step 3: Add Scale (if needed)

Add to `defaultConfig.theme`:

```javascript
myScale: {
  'small': '4px',
  'medium': '8px',
  'big': '16px'
}
```

And update `generateCSSVariables()` if CSS variables are needed:

```javascript
// In generateCSSVariables():
Object.entries(config.theme.myScale).forEach(([name, value]) => {
  vars += `  --ss-my-scale-${name}: ${value};\n`;
});
```

## State Handling

States (hover, focus, etc.) are handled automatically. The engine:

1. Detects state prefix: `hover:bg:blue-500`
2. Generates CSS with pseudo-selector: `.hover\:bg\:blue-500:hover { ... }`

State parsing occurs in the main processing loop before calling generators.

## Responsive Handling

Breakpoints wrap rules in media queries:

1. Detects breakpoint prefix: `mob:flex`
2. Generates: `@media (min-width: 480px) { .mob\:flex { display: flex } }`

## CSS Variable System

The engine generates CSS variables for all theme values:

```css
:root {
  --ss-spacing-none: 0px;
  --ss-spacing-thin: 1px;
  --ss-radius-small: 4px;
  --ss-color-primary: #3B82F6;
  /* ... */
}
```

Utilities can reference variables:
```javascript
return `border-radius: var(--ss-radius-${value})`;
```

## Testing Engine Changes

After modifying the engine:

1. **Rebuild distribution:**
```bash
npm run build:dist
```

2. **Test in playground:**
   Open `playground/index.html` in browser

3. **Run unit tests:**
```bash
npm run test:unit
```

4. **Check sync tests:**
```bash
npm run test:sync
```

## Common Patterns

### Color Handler
```javascript
if (prop === 'text') {
  const color = config.theme.colors[value];
  if (color) return `color: ${color}`;
  // Support arbitrary colors
  if (value.startsWith('[')) return `color: ${value.slice(1, -1)}`;
}
```

### Spacing Handler
```javascript
if (prop === 'p') { // padding shorthand
  const space = config.theme.spacing[value];
  if (space) return `padding: ${space}`;
}
```

### Multi-Property Handler
```javascript
if (prop === 'inset') {
  const v = config.theme.spacing[value] || value;
  return `top: ${v}; right: ${v}; bottom: ${v}; left: ${v}`;
}
```

### Transform Handler
```javascript
if (prop === 'rotate') {
  return `--ss-rotate: ${value}deg; transform: var(--ss-transform)`;
}
```

## Debugging

Enable debug logging by adding early in the IIFE:
```javascript
const DEBUG = true;
function log(...args) { if (DEBUG) console.log('[SS]', ...args); }
```

Then sprinkle `log()` calls in key functions.
