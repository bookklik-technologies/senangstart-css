# Line Clamp

Truncate text to a specific number of lines with the `visual` attribute.

## Syntax
```
visual="line-clamp:[value]"
```

## Values

| Value | CSS Output |
|-------|------------|
| `line-clamp:1` | Clamp to 1 line |
| `line-clamp:2` | Clamp to 2 lines |
| `line-clamp:3` | Clamp to 3 lines |
| `line-clamp:4` | Clamp to 4 lines |
| `line-clamp:5` | Clamp to 5 lines |
| `line-clamp:6` | Clamp to 6 lines |

## Examples

```html
<p visual="line-clamp:2">
  Long text that will be truncated after 2 lines with ellipsis...
</p>

<p visual="line-clamp:3">
  This text will show up to 3 lines before being cut off with an ellipsis.
</p>
```

## Common Patterns

```html
<!-- Card description preview -->
<div visual="bg:white rounded:medium shadow:small" space="p:medium">
  <h3>Card Title</h3>
  <p visual="line-clamp:2 text:grey">
    Long description that might be very long but will be truncated...
  </p>
</div>
```
