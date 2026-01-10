# Rujukan Skala

Skala semula jadi yang digunakan untuk sifat jarak.

## Nilai Skala

| Kata Kunci | Nilai Lalai |
|------------|-------------|
| `none` | 0px |
| `tiny` | 4px |
| `small` | 8px |
| `medium` | 16px |
| `big` | 32px |
| `giant` | 64px |
| `vast` | 128px |

## Penyesuaian

Timpa nilai skala dalam konfigurasi anda:

```js
// senangstart.config.js
module.exports = {
  scale: {
    tiny: '2px',
    small: '4px',
    medium: '8px',
    big: '16px',
    giant: '32px',
    vast: '64px'
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
