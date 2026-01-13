# Backdrop Hue Rotate

Rotate backdrop hue

## Syntax
```
visual="backdrop-hue-rotate:[degrees]"
```

## Values

| Value | CSS Output | Description |
|-------|------------|-------------|
| `0` | `backdrop-filter: hue-rotate(0deg)` | No rotation |
| `90` | `backdrop-filter: hue-rotate(90deg)` | 90° rotation |
| `180` | `backdrop-filter: hue-rotate(180deg)` | 180° rotation |

## Examples

```html
<div visual="backdrop-hue-rotate:90">Rotated hue backdrop</div>
```

## Preview

<div space="p-x:big p-b:medium m-t:medium" visual="border-w:thin border:neutral-100 dark:border:neutral-800 rounded:medium">

### Backdrop Hue Rotate

<div layout="flex col" space="g:medium">
  <p space="m:none" visual="text:neutral-600 dark:text:neutral-400 text-sm"><code>visual="backdrop-hue-rotate:90"</code> - Rotate colors behind element</p>
<div layout="flex" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div space="p:small" visual="bg:primary text:white rounded:small">0°</div>
  <div space="p:small" visual="bg:primary text:white rounded:small">90°</div>
  <div space="p:small" visual="bg:primary text:white rounded:small">180°</div>
</div>
</div>

<details>
<summary>View Code</summary>

```html
<div layout="flex" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div space="p:small" visual="bg:primary text:white rounded:small">0°</div>
  <div space="p:small" visual="bg:primary text:white rounded:small">90°</div>
  <div space="p:small" visual="bg:primary text:white rounded:small">180°</div>
</div>
```

</details>

</div>

## Arbitrary Values

Supports custom values using bracket syntax:

```html
<div visual="backdrop:[custom-value]">Custom</div>
```
