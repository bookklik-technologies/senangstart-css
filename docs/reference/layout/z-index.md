# Z-Index

Control stacking order with the `layout` attribute.

## Values

| Value | CSS Output |
|-------|------------|
| `z:base` | `z-index: 0` |
| `z:low` | `z-index: 10` |
| `z:mid` | `z-index: 50` |
| `z:high` | `z-index: 100` |
| `z:top` | `z-index: 9999` |

## Examples

```html
<div layout="relative z:base">Base layer</div>
<div layout="relative z:low">Low priority</div>
<div layout="relative z:mid">Medium priority</div>
<div layout="relative z:high">High priority</div>
<div layout="fixed z:top">Modal overlay (highest)</div>
```

## Common Patterns

```html
<!-- Dropdown menu -->
<div layout="relative">
  <button>Menu</button>
  <div layout="absolute z:high top:[100%]">
    Dropdown content
  </div>
</div>

<!-- Modal -->
<div layout="fixed inset:0 z:top">Modal overlay</div>
```
