# Bekas (Container)

Memusatkan dan mengekang lebar kandungan dengan atribut `layout`.

## Sintaks
```
layout="container"
```

## Output CSS

Utiliti bekas menggunakan:
```css
width: 100%;
margin-left: auto;
margin-right: auto;
```

## Contoh

```html
<!-- Bekas berpusat asas -->
<div layout="container" space="p-x:4">
  <h1>Tajuk Halaman</h1>
  <p>Kandungan berpusat dengan padding mendatar.</p>
</div>

<!-- Bekas dengan lebar maksimum -->
<div layout="container" space="max-w:[1200px] p-x:4">
  <nav>Bar Navigasi</nav>
</div>

<!-- Hero lebar penuh dengan kandungan terkandung -->
<section visual="bg:primary">
  <div layout="container" space="p:8 max-w:[1280px]">
    <h1 visual="text:white">Bahagian Hero</h1>
  </div>
</section>
```

## Dengan Lebar Maksimum Responsif

Gabungkan dengan `max-w` untuk bekas responsif:

```html
<div layout="container" space="max-w:[640px] mob:max-w:[768px] tab:max-w:[1024px] lap:max-w:[1280px]">
  Bekas responsif
</div>
```

## Corak Biasa

```html
<!-- Susun atur blog/artikel -->
<article layout="container" space="max-w:[65ch] p-x:4">
  <p>Panjang baris yang boleh dibaca untuk kandungan panjang.</p>
</article>

<!-- Susun atur papan pemuka -->
<main layout="container" space="max-w:[1440px] p-x:6">
  <div layout="grid grid-cols:12 g:6">
    <!-- Kandungan grid -->
  </div>
</main>
```
