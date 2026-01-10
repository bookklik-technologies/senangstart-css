# Saiz Medan

Mengawal bagaimana medan borang menyaiz sendiri dengan atribut `visual`.

## Sintaks
```
visual="field-sizing:[nilai]"
```

## Nilai

| Nilai | Output CSS |
|-------|------------|
| `field-sizing:content` | `field-sizing: content` |
| `field-sizing:fixed` | `field-sizing: fixed` |

## Contoh

```html
<!-- Textarea berkembang mengikut kandungan -->
<textarea visual="field-sizing:content" placeholder="Mula menaip..."></textarea>

<!-- Input berkembang mengikut kandungan -->
<input visual="field-sizing:content" placeholder="Lebar dinamik" />

<!-- Saiz tetap (kelakuan lalai) -->
<textarea visual="field-sizing:fixed"></textarea>
```

## Kegunaan

Gunakan `field-sizing:content` untuk:
- Mencipta textarea yang berkembang automatik
- Membuat input menyesuaikan lebar kandungan
- Membina borang yang lebih semula jadi
