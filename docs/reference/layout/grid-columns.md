# Grid Columns

Define grid template columns

## Syntax
```
layout="grid-cols:[value]"
```

## Values

| Value | CSS Output | Description |
|-------|------------|-------------|
| `1-12` | `grid-template-columns: repeat({n}, minmax(0, 1fr))` | N equal columns |
| `none` | `grid-template-columns: none` | No columns defined |
| `subgrid` | `grid-template-columns: subgrid` | Use parent grid |

## Examples

```html
<div layout="grid grid-cols:3">3 columns</div>
<div layout="grid grid-cols:12">12 columns</div>
```
