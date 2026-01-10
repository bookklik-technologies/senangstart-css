# Justify Items

Mengawal penjajaran horizontal lalai item grid dengan atribut `layout`.

## Sintaks
```
layout="justify-items:[value]"
```

## Nilai

| Nilai | Output CSS |
|-------|------------|
| `justify-items:start` | `justify-items: start` |
| `justify-items:end` | `justify-items: end` |
| `justify-items:center` | `justify-items: center` |
| `justify-items:stretch` | `justify-items: stretch` |

## Contoh

```html
<div layout="grid grid-cols:3 justify-items:center">
  Semua item ditengahkan secara horizontal dalam sel mereka
</div>

<div layout="grid grid-cols:3 justify-items:start">
  Semua item diselaraskan ke permulaan sel mereka
</div>
```
