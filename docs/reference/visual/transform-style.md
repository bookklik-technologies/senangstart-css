# Transform Style

Preserve 3D space for nested transformed elements

## Syntax
```
visual="transform-style:[value]"
```

## Values

| Value | CSS Output | Description |
|-------|------------|-------------|
| `flat` | `transform-style: flat` | Flatten 3D children |
| `preserve-3d` | `transform-style: preserve-3d` | Preserve 3D depth |

## Examples

```html
<div visual="transform-style:preserve-3d">Nested 3D transforms preserved</div>
```

## Preview

<div space="p-x:big p-b:medium m-t:medium" visual="border-w:thin border:neutral-100 dark:border:neutral-800 rounded:medium">

### Transform Style

<div layout="flex col" space="g:medium">
  <p space="m:none" visual="text:neutral-600 dark:text:neutral-400 text-sm"><code>visual="transform-style:preserve-3d"</code> - Flat or preserve 3D for nested transforms</p>
<div layout="flex" space="g:big p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div layout="flex col" space="g:tiny">
    <span visual="text:neutral-500 text-size:tiny">flat</span>
    <div space="p:medium" visual="perspective:normal transform-style:flat rotate-x:20">
      <div space="p:small" visual="bg:primary text:white rounded:small rotate-y:45">flat</div>
    </div>
  </div>
  <div layout="flex col" space="g:tiny">
    <span visual="text:neutral-500 text-size:tiny">preserve-3d</span>
    <div space="p:medium" visual="perspective:normal transform-style:preserve-3d rotate-x:20">
      <div space="p:small" visual="bg:success text:white rounded:small rotate-y:45">3D</div>
    </div>
  </div>
</div>
</div>

<details>
<summary>View Code</summary>

```html
<div layout="flex" space="g:big p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div layout="flex col" space="g:tiny">
    <span visual="text:neutral-500 text-size:tiny">flat</span>
    <div space="p:medium" visual="perspective:normal transform-style:flat rotate-x:20">
      <div space="p:small" visual="bg:primary text:white rounded:small rotate-y:45">flat</div>
    </div>
  </div>
  <div layout="flex col" space="g:tiny">
    <span visual="text:neutral-500 text-size:tiny">preserve-3d</span>
    <div space="p:medium" visual="perspective:normal transform-style:preserve-3d rotate-x:20">
      <div space="p:small" visual="bg:success text:white rounded:small rotate-y:45">3D</div>
    </div>
  </div>
</div>
```

</details>

</div>
