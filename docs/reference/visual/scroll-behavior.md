# Scroll Behavior

Control scrolling smoothness with the `visual` attribute.

## Syntax
```
visual="scroll:[value]"
```

## Values

| Value | CSS Output |
|-------|------------|
| `scroll:smooth` | `scroll-behavior: smooth` |
| `scroll:auto` | `scroll-behavior: auto` |

## Examples

```html
<!-- Smooth scrolling container -->
<div visual="scroll:smooth" layout="overflow:auto" space="h:[400px]">
  <div space="h:[1000px]">Scrollable content</div>
</div>

<!-- Apply to entire page -->
<html visual="scroll:smooth">
```

## Use Cases

Use `scroll:smooth` for:
- Anchor link navigation
- Scroll-to-top buttons
- Single-page application navigation
- Better user experience with gradual scrolling
