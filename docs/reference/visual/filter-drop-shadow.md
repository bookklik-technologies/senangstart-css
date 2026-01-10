# Drop Shadow

Add drop shadow effects to elements.

## Syntax
```
visual="drop-shadow:none | drop-shadow:tiny | drop-shadow:small | drop-shadow:medium | drop-shadow:big | drop-shadow:giant"
```

## Values

| Value | CSS Output |
|-------|------------|
| `drop-shadow:none` | `filter: drop-shadow(0 0 0 transparent)` |
| `drop-shadow:tiny` | `filter: drop-shadow(0 1px 1px rgba(0,0,0,0.1))` |
| `drop-shadow:small` | `filter: drop-shadow(0 1px 2px rgba(0,0,0,0.15))` |
| `drop-shadow:medium` | `filter: drop-shadow(0 4px 6px rgba(0,0,0,0.2))` |
| `drop-shadow:big` | `filter: drop-shadow(0 8px 12px rgba(0,0,0,0.25))` |
| `drop-shadow:giant` | `filter: drop-shadow(0 16px 24px rgba(0,0,0,0.3))` |

## Examples

```html
<div visual="drop-shadow:none">...</div>    <!-- No shadow -->
<div visual="drop-shadow:tiny">...</div>    <!-- Minimal shadow -->
<div visual="drop-shadow:small">...</div>   <!-- Subtle shadow -->
<div visual="drop-shadow:medium">...</div>  <!-- Standard shadow -->
<div visual="drop-shadow:big">...</div>     <!-- Large shadow -->
<div visual="drop-shadow:giant">...</div>   <!-- Dramatic shadow -->
```

## Use Cases

Drop shadow works better than `box-shadow` for:
- Non-rectangular shapes (images with transparency)
- SVG icons
- Elements with complex borders

```html
<!-- Drop shadow follows the shape -->
<img visual="drop-shadow:medium" src="icon.png" />
```
