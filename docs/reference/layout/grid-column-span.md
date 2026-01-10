# Grid Column Span

Span across grid columns

## Syntax
```
layout="col-span:[value]"
```

## Values

| Value | CSS Output | Description |
|-------|------------|-------------|
| `1-12` | `grid-column: span {n} / span {n}` | Span N columns |
| `full` | `grid-column: 1 / -1` | Span all columns |

## Examples

```html
<div layout="col-span:2">Spans 2 columns</div>
<div layout="col-span:full">Full width</div>
```

## Responsive

```html
<!-- Responsive example -->
<div layout="mob:... tab:... lap:...">
  Responsive content
</div>
```
