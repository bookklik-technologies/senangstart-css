# Transform Backface

Control backface visibility

## Syntax
```
visual="backface:[value]"
```

## Values

| Value | CSS Output | Description |
|-------|------------|-------------|
| `visible` | `backface-visibility: visible` | Backface visible |
| `hidden` | `backface-visibility: hidden` | Backface hidden |

## Examples

```html
<div visual="backface:hidden">Hidden when rotated</div>
```

## Preview

<div space="p-x:big p-b:medium m-t:medium" visual="border-w:thin border:neutral-100 dark:border:neutral-800 rounded:medium">

### Backface Visibility

<div layout="flex col" space="g:medium">
  <p space="m:none" visual="text:neutral-600 dark:text:neutral-400 text-sm"><code>visual="backface:hidden"</code> - Show or hide element back side when rotated</p>
<div layout="flex" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div space="p:small" visual="bg:primary text:white rounded:small backface:visible">visible</div>
  <div space="p:small" visual="bg:primary text:white rounded:small backface:hidden">hidden</div>
</div>
</div>

<details>
<summary>View Code</summary>

```html
<div layout="flex" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div space="p:small" visual="bg:primary text:white rounded:small backface:visible">visible</div>
  <div space="p:small" visual="bg:primary text:white rounded:small backface:hidden">hidden</div>
</div>
```

</details>

</div>
