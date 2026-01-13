# Transform Translate

Translate element position

## Syntax
```
visual="translate-x:[value]" or visual="translate-y:[value]"
```

## Values

| Value | CSS Output | Description |
|-------|------------|-------------|
| `0` | `transform: translateX(0)` | No translation |
| `full` | `transform: translateX(100%)` | Full width |
| `1/2` | `transform: translateX(50%)` | Half width |

## Examples

```html
<div visual="translate-x:full">Moved right</div>
```

## Preview

<div space="p-x:big p-b:medium m-t:medium" visual="border-w:thin border:neutral-100 dark:border:neutral-800 rounded:medium">

### Translate Transform

<div layout="flex col" space="g:medium">
  <p space="m:none" visual="text:neutral-600 dark:text:neutral-400 text-sm"><code>visual="translate-x:full"</code> - Move elements position</p>
<div layout="relative" space="p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium" style="height: 80px;">
  <div layout="absolute" space="p:small" visual="bg:primary text:white rounded:small" style="transform: translateX(0);">0</div>
  <div layout="absolute" space="p:small" visual="bg:primary text:white rounded:small" style="transform: translateX(60px);">60px</div>
  <div layout="absolute" space="p:small" visual="bg:primary text:white rounded:small" style="transform: translateX(120px);">120px</div>
</div>
</div>

<details>
<summary>View Code</summary>

```html
<div layout="relative" space="p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium" style="height: 80px;">
  <div layout="absolute" space="p:small" visual="bg:primary text:white rounded:small" style="transform: translateX(0);">0</div>
  <div layout="absolute" space="p:small" visual="bg:primary text:white rounded:small" style="transform: translateX(60px);">60px</div>
  <div layout="absolute" space="p:small" visual="bg:primary text:white rounded:small" style="transform: translateX(120px);">120px</div>
</div>
```

</details>

</div>

## Arbitrary Values

Supports custom values using bracket syntax:

```html
<div visual="transform:[custom-value]">Custom</div>
```
