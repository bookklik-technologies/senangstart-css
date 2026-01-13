# Align Content

Align content rows in multi-line flex container

## Syntax
```
layout="content:[value]"
```

## Values

| Value | CSS Output | Description |
|-------|------------|-------------|
| `start` | `align-content: flex-start` | Align to start |
| `end` | `align-content: flex-end` | Align to end |
| `center` | `align-content: center` | Center content |
| `between` | `align-content: space-between` | Space between rows |
| `around` | `align-content: space-around` | Space around rows |
| `evenly` | `align-content: space-evenly` | Even spacing |
| `stretch` | `align-content: stretch` | Stretch rows |

## Examples

```html
<div layout="flex wrap content:center">Centered rows</div>
```

## Preview

<div space="p-x:big p-b:medium m-t:medium" visual="border-w:thin border:neutral-100 dark:border:neutral-800 rounded:medium">

### Content Center

<div layout="flex col" space="g:medium">
  <p space="m:none" visual="text:neutral-600 dark:text:neutral-400 text-sm"><code>layout="content:center"</code> - Center wrapped rows in multi-line container</p>
<div layout="flex wrap content:center" space="g:small p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium" style="height: 150px; max-width: 200px;">
  <span space="p:small" visual="bg:primary text:white rounded:small">1</span>
  <span space="p:small" visual="bg:primary text:white rounded:small">2</span>
  <span space="p:small" visual="bg:primary text:white rounded:small">3</span>
  <span space="p:small" visual="bg:primary text:white rounded:small">4</span>
</div>
</div>

<details>
<summary>View Code</summary>

```html
<div layout="flex wrap content:center" space="g:small p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium" style="height: 150px; max-width: 200px;">
  <span space="p:small" visual="bg:primary text:white rounded:small">1</span>
  <span space="p:small" visual="bg:primary text:white rounded:small">2</span>
  <span space="p:small" visual="bg:primary text:white rounded:small">3</span>
  <span space="p:small" visual="bg:primary text:white rounded:small">4</span>
</div>
```

</details>

</div>

<div space="p-x:big p-b:medium m-t:medium" visual="border-w:thin border:neutral-100 dark:border:neutral-800 rounded:medium">

### Content Between

<div layout="flex col" space="g:medium">
  <p space="m:none" visual="text:neutral-600 dark:text:neutral-400 text-sm"><code>layout="content:between"</code> - Space between wrapped rows</p>
<div layout="flex wrap content:between" space="g:small p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium" style="height: 150px; max-width: 200px;">
  <span space="p:small" visual="bg:primary text:white rounded:small">1</span>
  <span space="p:small" visual="bg:primary text:white rounded:small">2</span>
  <span space="p:small" visual="bg:primary text:white rounded:small">3</span>
  <span space="p:small" visual="bg:primary text:white rounded:small">4</span>
</div>
</div>

<details>
<summary>View Code</summary>

```html
<div layout="flex wrap content:between" space="g:small p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium" style="height: 150px; max-width: 200px;">
  <span space="p:small" visual="bg:primary text:white rounded:small">1</span>
  <span space="p:small" visual="bg:primary text:white rounded:small">2</span>
  <span space="p:small" visual="bg:primary text:white rounded:small">3</span>
  <span space="p:small" visual="bg:primary text:white rounded:small">4</span>
</div>
```

</details>

</div>
