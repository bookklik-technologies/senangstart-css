# Penyesuaian Warna Paksa

Mengawal bagaimana warna elemen menyesuaikan diri dengan mod warna paksa (Windows High Contrast) dengan atribut `visual`.

## Sintaks
```
visual="forced-colors:[nilai]"
```

## Nilai

| Nilai | Output CSS |
|-------|------------|
| `forced-colors:auto` | `forced-color-adjust: auto` |
| `forced-colors:none` | `forced-color-adjust: none` |

## Contoh

```html
<!-- Benarkan sistem menyesuaikan warna (lalai) -->
<div visual="forced-colors:auto">
  Warna akan menyesuaikan dengan mod kontras tinggi
</div>

<!-- Kekalkan warna asal dalam mod kontras tinggi -->
<div visual="forced-colors:none bg:primary text:white">
  Warna kekal seperti yang ditakrifkan
</div>
```

## Kegunaan

Gunakan `forced-colors:none` dengan berhati-hati untuk:
- Elemen jenama di mana warna penting untuk makna
- Carta dan graf dengan data berkod warna
- UI di mana warna paksa akan merosakkan kebolehgunaan

> ⚠️ **Nota kebolehcapaian**: Gunakan `forced-colors:none` dengan berhati-hati. Mod kontras tinggi adalah ciri kebolehcapaian.
