# Aspect Ratio

Set element aspect ratio

## Syntax
```
layout="aspect:[value]"
```

## Values

| Value | CSS Output | Description |
|-------|------------|-------------|
| `auto` | `aspect-ratio: auto` | Natural aspect ratio |
| `square` | `aspect-ratio: 1 / 1` | 1:1 square |
| `video` | `aspect-ratio: 16 / 9` | 16:9 video |

## Examples

```html
<div layout="aspect:square">Square</div>
<div layout="aspect:[4/3]">4:3</div>
```

## Preview

<div space="p-x:big p-b:medium m-t:medium" visual="border-w:thin border:neutral-100 dark:border:neutral-800 rounded:medium">

### Aspect Ratio Square

<div layout="flex col" space="g:medium">
  <p space="m:none" visual="text:neutral-600 dark:text:neutral-400 text-sm"><code>layout="aspect:square"</code> - 1:1 aspect ratio</p>
<div layout="flex" space="g:small p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div layout="aspect:square flex center" visual="bg:primary text:white rounded:small" style="width: 80px;">1:1</div>
  <div layout="aspect:video flex center" visual="bg:primary text:white rounded:small" style="width: 80px;">16:9</div>
</div>
</div>

<details>
<summary>View Code</summary>

```html
<div layout="flex" space="g:small p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div layout="aspect:square flex center" visual="bg:primary text:white rounded:small" style="width: 80px;">1:1</div>
  <div layout="aspect:video flex center" visual="bg:primary text:white rounded:small" style="width: 80px;">16:9</div>
</div>
```

</details>

</div>

## Arbitrary Values

Supports custom values using bracket syntax:

```html
<div layout="aspect:[custom-value]">Custom</div>
```
