# Grid Auto Flow

Control how auto-placed items flow in grid

## Syntax
```
layout="grid-flow:[value]"
```

## Values

| Value | CSS Output | Description |
|-------|------------|-------------|
| `row` | `grid-auto-flow: row` | Place by row |
| `col` | `grid-auto-flow: column` | Place by column |
| `dense` | `grid-auto-flow: dense` | Dense packing |
| `row-dense` | `grid-auto-flow: row dense` | Row with dense |
| `col-dense` | `grid-auto-flow: column dense` | Column with dense |

## Examples

```html
<div layout="grid grid-flow:col">Column flow</div>
```
