# Box Shadow

Add box shadow

## Syntax
```
visual="shadow:[value]"
```

## Values

| Value | CSS Output | Description |
|-------|------------|-------------|
| `none` | `box-shadow: var(--shadow-none)` | No shadow |
| `small` | `box-shadow: var(--shadow-small)` | Small shadow |
| `medium` | `box-shadow: var(--shadow-medium)` | Medium shadow |
| `big` | `box-shadow: var(--shadow-big)` | Large shadow |
| `giant` | `box-shadow: var(--shadow-giant)` | Giant shadow |

## Examples

```html
<div visual="shadow:medium">Card with shadow</div>
```

## Notes

> [!TIP]
> **Tailwind Scale Support**
> 
> Use `tw-` prefix to access Tailwind shadow scale: `shadow:tw-md`, `shadow:tw-lg`, `shadow:tw-xl`
> 
> [Reference](https://tailwindcss.com/docs/box-shadow)
