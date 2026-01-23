# Background Image

Set background image or gradient

## Syntax
```
visual="bg-image:[value]"
```

## Values

| Value | CSS Output | Description |
|-------|------------|-------------|
| `none` | `background-image: none` | No background image |
| `gradient-to-t` | `background-image: linear-gradient(to top, var(--tw-gradient-stops))` | Gradient to top |
| `gradient-to-b` | `background-image: linear-gradient(to bottom, var(--tw-gradient-stops))` | Gradient to bottom |
| `gradient-to-l` | `background-image: linear-gradient(to left, var(--tw-gradient-stops))` | Gradient to left |
| `gradient-to-r` | `background-image: linear-gradient(to right, var(--tw-gradient-stops))` | Gradient to right |

## Examples

```html
<div visual="bg-image:gradient-to-r">Gradient background</div>
```

## Preview

<div space="p-x:big p-b:medium m-t:medium" visual="border-w:thin border:neutral-100 dark:border:neutral-800 rounded:medium">

### Background Gradient

<div layout="flex col" space="g:medium">
  <p space="m:none" visual="text:neutral-600 dark:text:neutral-400 text-sm"><code>visual="bg-image:gradient-to-r"</code> - Apply gradient backgrounds</p>
<div layout="flex" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div space="p:medium" visual="bg-image:gradient-to-r from:blue-500 to:violet-500 text:white rounded:small">gradient-to-r</div>
  <div space="p:medium" visual="bg-image:gradient-to-b from:emerald-500 to:blue-500 text:white rounded:small">gradient-to-b</div>
</div>
</div>

<details>
<summary>View Code</summary>

```html
<div layout="flex" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div space="p:medium" visual="bg-image:gradient-to-r from:blue-500 to:violet-500 text:white rounded:small">gradient-to-r</div>
  <div space="p:medium" visual="bg-image:gradient-to-b from:emerald-500 to:blue-500 text:white rounded:small">gradient-to-b</div>
</div>
```

</details>

</div>

## Arbitrary Values

Supports custom values using bracket syntax:

```html
<div visual="background:[custom-value]">Custom</div>
```
