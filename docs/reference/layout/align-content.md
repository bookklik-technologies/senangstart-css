# Align Content

Control vertical alignment of multi-line flex content with the `layout` attribute.

## Values

| Value | CSS Output |
|-------|------------|
| `content-start` | `align-content: flex-start` |
| `content-end` | `align-content: flex-end` |
| `content-center` | `align-content: center` |
| `content-between` | `align-content: space-between` |
| `content-around` | `align-content: space-around` |
| `content-evenly` | `align-content: space-evenly` |
| `content-stretch` | `align-content: stretch` |

## Examples

```html
<div layout="flex wrap content-center" space="h:[300px]">
  Multi-line content centered vertically
</div>

<div layout="flex wrap content-between" space="h:[300px]">
  Lines spaced between top and bottom
</div>
```

## Note

`align-content` only applies when there are multiple lines (requires `wrap`).
