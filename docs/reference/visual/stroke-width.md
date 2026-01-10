# Stroke Width

Control the stroke width of SVG elements with the `visual` attribute.

## Syntax
```
visual="stroke-w:[value]"
```

## Values

| Value | CSS Output |
|-------|------------|
| `stroke-w:0` | `stroke-width: 0px` |
| `stroke-w:1` | `stroke-width: 1px` |
| `stroke-w:2` | `stroke-width: 2px` |
| `stroke-w:[0.5]` | `stroke-width: 0.5` |
| `stroke-w:[3px]` | `stroke-width: 3px` |

## Examples

```html
<svg visual="stroke:primary stroke-w:2 fill:none">
  <circle cx="50" cy="50" r="40" />
</svg>

<svg visual="stroke:blue-500 stroke-w:4">
  <line x1="0" y1="50" x2="100" y2="50" />
</svg>

<!-- Thin stroke -->
<svg visual="stroke:gray-400 stroke-w:1 fill:none">
  <rect x="10" y="10" width="80" height="80" />
</svg>
```

## States

```html
<svg visual="stroke:primary stroke-w:1 hover:stroke-w:3 fill:none">
  <circle cx="50" cy="50" r="40" />
</svg>
```
