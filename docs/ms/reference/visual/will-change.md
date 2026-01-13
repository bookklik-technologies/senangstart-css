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

## Pratonton

<div space="p-x:big p-b:medium m-t:medium" visual="border-w:thin border:neutral-100 dark:border:neutral-800 rounded:medium">

### Akan Berubah

<div layout="flex col" space="g:medium">
  <p space="m:none" visual="text:neutral-600 dark:text:neutral-400 text-sm"><code>visual="will-change:transform"</code> - Optimumkan untuk perubahan akan datang</p>
<div layout="flex" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div space="p:small" visual="bg:primary text:white rounded:small">transform</div>
  <div space="p:small" visual="bg:primary text:white rounded:small">opacity</div>
</div>
</div>

<details>
<summary>Lihat Kod</summary>

```html
<div layout="flex" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div space="p:small" visual="bg:primary text:white rounded:small">transform</div>
  <div space="p:small" visual="bg:primary text:white rounded:small">opacity</div>
</div>
```

</details>

</div>
