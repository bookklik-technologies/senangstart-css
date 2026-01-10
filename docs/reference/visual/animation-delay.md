# Animation Delay

Add a delay before the animation starts.

## Syntax
```
visual="animation-delay:instant | animation-delay:quick | animation-delay:fast | animation-delay:normal | animation-delay:slow | animation-delay:slower | animation-delay:lazy"
```

## Values

| Value | Time |
|-------|------|
| `animation-delay:instant` | 75ms |
| `animation-delay:quick` | 100ms |
| `animation-delay:fast` | 150ms |
| `animation-delay:normal` | 200ms |
| `animation-delay:slow` | 300ms |
| `animation-delay:slower` | 500ms |
| `animation-delay:lazy` | 700ms |

## Examples

```html
<div visual="animate:pulse animation-delay:quick">...</div>   <!-- 100ms delay -->
<div visual="animate:pulse animation-delay:normal">...</div>  <!-- 200ms delay -->
<div visual="animate:pulse animation-delay:slow">...</div>    <!-- 300ms delay -->
```
