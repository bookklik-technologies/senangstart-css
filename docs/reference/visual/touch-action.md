# Touch Action

Control touch interactions

## Syntax
```
visual="touch:[value]"
```

## Values

| Value | CSS Output | Description |
|-------|------------|-------------|
| `auto` | `touch-action: auto` | Default touch |
| `none` | `touch-action: none` | Disable touch |
| `pan-x` | `touch-action: pan-x` | Pan horizontally |
| `pan-y` | `touch-action: pan-y` | Pan vertically |
| `pan-left` | `touch-action: pan-left` | Pan left |
| `pan-right` | `touch-action: pan-right` | Pan right |
| `pinch-zoom` | `touch-action: pinch-zoom` | Pinch to zoom |
| `manipulation` | `touch-action: manipulation` | Pan and pinch only |

## Examples

```html
<div visual="touch:manipulation">Touch optimized</div>
```

## Responsive

```html
<!-- Responsive example -->
<div visual="mob:... tab:... lap:...">
  Responsive content
</div>
```
