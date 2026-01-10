# Peristiwa Penunjuk

Mengawal sama ada elemen bertindak balas kepada peristiwa penunjuk dengan atribut `visual`.

## Sintaks
```
visual="pointer-events:[nilai]"
```

## Nilai

| Nilai | Output CSS |
|-------|------------|
| `pointer-events:none` | `pointer-events: none` |
| `pointer-events:auto` | `pointer-events: auto` |

## Contoh

```html
<!-- Lumpuhkan semua interaksi penunjuk -->
<div visual="pointer-events:none">
  Tidak boleh klik, hover, atau pilih ini
</div>

<!-- Aktif semula peristiwa penunjuk pada anak -->
<div visual="pointer-events:none">
  <button visual="pointer-events:auto">Tapi anda boleh klik saya!</button>
</div>
```

## Kegunaan

Gunakan `pointer-events:none` untuk:
- Mencipta lapisan klik-tembus
- Melumpuhkan interaksi semasa keadaan memuat
- Menjadikan elemen hiasan tidak interaktif
