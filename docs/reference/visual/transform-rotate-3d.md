# Transform Rotate 3d

Rotate element in 3D space along X, Y, or Z axis

## Syntax
```
visual="rotate-x:[degrees]" or visual="rotate-y:[degrees]" or visual="rotate-z:[degrees]"
```

## Values

| Value | CSS Output | Description |
|-------|------------|-------------|
| `0` | `transform: rotateX(0deg)` | No rotation |
| `45` | `transform: rotateX(45deg)` | 45° rotation |
| `90` | `transform: rotateX(90deg)` | 90° rotation |
| `180` | `transform: rotateX(180deg)` | 180° rotation |

## Examples

```html
<div visual="perspective:normal"><div visual="rotate-x:45">Tilted forward</div></div>
<div visual="perspective:normal"><div visual="rotate-y:45">Turned sideways</div></div>
<div visual="rotate-z:45">Spun flat</div>
```

## Preview

<div space="p-x:big p-b:medium m-t:medium" visual="border-w:thin border:neutral-100 dark:border:neutral-800 rounded:medium">

### 3D Rotation

<div layout="flex col" space="g:medium">
  <p space="m:none" visual="text:neutral-600 dark:text:neutral-400 text-sm"><code>visual="rotate-y:45"</code> - Rotate elements along X, Y, or Z axis in 3D space</p>
<div layout="flex" space="g:big p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div layout="flex:col" space="g:tiny">
    <span visual="text:neutral-500 text-size:tiny">rotate-x:45</span>
    <div space="p:medium" visual="perspective:normal">
      <div space="p:small" visual="bg:primary text:white rounded:small rotate-x:45">X</div>
    </div>
  </div>
  <div layout="flex:col" space="g:tiny">
    <span visual="text:neutral-500 text-size:tiny">rotate-y:45</span>
    <div space="p:medium" visual="perspective:normal">
      <div space="p:small" visual="bg:success text:white rounded:small rotate-y:45">Y</div>
    </div>
  </div>
  <div layout="flex:col" space="g:tiny">
    <span visual="text:neutral-500 text-size:tiny">rotate-z:45</span>
    <div space="p:medium" visual="perspective:normal">
      <div space="p:small" visual="bg:warning text:black rounded:small rotate-z:45">Z</div>
    </div>
  </div>
</div>
</div>

<details>
<summary>View Code</summary>

```html
<div layout="flex" space="g:big p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div layout="flex:col" space="g:tiny">
    <span visual="text:neutral-500 text-size:tiny">rotate-x:45</span>
    <div space="p:medium" visual="perspective:normal">
      <div space="p:small" visual="bg:primary text:white rounded:small rotate-x:45">X</div>
    </div>
  </div>
  <div layout="flex:col" space="g:tiny">
    <span visual="text:neutral-500 text-size:tiny">rotate-y:45</span>
    <div space="p:medium" visual="perspective:normal">
      <div space="p:small" visual="bg:success text:white rounded:small rotate-y:45">Y</div>
    </div>
  </div>
  <div layout="flex:col" space="g:tiny">
    <span visual="text:neutral-500 text-size:tiny">rotate-z:45</span>
    <div space="p:medium" visual="perspective:normal">
      <div space="p:small" visual="bg:warning text:black rounded:small rotate-z:45">Z</div>
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
