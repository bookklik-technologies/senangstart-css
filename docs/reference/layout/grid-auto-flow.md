# Grid Auto Flow

Control how auto-placed items flow in the grid with the `layout` attribute.

## Values

| Value | CSS Output |
|-------|------------|
| `grid-flow-row` | `grid-auto-flow: row` |
| `grid-flow-col` | `grid-auto-flow: column` |
| `grid-flow-dense` | `grid-auto-flow: dense` |
| `grid-flow-row-dense` | `grid-auto-flow: row dense` |
| `grid-flow-col-dense` | `grid-auto-flow: column dense` |

## Examples

```html
<!-- Items flow by row (default) -->
<div layout="grid grid-cols:3 grid-flow-row">
  Items fill rows first
</div>

<!-- Items flow by column -->
<div layout="grid grid-rows:3 grid-flow-col">
  Items fill columns first
</div>

<!-- Dense packing fills gaps -->
<div layout="grid grid-cols:3 grid-flow-dense">
  Dense packing fills gaps automatically
</div>
```
