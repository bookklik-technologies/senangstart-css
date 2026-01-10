# List Style

Control list styling with the `visual` attribute.

## List Style Type

| Value | CSS Output |
|-------|------------|
| `list-none` | `list-style-type: none` |
| `list-disc` | `list-style-type: disc` |
| `list-decimal` | `list-style-type: decimal` |

## List Style Position

| Value | CSS Output |
|-------|------------|
| `list-inside` | `list-style-position: inside` |
| `list-outside` | `list-style-position: outside` |

## Examples

```html
<ul visual="list-none">
  <li>No bullets</li>
  <li>Clean list</li>
</ul>

<ul visual="list-disc list-inside">
  <li>Bullet inside</li>
  <li>Text aligns with bullet</li>
</ul>

<ol visual="list-decimal">
  <li>Numbered</li>
  <li>List</li>
</ol>
```
