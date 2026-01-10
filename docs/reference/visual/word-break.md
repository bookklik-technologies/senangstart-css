# Word Break

Control word breaking behavior with the `visual` attribute.

## Values

| Value | CSS Output |
|-------|------------|
| `break-normal` | `word-break: normal` |
| `break-words` | `overflow-wrap: break-word` |
| `break-all` | `word-break: break-all` |
| `break-keep` | `word-break: keep-all` |

## Examples

```html
<p visual="break-normal">Normal word breaking</p>
<p visual="break-words">Loooooooongwordbreakshere when needed</p>
<p visual="break-all">Breakatanycharacterifneeded</p>
<p visual="break-keep">Keep words together (CJK)</p>
```
