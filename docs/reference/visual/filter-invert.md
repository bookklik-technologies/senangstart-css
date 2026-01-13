# Filter Invert

Invert colors

## Syntax
```
visual="invert:[value]"
```

## Values

| Value | CSS Output | Description |
|-------|------------|-------------|
| `none` | `filter: invert(0%)` | No inversion |
| `partial` | `filter: invert(50%)` | 50% inversion |
| `full` | `filter: invert(100%)` | Full inversion |

## Examples

```html
<img visual="invert:full">Inverted colors</img>
```

## Arbitrary Values

Supports custom values using bracket syntax:

```html
<div visual="filter:[custom-value]">Custom</div>
```
