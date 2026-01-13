# Text Shadow

Tambah bayang teks

## Sintaks
```
visual="text-shadow:[value]"
```

## Nilai

| Nilai | CSS Output | Huraian |
|-------|------------|-------------|
| `none` | `text-shadow: none` | Tiada bayang |
| `small` | `text-shadow: 0 1px 2px rgba(0,0,0,0.1)` | Bayang kecil |
| `medium` | `text-shadow: 0 2px 4px rgba(0,0,0,0.1)` | Bayang sederhana |
| `big` | `text-shadow: 0 4px 8px rgba(0,0,0,0.1)` | Bayang besar |

## Contoh

```html
<h1 visual="text-shadow:medium">Shadowed heading</h1>
```

## Nilai Arbitrari

Sokong nilai tersuai menggunakan sintaks kurungan segi empat:

```html
<div visual="text:[custom-value]">Custom</div>
```
