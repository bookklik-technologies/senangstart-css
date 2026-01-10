# Color Scheme

Indicate the preferred color scheme for an element with the `visual` attribute.

## Syntax
```
visual="color-scheme:[value]"
```

## Values

| Value | CSS Output |
|-------|------------|
| `color-scheme:light` | `color-scheme: light` |
| `color-scheme:dark` | `color-scheme: dark` |
| `color-scheme:normal` | `color-scheme: normal` |

## Examples

```html
<!-- Force light color scheme -->
<div visual="color-scheme:light">
  Light mode UI
</div>

<!-- Force dark color scheme for scrollbars and form controls -->
<div visual="color-scheme:dark">
  Dark mode UI
</div>
```

## Use Cases

The `color-scheme` property affects:
- Scrollbar colors
- Form control colors (background, borders)
- Default text and background colors
- System color keywords
