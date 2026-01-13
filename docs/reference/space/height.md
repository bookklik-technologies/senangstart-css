# Height

Set element height

## Syntax
```
space="h:[value]"
```

## Values

| Property | CSS Output | Description |
|--------|------------|-------------|
| `h` | `height: var(--s-{value})` | Height |
| `min-h` | `min-height: var(--s-{value})` | Minimum height |
| `max-h` | `max-height: var(--s-{value})` | Maximum height |

## Scale Values

`none`, `tiny`, `small`, `medium`, `big`, `giant`, `vast`

## Examples

```html
<div space="h:[100vh]">Full viewport height</div>
<div space="min-h:[400px]">Min height</div>
```

## Arbitrary Values

Supports custom values using bracket syntax:

```html
<div space="height:[custom-value]">Custom</div>
```

## Notes

> [!TIP]
> **Tailwind Scale Support**
> 
> Use `tw-` prefix to access Tailwind numeric scale: `h:tw-64` (16rem), `min-h:tw-96` (24rem)
> 
> [Reference](https://tailwindcss.com/docs/height)
