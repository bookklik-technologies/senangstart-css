# Backdrop Sepia

Apply sepia tone to the backdrop.

## Syntax
```
visual="backdrop-sepia:none | backdrop-sepia:partial | backdrop-sepia:full | backdrop-sepia"
```

## Values

| Value | CSS Output |
|-------|------------|
| `backdrop-sepia:none` | `backdrop-filter: sepia(0)` |
| `backdrop-sepia:partial` | `backdrop-filter: sepia(0.5)` |
| `backdrop-sepia:full` | `backdrop-filter: sepia(1)` |
| `backdrop-sepia` | `backdrop-filter: sepia(1)` |

## Examples

```html
<div visual="backdrop-sepia:none">...</div>     <!-- No sepia -->
<div visual="backdrop-sepia:partial">...</div>  <!-- 50% sepia -->
<div visual="backdrop-sepia:full">...</div>     <!-- Full sepia -->
<div visual="backdrop-sepia">...</div>          <!-- Full sepia (default) -->
```
