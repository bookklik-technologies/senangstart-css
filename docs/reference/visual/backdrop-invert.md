# Backdrop Invert

Invert colors of the backdrop.

## Syntax
```
visual="backdrop-invert:none | backdrop-invert:partial | backdrop-invert:full | backdrop-invert"
```

## Values

| Value | CSS Output |
|-------|------------|
| `backdrop-invert:none` | `backdrop-filter: invert(0)` |
| `backdrop-invert:partial` | `backdrop-filter: invert(0.5)` |
| `backdrop-invert:full` | `backdrop-filter: invert(1)` |
| `backdrop-invert` | `backdrop-filter: invert(1)` |

## Examples

```html
<div visual="backdrop-invert:none">...</div>     <!-- No inversion -->
<div visual="backdrop-invert:partial">...</div>  <!-- 50% inverted -->
<div visual="backdrop-invert:full">...</div>     <!-- Fully inverted -->
<div visual="backdrop-invert">...</div>          <!-- Fully inverted (default) -->
```
