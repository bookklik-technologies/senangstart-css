# Justify Self

Control horizontal alignment of individual grid items with the `layout` attribute.

## Syntax
```
layout="justify-self-[value]"
```

## Values

| Value | CSS Output |
|-------|------------|
| `justify-self-auto` | `justify-self: auto` |
| `justify-self-start` | `justify-self: start` |
| `justify-self-end` | `justify-self: end` |
| `justify-self-center` | `justify-self: center` |
| `justify-self-stretch` | `justify-self: stretch` |

## Examples

```html
<div layout="grid grid-cols:3">
  <div layout="justify-self-end">Aligned right in cell</div>
  <div layout="justify-self-center">Centered in cell</div>
  <div>Default alignment</div>
</div>
```
