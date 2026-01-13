# Place Self

Shorthand for align-self and justify-self

## Syntax
```
layout="place-self:[value]"
```

## Values

| Value | CSS Output | Description |
|-------|------------|-------------|
| `auto` | `place-self: auto` | Auto alignment |
| `start` | `place-self: start` | Start alignment |
| `end` | `place-self: end` | End alignment |
| `center` | `place-self: center` | Center alignment |
| `stretch` | `place-self: stretch` | Stretch item |

## Examples

```html
<div layout="place-self:center">Centered item</div>
```

## Preview

<div space="p-x:big p-b:medium m-t:medium" visual="border-w:thin border:neutral-100 dark:border:neutral-800 rounded:medium">

### Place Self Center

<div layout="flex col" space="g:medium">
  <p space="m:none" visual="text:neutral-600 dark:text:neutral-400 text-sm"><code>layout="place-self:center"</code> - Center one item in both directions within its cell</p>
<div layout="grid grid-cols:3" space="g:small p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium" style="height: 100px;">
  <span space="p:small" visual="bg:neutral-300 dark:bg:neutral-700 text:neutral-800 dark:text:neutral-200 rounded:small">Default</span>
  <span layout="place-self:center" space="p:small" visual="bg:primary text:white rounded:small">center</span>
  <span space="p:small" visual="bg:neutral-300 dark:bg:neutral-700 text:neutral-800 dark:text:neutral-200 rounded:small">Default</span>
</div>
</div>

<details>
<summary>View Code</summary>

```html
<div layout="grid grid-cols:3" space="g:small p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium" style="height: 100px;">
  <span space="p:small" visual="bg:neutral-300 dark:bg:neutral-700 text:neutral-800 dark:text:neutral-200 rounded:small">Default</span>
  <span layout="place-self:center" space="p:small" visual="bg:primary text:white rounded:small">center</span>
  <span space="p:small" visual="bg:neutral-300 dark:bg:neutral-700 text:neutral-800 dark:text:neutral-200 rounded:small">Default</span>
</div>
```

</details>

</div>
