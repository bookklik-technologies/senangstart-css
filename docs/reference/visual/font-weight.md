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

## Preview

<div space="p-x:big p-b:medium m-t:medium" visual="border-w:thin border:neutral-100 dark:border:neutral-800 rounded:medium">

### Font Weight

<div layout="flex col" space="g:medium">
  <p space="m:none" visual="text:neutral-600 dark:text:neutral-400 text-sm"><code>visual="font:bold"</code> - Control text thickness</p>
<div layout="flex" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <span style="font-weight: 400;">normal</span>
  <span style="font-weight: 500;">medium</span>
  <span style="font-weight: 700;">bold</span>
</div>
</div>

<details>
<summary>View Code</summary>

```html
<div layout="flex" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <span style="font-weight: 400;">normal</span>
  <span style="font-weight: 500;">medium</span>
  <span style="font-weight: 700;">bold</span>
</div>
```

</details>

</div>

## Notes

> [!TIP]
> **Tailwind Scale Support**
> 
> Use `tw-` prefix to access Tailwind font weight scale: `font:tw-thin` (100), `font:tw-semibold` (600), `font:tw-extrabold` (800)
> 
> [Reference](https://tailwindcss.com/docs/font-weight)
