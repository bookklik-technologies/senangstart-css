# Margin

Mengawal jarak luar dengan atribut `space`.

## Sifat

| Property | Output CSS |
|----------|------------|
| `m` | `margin` (semua sisi) |
| `m-t` | `margin-top` |
| `m-r` | `margin-right` |
| `m-b` | `margin-bottom` |
| `m-l` | `margin-left` |
| `m-x` | `margin-left` + `margin-right` |
| `m-y` | `margin-top` + `margin-bottom` |

## Contoh

```html
<!-- Semua sisi -->
<div space="m:medium">Margin semua sisi</div>

<!-- Margin bawah -->
<div space="m-b:big">Margin bawah</div>

<!-- Tengah secara horizontal -->
<div space="m-x:auto">Elemen ditengahkan</div>
```
