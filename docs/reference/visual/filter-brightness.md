# Filter Brightness

Adjust brightness

## Syntax
```
visual="brightness:[value]"
```

## Values

| Value | CSS Output | Description |
|-------|------------|-------------|
| `dim` | `filter: brightness(0.5)` | 50% brightness |
| `dark` | `filter: brightness(0.75)` | 75% brightness |
| `normal` | `filter: brightness(1)` | Normal brightness |
| `bright` | `filter: brightness(1.25)` | 125% brightness |
| `vivid` | `filter: brightness(1.5)` | 150% brightness |

## Examples

```html
<img visual="brightness:bright">Brighter image</img>
```

## Arbitrary Values

Supports custom values using bracket syntax:

```html
<div visual="filter:[custom-value]">Custom</div>
```
