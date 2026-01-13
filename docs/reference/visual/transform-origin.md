# Transform Origin

Set transform origin point

## Syntax
```
visual="origin:[value]"
```

## Values

| Value | CSS Output | Description |
|-------|------------|-------------|
| `center` | `transform-origin: center` | Center origin |
| `top` | `transform-origin: top` | Top origin |
| `top-right` | `transform-origin: top right` | Top right |
| `right` | `transform-origin: right` | Right origin |
| `bottom-right` | `transform-origin: bottom right` | Bottom right |
| `bottom` | `transform-origin: bottom` | Bottom origin |
| `bottom-left` | `transform-origin: bottom left` | Bottom left |
| `left` | `transform-origin: left` | Left origin |
| `top-left` | `transform-origin: top left` | Top left |

## Examples

```html
<div visual="rotate:45 origin:top-left">Rotate from corner</div>
```

## Preview

<div space="p-x:big p-b:medium m-t:medium" visual="border-w:thin border:neutral-100 dark:border:neutral-800 rounded:medium">

### Transform Origin

<div layout="flex col" space="g:medium">
  <p space="m:none" visual="text:neutral-600 dark:text:neutral-400 text-sm"><code>visual="origin:center"</code> - Set the pivot point for transforms</p>
<div layout="flex" space="g:big p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div space="p:small" visual="bg:primary text:white rounded:small" style="transform: rotate(45deg); transform-origin: center;">center</div>
  <div space="p:small" visual="bg:primary text:white rounded:small" style="transform: rotate(45deg); transform-origin: top-left;">top-left</div>
</div>
</div>

<details>
<summary>View Code</summary>

```html
<div layout="flex" space="g:big p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div space="p:small" visual="bg:primary text:white rounded:small" style="transform: rotate(45deg); transform-origin: center;">center</div>
  <div space="p:small" visual="bg:primary text:white rounded:small" style="transform: rotate(45deg); transform-origin: top-left;">top-left</div>
</div>
```

</details>

</div>

## Arbitrary Values

Supports custom values using bracket syntax:

```html
<div visual="transform:[custom-value]">Custom</div>
```
