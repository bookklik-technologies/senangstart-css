# Flex Direction

Set the direction of flex items

## Syntax
```
layout="[direction]"
```

## Values

| Value | CSS Output | Description |
|-------|------------|-------------|
| `row` | `flex-direction: row` | Horizontal (default) |
| `col` | `flex-direction: column` | Vertical |
| `row-reverse` | `flex-direction: row-reverse` | Horizontal reversed |
| `col-reverse` | `flex-direction: column-reverse` | Vertical reversed |

## Examples

```html
<div layout="flex row">Row direction</div>
<div layout="flex col">Column direction</div>
```

## Preview

<div space="p-x:big p-b:medium m-t:medium" visual="border-w:thin border:neutral-100 dark:border:neutral-800 rounded:medium">

### Row Direction

<div layout="flex col" space="g:medium">
  <p space="m:none" visual="text:neutral-600 dark:text:neutral-400 text-sm"><code>layout="row"</code> - Items arranged horizontally from left to right</p>
<div layout="flex row" space="g:small p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <span space="p:small" visual="bg:primary text:white rounded:small">1</span>
  <span space="p:small" visual="bg:primary text:white rounded:small">2</span>
  <span space="p:small" visual="bg:primary text:white rounded:small">3</span>
</div>
</div>

<details>
<summary>View Code</summary>

```html
<div layout="flex row" space="g:small p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <span space="p:small" visual="bg:primary text:white rounded:small">1</span>
  <span space="p:small" visual="bg:primary text:white rounded:small">2</span>
  <span space="p:small" visual="bg:primary text:white rounded:small">3</span>
</div>
```

</details>

</div>

<div space="p-x:big p-b:medium m-t:medium" visual="border-w:thin border:neutral-100 dark:border:neutral-800 rounded:medium">

### Column Direction

<div layout="flex col" space="g:medium">
  <p space="m:none" visual="text:neutral-600 dark:text:neutral-400 text-sm"><code>layout="col"</code> - Items stacked vertically from top to bottom</p>
<div layout="flex col" space="g:small p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <span space="p:small" visual="bg:primary text:white rounded:small">1</span>
  <span space="p:small" visual="bg:primary text:white rounded:small">2</span>
  <span space="p:small" visual="bg:primary text:white rounded:small">3</span>
</div>
</div>

<details>
<summary>View Code</summary>

```html
<div layout="flex col" space="g:small p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <span space="p:small" visual="bg:primary text:white rounded:small">1</span>
  <span space="p:small" visual="bg:primary text:white rounded:small">2</span>
  <span space="p:small" visual="bg:primary text:white rounded:small">3</span>
</div>
```

</details>

</div>

<div space="p-x:big p-b:medium m-t:medium" visual="border-w:thin border:neutral-100 dark:border:neutral-800 rounded:medium">

### Row Reverse

<div layout="flex col" space="g:medium">
  <p space="m:none" visual="text:neutral-600 dark:text:neutral-400 text-sm"><code>layout="row-reverse"</code> - Items arranged horizontally from right to left</p>
<div layout="flex row-reverse" space="g:small p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <span space="p:small" visual="bg:primary text:white rounded:small">1</span>
  <span space="p:small" visual="bg:primary text:white rounded:small">2</span>
  <span space="p:small" visual="bg:primary text:white rounded:small">3</span>
</div>
</div>

<details>
<summary>View Code</summary>

```html
<div layout="flex row-reverse" space="g:small p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <span space="p:small" visual="bg:primary text:white rounded:small">1</span>
  <span space="p:small" visual="bg:primary text:white rounded:small">2</span>
  <span space="p:small" visual="bg:primary text:white rounded:small">3</span>
</div>
```

</details>

</div>
