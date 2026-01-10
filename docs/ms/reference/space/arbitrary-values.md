# Nilai Arbitrari

Gunakan kurungan `[value]` untuk nilai spesifik di luar skala.

## Sintaksis

```
property:[value]
```

Nilai dalam kurungan dihantar terus ke CSS.

## Contoh

```html
<!-- Nilai piksel tepat -->
<div space="w:[350px]">350 piksel lebar</div>

<!-- Unit viewport -->
<div space="h:[50vh]">50% tinggi viewport</div>

<!-- Nilai berbilang -->
<div space="p:[20px_40px]">20px menegak, 40px horizontal</div>

<!-- Unit rem -->
<div space="m-t:[5rem]">5rem margin atas</div>
```

## Nota

- Gunakan garis bawah `_` sebagai ganti ruang dalam kurungan
- Sebarang nilai CSS yang sah diterima
