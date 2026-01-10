# Flex Wrap

Control how flex items wrap

## Syntax
```
layout="[wrap-value]"
```

## Values

| Value | CSS Output | Description |
|-------|------------|-------------|
| `wrap` | `flex-wrap: wrap` | Allow wrapping |
| `nowrap` | `flex-wrap: nowrap` | Prevent wrapping |
| `wrap-reverse` | `flex-wrap: wrap-reverse` | Wrap in reverse |

## Examples

```html
<div layout="flex wrap">Wrapping flex</div>
```

## Responsive

```html
<!-- Responsive example -->
<div layout="mob:... tab:... lap:...">
  Responsive content
</div>
```
