# Skala

Ubah saiz elemen secara berkadar.

## Sintaks
```
visual="scale:50 | scale:100 | scale:110 | scale-x:50 | scale-y:150"
```

## Nilai

| Nilai | Output CSS |
|-------|------------|
| `scale:0` | `transform: scale(0)` |
| `scale:50` | `transform: scale(0.5)` |
| `scale:100` | `transform: scale(1)` |
| `scale:150` | `transform: scale(1.5)` |

## Contoh

```html
<img visual="scale:50" />  <!-- separuh saiz -->
<img visual="scale:100" /> <!-- normal -->
<img visual="scale:150" /> <!-- 1.5x saiz -->
```

## Skala X / Y Berasingan

```html
<img visual="scale-x:50" />  <!-- scaleX(0.5) -->
<img visual="scale-y:150" /> <!-- scaleY(1.5) -->
```

## Kesan Hover Skala

```html
<img visual="transition scale:100 hover:scale:110" src="..." />
```
