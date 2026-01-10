# Grid Rows

Define grid template rows

## Syntax
```
layout="grid-rows:[value]"
```

## Values

| Value | CSS Output | Description |
|-------|------------|-------------|
| `1-12` | `grid-template-rows: repeat({n}, minmax(0, 1fr))` | N equal rows |
| `none` | `grid-template-rows: none` | No rows defined |
| `subgrid` | `grid-template-rows: subgrid` | Use parent grid |

## Examples

```html
<div layout="grid grid-rows:3">3 rows</div>
```

## Responsive

```html
<!-- Responsive example -->
<div layout="mob:... tab:... lap:...">
  Responsive content
</div>
```
