# Order

Control flex/grid item order

## Syntax
```
layout="order:[value]"
```

## Values

| Value | CSS Output | Description |
|-------|------------|-------------|
| `first` | `order: -9999` | Move to first |
| `last` | `order: 9999` | Move to last |
| `none` | `order: 0` | Default order |
| `1-12` | `order: {n}` | Specific order |

## Examples

```html
<div layout="order:first">First item</div>
```

## Responsive

```html
<!-- Responsive example -->
<div layout="mob:... tab:... lap:...">
  Responsive content
</div>
```
