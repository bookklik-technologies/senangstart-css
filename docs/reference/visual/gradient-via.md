# Gradient Via

Set gradient middle color

## Syntax
```
visual="via:[color]"
```

## Values

| Value | CSS Output | Description |
|-------|------------|-------------|
| `purple-500` | `--tw-gradient-via: var(--c-purple-500); --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-via), var(--tw-gradient-to)` | Via purple |

## Examples

```html
<div visual="bg-image:gradient-to-r from:blue-500 via:purple-500 to:pink-500">Three-color gradient</div>
```

## Preview

<div space="p-x:big p-b:medium m-t:medium" visual="border-w:thin border:neutral-100 dark:border:neutral-800 rounded:medium">

### Gradient Via

<div layout="flex col" space="g:medium">
  <p space="m:none" visual="text:neutral-600 dark:text:neutral-400 text-sm"><code>visual="via:purple-500"</code> - Add a middle color stop to gradients</p>
<div layout="flex" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div space="p:medium" visual="bg-image:gradient-to-r from:blue-500 via:purple-500 to:pink-500 text:white rounded:small">from:blue via:purple to:pink</div>
</div>
</div>

<details>
<summary>View Code</summary>

```html
<div layout="flex" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div space="p:medium" visual="bg-image:gradient-to-r from:blue-500 via:purple-500 to:pink-500 text:white rounded:small">from:blue via:purple to:pink</div>
</div>
```

</details>

</div>

## Arbitrary Values

Supports custom values using bracket syntax:

```html
<div visual="gradient:[custom-value]">Custom</div>
```
