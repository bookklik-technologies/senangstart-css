# Grid Auto Sizing

Control size of auto-generated grid tracks

## Syntax
```
layout="auto-cols:[value]" or layout="auto-rows:[value]"
```

## Values

| Value | CSS Output | Description |
|-------|------------|-------------|
| `auto` | `auto` | Auto size |
| `min` | `min-content` | Minimum content |
| `max` | `max-content` | Maximum content |
| `fr` | `minmax(0, 1fr)` | Fractional unit |

## Examples

```html
<div layout="grid auto-cols:min">Auto min columns</div>
```

## Preview

<div space="p-x:big p-b:medium m-t:medium" visual="border-w:thin border:neutral-100 dark:border:neutral-800 rounded:medium">

### Auto Columns

<div layout="flex col" space="g:medium">
  <p space="m:none" visual="text:neutral-600 dark:text:neutral-400 text-sm"><code>layout="auto-cols:fr"</code> - Automatically sized column tracks</p>
<div layout="grid grid-flow:col auto-cols:fr" space="g:small p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <span space="p:small" visual="bg:primary text:white rounded:small" layout="text:center">Auto 1</span>
  <span space="p:small" visual="bg:primary text:white rounded:small" layout="text:center">Auto 2</span>
  <span space="p:small" visual="bg:primary text:white rounded:small" layout="text:center">Auto 3</span>
</div>
</div>

<details>
<summary>View Code</summary>

```html
<div layout="grid grid-flow:col auto-cols:fr" space="g:small p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <span space="p:small" visual="bg:primary text:white rounded:small" layout="text:center">Auto 1</span>
  <span space="p:small" visual="bg:primary text:white rounded:small" layout="text:center">Auto 2</span>
  <span space="p:small" visual="bg:primary text:white rounded:small" layout="text:center">Auto 3</span>
</div>
```

</details>

</div>
