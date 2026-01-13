# Object Position

Position replaced element content within container

## Syntax
```
layout="object-pos:[value]"
```

## Values

| Value | CSS Output | Description |
|-------|------------|-------------|
| `center` | `object-position: center` | Center position |
| `top` | `object-position: top` | Top position |
| `bottom` | `object-position: bottom` | Bottom position |
| `left` | `object-position: left` | Left position |
| `right` | `object-position: right` | Right position |
| `top-left` | `object-position: top left` | Top left |
| `top-right` | `object-position: top right` | Top right |
| `bottom-left` | `object-position: bottom left` | Bottom left |
| `bottom-right` | `object-position: bottom right` | Bottom right |

## Examples

```html
<img layout="object:cover object-pos:top">Top positioned</img>
```

## Preview

<div space="p-x:big p-b:medium m-t:medium" visual="border-w:thin border:neutral-100 dark:border:neutral-800 rounded:medium">

### Object Position

<div layout="flex col" space="g:medium">
  <p space="m:none" visual="text:neutral-600 dark:text:neutral-400 text-sm"><code>layout="object-pos:center"</code> - Control where media is positioned within container</p>
<div layout="grid grid-cols:3" space="g:small p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div style="height: 50px;" visual="bg:neutral-300 rounded:small" layout="flex items:start justify:center"><span space="p:tiny" visual="bg:primary text:white rounded:small">top</span></div>
  <div style="height: 50px;" visual="bg:neutral-300 rounded:small" layout="flex center"><span space="p:tiny" visual="bg:primary text:white rounded:small">center</span></div>
  <div style="height: 50px;" visual="bg:neutral-300 rounded:small" layout="flex items:end justify:center"><span space="p:tiny" visual="bg:primary text:white rounded:small">bottom</span></div>
</div>
</div>

<details>
<summary>View Code</summary>

```html
<div layout="grid grid-cols:3" space="g:small p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div style="height: 50px;" visual="bg:neutral-300 rounded:small" layout="flex items:start justify:center"><span space="p:tiny" visual="bg:primary text:white rounded:small">top</span></div>
  <div style="height: 50px;" visual="bg:neutral-300 rounded:small" layout="flex center"><span space="p:tiny" visual="bg:primary text:white rounded:small">center</span></div>
  <div style="height: 50px;" visual="bg:neutral-300 rounded:small" layout="flex items:end justify:center"><span space="p:tiny" visual="bg:primary text:white rounded:small">bottom</span></div>
</div>
```

</details>

</div>

## Arbitrary Values

Supports custom values using bracket syntax:

```html
<div layout="object:[custom-value]">Custom</div>
```
