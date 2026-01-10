# Align Items

Control vertical alignment of flex items with the `layout` attribute.

## Syntax
```
layout="items:[value]"
```

## Values

| Value | CSS Output |
|-------|------------|
| `items:start` | `align-items: flex-start` |
| `items:end` | `align-items: flex-end` |
| `items:center` | `align-items: center` |
| `items:baseline` | `align-items: baseline` |
| `items:stretch` | `align-items: stretch` |

## Examples

```html
<div layout="flex items:center">Vertically centered items</div>
<div layout="flex items:start">Items aligned to top</div>
<div layout="flex items:end">Items aligned to bottom</div>
<div layout="flex items:baseline">Aligned by text baseline</div>
```

## Responsive

```html
<div layout="flex items:start tab:items:center">
  Top on mobile, centered on tablet+
</div>
```
