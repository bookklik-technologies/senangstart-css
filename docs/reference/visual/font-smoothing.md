# Font Smoothing

Control font smoothing

## Syntax
```
visual="[smoothing-value]"
```

## Values

| Value | CSS Output | Description |
|-------|------------|-------------|
| `antialiased` | `-webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale` | Antialiased |
| `subpixel-antialiased` | `-webkit-font-smoothing: auto; -moz-osx-font-smoothing: auto` | Subpixel antialiased |

## Examples

```html
<body visual="antialiased">Smooth fonts</body>
```

## Preview

<div space="p-x:big p-b:medium m-t:medium" visual="border-w:thin border:neutral-100 dark:border:neutral-800 rounded:medium">

### Font Smoothing

<div layout="flex col" space="g:medium">
  <p space="m:none" visual="text:neutral-600 dark:text:neutral-400 text-sm"><code>visual="antialiased"</code> - Control text rendering</p>
<div layout="flex" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div space="p:small" visual="bg:primary text:white rounded:small">antialiased</div>
  <div space="p:small" visual="bg:primary text:white rounded:small">subpixel</div>
</div>
</div>

<details>
<summary>View Code</summary>

```html
<div layout="flex" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div space="p:small" visual="bg:primary text:white rounded:small">antialiased</div>
  <div space="p:small" visual="bg:primary text:white rounded:small">subpixel</div>
</div>
```

</details>

</div>
