# Outline Style

Set outline style

## Syntax
```
visual="outline-style:[value]"
```

## Values

| Value | CSS Output | Description |
|-------|------------|-------------|
| `solid` | `outline-style: solid` | Solid outline |
| `dashed` | `outline-style: dashed` | Dashed outline |
| `dotted` | `outline-style: dotted` | Dotted outline |
| `double` | `outline-style: double` | Double outline |
| `none` | `outline-style: none` | No outline |

## Examples

```html
<button visual="outline:primary outline-style:dashed">Dashed outline</button>
```

## Preview

<div space="p-x:big p-b:medium m-t:medium" visual="border-w:thin border:neutral-100 dark:border:neutral-800 rounded:medium">

### Outline Styles

<div layout="flex col" space="g:medium">
  <p space="m:none" visual="text:neutral-600 dark:text:neutral-400 text-sm"><code>visual="outline-style:dashed"</code> - Different outline style options</p>
<div layout="flex" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div space="p:medium" visual="outline:primary outline-w:regular outline-style:solid rounded:small">solid</div>
  <div space="p:medium" visual="outline:primary outline-w:regular outline-style:dashed rounded:small">dashed</div>
  <div space="p:medium" visual="outline:primary outline-w:regular outline-style:dotted rounded:small">dotted</div>
</div>
</div>

<details>
<summary>View Code</summary>

```html
<div layout="flex" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div space="p:medium" visual="outline:primary outline-w:regular outline-style:solid rounded:small">solid</div>
  <div space="p:medium" visual="outline:primary outline-w:regular outline-style:dashed rounded:small">dashed</div>
  <div space="p:medium" visual="outline:primary outline-w:regular outline-style:dotted rounded:small">dotted</div>
</div>
```

</details>

</div>
