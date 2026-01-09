# The Natural Scale

SenangStart uses natural adjectives that map to physical objects you can visualize.

## The Philosophy

Instead of arbitrary numbers, think of **physical objects**:

| Keyword | Size | Mental Model |
|---------|------|--------------|
| `none` | 0px | No space |
| `tiny` | 4px | 🪨 **Pebble** — Borders, small offsets |
| `small` | 8px | 📦 **Matchbox** — Group related items |
| `medium` | 16px | 📱 **Smartphone** — Standard default |
| `big` | 32px | 💻 **Laptop** — Separate sections |
| `giant` | 64px | 🚪 **Door** — Layout divisions |
| `vast` | 128px | 🏠 **House** — Hero sections |

## Using the Scale

### When to use each size

**`tiny` (4px)** — For subtle details
- Icon spacing within buttons
- Border widths
- Small visual offsets

```html
<button space="p-x:small p-y:tiny">
  <icon /> Button
</button>
```

**`small` (8px)** — For grouping related items
- Gap between label and input
- Spacing between avatar and name
- Tight list items

```html
<div layout="flex col" space="g:small">
  <label>Email</label>
  <input type="email" />
</div>
```

**`medium` (16px)** — The standard default
- Card padding
- Form field margins
- Standard component spacing

```html
<div space="p:medium">
  Standard card content
</div>
```

**`big` (32px)** — For separating distinct sections
- Between header and content
- Between form groups
- Between major UI blocks

```html
<header space="m-b:big">Page Title</header>
<main>Content separated from header</main>
```

**`giant` (64px)** — For layout divisions
- Between page sections
- Major structural breaks
- Desktop navigation padding

```html
<section space="p-y:giant">
  Major page section
</section>
```

**`vast` (128px)** — For hero sections and major spacing
- Hero section padding
- Large decorative spacing
- Full-bleed sections

```html
<section space="p:vast" visual="bg:dark">
  <h1>Welcome to the App</h1>
</section>
```

## Natural Language Mapping

When talking about spacing adjustments, use natural language:

| You say... | Action |
|------------|--------|
| "tighten it up" | Scale DOWN (medium → small → tiny) |
| "compact" | Use small or tiny |
| "give it air" | Scale UP (medium → big → giant) |
| "breathe" | Increase spacing |
| "spacious" | Use big or giant |
| "cramped" | Too much tiny/small, increase scale |

## Customizing the Scale

Override defaults in `senangstart.config.js`:

```javascript
export default {
  theme: {
    spacing: {
      'tiny': '2px',      // Tighter tiny
      'huge': '256px',    // Add custom scale
      'massive': '512px'  // Even bigger!
    }
  }
}
```

Use your custom scales:

```html
<section space="p:huge">Huge padding</section>
<div space="m-b:massive">Massive margin</div>
```
