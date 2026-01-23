# Filter Brightness

Adjust brightness

## Syntax
```
visual="brightness:[value]"
```

## Values

| Value | CSS Output | Description |
|-------|------------|-------------|
| `dim` | `filter: brightness(0.5)` | 50% brightness |
| `dark` | `filter: brightness(0.75)` | 75% brightness |
| `normal` | `filter: brightness(1)` | Normal brightness |
| `bright` | `filter: brightness(1.25)` | 125% brightness |
| `vivid` | `filter: brightness(1.5)` | 150% brightness |

## Examples

```html
<img visual="brightness:bright">Brighter image</img>
```

## Preview

<div space="p-x:big p-b:medium m-t:medium" visual="border-w:thin border:neutral-100 dark:border:neutral-800 rounded:medium">

### Brightness Filter

<div layout="flex col" space="g:medium">
  <p space="m:none" visual="text:neutral-600 dark:text:neutral-400 text-sm"><code>visual="brightness:bright"</code> - Adjust element brightness</p>
<div layout="flex" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div space="p:small" visual="bg:primary text:white rounded:small brightness:dim">dim</div>
  <div space="p:small" visual="bg:primary text:white rounded:small">normal</div>
  <div space="p:small" visual="bg:primary text:white rounded:small brightness:vivid">vivid</div>
</div>
</div>

<details>
<summary>View Code</summary>

```html
<div layout="flex" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div space="p:small" visual="bg:primary text:white rounded:small brightness:dim">dim</div>
  <div space="p:small" visual="bg:primary text:white rounded:small">normal</div>
  <div space="p:small" visual="bg:primary text:white rounded:small brightness:vivid">vivid</div>
</div>
```

</details>

</div>

## Arbitrary Values

Supports custom values using bracket syntax:

```html
<div visual="filter:[custom-value]">Custom</div>
```
