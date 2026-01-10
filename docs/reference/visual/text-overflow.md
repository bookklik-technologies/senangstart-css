# Text Overflow

Control text overflow behavior with the `visual` attribute.

## Values

| Value | CSS Output |
|-------|------------|
| `truncate` | `overflow: hidden; text-overflow: ellipsis; white-space: nowrap` |
| `text-ellipsis` | `text-overflow: ellipsis` |
| `text-clip` | `text-overflow: clip` |

## Examples

```html
<!-- Single line truncation with ellipsis -->
<p visual="truncate" space="w:[200px]">
  Long text that gets cut off with ellipsis...
</p>

<!-- Just set text-overflow behavior -->
<p visual="text-ellipsis">Ellipsis on overflow</p>
<p visual="text-clip">Clip on overflow (no ellipsis)</p>
```

## Note

`truncate` is a shorthand that combines overflow hidden, ellipsis, and nowrap. For multi-line truncation, use `line-clamp` instead.
