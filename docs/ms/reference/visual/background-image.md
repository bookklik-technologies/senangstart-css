# Background Image

Tetapkan imej latar atau gradien

## Sintaks
```
visual="bg-image:[value]"
```

## Nilai

| Nilai | CSS Output | Huraian |
|-------|------------|-------------|
| `none` | `background-image: none` | Tiada imej latar |
| `gradient-to-t` | `background-image: linear-gradient(to top, var(--tw-gradient-stops))` | Gradien ke atas |
| `gradient-to-b` | `background-image: linear-gradient(to bottom, var(--tw-gradient-stops))` | Gradien ke bawah |
| `gradient-to-l` | `background-image: linear-gradient(to left, var(--tw-gradient-stops))` | Gradien ke kiri |
| `gradient-to-r` | `background-image: linear-gradient(to right, var(--tw-gradient-stops))` | Gradien ke kanan |

## Contoh

```html
<div visual="bg-image:gradient-to-r">Gradient background</div>
```

## Nilai Arbitrari

Sokong nilai tersuai menggunakan sintaks kurungan segi empat:

```html
<div visual="background:[custom-value]">Custom</div>
```

## Responsif

```html
<!-- Contoh responsif -->
<div visual="mob:... tab:... lap:...">
  Kandungan responsif
</div>
```
