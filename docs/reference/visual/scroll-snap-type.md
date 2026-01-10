# Scroll Snap Type

Set scroll snap type

## Syntax
```
visual="snap-type:[value]"
```

## Values

| Value | CSS Output | Description |
|-------|------------|-------------|
| `none` | `scroll-snap-type: none` | No snapping |
| `x` | `scroll-snap-type: x mandatory` | Horizontal snap |
| `y` | `scroll-snap-type: y mandatory` | Vertical snap |
| `both` | `scroll-snap-type: both mandatory` | Both axes |
| `x-proximity` | `scroll-snap-type: x proximity` | Horizontal proximity |
| `y-proximity` | `scroll-snap-type: y proximity` | Vertical proximity |

## Examples

```html
<div visual="snap-type:x">Horizontal snap container</div>
```

## Responsive

```html
<!-- Responsive example -->
<div visual="mob:... tab:... lap:...">
  Responsive content
</div>
```
