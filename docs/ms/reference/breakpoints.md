# Rujukan Titik Henti

Rujukan lengkap untuk breakpoint responsif.

## Titik Henti Lalai

| Prefiks | Min-Width | Sasaran Peranti |
|---------|-----------|-----------------|
| (tiada) | 0px | Mudah alih (lalai) |
| `mob:` | 480px | Mudah alih besar |
| `tab:` | 768px | Tablet |
| `lap:` | 1024px | Komputer riba |
| `desk:` | 1280px | Desktop |
| `print:` | print | Media cetak |

## Keserasian Tailwind

SenangStart menyokong titik henti (breakpoint) lalai Tailwind CSS menggunakan prefiks `tw-`.

| Prefiks | Min-Width | Persamaan Tailwind |
|---------|-----------|--------------------|
| `tw-sm:` | 640px | `sm:` |
| `tw-md:` | 768px | `md:` |
| `tw-lg:` | 1024px | `lg:` |
| `tw-xl:` | 1280px | `xl:` |
| `tw-2xl:` | 1536px | `2xl:` |

### Penggunaan dengan Skala Tailwind

```html
<div 
  space="p:tw-4 tw-md:p:tw-8" 
  visual="rounded:tw-lg tw-lg:shadow:tw-xl"
>
  Penskalaan serasi Tailwind
</div>
```

## Media Query CSS

```css
/* Mobile first - tiada prefiks diperlukan */

@media (min-width: 480px) { /* mob: */ }
@media (min-width: 768px) { /* tab: */ }
@media (min-width: 1024px) { /* lap: */ }
@media (min-width: 1280px) { /* desk: */ }
@media print { /* print: */ }
```

## Penggunaan

### Jarak Responsif

```html
<div space="p:small tab:p:medium lap:p:big">
  Padding progresif
</div>
```

### Layout Responsif

```html
<div layout="flex col tab:row">
  Column pada mudah alih, row pada tablet+
</div>

<nav layout="hidden tab:flex">
  Tersembunyi pada mudah alih, kelihatan pada tablet+
</nav>
```

### Tipografi Responsif

```html
<h1 visual="text-size:big tab:text-size:giant lap:text-size:vast">
  Tajuk responsif
</h1>
```

### Gaya Cetakan

```html
<div space="hidden print:block p:medium bg:white">
  Kandungan yang dicetak sahaja
</div>

<button visual="hidden print:inline border:w-thin border:dark">
  Cetak halaman ini
</button>
```

## Pendekatan Mobile-First

SenangStart menggunakan reka bentuk responsif mobile-first:

1. **Gaya asas** digunakan untuk semua saiz skrin
2. **Prefiks breakpoint** digunakan dari breakpoint itu KE ATAS

```html
<!-- Ini bermaksud: -->
<!-- - Mudah alih: small padding -->
<!-- - Tablet dan ke atas: medium padding -->
<!-- - Laptop dan ke atas: big padding -->
<div space="p:small tab:p:medium lap:p:big">
  Kandungan
</div>
```

## Penyesuaian

Tambah atau ubah breakpoint dalam `senangstart.config.js`:

```javascript
export default {
  theme: {
    screens: {
      'mob': '480px',
      'tab': '768px',
      'lap': '1024px',
      'desk': '1280px',
      'wide': '1536px',    // Tambah lebih lebar
      'ultra': '1920px'    // Tambah ultra-wide
    }
  }
}
```

Guna breakpoint tersuai:

```html
<div space="desk:p:big wide:p:giant ultra:p:vast">
  Padding skrin besar
</div>
```

## Corak Biasa

### Tunjuk/Sembunyi Elemen

```html
<!-- Mudah alih sahaja -->
<div layout="block tab:hidden">Menu mudah alih</div>

<!-- Desktop sahaja -->
<div layout="hidden lap:block">Sidebar desktop</div>
```

### Grid Responsif

```html
<div 
  layout="grid"
  space="g:small tab:g:medium"
  style="grid-template-columns: 1fr; 
         @media (min-width: 768px) { grid-template-columns: repeat(2, 1fr); }"
>
  Kad...
</div>
```

### Kontena Responsif

```html
<div space="p:small tab:p:medium lap:p:big max-w:[1200px] m-x:auto">
  Kontena di tengah dengan padding responsif
</div>
```
