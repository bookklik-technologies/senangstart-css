# Object Fit

Control how media content fits its container

## Syntax
```
layout="object:[value]"
```

## Values

| Value | CSS Output | Description |
|-------|------------|-------------|
| `contain` | `object-fit: contain` | Scale to fit, preserve ratio |
| `cover` | `object-fit: cover` | Cover container, may crop |
| `fill` | `object-fit: fill` | Stretch to fill |
| `none` | `object-fit: none` | No scaling |
| `scale-down` | `object-fit: scale-down` | Smaller of none or contain |

## Examples

```html
<img layout="object:cover">Cover image</img>
```

## Preview

<div space="p-x:big p-b:medium m-t:medium" visual="border-w:thin border:neutral-100 dark:border:neutral-800 rounded:medium">

### Object Fit Cover

<div layout="flex col" space="g:medium">
  <p space="m:none" visual="text:neutral-600 dark:text:neutral-400 text-sm"><code>layout="object:cover"</code> - Image covers container, may crop</p>
<div layout="flex" space="g:small p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div style="width: 80px; height: 60px;" visual="bg:neutral-300 rounded:small" layout="overflow:hidden">
    <div layout="object:cover" style="width: 100%; height: 100%;" visual="bg:primary"></div>
  </div>
  <span layout="flex center" visual="text:neutral-600 dark:text:neutral-400">object:cover</span>
</div>
</div>

<details>
<summary>View Code</summary>

```html
<div layout="flex" space="g:small p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div style="width: 80px; height: 60px;" visual="bg:neutral-300 rounded:small" layout="overflow:hidden">
    <div layout="object:cover" style="width: 100%; height: 100%;" visual="bg:primary"></div>
  </div>
  <span layout="flex center" visual="text:neutral-600 dark:text:neutral-400">object:cover</span>
</div>
```

</details>

</div>

<div space="p-x:big p-b:medium m-t:medium" visual="border-w:thin border:neutral-100 dark:border:neutral-800 rounded:medium">

### Object Fit Contain

<div layout="flex col" space="g:medium">
  <p space="m:none" visual="text:neutral-600 dark:text:neutral-400 text-sm"><code>layout="object:contain"</code> - Image fits inside, preserves ratio</p>
<div layout="flex" space="g:small p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div style="width: 80px; height: 60px;" visual="bg:neutral-300 rounded:small" layout="flex center">
    <div layout="object:contain" style="width: 60%; height: 60%;" visual="bg:primary rounded:small"></div>
  </div>
  <span layout="flex center" visual="text:neutral-600 dark:text:neutral-400">object:contain</span>
</div>
</div>

<details>
<summary>View Code</summary>

```html
<div layout="flex" space="g:small p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div style="width: 80px; height: 60px;" visual="bg:neutral-300 rounded:small" layout="flex center">
    <div layout="object:contain" style="width: 60%; height: 60%;" visual="bg:primary rounded:small"></div>
  </div>
  <span layout="flex center" visual="text:neutral-600 dark:text:neutral-400">object:contain</span>
</div>
```

</details>

</div>
