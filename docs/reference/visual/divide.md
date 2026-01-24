# Divide

Add borders between child elements

## Syntax
```
visual="divide:[color]" | visual="divide-{x|y}:[color]" | visual="divide-{x|y}:reverse"
```

## Values

| Value | CSS Output | Description |
|-------|------------|-------------|
| `primary` | `border-color: var(--c-primary); border-style: solid` | Primary color divider |
| `gray-300` | `border-color: var(--c-gray-300); border-style: solid` | Light gray divider |
| `danger` | `border-color: var(--c-danger); border-style: solid` | Danger/error divider |

## Examples

```html
<div visual="divide:primary divide-w:thin">
<div visual="divide-y:gray-300 divide-y-w:regular">
<div visual="divide-x:danger divide-x-w:thin">
<div layout="flex flex-row-reverse" visual="divide-x:primary divide-x-w:thin divide-x:reverse">
```

## Preview

<div space="p-x:big p-b:medium m-t:medium" visual="border-w:thin border:neutral-100 dark:border:neutral-800 rounded:medium">

### Divide Colors

<div layout="flex col" space="g:medium">
  <p space="m:none" visual="text:neutral-600 dark:text:neutral-400 text-sm"><code>visual="divide:primary"</code> - Add dividers between flex/grid items</p>
<div layout="flex col" space="p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium divide-y-w:thin divide:primary">
  <div space="p:medium" visual="bg:white dark:bg:neutral-800">Item 1</div>
  <div space="p:medium" visual="bg:white dark:bg:neutral-800">Item 2</div>
  <div space="p:medium" visual="bg:white dark:bg:neutral-800">Item 3</div>
</div>
<div layout="flex" space="p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium divide:red-500 divide-x-w:thin">
  <div space="p:medium" visual="bg:white dark:bg:neutral-800">Item 1</div>
  <div space="p:medium" visual="bg:white dark:bg:neutral-800">Item 2</div>
  <div space="p:medium" visual="bg:white dark:bg:neutral-800">Item 3</div>
</div>
</div>

<details>
<summary>View Code</summary>

```html
<div layout="flex col" space="p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium divide-y-w:thin divide:primary">
  <div space="p:medium" visual="bg:white dark:bg:neutral-800">Item 1</div>
  <div space="p:medium" visual="bg:white dark:bg:neutral-800">Item 2</div>
  <div space="p:medium" visual="bg:white dark:bg:neutral-800">Item 3</div>
</div>
<div layout="flex" space="p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium divide:red-500 divide-x-w:thin">
  <div space="p:medium" visual="bg:white dark:bg:neutral-800">Item 1</div>
  <div space="p:medium" visual="bg:white dark:bg:neutral-800">Item 2</div>
  <div space="p:medium" visual="bg:white dark:bg:neutral-800">Item 3</div>
</div>
```

</details>

</div>

<div space="p-x:big p-b:medium m-t:medium" visual="border-w:thin border:neutral-100 dark:border:neutral-800 rounded:medium">

### Directional Divides

<div layout="flex col" space="g:medium">
  <p space="m:none" visual="text:neutral-600 dark:text:neutral-400 text-sm"><code>visual="divide-y:gray-300"</code> - Divide on specific axes</p>
<div layout="flex" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div layout="flex col" space="p:medium" visual="bg:white dark:bg:neutral-800 rounded:small divide-y:gray-300 divide-y-w:thin">
    <div space="p:small">Item 1</div>
    <div space="p:small">Item 2</div>
    <div space="p:small">Item 3</div>
  </div>
  <div layout="flex" space="p:medium" visual="bg:white dark:bg:neutral-800 rounded:small divide-x:primary divide-x-w:thin">
    <div space="p:small">Item 1</div>
    <div space="p:small">Item 2</div>
    <div space="p:small">Item 3</div>
  </div>
</div>
</div>

<details>
<summary>View Code</summary>

```html
<div layout="flex" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div layout="flex col" space="p:medium" visual="bg:white dark:bg:neutral-800 rounded:small divide-y:gray-300 divide-y-w:thin">
    <div space="p:small">Item 1</div>
    <div space="p:small">Item 2</div>
    <div space="p:small">Item 3</div>
  </div>
  <div layout="flex" space="p:medium" visual="bg:white dark:bg:neutral-800 rounded:small divide-x:primary divide-x-w:thin">
    <div space="p:small">Item 1</div>
    <div space="p:small">Item 2</div>
    <div space="p:small">Item 3</div>
  </div>
</div>
```

</details>

</div>

## Arbitrary Values

Supports custom values using bracket syntax:

```html
<div visual="divide:[custom-value]">Custom</div>
```
