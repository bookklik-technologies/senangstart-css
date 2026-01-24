---
name: SenangStart CSS Architecture
description: Understanding the core architecture and design patterns of the SenangStart CSS framework
---

# SenangStart CSS Architecture

This skill covers the core architectural concepts of SenangStart CSS - a utility-first CSS framework using natural language naming conventions.

## Core Philosophy: Intent-First CSS

SenangStart CSS replaces abstract utility class names with **Natural Adjectives** that read like human language:

| Framework | Approach |
|-----------|----------|
| Tailwind | `class="flex items-center p-4 bg-blue-500"` |
| SenangStart | `layout="flex items:center" space="p:small" visual="bg:blue-500"` |

## The Tri-Attribute System

All utilities are organized into three semantic HTML attributes:

### 1. `layout` - Structure & Positioning
Controls how elements are arranged and positioned:
- Display modes: `flex`, `grid`, `block`, `inline`
- Flex properties: `row`, `col`, `wrap`, `items:center`, `justify:between`
- Grid: `cols:3`, `rows:2`, `gap:medium`
- Positioning: `relative`, `absolute`, `fixed`, `sticky`

### 2. `space` - Spacing & Dimensions
Controls size and spacing:
- Padding: `p:small`, `p-x:medium`, `p-t:big`
- Margin: `m:auto`, `m-b:giant`, `m-x:vast`
- Width/Height: `w:full`, `h:screen`, `min-w:0`, `max-h:fit`
- Gap: `gap:medium`, `gap-x:small`

### 3. `visual` - Appearance & Effects
Controls visual presentation:
- Colors: `bg:primary`, `text:white`, `border-color:grey`
- Borders: `border:thin`, `rounded:big`
- Typography: `text-size:giant`, `font:bold`, `line:tight`
- Effects: `shadow:medium`, `opacity:50`, `blur:small`
- Transforms: `scale:110`, `rotate:45`, `translate-x:medium`

## Semantic Scale System

Instead of numeric values, SenangStart uses human-readable scales:

### Spacing Scale
```
none → thin → regular → thick → tiny → small → medium → big → giant → vast
0px    1px    2px       3px      4px    8px      16px    32px   48px    64px
```

Extended multipliers: `small-2x`, `medium-2x`, `big-2x`, etc.

### Other Scales
- **Radius**: `none`, `small`, `medium`, `big`, `round`
- **Shadow**: `none`, `small`, `medium`, `big`, `giant`
- **Font Size**: `tiny`, `small`, `base`, `medium`, `big`, `giant`, `vast`

## Source Code Structure

```
src/
├── cdn/
│   ├── senangstart-engine.js    # Browser JIT runtime (core)
│   └── tw-conversion-engine.js  # Tailwind converter
├── cli/
│   ├── index.js                 # CLI entry point
│   └── commands/                # init, build, dev commands
├── compiler/
│   ├── parser.js                # Attribute parser
│   ├── tokenizer.js             # Token extraction
│   └── generators/              # CSS generators
├── config/
│   └── defaults.js              # Default configuration
├── core/
│   ├── constants.js             # BREAKPOINTS, STATES, etc.
│   └── tokenizer-core.js        # Shared tokenizer logic
├── definitions/                 # ⭐ Single Source of Truth
│   ├── index.js                 # Central export
│   ├── layout*.js               # Layout utilities
│   ├── space.js                 # Spacing utilities
│   └── visual*.js               # Visual utilities
└── utils/
    └── css-utils.js             # CSS helper functions
```

## Definitions: Single Source of Truth

All utility definitions live in `src/definitions/`. Each definition object contains:

```javascript
{
  name: 'display',           // Utility name
  property: 'display',       // CSS property(s)
  category: 'layout',        // Category for docs
  attribute: 'layout',       // HTML attribute
  description: 'Controls...', // English description
  descriptionMs: 'Mengawal...', // Malay description
  syntax: 'flex | grid | block | ...', // Usage syntax
  values: [                  // Possible values
    { name: 'flex', value: 'flex', description: '...' }
  ],
  examples: [                // Code examples
    { code: 'layout="flex"', description: '...' }
  ]
}
```

Definitions drive:
- JIT engine behavior
- Documentation generation
- Test expectations
- Type definitions

## Configuration System

Users can extend/override defaults via `senangstart.config.js`:

```javascript
export default {
  theme: {
    spacing: { /* custom values */ },
    colors: { /* brand colors */ },
    // ... other scales
  },
  darkMode: 'media',  // 'media' | 'selector'
  preflight: true     // Include base reset
}
```

## Responsive Design

Breakpoint prefixes on any utility:
```html
<div layout="flex mob:block tab:flex-row lap:gap:medium">
```

Breakpoints:
- `mob`: 480px
- `tab`: 768px  
- `lap`: 1024px
- `desk`: 1280px

## State Variants

State prefixes for interactive styling:
```html
<div visual="bg:white hover:bg:light focus:ring:thin active:scale:95">
```

Supported states: `hover`, `focus`, `active`, `focus-visible`, `disabled`, `group-hover`

## Dark Mode

Automatic dark mode support:
```html
<div visual="bg:white dark:bg:dark text:black dark:text:white">
```

Configured via `darkMode: 'media'` (system) or `darkMode: 'selector'` (class-based).
