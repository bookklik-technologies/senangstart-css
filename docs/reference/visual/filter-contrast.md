# Filter Contrast

Adjust contrast

## Syntax
```
visual="contrast:[value]"
```

## Values

| Value | CSS Output | Description |
|-------|------------|-------------|
| `low` | `filter: contrast(0.5)` | Low contrast |
| `reduced` | `filter: contrast(0.75)` | Reduced contrast |
| `normal` | `filter: contrast(1)` | Normal contrast |
| `high` | `filter: contrast(1.25)` | High contrast |
| `max` | `filter: contrast(1.5)` | Maximum contrast |

## Examples

```html
<img visual="contrast:high">High contrast</img>
```

## Preview

<div space="p-x:big p-b:medium m-t:medium" visual="border-w:thin border:neutral-100 dark:border:neutral-800 rounded:medium">

### Contrast Filter

<div layout="flex col" space="g:medium">
  <p space="m:none" visual="text:neutral-600 dark:text:neutral-400 text-sm"><code>visual="contrast:high"</code> - Adjust element contrast</p>
<div layout="flex" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div space="p:small" visual="bg:primary text:white rounded:small" style="filter: contrast(0.5);">low</div>
  <div space="p:small" visual="bg:primary text:white rounded:small">normal</div>
  <div space="p:small" visual="bg:primary text:white rounded:small" style="filter: contrast(1.5);">high</div>
</div>
</div>

<details>
<summary>View Code</summary>

```html
<div layout="flex" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div space="p:small" visual="bg:primary text:white rounded:small" style="filter: contrast(0.5);">low</div>
  <div space="p:small" visual="bg:primary text:white rounded:small">normal</div>
  <div space="p:small" visual="bg:primary text:white rounded:small" style="filter: contrast(1.5);">high</div>
</div>
```

</details>

</div>

## Arbitrary Values

Supports custom values using bracket syntax:

```html
<div visual="filter:[custom-value]">Custom</div>
```
