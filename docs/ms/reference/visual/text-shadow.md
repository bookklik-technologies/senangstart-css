# Bayang Teks

Mengawal bayang teks dengan atribut `visual`.

## Sintaks
```
visual="text-shadow:[nilai]"
```

## Nilai Pratetap

| Property | Output CSS |
|----------|------------|
| `text-shadow:none` | `text-shadow: none` |
| `text-shadow:small` | `text-shadow: 0 1px 2px rgba(0,0,0,0.1)` |
| `text-shadow:medium` | `text-shadow: 0 2px 4px rgba(0,0,0,0.15)` |
| `text-shadow:big` | `text-shadow: 0 4px 8px rgba(0,0,0,0.2)` |

## Nilai Tersuai

Gunakan sintaks `[nilai]` untuk bayang tersuai:

| Property | Output CSS |
|----------|------------|
| `text-shadow:[2px_2px_4px_rgba(0,0,0,0.3)]` | `text-shadow: 2px 2px 4px rgba(0,0,0,0.3)` |
| `text-shadow:[1px_1px_2px_#000]` | `text-shadow: 1px 1px 2px #000` |

> **Nota**: Gunakan `_` (underscore) sebagai pengganti ruang dalam nilai tersuai.

## Contoh

```html
<h1 visual="text-shadow:small">Tajuk dengan bayang halus</h1>

<h2 visual="text-shadow:medium">Tajuk dengan bayang sederhana</h2>

<h3 visual="text-shadow:big">Tajuk dengan bayang besar</h3>

<p visual="text-shadow:[2px_2px_4px_rgba(0,0,0,0.5)]">
  Teks dengan bayang tersuai
</p>

<div visual="text:white text-shadow:[2px_2px_8px_rgba(0,0,0,0.8)]">
  Teks putih dengan bayang gelap
</div>
```

## Contoh dengan States

```html
<button visual="text-shadow:none hover:text-shadow:small">
  Bayang muncul pada hover
</button>

<h1 visual="text-shadow:medium dark:text-shadow:big">
  Bayang berbeza dalam dark mode
</h1>
```

## Tips Penggunaan

- Gunakan `text-shadow:small` untuk teks yang memerlukan sedikit kedalaman
- Gunakan `text-shadow:medium` untuk tajuk dan elemen penting
- Gunakan `text-shadow:big` untuk efek dramatik
- Gabungkan dengan warna teks untuk hasil yang lebih menarik
