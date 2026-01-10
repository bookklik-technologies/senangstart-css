# Overscroll Behavior

Control scroll chaining behavior with the `layout` attribute.

## Syntax
```
layout="overscroll:[value]"
```

## Values

| Value | CSS Output |
|-------|------------|
| `overscroll:auto` | `overscroll-behavior: auto` |
| `overscroll:contain` | `overscroll-behavior: contain` |
| `overscroll:none` | `overscroll-behavior: none` |

## Examples

```html
<!-- Prevent scroll chaining to parent -->
<div layout="overflow:auto overscroll:contain">
  Scrolling won't chain to parent
</div>

<!-- No overscroll effects -->
<div layout="overflow:auto overscroll:none">
  No bounce or overscroll effects
</div>
```

## Use Cases

- Modal dialogs that shouldn't scroll the page behind
- Nested scrollable areas
- Preventing mobile Safari bounce effects
