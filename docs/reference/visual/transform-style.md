# Transform Style

Set 3D transform style

## Syntax
```
visual="transform-style:[value]"
```

## Values

| Value | CSS Output | Description |
|-------|------------|-------------|
| `flat` | `transform-style: flat` | Flat rendering |
| `preserve-3d` | `transform-style: preserve-3d` | Preserve 3D |

## Examples

```html
<div visual="transform-style:preserve-3d">3D space</div>
```

## Preview

<div space="p-x:big p-b:medium m-t:medium" visual="border-w:thin border:neutral-100 dark:border:neutral-800 rounded:medium">

### Transform Style

<div layout="flex col" space="g:medium">
  <p space="m:none" visual="text:neutral-600 dark:text:neutral-400 text-sm"><code>visual="transform-style:preserve-3d"</code> - Flat or preserve 3D rendering</p>
<div layout="flex" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div space="p:small" visual="bg:primary text:white rounded:small transform-style:flat">flat</div>
  <div space="p:small" visual="bg:primary text:white rounded:small transform-style:preserve-3d">preserve-3d</div>
</div>
</div>

<details>
<summary>View Code</summary>

```html
<div layout="flex" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div space="p:small" visual="bg:primary text:white rounded:small transform-style:flat">flat</div>
  <div space="p:small" visual="bg:primary text:white rounded:small transform-style:preserve-3d">preserve-3d</div>
</div>
```

</details>

</div>
