# Text Wrap

Control text wrapping

## Syntax
```
visual="[wrap-value]"
```

## Values

| Value | CSS Output | Description |
|-------|------------|-------------|
| `text-wrap` | `text-wrap: wrap` | Wrap text |
| `text-nowrap` | `text-wrap: nowrap` | No wrap |
| `text-balance` | `text-wrap: balance` | Balanced wrap |
| `text-pretty` | `text-wrap: pretty` | Pretty wrap |

## Examples

```html
<h1 visual="text-balance">Balanced heading</h1>
```

## Preview

<div space="p-x:big p-b:medium m-t:medium" visual="border-w:thin border:neutral-100 dark:border:neutral-800 rounded:medium">

### Text Wrap

<div layout="flex col" space="g:medium">
  <p space="m:none" visual="text:neutral-600 dark:text:neutral-400 text-sm"><code>visual="text-balance"</code> - Control line wrapping</p>
<div layout="flex col" space="g:small p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div space="p:small w:[200px]" visual="bg:primary text:white rounded:small text-wrap">This text will wrap normally when needed</div>
  <div space="p:small w:[200px]" visual="bg:success text:white rounded:small text-nowrap">This text won't wrap at all</div>
  <div space="p:small w:[200px]" visual="bg:warning text:black rounded:small text-balance">This heading text is balanced</div>
</div>
</div>

<details>
<summary>View Code</summary>

```html
<div layout="flex col" space="g:small p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div space="p:small w:[200px]" visual="bg:primary text:white rounded:small text-wrap">This text will wrap normally when needed</div>
  <div space="p:small w:[200px]" visual="bg:success text:white rounded:small text-nowrap">This text won't wrap at all</div>
  <div space="p:small w:[200px]" visual="bg:warning text:black rounded:small text-balance">This heading text is balanced</div>
</div>
```

</details>

</div>
