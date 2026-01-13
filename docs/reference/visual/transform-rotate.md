# Transform Rotate

Rotate element

## Syntax
```
visual="rotate:[degrees]"
```

## Values

| Value | CSS Output | Description |
|-------|------------|-------------|
| `0` | `transform: rotate(0deg)` | No rotation |
| `45` | `transform: rotate(45deg)` | 45° rotation |
| `90` | `transform: rotate(90deg)` | 90° rotation |
| `180` | `transform: rotate(180deg)` | 180° rotation |

## Examples

```html
<div visual="rotate:45">Rotated 45 degrees</div>
```

## Preview

<div space="p-x:big p-b:medium m-t:medium" visual="border-w:thin border:neutral-100 dark:border:neutral-800 rounded:medium">

### Rotate Transform

<div layout="flex col" space="g:medium">
  <p space="m:none" visual="text:neutral-600 dark:text:neutral-400 text-sm"><code>visual="rotate:45"</code> - Rotate elements by degrees</p>
<div layout="flex" space="g:big p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div space="p:small" visual="bg:primary text:white rounded:small" style="transform: rotate(0deg);">0°</div>
  <div space="p:small" visual="bg:primary text:white rounded:small" style="transform: rotate(45deg);">45°</div>
  <div space="p:small" visual="bg:primary text:white rounded:small" style="transform: rotate(90deg);">90°</div>
</div>
</div>

<details>
<summary>View Code</summary>

```html
<div layout="flex" space="g:big p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div space="p:small" visual="bg:primary text:white rounded:small" style="transform: rotate(0deg);">0°</div>
  <div space="p:small" visual="bg:primary text:white rounded:small" style="transform: rotate(45deg);">45°</div>
  <div space="p:small" visual="bg:primary text:white rounded:small" style="transform: rotate(90deg);">90°</div>
</div>
```

</details>

</div>

## Arbitrary Values

Supports custom values using bracket syntax:

```html
<div visual="transform:[custom-value]">Custom</div>
```
