# Text Alignment

Control text alignment with the `visual` attribute.

## Values

| Property | CSS Output |
|----------|------------|
| `text:left` | `text-align: left` |
| `text:center` | `text-align: center` |
| `text:right` | `text-align: right` |
| `text:justify` | `text-align: justify` |

## Examples

```html
<p visual="text:left">Left aligned (default)</p>
<p visual="text:center">Centered text</p>
<p visual="text:right">Right aligned</p>
<p visual="text:justify">Justified text that stretches to fill the line width evenly.</p>
```

## Responsive

```html
<p visual="text:center tab:text:left">
  Centered on mobile, left on tablet+
</p>
```
