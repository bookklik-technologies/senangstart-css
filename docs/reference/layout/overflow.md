# Overflow

Control content overflow behavior

## Syntax
```
layout="overflow:[value]"
```

## Values

| Value | CSS Output | Description |
|-------|------------|-------------|
| `auto` | `overflow: auto` | Scrollbar when needed |
| `hidden` | `overflow: hidden` | Hide overflow |
| `visible` | `overflow: visible` | Show overflow |
| `scroll` | `overflow: scroll` | Always show scrollbar |
| `clip` | `overflow: clip` | Clip overflow |

## Examples

```html
<div layout="overflow:hidden">Clipped content</div>
<div layout="overflow:auto">Scrollable</div>
```
