# Gradient From

Set gradient start color

## Syntax
```
visual="from:[color]"
```

## Values

| Value | CSS Output | Description |
|-------|------------|-------------|
| `primary` | `--tw-gradient-from: var(--c-primary); --tw-gradient-to: transparent; --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to)` | Start from primary |
| `blue-500` | `--tw-gradient-from: var(--c-blue-500); --tw-gradient-to: transparent; --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to)` | Start from blue |

## Examples

```html
<div visual="bg-image:gradient-to-r from:blue-500 to:purple-500">Gradient</div>
```

## Preview

<div space="p-x:big p-b:medium m-t:medium" visual="border-w:thin border:neutral-100 dark:border:neutral-800 rounded:medium">

### Gradient From

<div layout="flex col" space="g:medium">
  <p space="m:none" visual="text:neutral-600 dark:text:neutral-400 text-sm"><code>visual="from:blue-500"</code> - Set the starting color of a gradient</p>
<div layout="flex" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div space="p:medium" visual="bg-image:gradient-to-r from:blue-500 to:purple-500 text:white rounded:small">from:blue-500 to:purple-500</div>
  <div space="p:medium" visual="bg-image:gradient-to-r from:emerald-500 to:blue-500 text:white rounded:small">from:emerald-500 to:blue-500</div>
</div>
</div>

<details>
<summary>View Code</summary>

```html
<div layout="flex" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div space="p:medium" visual="bg-image:gradient-to-r from:blue-500 to:purple-500 text:white rounded:small">from:blue-500 to:purple-500</div>
  <div space="p:medium" visual="bg-image:gradient-to-r from:emerald-500 to:blue-500 text:white rounded:small">from:emerald-500 to:blue-500</div>
</div>
```

</details>

</div>

## Arbitrary Values

Supports custom values using bracket syntax:

```html
<div visual="gradient:[custom-value]">Custom</div>
```
