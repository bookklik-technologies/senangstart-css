# Asal Transform

Tetapkan titik asal untuk transformasi.

## Sintaks
```
visual="origin:center | origin:top | origin:bottom-right"
```

## Nilai

| Nilai | Output CSS |
|-------|------------|
| `origin:center` | `transform-origin: center` |
| `origin:top` | `transform-origin: top` |
| `origin:top-right` | `transform-origin: top right` |
| `origin:bottom` | `transform-origin: bottom` |
| `origin:bottom-left` | `transform-origin: bottom left` |
| `origin:left` | `transform-origin: left` |

## Contoh

```html
<img visual="origin:center" />       <!-- tengah (lalai) -->
<img visual="origin:top" />          <!-- atas -->
<img visual="origin:bottom-right" /> <!-- bawah kanan -->
```

## Nilai Arbitrari

```html
<img visual="origin:[33%_75%]" />
```
