# Shorthand Alignment

Convenient shortcuts for common alignment patterns with the `layout` attribute.

## Values

| Value | CSS Output |
|-------|------------|
| `center` | `justify-content: center; align-items: center` |
| `start` | `justify-content: flex-start; align-items: flex-start` |
| `end` | `justify-content: flex-end; align-items: flex-end` |
| `between` | `justify-content: space-between` |
| `around` | `justify-content: space-around` |
| `evenly` | `justify-content: space-evenly` |

## Examples

```html
<!-- Center both horizontally and vertically -->
<div layout="flex center">Centered both ways</div>

<!-- Align to start in both axes -->
<div layout="flex start">Top-left aligned</div>

<!-- Space items with between -->
<div layout="flex between items-center">
  Spaced items, vertically centered
</div>
```

## Note

These are shortcuts for common patterns. For more control, use `justify-*` and `items-*` separately.
