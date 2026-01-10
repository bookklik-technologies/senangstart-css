# Will Change

Beri petunjuk kepada pelayar tentang perubahan akan datang

## Sintaks
```
visual="will-change:[value]"
```

## Nilai

| Nilai | CSS Output | Huraian |
|-------|------------|-------------|
| `auto` | `will-change: auto` | Pengoptimuman automatik |
| `scroll` | `will-change: scroll-position` | Perubahan skrol |
| `contents` | `will-change: contents` | Perubahan kandungan |
| `transform` | `will-change: transform` | Perubahan transform |
| `opacity` | `will-change: opacity` | Perubahan kelegapan |

## Contoh

```html
<div visual="will-change:transform">Optimized for animation</div>
```

## Responsif

```html
<!-- Contoh responsif -->
<div visual="mob:... tab:... lap:...">
  Kandungan responsif
</div>
```
