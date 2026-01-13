# Backdrop Brightness

Adjust backdrop brightness

## Syntax
```
visual="backdrop-brightness:[value]"
```

## Values

| Value | CSS Output | Description |
|-------|------------|-------------|
| `dim` | `backdrop-filter: brightness(0.5)` | 50% brightness |
| `dark` | `backdrop-filter: brightness(0.75)` | 75% brightness |
| `normal` | `backdrop-filter: brightness(1)` | Normal brightness |
| `bright` | `backdrop-filter: brightness(1.25)` | 125% brightness |
| `vivid` | `backdrop-filter: brightness(1.5)` | 150% brightness |

## Examples

```html
<div visual="backdrop-brightness:dark">Darkened backdrop</div>
```

## Preview

<div space="p-x:big p-b:medium m-t:medium" visual="border-w:thin border:neutral-100 dark:border:neutral-800 rounded:medium">

### Backdrop Brightness

<div layout="flex col" space="g:medium">
  <p space="m:none" visual="text:neutral-600 dark:text:neutral-400 text-sm"><code>visual="backdrop-brightness:dark"</code> - Dim or brighten the backdrop behind an overlay</p>
<div layout="flex" space="g:medium p:medium" visual="rounded:medium" style="background: linear-gradient(135deg, #f97316, #ef4444);">
  <div space="p:small" visual="rounded:small text:white" style="backdrop-filter: brightness(0.5);">dim (50%)</div>
  <div space="p:small" visual="rounded:small text:white" style="backdrop-filter: brightness(1);">normal</div>
  <div space="p:small" visual="rounded:small text:white" style="backdrop-filter: brightness(1.5);">bright (150%)</div>
</div>
</div>

<details>
<summary>View Code</summary>

```html
<div layout="flex" space="g:medium p:medium" visual="rounded:medium" style="background: linear-gradient(135deg, #f97316, #ef4444);">
  <div space="p:small" visual="rounded:small text:white" style="backdrop-filter: brightness(0.5);">dim (50%)</div>
  <div space="p:small" visual="rounded:small text:white" style="backdrop-filter: brightness(1);">normal</div>
  <div space="p:small" visual="rounded:small text:white" style="backdrop-filter: brightness(1.5);">bright (150%)</div>
</div>
```

</details>

</div>

## Arbitrary Values

Supports custom values using bracket syntax:

```html
<div visual="backdrop:[custom-value]">Custom</div>
```
