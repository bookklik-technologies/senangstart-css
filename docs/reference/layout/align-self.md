# Align Self

Override alignment for a single item

## Syntax
```
layout="self:[value]"
```

## Values

| Value | CSS Output | Description |
|-------|------------|-------------|
| `auto` | `align-self: auto` | Use parent alignment |
| `start` | `align-self: flex-start` | Align to start |
| `end` | `align-self: flex-end` | Align to end |
| `center` | `align-self: center` | Center item |
| `baseline` | `align-self: baseline` | Align to baseline |
| `stretch` | `align-self: stretch` | Stretch item |

## Examples

```html
<div layout="self:center">Centered item</div>
```

## Preview

<div space="p-x:big p-b:medium m-t:medium" visual="border-w:thin border:neutral-100 dark:border:neutral-800 rounded:medium">

### Align Self

<div layout="flex col" space="g:medium">
  <p space="m:none" visual="text:neutral-600 dark:text:neutral-400 text-sm"><code>layout="self:center"</code> - Override parent alignment for one item</p>
<div layout="flex items:start" space="g:small p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium" style="height: 100px;">
  <span space="p:small" visual="bg:neutral-300 dark:bg:neutral-700 text:neutral-800 dark:text:neutral-200 rounded:small">Start</span>
  <span layout="self:center" space="p:small" visual="bg:primary text:white rounded:small">self:center</span>
  <span space="p:small" visual="bg:neutral-300 dark:bg:neutral-700 text:neutral-800 dark:text:neutral-200 rounded:small">Start</span>
</div>
</div>

<details>
<summary>View Code</summary>

```html
<div layout="flex items:start" space="g:small p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium" style="height: 100px;">
  <span space="p:small" visual="bg:neutral-300 dark:bg:neutral-700 text:neutral-800 dark:text:neutral-200 rounded:small">Start</span>
  <span layout="self:center" space="p:small" visual="bg:primary text:white rounded:small">self:center</span>
  <span space="p:small" visual="bg:neutral-300 dark:bg:neutral-700 text:neutral-800 dark:text:neutral-200 rounded:small">Start</span>
</div>
```

</details>

</div>
