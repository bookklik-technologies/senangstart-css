# Place Items

Control default alignment of grid items in both axes with the `layout` attribute.

## Syntax
```
layout="place-items:[value]"
```

## Values

| Value | CSS Output |
|-------|------------|
| `place-items:start` | `place-items: start` |
| `place-items:end` | `place-items: end` |
| `place-items:center` | `place-items: center` |
| `place-items:stretch` | `place-items: stretch` |

## Examples

```html
<div layout="grid grid-cols:3 place-items:center">
  All items centered in their cells
</div>
```
