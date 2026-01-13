# Transform Perspective Origin

Set perspective origin point

## Syntax
```
visual="perspective-origin:[value]"
```

## Values

| Value | CSS Output | Description |
|-------|------------|-------------|
| `center` | `perspective-origin: center` | Center origin |
| `top` | `perspective-origin: top` | Top origin |
| `bottom` | `perspective-origin: bottom` | Bottom origin |
| `left` | `perspective-origin: left` | Left origin |
| `right` | `perspective-origin: right` | Right origin |
| `top-left` | `perspective-origin: top left` | Top left |
| `top-right` | `perspective-origin: top right` | Top right |
| `bottom-left` | `perspective-origin: bottom left` | Bottom left |
| `bottom-right` | `perspective-origin: bottom right` | Bottom right |

## Examples

```html
<div visual="perspective-origin:top">Top origin</div>
```

## Preview

<div space="p-x:big p-b:medium m-t:medium" visual="border-w:thin border:neutral-100 dark:border:neutral-800 rounded:medium">

### Perspective Origin

<div layout="flex col" space="g:medium">
  <p space="m:none" visual="text:neutral-600 dark:text:neutral-400 text-sm"><code>visual="perspective-origin:center"</code> - Set vanishing point location</p>
<div layout="flex" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div space="p:small" visual="bg:primary text:white rounded:small">origin:center</div>
</div>
</div>

<details>
<summary>View Code</summary>

```html
<div layout="flex" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div space="p:small" visual="bg:primary text:white rounded:small">origin:center</div>
</div>
```

</details>

</div>

## Arbitrary Values

Supports custom values using bracket syntax:

```html
<div visual="transform:[custom-value]">Custom</div>
```
