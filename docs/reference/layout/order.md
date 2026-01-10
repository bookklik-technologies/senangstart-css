# Order

Control the visual order of flex/grid items with the `layout` attribute.

## Syntax
```
layout="order:[value]"
```

## Values

| Value | CSS Output |
|-------|------------|
| `order:first` | `order: -9999` |
| `order:last` | `order: 9999` |
| `order:none` | `order: 0` |
| `order:1` to `order:12` | `order: 1` to `order: 12` |

## Examples

```html
<div layout="flex">
  <div layout="order:last">Appears last</div>
  <div layout="order:first">Appears first</div>
  <div>Middle (default order)</div>
</div>

<div layout="flex">
  <div layout="order:3">Third</div>
  <div layout="order:1">First</div>
  <div layout="order:2">Second</div>
</div>
```

## Responsive

```html
<!-- Different order on different screens -->
<div layout="order:last tab:order:first">
  Last on mobile, first on tablet+
</div>
```
