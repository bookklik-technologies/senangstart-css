# Background

Control background colors with the `visual` attribute.

## Values

| Property | CSS Output |
|----------|------------|
| `bg:white` | `background-color: var(--c-white)` |
| `bg:primary` | `background-color: var(--c-primary)` |
| `bg:[#hex]` | `background-color: #hex` |

## Color Keywords

Use any color from your theme:

- `bg:white`, `bg:black`
- `bg:grey`, `bg:dark`, `bg:light`
- `bg:primary`, `bg:secondary`
- `bg:success`, `bg:warning`, `bg:danger`

## Examples

```html
<div visual="bg:white">White background</div>
<div visual="bg:primary">Primary color</div>
<div visual="bg:[#FF5733]">Custom hex</div>
<div visual="bg:[rgba(0,0,0,0.5)]">Semi-transparent</div>
```

## Responsive & States

```html
<div visual="bg:white hover:bg:light">Hover to change</div>
<div visual="bg:light tab:bg:white">Different on tablet+</div>
```
