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

For local development without a CDN, install the package and point to the bundled JIT file:

```bash
npm i @bookklik/senangstart-css
```

```html
<script src="./node_modules/@bookklik/senangstart-css/dist/senangstart-css.min.js"></script>
```

> **Note:** Use the bundled `dist/senangstart-css.min.js` (or unminified `senangstart-css.js`) — not `src/cdn/senangstart-engine.js`, which is an ES module with `import` statements that browsers cannot load directly via `<script src>`.

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

## How the runtime works (0.4.0)

- **Incremental.** The runtime reads only the elements a DOM mutation touched and
  caches every generated rule, so adding elements that use known tokens costs
  nothing; new tokens trigger a recompile that reuses cached rules.
- **No debounce.** Recompiles run in a microtask right after the mutation batch,
  so new elements are styled before the next paint (no flash of unstyled content).
- **Constructed stylesheet.** Styles live in one `CSSStyleSheet` attached via
  `document.adoptedStyleSheets` (a `<style>` fallback is used in older browsers),
  so the page's own stylesheets are never touched.
- **Shadow DOM.** Open and declarative shadow roots are scanned and share the
  same stylesheet; roots attached later (custom elements upgrading, including
  closed roots) are picked up automatically.
- **~34 KB gzipped.** The CDN bundle contains only the engine-relevant parts of
  the utility definitions.

### Runtime API

```js
window.SenangStart.css()        // the CSS currently applied (copy it into a static file!)
window.SenangStart.tokens()     // { layout: [...], space: [...], visual: [...], ... }
window.SenangStart.recompile()  // force a recompile, returns the CSS
window.SenangStart.version
```

Set `"debug": true` in the inline config to log a banner on initialisation.

## Browser Support

The CDN JIT uses modern JavaScript features:
- ES6+ syntax
- MutationObserver API
- CSS Custom Properties

Supported in all modern browsers (Chrome, Firefox, Safari, Edge).

## Debugging

Add `"debug": true` to your `<script type="senangstart/config">` and open the
Developer Tools to see:

```
[SenangStart CSS] JIT runtime initialized ✓
```

If you don't see this message (or `window.SenangStart` is undefined), check that:
1. The script is loading correctly
2. There are no JavaScript errors in the console
3. The config JSON (if used) is valid
