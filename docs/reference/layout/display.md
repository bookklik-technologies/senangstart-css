# Display

Control the display type of elements

## Syntax
```
layout="[display-value]"
```

## Values

| Value | CSS Output | Description |
|-------|------------|-------------|
| `flex` | `display: flex` | Flexbox container |
| `inline-flex` | `display: inline-flex` | Inline flexbox container |
| `grid` | `display: grid` | Grid container |
| `inline-grid` | `display: inline-grid` | Inline grid container |
| `block` | `display: block` | Block element |
| `inline` | `display: inline-block` | Inline block element |
| `hidden` | `display: none` | Hidden element |

## Examples

```html
<div layout="flex">Flexbox container</div>
<div layout="grid">Grid container</div>
<div layout="hidden">Hidden element</div>
```

## Responsive

```html
<!-- Responsive example -->
<div layout="mob:... tab:... lap:...">
  Responsive content
</div>
```
