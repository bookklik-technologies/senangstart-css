# Accent Color

Set accent color for form controls

## Syntax
```
visual="accent:[color]"
```

## Examples

```html
<input type="checkbox" visual="accent:primary">
```

## Preview

<div space="p-x:big p-b:medium m-t:medium" visual="border-w:thin border:neutral-100 dark:border:neutral-800 rounded:medium">

### Accent Color

<div layout="flex col" space="g:medium">
  <p space="m:none" visual="text:neutral-600 dark:text:neutral-400 text-sm"><code>visual="accent:primary"</code> - Style native form controls (checkboxes, radios, range)</p>
<div layout="flex" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <input type="checkbox" checked visual="accent:primary w:[20px] h:[20px]">
  <input type="radio" checked visual="accent:success w:[20px] h:[20px]">
  <input type="range" visual="accent:secondary w:[100px]">
</div>
</div>

<details>
<summary>View Code</summary>

```html
<div layout="flex" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <input type="checkbox" checked visual="accent:primary w:[20px] h:[20px]">
  <input type="radio" checked visual="accent:success w:[20px] h:[20px]">
  <input type="range" visual="accent:secondary w:[100px]">
</div>
```

</details>

</div>

## Arbitrary Values

Supports custom values using bracket syntax:

```html
<div visual="accent:[custom-value]">Custom</div>
```
