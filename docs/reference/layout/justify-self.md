# Justify Self

Align single grid item on inline axis

## Syntax
```
layout="justify-self:[value]"
```

## Values

| Value | CSS Output | Description |
|-------|------------|-------------|
| `auto` | `justify-self: auto` | Auto alignment |
| `start` | `justify-self: start` | Start alignment |
| `end` | `justify-self: end` | End alignment |
| `center` | `justify-self: center` | Center alignment |
| `stretch` | `justify-self: stretch` | Stretch item |

## Examples

```html
<div layout="justify-self:end">End aligned</div>
```

## Preview

<div space="p-x:big p-b:medium m-t:medium" visual="border-w:thin border:neutral-100 dark:border:neutral-800 rounded:medium">

### Justify Self

<div layout="flex col" space="g:medium">
  <p space="m:none" visual="text:neutral-600 dark:text:neutral-400 text-sm"><code>layout="justify-self:center"</code> - Override horizontal alignment for one grid item</p>
<div layout="grid grid-cols:3" space="g:small p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <span space="p:small" visual="bg:neutral-300 dark:bg:neutral-700 text:neutral-800 dark:text:neutral-200 rounded:small">Default</span>
  <span layout="justify-self:center" space="p:small" visual="bg:primary text:white rounded:small">center</span>
  <span layout="justify-self:end" space="p:small" visual="bg:primary text:white rounded:small">end</span>
</div>
</div>

<details>
<summary>View Code</summary>

```html
<div layout="grid grid-cols:3" space="g:small p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <span space="p:small" visual="bg:neutral-300 dark:bg:neutral-700 text:neutral-800 dark:text:neutral-200 rounded:small">Default</span>
  <span layout="justify-self:center" space="p:small" visual="bg:primary text:white rounded:small">center</span>
  <span layout="justify-self:end" space="p:small" visual="bg:primary text:white rounded:small">end</span>
</div>
```

</details>

</div>
