# Grid Column Span

Span across grid columns

## Syntax
```
layout="col-span:[value]"
```

## Values

| Value | CSS Output | Description |
|-------|------------|-------------|
| `1-12` | `grid-column: span {n} / span {n}` | Span N columns |
| `full` | `grid-column: 1 / -1` | Span all columns |

## Examples

```html
<div layout="col-span:2">Spans 2 columns</div>
<div layout="col-span:full">Full width</div>
```

## Preview

<div space="p-x:big p-b:medium m-t:medium" visual="border-w:thin border:neutral-100 dark:border:neutral-800 rounded:medium">

### Column Span

<div layout="flex col" space="g:medium">
  <p space="m:none" visual="text:neutral-600 dark:text:neutral-400 text-sm"><code>layout="col-span:2"</code> - Item spanning multiple columns</p>
<div layout="grid grid-cols:3" space="g:small p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <span layout="col-span:2 text:center" space="p:small" visual="bg:primary text:white rounded:small">col-span:2</span>
  <span space="p:small" visual="bg:neutral-300 dark:bg:neutral-700 text:neutral-800 dark:text:neutral-200 rounded:small" layout="text:center">1</span>
  <span space="p:small" visual="bg:neutral-300 dark:bg:neutral-700 text:neutral-800 dark:text:neutral-200 rounded:small" layout="text:center">1</span>
  <span space="p:small" visual="bg:neutral-300 dark:bg:neutral-700 text:neutral-800 dark:text:neutral-200 rounded:small" layout="text:center">1</span>
  <span space="p:small" visual="bg:neutral-300 dark:bg:neutral-700 text:neutral-800 dark:text:neutral-200 rounded:small" layout="text:center">1</span>
</div>
</div>

<details>
<summary>View Code</summary>

```html
<div layout="grid grid-cols:3" space="g:small p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <span layout="col-span:2 text:center" space="p:small" visual="bg:primary text:white rounded:small">col-span:2</span>
  <span space="p:small" visual="bg:neutral-300 dark:bg:neutral-700 text:neutral-800 dark:text:neutral-200 rounded:small" layout="text:center">1</span>
  <span space="p:small" visual="bg:neutral-300 dark:bg:neutral-700 text:neutral-800 dark:text:neutral-200 rounded:small" layout="text:center">1</span>
  <span space="p:small" visual="bg:neutral-300 dark:bg:neutral-700 text:neutral-800 dark:text:neutral-200 rounded:small" layout="text:center">1</span>
  <span space="p:small" visual="bg:neutral-300 dark:bg:neutral-700 text:neutral-800 dark:text:neutral-200 rounded:small" layout="text:center">1</span>
</div>
```

</details>

</div>

<div space="p-x:big p-b:medium m-t:medium" visual="border-w:thin border:neutral-100 dark:border:neutral-800 rounded:medium">

### Full Width Span

<div layout="flex col" space="g:medium">
  <p space="m:none" visual="text:neutral-600 dark:text:neutral-400 text-sm"><code>layout="col-span:full"</code> - Item spanning all columns</p>
<div layout="grid grid-cols:3" space="g:small p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <span space="p:small" visual="bg:neutral-300 dark:bg:neutral-700 text:neutral-800 dark:text:neutral-200 rounded:small" layout="text:center">1</span>
  <span space="p:small" visual="bg:neutral-300 dark:bg:neutral-700 text:neutral-800 dark:text:neutral-200 rounded:small" layout="text:center">2</span>
  <span space="p:small" visual="bg:neutral-300 dark:bg:neutral-700 text:neutral-800 dark:text:neutral-200 rounded:small" layout="text:center">3</span>
  <span layout="col-span:full text:center" space="p:small" visual="bg:primary text:white rounded:small">col-span:full</span>
</div>
</div>

<details>
<summary>View Code</summary>

```html
<div layout="grid grid-cols:3" space="g:small p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <span space="p:small" visual="bg:neutral-300 dark:bg:neutral-700 text:neutral-800 dark:text:neutral-200 rounded:small" layout="text:center">1</span>
  <span space="p:small" visual="bg:neutral-300 dark:bg:neutral-700 text:neutral-800 dark:text:neutral-200 rounded:small" layout="text:center">2</span>
  <span space="p:small" visual="bg:neutral-300 dark:bg:neutral-700 text:neutral-800 dark:text:neutral-200 rounded:small" layout="text:center">3</span>
  <span layout="col-span:full text:center" space="p:small" visual="bg:primary text:white rounded:small">col-span:full</span>
</div>
```

</details>

</div>
