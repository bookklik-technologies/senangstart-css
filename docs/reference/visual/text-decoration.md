# Text Decoration

Set text decoration

## Syntax
```
visual="[decoration-value]"
```

## Values

| Value | CSS Output | Description |
|-------|------------|-------------|
| `underline` | `text-decoration-line: underline` | Underline |
| `overline` | `text-decoration-line: overline` | Overline |
| `line-through` | `text-decoration-line: line-through` | Strikethrough |
| `no-underline` | `text-decoration-line: none` | No decoration |

## Examples

```html
<a visual="no-underline">No underline link</a>
```

## Preview

<div space="p-x:big p-b:medium m-t:medium" visual="border-w:thin border:neutral-100 dark:border:neutral-800 rounded:medium">

### Text Decoration

<div layout="flex col" space="g:medium">
  <p space="m:none" visual="text:neutral-600 dark:text:neutral-400 text-sm"><code>visual="underline"</code> - Add lines to text</p>
<div layout="flex" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <span space="p:small" visual="bg:primary text:white rounded:small underline">underline</span>
  <span space="p:small" visual="bg:primary text:white rounded:small line-through">line-through</span>
  <span space="p:small" visual="bg:primary text:white rounded:small overline">overline</span>
</div>
</div>

<details>
<summary>View Code</summary>

```html
<div layout="flex" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <span space="p:small" visual="bg:primary text:white rounded:small underline">underline</span>
  <span space="p:small" visual="bg:primary text:white rounded:small line-through">line-through</span>
  <span space="p:small" visual="bg:primary text:white rounded:small overline">overline</span>
</div>
```

</details>

</div>
