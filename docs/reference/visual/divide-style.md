# Divide Style

Set divider style

## Syntax
```
visual="divide-style:[value]"
```

## Values

| Value | CSS Output | Description |
|-------|------------|-------------|
| `solid` | `border-style: solid` | Solid divider |
| `dashed` | `border-style: dashed` | Dashed divider |
| `dotted` | `border-style: dotted` | Dotted divider |
| `double` | `border-style: double` | Double divider |
| `none` | `border-style: none` | No divider |

## Examples

```html
<div visual="divide:gray-300 divide-style:dashed">
<div visual="divide:gray-300 divide-style:dotted">
<div visual="divide:gray-300 divide-style:double">
```

## Preview

<div space="p-x:big p-b:medium m-t:medium" visual="border-w:thin border:neutral-100 dark:border:neutral-800 rounded:medium">

### Divide Styles

<div layout="flex col" space="g:medium">
  <p space="m:none" visual="text:neutral-600 dark:text:neutral-400 text-sm"><code>visual="divide-style:dashed"</code> - Different divider style options</p>
<div layout="flex col" space="p:medium g:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div layout="flex" visual="bg:white dark:bg:neutral-800 rounded:small divide:neutral-500 divide-x-w:regular divide-style:solid border:neutral-500 border-w:regular border-style:solid">
    <div space="p:medium">solid</div>
    <div space="p:medium">solid</div>
    <div space="p:medium">solid</div>
  </div>
  <div layout="flex" visual="bg:white dark:bg:neutral-800 rounded:small divide:neutral-500 divide-x-w:regular divide-style:dashed border:neutral-500 border-w:regular border-style:dashed">
    <div space="p:medium">dashed</div>
    <div space="p:medium">dashed</div>
    <div space="p:medium">dashed</div>
  </div>
  <div layout="flex" visual="bg:white dark:bg:neutral-800 rounded:small divide:neutral-500 divide-x-w:regular divide-style:dotted border:neutral-500 border-w:regular border-style:dotted">
    <div space="p:medium">dotted</div>
    <div space="p:medium">dotted</div>
    <div space="p:medium">dotted</div>
  </div>
</div>
</div>

<details>
<summary>View Code</summary>

```html
<div layout="flex col" space="p:medium g:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div layout="flex" visual="bg:white dark:bg:neutral-800 rounded:small divide:neutral-500 divide-x-w:regular divide-style:solid border:neutral-500 border-w:regular border-style:solid">
    <div space="p:medium">solid</div>
    <div space="p:medium">solid</div>
    <div space="p:medium">solid</div>
  </div>
  <div layout="flex" visual="bg:white dark:bg:neutral-800 rounded:small divide:neutral-500 divide-x-w:regular divide-style:dashed border:neutral-500 border-w:regular border-style:dashed">
    <div space="p:medium">dashed</div>
    <div space="p:medium">dashed</div>
    <div space="p:medium">dashed</div>
  </div>
  <div layout="flex" visual="bg:white dark:bg:neutral-800 rounded:small divide:neutral-500 divide-x-w:regular divide-style:dotted border:neutral-500 border-w:regular border-style:dotted">
    <div space="p:medium">dotted</div>
    <div space="p:medium">dotted</div>
    <div space="p:medium">dotted</div>
  </div>
</div>
```

</details>

</div>
