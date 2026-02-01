# Hover & Keadaan

Tambah gaya interaktif dengan prefiks keadaan.

## Prefiks Keadaan

| Prefiks | Pencetus |
|---------|----------|
| `hover:` | Tetikus atas elemen |
| `focus:` | Elemen mempunyai fokus |
| `active:` | Elemen sedang diklik |
| `disabled:` | Elemen adalah disabled |

## Penggunaan Asas

### Hover

```html
<button visual="bg:primary hover:bg:[#2563EB] text:white">
  Hover saya
</button>

<a visual="text:grey hover:text:primary">
  Pautan dengan warna hover
</a>
```

### Focus

```html
<input
  visual="border:grey focus:border:primary"
  space="p:small"
/>
```

### Active

```html
<button visual="bg:primary active:bg:[#1D4ED8]">
  Klik saya
</button>
```

### Disabled

```html
<button visual="bg:primary disabled:bg:grey disabled:opacity:[0.5]">
  Hantar
</button>
```

## Corak Biasa

### Butang dengan Keadaan

```html
<button
  space="p-x:big p-y:small"
  visual="
    bg:primary 
    text:white 
    rounded:medium
    hover:bg:[#2563EB]
    active:bg:[#1D4ED8]
    disabled:bg:grey
    disabled:opacity:[0.5]
  "
>
  Hantar
</button>
```

### Kad dengan Kesan Hover

```html
<div
  layout="flex col"
  space="p:medium"
  visual="
    bg:white 
    rounded:big 
    shadow:small
    hover:shadow:big
  "
>
  <h3>Tajuk Kad</h3>
  <p>Kandungan kad yang terangkat apabila hover.</p>
</div>
```

### Navigasi Pautan

```html
<nav layout="flex" space="g:medium">
  <a visual="text:dark hover:text:primary font:medium">Laman Utama</a>
  <a visual="text:grey hover:text:primary">Tentang</a>
  <a visual="text:grey hover:text:primary">Hubungi</a>
</nav>
```

### Input dengan Cincin Fokus

```html
<input
  type="text"
  space="p:small w:[100%]"
  visual="
    border:grey 
    border-w:[1px]
    rounded:small
    focus:border:primary
  "
  placeholder="Masukkan emel anda"
/>
```

### Butang Toggle

```html
<button
  space="p:small"
  visual="
    bg:light
    text:dark
    rounded:medium
    hover:bg:grey
    active:bg:dark
    active:text:white
  "
>
  Toggle
</button>
```

## Menggabungkan dengan Responsif

Keadaan boleh digabungkan dengan prefiks responsif:

```html
<button visual="
  bg:primary
  hover:bg:[#2563EB]
  tab:hover:shadow:big
">
  Bayang hover hanya pada tablet+
</button>
```

## Nota Kebolehcapaian

Sentiasa pastikan kontras warna yang mencukupi untuk keadaan hover dan focus. Keadaan `:focus` terutamanya penting untuk navigasi papan kekunci.

```html
<button visual="
  bg:primary
  text:white
  focus:shadow:[0_0_0_3px_rgba(59,130,246,0.5)]
">
  Cincin fokus yang boleh diakses
</button>
```

## Keupayaan & Interaksi Keadaan

SenangStart membolehkan elemen bertindak balas terhadap keadaan induk ("Kumpulan") atau rakan ("Rakan"). Ini berfungsi merentasi **ketiga-tiga atribusi**.

### Pencetus yang Disokong

Tambah ini pada atribusi `layout` elemen induk/pencetus:

| Keupayaan | Keadaan Pencetus |
|------------|---------------|
| `layout="hoverable"` | `:hover` |
| `layout="focusable"` | `:focus-within` |
| `layout="pressable"` | `:active` |
| `layout="expandable"` | `[aria-expanded="true"]` |
| `layout="selectable"` | `[aria-selected="true"]` |
| `layout="disabled"` | Mematikan semua pencetus |

### Contoh Rentas-Atribusi

Varian keadaan seperti `hover:`, `focus:`, dsb., terpakai pada **mana-mana atribusi** (`layout`, `space`, `visual`) apabila bersarang di dalam kumpulan yang berkebolehan.

```html
<!-- Induk mempunyai keupayaan "hoverable" -->
<div layout="flex hoverable" space="p:medium" visual="bg:white shadow:medium">
  
  <!-- Reaksi Layout: Tersembunyi secara lalai, menjadi flex apabila induk hover -->
  <div layout="hidden hover:flex items:center">
    <span>Terdedah!</span>
  </div>

  <!-- Reaksi Space: Padding meningkat apabila induk hover -->
  <button space="p:small hover:p:medium">
    Kembangkan Saya
  </button>
  
  <!-- Reaksi Visual: Warna berubah apabila induk hover -->
  <p visual="text:grey hover:text:primary">
    Serlahkan Saya
  </p>
  
</div>
```

### Interaksi Rakan

Gunakan `interact="[id]"` pada pencetus dan `listens="[id]"` pada penerima.

```html
<button layout="hoverable" interact="menu-trigger">
  Hover saya
</button>

<div 
  layout="absolute mt:small" 
  visual="hidden hover:visible" 
  listens="menu-trigger"
>
  Menu Dropdown
</div>
```
