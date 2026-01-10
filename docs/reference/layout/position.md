# Position

Set the positioning method

## Syntax
```
layout="[position-value]"
```

## Values

| Value | CSS Output | Description |
|-------|------------|-------------|
| `static` | `position: static` | Default positioning |
| `relative` | `position: relative` | Relative to normal position |
| `absolute` | `position: absolute` | Absolute within container |
| `fixed` | `position: fixed` | Fixed to viewport |
| `sticky` | `position: sticky` | Sticky positioning |

## Examples

```html
<div layout="absolute">Absolute positioned</div>
<div layout="fixed">Fixed to viewport</div>
```

## Responsive

```html
<!-- Responsive example -->
<div layout="mob:... tab:... lap:...">
  Responsive content
</div>
```
