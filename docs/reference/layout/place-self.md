# Place Self

Control alignment of individual grid items in both axes with the `layout` attribute.

## Syntax
```
layout="place-self:[value]"
```

## Values

| Value | CSS Output |
|-------|------------|
| `place-self:auto` | `place-self: auto` |
| `place-self:start` | `place-self: start` |
| `place-self:end` | `place-self: end` |
| `place-self:center` | `place-self: center` |
| `place-self:stretch` | `place-self: stretch` |

## Examples

```html
<div layout="grid grid-cols:2">
  <div layout="place-self:center">Centered in cell</div>
  <div>Default alignment</div>
</div>
```
