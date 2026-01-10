# Word Break

Control word breaking behavior with the `visual` attribute.

## Syntax
```
visual="word-break:normal | overflow-wrap:break-word | word-break:break-all | word-break:keep-all"
```

## Values

| Value | CSS Output |
|-------|------------|
| `word-break:normal` | `word-break: normal` |
| `overflow-wrap:break-word` | `overflow-wrap: break-word` |
| `word-break:break-all` | `word-break: break-all` |
| `word-break:keep-all` | `word-break: keep-all` |

## Examples

```html
<p visual="word-break:normal">Normal word breaking</p>
<p visual="overflow-wrap:break-word">Loooooooongwordbreakshere when needed</p>
<p visual="word-break:break-all">Breakatanycharacterifneeded</p>
<p visual="word-break:keep-all">Keep words together (CJK)</p>
```
