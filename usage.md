# SenangStart CSS Usage Guide

> How developers use SenangStart CSS in their projects.

---

## Quick Start (CDN - Zero Build)

The fastest way to try SenangStart CSS — no build step required!

```html
<!DOCTYPE html>
<html>
<head>
  <title>My App</title>
  <!-- Just add this single script -->
  <script src="https://cdn.senangstart.dev/jit.js"></script>
</head>
<body>
  <div
    layout="flex col center"
    space="p:big"
    visual="bg:primary text:white rounded:big"
  >
    <h1 visual="text-size:giant font:bold">Hello SenangStart!</h1>
    <p space="m-t:small">Zero config, instant styling.</p>
  </div>
</body>
</html>
```

### How CDN JIT Works

1. **Scans DOM** — Finds all `layout`, `space`, and `visual` attributes
2. **Generates CSS** — Compiles styles on-the-fly in the browser
3. **Injects Styles** — Creates `<style>` tags with compiled CSS
4. **Watches Changes** — Uses MutationObserver for dynamic updates

### Custom Config (CDN)

```html
<script type="senangstart/config">
{
  "theme": {
    "colors": {
      "brand": "#8B5CF6",
      "accent": "#EC4899"
    },
    "spacing": {
      "huge": "256px"
    }
  }
}
</script>
<script src="https://cdn.senangstart.dev/jit.js"></script>
```

> ⚠️ **Note:** CDN JIT is great for prototyping and learning. For production, use the CLI build for better performance.

---

## Quick Start (CLI - Recommended for Production)

### 1. Installation

```bash
# Install globally
npm install -g senangstart-css

# Or use npx
npx senangstart-css init
```

### 2. Initialize Config

```bash
senangstart init
```

This creates `senangstart.config.js` in your project root.

### 3. Add to HTML

```html
<head>
  <link rel="stylesheet" href="./public/senangstart.css">
</head>
```

### 4. Start Development

```bash
senangstart dev
```

---

## Core Syntax

SenangStart uses **three attributes** to separate concerns:

| Attribute | Purpose | Controls |
|-----------|---------|----------|
| `layout` | Structure | Flex, grid, position, z-index |
| `space` | Dimensions | Padding, margin, gap, width, height |
| `visual` | Appearance | Colors, shadows, borders, typography |

---

## Layout Attribute

Controls **how elements are positioned**.

```html
<!-- Flexbox -->
<div layout="flex row center">...</div>
<div layout="flex col between">...</div>

<!-- Grid -->
<div layout="grid center">...</div>

<!-- Position -->
<nav layout="fixed z:top">...</nav>
<div layout="sticky">...</div>
<div layout="absolute z:high">...</div>

<!-- Display -->
<div layout="hidden">...</div>
<div layout="block">...</div>
```

### Layout Keywords

| Keyword | Effect |
|---------|--------|
| `flex` | `display: flex` |
| `grid` | `display: grid` |
| `block` | `display: block` |
| `hidden` | `display: none` |
| `row` | `flex-direction: row` |
| `col` | `flex-direction: column` |
| `center` | Center both axes |
| `between` | `justify-content: space-between` |
| `wrap` | `flex-wrap: wrap` |
| `absolute`, `relative`, `fixed`, `sticky` | Position |
| `z:base`, `z:low`, `z:mid`, `z:high`, `z:top` | Z-index |

---

## Space Attribute

Controls **sizing and spacing** using natural scale.

### Syntax Pattern

```
[breakpoint]:[property]:[scale]
```

### Scale Values

| Scale | Size | Use Case |
|-------|------|----------|
| `none` | 0px | Reset |
| `tiny` | 4px | Borders, small offsets |
| `small` | 8px | Group related items |
| `medium` | 16px | Standard spacing |
| `big` | 32px | Separate sections |
| `giant` | 64px | Layout divisions |
| `vast` | 128px | Hero sections |

### Examples

```html
<!-- Padding -->
<div space="p:medium">All sides</div>
<div space="p-x:big p-y:small">Horizontal & vertical</div>
<div space="p-t:small p-b:big">Top & bottom</div>

<!-- Margin -->
<div space="m:medium">All sides</div>
<div space="m-b:big">Bottom margin</div>
<div space="m-x:auto">Center horizontally</div>

<!-- Gap (for flex/grid) -->
<div layout="flex" space="g:small">...</div>
<div layout="grid" space="g:medium">...</div>

<!-- Sizing -->
<div space="w:[100%] h:[400px]">...</div>
<div space="max-w:[1200px] min-h:[80vh]">...</div>
```

### Arbitrary Values (Escape Hatch)

Use brackets `[value]` for specific numbers:

```html
<div space="w:[350px] h:[200px]">...</div>
<div space="p:[20px_40px]">...</div>
<div space="m-t:[5rem]">...</div>
```

---

## Visual Attribute

Controls **appearance and styling**.

```html
<!-- Background -->
<div visual="bg:white">...</div>
<div visual="bg:primary">...</div>
<div visual="bg:[#FF5733]">...</div>

<!-- Text -->
<span visual="text:dark">...</span>
<span visual="text:grey text-size:small">...</span>
<span visual="font:bold">...</span>

<!-- Borders & Shadows -->
<div visual="rounded:medium shadow:big">...</div>
<div visual="border:grey border-w:[2px]">...</div>

<!-- Combined -->
<div visual="bg:white rounded:big shadow:medium text:dark">
  Card content
</div>
```

### Visual Keywords

| Property | Values |
|----------|--------|
| `bg` | Color keys or `bg:[hex]` |
| `text` | Color keys |
| `text-size` | `tiny`, `small`, `medium`, `big`, `giant`, `vast` |
| `font` | `normal`, `medium`, `bold` |
| `text` | `left`, `center`, `right` (alignment) |
| `rounded` | `none`, `small`, `medium`, `big`, `round` |
| `shadow` | `none`, `small`, `medium`, `big`, `giant` |
| `border` | Color keys |
| `opacity` | `opacity:[0.5]` |

---

## Responsive Design

Add breakpoint prefixes for responsive behavior.

| Prefix | Screen Size |
|--------|-------------|
| `mob:` | 480px+ |
| `tab:` | 768px+ |
| `lap:` | 1024px+ |
| `desk:` | 1280px+ |

### Mobile-First Example

```html
<div space="p:small tab:p:medium lap:p:big">
  <!-- Small padding on mobile, grows on larger screens -->
</div>

<div layout="flex col tab:row">
  <!-- Column on mobile, row on tablet+ -->
</div>

<section space="p:medium tab:p:big desk:p:giant">
  <!-- Progressive spacing increase -->
</section>
```

---

## Hover & States

Add state prefixes for interactive styles.

```html
<button visual="bg:primary hover:bg:[#2563EB] text:white">
  Hover me
</button>

<a visual="text:grey hover:text:primary">
  Link
</a>

<input visual="border:grey focus:border:primary" />

<button visual="bg:primary disabled:bg:grey disabled:opacity:[0.5]">
  Submit
</button>
```

---

## Complete Examples

### Card Component

```html
<div
  layout="flex col"
  space="w:[320px] p:medium"
  visual="bg:white rounded:big shadow:medium"
>
  <div layout="flex between" space="m-b:big">
    <span visual="font:bold text-size:big">Profile</span>
    <span visual="text:grey">Edit</span>
  </div>
  <div layout="flex col" space="g:small">
    <label visual="text:grey text-size:small">Username</label>
    <div visual="text:dark">@senang_dev</div>
  </div>
</div>
```

### Navigation

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
  </div>
</nav>
```

### Hero Section

```html
<section
  layout="flex col center"
  space="p:big tab:p:giant min-h:[80vh]"
  visual="bg:dark text:white"
>
  <h1 visual="text-size:giant font:bold">Welcome</h1>
  <p space="max-w:[600px] m-t:medium" visual="text:light text:center">
    The Intent-First CSS Engine.
  </p>
  <button
    space="p-x:big p-y:small m-t:big"
    visual="bg:primary text:white rounded:medium hover:bg:[#2563EB]"
  >
    Get Started
  </button>
</section>
```

### Responsive Grid

```html
<div
  layout="grid"
  space="g:medium p:medium"
  style="grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));"
>
  <div visual="bg:white rounded:medium shadow:small" space="p:medium">
    Card 1
  </div>
  <div visual="bg:white rounded:medium shadow:small" space="p:medium">
    Card 2
  </div>
  <div visual="bg:white rounded:medium shadow:small" space="p:medium">
    Card 3
  </div>
</div>
```

---

## Configuration

### Custom Config

```javascript
// senangstart.config.js
export default {
  content: ['./src/**/*.html', './components/**/*.jsx'],
  
  output: {
    css: './public/senangstart.css',
    minify: true
  },

  theme: {
    spacing: {
      'tiny': '2px',      // Override default
      'huge': '256px'     // Add new scale
    },
    colors: {
      'brand': '#8B5CF6', // Add custom color
      'accent': '#EC4899'
    }
  }
}
```

### Usage After Custom Config

```html
<div space="p:huge">...</div>
<div visual="bg:brand text:accent">...</div>
```

---

## CLI Commands

```bash
# Initialize config file
senang init

# Build once
senang build

# Build minified for production
senang build --minify

# Watch mode (development)
senang dev
```

---

## Framework Integration

### React/Next.js

```jsx
export function Card({ title, children }) {
  return (
    <div
      layout="flex col"
      space="p:medium"
      visual="bg:white rounded:big shadow:medium"
    >
      <h2 visual="font:bold text-size:big">{title}</h2>
      <div space="m-t:small">{children}</div>
    </div>
  );
}
```

### Vue

```vue
<template>
  <div
    layout="flex col"
    space="p:medium"
    visual="bg:white rounded:big shadow:medium"
  >
    <slot />
  </div>
</template>
```

### Svelte

```svelte
<div
  layout="flex col"
  space="p:medium"
  visual="bg:white rounded:big shadow:medium"
>
  <slot />
</div>
```

---

## Tips

1. **Start with `medium`** — It's the default, well-balanced spacing
2. **Use `small` to group** — Keep related items close together
3. **Use `big` to separate** — Create visual hierarchy between sections
4. **Think in natural language** — "tighten up" = scale down, "give air" = scale up
5. **Escape hatch sparingly** — Use `[value]` only for specific requirements

---

*Happy styling with SenangStart CSS!* 🎨
