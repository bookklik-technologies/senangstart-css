# Sizing

Control width and height with the `space` attribute.

## Syntax
```
space="w:[value] | h:[value]"
space="min-w:[value] | max-w:[value]"
space="min-h:[value] | max-h:[value]"
```

## Properties

| Property | CSS Output |
|----------|------------|
| `w` | `width` |
| `h` | `height` |
| `min-w` | `min-width` |
| `max-w` | `max-width` |
| `min-h` | `min-height` |
| `max-h` | `max-height` |

## Examples

```html
<!-- Explicit size -->
<div space="w:[100%] h:[400px]">Fixed dimensions</div>

<!-- Max width container -->
<div space="max-w:[1200px]">Constrained container</div>

<!-- Full viewport height -->
<div space="min-h:[100vh]">At least full viewport</div>

<!-- Size constraints -->
<div space="min-w:[200px] max-w:[600px]">
  Flexible width with constraints
</div>
```

## Responsive

```html
<!-- Responsive width -->
<div space="w:[100%] tab:w:[50%] lap:w:[33%]">
  Full → half → third
</div>

<!-- Responsive height -->
<div space="h:[200px] tab:h:[300px] lap:h:[400px]">
  Growing height
</div>
```
