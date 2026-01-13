# Forced Color Adjust

Control forced colors mode behavior

## Syntax
```
visual="forced-color:[value]"
```

## Values

| Value | CSS Output | Description |
|-------|------------|-------------|
| `auto` | `forced-color-adjust: auto` | Auto adjust |
| `none` | `forced-color-adjust: none` | No adjustment |

## Examples

```html
<div visual="forced-color:none">Preserve colors in high contrast</div>
```

## Preview

<div space="p-x:big p-b:medium m-t:medium" visual="border-w:thin border:neutral-100 dark:border:neutral-800 rounded:medium">

### Forced Color Adjust

<div layout="flex col" space="g:medium">
  <p space="m:none" visual="text:neutral-600 dark:text:neutral-400 text-sm"><code>visual="forced-color:none"</code> - Control high contrast mode</p>
<div layout="flex" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div space="p:small" visual="bg:primary text:white rounded:small">auto</div>
  <div space="p:small" visual="bg:primary text:white rounded:small">none</div>
</div>
</div>

<details>
<summary>View Code</summary>

```html
<div layout="flex" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div space="p:small" visual="bg:primary text:white rounded:small">auto</div>
  <div space="p:small" visual="bg:primary text:white rounded:small">none</div>
</div>
```

</details>

</div>
