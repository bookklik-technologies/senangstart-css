# Transform Translate Z

Translate element along Z axis (depth) in 3D space

## Syntax
```
visual="translate-z:[value]"
```

## Values

| Value | CSS Output | Description |
|-------|------------|-------------|
| `0` | `transform: translateZ(0)` | No Z translation |
| `near` | `transform: translateZ(50px)` | Move near (forward) |
| `far` | `transform: translateZ(-50px)` | Move far (backward) |

## Examples

```html
<div visual="perspective:normal"><div visual="translate-z:near">Closer</div></div>
```

## Preview

<div space="p-x:big p-b:medium m-t:medium" visual="border-w:thin border:neutral-100 dark:border:neutral-800 rounded:medium">

### Translate Z (3D Depth)

<div layout="flex col" space="g:medium">
  <p space="m:none" visual="text:neutral-600 dark:text:neutral-400 text-sm"><code>visual="translate-z:near"</code> - Move elements forward or backward in 3D space</p>
<div layout="flex" space="g:big p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div layout="flex:col" space="g:tiny">
    <span visual="text:neutral-500 text-size:tiny">translate-z:far</span>
    <div space="p:medium" visual="perspective:near">
      <div space="p:small" visual="bg:primary text:white rounded:small translate-z:far">far</div>
    </div>
  </div>
  <div layout="flex:col" space="g:tiny">
    <span visual="text:neutral-500 text-size:tiny">translate-z:0</span>
    <div space="p:medium" visual="perspective:near">
      <div space="p:small" visual="bg:success text:white rounded:small translate-z:0">0</div>
    </div>
  </div>
  <div layout="flex:col" space="g:tiny">
    <span visual="text:neutral-500 text-size:tiny">translate-z:near</span>
    <div space="p:medium" visual="perspective:near">
      <div space="p:small" visual="bg:warning text:black rounded:small translate-z:near">near</div>
    </div>
  </div>
</div>
</div>

<details>
<summary>View Code</summary>

```html
<div layout="flex" space="g:big p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div layout="flex:col" space="g:tiny">
    <span visual="text:neutral-500 text-size:tiny">translate-z:far</span>
    <div space="p:medium" visual="perspective:near">
      <div space="p:small" visual="bg:primary text:white rounded:small translate-z:far">far</div>
    </div>
  </div>
  <div layout="flex:col" space="g:tiny">
    <span visual="text:neutral-500 text-size:tiny">translate-z:0</span>
    <div space="p:medium" visual="perspective:near">
      <div space="p:small" visual="bg:success text:white rounded:small translate-z:0">0</div>
    </div>
  </div>
  <div layout="flex:col" space="g:tiny">
    <span visual="text:neutral-500 text-size:tiny">translate-z:near</span>
    <div space="p:medium" visual="perspective:near">
      <div space="p:small" visual="bg:warning text:black rounded:small translate-z:near">near</div>
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
