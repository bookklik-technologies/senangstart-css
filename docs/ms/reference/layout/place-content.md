# Place Content

Mengawal penjajaran kandungan grid dalam kedua-dua paksi dengan atribut `layout`.

## Sintaks
```
layout="place-content:[value]"
```

## Nilai

| Nilai | Output CSS |
|-------|------------|
| `place-content:start` | `place-content: start` |
| `place-content:end` | `place-content: end` |
| `place-content:center` | `place-content: center` |
| `place-content:between` | `place-content: space-between` |
| `place-content:around` | `place-content: space-around` |
| `place-content:evenly` | `place-content: space-evenly` |
| `place-content:stretch` | `place-content: stretch` |

## Contoh

```html
<div layout="grid place-content:center" space="h:[400px]">
  Ditengahkan dalam kedua-dua arah
</div>
```
