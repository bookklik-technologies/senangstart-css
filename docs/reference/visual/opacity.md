# Opacity

Set element opacity (0-100)

## Syntax
```
visual="opacity:[value]"
```

## Values

| Value | CSS Output | Description |
|-------|------------|-------------|
| `0` | `opacity: 0` | Invisible |
| `25` | `opacity: 0.25` | 25% visible |
| `50` | `opacity: 0.5` | 50% visible |
| `75` | `opacity: 0.75` | 75% visible |
| `100` | `opacity: 1` | Fully visible |

## Examples

```html
<div visual="opacity:50">Half visible</div>
```

## Preview

<div space="p-x:big p-b:medium m-t:medium" visual="border-w:thin border:neutral-100 dark:border:neutral-800 rounded:medium">

### Opacity

<div layout="flex col" space="g:medium">
  <p space="m:none" visual="text:neutral-600 dark:text:neutral-400 text-sm"><code>visual="opacity:50"</code> - Control element transparency from invisible to fully visible</p>
<div layout="flex" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div space="p:small" visual="bg:primary text:white rounded:small" style="opacity: 0.25;">25%</div>
  <div space="p:small" visual="bg:primary text:white rounded:small" style="opacity: 0.5;">50%</div>
  <div space="p:small" visual="bg:primary text:white rounded:small" style="opacity: 0.75;">75%</div>
  <div space="p:small" visual="bg:primary text:white rounded:small" style="opacity: 1;">100%</div>
</div>
</div>

<details>
<summary>View Code</summary>

```html
<div layout="flex" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div space="p:small" visual="bg:primary text:white rounded:small" style="opacity: 0.25;">25%</div>
  <div space="p:small" visual="bg:primary text:white rounded:small" style="opacity: 0.5;">50%</div>
  <div space="p:small" visual="bg:primary text:white rounded:small" style="opacity: 0.75;">75%</div>
  <div space="p:small" visual="bg:primary text:white rounded:small" style="opacity: 1;">100%</div>
</div>
```

</details>

</div>
