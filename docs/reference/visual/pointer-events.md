# Pointer Events

Control pointer events

## Syntax
```
visual="pointer-events:[value]"
```

## Values

| Value | CSS Output | Description |
|-------|------------|-------------|
| `none` | `pointer-events: none` | Ignore pointer events |
| `auto` | `pointer-events: auto` | Normal pointer events |

## Examples

```html
<div visual="pointer-events:none">Click through</div>
```

## Preview

<div space="p-x:big p-b:medium m-t:medium" visual="border-w:thin border:neutral-100 dark:border:neutral-800 rounded:medium">

### Pointer Events

<div layout="flex col" space="g:medium">
  <p space="m:none" visual="text:neutral-600 dark:text:neutral-400 text-sm"><code>visual="pointer-events:none"</code> - Make elements click-through or interactive</p>
<div layout="flex" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div space="p:small" visual="bg:primary text:white rounded:small">auto (clickable)</div>
  <div space="p:small" visual="bg:neutral-400 text:white rounded:small">none (click-through)</div>
</div>
</div>

<details>
<summary>View Code</summary>

```html
<div layout="flex" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div space="p:small" visual="bg:primary text:white rounded:small">auto (clickable)</div>
  <div space="p:small" visual="bg:neutral-400 text:white rounded:small">none (click-through)</div>
</div>
```

</details>

</div>
