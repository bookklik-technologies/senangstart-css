# Padding

Add padding to elements

## Syntax
```
space="p:[value]" or space="p-{side}:[value]"
```

## Values

| Property | CSS Output | Description |
|--------|------------|-------------|
| `p` | `padding: var(--s-{value})` | All sides |
| `p-t` | `padding-top: var(--s-{value})` | Top |
| `p-r` | `padding-right: var(--s-{value})` | Right |
| `p-b` | `padding-bottom: var(--s-{value})` | Bottom |
| `p-l` | `padding-left: var(--s-{value})` | Left |
| `p-x` | `padding-left: var(--s-{value}) padding-right: var(--s-{value})` | Horizontal |
| `p-y` | `padding-top: var(--s-{value}) padding-bottom: var(--s-{value})` | Vertical |

## Scale Values

`none`, `tiny`, `small`, `medium`, `big`, `giant`, `vast`

## Examples

```html
<div space="p:medium">Padding all sides</div>
<div space="p-x:big p-y:small">Different padding</div>
<div space="p:[20px]">Custom padding</div>
```

## Arbitrary Values

Supports custom values using bracket syntax:

```html
<div space="padding:[custom-value]">Custom</div>
```

## Notes

> [!TIP]
> **Tailwind Scale Support**
> 
> Use `tw-` prefix to access Tailwind numeric scale: `p:tw-4` (1rem), `p:tw-8` (2rem)
> 
> [Reference](https://tailwindcss.com/docs/padding)
