# Grid Row Span

Span across grid rows

## Syntax
```
layout="row-span:[value]"
```

## Values

| Value | CSS Output | Description |
|-------|------------|-------------|
| `1-12` | `grid-row: span {n} / span {n}` | Span N rows |
| `full` | `grid-row: 1 / -1` | Span all rows |

## Examples

```html
<div layout="row-span:2">Spans 2 rows</div>
```

## Responsive

```html
<!-- Responsive example -->
<div layout="mob:... tab:... lap:...">
  Responsive content
</div>
```
