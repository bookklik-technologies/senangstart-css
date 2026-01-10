# Order

Mengawal susunan visual item flex/grid dengan atribut `layout`.

## Sintaks
```
layout="order:[value]"
```

## Nilai

| Nilai | Output CSS |
|-------|------------|
| `order:first` | `order: -9999` |
| `order:last` | `order: 9999` |
| `order:none` | `order: 0` |
| `order:1` hingga `order:12` | `order: 1` hingga `order: 12` |

## Contoh

```html
<div layout="flex">
  <div layout="order:last">Muncul terakhir</div>
  <div layout="order:first">Muncul pertama</div>
  <div>Tengah (susunan lalai)</div>
</div>

<div layout="flex">
  <div layout="order:3">Ketiga</div>
  <div layout="order:1">Pertama</div>
  <div layout="order:2">Kedua</div>
</div>
```

## Responsif

```html
<!-- Susunan berbeza pada skrin berbeza -->
<div layout="order:last tab:order:first">
  Terakhir pada mudah alih, pertama pada tablet+
</div>
```
