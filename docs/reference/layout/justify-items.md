# Justify Items

Align grid items on inline axis

## Syntax
```
layout="justify-items:[value]"
```

## Values

| Value | CSS Output | Description |
|-------|------------|-------------|
| `start` | `justify-items: start` | Start alignment |
| `end` | `justify-items: end` | End alignment |
| `center` | `justify-items: center` | Center alignment |
| `stretch` | `justify-items: stretch` | Stretch items |

## Examples

```html
<div layout="grid justify-items:center">Centered items</div>
```

## Preview

<div space="p-x:big p-b:medium m-t:medium" visual="border-w:thin border:neutral-100 dark:border:neutral-800 rounded:medium">

### Justify Items Center

<div layout="flex col" space="g:medium">
  <p space="m:none" visual="text:neutral-600 dark:text:neutral-400 text-sm"><code>layout="justify-items:center"</code> - Center all grid items horizontally within their cells</p>
<div layout="grid grid-cols:3 justify-items:center" space="g:small p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <span space="p:small" visual="bg:primary text:white rounded:small">1</span>
  <span space="p:small" visual="bg:primary text:white rounded:small">2</span>
  <span space="p:small" visual="bg:primary text:white rounded:small">3</span>
</div>
</div>

<details>
<summary>View Code</summary>

```html
<div layout="grid grid-cols:3 justify-items:center" space="g:small p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <span space="p:small" visual="bg:primary text:white rounded:small">1</span>
  <span space="p:small" visual="bg:primary text:white rounded:small">2</span>
  <span space="p:small" visual="bg:primary text:white rounded:small">3</span>
</div>
```

</details>

</div>
