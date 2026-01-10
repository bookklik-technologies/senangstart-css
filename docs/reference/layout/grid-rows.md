# Grid Template Rows

Define grid rows with the `layout` attribute.

## Syntax
```
layout="grid-rows:[value]"
```

## Values

| Value | CSS Output |
|-------|------------|
| `grid-rows:1` to `grid-rows:6` | `grid-template-rows: repeat(n, minmax(0, 1fr))` |
| `grid-rows:none` | `grid-template-rows: none` |
| `grid-rows:subgrid` | `grid-template-rows: subgrid` |
| `grid-rows:[auto_1fr_auto]` | `grid-template-rows: auto 1fr auto` |

## Examples

```html
<!-- 3 equal rows -->
<div layout="grid grid-rows:3" space="h:[300px]">
  <header>Header</header>
  <main>Content</main>
  <footer>Footer</footer>
</div>

<!-- Custom row heights -->
<div layout="grid grid-rows:[auto_1fr_auto]" space="h:[100vh]">
  <header>Auto height</header>
  <main>Takes remaining space</main>
  <footer>Auto height</footer>
</div>
```
