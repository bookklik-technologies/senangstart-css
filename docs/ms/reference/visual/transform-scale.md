# Scale

Mengubah saiz elemen secara berkadar.

## Sintaks
```
visual="scale:50 | scale:100 | scale:110 | scale-x:50 | scale-y:150"
```

## Nilai

| Nilai | Output CSS |
|-------|------------|
| `scale:0` | `transform: scale(0)` |
| `scale:50` | `transform: scale(0.5)` |
| `scale:75` | `transform: scale(0.75)` |
| `scale:90` | `transform: scale(0.9)` |
| `scale:95` | `transform: scale(0.95)` |
| `scale:100` | `transform: scale(1)` |
| `scale:105` | `transform: scale(1.05)` |
| `scale:110` | `transform: scale(1.1)` |
| `scale:125` | `transform: scale(1.25)` |
| `scale:150` | `transform: scale(1.5)` |

## Contoh

```html
<img visual="scale:0" />   <!-- tidak kelihatan -->
<img visual="scale:50" />  <!-- separuh saiz -->
<img visual="scale:100" /> <!-- normal -->
<img visual="scale:150" /> <!-- 1.5x saiz -->
```

## Scale X / Y Secara Berasingan

```html
<img visual="scale-x:50" />  <!-- scaleX(0.5) -->
<img visual="scale-y:150" /> <!-- scaleY(1.5) -->
```

## Kesan Scale Hover

```html
<img 
  visual="transition scale:100 hover:scale:110" 
  src="..." 
/>
```
