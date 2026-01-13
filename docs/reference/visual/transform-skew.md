# Transform Skew

Skew element

## Syntax
```
visual="skew-x:[degrees]" or visual="skew-y:[degrees]"
```

## Values

| Value | CSS Output | Description |
|-------|------------|-------------|
| `0` | `transform: skewX(0deg)` | No skew |
| `3` | `transform: skewX(3deg)` | 3° skew |
| `6` | `transform: skewX(6deg)` | 6° skew |
| `12` | `transform: skewX(12deg)` | 12° skew |

## Examples

```html
<div visual="skew-x:6">Skewed element</div>
```

## Arbitrary Values

Supports custom values using bracket syntax:

```html
<div visual="transform:[custom-value]">Custom</div>
```
