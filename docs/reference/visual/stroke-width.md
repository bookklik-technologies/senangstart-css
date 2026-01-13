# Stroke Width

Set SVG stroke width

## Syntax
```
visual="stroke-w:[value]"
```

## Values

| Value | CSS Output | Description |
|-------|------------|-------------|
| `0` | `stroke-width: 0` | No stroke |
| `1` | `stroke-width: 1px` | 1px stroke |
| `2` | `stroke-width: 2px` | 2px stroke |

## Examples

```html
<svg visual="stroke:black stroke-w:2">...</svg>
```

## Arbitrary Values

Supports custom values using bracket syntax:

```html
<div visual="stroke:[custom-value]">Custom</div>
```
