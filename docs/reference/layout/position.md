# Position

Control the positioning method with the `layout` attribute.

## Values

| Value | CSS Output |
|-------|------------|
| `static` | `position: static` |
| `relative` | `position: relative` |
| `absolute` | `position: absolute` |
| `fixed` | `position: fixed` |
| `sticky` | `position: sticky` |

## Examples

```html
<!-- Relative positioning for z-index or offset -->
<div layout="relative">Relative container</div>

<!-- Absolute positioning -->
<div layout="relative">
  <div layout="absolute top:0 right:0">Top-right corner</div>
</div>

<!-- Fixed navbar -->
<nav layout="fixed z:top inset-x:0 top:0">Fixed navbar</nav>

<!-- Sticky header -->
<div layout="sticky top:0">Sticks when scrolling</div>
```

## Responsive

```html
<div layout="relative tab:sticky tab:top:0">
  Relative on mobile, sticky on tablet+
</div>
```
