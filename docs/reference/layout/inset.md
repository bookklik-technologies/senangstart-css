# Inset

Control positioning offsets

## Syntax
```
layout="inset:[value]" or layout="top:[value]"
```

## Values

| Value | CSS Output | Description |
|-------|------------|-------------|
| `inset` | `inset: {value}` | All sides |
| `inset-x` | `left: {value}; right: {value}` | Left and right |
| `inset-y` | `top: {value}; bottom: {value}` | Top and bottom |
| `top` | `top: {value}` | Top offset |
| `right` | `right: {value}` | Right offset |
| `bottom` | `bottom: {value}` | Bottom offset |
| `left` | `left: {value}` | Left offset |

## Examples

```html
<div layout="absolute inset:0">Full coverage</div>
<div layout="absolute top:medium left:medium">Offset</div>
```

## Preview

<div space="p-x:big p-b:medium m-t:medium" visual="border-w:thin border:neutral-100 dark:border:neutral-800 rounded:medium">

### Inset Zero

<div layout="flex col" space="g:medium">
  <p space="m:none" visual="text:neutral-600 dark:text:neutral-400 text-sm"><code>layout="inset:0"</code> - Cover entire parent with inset:0</p>
<div layout="relative" space="p:large" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium" style="height: 100px;">
  <span space="p:small" visual="bg:neutral-300 dark:bg:neutral-700 text:neutral-800 dark:text:neutral-200 rounded:small">Parent</span>
  <span layout="absolute inset:0 flex center" visual="bg:primary/50 text:white rounded:medium">inset:0</span>
</div>
</div>

<details>
<summary>View Code</summary>

```html
<div layout="relative" space="p:large" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium" style="height: 100px;">
  <span space="p:small" visual="bg:neutral-300 dark:bg:neutral-700 text:neutral-800 dark:text:neutral-200 rounded:small">Parent</span>
  <span layout="absolute inset:0 flex center" visual="bg:primary/50 text:white rounded:medium">inset:0</span>
</div>
```

</details>

</div>

<div space="p-x:big p-b:medium m-t:medium" visual="border-w:thin border:neutral-100 dark:border:neutral-800 rounded:medium">

### Directional Insets

<div layout="flex col" space="g:medium">
  <p space="m:none" visual="text:neutral-600 dark:text:neutral-400 text-sm"><code>layout="top:0"</code> - Position with top, right, bottom, left</p>
<div layout="relative" space="p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium" style="height: 80px;">
  <span layout="absolute top:0 left:0" space="p:tiny" visual="bg:primary text:white rounded:small">TL</span>
  <span layout="absolute top:0 right:0" space="p:tiny" visual="bg:primary text:white rounded:small">TR</span>
  <span layout="absolute bottom:0 left:0" space="p:tiny" visual="bg:primary text:white rounded:small">BL</span>
  <span layout="absolute bottom:0 right:0" space="p:tiny" visual="bg:primary text:white rounded:small">BR</span>
</div>
</div>

<details>
<summary>View Code</summary>

```html
<div layout="relative" space="p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium" style="height: 80px;">
  <span layout="absolute top:0 left:0" space="p:tiny" visual="bg:primary text:white rounded:small">TL</span>
  <span layout="absolute top:0 right:0" space="p:tiny" visual="bg:primary text:white rounded:small">TR</span>
  <span layout="absolute bottom:0 left:0" space="p:tiny" visual="bg:primary text:white rounded:small">BL</span>
  <span layout="absolute bottom:0 right:0" space="p:tiny" visual="bg:primary text:white rounded:small">BR</span>
</div>
```

</details>

</div>

## Arbitrary Values

Supports custom values using bracket syntax:

```html
<div layout="inset:[custom-value]">Custom</div>
```
