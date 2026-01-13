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
<div layout="flex" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div space="p:small" visual="bg:primary text:white rounded:small">normal</div>
  <div space="p:small" visual="bg:primary text:white rounded:small">nowrap</div>
  <div space="p:small" visual="bg:primary text:white rounded:small">pre</div>
</div>
</div>

<details>
<summary>View Code</summary>

```html
<div layout="flex" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div space="p:small" visual="bg:primary text:white rounded:small">normal</div>
  <div space="p:small" visual="bg:primary text:white rounded:small">nowrap</div>
  <div space="p:small" visual="bg:primary text:white rounded:small">pre</div>
</div>
```

</details>

</div>
