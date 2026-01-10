# Grid Column Span

Control how many columns a grid item spans with the `layout` attribute.

## Syntax
```
layout="col-span:[value]"
layout="col-start:[value] | col-end:[value]"
```

## Values

| Value | CSS Output |
|-------|------------|
| `col-span:1` to `col-span:12` | `grid-column: span n / span n` |
| `col-span:full` | `grid-column: 1 / -1` |
| `col-start:1` to `col-start:13` | `grid-column-start: n` |
| `col-end:1` to `col-end:13` | `grid-column-end: n` |

## Examples

```html
<div layout="grid grid-cols:4">
  <div layout="col-span:2">Spans 2 columns</div>
  <div>Single column</div>
  <div>Single column</div>
  <div layout="col-span:full">Full width row</div>
</div>

<!-- Specific start/end positions -->
<div layout="grid grid-cols:4">
  <div layout="col-start:2 col-end:4">Columns 2-3</div>
</div>
```

## Responsive

```html
<div layout="col-span:full tab:col-span:2">
  Full width on mobile, 2 columns on tablet+
</div>
```
