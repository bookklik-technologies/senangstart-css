# Grid Auto Flow

Control how auto-placed items flow in grid

## Syntax
```
layout="[grid-flow-value]"
```

## Values

| Value | CSS Output | Description |
|-------|------------|-------------|
| `grid-flow-row` | `grid-auto-flow: row` | Place by row |
| `grid-flow-col` | `grid-auto-flow: column` | Place by column |
| `grid-flow-dense` | `grid-auto-flow: dense` | Dense packing |
| `grid-flow-row-dense` | `grid-auto-flow: row dense` | Row with dense |
| `grid-flow-col-dense` | `grid-auto-flow: column dense` | Column with dense |

## Examples

```html
<div layout="grid grid-flow-col">Column flow</div>
```

## Responsive

```html
<!-- Responsive example -->
<div layout="mob:... tab:... lap:...">
  Responsive content
</div>
```
