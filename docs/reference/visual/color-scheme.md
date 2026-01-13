# Color Scheme

Set preferred color scheme

## Syntax
```
visual="color-scheme:[value]"
```

## Values

| Value | CSS Output | Description |
|-------|------------|-------------|
| `light` | `color-scheme: light` | Light mode |
| `dark` | `color-scheme: dark` | Dark mode |
| `normal` | `color-scheme: normal` | System default |

## Examples

```html
<html visual="color-scheme:dark">Dark mode</html>
```

## Preview

<div space="p-x:big p-b:medium m-t:medium" visual="border-w:thin border:neutral-100 dark:border:neutral-800 rounded:medium">

### Color Scheme

<div layout="flex col" space="g:medium">
  <p space="m:none" visual="text:neutral-600 dark:text:neutral-400 text-sm"><code>visual="color-scheme:dark"</code> - Set preferred color mode</p>
<div layout="flex" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div space="p:small" visual="bg:primary text:white rounded:small">light</div>
  <div space="p:small" visual="bg:primary text:white rounded:small">dark</div>
</div>
</div>

<details>
<summary>View Code</summary>

```html
<div layout="flex" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div space="p:small" visual="bg:primary text:white rounded:small">light</div>
  <div space="p:small" visual="bg:primary text:white rounded:small">dark</div>
</div>
```

</details>

</div>
