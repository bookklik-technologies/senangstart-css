# Filter Hue Rotate

Rotate hue colors

## Syntax
```
visual="hue-rotate:[degrees]"
```

## Values

| Value | CSS Output | Description |
|-------|------------|-------------|
| `0` | `filter: hue-rotate(0deg)` | No rotation |
| `90` | `filter: hue-rotate(90deg)` | 90° rotation |
| `180` | `filter: hue-rotate(180deg)` | 180° rotation |

## Examples

```html
<img visual="hue-rotate:90">Shifted hue</img>
```

## Arbitrary Values

Supports custom values using bracket syntax:

```html
<div visual="filter:[custom-value]">Custom</div>
```
