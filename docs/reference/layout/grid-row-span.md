# Grid Row Span

Control how many rows a grid item spans with the `layout` attribute.

## Values

| Value | CSS Output |
|-------|------------|
| `row-span:1` to `row-span:6` | `grid-row: span n / span n` |
| `row-span:full` | `grid-row: 1 / -1` |
| `row-start:1` to `row-start:7` | `grid-row-start: n` |
| `row-end:1` to `row-end:7` | `grid-row-end: n` |

## Examples

```html
<div layout="grid grid-cols:3 grid-rows:2">
  <div layout="row-span:2">Sidebar (spans 2 rows)</div>
  <div>Content 1</div>
  <div>Content 2</div>
</div>

<!-- Full height sidebar -->
<div layout="grid grid-cols:4">
  <div layout="row-span:full">Full height sidebar</div>
  <!-- Other content -->
</div>
```
