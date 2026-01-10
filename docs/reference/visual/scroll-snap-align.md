# Scroll Snap Align

Control where an element snaps within its container with the `visual` attribute.

## Syntax
```
visual="snap-align:[value]"
```

## Values

| Value | CSS Output |
|-------|------------|
| `snap-align:start` | `scroll-snap-align: start` |
| `snap-align:center` | `scroll-snap-align: center` |
| `snap-align:end` | `scroll-snap-align: end` |
| `snap-align:none` | `scroll-snap-align: none` |

## Examples

```html
<!-- Horizontal carousel with start alignment -->
<div visual="snap:x" layout="flex overflow-x:auto">
  <div visual="snap-align:start" space="w:[300px]">Card 1</div>
  <div visual="snap-align:start" space="w:[300px]">Card 2</div>
  <div visual="snap-align:start" space="w:[300px]">Card 3</div>
</div>

<!-- Center-aligned snap points -->
<div visual="snap:x" layout="flex overflow-x:auto">
  <div visual="snap-align:center">Centered item</div>
</div>
```

## Notes

Use `snap-align` on child elements inside a container with `snap:x` or `snap:y`.
