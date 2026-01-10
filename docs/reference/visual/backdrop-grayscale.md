# Backdrop Grayscale

Apply grayscale to the backdrop.

## Syntax
```
visual="backdrop-grayscale:none | backdrop-grayscale:partial | backdrop-grayscale:full | backdrop-grayscale"
```

## Values

| Value | CSS Output |
|-------|------------|
| `backdrop-grayscale:none` | `backdrop-filter: grayscale(0)` |
| `backdrop-grayscale:partial` | `backdrop-filter: grayscale(0.5)` |
| `backdrop-grayscale:full` | `backdrop-filter: grayscale(1)` |
| `backdrop-grayscale` | `backdrop-filter: grayscale(1)` |

## Examples

```html
<div visual="backdrop-grayscale:none">...</div>     <!-- Full color -->
<div visual="backdrop-grayscale:partial">...</div>  <!-- 50% grayscale -->
<div visual="backdrop-grayscale:full">...</div>     <!-- Full grayscale -->
<div visual="backdrop-grayscale">...</div>          <!-- Full grayscale (default) -->
```
