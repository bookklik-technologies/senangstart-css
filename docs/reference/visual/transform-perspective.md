# Transform Perspective

Set 3D perspective on container (apply to parent of transformed elements)

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
<div visual="perspective:normal"><div visual="rotate-y:45">3D rotated</div></div>
```

## Preview

<div space="p-x:big p-b:medium m-t:medium" visual="border-w:thin border:neutral-100 dark:border:neutral-800 rounded:medium">

### 3D Perspective

<div layout="flex col" space="g:medium">
  <p space="m:none" visual="text:neutral-600 dark:text:neutral-400 text-sm"><code>visual="perspective:normal"</code> - Control 3D depth perception - apply to parent, transform children</p>
<div layout="flex" space="g:big p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div layout="flex col" space="g:tiny">
    <span visual="text:neutral-500 text-size:tiny">dramatic</span>
    <div space="p:medium" visual="perspective:dramatic">
      <div space="p:small" visual="bg:primary text:white rounded:small rotate-y:45">3D</div>
    </div>
  </div>
  <div layout="flex col" space="g:tiny">
    <span visual="text:neutral-500 text-size:tiny">normal</span>
    <div space="p:medium" visual="perspective:normal">
      <div space="p:small" visual="bg:success text:white rounded:small rotate-y:45">3D</div>
    </div>
  </div>
  <div layout="flex col" space="g:tiny">
    <span visual="text:neutral-500 text-size:tiny">far</span>
    <div space="p:medium" visual="perspective:far">
      <div space="p:small" visual="bg:warning text:black rounded:small rotate-y:45">3D</div>
    </div>
  </div>
</div>
</div>

<details>
<summary>View Code</summary>

```html
<div layout="flex" space="g:big p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div layout="flex col" space="g:tiny">
    <span visual="text:neutral-500 text-size:tiny">dramatic</span>
    <div space="p:medium" visual="perspective:dramatic">
      <div space="p:small" visual="bg:primary text:white rounded:small rotate-y:45">3D</div>
    </div>
  </div>
  <div layout="flex col" space="g:tiny">
    <span visual="text:neutral-500 text-size:tiny">normal</span>
    <div space="p:medium" visual="perspective:normal">
      <div space="p:small" visual="bg:success text:white rounded:small rotate-y:45">3D</div>
    </div>
  </div>
  <div layout="flex col" space="g:tiny">
    <span visual="text:neutral-500 text-size:tiny">far</span>
    <div space="p:medium" visual="perspective:far">
      <div space="p:small" visual="bg:warning text:black rounded:small rotate-y:45">3D</div>
    </div>
  </div>
</div>
```

</details>

</div>

## Arbitrary Values

Supports custom values using bracket syntax:

```html
<div visual="transform:[custom-value]">Custom</div>
```
