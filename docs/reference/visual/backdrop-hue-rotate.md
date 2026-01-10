# Backdrop Hue Rotate

Rotate backdrop hue

## Syntax
```
visual="backdrop-hue-rotate:[degrees]"
```

## Values

| Value | CSS Output | Description |
|-------|------------|-------------|
| `0` | `backdrop-filter: hue-rotate(0deg)` | No rotation |
| `90` | `backdrop-filter: hue-rotate(90deg)` | 90° rotation |
| `180` | `backdrop-filter: hue-rotate(180deg)` | 180° rotation |

## Examples

```html
<div visual="backdrop-hue-rotate:90">Rotated hue backdrop</div>
```

## Arbitrary Values

Supports custom values using bracket syntax:

```html
<div visual="backdrop:[custom-value]">Custom</div>
```

## Responsive

```html
<!-- Responsive example -->
<div visual="mob:... tab:... lap:...">
  Responsive content
</div>
```
