# Animation Duration

Control how long the animation takes using natural words.

## Syntax
```
visual="animation-duration:instant | animation-duration:quick | animation-duration:fast | animation-duration:normal | animation-duration:slow | animation-duration:slower | animation-duration:lazy"
```

## Values

| Value | Time | Feel |
|-------|------|------|
| `animation-duration:instant` | 75ms | Barely perceptible |
| `animation-duration:quick` | 100ms | Snappy |
| `animation-duration:fast` | 150ms | Responsive |
| `animation-duration:normal` | 200ms | **Default**, balanced |
| `animation-duration:slow` | 300ms | Smooth, noticeable |
| `animation-duration:slower` | 500ms | Deliberate, elegant |
| `animation-duration:lazy` | 700ms | Relaxed, dramatic |

## Examples

```html
<div visual="animate:spin animation-duration:instant">...</div>  <!-- 75ms -->
<div visual="animate:spin animation-duration:quick">...</div>    <!-- 100ms -->
<div visual="animate:spin animation-duration:fast">...</div>     <!-- 150ms -->
<div visual="animate:spin animation-duration:normal">...</div>   <!-- 200ms -->
<div visual="animate:spin animation-duration:slow">...</div>     <!-- 300ms -->
<div visual="animate:spin animation-duration:slower">...</div>   <!-- 500ms -->
<div visual="animate:spin animation-duration:lazy">...</div>     <!-- 700ms -->
```
