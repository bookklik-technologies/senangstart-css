# Text Wrap

Control text wrapping behavior with the `visual` attribute.

## Values

| Value | CSS Output |
|-------|------------|
| `text-wrap` | `text-wrap: wrap` |
| `text-nowrap` | `text-wrap: nowrap` |
| `text-balance` | `text-wrap: balance` |
| `text-pretty` | `text-wrap: pretty` |

## Examples

```html
<p visual="text-wrap">Normal wrapping</p>
<p visual="text-nowrap">No wrapping</p>
<h1 visual="text-balance">Headlines with balanced line breaks</h1>
<p visual="text-pretty">Pretty wrapping that avoids orphans</p>
```

## Note

- `text-balance` creates more even line lengths (good for headings)
- `text-pretty` prevents orphan words at the end of paragraphs
