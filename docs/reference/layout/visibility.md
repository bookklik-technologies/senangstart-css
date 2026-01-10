# Visibility

Control element visibility

## Syntax
```
layout="[visibility-value]"
```

## Values

| Value | CSS Output | Description |
|-------|------------|-------------|
| `visible` | `visibility: visible` | Element is visible |
| `invisible` | `visibility: hidden` | Element is invisible but takes space |

## Examples

```html
<div layout="invisible">Invisible but present</div>
```

## Responsive

```html
<!-- Responsive example -->
<div layout="mob:... tab:... lap:...">
  Responsive content
</div>
```
