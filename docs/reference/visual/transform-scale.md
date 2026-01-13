# Transform Scale

Scale element

## Syntax
```
visual="scale:[value]"
```

## Values

| Value | CSS Output | Description |
|-------|------------|-------------|
| `0` | `transform: scale(0)` | Scale to 0 |
| `50` | `transform: scale(0.5)` | Scale to 50% |
| `75` | `transform: scale(0.75)` | Scale to 75% |
| `100` | `transform: scale(1)` | Normal scale |
| `110` | `transform: scale(1.1)` | Scale to 110% |
| `125` | `transform: scale(1.25)` | Scale to 125% |
| `150` | `transform: scale(1.5)` | Scale to 150% |

## Examples

```html
<div visual="transition:transform hover:scale:110">Hover to grow</div>
```

## Arbitrary Values

Supports custom values using bracket syntax:

```html
<div visual="transform:[custom-value]">Custom</div>
```
