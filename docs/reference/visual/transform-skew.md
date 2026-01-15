# Transform Skew

Skew element

## Syntax
```
visual="skew-x:[degrees]" or visual="skew-y:[degrees]"
```

## Values

| Value | CSS Output | Description |
|-------|------------|-------------|
| `0` | `transform: skewX(0deg)` | No skew |
| `3` | `transform: skewX(3deg)` | 3° skew |
| `6` | `transform: skewX(6deg)` | 6° skew |
| `12` | `transform: skewX(12deg)` | 12° skew |

## Examples

```html
<div visual="skew-x:6">Skewed element</div>
```

## Preview

<div space="p-x:big p-b:medium m-t:medium" visual="border-w:thin border:neutral-100 dark:border:neutral-800 rounded:medium">

### Skew Transform

<div layout="flex col" space="g:medium">
  <p space="m:none" visual="text:neutral-600 dark:text:neutral-400 text-sm"><code>visual="skew-x:6"</code> - Skew elements along axes</p>
<div layout="flex" space="g:big p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div space="p:small" visual="bg:primary text:white rounded:small skew-x:0">0°</div>
  <div space="p:small" visual="bg:primary text:white rounded:small skew-x:6">6°</div>
  <div space="p:small" visual="bg:primary text:white rounded:small skew-x:12">12°</div>
</div>
</div>

<details>
<summary>View Code</summary>

```html
<div layout="flex" space="g:big p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div space="p:small" visual="bg:primary text:white rounded:small skew-x:0">0°</div>
  <div space="p:small" visual="bg:primary text:white rounded:small skew-x:6">6°</div>
  <div space="p:small" visual="bg:primary text:white rounded:small skew-x:12">12°</div>
</div>
```

</details>

</div>

## Arbitrary Values

Supports custom values using bracket syntax:

```html
<div visual="transform:[custom-value]">Custom</div>
```
