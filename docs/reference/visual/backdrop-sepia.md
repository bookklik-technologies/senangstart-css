# Backdrop Sepia

Apply sepia to backdrop

## Syntax
```
visual="backdrop-sepia:[value]"
```

## Values

| Value | CSS Output | Description |
|-------|------------|-------------|
| `none` | `backdrop-filter: sepia(0%)` | No sepia |
| `partial` | `backdrop-filter: sepia(50%)` | 50% sepia |
| `full` | `backdrop-filter: sepia(100%)` | Full sepia |

## Examples

```html
<div visual="backdrop-sepia:full">Vintage backdrop</div>
```

## Preview

<div space="p-x:big p-b:medium m-t:medium" visual="border-w:thin border:neutral-100 dark:border:neutral-800 rounded:medium">

### Backdrop Sepia

<div layout="flex col" space="g:medium">
  <p space="m:none" visual="text:neutral-600 dark:text:neutral-400 text-sm"><code>visual="backdrop-sepia:full"</code> - Apply vintage sepia tone to the backdrop</p>
<div layout="flex" space="g:medium" visual="rounded:medium">
  <div space="p:small" visual="rounded:small text:white" style="background: linear-gradient(135deg, #3b82f6, #10b981);">Original</div>
  <div space="p:small" visual="rounded:small text:white" style="background: linear-gradient(135deg, #3b82f6, #10b981); filter: sepia(100%);">Sepia</div>
</div>
</div>

<details>
<summary>View Code</summary>

```html
<div layout="flex" space="g:medium" visual="rounded:medium">
  <div space="p:small" visual="rounded:small text:white" style="background: linear-gradient(135deg, #3b82f6, #10b981);">Original</div>
  <div space="p:small" visual="rounded:small text:white" style="background: linear-gradient(135deg, #3b82f6, #10b981); filter: sepia(100%);">Sepia</div>
</div>
```

</details>

</div>

## Arbitrary Values

Supports custom values using bracket syntax:

```html
<div visual="backdrop:[custom-value]">Custom</div>
```
