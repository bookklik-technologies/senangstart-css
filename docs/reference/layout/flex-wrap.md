# Flex Wrap

Control how flex items wrap

## Syntax
```
layout="[wrap-value]"
```

## Values

| Value | CSS Output | Description |
|-------|------------|-------------|
| `wrap` | `flex-wrap: wrap` | Allow wrapping |
| `nowrap` | `flex-wrap: nowrap` | Prevent wrapping |
| `wrap-reverse` | `flex-wrap: wrap-reverse` | Wrap in reverse |

## Examples

```html
<div layout="flex wrap">Wrapping flex</div>
```

## Preview

<div space="p-x:big p-b:medium m-t:medium" visual="border-w:thin border:neutral-100 dark:border:neutral-800 rounded:medium">

### Wrap Enabled

<div layout="flex col" space="g:medium">
  <p space="m:none" visual="text:neutral-600 dark:text:neutral-400 text-sm"><code>layout="wrap"</code> - Items wrap to next line when container is full</p>
<div layout="flex wrap" space="g:small p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium" style="max-width: 200px;">
  <span space="p:small" visual="bg:primary text:white rounded:small">Item 1</span>
  <span space="p:small" visual="bg:primary text:white rounded:small">Item 2</span>
  <span space="p:small" visual="bg:primary text:white rounded:small">Item 3</span>
  <span space="p:small" visual="bg:primary text:white rounded:small">Item 4</span>
</div>
</div>

<details>
<summary>View Code</summary>

```html
<div layout="flex wrap" space="g:small p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium" style="max-width: 200px;">
  <span space="p:small" visual="bg:primary text:white rounded:small">Item 1</span>
  <span space="p:small" visual="bg:primary text:white rounded:small">Item 2</span>
  <span space="p:small" visual="bg:primary text:white rounded:small">Item 3</span>
  <span space="p:small" visual="bg:primary text:white rounded:small">Item 4</span>
</div>
```

</details>

</div>

<div space="p-x:big p-b:medium m-t:medium" visual="border-w:thin border:neutral-100 dark:border:neutral-800 rounded:medium">

### No Wrap

<div layout="flex col" space="g:medium">
  <p space="m:none" visual="text:neutral-600 dark:text:neutral-400 text-sm"><code>layout="nowrap"</code> - Items stay on single line (may overflow)</p>
<div layout="flex nowrap" space="g:small p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium" style="max-width: 200px; overflow: hidden;">
  <span space="p:small" visual="bg:primary text:white rounded:small">Item 1</span>
  <span space="p:small" visual="bg:primary text:white rounded:small">Item 2</span>
  <span space="p:small" visual="bg:primary text:white rounded:small">Item 3</span>
</div>
</div>

<details>
<summary>View Code</summary>

```html
<div layout="flex nowrap" space="g:small p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium" style="max-width: 200px; overflow: hidden;">
  <span space="p:small" visual="bg:primary text:white rounded:small">Item 1</span>
  <span space="p:small" visual="bg:primary text:white rounded:small">Item 2</span>
  <span space="p:small" visual="bg:primary text:white rounded:small">Item 3</span>
</div>
```

</details>

</div>
