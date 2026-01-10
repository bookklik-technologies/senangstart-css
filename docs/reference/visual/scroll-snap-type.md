# Scroll Snap Type

Control the scroll snapping behavior on a container with the `visual` attribute.

## Syntax
```
visual="snap:[value]"
```

## Values

| Value | CSS Output |
|-------|------------|
| `snap:none` | `scroll-snap-type: none` |
| `snap:x` | `scroll-snap-type: x mandatory` |
| `snap:x-proximity` | `scroll-snap-type: x proximity` |
| `snap:y` | `scroll-snap-type: y mandatory` |
| `snap:y-proximity` | `scroll-snap-type: y proximity` |
| `snap:both` | `scroll-snap-type: both mandatory` |
| `snap:both-proximity` | `scroll-snap-type: both proximity` |

## Examples

```html
<!-- Horizontal scroll snap -->
<div visual="snap:x" layout="flex overflow-x:auto">
  <div visual="snap-align:start" space="w:[100vw]">Page 1</div>
  <div visual="snap-align:start" space="w:[100vw]">Page 2</div>
</div>

<!-- Vertical scroll snap -->
<div visual="snap:y" space="h:[400px]" layout="overflow-y:auto">
  <section visual="snap-align:start" space="h:[400px]">Section 1</section>
  <section visual="snap-align:start" space="h:[400px]">Section 2</section>
</div>

<!-- Proximity (less strict) -->
<div visual="snap:x-proximity" layout="flex overflow-x:auto">
  <div visual="snap-align:start">Only snaps when close</div>
</div>
```

## Notes

- **mandatory**: Always snaps to a snap point after scrolling
- **proximity**: Only snaps when scrolling ends near a snap point
