# Display

Control the display type of elements with the `layout` attribute.

## Syntax
```
layout="[display-value]"
```

## Values

| Value | CSS Output |
|-------|------------|
| `flex` | `display: flex` |
| `inline-flex` | `display: inline-flex` |
| `grid` | `display: grid` |
| `inline-grid` | `display: inline-grid` |
| `block` | `display: block` |
| `inline` | `display: inline-block` |
| `hidden` | `display: none` |

## Examples

```html
<div layout="flex">Flexbox container</div>
<div layout="grid">Grid container</div>
<div layout="hidden">Hidden element</div>
<span layout="block">Block-level span</span>
```

## Responsive

```html
<!-- Hidden on mobile, visible as flex on tablet+ -->
<div layout="hidden tab:flex">
  Only visible on larger screens
</div>
```
