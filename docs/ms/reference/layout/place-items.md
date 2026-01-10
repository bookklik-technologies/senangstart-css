# Place Items

Mengawal penjajaran lalai item grid dalam kedua-dua paksi dengan atribut `layout`.

## Sintaks
```
layout="place-items:[value]"
```

## Nilai

| Nilai | Output CSS |
|-------|------------|
| `place-items:start` | `place-items: start` |
| `place-items:end` | `place-items: end` |
| `place-items:center` | `place-items: center` |
| `place-items:stretch` | `place-items: stretch` |

## Contoh

```html
<div layout="grid grid-cols:3 place-items:center">
  Semua item ditengahkan dalam sel
</div>
```
