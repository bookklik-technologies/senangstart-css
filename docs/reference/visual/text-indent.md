# Text Indent

Control first-line indentation with the `visual` attribute.

## Values

| Value | CSS Output |
|-------|------------|
| `indent:small` | `text-indent: var(--s-small)` |
| `indent:medium` | `text-indent: var(--s-medium)` |
| `indent:big` | `text-indent: var(--s-big)` |
| `indent:[2em]` | `text-indent: 2em` |

## Examples

```html
<p visual="indent:medium">
  Indented first line of paragraph. The rest of the lines are not indented.
</p>

<p visual="indent:[2em]">
  Custom 2em indent on the first line.
</p>
```
