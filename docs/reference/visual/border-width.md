# Border Width

Set border width for all sides or specific sides

## Syntax
```
visual="border-w:[value]" | visual="border-{t|b|l|r|x|y}-w:[value]"
```

## Values

| Value | CSS Output | Description |
|-------|------------|-------------|
| `none` | `border-width: var(--s-none)` | No border (0px) |
| `thin` | `border-width: var(--s-thin)` | Thin border (1px) |
| `regular` | `border-width: var(--s-regular)` | Standard border (2px) |
| `thick` | `border-width: var(--s-thick)` | Thick border (3px) |

## Examples

```html
<div visual="border:gray-300 border-w:thin">Thin 1px border</div>
<div visual="border:gray-300 border-w:regular">Standard 2px border</div>
<div visual="border:gray-300 border-w:thick">Thick 3px border</div>
<div visual="border-b:primary border-b-w:regular">Bottom border only</div>
<div visual="border-x:primary border-x-w:thin">Horizontal borders</div>
```

## Preview

<div space="p-x:big p-b:medium m-t:medium" visual="border-w:thin border:neutral-100 dark:border:neutral-800 rounded:medium">

### Border Widths

<div layout="flex col" space="g:medium">
  <p space="m:none" visual="text:neutral-600 dark:text:neutral-400 text-sm"><code>visual="border-w:regular"</code> - Different border width options</p>
<div layout="flex" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div space="p:medium" visual="border:neutral-500 border-w:thin rounded:small bg:white dark:bg:neutral-800">thin</div>
  <div space="p:medium" visual="border:neutral-500 border-w:regular rounded:small bg:white dark:bg:neutral-800">regular</div>
  <div space="p:medium" visual="border:neutral-500 border-w:thick rounded:small bg:white dark:bg:neutral-800">thick</div>
</div>
</div>

<details>
<summary>View Code</summary>

```html
<div layout="flex" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div space="p:medium" visual="border:neutral-500 border-w:thin rounded:small bg:white dark:bg:neutral-800">thin</div>
  <div space="p:medium" visual="border:neutral-500 border-w:regular rounded:small bg:white dark:bg:neutral-800">regular</div>
  <div space="p:medium" visual="border:neutral-500 border-w:thick rounded:small bg:white dark:bg:neutral-800">thick</div>
</div>
```

</details>

</div>

## Arbitrary Values

Supports custom values using bracket syntax:

```html
<div visual="border:[custom-value]">Custom</div>
```
