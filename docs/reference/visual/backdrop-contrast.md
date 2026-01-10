# Backdrop Contrast

Adjust contrast of the backdrop.

## Syntax
```
visual="backdrop-contrast:low | backdrop-contrast:reduced | backdrop-contrast:normal | backdrop-contrast:high | backdrop-contrast:max"
```

## Values

| Value | CSS Output |
|-------|------------|
| `backdrop-contrast:low` | `backdrop-filter: contrast(0.5)` |
| `backdrop-contrast:reduced` | `backdrop-filter: contrast(0.75)` |
| `backdrop-contrast:normal` | `backdrop-filter: contrast(1)` |
| `backdrop-contrast:high` | `backdrop-filter: contrast(1.25)` |
| `backdrop-contrast:max` | `backdrop-filter: contrast(1.5)` |

## Examples

```html
<div visual="backdrop-contrast:low">...</div>      <!-- 50% contrast -->
<div visual="backdrop-contrast:reduced">...</div>  <!-- 75% contrast -->
<div visual="backdrop-contrast:normal">...</div>   <!-- 100% contrast -->
<div visual="backdrop-contrast:high">...</div>     <!-- 125% contrast -->
<div visual="backdrop-contrast:max">...</div>      <!-- 150% contrast -->
```
