# Hiasan Teks

Mengawal hiasan teks dengan atribut `visual`.

## Sintaks
```
visual="text-decoration-line:underline | text-decoration-style:wavy | text-decoration-color:[#ff0000]"
```

## Nilai

| Nilai | Output CSS |
|-------|------------|
| `text-decoration-line:underline` | `text-decoration-line: underline` |
| `text-decoration-line:overline` | `text-decoration-line: overline` |
| `text-decoration-line:line-through` | `text-decoration-line: line-through` |
| `text-decoration-line:none` | `text-decoration-line: none` |
| `text-decoration-style:wavy` | `text-decoration-style: wavy` |
| `text-decoration-style:dashed` | `text-decoration-style: dashed` |

## Contoh

```html
<a visual="text-decoration-line:underline hover:text-decoration-line:none">Pautan</a>
<span visual="text-decoration-line:line-through">Teks dipadam</span>
<span visual="text-decoration-line:underline text-decoration-style:wavy">Ralat</span>
```
