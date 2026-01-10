# Backdrop Saturate

Adjust saturation of the backdrop.

## Syntax
```
visual="backdrop-saturate:none | backdrop-saturate:low | backdrop-saturate:normal | backdrop-saturate:high | backdrop-saturate:vivid"
```

## Values

| Value | CSS Output |
|-------|------------|
| `backdrop-saturate:none` | `backdrop-filter: saturate(0)` |
| `backdrop-saturate:low` | `backdrop-filter: saturate(0.5)` |
| `backdrop-saturate:normal` | `backdrop-filter: saturate(1)` |
| `backdrop-saturate:high` | `backdrop-filter: saturate(1.5)` |
| `backdrop-saturate:vivid` | `backdrop-filter: saturate(2)` |

## Examples

```html
<div visual="backdrop-saturate:none">...</div>    <!-- No saturation -->
<div visual="backdrop-saturate:low">...</div>     <!-- 50% saturation -->
<div visual="backdrop-saturate:normal">...</div>  <!-- 100% saturation -->
<div visual="backdrop-saturate:high">...</div>    <!-- 150% saturation -->
<div visual="backdrop-saturate:vivid">...</div>   <!-- 200% saturation -->
```
