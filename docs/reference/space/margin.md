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

## Preview

<div space="p-x:big p-b:medium m-t:medium" visual="border-w:thin border:neutral-100 dark:border:neutral-800 rounded:medium">

### Margin Scale

<div layout="flex col" space="g:medium">
  <p space="m:none" visual="text:neutral-600 dark:text:neutral-400 text-sm"><code>space="m:medium"</code> - Different margin sizes from the scale</p>
<div layout="flex col" space="g:tiny p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div space="m:tiny" visual="bg:primary text:white rounded:small">m:tiny</div>
  <div space="m:small" visual="bg:primary text:white rounded:small">m:small</div>
  <div space="m:medium" visual="bg:primary text:white rounded:small">m:medium</div>
</div>
</div>

<details>
<summary>View Code</summary>

```html
<div layout="flex col" space="g:tiny p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div space="m:tiny" visual="bg:primary text:white rounded:small">m:tiny</div>
  <div space="m:small" visual="bg:primary text:white rounded:small">m:small</div>
  <div space="m:medium" visual="bg:primary text:white rounded:small">m:medium</div>
</div>
```

</details>

</div>

<div space="p-x:big p-b:medium m-t:medium" visual="border-w:thin border:neutral-100 dark:border:neutral-800 rounded:medium">

### Auto Centering

<div layout="flex col" space="g:medium">
  <p space="m:none" visual="text:neutral-600 dark:text:neutral-400 text-sm"><code>space="m-x:auto"</code> - Use m-x:auto to center horizontally</p>
<div space="p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div space="m-x:auto p:small" visual="bg:primary text:white rounded:small" style="width: fit-content;">m-x:auto</div>
</div>
</div>

<details>
<summary>View Code</summary>

```html
<div space="p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div space="m-x:auto p:small" visual="bg:primary text:white rounded:small" style="width: fit-content;">m-x:auto</div>
</div>
```

</details>

</div>

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
