# Width

Set element width

## Syntax
```
space="w:[value]"
```

## Values

| Property | CSS Output | Description |
|--------|------------|-------------|
| `w` | `width: var(--s-{value})` | Width |
| `min-w` | `min-width: var(--s-{value})` | Minimum width |
| `max-w` | `max-width: var(--s-{value})` | Maximum width |

## Scale Values

`none`, `tiny`, `small`, `medium`, `big`, `giant`, `vast`

## Examples

```html
<div space="w:[100%]">Full width</div>
<div space="max-w:[1200px]">Max width container</div>
<div space="min-w:[300px]">Min width</div>
```

## Preview

<div space="p-x:big p-b:medium m-t:medium" visual="border-w:thin border:neutral-100 dark:border:neutral-800 rounded:medium">

### Width Control

<div layout="flex col" space="g:medium">
  <p space="m:none" visual="text:neutral-600 dark:text:neutral-400 text-sm"><code>space="w:[100%]"</code> - Set fixed or percentage widths</p>
<div layout="flex col" space="g:small p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div space="w:[100%] p:small" visual="bg:primary text:white rounded:small">w:[100%]</div>
  <div space="w:[75%] p:small" visual="bg:primary text:white rounded:small">w:[75%]</div>
  <div space="w:[50%] p:small" visual="bg:primary text:white rounded:small">w:[50%]</div>
</div>
</div>

<details>
<summary>View Code</summary>

```html
<div layout="flex col" space="g:small p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div space="w:[100%] p:small" visual="bg:primary text:white rounded:small">w:[100%]</div>
  <div space="w:[75%] p:small" visual="bg:primary text:white rounded:small">w:[75%]</div>
  <div space="w:[50%] p:small" visual="bg:primary text:white rounded:small">w:[50%]</div>
</div>
```

</details>

</div>

<div space="p-x:big p-b:medium m-t:medium" visual="border-w:thin border:neutral-100 dark:border:neutral-800 rounded:medium">

### Max Width

<div layout="flex col" space="g:medium">
  <p space="m:none" visual="text:neutral-600 dark:text:neutral-400 text-sm"><code>space="max-w:[200px]"</code> - Constrain maximum width</p>
<div space="p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div space="max-w:[200px] p:small" visual="bg:primary text:white rounded:small">max-w:[200px]</div>
</div>
</div>

<details>
<summary>View Code</summary>

```html
<div space="p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div space="max-w:[200px] p:small" visual="bg:primary text:white rounded:small">max-w:[200px]</div>
</div>
```

</details>

</div>

## Arbitrary Values

Supports custom values using bracket syntax:

```html
<div space="width:[custom-value]">Custom</div>
```

## Notes

> [!TIP]
> **Tailwind Scale Support**
> 
> Use `tw-` prefix to access Tailwind numeric scale: `w:tw-64` (16rem), `max-w:tw-96` (24rem)
> 
> [Reference](https://tailwindcss.com/docs/width)
