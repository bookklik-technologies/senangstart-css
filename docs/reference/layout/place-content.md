# Place Content

Shorthand for align-content and justify-content

## Syntax
```
layout="place-content:[value]"
```

## Values

| Value | CSS Output | Description |
|-------|------------|-------------|
| `start` | `place-content: start` | Start alignment |
| `end` | `place-content: end` | End alignment |
| `center` | `place-content: center` | Center alignment |
| `between` | `place-content: space-between` | Space between |
| `around` | `place-content: space-around` | Space around |
| `evenly` | `place-content: space-evenly` | Even spacing |
| `stretch` | `place-content: stretch` | Stretch content |

## Examples

```html
<div layout="grid place-content:center">Centered content</div>
```

## Responsive

```html
<!-- Responsive example -->
<div layout="mob:... tab:... lap:...">
  Responsive content
</div>
```
