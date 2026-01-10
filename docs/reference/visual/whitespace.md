# Whitespace

Control whitespace handling with the `visual` attribute.

## Values

| Value | CSS Output |
|-------|------------|
| `whitespace-normal` | `white-space: normal` |
| `whitespace-nowrap` | `white-space: nowrap` |
| `whitespace-pre` | `white-space: pre` |
| `whitespace-pre-line` | `white-space: pre-line` |
| `whitespace-pre-wrap` | `white-space: pre-wrap` |

## Examples

```html
<p visual="whitespace-normal">Normal whitespace (collapses spaces)</p>
<p visual="whitespace-nowrap">No line breaks allowed</p>
<pre visual="whitespace-pre">Preserve   spaces   and
line breaks</pre>
<p visual="whitespace-pre-line">Preserve line breaks
but collapse spaces</p>
<p visual="whitespace-pre-wrap">Preserve all whitespace
and wrap when needed</p>
```
