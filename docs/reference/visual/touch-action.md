# Touch Action

Control how an element responds to touch gestures with the `visual` attribute.

## Syntax
```
visual="touch:[value]"
```

## Values

| Value | CSS Output |
|-------|------------|
| `touch:auto` | `touch-action: auto` |
| `touch:none` | `touch-action: none` |
| `touch:pan-x` | `touch-action: pan-x` |
| `touch:pan-y` | `touch-action: pan-y` |
| `touch:pan-left` | `touch-action: pan-left` |
| `touch:pan-right` | `touch-action: pan-right` |
| `touch:pan-up` | `touch-action: pan-up` |
| `touch:pan-down` | `touch-action: pan-down` |
| `touch:pinch-zoom` | `touch-action: pinch-zoom` |
| `touch:manipulation` | `touch-action: manipulation` |

## Examples

```html
<!-- Allow only horizontal panning -->
<div visual="touch:pan-x">Horizontal carousel</div>

<!-- Allow only vertical panning -->
<div visual="touch:pan-y">Vertical list</div>

<!-- Disable all touch actions (for custom JS handling) -->
<canvas visual="touch:none">Custom drawing area</canvas>

<!-- Allow pan and zoom but disable double-tap zoom -->
<div visual="touch:manipulation">Fast-clicking area</div>
```

## Use Cases

- `touch:manipulation` - Removes 300ms tap delay on mobile
- `touch:none` - Custom gesture handling with JavaScript
- `touch:pan-x` / `touch:pan-y` - Carousels that shouldn't interfere with page scroll
