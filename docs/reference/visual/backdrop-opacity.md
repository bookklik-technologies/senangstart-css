# Backdrop Opacity

Set backdrop opacity

## Syntax
```
visual="backdrop-opacity:[value]"
```

## Values

| Value | CSS Output | Description |
|-------|------------|-------------|
| `0` | `backdrop-filter: opacity(0)` | Transparent |
| `50` | `backdrop-filter: opacity(0.5)` | 50% opacity |
| `100` | `backdrop-filter: opacity(1)` | Fully opaque |

## Examples

```html
<div visual="backdrop-opacity:50">Semi-transparent backdrop</div>
```

## Preview

<div space="p-x:big p-b:medium m-t:medium" visual="border-w:thin border:neutral-100 dark:border:neutral-800 rounded:medium">

### Backdrop Opacity

<div layout="flex col" space="g:medium">
  <p space="m:none" visual="text:neutral-600 dark:text:neutral-400 text-sm"><code>visual="backdrop-opacity:50"</code> - Control backdrop transparency</p>
<div layout="flex" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div space="p:small" visual="bg:primary text:white rounded:small">0</div>
  <div space="p:small" visual="bg:primary text:white rounded:small">50</div>
  <div space="p:small" visual="bg:primary text:white rounded:small">100</div>
</div>
</div>

<details>
<summary>View Code</summary>

```html
<div layout="flex" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div space="p:small" visual="bg:primary text:white rounded:small">0</div>
  <div space="p:small" visual="bg:primary text:white rounded:small">50</div>
  <div space="p:small" visual="bg:primary text:white rounded:small">100</div>
</div>
```

</details>

</div>

## Arbitrary Values

Supports custom values using bracket syntax:

```html
<div visual="backdrop:[custom-value]">Custom</div>
```
