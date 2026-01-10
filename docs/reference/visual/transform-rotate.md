# Transform Rotate

Rotate element

## Syntax
```
visual="rotate:[degrees]"
```

## Values

| Value | CSS Output | Description |
|-------|------------|-------------|
| `0` | `transform: rotate(0deg)` | No rotation |
| `45` | `transform: rotate(45deg)` | 45° rotation |
| `90` | `transform: rotate(90deg)` | 90° rotation |
| `180` | `transform: rotate(180deg)` | 180° rotation |

## Examples

```html
<div visual="rotate:45">Rotated 45 degrees</div>
```

## Arbitrary Values

Supports custom values using bracket syntax:

```html
<div visual="transform:[custom-value]">Custom</div>
```

## Responsive

```html
<!-- Responsive example -->
<div visual="mob:... tab:... lap:...">
  Responsive content
</div>
```
