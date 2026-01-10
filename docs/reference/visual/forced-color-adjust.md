# Forced Color Adjust

Control how an element's colors adapt to forced colors mode (Windows High Contrast) with the `visual` attribute.

## Syntax
```
visual="forced-colors:[value]"
```

## Values

| Value | CSS Output |
|-------|------------|
| `forced-colors:auto` | `forced-color-adjust: auto` |
| `forced-colors:none` | `forced-color-adjust: none` |

## Examples

```html
<!-- Allow system to adjust colors (default) -->
<div visual="forced-colors:auto">
  Colors will adapt to high contrast mode
</div>

<!-- Preserve original colors in high contrast mode -->
<div visual="forced-colors:none bg:primary text:white">
  Colors stay as defined
</div>
```

## Use Cases

Use `forced-colors:none` sparingly for:
- Brand elements where color is essential to meaning
- Charts and graphs with color-coded data
- UI where forced colors would harm usability

> ⚠️ **Accessibility note**: Use `forced-colors:none` carefully. High contrast mode is an accessibility feature, and overriding it may reduce accessibility for users who need it.
