# Margin

Add margin to elements

## Syntax
```
space="m:[value]" or space="m-{side}:[value]"
```

## Values

| Property | CSS Output | Description |
|--------|------------|-------------|
| `m` | `margin: var(--s-{value})` | All sides |
| `m-t` | `margin-top: var(--s-{value})` | Top |
| `m-r` | `margin-right: var(--s-{value})` | Right |
| `m-b` | `margin-bottom: var(--s-{value})` | Bottom |
| `m-l` | `margin-left: var(--s-{value})` | Left |
| `m-x` | `margin-left: var(--s-{value}) margin-right: var(--s-{value})` | Horizontal |
| `m-y` | `margin-top: var(--s-{value}) margin-bottom: var(--s-{value})` | Vertical |

## Scale Values

`none`, `tiny`, `small`, `medium`, `big`, `giant`, `vast`, `auto`

## Examples

```html
<div space="m:medium">Margin all sides</div>
<div space="m-x:auto">Centered horizontally</div>
<div space="m-t:big">Top margin</div>
```

## Arbitrary Values

Supports custom values using bracket syntax:

```html
<div space="margin:[custom-value]">Custom</div>
```

## Notes

> [!TIP]
> **Tailwind Scale Support**
> 
> Use `tw-` prefix to access Tailwind numeric scale: `m:tw-4` (1rem), `m-t:tw-8` (2rem)
> 
> [Reference](https://tailwindcss.com/docs/margin)
