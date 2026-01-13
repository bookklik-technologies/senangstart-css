# Border Radius

Set border radius

## Syntax
```
visual="rounded:[value]"
```

## Values

| Value | CSS Output | Description |
|-------|------------|-------------|
| `none` | `border-radius: var(--r-none)` | No rounding |
| `small` | `border-radius: var(--r-small)` | Small radius |
| `medium` | `border-radius: var(--r-medium)` | Medium radius |
| `big` | `border-radius: var(--r-big)` | Large radius |
| `round` | `border-radius: var(--r-round)` | Fully round |

## Examples

```html
<div visual="rounded:medium">Rounded corners</div>
<div visual="rounded:round">Pill shape</div>
```

## Notes

> [!TIP]
> **Tailwind Scale Support**
> 
> Use `tw-` prefix to access Tailwind radius scale: `rounded:tw-lg` (0.5rem), `rounded:tw-2xl` (1rem)
> 
> [Reference](https://tailwindcss.com/docs/border-radius)

## Responsive

```html
<!-- Responsive example -->
<div visual="mob:... tab:... lap:...">
  Responsive content
</div>
```
