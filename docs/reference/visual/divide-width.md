# Divide Width

Set divider width

## Syntax
```
visual="divide-w:[value]" | visual="divide-{x|y}-w:[value]"
```

## Values

| Value | CSS Output | Description |
|-------|------------|-------------|
| `none` | `border-width: var(--s-none)` | No divider (0px) |
| `thin` | `border-width: var(--s-thin)` | Thin divider (1px) |
| `regular` | `border-width: var(--s-regular)` | Standard divider (2px) |
| `thick` | `border-width: var(--s-thick)` | Thick divider (3px) |

## Examples

```html
<div visual="divide:gray-300 divide-w:thin">
<div visual="divide:gray-300 divide-w:regular">
<div visual="divide:gray-300 divide-w:thick">
<div visual="divide-y:primary divide-y-w:regular">
<div visual="divide-x:primary divide-x-w:thin">
```

## Preview

<div space="p-x:big p-b:medium m-t:medium" visual="border-w:thin border:neutral-100 dark:border:neutral-800 rounded:medium">

### Divide Widths

<div layout="flex col" space="g:medium">
  <p space="m:none" visual="text:neutral-600 dark:text:neutral-400 text-sm"><code>visual="divide-w:regular"</code> - Different divider width options</p>
<div layout="flex col" space="p:medium g:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div layout="flex" visual="bg:white dark:bg:neutral-800 rounded:small divide:neutral-500 divide-x-w:thin">
    <div space="p:medium">thin (1px)</div>
    <div space="p:medium">thin (1px)</div>
    <div space="p:medium">thin (1px)</div>
  </div>
  <div layout="flex" visual="bg:white dark:bg:neutral-800 rounded:small divide:neutral-500 divide-x-w:regular">
    <div space="p:medium">regular (2px)</div>
    <div space="p:medium">regular (2px)</div>
    <div space="p:medium">regular (2px)</div>
  </div>
  <div layout="flex" visual="bg:white dark:bg:neutral-800 rounded:small divide:neutral-500 divide-x-w:thick">
    <div space="p:medium">thick (3px)</div>
    <div space="p:medium">thick (3px)</div>
    <div space="p:medium">thick (3px)</div>
  </div>
</div>
</div>

<details>
<summary>View Code</summary>

```html
<div layout="flex col" space="p:medium g:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div layout="flex" visual="bg:white dark:bg:neutral-800 rounded:small divide:neutral-500 divide-x-w:thin">
    <div space="p:medium">thin (1px)</div>
    <div space="p:medium">thin (1px)</div>
    <div space="p:medium">thin (1px)</div>
  </div>
  <div layout="flex" visual="bg:white dark:bg:neutral-800 rounded:small divide:neutral-500 divide-x-w:regular">
    <div space="p:medium">regular (2px)</div>
    <div space="p:medium">regular (2px)</div>
    <div space="p:medium">regular (2px)</div>
  </div>
  <div layout="flex" visual="bg:white dark:bg:neutral-800 rounded:small divide:neutral-500 divide-x-w:thick">
    <div space="p:medium">thick (3px)</div>
    <div space="p:medium">thick (3px)</div>
    <div space="p:medium">thick (3px)</div>
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
