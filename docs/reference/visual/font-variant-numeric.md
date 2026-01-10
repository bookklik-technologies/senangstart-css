# Font Variant Numeric

Control numeric font features with the `visual` attribute.

## Values

| Value | CSS Output |
|-------|------------|
| `normal-nums` | `font-variant-numeric: normal` |
| `ordinal` | `font-variant-numeric: ordinal` |
| `slashed-zero` | `font-variant-numeric: slashed-zero` |
| `tabular-nums` | `font-variant-numeric: tabular-nums` |

## Examples

```html
<span visual="tabular-nums">1,234,567</span>
<span visual="ordinal">1st 2nd 3rd</span>
<span visual="slashed-zero">0123456789</span>
```

## Common Patterns

```html
<!-- Tables with aligned numbers -->
<table>
  <tr><td visual="tabular-nums">1,234.56</td></tr>
  <tr><td visual="tabular-nums">12,345.67</td></tr>
  <tr><td visual="tabular-nums">123.45</td></tr>
</table>
```
