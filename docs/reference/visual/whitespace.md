# Whitespace

Control whitespace handling

## Syntax
```
visual="whitespace:[value]"
```

## Values

| Value | CSS Output | Description |
|-------|------------|-------------|
| `normal` | `white-space: normal` | Normal whitespace |
| `nowrap` | `white-space: nowrap` | No wrap |
| `pre` | `white-space: pre` | Preserve whitespace |
| `pre-line` | `white-space: pre-line` | Pre-line |
| `pre-wrap` | `white-space: pre-wrap` | Pre-wrap |
| `break-spaces` | `white-space: break-spaces` | Break spaces |

## Examples

```html
<pre visual="whitespace:pre">Preserved whitespace</pre>
```

## Preview

<div space="p-x:big p-b:medium m-t:medium" visual="border-w:thin border:neutral-100 dark:border:neutral-800 rounded:medium">

### Whitespace

<div layout="flex col" space="g:medium">
  <p space="m:none" visual="text:neutral-600 dark:text:neutral-400 text-sm"><code>visual="whitespace:pre"</code> - Control whitespace handling</p>
<div layout="flex col" space="g:small p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div space="p:small" visual="bg:primary text:white rounded:small whitespace:normal">Normal   spaces   collapse</div>
  <div space="p:small" visual="bg:success text:white rounded:small whitespace:nowrap">This text won't wrap to next line</div>
  <div space="p:small" visual="bg:warning text:black rounded:small whitespace:pre">Preserved   spaces   here</div>
</div>
</div>

<details>
<summary>View Code</summary>

```html
<div layout="flex col" space="g:small p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div space="p:small" visual="bg:primary text:white rounded:small whitespace:normal">Normal   spaces   collapse</div>
  <div space="p:small" visual="bg:success text:white rounded:small whitespace:nowrap">This text won't wrap to next line</div>
  <div space="p:small" visual="bg:warning text:black rounded:small whitespace:pre">Preserved   spaces   here</div>
</div>
```

</details>

</div>
