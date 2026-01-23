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
  <p space="m:none" visual="text:neutral-600 dark:text:neutral-400 text-sm"><code>visual="line-clamp:2"</code> - Limit text to specific lines</p>
<div layout="flex col" space="g:small p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div space="p:small w:[200px]" visual="bg:primary text:white rounded:small line-clamp:1">This is a very long text that will be clamped to just one single line with ellipsis.</div>
  <div space="p:small w:[200px]" visual="bg:success text:white rounded:small line-clamp:2">This is a very long text that will be clamped to exactly two lines with ellipsis at the end.</div>
  <div space="p:small w:[200px]" visual="bg:warning text:black rounded:small line-clamp:3">This is a very long text that will be clamped to exactly three lines with ellipsis shown at the end of the third line.</div>
</div>
</div>

<details>
<summary>View Code</summary>

```html
<div layout="flex col" space="g:small p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div space="p:small w:[200px]" visual="bg:primary text:white rounded:small line-clamp:1">This is a very long text that will be clamped to just one single line with ellipsis.</div>
  <div space="p:small w:[200px]" visual="bg:success text:white rounded:small line-clamp:2">This is a very long text that will be clamped to exactly two lines with ellipsis at the end.</div>
  <div space="p:small w:[200px]" visual="bg:warning text:black rounded:small line-clamp:3">This is a very long text that will be clamped to exactly three lines with ellipsis shown at the end of the third line.</div>
</div>
```

</details>

</div>

## Arbitrary Values

Supports custom values using bracket syntax:

```html
<div visual="line:[custom-value]">Custom</div>
```
