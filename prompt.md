# SenangStart CSS Development Prompt

> **Purpose:** A comprehensive structural guide for developing the SenangStart CSS framework—the Intent-First CSS Engine that speaks human and compiles to logic.

---

## 🎯 Project Overview

**Name:** SenangStart CSS  
**Tagline:** The Intent-First CSS Engine  
**Philosophy:** "Speak Human. Compile to Logic."

SenangStart CSS is a utility-first CSS framework that replaces abstract naming conventions with **Natural Adjectives**. Instead of memorizing arbitrary scales like `px-4`, `px-8`, `px-16`, developers use intuitive keywords like `tiny`, `small`, `medium`, `big`, `giant`, and `vast`.

---

## 📁 Project Structure

```
senangstart-css/
├── src/
│   ├── cli/
│   │   ├── index.js              # CLI entry point
│   │   ├── watcher.js            # File watcher for live compilation
│   │   └── commands/
│   │       ├── build.js          # Build command handler
│   │       ├── init.js           # Initialize config file
│   │       └── dev.js            # Development mode with watch
│   │
│   ├── compiler/
│   │   ├── index.js              # Main compiler orchestrator
│   │   ├── parser.js             # HTML attribute parser
│   │   ├── tokenizer.js          # Token extraction from attributes
│   │   └── generators/
│   │       ├── css.js            # CSS stylesheet generator
│   │       ├── ai-context.js     # AI bridge file generator
│   │       └── typescript.js     # TypeScript definitions generator
│   │
│   ├── cdn/
│   │   ├── jit.js                # Browser JIT runtime (CDN version)
│   │   ├── parser.js             # DOM attribute scanner
│   │   ├── compiler.js           # Runtime CSS generator
│   │   └── observer.js           # MutationObserver for dynamic updates
│   │
│   ├── config/
│   │   ├── loader.js             # Config file loader
│   │   ├── defaults.js           # Default configuration values
│   │   └── validator.js          # Config schema validation
│   │
│   └── utils/
│       ├── file.js               # File system utilities
│       ├── logger.js             # Console logging with colors
│       └── hash.js               # Content hashing for caching
│
├── templates/
│   ├── senangstart.config.js          # Default config template
│   ├── ai-context.template.md    # AI context file template
│   └── types.template.d.ts       # TypeScript definitions template
│
├── dist/                         # Compiled output (generated)
│   ├── senangstart.css
│   ├── senangstart.min.css
│   └── types/
│       └── senangstart.d.ts
│
├── tests/
│   ├── parser.test.js
│   ├── compiler.test.js
│   └── fixtures/
│       └── sample-components/
│
├── docs/
│   ├── getting-started.md
│   ├── configuration.md
│   ├── syntax-reference.md
│   └── examples/
│
├── package.json
├── senangstart.config.js              # Example/default config
├── blueprint.md                  # Original blueprint
└── README.md
```

---

## 🔧 Core Configuration Schema

### `senangstart.config.js`

```javascript
export default {
  // Input files to scan for attributes
  content: [
    './src/**/*.{html,jsx,tsx,vue,svelte}',
    './pages/**/*.{html,jsx,tsx}',
    './components/**/*.{html,jsx,tsx}'
  ],

  // Output configuration
  output: {
    css: './public/senangstart.css',
    minify: true,
    aiContext: './.cursorrules',        // AI bridge output
    typescript: './types/senang.d.ts'   // TS definitions
  },

  theme: {
    // 1. SPACING: The "Natural Object" Scale
    spacing: {
      'none':   '0px',      // No space
      'tiny':   '4px',      // Pebble (Borders, offsets)
      'small':  '8px',      // Matchbox (Grouping inside components)
      'medium': '16px',     // Smartphone (Standard default)
      'big':    '32px',     // Laptop (Separation between groups)
      'giant':  '64px',     // Door (Layout sections)
      'vast':   '128px'     // House (Hero sections)
    },

    // 2. RADIUS: Tactile Feel
    radius: {
      'none':   '0px',      // Sharp corners
      'small':  '4px',      // Subtle nudge
      'medium': '8px',      // Soft corner
      'big':    '16px',     // Distinct curve
      'round':  '9999px'    // Pill/Circle
    },

    // 3. SHADOWS: Depth Perception
    shadow: {
      'none':   'none',
      'small':  '0 1px 2px rgba(0,0,0,0.05)',
      'medium': '0 4px 6px rgba(0,0,0,0.1)',
      'big':    '0 10px 15px rgba(0,0,0,0.15)',
      'giant':  '0 25px 50px rgba(0,0,0,0.25)'
    },

    // 4. FONT SIZES: Reading Scale
    fontSize: {
      'tiny':   '12px',
      'small':  '14px',
      'medium': '16px',
      'big':    '20px',
      'giant':  '32px',
      'vast':   '48px'
    },

    // 5. BREAKPOINTS: Device Intent
    screens: {
      'mob':  '480px',      // Mobile
      'tab':  '768px',      // Tablet
      'lap':  '1024px',     // Laptop
      'desk': '1280px'      // Desktop
    },

    // 6. COLORS: Semantic Palette
    colors: {
      'white':    '#FFFFFF',
      'black':    '#000000',
      'grey':     '#6B7280',
      'dark':     '#1F2937',
      'light':    '#F3F4F6',
      'primary':  '#3B82F6',
      'success':  '#10B981',
      'warning':  '#F59E0B',
      'danger':   '#EF4444'
    },

    // 7. Z-INDEX: Stacking Order
    zIndex: {
      'base':   '0',
      'low':    '10',
      'mid':    '50',
      'high':   '100',
      'top':    '9999'
    }
  },

  // Extend or override defaults
  extend: {}
}
```

---

## 📐 Tri-Attribute Syntax Specification

### A. `layout="..."` — The Skeleton

Controls positioning, display logic, and flow.

| Category | Keywords | CSS Output |
|----------|----------|------------|
| **Display** | `flex`, `grid`, `block`, `inline`, `hidden` | `display: flex/grid/block/inline-block/none` |
| **Direction** | `row`, `col`, `row-reverse`, `col-reverse` | `flex-direction: row/column/row-reverse/column-reverse` |
| **Alignment** | `center`, `start`, `end`, `between`, `around`, `evenly` | `justify-content` / `align-items` combinations |
| **Wrap** | `wrap`, `nowrap` | `flex-wrap: wrap/nowrap` |
| **Position** | `absolute`, `relative`, `fixed`, `sticky` | `position: absolute/relative/fixed/sticky` |
| **Z-Index** | `z:base`, `z:low`, `z:mid`, `z:high`, `z:top` | `z-index: 0/10/50/100/9999` |
| **Overflow** | `overflow:hidden`, `overflow:auto`, `overflow:scroll` | `overflow: hidden/auto/scroll` |

**Example:**
```html
<div layout="flex col center wrap">...</div>
<nav layout="fixed z:top">...</nav>
```

---

### B. `space="..."` — The Geometry

Controls size, gaps, and breathing room using the Natural Scale.

**Syntax Pattern:** `[breakpoint]:[property]:[scale]`

| Property | Meaning | CSS Property |
|----------|---------|--------------|
| `p` | Padding (all sides) | `padding` |
| `p-t`, `p-r`, `p-b`, `p-l` | Padding (single side) | `padding-top/right/bottom/left` |
| `p-x`, `p-y` | Padding (horizontal/vertical) | `padding-left/right` or `padding-top/bottom` |
| `m` | Margin (all sides) | `margin` |
| `m-t`, `m-r`, `m-b`, `m-l` | Margin (single side) | `margin-top/right/bottom/left` |
| `m-x`, `m-y` | Margin (horizontal/vertical) | `margin-left/right` or `margin-top/bottom` |
| `g` | Gap (flex/grid) | `gap` |
| `g-x`, `g-y` | Gap (column/row) | `column-gap/row-gap` |
| `w` | Width | `width` |
| `h` | Height | `height` |
| `min-w`, `max-w` | Min/Max Width | `min-width/max-width` |
| `min-h`, `max-h` | Min/Max Height | `min-height/max-height` |

**Scale Values:** `none`, `tiny`, `small`, `medium`, `big`, `giant`, `vast`

**Escape Hatch:** Use brackets for specific "Magic Numbers"
- `w:[350px]` → `width: 350px`
- `h:[100vh]` → `height: 100vh`
- `p:[20px_40px]` → `padding: 20px 40px`

**Responsive Prefixes:** `mob:`, `tab:`, `lap:`, `desk:`

**Examples:**
```html
<div space="p:medium g:small">...</div>
<section space="p:medium tab:p:big desk:p:giant">...</section>
<div space="w:[100%] max-w:[1200px] m-x:auto">...</div>
```

---

### C. `visual="..."` — The Skin

Controls texture, color, and state.

| Property | Meaning | Values |
|----------|---------|--------|
| `bg` | Background color | Color keys or hex `bg:[#FF5733]` |
| `text` | Text color | Color keys |
| `border` | Border color | Color keys |
| `border-w` | Border width | Scale or `border-w:[2px]` |
| `shadow` | Box shadow | `none`, `small`, `medium`, `big`, `giant` |
| `rounded` | Border radius | `none`, `small`, `medium`, `big`, `round` |
| `opacity` | Opacity | `opacity:[0.5]` or keywords |
| `font` | Font weight | `font:normal`, `font:medium`, `font:bold` |
| `text-size` | Font size | Scale keywords |
| `text-align` | Text alignment | `text:left`, `text:center`, `text:right` |

**Pseudo-state Prefixes:** `hover:`, `focus:`, `active:`, `disabled:`

**Examples:**
```html
<div visual="bg:white rounded:big shadow:medium">...</div>
<button visual="bg:primary text:white hover:bg:[#2563EB]">...</button>
<span visual="text:grey text-size:small font:medium">...</span>
```

---

## 🏗️ Compiler Implementation Details

### 1. Parser Module (`src/compiler/parser.js`)

**Responsibilities:**
- Scan HTML/JSX/Vue/Svelte files for `layout`, `space`, and `visual` attributes
- Extract attribute values using regex patterns
- Handle multi-line attributes and template literals
- Support both single and double quotes

**Regex Patterns:**
```javascript
const ATTRIBUTE_PATTERNS = {
  layout: /layout=["']([^"']+)["']/g,
  space:  /space=["']([^"']+)["']/g,
  visual: /visual=["']([^"']+)["']/g
};
```

---

### 2. Tokenizer Module (`src/compiler/tokenizer.js`)

**Responsibilities:**
- Split attribute values into individual tokens
- Parse token syntax: `[breakpoint]:[property]:[value]`
- Identify escape hatch patterns `[arbitrary value]`
- Validate tokens against config schema

**Token Structure:**
```javascript
{
  raw: 'tab:p:big',
  breakpoint: 'tab',    // null if base
  property: 'p',
  value: 'big',
  isArbitrary: false
}
```

---

### 3. CSS Generator (`src/compiler/generators/css.js`)

**Responsibilities:**
- Generate CSS custom properties from config
- Create attribute selectors for each token
- Group media queries by breakpoint
- Minify output when configured

**Selector Strategy:**
```css
/* Use ~= for space-separated attribute matching */
[layout~="flex"] { display: flex; }
[space~="p:medium"] { padding: var(--s-medium); }

/* Media query wrapping */
@media (min-width: 768px) {
  [space~="tab:p:big"] { padding: var(--s-big); }
}
```

---

### 4. AI Context Generator (`src/compiler/generators/ai-context.js`)

**Output Format:** `.cursorrules` or `ai-context.md`

**Content Structure:**
```markdown
# SenangStart CSS - AI Context Guide

## Spacing System
| Keyword | Size | Use Case |
|---------|------|----------|
| none | 0px | Reset spacing |
| tiny | 4px | Borders, offsets |
| small | 8px | Group related items |
| medium | 16px | Standard default |
| big | 32px | Separate sections |
| giant | 64px | Layout divisions |
| vast | 128px | Hero sections |

## Natural Language Mapping
- "tighten it up" → Scale DOWN (medium → small → tiny)
- "give it air" / "breathe" → Scale UP (medium → big → giant)
- "make it pop" → Add shadow:big, increase rounded
- "subtle" → shadow:small, rounded:small

## Attribute Reference
- `layout="..."` → Positioning & flow (flex, grid, center)
- `space="..."` → Sizing & gaps (p:medium, g:small, w:[100%])
- `visual="..."` → Colors & texture (bg:white, rounded:big)

## Responsive Prefixes
- `mob:` → Mobile first (480px+)
- `tab:` → Tablet (768px+)
- `lap:` → Laptop (1024px+)
- `desk:` → Desktop (1280px+)
```

---

### 5. TypeScript Generator (`src/compiler/generators/typescript.js`)

**Output:** `types/senang.d.ts`

```typescript
declare module 'react' {
  interface HTMLAttributes<T> {
    layout?: 
      | 'flex' | 'grid' | 'block' | 'hidden'
      | 'flex row' | 'flex col' | 'flex center'
      | 'grid center' | string;
    
    space?: 
      | 'p:none' | 'p:tiny' | 'p:small' | 'p:medium' | 'p:big' | 'p:giant' | 'p:vast'
      | 'g:none' | 'g:tiny' | 'g:small' | 'g:medium' | 'g:big'
      | string;
    
    visual?: 
      | 'bg:white' | 'bg:black' | 'bg:primary'
      | 'rounded:none' | 'rounded:small' | 'rounded:medium' | 'rounded:big' | 'rounded:round'
      | 'shadow:none' | 'shadow:small' | 'shadow:medium' | 'shadow:big'
      | string;
  }
}

declare module 'vue' {
  interface HTMLAttributes {
    layout?: string;
    space?: string;
    visual?: string;
  }
}
```

---

## 🌐 CDN JIT (Browser Runtime)

The CDN JIT allows developers to use SenangStart without any build step—perfect for prototyping, learning, and quick demos.

### Usage

```html
<!DOCTYPE html>
<html>
<head>
  <script src="https://cdn.senangstart.dev/jit.js"></script>
</head>
<body>
  <div layout="flex center" space="p:big" visual="bg:primary text:white rounded:big">
    Hello SenangStart!
  </div>
</body>
</html>
```

### Inline Configuration

```html
<script type="senangstart/config">
{
  "theme": {
    "colors": {
      "brand": "#8B5CF6"
    }
  }
}
</script>
<script src="https://cdn.senangstart.dev/jit.js"></script>
```

### JIT Architecture (`src/cdn/jit.js`)

```javascript
(function() {
  'use strict';
  
  // 1. Load inline config if present
  const configEl = document.querySelector('script[type="senangstart/config"]');
  const userConfig = configEl ? JSON.parse(configEl.textContent) : {};
  const config = mergeConfig(defaultConfig, userConfig);
  
  // 2. Generate CSS variables
  const cssVars = generateCSSVariables(config);
  
  // 3. Scan DOM for attributes
  function scanDOM() {
    const elements = document.querySelectorAll('[layout], [space], [visual]');
    const tokens = new Set();
    
    elements.forEach(el => {
      ['layout', 'space', 'visual'].forEach(attr => {
        const value = el.getAttribute(attr);
        if (value) {
          value.split(/\s+/).forEach(token => tokens.add(`${attr}:${token}`));
        }
      });
    });
    
    return tokens;
  }
  
  // 4. Compile CSS
  function compileCSS(tokens) {
    let css = cssVars;
    tokens.forEach(token => {
      css += generateRule(token, config);
    });
    return css;
  }
  
  // 5. Inject styles
  function injectStyles(css) {
    let styleEl = document.getElementById('senangstart-jit');
    if (!styleEl) {
      styleEl = document.createElement('style');
      styleEl.id = 'senangstart-jit';
      document.head.appendChild(styleEl);
    }
    styleEl.textContent = css;
  }
  
  // 6. Watch for DOM changes
  const observer = new MutationObserver(() => {
    const tokens = scanDOM();
    const css = compileCSS(tokens);
    injectStyles(css);
  });
  
  // Initialize
  document.addEventListener('DOMContentLoaded', () => {
    const tokens = scanDOM();
    const css = compileCSS(tokens);
    injectStyles(css);
    
    observer.observe(document.body, {
      childList: true,
      subtree: true,
      attributes: true,
      attributeFilter: ['layout', 'space', 'visual']
    });
  });
})();
```

### CDN vs CLI Comparison

| Feature | CDN JIT | CLI Build |
|---------|---------|-----------|
| Setup | Zero config | Requires npm install |
| Build Step | None | Required |
| Performance | Runtime overhead | Pre-compiled, fast |
| File Size | ~15KB JS | Only CSS you use |
| Use Case | Prototyping, learning | Production apps |
| Dynamic Content | ✅ Automatic | Requires rebuild |

---

## 🖥️ CLI Commands

### Installation
```bash
npm install -g senangstart-css
# or
npx senangstart-css init
```

### Commands

| Command | Description |
|---------|-------------|
| `senang init` | Create `senangstart.config.js` with defaults |
| `senang build` | One-time compilation |
| `senang dev` | Watch mode with live reload |
| `senang build --minify` | Production build with minification |

### CLI Implementation (`src/cli/index.js`)

```javascript
#!/usr/bin/env node
import { program } from 'commander';
import { build, dev, init } from './commands/index.js';

program
  .name('senang')
  .description('SenangStart CSS - The Intent-First CSS Engine')
  .version('1.0.0');

program
  .command('init')
  .description('Initialize a new senangstart.config.js')
  .action(init);

program
  .command('build')
  .option('--minify', 'Minify CSS output')
  .option('--config <path>', 'Path to config file')
  .action(build);

program
  .command('dev')
  .description('Watch mode with live compilation')
  .action(dev);

program.parse();
```

---

## ✅ Implementation Checklist

### Phase 1: Foundation
- [ ] Initialize npm package with ESM modules
- [ ] Create default configuration schema
- [ ] Implement config loader with defaults fallback
- [ ] Set up project structure

### Phase 2: Core Compiler
- [ ] Build HTML/JSX parser for attribute extraction
- [ ] Implement tokenizer for syntax parsing
- [ ] Create CSS generator with attribute selectors
- [ ] Handle responsive breakpoint wrapping
- [ ] Support escape hatch `[arbitrary]` values

### Phase 3: CLI & Developer Experience
- [ ] Set up Commander.js CLI
- [ ] Implement `init` command
- [ ] Implement `build` command
- [ ] Implement `dev` watch mode with chokidar
- [ ] Add colorful console logging

### Phase 4: AI & TypeScript Integration
- [ ] Create AI context generator
- [ ] Generate `.cursorrules` file
- [ ] Create TypeScript definitions generator
- [ ] Auto-generate union types from config

### Phase 5: Testing & Documentation
- [ ] Write unit tests for parser
- [ ] Write unit tests for compiler
- [ ] Create example components
- [ ] Write getting-started guide
- [ ] Write syntax reference documentation

### Phase 6: Polish & Optimization
- [ ] Implement CSS minification
- [ ] Add content hashing for caching
- [ ] Performance optimization
- [ ] VS Code extension (optional)

### Phase 7: CDN JIT (Browser Runtime)
- [ ] Create browser-compatible parser (no Node.js dependencies)
- [ ] Implement DOM scanner for tri-attributes
- [ ] Build runtime CSS generator
- [ ] Add MutationObserver for dynamic DOM updates
- [ ] Support inline config via `<script type="senangstart/config">`
- [ ] Bundle and minify for CDN distribution
- [ ] Deploy to CDN (cdn.senangstart.dev)

---

## 📝 Example Component Library

### Card Component
```html
<div
  layout="flex col"
  space="w:[320px] p:medium"
  visual="bg:white rounded:big shadow:medium"
>
  <div layout="flex between" space="m-b:big">
    <span visual="font:bold text-size:big">Title</span>
    <span visual="text:grey">Action</span>
  </div>
  <div layout="flex col" space="g:small">
    <p visual="text:dark">Content goes here</p>
  </div>
</div>
```

### Navigation Bar
```html
<nav
  layout="flex between center fixed z:top"
  space="w:[100%] p-x:big p-y:small"
  visual="bg:white shadow:small"
>
  <div visual="font:bold text-size:big">Logo</div>
  <div layout="flex" space="g:medium">
    <a visual="text:dark hover:text:primary">Home</a>
    <a visual="text:grey hover:text:primary">About</a>
    <a visual="text:grey hover:text:primary">Contact</a>
  </div>
</nav>
```

### Hero Section
```html
<section
  layout="flex col center"
  space="p:giant tab:p:vast min-h:[80vh]"
  visual="bg:dark text:white text:center"
>
  <h1 space="m-b:medium" visual="text-size:vast font:bold">
    Welcome to SenangStart
  </h1>
  <p space="max-w:[600px] m-b:big" visual="text:light text-size:big">
    The Intent-First CSS Engine that speaks your language.
  </p>
  <button
    space="p-x:big p-y:small"
    visual="bg:primary text:white rounded:medium hover:bg:[#2563EB]"
  >
    Get Started
  </button>
</section>
```

---

## 🎨 Design Principles

1. **Natural Language First**
   - Keywords should be immediately understandable
   - No memorization of arbitrary numbers

2. **Separation of Concerns**
   - `layout` = Structure (flex, grid, position)
   - `space` = Dimensions (padding, margin, gap)
   - `visual` = Appearance (colors, shadows, borders)

3. **Progressive Disclosure**
   - Start with simple keywords
   - Escape hatch `[value]` for edge cases
   - Responsive prefixes when needed

4. **AI-Friendly**
   - Generated context helps LLMs understand the system
   - Natural language mappings for common requests

---

*Generated from SenangStart CSS Blueprint v1.0*
