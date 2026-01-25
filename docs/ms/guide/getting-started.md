# Bermula

Mulakan dengan SenangStart CSS dalam beberapa minit.

## CDN (Tanpa Bina) <Badge type="tip" text="Disyorkan untuk prototaip" />

Cara terpantas untuk cuba SenangStart — tiada langkah bina diperlukan:

```html
<!DOCTYPE html>
<html>
<head>
  <title>Aplikasi Saya</title>
  <!-- Hanya tambah skrip ini -->
  <script src="https://unpkg.com/@bookklik/senangstart-css/dist/senangstart-css.min.js"></script>
</head>
<body>
  <div
    layout="flex col center"
    space="p:big"
    visual="bg:primary text:white rounded:big"
  >
    <h1 visual="text-size:giant font:bold">Hello SenangStart!</h1>
    <p space="m-t:small">Tanpa konfigurasi, stail serta-merta.</p>
  </div>
</body>
</html>
```

### Bagaimana CDN JIT Berfungsi

1. **Imbas DOM** — Cari semua atribusi `layout`, `space`, dan `visual`
2. **Jana CSS** — Kompil style secara on-the-fly dalam pelayar
3. **Suntik Styles** — Cipta tag `<style>` dengan CSS terkompil
4. **Pantau Perubahan** — Guna MutationObserver untuk kemas kini dinamik

### Konfigurasi CDN Tersuai

```html
<script type="senangstart/config">
{
  "theme": {
    "colors": {
      "brand": "#8B5CF6",
      "accent": "#EC4899"
    }
  }
}
</script>
<script src="https://unpkg.com/@bookklik/senangstart-css/dist/senangstart-css.min.js"></script>
```

::: warning
CDN JIT sesuai untuk prototaip dan pembelajaran. Untuk produksi, guna CLI build untuk prestasi lebih baik.
:::

## CLI (Produksi) <Badge type="info" text="Disyorkan untuk produksi" />

### Pemasangan

```bash
# Pasang secara global
npm install -g @bookklik/senangstart-css

# Atau guna npx
npx @bookklik/senangstart-css init
```

### Mulakan Konfigurasi

```bash
senangstart init
```

Ini mencipta `senangstart.config.js` dalam root projek anda.

### Tambah ke HTML

```html
<head>
  <link rel="stylesheet" href="./public/senangstart.css">
</head>
```

### Mula Pembangunan

```bash
senangstart dev
```

Ini memantau fail anda dan membina semula apabila ada perubahan.

### Bina untuk Produksi

```bash
senangstart build --minify
```

## Komponen Pertama Anda

Mari cipta kad ringkas:

```html
<div
  layout="flex col"
  space="w:[320px] p:medium"
  visual="bg:white rounded:big shadow:medium"
>
  <div layout="flex between" space="m-b:big">
    <span visual="font:bold text-size:big">Profil</span>
    <span visual="text:primary">Edit</span>
  </div>
  <div layout="flex col" space="g:small">
    <label visual="text:grey text-size:small">Nama Pengguna</label>
    <div visual="text:dark">@senang_dev</div>
  </div>
</div>
```

**Apa yang berlaku:**

- `layout="flex col"` — Flexbox, arah menegak
- `space="w:[320px] p:medium"` — Lebar 320px, padding medium
- `visual="bg:white rounded:big shadow:medium"` — Latar putih, sudut bulat, bayang

## Untuk Pembantu AI

Jika anda menggunakan pembantu pengekodan AI (seperti Cursor, Windsurf, atau lain-lain), anda boleh membekalkan fail konteks khusus kami kepada mereka. Fail ini mengandungi senarai penuh rujukan yang tersedia dan arahan penggunaan dalam format yang disokong untuk LLMs.

Lokasi fail: [`https://bookklik-technologies.github.io/senangstart-css/llms.txt`](https://bookklik-technologies.github.io/senangstart-css/llms.txt)

## Langkah Seterusnya

- [Sintaksis Tri-Atribusi](/ms/guide/tri-attribute) — Selami layout, space, visual
- [Skala Semula Jadi](/ms/guide/natural-scale) — Fahami falsafah jarak
- [Konfigurasi](/ms/guide/configuration) — Sesuaikan tema
