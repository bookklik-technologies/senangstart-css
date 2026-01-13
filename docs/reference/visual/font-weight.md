# Font Weight

Set font weight

## Syntax
```
visual="font:[weight]"
```

## Values

| Value | CSS Output | Description |
|-------|------------|-------------|
| `normal` | `font-weight: var(--fw-normal)` | Normal weight |
| `medium` | `font-weight: var(--fw-medium)` | Medium weight |
| `bold` | `font-weight: var(--fw-bold)` | Bold weight |

## Examples

```html
<div visual="font:bold">Bold text</div>
<div visual="font:tw-semibold">Semibold text</div>
```

## Notes

> [!TIP]
> **Tailwind Scale Support**
> 
> Use `tw-` prefix to access Tailwind font weight scale: `font:tw-thin` (100), `font:tw-semibold` (600), `font:tw-extrabold` (800)
> 
> [Reference](https://tailwindcss.com/docs/font-weight)

## Responsive

```html
<!-- Responsive example -->
<div visual="mob:... tab:... lap:...">
  Responsive content
</div>
```
