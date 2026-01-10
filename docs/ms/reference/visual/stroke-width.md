# Lebar Garis (Stroke Width)

Mengawal lebar garis elemen SVG dengan atribut `visual`.

## Sintaks
```
visual="stroke-w:[nilai]"
```

## Nilai

| Nilai | Output CSS |
|-------|------------|
| `stroke-w:0` | `stroke-width: 0px` |
| `stroke-w:1` | `stroke-width: 1px` |
| `stroke-w:2` | `stroke-width: 2px` |
| `stroke-w:[0.5]` | `stroke-width: 0.5` |
| `stroke-w:[3px]` | `stroke-width: 3px` |

## Contoh

```html
<svg visual="stroke:primary stroke-w:2 fill:none">
  <circle cx="50" cy="50" r="40" />
</svg>

<svg visual="stroke:blue-500 stroke-w:4">
  <line x1="0" y1="50" x2="100" y2="50" />
</svg>

<!-- Garis nipis -->
<svg visual="stroke:gray-400 stroke-w:1 fill:none">
  <rect x="10" y="10" width="80" height="80" />
</svg>
```

## Keadaan

```html
<svg visual="stroke:primary stroke-w:1 hover:stroke-w:3 fill:none">
  <circle cx="50" cy="50" r="40" />
</svg>
```
