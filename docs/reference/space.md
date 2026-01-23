# Space Reference

The `space` attribute controls sizing and spacing.

## Syntax

```
[breakpoint]:[property]:[scale]
```

**Breakpoints:** `mob:`, `tab:`, `lap:`, `desk:`

**Scale values:** `none`, `thin`, `regular`, `thick`, `tiny`, `small`, `medium`, `large`, `big`, `giant`, `vast` (and numeric multipliers)

## Spacing

- [Padding](./space/padding) - Inner spacing (`p`, `p-t`, `p-r`, `p-b`, `p-l`, `p-x`, `p-y`)
- [Margin](./space/margin) - Outer spacing (`m`, `m-t`, `m-r`, `m-b`, `m-l`, `m-x`, `m-y`)
- [Gap](./space/gap) - Flex/grid spacing (`g`, `g-x`, `g-y`)

## Dimensions

- [Width](./space/width) - Element width (`w`, `min-w`, `max-w`)
- [Height](./space/height) - Element height (`h`, `min-h`, `max-h`)

## Reference

- [Arbitrary Values](./space/arbitrary-values) - Escape hatch syntax `[value]`
- [Scale Reference](./space/scale-reference) - Scale keyword values

## Quick Example

```html
<div space="p:medium m-b:big w:[100%] max-w:[800px]">
  Card with medium padding, big bottom margin, and constrained width
</div>
```
