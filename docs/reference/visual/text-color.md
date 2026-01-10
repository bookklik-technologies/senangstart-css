# Text Color

Control text color with the `visual` attribute.

## Syntax
```
visual="text:[color]"
```

## Values

| Property | CSS Output |
|----------|------------|
| `text:dark` | `color: var(--c-dark)` |
| `text:grey` | `color: var(--c-grey)` |
| `text:primary` | `color: var(--c-primary)` |

## Color Keywords

Use any color from your theme:

- `text:white`, `text:black`
- `text:grey`, `text:dark`, `text:light`
- `text:primary`, `text:secondary`
- `text:success`, `text:warning`, `text:danger`

## Examples

```html
<span visual="text:dark">Dark text</span>
<span visual="text:grey">Grey text</span>
<span visual="text:primary">Primary color text</span>
<span visual="text:[#FF5733]">Custom color</span>
```

## States

```html
<a visual="text:grey hover:text:primary">Link with hover</a>
```
