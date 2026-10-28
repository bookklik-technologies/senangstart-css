# Konfigurasi

Sesuaikan SenangStart CSS dengan `senangstart.config.mjs` (ESM), `.js`, `.cjs` (CommonJS), atau `.json`.

## Mencipta Fail Config

Jalankan arahan init untuk mencipta fail config:

```bash
senangstart init
```

`init` menggunakan `.mjs` kecuali `package.json` projek menetapkan `"type": "module"`, yang menggunakan `.js`. Perubahan fail konfigurasi ESM dan CommonJS dimuat semula apabila pemuatan baharu diaktifkan. Modul bantuan yang diimport tidak dimuat semula secara rekursif.

Atau cipta secara manual:

```javascript
// senangstart.config.mjs
export default {
  // Fail untuk diimbas untuk atribusi SenangStart
  content: [
    './**/*.html',
    './src/**/*.{html,jsx,tsx,vue,svelte}',
    './components/**/*.{html,jsx,tsx}'
  ],

  // Konfigurasi output
  output: {
    css: './public/senangstart.css',
    minify: true,
    aiContext: null,
    typescript: null
  },

  // Penyesuaian tema
  theme: {
    // Tindih ganti anda di sini
  }
}
```

## Corak Kandungan

Tentukan fail mana untuk diimbas:

```javascript
content: [
  './**/*.html',           // Semua fail HTML
  './src/**/*.jsx',        // Komponen React
  './pages/**/*.vue',      // Halaman Vue
  './components/**/*.svelte'
]
```

## Pilihan Output

| Pilihan | Penerangan | Lalai |
|---------|------------|-------|
| `css` | Laluan output CSS | `./public/senangstart.css` |
| `minify` | Minify output | `false` |
| `aiContext` | Laluan fail konteks AI pilihan, contohnya `./.cursorrules` | `null` |
| `typescript` | Laluan definisi TypeScript pilihan, contohnya `./types/senang.d.ts` | `null` |

Output pilihan hanya menulis ganti fail yang mempunyai penanda janaan SenangStart. Fail tulisan pengguna dikekalkan dan disenaraikan dalam `result.outputs.skipped` oleh API Node.

## Penyesuaian Tema

### Spacing Tersuai

```javascript
theme: {
  spacing: {
    'tiny': '2px',       // Tindih ganti sedia ada
    'huge': '256px',     // Tambah skala baru
    'massive': '512px'
  }
}
```

### Warna Tersuai

```javascript
theme: {
  colors: {
    'brand': '#38BDF8',
    'accent': '#EC4899',
    'custom': '#FF5733'
  }
}
```

### Titik Henti Tersuai

```javascript
theme: {
  screens: {
    'mob': '480px',
    'tab': '768px',
    'lap': '1024px',
    'desk': '1280px',
    'wide': '1536px'    // Tambah breakpoint lebih lebar
  }
}
```

### Bayang Tersuai

```javascript
theme: {
  shadow: {
    'glow': '0 0 20px rgba(59, 130, 246, 0.5)',
    'inset': 'inset 0 2px 4px rgba(0,0,0,0.1)'
  }
}
```

## Contoh Penuh

```javascript
export default {
  content: [
    './src/**/*.{html,jsx,tsx}',
    './components/**/*.vue'
  ],

  output: {
    css: './dist/styles.css',
    minify: true,
    aiContext: './.cursorrules',
    typescript: './src/types/senang.d.ts'
  },

  theme: {
    spacing: {
      'huge': '256px'
    },
    colors: {
      'brand': '#38BDF8',
      'accent': '#EC4899'
    },
    screens: {
      'wide': '1536px'
    }
  }
}
```

## Menggunakan Nilai Tersuai

Selepas mengkonfigurasi, guna skala tersuai anda:

```html
<div space="p:huge">Padding huge tersuai</div>
<div visual="bg:brand text:accent">Warna tersuai</div>
<div space="tab:p:big wide:p:huge">Titik Henti tersuai</div>
```
