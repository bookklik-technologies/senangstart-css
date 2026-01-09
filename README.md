# SenangStart CSS

**The Intent-First CSS Engine**

> "Speak Human. Compile to Logic."

Stop memorizing arbitrary scales like `px-4`, `px-8`, `px-16`. Start using natural adjectives: `tiny`, `small`, `medium`, `big`, `giant`, `vast`.

## Quick Start (CDN - Zero Build)

```html
<!DOCTYPE html>
<html>
<head>
  <script src="https://unpkg.com/@bookklik/senangstart-css/dist/senangstart-css.min.js"></script>
</head>
<body>
  <div
    layout="flex col center"
    space="p:big"
    visual="bg:primary text:white rounded:big"
  >
    Hello SenangStart!
  </div>
</body>
</html>
```

## Quick Start (CLI)

```bash
# Install
npm i @bookklik/senangstart-css

# Initialize config
senangstart init

# Start development
senangstart dev
```

## The Tri-Attribute Syntax

SenangStart uses **three attributes** to separate concerns:

| Attribute | Purpose | Example |
|-----------|---------|---------|
| `layout` | Structure & position | `layout="flex col center"` |
| `space` | Sizing & spacing | `space="p:medium g:small"` |
| `visual` | Colors & appearance | `visual="bg:white rounded:big"` |

## The Natural Spacing Scale

| Keyword | Size | Mental Model |
|---------|------|--------------|
| `none` | 0px | No space |
| `tiny` | 4px | 🪨 Pebble — Borders, offsets |
| `small` | 8px | 📦 Matchbox — Group related items |
| `medium` | 16px | 📱 Smartphone — Standard default |
| `big` | 32px | 💻 Laptop — Separate sections |
| `giant` | 64px | 🚪 Door — Layout divisions |
| `vast` | 128px | 🏠 House — Hero sections |

## Layout Attribute

```html
<!-- Flexbox -->
<div layout="flex row center">...</div>
<div layout="flex col between">...</div>

<!-- Grid -->
<div layout="grid">...</div>

<!-- Position -->
<nav layout="fixed z:top">...</nav>
```

### Keywords

- **Display:** `flex`, `grid`, `block`, `hidden`
- **Direction:** `row`, `col`, `row-reverse`, `col-reverse`
- **Alignment:** `center`, `between`, `start`, `end`
- **Position:** `absolute`, `relative`, `fixed`, `sticky`
- **Z-Index:** `z:base`, `z:low`, `z:mid`, `z:high`, `z:top`

## Space Attribute

Syntax: `[breakpoint]:[property]:[scale]`

```html
<!-- Padding -->
<div space="p:medium">All sides</div>
<div space="p-x:big p-y:small">Horizontal & vertical</div>

<!-- Margin -->
<div space="m-b:big">Bottom margin</div>
<div space="m-x:auto">Center horizontally</div>

<!-- Gap (flex/grid) -->
<div layout="flex" space="g:small">...</div>

<!-- Sizing -->
<div space="w:[100%] max-w:[1200px]">...</div>
```

### Properties

- `p`, `p-t`, `p-r`, `p-b`, `p-l`, `p-x`, `p-y` — Padding
- `m`, `m-t`, `m-r`, `m-b`, `m-l`, `m-x`, `m-y` — Margin
- `g`, `g-x`, `g-y` — Gap
- `w`, `h`, `min-w`, `max-w`, `min-h`, `max-h` — Sizing

### Arbitrary Values (Escape Hatch)

```html
<div space="w:[350px] h:[100vh]">...</div>
```

## Visual Attribute

```html
<!-- Colors -->
<div visual="bg:primary text:white">...</div>

<!-- Borders & Shadows -->
<div visual="rounded:big shadow:medium">...</div>

<!-- Typography -->
<span visual="font:bold text-size:big">...</span>
```

### Properties

- `bg` — Background color
- `text` — Text color or alignment
- `text-size` — Font size (`tiny`, `small`, `medium`, `big`, `giant`, `vast`)
- `font` — Font weight (`normal`, `medium`, `bold`)
- `rounded` — Border radius (`none`, `small`, `medium`, `big`, `round`)
- `shadow` — Box shadow (`none`, `small`, `medium`, `big`, `giant`)

## Responsive Design

```html
<div space="p:small tab:p:medium lap:p:big">
  Grows with screen size
</div>

<div layout="flex col tab:row">
  Column on mobile, row on tablet+
</div>
```

### Breakpoints

| Prefix | Screen |
|--------|--------|
| `mob:` | 480px+ |
| `tab:` | 768px+ |
| `lap:` | 1024px+ |
| `desk:` | 1280px+ |

## Hover & States

```html
<button visual="bg:primary hover:bg:[#2563EB]">
  Hover me
</button>

<a visual="text:grey hover:text:primary">Link</a>
```

## CLI Commands

```bash
senangstart init     # Create config file
senangstart build    # One-time build
senangstart dev      # Watch mode
```

## Configuration

```javascript
// senangstart.config.js
export default {
  content: ['./src/**/*.html'],
  
  output: {
    css: './public/senangstart.css',
    minify: true
  },

  theme: {
    spacing: {
      'huge': '256px'  // Add custom scale
    },
    colors: {
      'brand': '#8B5CF6'  // Add custom color
    }
  }
}
```

## License

MIT

---

*Happy styling!* 🎨
