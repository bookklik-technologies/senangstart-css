# Order

Control flex/grid item order

## Syntax
```
layout="order:[value]"
```

## Values

| Value | CSS Output | Description |
|-------|------------|-------------|
| `first` | `order: -9999` | Move to first |
| `last` | `order: 9999` | Move to last |
| `none` | `order: 0` | Default order |
| `1-12` | `order: {n}` | Specific order |

## Examples

```html
<div layout="order:first">First item</div>
```

## Preview

<div space="p-x:big p-b:medium m-t:medium" visual="border-w:thin border:neutral-100 dark:border:neutral-800 rounded:medium">

### Reorder Items

<div layout="flex col" space="g:medium">
  <p space="m:none" visual="text:neutral-600 dark:text:neutral-400 text-sm"><code>layout="order:1"</code> - Change visual order of flex items</p>
<div layout="flex" space="g:small p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <span layout="order:3" space="p:small" visual="bg:neutral-300 dark:bg:neutral-700 text:neutral-800 dark:text:neutral-200 rounded:small">A (order:3)</span>
  <span layout="order:1" space="p:small" visual="bg:primary text:white rounded:small">B (order:1)</span>
  <span layout="order:2" space="p:small" visual="bg:neutral-300 dark:bg:neutral-700 text:neutral-800 dark:text:neutral-200 rounded:small">C (order:2)</span>
</div>
</div>

<details>
<summary>View Code</summary>

```html
<div layout="flex" space="g:small p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <span layout="order:3" space="p:small" visual="bg:neutral-300 dark:bg:neutral-700 text:neutral-800 dark:text:neutral-200 rounded:small">A (order:3)</span>
  <span layout="order:1" space="p:small" visual="bg:primary text:white rounded:small">B (order:1)</span>
  <span layout="order:2" space="p:small" visual="bg:neutral-300 dark:bg:neutral-700 text:neutral-800 dark:text:neutral-200 rounded:small">C (order:2)</span>
</div>
```

</details>

</div>

<div space="p-x:big p-b:medium m-t:medium" visual="border-w:thin border:neutral-100 dark:border:neutral-800 rounded:medium">

### First and Last

<div layout="flex col" space="g:medium">
  <p space="m:none" visual="text:neutral-600 dark:text:neutral-400 text-sm"><code>layout="order:first"</code> - Move items to start or end</p>
<div layout="flex" space="g:small p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <span layout="order:last" space="p:small" visual="bg:neutral-300 dark:bg:neutral-700 text:neutral-800 dark:text:neutral-200 rounded:small">First in DOM (order:last)</span>
  <span space="p:small" visual="bg:neutral-300 dark:bg:neutral-700 text:neutral-800 dark:text:neutral-200 rounded:small">Middle</span>
  <span layout="order:first" space="p:small" visual="bg:primary text:white rounded:small">Last in DOM (order:first)</span>
</div>
</div>

<details>
<summary>View Code</summary>

```html
<div layout="flex" space="g:small p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <span layout="order:last" space="p:small" visual="bg:neutral-300 dark:bg:neutral-700 text:neutral-800 dark:text:neutral-200 rounded:small">First in DOM (order:last)</span>
  <span space="p:small" visual="bg:neutral-300 dark:bg:neutral-700 text:neutral-800 dark:text:neutral-200 rounded:small">Middle</span>
  <span layout="order:first" space="p:small" visual="bg:primary text:white rounded:small">Last in DOM (order:first)</span>
</div>
```

</details>

</div>
