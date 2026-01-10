# Align Items

Mengawal penjajaran menegak item flex dengan atribut `layout`.

## Sintaks
```
layout="items:[value]"
```

## Nilai

| Nilai | Output CSS |
|-------|------------|
| `items:start` | `align-items: flex-start` |
| `items:end` | `align-items: flex-end` |
| `items:center` | `align-items: center` |
| `items:baseline` | `align-items: baseline` |
| `items:stretch` | `align-items: stretch` |

## Contoh

```html
<div layout="flex items:center">Item ditengahkan secara menegak</div>
<div layout="flex items:start">Item diselaraskan ke atas</div>
<div layout="flex items:end">Item diselaraskan ke bawah</div>
<div layout="flex items:baseline">Diselaraskan mengikut garis dasar teks</div>
```

## Responsif

```html
<div layout="flex items:start tab:items:center">
  Atas pada mudah alih, tengah pada tablet+
</div>
```
