# Shorthand Alignment

Quick alignment shortcuts

## Syntax
```
layout="[alignment]"
```

## Values

| Value | CSS Output | Description |
|-------|------------|-------------|
| `center` | `justify-content: center; align-items: center` | Center both axes |
| `start` | `justify-content: flex-start; align-items: flex-start` | Align to start |
| `end` | `justify-content: flex-end; align-items: flex-end` | Align to end |
| `between` | `justify-content: space-between` | Space between |
| `around` | `justify-content: space-around` | Space around |
| `evenly` | `justify-content: space-evenly` | Even spacing |

## Examples

```html
<div layout="flex center">Centered content</div>
```

## Preview

<div space="p-x:big p-b:medium m-t:medium" visual="border-w:thin border:neutral-100 dark:border:neutral-800 rounded:medium">

### Center Shorthand

<div layout="flex col" space="g:medium">
  <p space="m:none" visual="text:neutral-600 dark:text:neutral-400 text-sm"><code>layout="center"</code> - Center items on both axes at once</p>
<div layout="flex center" space="p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium" style="height: 100px;">
  <span space="p:small" visual="bg:primary text:white rounded:small">Centered</span>
</div>
</div>

<details>
<summary>View Code</summary>

```html
<div layout="flex center" space="p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium" style="height: 100px;">
  <span space="p:small" visual="bg:primary text:white rounded:small">Centered</span>
</div>
```

</details>

</div>

<div space="p-x:big p-b:medium m-t:medium" visual="border-w:thin border:neutral-100 dark:border:neutral-800 rounded:medium">

### Between Shorthand

<div layout="flex col" space="g:medium">
  <p space="m:none" visual="text:neutral-600 dark:text:neutral-400 text-sm"><code>layout="between"</code> - Quick space-between layout</p>
<div layout="flex between" space="p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <span space="p:small" visual="bg:primary text:white rounded:small">Left</span>
  <span space="p:small" visual="bg:primary text:white rounded:small">Right</span>
</div>
</div>

<details>
<summary>View Code</summary>

```html
<div layout="flex between" space="p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <span space="p:small" visual="bg:primary text:white rounded:small">Left</span>
  <span space="p:small" visual="bg:primary text:white rounded:small">Right</span>
</div>
```

</details>

</div>
