# Justify Items

Control default horizontal alignment of grid items with the `layout` attribute.

## Syntax
```
layout="justify-items-[value]"
```

## Values

| Value | CSS Output |
|-------|------------|
| `justify-items-start` | `justify-items: start` |
| `justify-items-end` | `justify-items: end` |
| `justify-items-center` | `justify-items: center` |
| `justify-items-stretch` | `justify-items: stretch` |

## Examples

```html
<div layout="grid grid-cols:3 justify-items-center">
  All items centered horizontally in their cells
</div>

<div layout="grid grid-cols:3 justify-items-start">
  All items aligned to start of their cells
</div>
```
