# Perspective Origin

Set the vanishing point for 3D transforms.

## Syntax
```
visual="perspective-origin:center | perspective-origin:top | perspective-origin:bottom-right"
```

## Values

| Value | CSS Output |
|-------|------------|
| `perspective-origin:center` | `perspective-origin: center` |
| `perspective-origin:top` | `perspective-origin: top` |
| `perspective-origin:top-right` | `perspective-origin: top right` |
| `perspective-origin:right` | `perspective-origin: right` |
| `perspective-origin:bottom-right` | `perspective-origin: bottom right` |
| `perspective-origin:bottom` | `perspective-origin: bottom` |
| `perspective-origin:bottom-left` | `perspective-origin: bottom left` |
| `perspective-origin:left` | `perspective-origin: left` |
| `perspective-origin:top-left` | `perspective-origin: top left` |

## Examples

```html
<div visual="perspective-origin:center">...</div>       <!-- center (default) -->
<div visual="perspective-origin:top">...</div>          <!-- top -->
<div visual="perspective-origin:top-right">...</div>    <!-- top right -->
<div visual="perspective-origin:right">...</div>        <!-- right -->
<div visual="perspective-origin:bottom-right">...</div> <!-- bottom right -->
<div visual="perspective-origin:bottom">...</div>       <!-- bottom -->
<div visual="perspective-origin:bottom-left">...</div>  <!-- bottom left -->
<div visual="perspective-origin:left">...</div>         <!-- left -->
<div visual="perspective-origin:top-left">...</div>     <!-- top left -->
```
