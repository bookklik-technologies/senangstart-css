# Contoh

Contoh komponen sedia guna dibina dengan SenangStart CSS.

## Pautan Pantas

- [Kad](/ms/examples/cards) — Kad profil, kad harga, kad ciri
- [Navigasi](/ms/examples/navigation) — Navbar, sidebar, menu
- [Bahagian Hero](/ms/examples/hero) — Hero halaman pendaratan
- [Borang](/ms/examples/forms) — Input, butang, layout borang

## Bermula

Semua contoh menggunakan CDN SenangStart untuk penggunaan tanpa konfigurasi:

```html
<!DOCTYPE html>
<html>
<head>
  <script src="https://unpkg.com/@bookklik/senangstart-css/dist/senangstart-css.min.js"></script>
</head>
<body>
  <!-- Tampal mana-mana contoh di sini -->
</body>
</html>
```

## Kad Ringkas

```html
<div
  layout="flex col"
  space="w:[320px] p:medium"
  visual="bg:white rounded:big shadow:medium"
>
  <h3 visual="font:bold text-size:big text:dark">Tajuk Kad</h3>
  <p space="m-t:small" visual="text:grey">
    Penerangan kad di sini.
  </p>
  <button
    space="m-t:medium p-y:small"
    visual="bg:primary text:white rounded:medium"
  >
    Tindakan
  </button>
</div>
```

## Navigasi Asas

```html
<nav
  layout="flex between center"
  space="p-x:big p-y:small"
  visual="bg:white shadow:small"
>
  <div visual="font:bold text-size:big text:primary">Logo</div>
  <div layout="flex" space="g:medium">
    <a visual="text:dark hover:text:primary">Laman Utama</a>
    <a visual="text:grey hover:text:primary">Tentang</a>
    <a visual="text:grey hover:text:primary">Hubungi</a>
  </div>
</nav>
```

## Bahagian Hero

```html
<section
  layout="flex col center"
  space="p:giant min-h:[80vh]"
  visual="bg:dark text:white"
>
  <h1 visual="text-size:vast font:bold text:center">
    Selamat Datang
  </h1>
  <p space="m-t:medium max-w:[600px]" visual="text:light text:center text-size:big">
    Bina antara muka cantik dengan bahasa semula jadi.
  </p>
  <button
    space="m-t:big p-x:big p-y:small"
    visual="bg:primary text:white rounded:medium hover:bg:[#2563EB]"
  >
    Bermula
  </button>
</section>
```
