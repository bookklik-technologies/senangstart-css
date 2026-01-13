# Container

Create a centered container with max-width

## Syntax
```
layout="container"
```

## Values

| Value | CSS Output | Description |
|-------|------------|-------------|
| `container` | `width: 100%; margin-left: auto; margin-right: auto` | Centered container |

## Examples

```html
<div layout="container">Centered content</div>
```

## Preview

<div space="p-x:big p-b:medium m-t:medium" visual="border-w:thin border:neutral-100 dark:border:neutral-800 rounded:medium">

### Container

<div layout="flex col" space="g:medium">
  <p space="m:none" visual="text:neutral-600 dark:text:neutral-400 text-sm"><code>layout="container"</code> - Centered container with max-width</p>
<div visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium" space="p:small">
  <div layout="container" space="p:medium" visual="bg:primary text:white rounded:small" layout="text:center">Centered Container</div>
</div>
</div>

<details>
<summary>View Code</summary>

```html
<div visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium" space="p:small">
  <div layout="container" space="p:medium" visual="bg:primary text:white rounded:small" layout="text:center">Centered Container</div>
</div>
```

</details>

</div>
