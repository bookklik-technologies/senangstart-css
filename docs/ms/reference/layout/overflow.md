# Overflow

Mengawal cara kandungan melimpah daripada bekasnya dengan atribut `layout`.

## Sintaks
```
layout="overflow:[value]"
layout="overflow-x:[value] | overflow-y:[value]"
```

## Nilai

| Nilai | Output CSS |
|-------|------------|
| `overflow:hidden` | `overflow: hidden` |
| `overflow:auto` | `overflow: auto` |
| `overflow:scroll` | `overflow: scroll` |
| `overflow-x:hidden` | `overflow-x: hidden` |
| `overflow-y:auto` | `overflow-y: auto` |

## Contoh

```html
<div layout="overflow:hidden">Kandungan dipotong</div>
<div layout="overflow:auto">Boleh ditatal apabila perlu</div>
<div layout="overflow:scroll">Sentiasa menunjukkan bar tatal</div>

<!-- Khusus paksi -->
<div layout="overflow-x:auto overflow-y:hidden">
  Tatal mendatar sahaja
</div>
```

## Corak Biasa

```html
<!-- Bekas boleh ditatal dengan ketinggian tetap -->
<div layout="overflow:auto" space="max-h:[400px]">
  Kandungan panjang boleh ditatal...
</div>

<!-- Bekas imej yang dipotong -->
<div layout="overflow:hidden rounded:big">
  <img src="photo.jpg" layout="object:cover">
</div>
```
