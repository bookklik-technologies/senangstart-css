# Word Break

Control word breaking

## Syntax
```
visual="[break-value]"
```

## Values

| Value | CSS Output | Description |
|-------|------------|-------------|
| `break-normal` | `overflow-wrap: normal; word-break: normal` | Normal break |
| `break-words` | `overflow-wrap: break-word` | Break words |
| `break-all` | `word-break: break-all` | Break all |
| `break-keep` | `word-break: keep-all` | Keep all |

## Examples

```html
<div visual="break-words">Long words break properly</div>
```
