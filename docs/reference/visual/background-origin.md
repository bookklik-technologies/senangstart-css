# Background Origin

Set background positioning origin

## Syntax
```
visual="bg-origin:[value]"
```

## Values

| Value | CSS Output | Description |
|-------|------------|-------------|
| `border` | `background-origin: border-box` | Origin at border |
| `padding` | `background-origin: padding-box` | Origin at padding |
| `content` | `background-origin: content-box` | Origin at content |

## Examples

```html
<div visual="bg-origin:content">Content origin</div>
```

## Preview

<div space="p-x:big p-b:medium m-t:medium" visual="border-w:thin border:neutral-100 dark:border:neutral-800 rounded:medium">

### Background Origin

<div layout="flex col" space="g:medium">
  <p space="m:none" visual="text:neutral-600 dark:text:neutral-400 text-sm"><code>visual="bg-origin:content"</code> - Set background positioning origin</p>
<div layout="flex" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div space="p:small" visual="bg:primary text:white rounded:small">border</div>
  <div space="p:small" visual="bg:primary text:white rounded:small">padding</div>
  <div space="p:small" visual="bg:primary text:white rounded:small">content</div>
</div>
</div>

<details>
<summary>View Code</summary>

```html
<div layout="flex" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div space="p:small" visual="bg:primary text:white rounded:small">border</div>
  <div space="p:small" visual="bg:primary text:white rounded:small">padding</div>
  <div space="p:small" visual="bg:primary text:white rounded:small">content</div>
</div>
```

</details>

</div>
