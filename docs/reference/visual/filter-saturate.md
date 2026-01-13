# Filter Saturate

Adjust saturation

## Syntax
```
visual="saturate:[value]"
```

## Values

| Value | CSS Output | Description |
|-------|------------|-------------|
| `none` | `filter: saturate(0)` | Desaturated |
| `low` | `filter: saturate(0.5)` | Low saturation |
| `normal` | `filter: saturate(1)` | Normal saturation |
| `high` | `filter: saturate(1.5)` | High saturation |
| `vivid` | `filter: saturate(2)` | Very saturated |

## Examples

```html
<img visual="saturate:vivid">Vivid colors</img>
```

## Preview

<div space="p-x:big p-b:medium m-t:medium" visual="border-w:thin border:neutral-100 dark:border:neutral-800 rounded:medium">

### Saturate Filter

<div layout="flex col" space="g:medium">
  <p space="m:none" visual="text:neutral-600 dark:text:neutral-400 text-sm"><code>visual="saturate:vivid"</code> - Adjust color saturation</p>
<div layout="flex" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div space="p:small" visual="bg:primary text:white rounded:small" style="filter: saturate(0);">none</div>
  <div space="p:small" visual="bg:primary text:white rounded:small">normal</div>
  <div space="p:small" visual="bg:primary text:white rounded:small" style="filter: saturate(2);">vivid</div>
</div>
</div>

<details>
<summary>View Code</summary>

```html
<div layout="flex" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div space="p:small" visual="bg:primary text:white rounded:small" style="filter: saturate(0);">none</div>
  <div space="p:small" visual="bg:primary text:white rounded:small">normal</div>
  <div space="p:small" visual="bg:primary text:white rounded:small" style="filter: saturate(2);">vivid</div>
</div>
```

</details>

</div>

## Arbitrary Values

Supports custom values using bracket syntax:

```html
<div visual="filter:[custom-value]">Custom</div>
```
