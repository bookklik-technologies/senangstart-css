# Contoh Navigasi

Corak navigasi dibina dengan SenangStart CSS.

## Navbar Ringkas

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

## Navigasi Fixed

```html
<nav
  layout="flex between center fixed z:top"
  space="w:[100%] p-x:big p-y:small"
  visual="bg:white shadow:small"
>
  <div visual="font:bold text-size:big text:primary">Logo</div>
  <div layout="flex" space="g:medium">
    <a visual="text:dark hover:text:primary font:medium">Laman Utama</a>
    <a visual="text:grey hover:text:primary">Produk</a>
    <a visual="text:grey hover:text:primary">Harga</a>
    <a visual="text:grey hover:text:primary">Tentang</a>
  </div>
  <button
    space="p-x:medium p-y:tiny"
    visual="bg:primary text:white rounded:medium hover:bg:[#2563EB]"
  >
    Daftar
  </button>
</nav>
```

## Navigasi Responsif

```html
<!-- Butang menu mudah alih (tersembunyi pada tablet+) -->
<button layout="block tab:hidden" visual="text:dark">
  ☰ Menu
</button>

<!-- Navigasi desktop (tersembunyi pada mudah alih) -->
<nav
  layout="hidden tab:flex between center"
  space="p-x:big p-y:small"
  visual="bg:white"
>
  <div visual="font:bold text-size:big">Logo</div>
  <div layout="flex" space="g:medium">
    <a visual="text:dark hover:text:primary">Laman Utama</a>
    <a visual="text:grey hover:text:primary">Tentang</a>
  </div>
</nav>
```

## Navigasi Sidebar

```html
<aside
  layout="flex col"
  space="w:[250px] h:[100vh] p:medium"
  visual="bg:dark"
>
  <div space="m-b:big" visual="font:bold text-size:big text:white">
    Dashboard
  </div>
  
  <nav layout="flex col" space="g:tiny">
    <a 
      space="p:small"
      visual="text:white bg:[rgba(255,255,255,0.1)] rounded:small"
    >
      🏠 Laman Utama
    </a>
    <a 
      space="p:small"
      visual="text:light hover:bg:[rgba(255,255,255,0.1)] rounded:small"
    >
      📊 Analitik
    </a>
    <a 
      space="p:small"
      visual="text:light hover:bg:[rgba(255,255,255,0.1)] rounded:small"
    >
      👥 Pengguna
    </a>
    <a 
      space="p:small"
      visual="text:light hover:bg:[rgba(255,255,255,0.1)] rounded:small"
    >
      ⚙️ Tetapan
    </a>
  </nav>
</aside>
```

## Breadcrumb

```html
<nav layout="flex" space="g:small p:small">
  <a visual="text:primary hover:text:[#2563EB]">Laman Utama</a>
  <span visual="text:grey">/</span>
  <a visual="text:primary hover:text:[#2563EB]">Produk</a>
  <span visual="text:grey">/</span>
  <span visual="text:dark">Halaman Semasa</span>
</nav>
```

## Navigasi Tab

```html
<div layout="flex" space="g:none" visual="border-b:light">
  <button 
    space="p-x:medium p-y:small"
    visual="text:primary border-b:[2px] border:primary"
  >
    Tab 1
  </button>
  <button 
    space="p-x:medium p-y:small"
    visual="text:grey hover:text:dark"
  >
    Tab 2
  </button>
  <button 
    space="p-x:medium p-y:small"
    visual="text:grey hover:text:dark"
  >
    Tab 3
  </button>
</div>
```
