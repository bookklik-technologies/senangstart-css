# Word Break

Kawal pemecahan perkataan

## Sintaks
```
visual="[break-value]"
```

## Nilai

| Nilai | CSS Output | Huraian |
|-------|------------|-------------|
| `break-normal` | `overflow-wrap: normal; word-break: normal` | Pemecahan normal |
| `break-words` | `overflow-wrap: break-word` | Pecah perkataan |
| `break-all` | `word-break: break-all` | Pecah semua |
| `break-keep` | `word-break: keep-all` | Kekalkan semua |

## Contoh

```html
<div visual="break-words">Long words break properly</div>
```
