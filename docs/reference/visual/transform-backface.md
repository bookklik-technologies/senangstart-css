# Transform Backface

Control visibility of element back side when rotated in 3D

## Syntax
```
visual="backface:[value]"
```

## Values

| Value | CSS Output | Description |
|-------|------------|-------------|
| `visible` | `backface-visibility: visible` | Backface visible |
| `hidden` | `backface-visibility: hidden` | Backface hidden |

## Examples

```html
<div visual="backface:hidden rotate-y:180">Hidden when flipped</div>
```

## Preview

<div space="p-x:big p-b:medium m-t:medium" visual="border-w:thin border:neutral-100 dark:border:neutral-800 rounded:medium">

### Backface Visibility

<div layout="flex col" space="g:medium">
  <p space="m:none" visual="text:neutral-600 dark:text:neutral-400 text-sm"><code>visual="backface:hidden"</code> - Show or hide backside when rotated 180°</p>
<div layout="flex" space="g:big p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div layout="flex:col" space="g:tiny">
    <span visual="text:neutral-500 text-size:tiny">visible + rotate-y:180</span>
    <div space="p:medium" visual="perspective:normal">
      <div space="p:small" visual="bg:primary text:white rounded:small backface:visible rotate-y:180">👀</div>
    </div>
  </div>
  <div layout="flex:col" space="g:tiny">
    <span visual="text:neutral-500 text-size:tiny">hidden + rotate-y:180</span>
    <div space="p:medium" visual="perspective:normal">
      <div space="p:small" visual="bg:danger text:white rounded:small backface:hidden rotate-y:180">🙈</div>
    </div>
  </div>
</div>
</div>

<details>
<summary>View Code</summary>

```html
<div layout="flex" space="g:big p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div layout="flex:col" space="g:tiny">
    <span visual="text:neutral-500 text-size:tiny">visible + rotate-y:180</span>
    <div space="p:medium" visual="perspective:normal">
      <div space="p:small" visual="bg:primary text:white rounded:small backface:visible rotate-y:180">👀</div>
    </div>
  </div>
  <div layout="flex:col" space="g:tiny">
    <span visual="text:neutral-500 text-size:tiny">hidden + rotate-y:180</span>
    <div space="p:medium" visual="perspective:normal">
      <div space="p:small" visual="bg:danger text:white rounded:small backface:hidden rotate-y:180">🙈</div>
    </div>
  </div>
</div>
```

</details>

</div>
