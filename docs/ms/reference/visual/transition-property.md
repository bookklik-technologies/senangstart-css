# Transition Property

Tetapkan properti peralihan

## Sintaks
```
visual="transition:[value]"
```

## Nilai

| Nilai | CSS Output | Huraian |
|-------|------------|-------------|
| `none` | `transition-property: none` | Tiada peralihan |
| `all` | `transition-property: all; transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1); transition-duration: 150ms` | Semua properti |
| `colors` | `transition-property: color, background-color, border-color; transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1); transition-duration: 150ms` | Properti warna |
| `opacity` | `transition-property: opacity; transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1); transition-duration: 150ms` | Kelegapan sahaja |
| `shadow` | `transition-property: box-shadow; transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1); transition-duration: 150ms` | Bayang sahaja |
| `transform` | `transition-property: transform; transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1); transition-duration: 150ms` | Transformasi sahaja |

## Contoh

```html
<button visual="transition:all hover:bg:primary">Smooth hover</button>
```
