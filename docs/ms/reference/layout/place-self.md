# Place Self

Mengawal penjajaran item grid individu dalam kedua-dua paksi dengan atribut `layout`.

## Sintaks
```
layout="place-self:[value]"
```

## Nilai

| Nilai | Output CSS |
|-------|------------|
| `place-self:auto` | `place-self: auto` |
| `place-self:start` | `place-self: start` |
| `place-self:end` | `place-self: end` |
| `place-self:center` | `place-self: center` |
| `place-self:stretch` | `place-self: stretch` |

## Contoh

```html
<div layout="grid grid-cols:2">
  <div layout="place-self:center">Ditengahkan dalam sel</div>
  <div>Penjajaran lalai</div>
</div>
```
