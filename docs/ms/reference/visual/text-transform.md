# Text Transform

Mengawal transformasi teks dengan atribut `visual`.

## Sintaks
```
visual="uppercase | lowercase | capitalize | normal-case"
```

## Nilai

| Nilai | Output CSS |
|-------|------------|
| `uppercase` | `text-transform: uppercase` |
| `lowercase` | `text-transform: lowercase` |
| `capitalize` | `text-transform: capitalize` |
| `normal-case` | `text-transform: none` |

## Contoh

```html
<span visual="uppercase">semua huruf besar</span>
<span visual="lowercase">MENJADI huruf kecil</span>
<span visual="capitalize">huruf besar setiap perkataan</span>
<span visual="normal-case">Set Semula kepada Normal</span>
```

## Corak Biasa

```html
<!-- Butang dengan teks huruf besar -->
<button visual="uppercase tracking:wide text-size:small">
  Langgan
</button>

<!-- Tajuk dengan huruf besar -->
<h2 visual="capitalize">tajuk artikel saya</h2>
```
