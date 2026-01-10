# Tindakan Sentuh

Mengawal bagaimana elemen bertindak balas kepada gerak isyarat sentuh dengan atribut `visual`.

## Sintaks
```
visual="touch:[nilai]"
```

## Nilai

| Nilai | Output CSS |
|-------|------------|
| `touch:auto` | `touch-action: auto` |
| `touch:none` | `touch-action: none` |
| `touch:pan-x` | `touch-action: pan-x` |
| `touch:pan-y` | `touch-action: pan-y` |
| `touch:pinch-zoom` | `touch-action: pinch-zoom` |
| `touch:manipulation` | `touch-action: manipulation` |

## Contoh

```html
<!-- Benarkan hanya panning mendatar -->
<div visual="touch:pan-x">Karusel mendatar</div>

<!-- Benarkan hanya panning menegak -->
<div visual="touch:pan-y">Senarai menegak</div>

<!-- Lumpuhkan semua tindakan sentuh -->
<canvas visual="touch:none">Kawasan lukisan kustom</canvas>

<!-- Benarkan pan dan zum tetapi lumpuhkan zum ketik dua kali -->
<div visual="touch:manipulation">Kawasan klik pantas</div>
```

## Kegunaan

- `touch:manipulation` - Membuang kelewatan ketik 300ms pada mudah alih
- `touch:none` - Pengendalian gerak isyarat kustom dengan JavaScript
- `touch:pan-x` / `touch:pan-y` - Karusel yang tidak mengganggu skrol halaman
