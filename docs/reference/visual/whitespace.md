# Whitespace

Control whitespace handling with the `visual` attribute.

## Syntax
```
visual="white-space:normal | white-space:nowrap | white-space:pre | white-space:pre-line | white-space:pre-wrap"
```

## Values

| Value | CSS Output |
|-------|------------|
| `white-space:normal` | `white-space: normal` |
| `white-space:nowrap` | `white-space: nowrap` |
| `white-space:pre` | `white-space: pre` |
| `white-space:pre-line` | `white-space: pre-line` |
| `white-space:pre-wrap` | `white-space: pre-wrap` |

## Examples

```html
<p visual="white-space:normal">Normal whitespace (collapses spaces)</p>
<p visual="white-space:nowrap">No line breaks allowed</p>
<pre visual="white-space:pre">Preserve   spaces   and
line breaks</pre>
<p visual="white-space:pre-line">Preserve line breaks
but collapse spaces</p>
<p visual="white-space:pre-wrap">Preserve all whitespace
and wrap when needed</p>
```
