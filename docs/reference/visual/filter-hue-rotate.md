# Filter Hue Rotate

Rotate hue colors

## Syntax
```
visual="hue-rotate:[degrees]"
```

## Values

| Value | CSS Output | Description |
|-------|------------|-------------|
| `0` | `filter: hue-rotate(0deg)` | No rotation |
| `90` | `filter: hue-rotate(90deg)` | 90° rotation |
| `180` | `filter: hue-rotate(180deg)` | 180° rotation |

## Examples

```html
<img visual="hue-rotate:90">Shifted hue</img>
```

## Preview

<div space="p-x:big p-b:medium m-t:medium" visual="border-w:thin border:neutral-100 dark:border:neutral-800 rounded:medium">

### Hue Rotate Filter

<div layout="flex col" space="g:medium">
  <p space="m:none" visual="text:neutral-600 dark:text:neutral-400 text-sm"><code>visual="hue-rotate:90"</code> - Rotate color hues</p>
<div layout="flex" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div space="p:small" visual="bg:primary text:white rounded:small">0°</div>
  <div space="p:small" visual="bg:primary text:white rounded:small hue-rotate:90">90°</div>
  <div space="p:small" visual="bg:primary text:white rounded:small hue-rotate:180">180°</div>
</div>
</div>

<details>
<summary>View Code</summary>

```html
<div layout="flex" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div space="p:small" visual="bg:primary text:white rounded:small">0°</div>
  <div space="p:small" visual="bg:primary text:white rounded:small hue-rotate:90">90°</div>
  <div space="p:small" visual="bg:primary text:white rounded:small hue-rotate:180">180°</div>
</div>
```

</details>

</div>

## Arbitrary Values

Supports custom values using bracket syntax:

```html
<div visual="filter:[custom-value]">Custom</div>
```
