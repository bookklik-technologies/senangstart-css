# Vertical Align

Control vertical alignment of inline elements with the `visual` attribute.

## Syntax
```
visual="vertical-align:baseline | vertical-align:top | vertical-align:middle | vertical-align:bottom"
```

## Values

| Value | CSS Output |
|-------|------------|
| `vertical-align:baseline` | `vertical-align: baseline` |
| `vertical-align:top` | `vertical-align: top` |
| `vertical-align:middle` | `vertical-align: middle` |
| `vertical-align:bottom` | `vertical-align: bottom` |
| `vertical-align:text-top` | `vertical-align: text-top` |
| `vertical-align:text-bottom` | `vertical-align: text-bottom` |

## Examples

```html
<img visual="vertical-align:middle" src="icon.png"> Aligned text

<span visual="vertical-align:top">Top aligned</span>
<span visual="vertical-align:bottom">Bottom aligned</span>
```

## Common Patterns

```html
<!-- Icon aligned with text -->
<span>
  <img visual="vertical-align:middle" src="icon.svg" space="w:[16px] h:[16px]">
  Text next to icon
</span>
```
