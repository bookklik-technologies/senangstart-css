# Align Self

Override alignment for a single item

## Syntax
```
layout="self:[value]"
```

## Values

| Value | CSS Output | Description |
|-------|------------|-------------|
| `auto` | `align-self: auto` | Use parent alignment |
| `start` | `align-self: flex-start` | Align to start |
| `end` | `align-self: flex-end` | Align to end |
| `center` | `align-self: center` | Center item |
| `baseline` | `align-self: baseline` | Align to baseline |
| `stretch` | `align-self: stretch` | Stretch item |

## Examples

```html
<div layout="self:center">Centered item</div>
```

## Responsive

```html
<!-- Responsive example -->
<div layout="mob:... tab:... lap:...">
  Responsive content
</div>
```
