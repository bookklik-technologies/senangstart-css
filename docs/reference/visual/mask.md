# Mask

Apply mask to element

## Syntax
```
visual="mask:[value]"
```

## Values

| Value | CSS Output | Description |
|-------|------------|-------------|
| `none` | `mask-image: none` | No mask |
| `fade-y` | `mask-image: linear-gradient(to bottom, transparent, black 10%, black 90%, transparent)` | Vertical fade |
| `fade-x` | `mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent)` | Horizontal fade |

## Examples

```html
<div visual="mask:fade-y">Faded edges</div>
```

## Preview

<div space="p-x:big p-b:medium m-t:medium" visual="border-w:thin border:neutral-100 dark:border:neutral-800 rounded:medium">

### Mask

<div layout="flex col" space="g:medium">
  <p space="m:none" visual="text:neutral-600 dark:text:neutral-400 text-sm"><code>visual="mask:fade-y"</code> - Apply gradient mask to edges</p>
<div layout="flex" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div space="p:medium" visual="bg:primary text:white rounded:small mask:none">none</div>
  <div space="p:medium" visual="bg:primary text:white rounded:small mask:fade-y">fade-y</div>
  <div space="p:medium" visual="bg:primary text:white rounded:small mask:fade-x">fade-x</div>
</div>
</div>

<details>
<summary>View Code</summary>

```html
<div layout="flex" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div space="p:medium" visual="bg:primary text:white rounded:small mask:none">none</div>
  <div space="p:medium" visual="bg:primary text:white rounded:small mask:fade-y">fade-y</div>
  <div space="p:medium" visual="bg:primary text:white rounded:small mask:fade-x">fade-x</div>
</div>
```

</details>

</div>

## Arbitrary Values

Supports custom values using bracket syntax:

```html
<div visual="mask:[custom-value]">Custom</div>
```
