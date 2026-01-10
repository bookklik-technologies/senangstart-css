# Filter Contrast

Adjust contrast

## Syntax
```
visual="contrast:[value]"
```

## Values

| Value | CSS Output | Description |
|-------|------------|-------------|
| `low` | `filter: contrast(0.5)` | Low contrast |
| `reduced` | `filter: contrast(0.75)` | Reduced contrast |
| `normal` | `filter: contrast(1)` | Normal contrast |
| `high` | `filter: contrast(1.25)` | High contrast |
| `max` | `filter: contrast(1.5)` | Maximum contrast |

## Examples

```html
<img visual="contrast:high">High contrast</img>
```

## Arbitrary Values

Supports custom values using bracket syntax:

```html
<div visual="filter:[custom-value]">Custom</div>
```

## Responsive

```html
<!-- Responsive example -->
<div visual="mob:... tab:... lap:...">
  Responsive content
</div>
```
