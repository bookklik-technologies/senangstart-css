# Filter Drop Shadow

Add drop shadow

## Syntax
```
visual="drop-shadow:[value]"
```

## Values

| Value | CSS Output | Description |
|-------|------------|-------------|
| `none` | `filter: drop-shadow(none)` | No shadow |
| `tiny` | `filter: drop-shadow(0 1px 1px rgba(0,0,0,0.05))` | Tiny shadow |
| `small` | `filter: drop-shadow(0 1px 2px rgba(0,0,0,0.1))` | Small shadow |
| `medium` | `filter: drop-shadow(0 4px 3px rgba(0,0,0,0.07))` | Medium shadow |
| `big` | `filter: drop-shadow(0 10px 8px rgba(0,0,0,0.04))` | Large shadow |
| `giant` | `filter: drop-shadow(0 20px 13px rgba(0,0,0,0.03))` | Giant shadow |

## Examples

```html
<img visual="drop-shadow:medium">Shadow on image</img>
```

## Preview

<div space="p-x:big p-b:medium m-t:medium" visual="border-w:thin border:neutral-100 dark:border:neutral-800 rounded:medium">

### Drop Shadow

<div layout="flex col" space="g:medium">
  <p space="m:none" visual="text:neutral-600 dark:text:neutral-400 text-sm"><code>visual="drop-shadow:medium"</code> - Add shadow to elements</p>
<div layout="flex" space="g:medium p:big" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div space="p:small" visual="bg:primary text:white rounded:small" style="filter: drop-shadow(0 1px 2px rgba(0,0,0,0.3));">small</div>
  <div space="p:small" visual="bg:primary text:white rounded:small" style="filter: drop-shadow(0 4px 6px rgba(0,0,0,0.3));">medium</div>
  <div space="p:small" visual="bg:primary text:white rounded:small" style="filter: drop-shadow(0 10px 15px rgba(0,0,0,0.3));">big</div>
</div>
</div>

<details>
<summary>View Code</summary>

```html
<div layout="flex" space="g:medium p:big" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div space="p:small" visual="bg:primary text:white rounded:small" style="filter: drop-shadow(0 1px 2px rgba(0,0,0,0.3));">small</div>
  <div space="p:small" visual="bg:primary text:white rounded:small" style="filter: drop-shadow(0 4px 6px rgba(0,0,0,0.3));">medium</div>
  <div space="p:small" visual="bg:primary text:white rounded:small" style="filter: drop-shadow(0 10px 15px rgba(0,0,0,0.3));">big</div>
</div>
```

</details>

</div>

## Arbitrary Values

Supports custom values using bracket syntax:

```html
<div visual="filter:[custom-value]">Custom</div>
```
