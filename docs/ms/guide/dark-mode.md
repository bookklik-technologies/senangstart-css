# Mod Gelap

Tambah gaya mod gelap dengan awalan `dark:`, serupa dengan Tailwind CSS.

## Konfigurasi

Secara lalai, mod gelap menggunakan strategi `media` berdasarkan keutamaan sistem. Anda boleh mengubah ini dalam konfigurasi:

```js
// senangstart.config.js
export default {
  // Pilihan 1: Keutamaan sistem (lalai)
  darkMode: 'media',
  
  // Pilihan 2: Toggle berasaskan kelas
  darkMode: 'selector',  // Guna kelas .dark
  
  // Pilihan 3: Pemilih kustom
  darkMode: ['selector', '[data-theme="dark"]']
}
```

Untuk penggunaan CDN:
```html
<script type="senangstart/config">
{
  "darkMode": "selector"
}
</script>
```

## Penggunaan Asas

Tambah gaya mod gelap menggunakan awalan `dark:`:

```html
<div visual="bg:white dark:bg:slate-900 text:dark dark:text:white">
  Ini menyesuaikan dengan mod gelap
</div>
```

## Perbandingan Strategi

### Strategi Media (Lalai)

Mengikuti keutamaan OS pengguna secara automatik:

```css
/* CSS yang dijana */
@media (prefers-color-scheme: dark) {
  [visual~="dark:bg:slate-900"] { background-color: var(--c-slate-900); }
}
```

Tiada JavaScript diperlukan. Menghormati tetapan sistem secara automatik.

### Strategi Selector

Kawalan manual melalui kelas `.dark`:

```css
/* CSS yang dijana */
.dark [visual~="dark:bg:slate-900"] { background-color: var(--c-slate-900); }
```

Toggle dengan JavaScript:
```js
document.documentElement.classList.toggle('dark');
```

## Corak Biasa

### Kad dengan Mod Gelap

```html
<div
  layout="flex col"
  space="p:medium g:small"
  visual="
    bg:white dark:bg:slate-800
    rounded:big
    shadow:medium dark:shadow:none
    border:gray-200 dark:border:slate-700
    border-w:[1px]
  "
>
  <h3 visual="text:dark dark:text:white font:bold">Tajuk Kad</h3>
  <p visual="text:grey dark:text:gray-400">Teks penerangan</p>
</div>
```

### Butang dengan Mod Gelap

```html
<button
  space="p-x:big p-y:small"
  visual="
    bg:primary dark:bg:blue-500
    text:white
    rounded:medium
    hover:bg:blue-700 dark:hover:bg:blue-400
  "
>
  Hantar
</button>
```

### Navigasi

```html
<nav 
  layout="flex between"
  space="p:medium"
  visual="bg:white dark:bg:slate-900"
>
  <a visual="text:dark dark:text:white hover:text:primary">Laman Utama</a>
  <a visual="text:grey dark:text:gray-400 hover:text:primary">Tentang</a>
</nav>
```

## Pelaksanaan Toggle

Untuk strategi selector, laksanakan toggle:

```html
<button onclick="toggleDarkMode()">
  <span visual="dark:hidden">🌙</span>
  <span visual="hidden dark:inline">☀️</span>
</button>

<script>
function toggleDarkMode() {
  document.documentElement.classList.toggle('dark');
  // Simpan keutamaan (pilihan)
  localStorage.setItem('theme', 
    document.documentElement.classList.contains('dark') ? 'dark' : 'light'
  );
}

// Muat keutamaan tersimpan
if (localStorage.getItem('theme') === 'dark') {
  document.documentElement.classList.add('dark');
}
</script>
```

## Petua

- Gunakan nama warna semantik seperti `slate`, `gray`, `zinc` untuk latar gelap
- Teks gelap pada terang, teks terang pada gelap: `text:dark dark:text:white`
- Kurangkan bayangan dalam mod gelap: `shadow:medium dark:shadow:none`
- Sempadan halus selalunya lebih cantik dalam mod gelap
