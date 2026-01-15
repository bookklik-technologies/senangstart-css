# Transform Perspective

Set 3D perspective

## Syntax
```
visual="perspective:[value]"
```

## Values

| Value | CSS Output | Description |
|-------|------------|-------------|
| `none` | `perspective: none` | No perspective |
| `dramatic` | `perspective: 100px` | Dramatic perspective |
| `near` | `perspective: 300px` | Near perspective |
| `normal` | `perspective: 500px` | Normal perspective |
| `midrange` | `perspective: 800px` | Midrange perspective |
| `far` | `perspective: 1000px` | Far perspective |
| `distant` | `perspective: 1200px` | Distant perspective |

## Examples

```html
<div visual="perspective:normal">3D container</div>
```

## Preview

<div space="p-x:big p-b:medium m-t:medium" visual="border-w:thin border:neutral-100 dark:border:neutral-800 rounded:medium">

### 3D Perspective

<div layout="flex col" space="g:medium">
  <p space="m:none" visual="text:neutral-600 dark:text:neutral-400 text-sm"><code>visual="perspective:normal"</code> - Control 3D depth perception for child transforms</p>
<div layout="flex" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div space="p:small" visual="bg:primary text:white rounded:small perspective:normal">normal</div>
  <div space="p:small" visual="bg:primary text:white rounded:small perspective:near">near</div>
  <div space="p:small" visual="bg:primary text:white rounded:small perspective:far">far</div>
</div>
</div>

<details>
<summary>View Code</summary>

```html
<div layout="flex" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div space="p:small" visual="bg:primary text:white rounded:small perspective:normal">normal</div>
  <div space="p:small" visual="bg:primary text:white rounded:small perspective:near">near</div>
  <div space="p:small" visual="bg:primary text:white rounded:small perspective:far">far</div>
</div>
```

</details>

</div>

## Arbitrary Values

Supports custom values using bracket syntax:

```html
<div visual="transform:[custom-value]">Custom</div>
```
