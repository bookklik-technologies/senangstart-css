# Flex Items

Control flex grow and shrink behavior

## Syntax
```
layout="[flex-item-value]"
```

## Values

| Value | CSS Output | Description |
|-------|------------|-------------|
| `grow` | `flex-grow: 1` | Allow item to grow |
| `grow-0` | `flex-grow: 0` | Prevent growing |
| `shrink` | `flex-shrink: 1` | Allow item to shrink |
| `shrink-0` | `flex-shrink: 0` | Prevent shrinking |

## Examples

```html
<div layout="grow">Growing item</div>
```

## Preview

<div space="p-x:big p-b:medium m-t:medium" visual="border-w:thin border:neutral-100 dark:border:neutral-800 rounded:medium">

### Flex Grow

<div layout="flex col" space="g:medium">
  <p space="m:none" visual="text:neutral-600 dark:text:neutral-400 text-sm"><code>layout="grow"</code> - Middle item grows to fill available space</p>
<div layout="flex" space="g:small p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <span space="p:small" visual="bg:neutral-300 dark:bg:neutral-700 text:neutral-800 dark:text:neutral-200 rounded:small">Fixed</span>
  <span layout="grow text:center" space="p:small" visual="bg:primary text:white rounded:small">Grows</span>
  <span space="p:small" visual="bg:neutral-300 dark:bg:neutral-700 text:neutral-800 dark:text:neutral-200 rounded:small">Fixed</span>
</div>
</div>

<details>
<summary>View Code</summary>

```html
<div layout="flex" space="g:small p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <span space="p:small" visual="bg:neutral-300 dark:bg:neutral-700 text:neutral-800 dark:text:neutral-200 rounded:small">Fixed</span>
  <span layout="grow text:center" space="p:small" visual="bg:primary text:white rounded:small">Grows</span>
  <span space="p:small" visual="bg:neutral-300 dark:bg:neutral-700 text:neutral-800 dark:text:neutral-200 rounded:small">Fixed</span>
</div>
```

</details>

</div>

<div space="p-x:big p-b:medium m-t:medium" visual="border-w:thin border:neutral-100 dark:border:neutral-800 rounded:medium">

### Flex Shrink

<div layout="flex col" space="g:medium">
  <p space="m:none" visual="text:neutral-600 dark:text:neutral-400 text-sm"><code>layout="shrink"</code> - Item shrinks when space is limited</p>
<div layout="flex" space="g:small p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium" style="max-width: 250px;">
  <span layout="shrink-0" space="p:small" visual="bg:neutral-300 dark:bg:neutral-700 text:neutral-800 dark:text:neutral-200 rounded:small">No Shrink</span>
  <span layout="shrink" space="p:small" visual="bg:primary text:white rounded:small">Can Shrink</span>
</div>
</div>

<details>
<summary>View Code</summary>

```html
<div layout="flex" space="g:small p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium" style="max-width: 250px;">
  <span layout="shrink-0" space="p:small" visual="bg:neutral-300 dark:bg:neutral-700 text:neutral-800 dark:text:neutral-200 rounded:small">No Shrink</span>
  <span layout="shrink" space="p:small" visual="bg:primary text:white rounded:small">Can Shrink</span>
</div>
```

</details>

</div>
