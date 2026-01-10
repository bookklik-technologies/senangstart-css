# Text Overflow

Handle text overflow

## Syntax
```
visual="[overflow-value]"
```

## Values

| Value | CSS Output | Description |
|-------|------------|-------------|
| `truncate` | `overflow: hidden; text-overflow: ellipsis; white-space: nowrap` | Truncate with ellipsis |
| `text-ellipsis` | `text-overflow: ellipsis` | Ellipsis overflow |
| `text-clip` | `text-overflow: clip` | Clip overflow |

## Examples

```html
<div visual="truncate">Very long text that gets truncated...</div>
```

## Responsive

```html
<!-- Responsive example -->
<div visual="mob:... tab:... lap:...">
  Responsive content
</div>
```
