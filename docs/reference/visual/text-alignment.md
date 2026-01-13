# Text Alignment

Set text alignment

## Syntax
```
visual="text:[alignment]"
```

## Values

| Value | CSS Output | Description |
|-------|------------|-------------|
| `left` | `text-align: left` | Left align |
| `center` | `text-align: center` | Center align |
| `right` | `text-align: right` | Right align |
| `justify` | `text-align: justify` | Justify |

## Examples

```html
<p visual="text:center">Centered text</p>
```

## Preview

<div space="p-x:big p-b:medium m-t:medium" visual="border-w:thin border:neutral-100 dark:border:neutral-800 rounded:medium">

### Text Alignment

<div layout="flex col" space="g:medium">
  <p space="m:none" visual="text:neutral-600 dark:text:neutral-400 text-sm"><code>visual="text:center"</code> - Align text within container</p>
<div layout="flex col" space="g:small p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div visual="text:left bg:primary text:white rounded:small" space="p:small">left</div>
  <div visual="text:center bg:primary text:white rounded:small" space="p:small">center</div>
  <div visual="text:right bg:primary text:white rounded:small" space="p:small">right</div>
</div>
</div>

<details>
<summary>View Code</summary>

```html
<div layout="flex col" space="g:small p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div visual="text:left bg:primary text:white rounded:small" space="p:small">left</div>
  <div visual="text:center bg:primary text:white rounded:small" space="p:small">center</div>
  <div visual="text:right bg:primary text:white rounded:small" space="p:small">right</div>
</div>
```

</details>

</div>
