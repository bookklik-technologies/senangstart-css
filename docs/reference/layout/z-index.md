# Z Index

Control stacking order

## Syntax
```
layout="z:[value]"
```

## Values

| Value | CSS Output | Description |
|-------|------------|-------------|
| `base` | `z-index: var(--z-base)` | Base layer (0) |
| `low` | `z-index: var(--z-low)` | Low layer (10) |
| `mid` | `z-index: var(--z-mid)` | Middle layer (50) |
| `high` | `z-index: var(--z-high)` | High layer (100) |
| `top` | `z-index: var(--z-top)` | Top layer (9999) |

## Examples

```html
<div layout="z:top">On top</div>
```
