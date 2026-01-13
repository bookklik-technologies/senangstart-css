# Mask

Apply mask to element

## Syntax
```
visual="mask:[value]"
```

## Values

| Value | CSS Output | Description |
|-------|------------|-------------|
| `none` | `mask-image: none` | No mask |
| `fade-y` | `mask-image: linear-gradient(to bottom, transparent, black 10%, black 90%, transparent)` | Vertical fade |
| `fade-x` | `mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent)` | Horizontal fade |

## Examples

```html
<div visual="mask:fade-y">Faded edges</div>
```

## Arbitrary Values

Supports custom values using bracket syntax:

```html
<div visual="mask:[custom-value]">Custom</div>
```
