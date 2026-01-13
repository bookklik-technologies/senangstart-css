# Background Position

Set background position

## Syntax
```
visual="bg-pos:[value]"
```

## Values

| Value | CSS Output | Description |
|-------|------------|-------------|
| `center` | `background-position: center` | Center position |
| `top` | `background-position: top` | Top position |
| `bottom` | `background-position: bottom` | Bottom position |
| `left` | `background-position: left` | Left position |
| `right` | `background-position: right` | Right position |
| `top-left` | `background-position: top left` | Top left |
| `top-right` | `background-position: top right` | Top right |
| `bottom-left` | `background-position: bottom left` | Bottom left |
| `bottom-right` | `background-position: bottom right` | Bottom right |

## Examples

```html
<div visual="bg-pos:center">Centered background</div>
```

## Preview

<div space="p-x:big p-b:medium m-t:medium" visual="border-w:thin border:neutral-100 dark:border:neutral-800 rounded:medium">

### Background Position

<div layout="flex col" space="g:medium">
  <p space="m:none" visual="text:neutral-600 dark:text:neutral-400 text-sm"><code>visual="bg-pos:center"</code> - Position background image</p>
<div layout="flex" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div space="p:small" visual="bg:primary text:white rounded:small">center</div>
  <div space="p:small" visual="bg:primary text:white rounded:small">top</div>
  <div space="p:small" visual="bg:primary text:white rounded:small">bottom</div>
</div>
</div>

<details>
<summary>View Code</summary>

```html
<div layout="flex" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div space="p:small" visual="bg:primary text:white rounded:small">center</div>
  <div space="p:small" visual="bg:primary text:white rounded:small">top</div>
  <div space="p:small" visual="bg:primary text:white rounded:small">bottom</div>
</div>
```

</details>

</div>

## Arbitrary Values

Supports custom values using bracket syntax:

```html
<div visual="background:[custom-value]">Custom</div>
```
