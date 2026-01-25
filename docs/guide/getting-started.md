# Getting Started

Get up and running with SenangStart CSS in minutes.

## CDN (Zero Build) <Badge type="tip" text="Recommended for prototyping" />

The fastest way to try SenangStart — no build step required:

```html
<!DOCTYPE html>
<html>
<head>
  <title>My App</title>
  <!-- Just add this single script -->
  <script src="https://unpkg.com/@bookklik/senangstart-css/dist/senangstart-css.min.js"></script>
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

### Custom CDN Config

```html
<script type="senangstart/config">
{
  "theme": {
    "colors": {
      "brand": "#8B5CF6",
      "accent": "#EC4899"
    }
  }
}
</script>
<script src="https://unpkg.com/@bookklik/senangstart-css/dist/senangstart-css.min.js"></script>
```

::: warning
CDN JIT is perfect for prototyping and learning. For production, use the CLI build for better performance.
:::

## CLI (Production) <Badge type="info" text="Recommended for production" />

### Installation

```bash
# Install globally
npm install -g @bookklik/senangstart-css

# Or use npx
npx @bookklik/senangstart-css init
```

### Initialize Config

```bash
senangstart init
```

This creates `senangstart.config.js` in your project root.

### Add to HTML

```html
<head>
  <link rel="stylesheet" href="./public/senangstart.css">
</head>
```

### Start Development

```bash
senangstart dev
```

This watches your files and rebuilds on changes.

### Build for Production

```bash
senangstart build --minify
```

## Your First Component

Let's create a simple card:

```html
<div
  layout="flex col"
  space="w:[320px] p:medium"
  visual="bg:white rounded:big shadow:medium"
>
  <div layout="flex between" space="m-b:big">
    <span visual="font:bold text-size:big">Profile</span>
    <span visual="text:primary">Edit</span>
  </div>
  <div layout="flex col" space="g:small">
    <label visual="text:grey text-size:small">Username</label>
    <div visual="text:dark">@senang_dev</div>
  </div>
</div>
```

**What's happening:**

- `layout="flex col"` — Flexbox, vertical direction
- `space="w:[320px] p:medium"` — 320px width, medium padding
- `visual="bg:white rounded:big shadow:medium"` — White background, rounded corners, shadow

## For AI Assistants

If you are using AI coding assistants (like Cursor, Windsurf, or others), you can provide them with our specialized context file. This file contains the full list of available references and usage instructions in a format optimized for LLMs.

File location: [`https://bookklik-technologies.github.io/senangstart-css/llms.txt`](https://bookklik-technologies.github.io/senangstart-css/llms.txt)

## Next Steps

- [Tri-Attribute Syntax](/guide/tri-attribute) — Deep dive into layout, space, visual
- [The Natural Scale](/guide/natural-scale) — Understand spacing philosophy
- [Configuration](/guide/configuration) — Customize the theme
