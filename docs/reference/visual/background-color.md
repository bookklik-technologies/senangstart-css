# Background Color

Control background colors with the `visual` attribute.

## Syntax
```
visual="bg:[color]"
```

## Values

| Property | CSS Output |
|----------|------------|
| `bg:white` | `background-color: var(--c-white)` |
| `bg:primary` | `background-color: var(--c-primary)` |
| `bg:[#hex]` | `background-color: #hex` |

## Examples

```html
<div visual="bg:white">White background</div>
<div visual="bg:primary">Primary color</div>
<div visual="bg:[#FF5733]">Custom hex</div>
```

## Responsive & States

```html
<div visual="bg:white hover:bg:light">Hover to change</div>
<div visual="bg:light tab:bg:white">Different on tablet+</div>
```
