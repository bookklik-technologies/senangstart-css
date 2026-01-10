# Skema Warna

Menunjukkan skema warna pilihan untuk elemen dengan atribut `visual`.

## Sintaks
```
visual="color-scheme:[nilai]"
```

## Nilai

| Nilai | Output CSS |
|-------|------------|
| `color-scheme:light` | `color-scheme: light` |
| `color-scheme:dark` | `color-scheme: dark` |
| `color-scheme:normal` | `color-scheme: normal` |

## Contoh

```html
<!-- Paksa skema warna cerah -->
<div visual="color-scheme:light">
  UI mod cerah
</div>

<!-- Paksa skema warna gelap untuk bar skrol dan kawalan borang -->
<div visual="color-scheme:dark">
  UI mod gelap
</div>
```

## Kegunaan

Sifat `color-scheme` mempengaruhi:
- Warna bar skrol
- Warna kawalan borang (latar belakang, sempadan)
- Warna teks dan latar belakang lalai
