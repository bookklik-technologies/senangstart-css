# Text Overflow

Handle text overflow

## Syntax
```
visual="[overflow-value]"
```

## Values

| Value | CSS Output | Description |
|-------|------------|-------------|
| `truncate` | `overflow: hidden; text-overflow: ellipsis; white-space: nowrap` | Truncate with ellipsis |
| `text-ellipsis` | `text-overflow: ellipsis` | Ellipsis overflow |
| `text-clip` | `text-overflow: clip` | Clip overflow |

## Examples

```html
<div visual="truncate">Very long text that gets truncated...</div>
```

## Preview

<div space="p-x:big p-b:medium m-t:medium" visual="border-w:thin border:neutral-100 dark:border:neutral-800 rounded:medium">

### Text Overflow

<div layout="flex col" space="g:medium">
  <p space="m:none" visual="text:neutral-600 dark:text:neutral-400 text-sm"><code>visual="truncate"</code> - Handle overflowing text</p>
<div layout="flex col" space="g:small p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div space="p:small w:[150px]" visual="bg:primary text:white rounded:small truncate">This long text will be truncated with ellipsis</div>
  <div space="p:small w:[150px]" visual="bg:success text:white rounded:small text-clip">This long text will be clipped without ellipsis</div>
</div>
</div>

<details>
<summary>View Code</summary>

```html
<div layout="flex col" space="g:small p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div space="p:small w:[150px]" visual="bg:primary text:white rounded:small truncate">This long text will be truncated with ellipsis</div>
  <div space="p:small w:[150px]" visual="bg:success text:white rounded:small text-clip">This long text will be clipped without ellipsis</div>
</div>
```

</details>

</div>
