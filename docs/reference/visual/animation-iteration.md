# Animation Iteration Count

Control how many times the animation repeats.

## Syntax
```
visual="animation-iteration:1 | animation-iteration:2 | animation-iteration:infinite"
```

## Values

| Value | CSS Output |
|-------|------------|
| `animation-iteration:1` | `animation-iteration-count: 1` |
| `animation-iteration:2` | `animation-iteration-count: 2` |
| `animation-iteration:3` | `animation-iteration-count: 3` |
| `animation-iteration:infinite` | `animation-iteration-count: infinite` |

## Examples

```html
<div visual="animate:bounce animation-iteration:1">...</div>        <!-- Once -->
<div visual="animate:bounce animation-iteration:2">...</div>        <!-- Twice -->
<div visual="animate:bounce animation-iteration:infinite">...</div> <!-- Forever -->
```
