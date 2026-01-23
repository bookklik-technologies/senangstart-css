# Position

Set the positioning method

## Syntax
```
layout="[position-value]"
```

## Values

| Value | CSS Output | Description |
|-------|------------|-------------|
| `static` | `position: static` | Default positioning |
| `relative` | `position: relative` | Relative to normal position |
| `absolute` | `position: absolute` | Absolute within container |
| `fixed` | `position: fixed` | Fixed to viewport |
| `sticky` | `position: sticky` | Sticky positioning |

## Examples

```html
<div layout="absolute">Absolute positioned</div>
<div layout="fixed">Fixed to viewport</div>
```

## Preview

<div space="p-x:big p-b:medium m-t:medium" visual="border-w:thin border:neutral-100 dark:border:neutral-800 rounded:medium">

### Relative Position

<div layout="flex col" space="g:medium">
  <p space="m:none" visual="text:neutral-600 dark:text:neutral-400 text-sm"><code>layout="relative"</code> - Element positioned relative to normal flow</p>
<div layout="relative" space="p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <span space="p:small" visual="bg:primary text:white rounded:small">Relative Container</span>
  <span layout="absolute top:0 right:0" space="p:tiny" visual="bg:danger text:white rounded:small">Abs</span>
</div>
</div>

<details>
<summary>View Code</summary>

```html
<div layout="relative" space="p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <span space="p:small" visual="bg:primary text:white rounded:small">Relative Container</span>
  <span layout="absolute top:0 right:0" space="p:tiny" visual="bg:danger text:white rounded:small">Abs</span>
</div>
```

</details>

</div>

<div space="p-x:big p-b:medium m-t:medium" visual="border-w:thin border:neutral-100 dark:border:neutral-800 rounded:medium">

### Sticky Position

<div layout="flex col" space="g:medium">
  <p space="m:none" visual="text:neutral-600 dark:text:neutral-400 text-sm"><code>layout="sticky"</code> - Element sticks when scrolling past it</p>
<div space="p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <span layout="sticky top:0" space="p:small" visual="bg:primary text:white rounded:small">Sticky Header</span>
</div>
</div>

<details>
<summary>View Code</summary>

```html
<div space="p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <span layout="sticky top:0" space="p:small" visual="bg:primary text:white rounded:small">Sticky Header</span>
</div>
```

</details>

</div>
