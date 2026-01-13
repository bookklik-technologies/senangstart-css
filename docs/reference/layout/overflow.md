# Overflow

Control content overflow behavior

## Syntax
```
layout="overflow:[value]"
```

## Values

| Value | CSS Output | Description |
|-------|------------|-------------|
| `auto` | `overflow: auto` | Scrollbar when needed |
| `hidden` | `overflow: hidden` | Hide overflow |
| `visible` | `overflow: visible` | Show overflow |
| `scroll` | `overflow: scroll` | Always show scrollbar |
| `clip` | `overflow: clip` | Clip overflow |

## Examples

```html
<div layout="overflow:hidden">Clipped content</div>
<div layout="overflow:auto">Scrollable</div>
```

## Preview

<div space="p-x:big p-b:medium m-t:medium" visual="border-w:thin border:neutral-100 dark:border:neutral-800 rounded:medium">

### Overflow Hidden

<div layout="flex col" space="g:medium">
  <p space="m:none" visual="text:neutral-600 dark:text:neutral-400 text-sm"><code>layout="overflow:hidden"</code> - Content clipped at container edge</p>
<div layout="overflow:hidden" space="p:small" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium" style="height: 60px; width: 150px;">
  <p visual="text:neutral-800 dark:text:neutral-200">This is a long text that will be clipped because overflow is hidden.</p>
</div>
</div>

<details>
<summary>View Code</summary>

```html
<div layout="overflow:hidden" space="p:small" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium" style="height: 60px; width: 150px;">
  <p visual="text:neutral-800 dark:text:neutral-200">This is a long text that will be clipped because overflow is hidden.</p>
</div>
```

</details>

</div>

<div space="p-x:big p-b:medium m-t:medium" visual="border-w:thin border:neutral-100 dark:border:neutral-800 rounded:medium">

### Overflow Auto

<div layout="flex col" space="g:medium">
  <p space="m:none" visual="text:neutral-600 dark:text:neutral-400 text-sm"><code>layout="overflow:auto"</code> - Scrollbar appears when content overflows</p>
<div layout="overflow:auto" space="p:small" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium" style="height: 60px; width: 150px;">
  <p visual="text:neutral-800 dark:text:neutral-200">This is a long text that will show a scrollbar because overflow is auto.</p>
</div>
</div>

<details>
<summary>View Code</summary>

```html
<div layout="overflow:auto" space="p:small" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium" style="height: 60px; width: 150px;">
  <p visual="text:neutral-800 dark:text:neutral-200">This is a long text that will show a scrollbar because overflow is auto.</p>
</div>
```

</details>

</div>
