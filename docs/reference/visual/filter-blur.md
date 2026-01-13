# Filter Blur

Apply blur filter

## Syntax
```
visual="blur:[value]"
```

## Values

| Value | CSS Output | Description |
|-------|------------|-------------|
| `none` | `filter: blur(0)` | No blur |
| `tiny` | `filter: blur(2px)` | Tiny blur |
| `small` | `filter: blur(4px)` | Small blur |
| `medium` | `filter: blur(8px)` | Medium blur |
| `big` | `filter: blur(12px)` | Large blur |
| `giant` | `filter: blur(24px)` | Giant blur |
| `vast` | `filter: blur(48px)` | Vast blur |

## Examples

```html
<div visual="blur:medium">Blurred element</div>
```

## Arbitrary Values

Supports custom values using bracket syntax:

```html
<div visual="filter:[custom-value]">Custom</div>
```
