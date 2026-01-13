# Background Color

Set background color

## Syntax
```
visual="bg:[color]"
```

## Examples

```html
<div visual="bg:primary">Primary background</div>
<div visual="bg:blue-500">Blue background</div>
<div visual="bg:[#FF5733]">Custom color</div>
```

## Preview

<div space="p-x:big p-b:medium m-t:medium" visual="border-w:thin border:neutral-100 dark:border:neutral-800 rounded:medium">

### Background Color

<div layout="flex col" space="g:medium">
  <p space="m:none" visual="text:neutral-600 dark:text:neutral-400 text-sm"><code>visual="bg:primary"</code> - Apply solid background colors from theme or palette</p>
<div layout="flex" space="g:small p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div space="p:small" visual="bg:primary text:white rounded:small">primary</div>
  <div space="p:small" visual="bg:secondary text:white rounded:small">secondary</div>
  <div space="p:small" visual="bg:success text:white rounded:small">success</div>
  <div space="p:small" visual="bg:warning text:black rounded:small">warning</div>
  <div space="p:small" visual="bg:danger text:white rounded:small">danger</div>
</div>
</div>

<details>
<summary>View Code</summary>

```html
<div layout="flex" space="g:small p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div space="p:small" visual="bg:primary text:white rounded:small">primary</div>
  <div space="p:small" visual="bg:secondary text:white rounded:small">secondary</div>
  <div space="p:small" visual="bg:success text:white rounded:small">success</div>
  <div space="p:small" visual="bg:warning text:black rounded:small">warning</div>
  <div space="p:small" visual="bg:danger text:white rounded:small">danger</div>
</div>
```

</details>

</div>

## Arbitrary Values

Supports custom values using bracket syntax:

```html
<div visual="background:[custom-value]">Custom</div>
```
