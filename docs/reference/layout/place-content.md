# Place Content

Shorthand for align-content and justify-content

## Syntax
```
layout="place-content:[value]"
```

## Values

| Value | CSS Output | Description |
|-------|------------|-------------|
| `start` | `place-content: start` | Start alignment |
| `end` | `place-content: end` | End alignment |
| `center` | `place-content: center` | Center alignment |
| `between` | `place-content: space-between` | Space between |
| `around` | `place-content: space-around` | Space around |
| `evenly` | `place-content: space-evenly` | Even spacing |
| `stretch` | `place-content: stretch` | Stretch content |

## Examples

```html
<div layout="grid place-content:center">Centered content</div>
```

## Preview

<div space="p-x:big p-b:medium m-t:medium" visual="border-w:thin border:neutral-100 dark:border:neutral-800 rounded:medium">

### Place Content Center

<div layout="flex col" space="g:medium">
  <p space="m:none" visual="text:neutral-600 dark:text:neutral-400 text-sm"><code>layout="place-content:center"</code> - Center entire grid content in both directions</p>
<div layout="grid grid-cols:2 place-content:center" space="g:small p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium" style="height: 120px;">
  <span space="p:small" visual="bg:primary text:white rounded:small">1</span>
  <span space="p:small" visual="bg:primary text:white rounded:small">2</span>
</div>
</div>

<details>
<summary>View Code</summary>

```html
<div layout="grid grid-cols:2 place-content:center" space="g:small p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium" style="height: 120px;">
  <span space="p:small" visual="bg:primary text:white rounded:small">1</span>
  <span space="p:small" visual="bg:primary text:white rounded:small">2</span>
</div>
```

</details>

</div>
