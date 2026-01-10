# Border

Control borders with the `visual` attribute.

## Border Color

| Property | CSS Output |
|----------|------------|
| `border:grey` | `border-color: var(--c-grey)` |
| `border:primary` | `border-color: var(--c-primary)` |
| `border:[#hex]` | `border-color: #hex` |

## Border Width

| Property | CSS Output |
|----------|------------|
| `border-w:[1px]` | `border-width: 1px` |
| `border-w:[2px]` | `border-width: 2px` |

## Examples

```html
<div visual="border:grey border-w:[1px]">Bordered element</div>
<div visual="border:primary border-w:[2px]">Primary border</div>
<input visual="border:grey focus:border:primary">
```

## States

```html
<input visual="border:grey focus:border:primary border-w:[1px]">
```
