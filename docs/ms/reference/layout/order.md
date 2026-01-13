# Order

Kawal susunan item flex/grid

## Sintaks
```
layout="order:[value]"
```

## Nilai

| Nilai | CSS Output | Huraian |
|-------|------------|-------------|
| `first` | `order: -9999` | Pindah ke pertama |
| `last` | `order: 9999` | Pindah ke terakhir |
| `none` | `order: 0` | Susunan lalai |
| `1-12` | `order: {n}` | Susunan tertentu |

## Contoh

```html
<div layout="order:first">First item</div>
```
