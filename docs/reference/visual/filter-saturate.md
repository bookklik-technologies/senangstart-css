# Filter Saturate

Adjust saturation

## Syntax
```
visual="saturate:[value]"
```

## Values

| Value | CSS Output | Description |
|-------|------------|-------------|
| `none` | `filter: saturate(0)` | Desaturated |
| `low` | `filter: saturate(0.5)` | Low saturation |
| `normal` | `filter: saturate(1)` | Normal saturation |
| `high` | `filter: saturate(1.5)` | High saturation |
| `vivid` | `filter: saturate(2)` | Very saturated |

## Examples

```html
<img visual="saturate:vivid">Vivid colors</img>
```

## Arbitrary Values

Supports custom values using bracket syntax:

```html
<div visual="filter:[custom-value]">Custom</div>
```
