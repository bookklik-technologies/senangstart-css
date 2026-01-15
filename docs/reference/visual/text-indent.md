# Text Indent

Set text indentation

## Syntax
```
visual="indent:[value]"
```

## Values

| Value | CSS Output | Description |
|-------|------------|-------------|
| `0` | `text-indent: 0` | No indent |

## Examples

```html
<p visual="indent:medium">Indented paragraph</p>
```

## Preview

<div space="p-x:big p-b:medium m-t:medium" visual="border-w:thin border:neutral-100 dark:border:neutral-800 rounded:medium">

### Text Indent

<div layout="flex col" space="g:medium">
  <p space="m:none" visual="text:neutral-600 dark:text:neutral-400 text-sm"><code>visual="indent:medium"</code> - Indent first line of text</p>
<div layout="flex:col" space="g:small p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <p space="p:small" visual="bg:primary text:white rounded:small indent:0">No indent on this text paragraph.</p>
  <p space="p:small" visual="bg:success text:white rounded:small indent:medium">Medium indent on this first line of the paragraph.</p>
  <p space="p:small" visual="bg:warning text:black rounded:small indent:big">Bigger indent on this first line of the paragraph.</p>
</div>
</div>

<details>
<summary>View Code</summary>

```html
<div layout="flex:col" space="g:small p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <p space="p:small" visual="bg:primary text:white rounded:small indent:0">No indent on this text paragraph.</p>
  <p space="p:small" visual="bg:success text:white rounded:small indent:medium">Medium indent on this first line of the paragraph.</p>
  <p space="p:small" visual="bg:warning text:black rounded:small indent:big">Bigger indent on this first line of the paragraph.</p>
</div>
```

</details>

</div>

## Arbitrary Values

Supports custom values using bracket syntax:

```html
<div visual="text:[custom-value]">Custom</div>
```
