# Backdrop Saturate

Adjust backdrop saturation

## Syntax
```
visual="backdrop-saturate:[value]"
```

## Values

| Value | CSS Output | Description |
|-------|------------|-------------|
| `none` | `backdrop-filter: saturate(0)` | Desaturated |
| `low` | `backdrop-filter: saturate(0.5)` | Low saturation |
| `normal` | `backdrop-filter: saturate(1)` | Normal saturation |
| `high` | `backdrop-filter: saturate(1.5)` | High saturation |
| `vivid` | `backdrop-filter: saturate(2)` | Very saturated |

## Examples

```html
<div visual="backdrop-saturate:vivid">Vivid backdrop</div>
```

## Arbitrary Values

Supports custom values using bracket syntax:

```html
<div visual="backdrop:[custom-value]">Custom</div>
```
