# Border

Set border color for all sides or specific sides

## Syntax
```
visual="border:[color]" | visual="border-{t|b|l|r|x|y}:[color]"
```

## Values

| Value | CSS Output | Description |
|-------|------------|-------------|
| `primary` | `border-color: var(--c-primary); border-style: solid` | Primary color border |
| `gray-300` | `border-color: var(--c-gray-300); border-style: solid` | Light gray border |
| `danger` | `border-color: var(--c-danger); border-style: solid` | Danger/error border |

## Examples

```html
<div visual="border:primary border-w:thin">Primary border</div>
<div visual="border-t:primary border-t-w:regular">Top only</div>
<div visual="border-b:gray-300 border-b-w:thin">Bottom only</div>
<div visual="border-x:primary border-x-w:regular">Left & right</div>
<div visual="border-y:gray-300 border-y-w:thin">Top & bottom</div>
```

## Preview

<div space="p-x:big p-b:medium m-t:medium" visual="border-w:thin border:neutral-100 dark:border:neutral-800 rounded:medium">

### Border Colors

<div layout="flex col" space="g:medium">
  <p space="m:none" visual="text:neutral-600 dark:text:neutral-400 text-sm"><code>visual="border:primary"</code> - Apply border with color on all sides</p>
<div layout="flex" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div space="p:medium" visual="border:primary border-w:regular rounded:small">primary</div>
  <div space="p:medium" visual="border:danger border-w:regular rounded:small">danger</div>
  <div space="p:medium" visual="border:neutral-400 border-w:regular rounded:small">neutral</div>
</div>
</div>

<details>
<summary>View Code</summary>

```html
<div layout="flex" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div space="p:medium" visual="border:primary border-w:regular rounded:small">primary</div>
  <div space="p:medium" visual="border:danger border-w:regular rounded:small">danger</div>
  <div space="p:medium" visual="border:neutral-400 border-w:regular rounded:small">neutral</div>
</div>
```

</details>

</div>

<div space="p-x:big p-b:medium m-t:medium" visual="border-w:thin border:neutral-100 dark:border:neutral-800 rounded:medium">

### Directional Borders

<div layout="flex col" space="g:medium">
  <p space="m:none" visual="text:neutral-600 dark:text:neutral-400 text-sm"><code>visual="border-t:primary"</code> - Apply borders to specific sides</p>
<div layout="flex" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div space="p:medium" visual="border-t:primary border-t-w:regular bg:white dark:bg:neutral-800 rounded:small">top</div>
  <div space="p:medium" visual="border-b:primary border-b-w:regular bg:white dark:bg:neutral-800 rounded:small">bottom</div>
  <div space="p:medium" visual="border-l:primary border-l-w:regular bg:white dark:bg:neutral-800 rounded:small">left</div>
</div>
</div>

<details>
<summary>View Code</summary>

```html
<div layout="flex" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div space="p:medium" visual="border-t:primary border-t-w:regular bg:white dark:bg:neutral-800 rounded:small">top</div>
  <div space="p:medium" visual="border-b:primary border-b-w:regular bg:white dark:bg:neutral-800 rounded:small">bottom</div>
  <div space="p:medium" visual="border-l:primary border-l-w:regular bg:white dark:bg:neutral-800 rounded:small">left</div>
</div>
```

</details>

</div>

## Arbitrary Values

Supports custom values using bracket syntax:

```html
<div visual="border:[custom-value]">Custom</div>
```
