# Fill

Control the fill color of SVG elements with the `visual` attribute.

## Syntax
```
visual="fill:[value]"
```

## Values

| Value | CSS Output |
|-------|------------|
| `fill:none` | `fill: none` |
| `fill:current` | `fill: currentColor` |
| `fill:primary` | `fill: var(--c-primary)` |
| `fill:blue-500` | `fill: var(--c-blue-500)` |
| `fill:[#ff0000]` | `fill: #ff0000` |

## Examples

```html
<svg visual="fill:primary">
  <circle cx="50" cy="50" r="40" />
</svg>

<svg visual="fill:current text:blue-500">
  <path d="M10 10 H 90 V 90 H 10 Z" />
</svg>

<svg visual="fill:none stroke:primary">
  <rect x="10" y="10" width="80" height="80" />
</svg>
```

## States

```html
<svg visual="fill:gray-400 hover:fill:primary">
  <circle cx="50" cy="50" r="40" />
</svg>
```
