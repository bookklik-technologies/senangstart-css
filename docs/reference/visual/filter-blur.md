# Filter Blur

Apply blur filter

## Syntax
```
visual="blur:[value]"
```

## Values

| Value | CSS Output | Description |
|-------|------------|-------------|
| `none` | `filter: blur(0)` | No blur |
| `tiny` | `filter: blur(2px)` | Tiny blur |
| `small` | `filter: blur(4px)` | Small blur |
| `medium` | `filter: blur(8px)` | Medium blur |
| `big` | `filter: blur(12px)` | Large blur |
| `giant` | `filter: blur(24px)` | Giant blur |
| `vast` | `filter: blur(48px)` | Vast blur |

## Examples

```html
<div visual="blur:medium">Blurred element</div>
```

## Preview

<div space="p-x:big p-b:medium m-t:medium" visual="border-w:thin border:neutral-100 dark:border:neutral-800 rounded:medium">

### Blur

<div layout="flex col" space="g:medium">
  <p space="m:none" visual="text:neutral-600 dark:text:neutral-400 text-sm"><code>visual="blur:small"</code> - Apply gaussian blur filter to an element</p>
<div layout="flex" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div space="p:small" visual="bg:primary text:white rounded:small blur:none">none</div>
  <div space="p:small" visual="bg:primary text:white rounded:small blur:tiny">tiny</div>
  <div space="p:small" visual="bg:primary text:white rounded:small blur:small">small</div>
</div>
</div>

<details>
<summary>View Code</summary>

```html
<div layout="flex" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div space="p:small" visual="bg:primary text:white rounded:small blur:none">none</div>
  <div space="p:small" visual="bg:primary text:white rounded:small blur:tiny">tiny</div>
  <div space="p:small" visual="bg:primary text:white rounded:small blur:small">small</div>
</div>
```

</details>

</div>

## Arbitrary Values

Supports custom values using bracket syntax:

```html
<div visual="filter:[custom-value]">Custom</div>
```
