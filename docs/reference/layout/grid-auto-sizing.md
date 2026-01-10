# Grid Auto Sizing

Control the size of auto-generated grid tracks with the `layout` attribute.

## Auto Columns

| Value | CSS Output |
|-------|------------|
| `auto-cols:auto` | `grid-auto-columns: auto` |
| `auto-cols:min` | `grid-auto-columns: min-content` |
| `auto-cols:max` | `grid-auto-columns: max-content` |
| `auto-cols:fr` | `grid-auto-columns: minmax(0, 1fr)` |

## Auto Rows

| Value | CSS Output |
|-------|------------|
| `auto-rows:auto` | `grid-auto-rows: auto` |
| `auto-rows:min` | `grid-auto-rows: min-content` |
| `auto-rows:max` | `grid-auto-rows: max-content` |
| `auto-rows:fr` | `grid-auto-rows: minmax(0, 1fr)` |

## Examples

```html
<!-- Equal width auto-generated columns -->
<div layout="grid grid-flow-col auto-cols:fr">
  Equal width auto-generated columns
</div>

<!-- Auto-sized rows based on content -->
<div layout="grid auto-rows:min">
  Rows sized to minimum content
</div>
```
