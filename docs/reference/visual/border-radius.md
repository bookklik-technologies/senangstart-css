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

## Preview

<div space="p-x:big p-b:medium m-t:medium" visual="border-w:thin border:neutral-100 dark:border:neutral-800 rounded:medium">

### Border Radius

<div layout="flex col" space="g:medium">
  <p space="m:none" visual="text:neutral-600 dark:text:neutral-400 text-sm"><code>visual="rounded:medium"</code> - Round element corners from subtle to pill-shaped</p>
<div layout="flex" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div space="p:small" visual="bg:primary text:white" style="border-radius: 0;">none</div>
  <div space="p:small" visual="bg:primary text:white" style="border-radius: 0.25rem;">small</div>
  <div space="p:small" visual="bg:primary text:white" style="border-radius: 0.5rem;">medium</div>
  <div space="p:small" visual="bg:primary text:white" style="border-radius: 9999px;">round</div>
</div>
</div>

<details>
<summary>View Code</summary>

```html
<div layout="flex" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div space="p:small" visual="bg:primary text:white" style="border-radius: 0;">none</div>
  <div space="p:small" visual="bg:primary text:white" style="border-radius: 0.25rem;">small</div>
  <div space="p:small" visual="bg:primary text:white" style="border-radius: 0.5rem;">medium</div>
  <div space="p:small" visual="bg:primary text:white" style="border-radius: 9999px;">round</div>
</div>
```

</details>

</div>

## Notes

> [!TIP]
> **Tailwind Scale Support**
> 
> Use `tw-` prefix to access Tailwind radius scale: `rounded:tw-lg` (0.5rem), `rounded:tw-2xl` (1rem)
> 
> [Reference](https://tailwindcss.com/docs/border-radius)
