# Backdrop Brightness

Adjust brightness of the backdrop.

## Syntax
```
visual="backdrop-brightness:dim | backdrop-brightness:dark | backdrop-brightness:normal | backdrop-brightness:bright | backdrop-brightness:vivid"
```

## Values

| Value | CSS Output |
|-------|------------|
| `backdrop-brightness:dim` | `backdrop-filter: brightness(0.5)` |
| `backdrop-brightness:dark` | `backdrop-filter: brightness(0.75)` |
| `backdrop-brightness:normal` | `backdrop-filter: brightness(1)` |
| `backdrop-brightness:bright` | `backdrop-filter: brightness(1.25)` |
| `backdrop-brightness:vivid` | `backdrop-filter: brightness(1.5)` |

## Examples

```html
<div visual="backdrop-brightness:dim">...</div>     <!-- 50% brightness -->
<div visual="backdrop-brightness:dark">...</div>    <!-- 75% brightness -->
<div visual="backdrop-brightness:normal">...</div>  <!-- 100% brightness -->
<div visual="backdrop-brightness:bright">...</div>  <!-- 125% brightness -->
<div visual="backdrop-brightness:vivid">...</div>   <!-- 150% brightness -->
```
