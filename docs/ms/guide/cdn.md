# CDN (Tanpa Bina)

Cara terpantas untuk guna SenangStart CSS — tiada langkah bina diperlukan.

## Mula Pantas

Tambah satu tag skrip ke HTML anda:

```html
<!DOCTYPE html>
<html>
<head>
  <title>Aplikasi Saya</title>
  <script src="https://unpkg.com/@bookklik/senangstart-css/dist/senangstart-css.min.js"></script>
</head>
<body>
  <div
    layout="flex col center"
    space="p:big"
    visual="bg:primary text:white rounded:big"
  >
    Hello SenangStart!
  </div>
</body>
</html>
```

Itu sahaja! Tiada npm, tiada proses bina, tiada konfigurasi.

## Bagaimana Ia Berfungsi

CDN JIT (Just-In-Time) runtime:

1. **Imbas DOM** — Cari semua elemen dengan atribusi `layout`, `space`, dan `visual`
2. **Jana CSS** — Kompil style secara on-the-fly dalam pelayar
3. **Suntik Styles** — Cipta tag `<style>` dengan CSS terkompil
4. **Pantau Perubahan** — Guna MutationObserver untuk kandungan dinamik

## Konfigurasi Tersuai

Tindih ganti nilai tema lalai dengan config inline:

```html
<script type="senangstart/config">
{
  "theme": {
    "colors": {
      "brand": "#8B5CF6",
      "accent": "#EC4899"
    },
    "spacing": {
      "huge": "256px"
    }
  }
}
</script>
<script src="https://unpkg.com/@bookklik/senangstart-css/dist/senangstart-css.min.js"></script>
```

Sekarang anda boleh guna nilai tersuai anda:

```html
<div visual="bg:brand text:accent">Warna tersuai!</div>
<div space="p:huge">Padding huge!</div>
```

## Pembangunan Tempatan

Untuk pembangunan tempatan tanpa CDN, guna fail JIT tempatan:

```html
<script src="./path/to/senangstart/src/cdn/senangstart-engine.js"></script>
```

## Pertimbangan Prestasi

::: warning Bila Guna CLI
CDN JIT sesuai untuk:
- Prototaip dan eksperimen
- Mempelajari rangka kerja
- Projek kecil dan demo
- Pembangunan pantas

Untuk aplikasi produksi, pertimbangkan [CLI build](/ms/guide/cli) untuk:
- Prestasi lebih baik (CSS pra-kompil)
- Saiz fail lebih kecil
- Tiada beban kelola
:::

## Sokongan Pelayar

CDN JIT menggunakan ciri JavaScript moden:
- Sintaksis ES6+
- API MutationObserver
- CSS Custom Sari Diri

Disokong dalam semua pelayar moden (Chrome, Firefox, Safari, Edge).

## Debugging

Buka Developer Tools pelayar anda untuk lihat:

```
[SenangStart CSS] JIT runtime initialized ✓
```

Jika anda tidak nampak mesej ini, periksa bahawa:
1. Skrip memuatkan dengan betul
2. Tiada ralat JavaScript dalam konsol
3. Config JSON (jika digunakan) adalah sah
