# Garis (Stroke)

Mengawal warna garis elemen SVG dengan atribut `visual`.

## Sintaks
```
visual="stroke:[nilai]"
```

## Nilai

| Nilai | Output CSS |
|-------|------------|
| `stroke:none` | `stroke: none` |
| `stroke:current` | `stroke: currentColor` |
| `stroke:primary` | `stroke: var(--c-primary)` |
| `stroke:blue-500` | `stroke: var(--c-blue-500)` |
| `stroke:[#ff0000]` | `stroke: #ff0000` |

## Contoh

```html
<svg visual="stroke:primary fill:none">
  <circle cx="50" cy="50" r="40" />
</svg>

<svg visual="stroke:current text:blue-500">
  <path d="M10 10 H 90 V 90 H 10 Z" />
</svg>

<svg visual="stroke:red-500 stroke-w:2">
  <line x1="0" y1="0" x2="100" y2="100" />
</svg>
```

## Keadaan

```html
<svg visual="stroke:gray-400 hover:stroke:primary fill:none">
  <rect x="10" y="10" width="80" height="80" />
</svg>
```
