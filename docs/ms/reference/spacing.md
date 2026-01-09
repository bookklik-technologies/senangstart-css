# Rujukan Jarak

Rujukan lengkap untuk skala jarak.

## Skala Lalai

| Kata Kunci | Nilai | Kes Penggunaan |
|------------|-------|----------------|
| `none` | 0px | Reset jarak |
| `tiny` | 4px | Sempadan, offset kecil |
| `small` | 8px | Kumpulkan item berkaitan |
| `medium` | 16px | Lalai standard |
| `big` | 32px | Pisahkan seksyen |
| `giant` | 64px | Bahagian layout |
| `vast` | 128px | Seksyen hero |

## Variable CSS

Skala jarak menghasilkan variable CSS ini:

```css
:root {
  --s-none: 0px;
  --s-tiny: 4px;
  --s-small: 8px;
  --s-medium: 16px;
  --s-big: 32px;
  --s-giant: 64px;
  --s-vast: 128px;
}
```

## Contoh Penggunaan

```html
<!-- Padding -->
<div space="p:medium">16px padding semua sisi</div>
<div space="p-x:big">32px padding horizontal</div>

<!-- Margin -->
<div space="m:small">8px margin semua sisi</div>
<div space="m-b:giant">64px margin bawah</div>

<!-- Gap -->
<div layout="flex" space="g:small">8px gap antara item</div>
```

## Penyesuaian

Tindih ganti dalam `senangstart.config.js`:

```javascript
export default {
  theme: {
    spacing: {
      'tiny': '2px',      // Tindih ganti sedia ada
      'huge': '256px',    // Tambah baru
      'massive': '512px'  // Tambah baru
    }
  }
}
```

## Panduan Visual

```
none   │ (tiada ruang)
tiny   │▌ 4px
small  │██ 8px
medium │████ 16px
big    │████████ 32px
giant  │████████████████ 64px
vast   │████████████████████████████████ 128px
```
