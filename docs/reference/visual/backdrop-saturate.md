# Backdrop Saturate

Adjust backdrop saturation

## Syntax
```
visual="backdrop-saturate:[value]"
```

## Values

| Value | CSS Output | Description |
|-------|------------|-------------|
| `none` | `backdrop-filter: saturate(0)` | Desaturated |
| `low` | `backdrop-filter: saturate(0.5)` | Low saturation |
| `normal` | `backdrop-filter: saturate(1)` | Normal saturation |
| `high` | `backdrop-filter: saturate(1.5)` | High saturation |
| `vivid` | `backdrop-filter: saturate(2)` | Very saturated |

## Examples

```html
<div visual="backdrop-saturate:vivid">Vivid backdrop</div>
```

## Preview

<div space="p-x:big p-b:medium m-t:medium" visual="border-w:thin border:neutral-100 dark:border:neutral-800 rounded:medium">

### Backdrop Saturate

<div layout="flex col" space="g:medium">
  <p space="m:none" visual="text:neutral-600 dark:text:neutral-400 text-sm"><code>visual="backdrop-saturate:vivid"</code> - Adjust saturation behind element</p>
<div layout="flex" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div space="p:small" visual="bg:primary text:white rounded:small">none</div>
  <div space="p:small" visual="bg:primary text:white rounded:small">normal</div>
  <div space="p:small" visual="bg:primary text:white rounded:small">vivid</div>
</div>
</div>

<details>
<summary>View Code</summary>

```html
<div layout="flex" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div space="p:small" visual="bg:primary text:white rounded:small">none</div>
  <div space="p:small" visual="bg:primary text:white rounded:small">normal</div>
  <div space="p:small" visual="bg:primary text:white rounded:small">vivid</div>
</div>
```

</details>

</div>

## Arbitrary Values

Supports custom values using bracket syntax:

```html
<div visual="backdrop:[custom-value]">Custom</div>
```
