# Line Clamp

Limit text to specific lines

## Syntax
```
visual="line-clamp:[value]"
```

## Values

| Value | CSS Output | Description |
|-------|------------|-------------|
| `1` | `overflow: hidden; display: -webkit-box; -webkit-box-orient: vertical; -webkit-line-clamp: 1` | Single line |
| `2` | `overflow: hidden; display: -webkit-box; -webkit-box-orient: vertical; -webkit-line-clamp: 2` | Two lines |
| `3` | `overflow: hidden; display: -webkit-box; -webkit-box-orient: vertical; -webkit-line-clamp: 3` | Three lines |
| `none` | `overflow: visible; display: block; -webkit-box-orient: horizontal; -webkit-line-clamp: none` | No clamp |

## Examples

```html
<p visual="line-clamp:3">Text limited to 3 lines...</p>
```

## Preview

<div space="p-x:big p-b:medium m-t:medium" visual="border-w:thin border:neutral-100 dark:border:neutral-800 rounded:medium">

### Line Clamp

<div layout="flex col" space="g:medium">
  <p space="m:none" visual="text:neutral-600 dark:text:neutral-400 text-sm"><code>visual="line-clamp:3"</code> - Limit text to specific lines</p>
<div layout="flex" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div space="p:small" visual="bg:primary text:white rounded:small">1</div>
  <div space="p:small" visual="bg:primary text:white rounded:small">2</div>
  <div space="p:small" visual="bg:primary text:white rounded:small">3</div>
</div>
</div>

<details>
<summary>View Code</summary>

```html
<div layout="flex" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div space="p:small" visual="bg:primary text:white rounded:small">1</div>
  <div space="p:small" visual="bg:primary text:white rounded:small">2</div>
  <div space="p:small" visual="bg:primary text:white rounded:small">3</div>
</div>
```

</details>

</div>

## Arbitrary Values

Supports custom values using bracket syntax:

```html
<div visual="line:[custom-value]">Custom</div>
```
