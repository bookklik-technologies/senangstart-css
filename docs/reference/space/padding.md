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

`none`, `thin`, `regular`, `thick`, `tiny`, `tiny-2x`, `small`, `small-2x`, `small-3x`, `small-4x`, `medium`, `medium-2x`, `medium-3x`, `medium-4x`, `large`, `large-2x`, `large-3x`, `large-4x`, `big`, `big-2x`, `big-3x`, `big-4x`, `giant`, `giant-2x`, `giant-3x`, `giant-4x`, `vast`, `vast-2x`, `vast-3x`, `vast-4x`, `vast-5x`, `vast-6x`, `vast-7x`, `vast-8x`, `vast-9x`, `vast-10x`

## Examples

```html
<div space="p:medium">Padding all sides</div>
<div space="p-x:big p-y:small">Different padding</div>
<div space="p:[20px]">Custom padding</div>
```

## Preview

<div space="p-x:big p-b:medium m-t:medium" visual="border-w:thin border:neutral-100 dark:border:neutral-800 rounded:medium">

### Padding Scale

<div layout="flex col" space="g:medium">
  <p space="m:none" visual="text:neutral-600 dark:text:neutral-400 text-sm"><code>space="p:medium"</code> - Different padding sizes from the scale</p>
<div layout="flex" space="g:small">
  <div space="p:tiny" visual="bg:primary text:white rounded:small">tiny</div>
  <div space="p:small" visual="bg:primary text:white rounded:small">small</div>
  <div space="p:medium" visual="bg:primary text:white rounded:small">medium</div>
  <div space="p:big" visual="bg:primary text:white rounded:small">big</div>
</div>
</div>

<details>
<summary>View Code</summary>

```html
<div layout="flex" space="g:small">
  <div space="p:tiny" visual="bg:primary text:white rounded:small">tiny</div>
  <div space="p:small" visual="bg:primary text:white rounded:small">small</div>
  <div space="p:medium" visual="bg:primary text:white rounded:small">medium</div>
  <div space="p:big" visual="bg:primary text:white rounded:small">big</div>
</div>
```

</details>

</div>

<div space="p-x:big p-b:medium m-t:medium" visual="border-w:thin border:neutral-100 dark:border:neutral-800 rounded:medium">

### Directional Padding

<div layout="flex col" space="g:medium">
  <p space="m:none" visual="text:neutral-600 dark:text:neutral-400 text-sm"><code>space="p-x:big"</code> - Apply padding to specific sides</p>
<div layout="flex" space="g:small p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div space="p-x:big p-y:small" visual="bg:primary text:white rounded:small">p-x:big p-y:small</div>
  <div space="p-t:big" visual="bg:primary text:white rounded:small">p-t:big</div>
</div>
</div>

<details>
<summary>View Code</summary>

```html
<div layout="flex" space="g:small p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div space="p-x:big p-y:small" visual="bg:primary text:white rounded:small">p-x:big p-y:small</div>
  <div space="p-t:big" visual="bg:primary text:white rounded:small">p-t:big</div>
</div>
```

</details>

</div>

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
