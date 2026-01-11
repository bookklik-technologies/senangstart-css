# Display

Control the display type of elements

## Syntax
```
layout="[display-value]"
```

## Values

| Value | CSS Output | Description |
|-------|------------|-------------|
| `flex` | `display: flex` | Flexbox container |
| `inline-flex` | `display: inline-flex` | Inline flexbox container |
| `grid` | `display: grid` | Grid container |
| `inline-grid` | `display: inline-grid` | Inline grid container |
| `block` | `display: block` | Block element |
| `inline` | `display: inline-block` | Inline block element |
| `hidden` | `display: none` | Hidden element |

## Examples

```html
<div layout="flex">Flexbox container</div>
<div layout="grid">Grid container</div>
<div layout="hidden">Hidden element</div>
```

## Preview

<div layout="flex col" space="g:medium">
<div layout="flex row" space="g:small p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <span space="p:small" visual="bg:primary text:white rounded:small">Item 1</span>
  <span space="p:small" visual="bg:primary text:white rounded:small">Item 2</span>
  <span space="p:small" visual="bg:primary text:white rounded:small">Item 3</span>
</div>
  <p space="m:none" visual="text:neutral-600 dark:text:neutral-400 text-sm"><code>layout="flex"</code> - Items arranged horizontally</p>
</div>

<div layout="flex col" space="g:medium m-t:large">
<div layout="grid grid-cols:3" space="g:small p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <span space="p:small" visual="bg:primary text:white rounded:small" layout="text:center">1</span>
  <span space="p:small" visual="bg:primary text:white rounded:small" layout="text:center">2</span>
  <span space="p:small" visual="bg:primary text:white rounded:small" layout="text:center">3</span>
  <span space="p:small" visual="bg:primary text:white rounded:small" layout="text:center">4</span>
  <span space="p:small" visual="bg:primary text:white rounded:small" layout="text:center">5</span>
  <span space="p:small" visual="bg:primary text:white rounded:small" layout="text:center">6</span>
</div>
  <p space="m:none" visual="text:neutral-600 dark:text:neutral-400 text-sm"><code>layout="grid"</code> - Items in a grid layout</p>
</div>

## Responsive

```html
<!-- Responsive example -->
<div layout="mob:... tab:... lap:...">
  Responsive content
</div>
```
