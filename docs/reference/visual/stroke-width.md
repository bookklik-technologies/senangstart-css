# Stroke Width

Set SVG stroke width

## Syntax
```
visual="stroke-w:[value]"
```

## Values

| Value | CSS Output | Description |
|-------|------------|-------------|
| `0` | `stroke-width: 0` | No stroke |
| `1` | `stroke-width: 1px` | 1px stroke |
| `2` | `stroke-width: 2px` | 2px stroke |

## Examples

```html
<svg visual="stroke:black stroke-w:2">...</svg>
```

## Preview

<div space="p-x:big p-b:medium m-t:medium" visual="border-w:thin border:neutral-100 dark:border:neutral-800 rounded:medium">

### Stroke Width

<div layout="flex col" space="g:medium">
  <p space="m:none" visual="text:neutral-600 dark:text:neutral-400 text-sm"><code>visual="stroke-w:2"</code> - Control SVG stroke thickness</p>
<div layout="flex" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <svg visual="stroke:primary fill:none stroke-w:1" width="40" height="40" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/></svg>
  <svg visual="stroke:primary fill:none stroke-w:2" width="40" height="40" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/></svg>
  <svg visual="stroke:primary fill:none stroke-w:3" width="40" height="40" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/></svg>
</div>
</div>

<details>
<summary>View Code</summary>

```html
<div layout="flex" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <svg visual="stroke:primary fill:none stroke-w:1" width="40" height="40" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/></svg>
  <svg visual="stroke:primary fill:none stroke-w:2" width="40" height="40" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/></svg>
  <svg visual="stroke:primary fill:none stroke-w:3" width="40" height="40" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/></svg>
</div>
```

</details>

</div>

## Arbitrary Values

Supports custom values using bracket syntax:

```html
<div visual="stroke:[custom-value]">Custom</div>
```
