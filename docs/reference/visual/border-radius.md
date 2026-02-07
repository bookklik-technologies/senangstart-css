# Border Radius

Set border radius for all corners or specific corners

## Syntax
```
visual="rounded:[value]" | visual="rounded-{t|b|l|r|tl|tr|bl|br}:[value]"
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
<div visual="rounded-t:medium">Top rounded</div>
<div visual="rounded-tl:big rounded-br:big">Opposite corners</div>
```

## Preview

<div space="p-x:big p-b:medium m-t:medium" visual="border-w:thin border:neutral-100 dark:border:neutral-800 rounded:medium">

### Border Radius

<div layout="flex col" space="g:medium">
  <p space="m:none" visual="text:neutral-600 dark:text:neutral-400 text-sm"><code>visual="rounded:medium"</code> - Round element corners from subtle to pill-shaped</p>
<div layout="flex" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
   <div space="p:small" visual="bg:primary text:white rounded:none">none</div>
   <div space="p:small" visual="bg:primary text:white rounded:small">small</div>
   <div space="p:small" visual="bg:primary text:white rounded:medium">medium</div>
   <div space="p:small" visual="bg:primary text:white rounded:round">round</div>
</div>
</div>

<details>
<summary>View Code</summary>

```html
<div layout="flex" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
   <div space="p:small" visual="bg:primary text:white rounded:none">none</div>
   <div space="p:small" visual="bg:primary text:white rounded:small">small</div>
   <div space="p:small" visual="bg:primary text:white rounded:medium">medium</div>
   <div space="p:small" visual="bg:primary text:white rounded:round">round</div>
</div>
```

</details>

</div>

<div space="p-x:big p-b:medium m-t:medium" visual="border-w:thin border:neutral-100 dark:border:neutral-800 rounded:medium">

### Directional Border Radius

<div layout="flex col" space="g:medium">
  <p space="m:none" visual="text:neutral-600 dark:text:neutral-400 text-sm"><code>visual="rounded-t:medium"</code> - Round specific corners for unique shapes</p>
<div layout="flex" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
   <div space="p:small" visual="bg:primary text:white rounded-t:medium">top</div>
   <div space="p:small" visual="bg:primary text:white rounded-b:medium">bottom</div>
   <div space="p:small" visual="bg:primary text:white rounded-l:medium">left</div>
   <div space="p:small" visual="bg:primary text:white rounded-r:medium">right</div>
</div>
</div>

<details>
<summary>View Code</summary>

```html
<div layout="flex" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
   <div space="p:small" visual="bg:primary text:white rounded-t:medium">top</div>
   <div space="p:small" visual="bg:primary text:white rounded-b:medium">bottom</div>
   <div space="p:small" visual="bg:primary text:white rounded-l:medium">left</div>
   <div space="p:small" visual="bg:primary text:white rounded-r:medium">right</div>
</div>
```

</details>

</div>

## Arbitrary Values

Supports custom values using bracket syntax:

```html
<div visual="border:[custom-value]">Custom</div>
```

## Notes

> [!TIP]
> **Tailwind Scale Support**
> 
> Use `tw-` prefix to access Tailwind radius scale: `rounded:tw-lg` (0.5rem), `rounded:tw-2xl` (1rem)
> 
> [Reference](https://tailwindcss.com/docs/border-radius)
