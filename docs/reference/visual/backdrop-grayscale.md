# Backdrop Grayscale

Apply grayscale to backdrop

## Syntax
```
visual="backdrop-grayscale:[value]"
```

## Values

| Value | CSS Output | Description |
|-------|------------|-------------|
| `none` | `backdrop-filter: grayscale(0%)` | No grayscale |
| `partial` | `backdrop-filter: grayscale(50%)` | 50% grayscale |
| `full` | `backdrop-filter: grayscale(100%)` | Full grayscale |

## Examples

```html
<div visual="backdrop-grayscale:full">Grayscale backdrop</div>
```

## Preview

<div space="p-x:big p-b:medium m-t:medium" visual="border-w:thin border:neutral-100 dark:border:neutral-800 rounded:medium">

### Backdrop Grayscale

<div layout="flex col" space="g:medium">
  <p space="m:none" visual="text:neutral-600 dark:text:neutral-400 text-sm"><code>visual="backdrop-grayscale:full"</code> - Remove color from backdrop, creating a desaturated effect</p>
<div layout="flex" space="g:medium" visual="rounded:medium">
  <div space="p:small" visual="rounded:small text:white" style="background: linear-gradient(135deg, #3b82f6, #10b981);">Original</div>
  <div space="p:small" visual="rounded:small text:white" style="background: linear-gradient(135deg, #3b82f6, #10b981); filter: grayscale(100%);">Grayscale</div>
</div>
</div>

<details>
<summary>View Code</summary>

```html
<div layout="flex" space="g:medium" visual="rounded:medium">
  <div space="p:small" visual="rounded:small text:white" style="background: linear-gradient(135deg, #3b82f6, #10b981);">Original</div>
  <div space="p:small" visual="rounded:small text:white" style="background: linear-gradient(135deg, #3b82f6, #10b981); filter: grayscale(100%);">Grayscale</div>
</div>
```

</details>

</div>

## Arbitrary Values

Supports custom values using bracket syntax:

```html
<div visual="backdrop:[custom-value]">Custom</div>
```
