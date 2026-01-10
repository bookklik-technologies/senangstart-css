# Transition Duration

Control the duration of transitions using natural words.

## Syntax
```
visual="duration:instant | duration:quick | duration:fast | duration:normal | duration:slow | duration:slower | duration:lazy"
```

## Values

| Value | Time | Feel |
|-------|------|------|
| `duration:instant` | 75ms | Barely perceptible |
| `duration:quick` | 100ms | Snappy |
| `duration:fast` | 150ms | Responsive |
| `duration:normal` | 200ms | **Default**, balanced |
| `duration:slow` | 300ms | Smooth, noticeable |
| `duration:slower` | 500ms | Deliberate, elegant |
| `duration:lazy` | 700ms | Relaxed, dramatic |

## Examples

```html
<div visual="transition duration:instant">...</div>  <!-- 75ms - Nearly instant -->
<div visual="transition duration:quick">...</div>    <!-- 100ms - Quick snap -->
<div visual="transition duration:fast">...</div>     <!-- 150ms - Fast response -->
<div visual="transition duration:normal">...</div>   <!-- 200ms - Standard feel -->
<div visual="transition duration:slow">...</div>     <!-- 300ms - Noticeable -->
<div visual="transition duration:slower">...</div>   <!-- 500ms - Deliberate -->
<div visual="transition duration:lazy">...</div>     <!-- 700ms - Relaxed -->
```

## Arbitrary Values

```html
<div visual="transition duration:[2000ms]">...</div>
<div visual="transition duration:[0.5s]">...</div>
```
