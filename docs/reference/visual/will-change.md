# Will Change

Hint to the browser about expected changes with the `visual` attribute.

## Syntax
```
visual="will-change:[value]"
```

## Values

| Value | CSS Output |
|-------|------------|
| `will-change:auto` | `will-change: auto` |
| `will-change:scroll` | `will-change: scroll-position` |
| `will-change:contents` | `will-change: contents` |
| `will-change:transform` | `will-change: transform` |
| `will-change:opacity` | `will-change: opacity` |

## Examples

```html
<!-- Optimize for transform animations -->
<div visual="will-change:transform hover:scale:[1.1]">
  Hover to scale
</div>

<!-- Optimize for opacity transitions -->
<div visual="will-change:opacity hover:opacity:[0.5]">
  Hover to fade
</div>

<!-- Optimize for scroll performance -->
<div visual="will-change:scroll" layout="overflow:auto">
  Heavy scrollable content
</div>
```

## Notes

> ⚠️ **Use sparingly!** `will-change` consumes browser resources. Only apply it to elements that will actually change, and remove it after the change completes if possible.

## Best Practices

- Apply just before an animation starts
- Remove after animation completes
- Don't apply to too many elements
- Use for transform, opacity, and scroll optimizations
