# Float Clear

Control element floating and clearing

## Syntax
```
layout="[float-value]" or layout="[clear-value]"
```

## Values

| Value | CSS Output | Description |
|-------|------------|-------------|
| `float-left` | `float: left` | Float left |
| `float-right` | `float: right` | Float right |
| `float-none` | `float: none` | No float |
| `clear-left` | `clear: left` | Clear left floats |
| `clear-right` | `clear: right` | Clear right floats |
| `clear-both` | `clear: both` | Clear all floats |
| `clear-none` | `clear: none` | No clearing |

## Examples

```html
<img layout="float-left">Float left</img>
```

## Responsive

```html
<!-- Responsive example -->
<div layout="mob:... tab:... lap:...">
  Responsive content
</div>
```
