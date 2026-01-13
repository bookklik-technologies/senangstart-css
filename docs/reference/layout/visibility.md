# Visibility

Control element visibility

## Syntax
```
layout="[visibility-value]"
```

## Values

| Value | CSS Output | Description |
|-------|------------|-------------|
| `visible` | `visibility: visible` | Element is visible |
| `invisible` | `visibility: hidden` | Element is invisible but takes space |

## Examples

```html
<div layout="invisible">Invisible but present</div>
```

## Preview

<div space="p-x:big p-b:medium m-t:medium" visual="border-w:thin border:neutral-100 dark:border:neutral-800 rounded:medium">

### Visible vs Invisible

<div layout="flex col" space="g:medium">
  <p space="m:none" visual="text:neutral-600 dark:text:neutral-400 text-sm"><code>layout="invisible"</code> - Invisible elements still take up space</p>
<div layout="flex" space="g:small p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <span space="p:small" visual="bg:primary text:white rounded:small">Visible</span>
  <span layout="invisible" space="p:small" visual="bg:neutral-300 rounded:small">Invisible</span>
  <span space="p:small" visual="bg:primary text:white rounded:small">Visible</span>
</div>
</div>

<details>
<summary>View Code</summary>

```html
<div layout="flex" space="g:small p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <span space="p:small" visual="bg:primary text:white rounded:small">Visible</span>
  <span layout="invisible" space="p:small" visual="bg:neutral-300 rounded:small">Invisible</span>
  <span space="p:small" visual="bg:primary text:white rounded:small">Visible</span>
</div>
```

</details>

</div>
