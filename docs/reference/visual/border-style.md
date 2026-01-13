# Border Style

Set border style

## Syntax
```
visual="border-style:[value]"
```

## Values

| Value | CSS Output | Description |
|-------|------------|-------------|
| `solid` | `border-style: solid` | Solid border |
| `dashed` | `border-style: dashed` | Dashed border |
| `dotted` | `border-style: dotted` | Dotted border |
| `double` | `border-style: double` | Double border |
| `none` | `border-style: none` | No border |

## Examples

```html
<div visual="border:gray-300 border-style:dashed">Dashed border</div>
```

## Preview

<div space="p-x:big p-b:medium m-t:medium" visual="border-w:thin border:neutral-100 dark:border:neutral-800 rounded:medium">

### Border Styles

<div layout="flex col" space="g:medium">
  <p space="m:none" visual="text:neutral-600 dark:text:neutral-400 text-sm"><code>visual="border-style:dashed"</code> - Different border style options</p>
<div layout="flex" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div space="p:medium" visual="border:neutral-500 border-w:regular border-style:solid rounded:small bg:white dark:bg:neutral-800">solid</div>
  <div space="p:medium" visual="border:neutral-500 border-w:regular border-style:dashed rounded:small bg:white dark:bg:neutral-800">dashed</div>
  <div space="p:medium" visual="border:neutral-500 border-w:regular border-style:dotted rounded:small bg:white dark:bg:neutral-800">dotted</div>
</div>
</div>

<details>
<summary>View Code</summary>

```html
<div layout="flex" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div space="p:medium" visual="border:neutral-500 border-w:regular border-style:solid rounded:small bg:white dark:bg:neutral-800">solid</div>
  <div space="p:medium" visual="border:neutral-500 border-w:regular border-style:dashed rounded:small bg:white dark:bg:neutral-800">dashed</div>
  <div space="p:medium" visual="border:neutral-500 border-w:regular border-style:dotted rounded:small bg:white dark:bg:neutral-800">dotted</div>
</div>
```

</details>

</div>
