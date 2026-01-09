# Reka Bentuk Responsif

SenangStart menggunakan prefiks responsif mobile-first.

## Titik Henti

| Prefiks | Min-Width | Peranti |
|---------|-----------|---------|
| (tiada) | 0px | Mudah alih (lalai) |
| `mob:` | 480px | Mudah alih besar |
| `tab:` | 768px | Tablet |
| `lap:` | 1024px | Komputer riba |
| `desk:` | 1280px | Desktop |

## Penggunaan

Tambah prefiks breakpoint kepada mana-mana nilai space atau layout:

```html
<div space="p:small tab:p:medium lap:p:big">
  <!-- Small padding pada mudah alih -->
  <!-- Medium padding pada tablet+ -->
  <!-- Big padding pada laptop+ -->
</div>
```

## Corak Biasa

### Padding Responsif

```html
<section space="p:medium tab:p:big desk:p:giant">
  Kandungan dengan padding progresif
</section>
```

### Layout Responsif

```html
<div layout="flex col tab:row">
  <!-- Bertindih pada mudah alih, horizontal pada tablet+ -->
  <div>Item 1</div>
  <div>Item 2</div>
</div>
```

### Grid Responsif

```html
<div
  layout="grid"
  space="g:small tab:g:medium"
  style="grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));"
>
  <div>Kad 1</div>
  <div>Kad 2</div>
  <div>Kad 3</div>
</div>
```

### Sembunyi pada Mudah Alih

```html
<nav layout="hidden tab:flex">
  <!-- Tersembunyi pada mudah alih, flex pada tablet+ -->
</nav>
```

### Navigasi Mudah Alih

```html
<!-- Butang menu mudah alih -->
<button layout="block tab:hidden">☰ Menu</button>

<!-- Navigasi desktop -->
<nav layout="hidden tab:flex" space="g:medium">
  <a>Laman Utama</a>
  <a>Tentang</a>
  <a>Hubungi</a>
</nav>
```

## Contoh Responsif Penuh

```html
<div
  layout="flex col lap:row"
  space="p:medium tab:p:big gap:medium tab:gap:big"
>
  <!-- Sidebar -->
  <aside
    space="w:[100%] lap:w:[300px]"
    visual="bg:light"
  >
    Kandungan sidebar
  </aside>
  
  <!-- Kandungan utama -->
  <main space="w:[100%] lap:w:[calc(100%-300px)]">
    Kandungan utama
  </main>
</div>
```

## Titik Henti Tersuai

Tindih ganti dalam `senangstart.config.js`:

```javascript
export default {
  theme: {
    screens: {
      'mob': '480px',
      'tab': '768px',
      'lap': '1024px',
      'desk': '1280px',
      'wide': '1536px'  // Tambah breakpoint tersuai
    }
  }
}
```

Guna breakpoint tersuai anda:

```html
<div space="p:big wide:p:giant">
  Padding extra besar pada skrin lebar
</div>
```
