# Penjajaran Snap Skrol

Mengawal di mana elemen snap dalam bekasnya dengan atribut `visual`.

## Sintaks
```
visual="snap-align:[nilai]"
```

## Nilai

| Nilai | Output CSS |
|-------|------------|
| `snap-align:start` | `scroll-snap-align: start` |
| `snap-align:center` | `scroll-snap-align: center` |
| `snap-align:end` | `scroll-snap-align: end` |
| `snap-align:none` | `scroll-snap-align: none` |

## Contoh

```html
<!-- Karusel mendatar dengan penjajaran permulaan -->
<div visual="snap:x" layout="flex overflow-x:auto">
  <div visual="snap-align:start" space="w:[300px]">Kad 1</div>
  <div visual="snap-align:start" space="w:[300px]">Kad 2</div>
  <div visual="snap-align:start" space="w:[300px]">Kad 3</div>
</div>

<!-- Titik snap ditengahkan -->
<div visual="snap:x" layout="flex overflow-x:auto">
  <div visual="snap-align:center">Item ditengahkan</div>
</div>
```

## Nota

Gunakan `snap-align` pada elemen anak dalam bekas dengan `snap:x` atau `snap:y`.
