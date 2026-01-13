# Align Items

Align items along the cross axis

## Syntax
```
layout="items:[value]"
```

## Values

| Value | CSS Output | Description |
|-------|------------|-------------|
| `start` | `align-items: flex-start` | Align to start |
| `end` | `align-items: flex-end` | Align to end |
| `center` | `align-items: center` | Center items |
| `baseline` | `align-items: baseline` | Align to baseline |
| `stretch` | `align-items: stretch` | Stretch items |

## Examples

```html
<div layout="flex items:center">Centered</div>
```

## Preview

<div space="p-x:big p-b:medium m-t:medium" visual="border-w:thin border:neutral-100 dark:border:neutral-800 rounded:medium">

### Items Center

<div layout="flex col" space="g:medium">
  <p space="m:none" visual="text:neutral-600 dark:text:neutral-400 text-sm"><code>layout="items:center"</code> - Items centered along cross axis</p>
<div layout="flex items:center" space="g:small p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium" style="height: 100px;">
  <span space="p:small" visual="bg:primary text:white rounded:small">Short</span>
  <span space="p:large" visual="bg:primary text:white rounded:small">Tall</span>
  <span space="p:small" visual="bg:primary text:white rounded:small">Short</span>
</div>
</div>

<details>
<summary>View Code</summary>

```html
<div layout="flex items:center" space="g:small p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium" style="height: 100px;">
  <span space="p:small" visual="bg:primary text:white rounded:small">Short</span>
  <span space="p:large" visual="bg:primary text:white rounded:small">Tall</span>
  <span space="p:small" visual="bg:primary text:white rounded:small">Short</span>
</div>
```

</details>

</div>

<div space="p-x:big p-b:medium m-t:medium" visual="border-w:thin border:neutral-100 dark:border:neutral-800 rounded:medium">

### Items Start

<div layout="flex col" space="g:medium">
  <p space="m:none" visual="text:neutral-600 dark:text:neutral-400 text-sm"><code>layout="items:start"</code> - Items aligned to the start of cross axis</p>
<div layout="flex items:start" space="g:small p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium" style="height: 100px;">
  <span space="p:small" visual="bg:primary text:white rounded:small">Short</span>
  <span space="p:large" visual="bg:primary text:white rounded:small">Tall</span>
  <span space="p:small" visual="bg:primary text:white rounded:small">Short</span>
</div>
</div>

<details>
<summary>View Code</summary>

```html
<div layout="flex items:start" space="g:small p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium" style="height: 100px;">
  <span space="p:small" visual="bg:primary text:white rounded:small">Short</span>
  <span space="p:large" visual="bg:primary text:white rounded:small">Tall</span>
  <span space="p:small" visual="bg:primary text:white rounded:small">Short</span>
</div>
```

</details>

</div>

<div space="p-x:big p-b:medium m-t:medium" visual="border-w:thin border:neutral-100 dark:border:neutral-800 rounded:medium">

### Items Stretch

<div layout="flex col" space="g:medium">
  <p space="m:none" visual="text:neutral-600 dark:text:neutral-400 text-sm"><code>layout="items:stretch"</code> - Items stretched to fill container height</p>
<div layout="flex items:stretch" space="g:small p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium" style="height: 100px;">
  <span layout="flex center" space="p:small" visual="bg:primary text:white rounded:small">1</span>
  <span layout="flex center" space="p:small" visual="bg:primary text:white rounded:small">2</span>
  <span layout="flex center" space="p:small" visual="bg:primary text:white rounded:small">3</span>
</div>
</div>

<details>
<summary>View Code</summary>

```html
<div layout="flex items:stretch" space="g:small p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium" style="height: 100px;">
  <span layout="flex center" space="p:small" visual="bg:primary text:white rounded:small">1</span>
  <span layout="flex center" space="p:small" visual="bg:primary text:white rounded:small">2</span>
  <span layout="flex center" space="p:small" visual="bg:primary text:white rounded:small">3</span>
</div>
```

</details>

</div>
