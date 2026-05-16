# Outline Offset

Set outline offset (gap between outline and element)

## Syntax
```
visual="outline-offset:[value]"
```

## Values

| Value | CSS Output | Description |
|-------|------------|-------------|
| `none` | `outline-offset: var(--s-none)` | No offset (0px) |
| `thin` | `outline-offset: var(--s-thin)` | Thin offset (1px) |
| `small` | `outline-offset: var(--s-small)` | Small offset (4px) |
| `medium` | `outline-offset: var(--s-medium)` | Medium offset (16px) |

## Examples

```html
<button visual="outline:primary outline-offset:small">Offset outline</button>
```

## Preview

<div space="p-x:big p-b:medium m-t:medium" visual="border-w:thin border:neutral-100 dark:border:neutral-800 rounded:medium">

### Outline Offset

<div layout="flex col" space="g:medium">
  <p space="m:none" visual="text:neutral-600 dark:text:neutral-400 text-sm"><code>visual="outline-offset:small"</code> - Offset creates space between outline and element</p>
<div layout="flex" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div space="p:medium" visual="outline:primary outline-offset:none rounded:small">none</div>
  <div space="p:medium" visual="outline:primary outline-offset:small rounded:small">small</div>
  <div space="p:medium" visual="outline:primary outline-offset:medium rounded:small">medium</div>
</div>
</div>

<details>
<summary>View Code</summary>

```html
<div layout="flex" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div space="p:medium" visual="outline:primary outline-offset:none rounded:small">none</div>
  <div space="p:medium" visual="outline:primary outline-offset:small rounded:small">small</div>
  <div space="p:medium" visual="outline:primary outline-offset:medium rounded:small">medium</div>
</div>
```

</details>

</div>

## Arbitrary Values

Supports custom values using bracket syntax:

```html
<div visual="outline:[custom-value]">Custom</div>
```
