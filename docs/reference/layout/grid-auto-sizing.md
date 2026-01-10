# Grid Auto Sizing

Control size of auto-generated grid tracks

## Syntax
```
layout="auto-cols:[value]" or layout="auto-rows:[value]"
```

## Values

| Value | CSS Output | Description |
|-------|------------|-------------|
| `auto` | `auto` | Auto size |
| `min` | `min-content` | Minimum content |
| `max` | `max-content` | Maximum content |
| `fr` | `minmax(0, 1fr)` | Fractional unit |

## Examples

```html
<div layout="grid auto-cols:min">Auto min columns</div>
```

## Responsive

```html
<!-- Responsive example -->
<div layout="mob:... tab:... lap:...">
  Responsive content
</div>
```
