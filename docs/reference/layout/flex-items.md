# Flex Items

Control flex grow and shrink behavior

## Syntax
```
layout="[flex-item-value]"
```

## Values

| Value | CSS Output | Description |
|-------|------------|-------------|
| `grow` | `flex-grow: 1` | Allow item to grow |
| `grow-0` | `flex-grow: 0` | Prevent growing |
| `shrink` | `flex-shrink: 1` | Allow item to shrink |
| `shrink-0` | `flex-shrink: 0` | Prevent shrinking |

## Examples

```html
<div layout="grow">Growing item</div>
```

## Responsive

```html
<!-- Responsive example -->
<div layout="mob:... tab:... lap:...">
  Responsive content
</div>
```
