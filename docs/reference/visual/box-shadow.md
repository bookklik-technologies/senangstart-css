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

## Preview

<div space="p-x:big p-b:medium m-t:medium" visual="border-w:thin border:neutral-100 dark:border:neutral-800 rounded:medium">

### Box Shadow

<div layout="flex col" space="g:medium">
  <p space="m:none" visual="text:neutral-600 dark:text:neutral-400 text-sm"><code>visual="shadow:medium"</code> - Add elevation with shadows from subtle to dramatic</p>
<div layout="flex" space="g:big p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div space="p:small" visual="bg:white dark:bg:neutral-800 rounded:small shadow:small">small</div>
  <div space="p:small" visual="bg:white dark:bg:neutral-800 rounded:small shadow:medium">medium</div>
  <div space="p:small" visual="bg:white dark:bg:neutral-800 rounded:small shadow:big">big</div>
</div>
</div>

<details>
<summary>View Code</summary>

```html
<div layout="flex" space="g:big p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div space="p:small" visual="bg:white dark:bg:neutral-800 rounded:small shadow:small">small</div>
  <div space="p:small" visual="bg:white dark:bg:neutral-800 rounded:small shadow:medium">medium</div>
  <div space="p:small" visual="bg:white dark:bg:neutral-800 rounded:small shadow:big">big</div>
</div>
```

</details>

</div>

## Notes

> [!TIP]
> **Tailwind Scale Support**
> 
> Use `tw-` prefix to access Tailwind shadow scale: `shadow:tw-md`, `shadow:tw-lg`, `shadow:tw-xl`
> 
> [Reference](https://tailwindcss.com/docs/box-shadow)
