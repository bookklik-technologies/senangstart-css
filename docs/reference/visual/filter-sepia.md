# Filter Sepia

Apply sepia filter

## Syntax
```
visual="sepia:[value]"
```

## Values

| Value | CSS Output | Description |
|-------|------------|-------------|
| `none` | `filter: sepia(0%)` | No sepia |
| `partial` | `filter: sepia(50%)` | 50% sepia |
| `full` | `filter: sepia(100%)` | Full sepia |

## Examples

```html
<img visual="sepia:full">Vintage look</img>
```

## Preview

<div space="p-x:big p-b:medium m-t:medium" visual="border-w:thin border:neutral-100 dark:border:neutral-800 rounded:medium">

### Sepia Filter

<div layout="flex col" space="g:medium">
  <p space="m:none" visual="text:neutral-600 dark:text:neutral-400 text-sm"><code>visual="sepia:full"</code> - Apply vintage sepia tone</p>
<div layout="flex" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div space="p:small" visual="bg:primary text:white rounded:small">none</div>
  <div space="p:small" visual="bg:primary text:white rounded:small sepia:partial">partial</div>
  <div space="p:small" visual="bg:primary text:white rounded:small sepia:full">full</div>
</div>
</div>

<details>
<summary>View Code</summary>

```html
<div layout="flex" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div space="p:small" visual="bg:primary text:white rounded:small">none</div>
  <div space="p:small" visual="bg:primary text:white rounded:small sepia:partial">partial</div>
  <div space="p:small" visual="bg:primary text:white rounded:small sepia:full">full</div>
</div>
```

</details>

</div>

## Arbitrary Values

Supports custom values using bracket syntax:

```html
<div visual="filter:[custom-value]">Custom</div>
```
