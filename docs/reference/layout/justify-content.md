# Justify Content

Control horizontal alignment of flex/grid items with the `layout` attribute.

## Values

| Value | CSS Output |
|-------|------------|
| `justify-start` | `justify-content: flex-start` |
| `justify-end` | `justify-content: flex-end` |
| `justify-center` | `justify-content: center` |
| `justify-between` | `justify-content: space-between` |
| `justify-around` | `justify-content: space-around` |
| `justify-evenly` | `justify-content: space-evenly` |

## Examples

```html
<div layout="flex justify-start">Aligned to start</div>
<div layout="flex justify-center">Centered</div>
<div layout="flex justify-end">Aligned to end</div>
<div layout="flex justify-between">Space between items</div>
<div layout="flex justify-around">Space around items</div>
<div layout="flex justify-evenly">Evenly distributed</div>
```

## Responsive

```html
<div layout="flex justify-center tab:justify-between">
  Centered on mobile, spaced on tablet+
</div>
```
