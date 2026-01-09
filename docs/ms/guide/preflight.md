---
title: Preflight
description: Set gaya asas yang jelas untuk menormalkan lalai pelayar
---

# Preflight

Preflight adalah set gaya asas SenangStart CSS yang jelas, direka untuk melicinkan ketidakkonsistenan antara pelayar dan memudahkan anda bekerja dalam batasan sistem reka bentuk anda.

## Gambaran Keseluruhan

Apabila anda memasukkan SenangStart CSS dalam projek anda, Preflight digunakan secara automatik. Ia dibina di atas [modern-normalize](https://github.com/sindresorhus/modern-normalize) dan menambah gaya tambahan yang kami dapati berguna.

## Apa Yang Preflight Lakukan

### Reset Box-Sizing

Semua elemen menggunakan saiz `border-box`, memudahkan pengurusan lebar dengan padding dan border:

```css
*,
::before,
::after {
  box-sizing: border-box;
  border-width: 0;
  border-style: solid;
}
```

### Margin Dikeluarkan

Margin lalai dipadamkan dari semua elemen untuk titik permulaan yang konsisten:

```css
blockquote, dl, dd, h1, h2, h3, h4, h5, h6, hr, figure, p, pre {
  margin: 0;
}
```

### Reset Tajuk

Tajuk tidak digayakan secara lalai, mewarisi saiz dan berat fon. Ini menggalakkan penggunaan markup semantik sambil menggayakan tajuk melalui sistem reka bentuk anda:

```css
h1, h2, h3, h4, h5, h6 {
  font-size: inherit;
  font-weight: inherit;
}
```

### Senarai Tidak Digayakan

Senarai mempunyai gaya lalai dikeluarkan. Tambah gaya senarai kembali apabila anda memerlukannya:

```css
ol, ul, menu {
  list-style: none;
  margin: 0;
  padding: 0;
}
```

### Imej Tahap-Blok

Imej dan elemen ganti lain ditetapkan kepada `display: block` dan dikekang kepada lebar induk:

```css
img, svg, video, canvas, audio, iframe, embed, object {
  display: block;
  vertical-align: middle;
}

img, video {
  max-width: 100%;
  height: auto;
}
```

### Normalisasi Elemen Borang

Elemen borang mewarisi sifat fon dari induk mereka:

```css
button, input, optgroup, select, textarea {
  font-family: inherit;
  font-size: 100%;
  font-weight: inherit;
  line-height: inherit;
  color: inherit;
  margin: 0;
  padding: 0;
}
```

### Butang Mempunyai Kursor Pointer

Butang dan elemen dengan `role="button"` mendapat kursor pointer:

```css
button, [role="button"] {
  cursor: pointer;
}
```

## Menyahaktifkan Preflight

Jika anda perlu menyahaktifkan Preflight sepenuhnya, anda boleh melakukannya dalam konfigurasi anda:

### Melalui Fail Konfigurasi

```js
// senangstart.config.js
export default {
  preflight: false,
  // ... pilihan lain
}
```

### Melalui Bendera CLI

```bash
# Bina tanpa Preflight
npx senangstart build --no-preflight

# Mod dev tanpa Preflight
npx senangstart dev --no-preflight
```

## Bila Untuk Menyahaktifkan Preflight

Pertimbangkan untuk menyahaktifkan Preflight jika:

- Anda mengintegrasikan SenangStart CSS ke dalam projek sedia ada dengan reset/normalize sendiri
- Anda menggunakan rangka kerja CSS lain yang sudah menyediakan gaya asas
- Anda perlu mengekalkan gaya lalai pelayar untuk kes penggunaan tertentu

## Gaya Preflight Penuh

Untuk senarai lengkap gaya Preflight, lihat [sumber preflight.js](https://github.com/bookklik-technologies/senangstart-css/blob/main/src/compiler/generators/preflight.js).
