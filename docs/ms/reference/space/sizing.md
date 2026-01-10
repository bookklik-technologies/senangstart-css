# Saiz

Mengawal lebar dan tinggi dengan atribut `space`.

## Sifat

| Property | Output CSS |
|----------|------------|
| `w` | `width` |
| `h` | `height` |
| `min-w` | `min-width` |
| `max-w` | `max-width` |
| `min-h` | `min-height` |
| `max-h` | `max-height` |

## Contoh

```html
<!-- Saiz eksplisit -->
<div space="w:[100%] h:[400px]">Dimensi tetap</div>

<!-- Kontena max width -->
<div space="max-w:[1200px]">Kontena terhad</div>

<!-- Tinggi penuh viewport -->
<div space="min-h:[100vh]">Sekurang-kurangnya penuh viewport</div>
```
