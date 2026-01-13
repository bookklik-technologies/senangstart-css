# Field Sizing

Control form field sizing

## Syntax
```
visual="field-sizing:[value]"
```

## Values

| Value | CSS Output | Description |
|-------|------------|-------------|
| `fixed` | `field-sizing: fixed` | Fixed size |
| `content` | `field-sizing: content` | Size to content |

## Examples

```html
<textarea visual="field-sizing:content">Auto-grow textarea</textarea>
```

## Preview

<div space="p-x:big p-b:medium m-t:medium" visual="border-w:thin border:neutral-100 dark:border:neutral-800 rounded:medium">

### Field Sizing

<div layout="flex col" space="g:medium">
  <p space="m:none" visual="text:neutral-600 dark:text:neutral-400 text-sm"><code>visual="field-sizing:content"</code> - Grow field with content</p>
<div layout="flex" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div space="p:small" visual="bg:primary text:white rounded:small">fixed</div>
  <div space="p:small" visual="bg:primary text:white rounded:small">content</div>
</div>
</div>

<details>
<summary>View Code</summary>

```html
<div layout="flex" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div space="p:small" visual="bg:primary text:white rounded:small">fixed</div>
  <div space="p:small" visual="bg:primary text:white rounded:small">content</div>
</div>
```

</details>

</div>
