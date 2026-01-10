# Word Break

Mengawal kelakuan pemisahan perkataan dengan atribut `visual`.

## Sintaks
```
visual="word-break:normal | overflow-wrap:break-word | word-break:break-all | word-break:keep-all"
```

## Nilai

| Nilai | Output CSS |
|-------|------------|
| `word-break:normal` | `word-break: normal` |
| `overflow-wrap:break-word` | `overflow-wrap: break-word` |
| `word-break:break-all` | `word-break: break-all` |
| `word-break:keep-all` | `word-break: keep-all` |

## Contoh

```html
<p visual="word-break:normal">Pemisahan perkataan normal</p>
<p visual="overflow-wrap:break-word">Perkataaanpanjangdipisahkandisini apabila perlu</p>
<p visual="word-break:break-all">Dipotongpadamanamanakaksarajikadiperlukan</p>
<p visual="word-break:keep-all">Kekalkan perkataan bersama (CJK)</p>
```
