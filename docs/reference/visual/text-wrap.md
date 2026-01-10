# Text Wrap

Control text wrapping behavior with the `visual` attribute.

## Syntax
```
visual="text-wrap:wrap | text-wrap:nowrap | text-wrap:balance | text-wrap:pretty"
```

## Values

| Value | CSS Output |
|-------|------------|
| `text-wrap:wrap` | `text-wrap: wrap` |
| `text-wrap:nowrap` | `text-wrap: nowrap` |
| `text-wrap:balance` | `text-wrap: balance` |
| `text-wrap:pretty` | `text-wrap: pretty` |

## Examples

```html
<p visual="text-wrap:wrap">Normal wrapping</p>
<p visual="text-wrap:nowrap">No wrapping</p>
<h1 visual="text-wrap:balance">Headlines with balanced line breaks</h1>
<p visual="text-wrap:pretty">Pretty wrapping that avoids orphans</p>
```

## Note

- `text-wrap:balance` creates more even line lengths (good for headings)
- `text-wrap:pretty` prevents orphan words at the end of paragraphs
