# Divide Reverse

Reverse border side for flex-reverse

## Syntax
```
visual="divide-{x|y}:reverse"
```

## Values

| Value | CSS Output | Description |
|-------|------------|-------------|
| `divide-x:reverse` | `--ss-divide-x-reverse: 1` | Reverse X-axis divider |
| `divide-y:reverse` | `--ss-divide-y-reverse: 1` | Reverse Y-axis divider |

## Examples

```html
<div layout="flex flex-row-reverse" visual="divide-x:gray-300 divide-x-w:thin divide-x:reverse">
<div layout="flex flex-col-reverse" visual="divide-y:gray-300 divide-y-w:thin divide-y:reverse">
```

## Preview

<div space="p-x:big p-b:medium m-t:medium" visual="border-w:thin border:neutral-100 dark:border:neutral-800 rounded:medium">

### Reverse vs Normal

<div layout="flex col" space="g:medium">
  <p space="m:none" visual="text:neutral-600 dark:text:neutral-400 text-sm"><code>visual="divide-x:reverse"</code> - Comparison of normal flow vs reverse flow dividers</p>
<div layout="flex col" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div layout="flex" space="p:medium" visual="bg:white dark:bg:neutral-800 rounded:small divide:neutral-500 divide-x-w:regular">
    <div space="p:small">1</div>
    <div space="p:small">2</div>
    <div space="p:small">3</div>
  </div>
  <div layout="flex row-reverse" space="p:medium" visual="bg:white dark:bg:neutral-800 rounded:small divide:neutral-500 divide-x-w:regular divide-x:reverse">
    <div space="p:small">1(R)</div>
    <div space="p:small">2(R)</div>
    <div space="p:small">3(R)</div>
  </div>
</div>
</div>

<details>
<summary>View Code</summary>

```html
<div layout="flex col" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div layout="flex" space="p:medium" visual="bg:white dark:bg:neutral-800 rounded:small divide:neutral-500 divide-x-w:regular">
    <div space="p:small">1</div>
    <div space="p:small">2</div>
    <div space="p:small">3</div>
  </div>
  <div layout="flex row-reverse" space="p:medium" visual="bg:white dark:bg:neutral-800 rounded:small divide:neutral-500 divide-x-w:regular divide-x:reverse">
    <div space="p:small">1(R)</div>
    <div space="p:small">2(R)</div>
    <div space="p:small">3(R)</div>
  </div>
</div>
```

</details>

</div>
