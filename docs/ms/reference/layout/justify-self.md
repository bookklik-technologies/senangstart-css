# Justify Self

Mengawal penjajaran horizontal item grid individu dengan atribut `layout`.

## Sintaks
```
layout="justify-self:[value]"
```

## Nilai

| Nilai | Output CSS |
|-------|------------|
| `justify-self:auto` | `justify-self: auto` |
| `justify-self:start` | `justify-self: start` |
| `justify-self:end` | `justify-self: end` |
| `justify-self:center` | `justify-self: center` |
| `justify-self:stretch` | `justify-self: stretch` |

## Contoh

```html
<div layout="grid grid-cols:3">
  <div layout="justify-self:end">Diselaraskan ke kanan dalam sel</div>
  <div layout="justify-self:center">Ditengahkan dalam sel</div>
  <div>Penjajaran lalai</div>
</div>
```
