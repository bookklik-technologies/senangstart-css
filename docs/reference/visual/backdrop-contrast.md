# Backdrop Contrast

Adjust backdrop contrast

## Syntax
```
visual="backdrop-contrast:[value]"
```

## Values

| Value | CSS Output | Description |
|-------|------------|-------------|
| `low` | `backdrop-filter: contrast(0.5)` | Low contrast |
| `reduced` | `backdrop-filter: contrast(0.75)` | Reduced contrast |
| `normal` | `backdrop-filter: contrast(1)` | Normal contrast |
| `high` | `backdrop-filter: contrast(1.25)` | High contrast |
| `max` | `backdrop-filter: contrast(1.5)` | Maximum contrast |

## Examples

```html
<div visual="backdrop-contrast:high">High contrast backdrop</div>
```

## Preview

<div space="p-x:big p-b:medium m-t:medium" visual="border-w:thin border:neutral-100 dark:border:neutral-800 rounded:medium">

### Backdrop Contrast

<div layout="flex col" space="g:medium">
  <p space="m:none" visual="text:neutral-600 dark:text:neutral-400 text-sm"><code>visual="backdrop-contrast:high"</code> - Adjust contrast behind element</p>
<div layout="flex" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div space="p:small" visual="bg:primary text:white rounded:small">low</div>
  <div space="p:small" visual="bg:primary text:white rounded:small">normal</div>
  <div space="p:small" visual="bg:primary text:white rounded:small">high</div>
</div>
</div>

<details>
<summary>View Code</summary>

```html
<div layout="flex" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div space="p:small" visual="bg:primary text:white rounded:small">low</div>
  <div space="p:small" visual="bg:primary text:white rounded:small">normal</div>
  <div space="p:small" visual="bg:primary text:white rounded:small">high</div>
</div>
```

</details>

</div>

## Arbitrary Values

Supports custom values using bracket syntax:

```html
<div visual="backdrop:[custom-value]">Custom</div>
```
