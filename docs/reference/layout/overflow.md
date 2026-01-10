# Overflow

Control how content overflows its container with the `layout` attribute.

## Values

| Value | CSS Output |
|-------|------------|
| `overflow:hidden` | `overflow: hidden` |
| `overflow:auto` | `overflow: auto` |
| `overflow:scroll` | `overflow: scroll` |
| `overflow-x:hidden` | `overflow-x: hidden` |
| `overflow-y:auto` | `overflow-y: auto` |

## Examples

```html
<div layout="overflow:hidden">Clipped content</div>
<div layout="overflow:auto">Scrollable when needed</div>
<div layout="overflow:scroll">Always shows scrollbar</div>

<!-- Axis-specific -->
<div layout="overflow-x:auto overflow-y:hidden">
  Horizontal scroll only
</div>
```

## Common Patterns

```html
<!-- Scrollable container with fixed height -->
<div layout="overflow:auto" space="max-h:[400px]">
  Long scrollable content...
</div>

<!-- Image container that clips -->
<div layout="overflow:hidden rounded:big">
  <img src="photo.jpg" layout="object:cover">
</div>
```
