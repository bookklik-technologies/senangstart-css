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

## Preview

<div space="p-x:big p-b:medium m-t:medium" visual="border-w:thin border:neutral-100 dark:border:neutral-800 rounded:medium">

### Height Control

<div layout="flex col" space="g:medium">
  <p space="m:none" visual="text:neutral-600 dark:text:neutral-400 text-sm"><code>space="h:[100%]"</code> - Set fixed heights</p>
<div layout="flex" space="g:small p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium" style="height: 120px;">
  <div space="h:[100%] p:small" visual="bg:primary text:white rounded:small" layout="flex center">h:[100%]</div>
  <div space="h:[80px] p:small" visual="bg:primary text:white rounded:small" layout="flex center">h:[80px]</div>
  <div space="h:[60px] p:small" visual="bg:primary text:white rounded:small" layout="flex center">h:[60px]</div>
</div>
</div>

<details>
<summary>View Code</summary>

```html
<div layout="flex" space="g:small p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium" style="height: 120px;">
  <div space="h:[100%] p:small" visual="bg:primary text:white rounded:small" layout="flex center">h:[100%]</div>
  <div space="h:[80px] p:small" visual="bg:primary text:white rounded:small" layout="flex center">h:[80px]</div>
  <div space="h:[60px] p:small" visual="bg:primary text:white rounded:small" layout="flex center">h:[60px]</div>
</div>
```

</details>

</div>

<div space="p-x:big p-b:medium m-t:medium" visual="border-w:thin border:neutral-100 dark:border:neutral-800 rounded:medium">

### Min Height

<div layout="flex col" space="g:medium">
  <p space="m:none" visual="text:neutral-600 dark:text:neutral-400 text-sm"><code>space="min-h:[80px]"</code> - Set minimum height constraint</p>
<div space="p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div space="min-h:[80px] p:small" visual="bg:primary text:white rounded:small" layout="flex center">min-h:[80px]</div>
</div>
</div>

<details>
<summary>View Code</summary>

```html
<div space="p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div space="min-h:[80px] p:small" visual="bg:primary text:white rounded:small" layout="flex center">min-h:[80px]</div>
</div>
```

</details>

</div>

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
