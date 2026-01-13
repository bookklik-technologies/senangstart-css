# Place Items

Shorthand for align-items and justify-items

## Syntax
```
layout="place-items:[value]"
```

## Values

| Value | CSS Output | Description |
|-------|------------|-------------|
| `start` | `place-items: start` | Start alignment |
| `end` | `place-items: end` | End alignment |
| `center` | `place-items: center` | Center alignment |
| `stretch` | `place-items: stretch` | Stretch items |

## Examples

```html
<div layout="grid place-items:center">Centered items</div>
```

## Preview

<div space="p-x:big p-b:medium m-t:medium" visual="border-w:thin border:neutral-100 dark:border:neutral-800 rounded:medium">

### Place Items Center

<div layout="flex col" space="g:medium">
  <p space="m:none" visual="text:neutral-600 dark:text:neutral-400 text-sm"><code>layout="place-items:center"</code> - Center all items within their grid cells</p>
<div layout="grid grid-cols:3 place-items:center" space="g:small p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium" style="height: 100px;">
  <span space="p:small" visual="bg:primary text:white rounded:small">1</span>
  <span space="p:small" visual="bg:primary text:white rounded:small">2</span>
  <span space="p:small" visual="bg:primary text:white rounded:small">3</span>
</div>
</div>

<details>
<summary>View Code</summary>

```html
<div layout="grid grid-cols:3 place-items:center" space="g:small p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium" style="height: 100px;">
  <span space="p:small" visual="bg:primary text:white rounded:small">1</span>
  <span space="p:small" visual="bg:primary text:white rounded:small">2</span>
  <span space="p:small" visual="bg:primary text:white rounded:small">3</span>
</div>
```

</details>

</div>
