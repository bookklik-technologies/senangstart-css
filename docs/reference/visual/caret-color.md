# Caret Color

Set text input caret color

## Syntax
```
visual="caret:[color]"
```

## Examples

```html
<input visual="caret:primary">
```

## Preview

<div space="p-x:big p-b:medium m-t:medium" visual="border-w:thin border:neutral-100 dark:border:neutral-800 rounded:medium">

### Caret Color

<div layout="flex col" space="g:medium">
  <p space="m:none" visual="text:neutral-600 dark:text:neutral-400 text-sm"><code>visual="caret:primary"</code> - Style the text cursor in input fields</p>
<div space="p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <input type="text" placeholder="Type here..." space="p:small" visual="caret:primary border:neutral-300 rounded:small">
</div>
</div>

<details>
<summary>View Code</summary>

```html
<div space="p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <input type="text" placeholder="Type here..." space="p:small" visual="caret:primary border:neutral-300 rounded:small">
</div>
```

</details>

</div>

## Arbitrary Values

Supports custom values using bracket syntax:

```html
<div visual="caret:[custom-value]">Custom</div>
```
