# Backdrop Contrast

Adjust backdrop contrast

## Syntax
```
visual="backdrop-contrast:[value]"
```

## Values

| Value | CSS Output | Description |
|-------|------------|-------------|
| `low` | `backdrop-filter: contrast(0.5)` | Low contrast |
| `reduced` | `backdrop-filter: contrast(0.75)` | Reduced contrast |
| `normal` | `backdrop-filter: contrast(1)` | Normal contrast |
| `high` | `backdrop-filter: contrast(1.25)` | High contrast |
| `max` | `backdrop-filter: contrast(1.5)` | Maximum contrast |

## Examples

```html
<div visual="backdrop-contrast:high">High contrast backdrop</div>
```

## Arbitrary Values

Supports custom values using bracket syntax:

```html
<div visual="backdrop:[custom-value]">Custom</div>
```

## Responsive

```html
<!-- Responsive example -->
<div visual="mob:... tab:... lap:...">
  Responsive content
</div>
```
