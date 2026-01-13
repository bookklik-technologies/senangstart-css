# Z Index

Control stacking order

## Syntax
```
layout="z:[value]"
```

## Values

| Value | CSS Output | Description |
|-------|------------|-------------|
| `base` | `z-index: var(--z-base)` | Base layer (0) |
| `low` | `z-index: var(--z-low)` | Low layer (10) |
| `mid` | `z-index: var(--z-mid)` | Middle layer (50) |
| `high` | `z-index: var(--z-high)` | High layer (100) |
| `top` | `z-index: var(--z-top)` | Top layer (9999) |

## Examples

```html
<div layout="z:top">On top</div>
```

## Preview

<div space="p-x:big p-b:medium m-t:medium" visual="border-w:thin border:neutral-100 dark:border:neutral-800 rounded:medium">

### Z-Index Layers

<div layout="flex col" space="g:medium">
  <p space="m:none" visual="text:neutral-600 dark:text:neutral-400 text-sm"><code>layout="z:high"</code> - Control stacking order of positioned elements</p>
<div layout="relative" space="p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium" style="height: 80px;">
  <span layout="absolute z:base" style="left: 0; top: 10px;" space="p:small" visual="bg:neutral-400 text:white rounded:small">z:base</span>
  <span layout="absolute z:low" style="left: 30px; top: 20px;" space="p:small" visual="bg:neutral-500 text:white rounded:small">z:low</span>
  <span layout="absolute z:mid" style="left: 60px; top: 30px;" space="p:small" visual="bg:neutral-600 text:white rounded:small">z:mid</span>
  <span layout="absolute z:high" style="left: 90px; top: 40px;" space="p:small" visual="bg:primary text:white rounded:small">z:high</span>
</div>
</div>

<details>
<summary>View Code</summary>

```html
<div layout="relative" space="p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium" style="height: 80px;">
  <span layout="absolute z:base" style="left: 0; top: 10px;" space="p:small" visual="bg:neutral-400 text:white rounded:small">z:base</span>
  <span layout="absolute z:low" style="left: 30px; top: 20px;" space="p:small" visual="bg:neutral-500 text:white rounded:small">z:low</span>
  <span layout="absolute z:mid" style="left: 60px; top: 30px;" space="p:small" visual="bg:neutral-600 text:white rounded:small">z:mid</span>
  <span layout="absolute z:high" style="left: 90px; top: 40px;" space="p:small" visual="bg:primary text:white rounded:small">z:high</span>
</div>
```

</details>

</div>
