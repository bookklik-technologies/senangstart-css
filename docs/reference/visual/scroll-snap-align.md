# Scroll Snap Align

Set scroll snap alignment

## Syntax
```
visual="snap-align:[value]"
```

## Values

| Value | CSS Output | Description |
|-------|------------|-------------|
| `start` | `scroll-snap-align: start` | Snap to start |
| `end` | `scroll-snap-align: end` | Snap to end |
| `center` | `scroll-snap-align: center` | Snap to center |
| `none` | `scroll-snap-align: none` | No snap |

## Examples

```html
<div visual="snap-align:start">Snap to start</div>
```

## Responsive

```html
<!-- Responsive example -->
<div visual="mob:... tab:... lap:...">
  Responsive content
</div>
```
