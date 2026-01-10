# Animation Fill Mode

Control the element's style before and after the animation.

## Syntax
```
visual="animation-fill:none | animation-fill:forwards | animation-fill:backwards | animation-fill:both"
```

## Values

| Value | CSS Output |
|-------|------------|
| `animation-fill:none` | `animation-fill-mode: none` |
| `animation-fill:forwards` | `animation-fill-mode: forwards` |
| `animation-fill:backwards` | `animation-fill-mode: backwards` |
| `animation-fill:both` | `animation-fill-mode: both` |

## Examples

```html
<div visual="animate:bounce animation-fill:none">...</div>      <!-- None -->
<div visual="animate:bounce animation-fill:forwards">...</div>  <!-- Forwards -->
<div visual="animate:bounce animation-fill:backwards">...</div> <!-- Backwards -->
<div visual="animate:bounce animation-fill:both">...</div>      <!-- Both -->
```

## Use Cases

- `forwards` - Element keeps the final animation state
- `backwards` - Element has initial animation state during delay
- `both` - Combines forwards and backwards
