# Will Change

Petunjuk kepada pelayar tentang perubahan yang dijangka dengan atribut `visual`.

## Sintaks
```
visual="will-change:[nilai]"
```

## Nilai

| Nilai | Output CSS |
|-------|------------|
| `will-change:auto` | `will-change: auto` |
| `will-change:scroll` | `will-change: scroll-position` |
| `will-change:contents` | `will-change: contents` |
| `will-change:transform` | `will-change: transform` |
| `will-change:opacity` | `will-change: opacity` |

## Contoh

```html
<!-- Optimumkan untuk animasi transform -->
<div visual="will-change:transform hover:scale:[1.1]">
  Hover untuk skala
</div>

<!-- Optimumkan untuk peralihan kelegapan -->
<div visual="will-change:opacity hover:opacity:[0.5]">
  Hover untuk pudar
</div>

<!-- Optimumkan untuk prestasi skrol -->
<div visual="will-change:scroll" layout="overflow:auto">
  Kandungan skrol berat
</div>
```

## Nota

> ⚠️ **Gunakan dengan berhati-hati!** `will-change` menggunakan sumber pelayar. Hanya gunakan pada elemen yang benar-benar akan berubah.

## Amalan Terbaik

- Gunakan sebelum animasi bermula
- Buang selepas animasi selesai
- Jangan gunakan pada terlalu banyak elemen
