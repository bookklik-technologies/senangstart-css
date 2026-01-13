# Backdrop Opacity

Set backdrop opacity

## Syntax
```
visual="backdrop-opacity:[value]"
```

## Values

| Value | CSS Output | Description |
|-------|------------|-------------|
| `0` | `backdrop-filter: opacity(0)` | Transparent |
| `50` | `backdrop-filter: opacity(0.5)` | 50% opacity |
| `100` | `backdrop-filter: opacity(1)` | Fully opaque |

## Examples

```html
<div visual="backdrop-opacity:50">Semi-transparent backdrop</div>
```

## Arbitrary Values

Supports custom values using bracket syntax:

```html
<div visual="backdrop:[custom-value]">Custom</div>
```
