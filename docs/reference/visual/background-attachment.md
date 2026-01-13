# Background Attachment

Set background attachment behavior

## Syntax
```
visual="bg-attachment:[value]"
```

## Values

| Value | CSS Output | Description |
|-------|------------|-------------|
| `fixed` | `background-attachment: fixed` | Fixed background |
| `local` | `background-attachment: local` | Local scroll |
| `scroll` | `background-attachment: scroll` | Scroll with page |

## Examples

```html
<div visual="bg-attachment:fixed">Parallax effect</div>
```

## Preview

<div space="p-x:big p-b:medium m-t:medium" visual="border-w:thin border:neutral-100 dark:border:neutral-800 rounded:medium">

### Background Attachment

<div layout="flex col" space="g:medium">
  <p space="m:none" visual="text:neutral-600 dark:text:neutral-400 text-sm"><code>visual="bg-attachment:fixed"</code> - Control how background scrolls</p>
<div layout="flex" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div space="p:small" visual="bg:primary text:white rounded:small">fixed</div>
  <div space="p:small" visual="bg:primary text:white rounded:small">scroll</div>
</div>
</div>

<details>
<summary>View Code</summary>

```html
<div layout="flex" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div space="p:small" visual="bg:primary text:white rounded:small">fixed</div>
  <div space="p:small" visual="bg:primary text:white rounded:small">scroll</div>
</div>
```

</details>

</div>
