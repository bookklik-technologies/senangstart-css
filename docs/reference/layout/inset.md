# Inset

Control the position of positioned elements with the `layout` attribute.

## Values

| Value | CSS Output |
|-------|------------|
| `inset:0` | `inset: 0` |
| `inset:small` | `inset: var(--s-small)` |
| `top:0` | `top: 0` |
| `right:0` | `right: 0` |
| `bottom:0` | `bottom: 0` |
| `left:0` | `left: 0` |
| `inset-x:0` | `left: 0; right: 0` |
| `inset-y:0` | `top: 0; bottom: 0` |

## Examples

```html
<!-- Full overlay -->
<div layout="absolute inset:0">Covers entire parent</div>

<!-- Bottom-right corner -->
<div layout="fixed bottom:0 right:0">Bottom-right corner</div>

<!-- Top bar -->
<nav layout="fixed top:0 inset-x:0">Full-width top bar</nav>

<!-- Arbitrary values -->
<div layout="absolute top:[20px] left:[50%]">Offset positioning</div>
```
