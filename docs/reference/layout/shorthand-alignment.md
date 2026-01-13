# Shorthand Alignment

Quick alignment shortcuts

## Syntax
```
layout="[alignment]"
```

## Values

| Value | CSS Output | Description |
|-------|------------|-------------|
| `center` | `justify-content: center; align-items: center` | Center both axes |
| `start` | `justify-content: flex-start; align-items: flex-start` | Align to start |
| `end` | `justify-content: flex-end; align-items: flex-end` | Align to end |
| `between` | `justify-content: space-between` | Space between |
| `around` | `justify-content: space-around` | Space around |
| `evenly` | `justify-content: space-evenly` | Even spacing |

## Examples

```html
<div layout="flex center">Centered content</div>
```
