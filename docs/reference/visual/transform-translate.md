# Transform Translate

Translate element position along X, Y, or Z axis

## Syntax
```
visual="translate-x:[value]" or visual="translate-y:[value]" or visual="translate-z:[value]"
```

## Values

| Value | CSS Output | Description |
|-------|------------|-------------|
| `0` | `transform: translateX(0)` | No translation |
| `tiny` | `transform: translateX(var(--sp-tiny))` | Tiny offset |
| `small` | `transform: translateX(var(--sp-small))` | Small offset |
| `medium` | `transform: translateX(var(--sp-medium))` | Medium offset |
| `big` | `transform: translateX(var(--sp-big))` | Big offset |
| `full` | `transform: translateX(100%)` | Full width/height |
| `1/2` | `transform: translateX(50%)` | Half width/height |
| `-full` | `transform: translateX(-100%)` | Negative full |
| `-1/2` | `transform: translateX(-50%)` | Negative half |

## Examples

```html
<div visual="translate-x:medium">Moved right</div>
<div visual="translate-y:small">Moved down</div>
<div visual="translate-z:[50px]">Moved forward in 3D</div>
```

## Preview

<div space="p-x:big p-b:medium m-t:medium" visual="border-w:thin border:neutral-100 dark:border:neutral-800 rounded:medium">

### Translate Transform

<div layout="flex col" space="g:medium">
  <p space="m:none" visual="text:neutral-600 dark:text:neutral-400 text-sm"><code>visual="translate-x:medium"</code> - Move elements along X, Y, or Z axis</p>
<div layout="flex col" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div layout="flex" space="g:small">
    <span visual="text:neutral-500 text-size:small">X axis:</span>
    <div space="p:small" visual="bg:primary text:white rounded:small translate-x:0">0</div>
    <div space="p:small" visual="bg:primary text:white rounded:small translate-x:small">small</div>
    <div space="p:small" visual="bg:primary text:white rounded:small translate-x:medium">medium</div>
  </div>
  <div layout="flex" space="g:small">
    <span visual="text:neutral-500 text-size:small">Y axis:</span>
    <div space="p:small" visual="bg:success text:white rounded:small translate-y:0">0</div>
    <div space="p:small" visual="bg:success text:white rounded:small translate-y:small">small</div>
    <div space="p:small" visual="bg:success text:white rounded:small translate-y:medium">medium</div>
  </div>
</div>
</div>

<details>
<summary>View Code</summary>

```html
<div layout="flex col" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div layout="flex" space="g:small">
    <span visual="text:neutral-500 text-size:small">X axis:</span>
    <div space="p:small" visual="bg:primary text:white rounded:small translate-x:0">0</div>
    <div space="p:small" visual="bg:primary text:white rounded:small translate-x:small">small</div>
    <div space="p:small" visual="bg:primary text:white rounded:small translate-x:medium">medium</div>
  </div>
  <div layout="flex" space="g:small">
    <span visual="text:neutral-500 text-size:small">Y axis:</span>
    <div space="p:small" visual="bg:success text:white rounded:small translate-y:0">0</div>
    <div space="p:small" visual="bg:success text:white rounded:small translate-y:small">small</div>
    <div space="p:small" visual="bg:success text:white rounded:small translate-y:medium">medium</div>
  </div>
</div>
```

</details>

</div>

## Arbitrary Values

Supports custom values using bracket syntax:

```html
<div visual="transform:[custom-value]">Custom</div>
```
