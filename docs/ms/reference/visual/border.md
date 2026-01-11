# Warna Sempadan

Tetapkan warna sempadan menggunakan token warna semantik atau warna gaya Tailwind.

## Sintaks
```
visual="border:[color]"
visual="border-t:[color]"   <!-- atas sahaja -->
visual="border-b:[color]"   <!-- bawah sahaja -->
visual="border-l:[color]"   <!-- kiri sahaja -->
visual="border-r:[color]"   <!-- kanan sahaja -->
visual="border-x:[color]"   <!-- kiri + kanan -->
visual="border-y:[color]"   <!-- atas + bawah -->
```

## Nilai

Semua token warna dari tema disokong (contohnya, `primary`, `secondary`, `success`, `warning`, `danger`, `gray-500`, `blue-300`, dsb.)

## Contoh

### Semua Sisi
```html
<div visual="border:primary border-w:small">Sempadan primary pada semua sisi</div>
<div visual="border:danger border-w:[2px]">Sempadan merah pada semua sisi</div>
```

### Berarah
```html
<!-- Sempadan atas sahaja -->
<div visual="border-t:primary border-t-w:[2px]">Sempadan atas</div>

<!-- Sempadan bawah sahaja -->
<div visual="border-b:warning border-b-w:small">Sempadan bawah</div>

<!-- Sempadan kiri dan kanan -->
<div visual="border-x:secondary border-x-w:[1px]">Sempadan mengufuk</div>

<!-- Sempadan atas dan bawah -->
<div visual="border-y:success border-y-w:tiny">Sempadan menegak</div>
```

## Nilai Arbitrari

Sokong nilai warna CSS tersuai:

```html
<div visual="border:[#ff5500] border-w:[2px]">Sempadan oren tersuai</div>
<div visual="border-t:[rgb(100,150,200)] border-t-w:[1px]">Sempadan atas tersuai</div>
```

## Keadaan

```html
<button visual="border:gray-300 border-w:[1px] hover:border:primary focus:border:blue-500">
  Sempadan interaktif
</button>
```

## Responsif

```html
<div visual="border:gray-300 tab:border:primary lap:border:success border-w:[1px]">
  Warna sempadan responsif
</div>
```

::: tip
Apabila menggunakan sempadan berarah, pasangkan utiliti warna dengan utiliti lebar yang sepadan (contoh: `border-t` dengan `border-t-w`).
:::
