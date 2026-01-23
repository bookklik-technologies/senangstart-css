# Rujukan Jarak

Rujukan lengkap untuk skala jarak.

## Skala Lalai

| Kata Kunci | Nilai | Kes Penggunaan |
|------------|-------|----------------|
| `none` | 0px | Reset jarak |
| `thin` | 1px | Sempadan halus |
| `regular` | 2px | Sempadan standard |
| `thick` | 3px | Sempadan tebal |
| `tiny` | 4px | Offset kecil |
| `tiny-2x` | 6px | Tiny berganda |
| `small` | 8px | Kumpulkan item berkaitan |
| `small-2x` | 10px | Small berganda |
| `small-3x` | 12px | Small berganda |
| `small-4x` | 14px | Small berganda |
| `medium` | 16px | Lalai standard |
| `medium-2x` | 20px | Medium berganda |
| `medium-3x` | 24px | Medium berganda |
| `medium-4x` | 28px | Medium berganda |
| `large` | 32px | Pisahkan seksyen |
| `large-2x` | 36px | Large berganda |
| `large-3x` | 40px | Large berganda |
| `large-4x` | 44px | Large berganda |
| `big` | 48px | Bahagian layout |
| `big-2x` | 56px | Big berganda |
| `big-3x` | 64px | Big berganda |
| `big-4x` | 80px | Big berganda |
| `giant` | 96px | Seksyen hero |
| `giant-2x` | 112px | Giant berganda |
| `giant-3x` | 128px | Giant berganda |
| `giant-4x` | 144px | Giant berganda |
| `vast` | 160px | Jarak tahap halaman |
| `vast-2x` | 176px | Vast berganda |
| `vast-3x` | 192px | Vast berganda |
| `vast-4x` | 208px | Vast berganda |
| `vast-5x` | 224px | Vast berganda |
| `vast-6x` | 240px | Vast berganda |
| `vast-7x` | 256px | Vast berganda |
| `vast-8x` | 288px | Vast berganda |
| `vast-9x` | 320px | Vast berganda |
| `vast-10x` | 384px | Vast berganda |

## Variable CSS

Skala jarak menghasilkan variable CSS ini:

```css
:root {
  --s-none: 0px;
  --s-thin: 1px;
  --s-regular: 2px;
  --s-thick: 3px;
  --s-tiny: 4px;
  --s-tiny-2x: 6px;
  --s-small: 8px;
  --s-small-2x: 10px;
  --s-small-3x: 12px;
  --s-small-4x: 14px;
  --s-medium: 16px;
  --s-medium-2x: 20px;
  --s-medium-3x: 24px;
  --s-medium-4x: 28px;
  --s-large: 32px;
  --s-large-2x: 36px;
  --s-large-3x: 40px;
  --s-large-4x: 44px;
  --s-big: 48px;
  --s-big-2x: 56px;
  --s-big-3x: 64px;
  --s-big-4x: 80px;
  --s-giant: 96px;
  --s-giant-2x: 112px;
  --s-giant-3x: 128px;
  --s-giant-4x: 144px;
  --s-vast: 160px;
  --s-vast-2x: 176px;
  --s-vast-3x: 192px;
  --s-vast-4x: 208px;
  --s-vast-5x: 224px;
  --s-vast-6x: 240px;
  --s-vast-7x: 256px;
  --s-vast-8x: 288px;
  --s-vast-9x: 320px;
  --s-vast-10x: 384px;
}
```

## Contoh Penggunaan

```html
<!-- Padding -->
<div space="p:medium">16px padding semua sisi</div>
<div space="p-x:large">32px padding horizontal</div>

<!-- Margin -->
<div space="m:small">8px margin semua sisi</div>
<div space="m-b:giant">96px margin bawah</div>

<!-- Gap -->
<div layout="flex" space="g:small">8px gap antara item</div>

<!-- Lebar Sempadan -->
<div visual="border:gray-300 border-w:thin">Sempadan 1px</div>
<div visual="border:gray-300 border-w:regular">Sempadan 2px</div>
<div visual="border:gray-300 border-w:thick">Sempadan 3px</div>

<!-- Menggunakan varian berganda -->
<div space="p:medium-2x">20px padding (medium × 2)</div>
<div space="m:large-3x">40px margin (large × 3)</div>
```

## Penyesuaian

Tindih ganti dalam `senangstart.config.js`:

```javascript
export default {
  theme: {
    spacing: {
      'tiny': '2px',        // Tindih ganti sedia ada
      'huge': '256px',      // Tambah baru
      'massive': '512px'    // Tambah baru
    }
  }
}
```

## Panduan Visual

```
none      │ (tiada ruang)
thin      │ 1px
regular   │▏ 2px
thick     │▎ 3px
tiny      │▌ 4px
tiny-2x   │▌▏ 6px
small     │██ 8px
small-2x  │██▌ 10px
small-3x  │███ 12px
small-4x  │███▌ 14px
medium    │████ 16px
medium-2x │█████ 20px
medium-3x │██████ 24px
medium-4x │███████ 28px
large     │████████ 32px
large-2x  │█████████ 36px
large-3x  │██████████ 40px
large-4x  │███████████ 44px
big       │████████████ 48px
big-2x    │██████████████ 56px
big-3x    │████████████████ 64px
big-4x    │████████████████████ 80px
giant     │████████████████████████ 96px
giant-2x  │████████████████████████████ 112px
giant-3x  │████████████████████████████████ 128px
giant-4x  │████████████████████████████████████ 144px
vast      │████████████████████████████████████████ 160px
vast-2x   │████████████████████████████████████████████ 176px
vast-3x   │████████████████████████████████████████████████ 192px
vast-4x   │████████████████████████████████████████████████████ 208px
vast-5x   │████████████████████████████████████████████████████████ 224px
vast-6x   │████████████████████████████████████████████████████████████ 240px
vast-7x   │████████████████████████████████████████████████████████████████ 256px
vast-8x   │████████████████████████████████████████████████████████████████████████ 288px
vast-9x   │████████████████████████████████████████████████████████████████████████████████ 320px
vast-10x  │██████████████████████████████████████████████████████████████████████████████████████████████ 384px
```
