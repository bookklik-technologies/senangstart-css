# Place Self

Shorthand for align-self and justify-self

## Syntax
```
layout="place-self:[value]"
```

## Values

| Value | CSS Output | Description |
|-------|------------|-------------|
| `auto` | `place-self: auto` | Auto alignment |
| `start` | `place-self: start` | Start alignment |
| `end` | `place-self: end` | End alignment |
| `center` | `place-self: center` | Center alignment |
| `stretch` | `place-self: stretch` | Stretch item |

## Examples

```html
<div layout="place-self:center">Centered item</div>
```

## Responsive

```html
<!-- Responsive example -->
<div layout="mob:... tab:... lap:...">
  Responsive content
</div>
```
