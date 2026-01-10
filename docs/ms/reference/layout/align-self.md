# Align Self

Mengawal penjajaran menegak item flex individu dengan atribut `layout`.

## Sintaks
```
layout="self:[value]"
```

## Nilai

| Nilai | Output CSS |
|-------|------------|
| `self:auto` | `align-self: auto` |
| `self:start` | `align-self: flex-start` |
| `self:end` | `align-self: flex-end` |
| `self:center` | `align-self: center` |
| `self:baseline` | `align-self: baseline` |
| `self:stretch` | `align-self: stretch` |

## Contoh

```html
<div layout="flex items:start" space="h:[200px]">
  <div>Diselaraskan ke atas</div>
  <div layout="self:end">Yang ini diselaraskan ke bawah</div>
  <div layout="self:center">Yang ini ditengahkan</div>
</div>
```
