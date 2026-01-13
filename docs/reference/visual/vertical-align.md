# Vertical Align

Set vertical alignment

## Syntax
```
visual="align:[value]"
```

## Values

| Value | CSS Output | Description |
|-------|------------|-------------|
| `baseline` | `vertical-align: baseline` | Baseline |
| `top` | `vertical-align: top` | Top |
| `middle` | `vertical-align: middle` | Middle |
| `bottom` | `vertical-align: bottom` | Bottom |
| `text-top` | `vertical-align: text-top` | Text top |
| `text-bottom` | `vertical-align: text-bottom` | Text bottom |
| `sub` | `vertical-align: sub` | Subscript |
| `super` | `vertical-align: super` | Superscript |

## Examples

```html
<img visual="align:middle">Vertically centered</img>
```

## Preview

<div space="p-x:big p-b:medium m-t:medium" visual="border-w:thin border:neutral-100 dark:border:neutral-800 rounded:medium">

### Vertical Align

<div layout="flex col" space="g:medium">
  <p space="m:none" visual="text:neutral-600 dark:text:neutral-400 text-sm"><code>visual="align:middle"</code> - Align inline elements</p>
<div layout="flex" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div space="p:small" visual="bg:primary text:white rounded:small">top</div>
  <div space="p:small" visual="bg:primary text:white rounded:small">middle</div>
  <div space="p:small" visual="bg:primary text:white rounded:small">bottom</div>
</div>
</div>

<details>
<summary>View Code</summary>

```html
<div layout="flex" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div space="p:small" visual="bg:primary text:white rounded:small">top</div>
  <div space="p:small" visual="bg:primary text:white rounded:small">middle</div>
  <div space="p:small" visual="bg:primary text:white rounded:small">bottom</div>
</div>
```

</details>

</div>
