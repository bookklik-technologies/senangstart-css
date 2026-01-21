# Gradient To

Set gradient end color

## Syntax
```
visual="to:[color]"
```

## Values

| Value | CSS Output | Description |
|-------|------------|-------------|
| `purple-500` | `--tw-gradient-to: var(--c-purple-500)` | End at purple |
| `pink-500` | `--tw-gradient-to: var(--c-pink-500)` | End at pink |

## Examples

```html
<div visual="bg-image:gradient-to-r from:blue-500 to:purple-500">Blue to purple</div>
```

## Preview

<div space="p-x:big p-b:medium m-t:medium" visual="border-w:thin border:neutral-100 dark:border:neutral-800 rounded:medium">

### Gradient To

<div layout="flex col" space="g:medium">
  <p space="m:none" visual="text:neutral-600 dark:text:neutral-400 text-sm"><code>visual="to:purple-500"</code> - Set the ending color of a gradient</p>
<div layout="flex" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div space="p:medium" visual="bg-image:gradient-to-r from:blue-500 to:purple-500 text:white rounded:small">to:purple-500</div>
  <div space="p:medium" visual="bg-image:gradient-to-r from:blue-500 to:pink-500 text:white rounded:small">to:pink-500</div>
</div>
</div>

<details>
<summary>View Code</summary>

```html
<div layout="flex" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div space="p:medium" visual="bg-image:gradient-to-r from:blue-500 to:purple-500 text:white rounded:small">to:purple-500</div>
  <div space="p:medium" visual="bg-image:gradient-to-r from:blue-500 to:pink-500 text:white rounded:small">to:pink-500</div>
</div>
```

</details>

</div>

## Arbitrary Values

Supports custom values using bracket syntax:

```html
<div visual="gradient:[custom-value]">Custom</div>
```
