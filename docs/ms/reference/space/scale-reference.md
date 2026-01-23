# Rujukan Skala

Skala semula jadi yang digunakan untuk sifat jarak.

## Nilai Skala

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

## Penyesuaian

Timpa nilai skala dalam konfigurasi anda:

```js
// senangstart.config.js
export default {
  theme: {
    spacing: {
      'tiny': '2px',        // Timpa sedia ada
      'micro': '1px',       // Tambah nilai baharu
      'humongous': '512px'  // Ekstrapolasi skala
    }
  }
}
```


## Penggunaan

Semua sifat jarak menggunakan skala yang sama:

```html
<div space="p:medium m:small g:big">
  Jarak konsisten menggunakan skala semula jadi
</div>
```
