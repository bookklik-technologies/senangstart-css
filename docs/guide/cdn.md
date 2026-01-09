# CDN (Zero Build)

The fastest way to use SenangStart CSS — no build step required.

## Quick Start

Add a single script tag to your HTML:

```html
<!DOCTYPE html>
<html>
<head>
  <title>My App</title>
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

That's it! No npm, no build process, no configuration.

## How It Works

The CDN JIT (Just-In-Time) runtime:

1. **Scans the DOM** — Finds all elements with `layout`, `space`, and `visual` attributes
2. **Generates CSS** — Compiles styles on-the-fly in the browser
3. **Injects Styles** — Creates a `<style>` tag with the compiled CSS
4. **Watches Changes** — Uses MutationObserver to handle dynamic content

## Custom Configuration

Override default theme values with inline config:

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
<script src="https://unpkg.com/@bookklik/senangstart-css/dist/senangstart-css.min.js"></script>
```

Now you can use your custom values:

```html
<div visual="bg:brand text:accent">Custom colors!</div>
<div space="p:huge">Huge padding!</div>
```

## Local Development

For local development without a CDN, use the local JIT file:

```html
<script src="./path/to/senangstart/src/cdn/jit.js"></script>
```

## Performance Considerations

::: warning When to Use CLI Instead
The CDN JIT is perfect for:
- Prototyping and experimentation
- Learning the framework
- Small projects and demos
- Rapid development

For production applications, consider the [CLI build](/guide/cli) for:
- Better performance (pre-compiled CSS)
- Smaller file sizes
- No runtime overhead
:::

## Browser Support

The CDN JIT uses modern JavaScript features:
- ES6+ syntax
- MutationObserver API
- CSS Custom Properties

Supported in all modern browsers (Chrome, Firefox, Safari, Edge).

## Debugging

Open your browser's Developer Tools to see:

```
[SenangStart CSS] JIT runtime initialized ✓
```

If you don't see this message, check that:
1. The script is loading correctly
2. There are no JavaScript errors in the console
3. The config JSON (if used) is valid
