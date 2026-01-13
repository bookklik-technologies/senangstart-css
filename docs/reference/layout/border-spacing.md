# Border Spacing

Control spacing between table borders

## Syntax
```
layout="border-spacing:[value]"
```

## Values

| Value | CSS Output | Description |
|-------|------------|-------------|
| `border-spacing` | `border-spacing: {value}` | All spacing |
| `border-spacing-x` | `border-spacing: {value} 0` | Horizontal spacing |
| `border-spacing-y` | `border-spacing: 0 {value}` | Vertical spacing |

## Examples

```html
<table layout="border-separate border-spacing:small">Spaced</table>
```

## Arbitrary Values

Supports custom values using bracket syntax:

```html
<div layout="border:[custom-value]">Custom</div>
```
