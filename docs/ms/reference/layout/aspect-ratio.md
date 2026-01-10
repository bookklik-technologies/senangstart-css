# Nisbah Aspek

Mengawal nisbah aspek elemen dengan atribut `layout`.

## Sintaks
```
layout="aspect:[value]"
```

## Nilai

| Nilai | Output CSS |
|-------|------------|
| `aspect:auto` | `aspect-ratio: auto` |
| `aspect:square` | `aspect-ratio: 1 / 1` |
| `aspect:video` | `aspect-ratio: 16 / 9` |
| `aspect:[4/3]` | `aspect-ratio: 4 / 3` |

## Contoh

```html
<!-- Bekas video -->
<div layout="aspect:video">Bekas video 16:9</div>

<!-- Imej segi empat sama -->
<img layout="aspect:square object:cover" src="photo.jpg">

<!-- Nisbah aspek tersuai -->
<div layout="aspect:[4/3]">Nisbah 4:3</div>
<div layout="aspect:[21/9]">Nisbah ultralebar</div>
```

## Corak Biasa

```html
<!-- Embed video responsif -->
<div layout="aspect:video overflow:hidden rounded:medium">
  <iframe src="..." layout="absolute inset:0" space="w:[100%] h:[100%]"></iframe>
</div>

<!-- Grid gambar kecil segi empat sama -->
<div layout="grid grid-cols:3" space="g:small">
  <img layout="aspect:square object:cover" src="1.jpg">
  <img layout="aspect:square object:cover" src="2.jpg">
  <img layout="aspect:square object:cover" src="3.jpg">
</div>
```
