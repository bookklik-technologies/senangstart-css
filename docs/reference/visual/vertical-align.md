# Vertical Align

Control vertical alignment of inline elements with the `visual` attribute.

## Values

| Value | CSS Output |
|-------|------------|
| `align-baseline` | `vertical-align: baseline` |
| `align-top` | `vertical-align: top` |
| `align-middle` | `vertical-align: middle` |
| `align-bottom` | `vertical-align: bottom` |
| `align-text-top` | `vertical-align: text-top` |
| `align-text-bottom` | `vertical-align: text-bottom` |

## Examples

```html
<img visual="align-middle" src="icon.png"> Aligned text

<span visual="align-top">Top aligned</span>
<span visual="align-bottom">Bottom aligned</span>
```

## Common Patterns

```html
<!-- Icon aligned with text -->
<span>
  <img visual="align-middle" src="icon.svg" space="w:[16px] h:[16px]">
  Text next to icon
</span>
```
