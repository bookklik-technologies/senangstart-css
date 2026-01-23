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
<div layout="flex" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div space="p:small" visual="bg-image:gradient-to-br from:blue-500 to:emerald-500 rounded:small text:white">Original</div>
  <div space="p:small" visual="bg-image:gradient-to-br from:blue-500 to:emerald-500 filter-sepia:full rounded:small text:white">Sepia</div>
</div>
</div>

<details>
<summary>View Code</summary>

```html
<div layout="flex" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div space="p:small" visual="bg-image:gradient-to-br from:blue-500 to:emerald-500 rounded:small text:white">Original</div>
  <div space="p:small" visual="bg-image:gradient-to-br from:blue-500 to:emerald-500 filter-sepia:full rounded:small text:white">Sepia</div>
</div>
```

</details>

</div>

## Arbitrary Values

Supports custom values using bracket syntax:

```html
<div visual="backdrop:[custom-value]">Custom</div>
```
