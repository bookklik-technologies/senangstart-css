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

`none`, `thin`, `regular`, `thick`, `tiny`, `tiny-2x`, `small`, `small-2x`, `small-3x`, `small-4x`, `medium`, `medium-2x`, `medium-3x`, `medium-4x`, `large`, `large-2x`, `large-3x`, `large-4x`, `big`, `big-2x`, `big-3x`, `big-4x`, `giant`, `giant-2x`, `giant-3x`, `giant-4x`, `vast`, `vast-2x`, `vast-3x`, `vast-4x`, `vast-5x`, `vast-6x`, `vast-7x`, `vast-8x`, `vast-9x`, `vast-10x`, `min`, `max`, `fit`

## Examples

```html
<div space="w:[100%]">Full width</div>
<div space="max-w:[1200px]">Max width container</div>
<div space="min-w:[300px]">Min width</div>
<div space="w:max">Content width</div>
<div space="max-w:max">Max content width</div>
<div space="min-w:min">Min content width</div>
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

### Content-Based Sizing

<div layout="flex col" space="g:medium">
  <p space="m:none" visual="text:neutral-600 dark:text:neutral-400 text-sm"><code>space="w:max"</code> - Use min, max, or fit for content-based sizing</p>
<div space="p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div space="w:min p:small m-b:small" visual="bg:primary text:white rounded:small">w:min shrinks to minimum</div>
  <div space="w:max p:small m-b:small" visual="bg:pink-600 text:white rounded:small">w:max expands to fit all content without wrapping</div>
  <div space="w:fit p:small" visual="bg:green-600 text:white rounded:small">w:fit adapts to available space while respecting content</div>
</div>
</div>

<details>
<summary>View Code</summary>

```html
<div space="p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div space="w:min p:small m-b:small" visual="bg:primary text:white rounded:small">w:min shrinks to minimum</div>
  <div space="w:max p:small m-b:small" visual="bg:pink-600 text:white rounded:small">w:max expands to fit all content without wrapping</div>
  <div space="w:fit p:small" visual="bg:green-600 text:white rounded:small">w:fit adapts to available space while respecting content</div>
</div>
```

</details>

</div>

<div space="p-x:big p-b:medium m-t:medium" visual="border-w:thin border:neutral-100 dark:border:neutral-800 rounded:medium">

### Max Width with Content Values

<div layout="flex col" space="g:medium">
  <p space="m:none" visual="text:neutral-600 dark:text:neutral-400 text-sm"><code>space="max-w:min"</code> - Constrain maximum width using content values</p>
<div space="p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div space="max-w:min p:small m-b:small" visual="bg:primary text:white rounded:small">max-w:min - Text will wrap to minimum width needed</div>
  <div space="max-w:max p:small m-b:small" visual="bg:pink-600 text:white rounded:small">max-w:max - Expands to content</div>
  <div space="max-w:[200px] p:small" visual="bg:green-600 text:white rounded:small">max-w:[200px] - Fixed max</div>
</div>
</div>

<details>
<summary>View Code</summary>

```html
<div space="p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div space="max-w:min p:small m-b:small" visual="bg:primary text:white rounded:small">max-w:min - Text will wrap to minimum width needed</div>
  <div space="max-w:max p:small m-b:small" visual="bg:pink-600 text:white rounded:small">max-w:max - Expands to content</div>
  <div space="max-w:[200px] p:small" visual="bg:green-600 text:white rounded:small">max-w:[200px] - Fixed max</div>
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
