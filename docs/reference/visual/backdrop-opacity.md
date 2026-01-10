# Backdrop Opacity

Adjust opacity of the backdrop filter.

## Syntax
```
visual="backdrop-opacity:invisible | backdrop-opacity:faint | backdrop-opacity:half | backdrop-opacity:visible | backdrop-opacity:solid"
```

## Values

| Value | CSS Output |
|-------|------------|
| `backdrop-opacity:invisible` | `backdrop-filter: opacity(0)` |
| `backdrop-opacity:faint` | `backdrop-filter: opacity(0.25)` |
| `backdrop-opacity:half` | `backdrop-filter: opacity(0.5)` |
| `backdrop-opacity:visible` | `backdrop-filter: opacity(0.75)` |
| `backdrop-opacity:solid` | `backdrop-filter: opacity(1)` |

## Examples

```html
<div visual="backdrop-opacity:invisible">...</div>  <!-- 0% opacity -->
<div visual="backdrop-opacity:faint">...</div>      <!-- 25% opacity -->
<div visual="backdrop-opacity:half">...</div>       <!-- 50% opacity -->
<div visual="backdrop-opacity:visible">...</div>    <!-- 75% opacity -->
<div visual="backdrop-opacity:solid">...</div>      <!-- 100% opacity -->
```
