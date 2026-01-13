# Stroke

Set SVG stroke color

## Syntax
```
visual="stroke:[color]"
```

## Values

| Value | CSS Output | Description |
|-------|------------|-------------|
| `none` | `stroke: none` | No stroke |
| `current` | `stroke: currentColor` | Current color |

## Examples

```html
<svg visual="stroke:primary stroke-w:2">...</svg>
```

## Preview

<div space="p-x:big p-b:medium m-t:medium" visual="border-w:thin border:neutral-100 dark:border:neutral-800 rounded:medium">

### SVG Stroke

<div layout="flex col" space="g:medium">
  <p space="m:none" visual="text:neutral-600 dark:text:neutral-400 text-sm"><code>visual="stroke:primary"</code> - Stroke SVG elements with color</p>
<div layout="flex" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <svg visual="stroke:primary fill:none" width="40" height="40" viewBox="0 0 24 24" style="stroke-width: 2px;"><circle cx="12" cy="12" r="10"/></svg>
  <svg visual="stroke:danger fill:none" width="40" height="40" viewBox="0 0 24 24" style="stroke-width: 2px;"><circle cx="12" cy="12" r="10"/></svg>
</div>
</div>

<details>
<summary>View Code</summary>

```html
<div layout="flex" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <svg visual="stroke:primary fill:none" width="40" height="40" viewBox="0 0 24 24" style="stroke-width: 2px;"><circle cx="12" cy="12" r="10"/></svg>
  <svg visual="stroke:danger fill:none" width="40" height="40" viewBox="0 0 24 24" style="stroke-width: 2px;"><circle cx="12" cy="12" r="10"/></svg>
</div>
```

</details>

</div>

## Arbitrary Values

Supports custom values using bracket syntax:

```html
<div visual="stroke:[custom-value]">Custom</div>
```
