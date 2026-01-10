# Grid Template Columns

Define grid columns with the `layout` attribute.

## Values

| Value | CSS Output |
|-------|------------|
| `grid-cols:1` to `grid-cols:12` | `grid-template-columns: repeat(n, minmax(0, 1fr))` |
| `grid-cols:none` | `grid-template-columns: none` |
| `grid-cols:subgrid` | `grid-template-columns: subgrid` |
| `grid-cols:[200px_1fr_1fr]` | `grid-template-columns: 200px 1fr 1fr` |

## Examples

```html
<!-- 3 equal columns -->
<div layout="grid grid-cols:3" space="g:medium">
  <div>Col 1</div>
  <div>Col 2</div>
  <div>Col 3</div>
</div>

<!-- Custom column widths -->
<div layout="grid grid-cols:[200px_1fr_1fr]">
  <div>Fixed 200px</div>
  <div>Flexible</div>
  <div>Flexible</div>
</div>
```

## Responsive

```html
<div layout="grid grid-cols:1 tab:grid-cols:2 lap:grid-cols:4">
  1 column → 2 columns → 4 columns
</div>
```
