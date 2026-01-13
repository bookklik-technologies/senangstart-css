# Justify Content

Align items along the main axis

## Syntax
```
layout="justify:[value]"
```

## Values

| Value | CSS Output | Description |
|-------|------------|-------------|
| `start` | `justify-content: flex-start` | Align to start |
| `end` | `justify-content: flex-end` | Align to end |
| `center` | `justify-content: center` | Center items |
| `between` | `justify-content: space-between` | Space between items |
| `around` | `justify-content: space-around` | Space around items |
| `evenly` | `justify-content: space-evenly` | Even spacing |
| `stretch` | `justify-content: stretch` | Stretch items |

## Examples

```html
<div layout="flex justify:center">Centered</div>
<div layout="flex justify:between">Spaced</div>
```
