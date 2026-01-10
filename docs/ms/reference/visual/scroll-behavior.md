# Kelakuan Skrol

Mengawal kelancaran skrol dengan atribut `visual`.

## Sintaks
```
visual="scroll:[nilai]"
```

## Nilai

| Nilai | Output CSS |
|-------|------------|
| `scroll:smooth` | `scroll-behavior: smooth` |
| `scroll:auto` | `scroll-behavior: auto` |

## Contoh

```html
<!-- Bekas skrol lancar -->
<div visual="scroll:smooth" layout="overflow:auto" space="h:[400px]">
  <div space="h:[1000px]">Kandungan boleh skrol</div>
</div>

<!-- Gunakan pada seluruh halaman -->
<html visual="scroll:smooth">
```

## Kegunaan

Gunakan `scroll:smooth` untuk:
- Navigasi pautan sauh
- Butang skrol-ke-atas
- Navigasi aplikasi satu halaman
- Pengalaman pengguna lebih baik dengan skrol beransur
