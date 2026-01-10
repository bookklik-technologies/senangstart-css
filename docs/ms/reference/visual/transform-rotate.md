# Rotate

Memutar elemen mengikut arah jam atau lawan arah jam.

## Sintaks
```
visual="rotate:0 | rotate:45 | rotate:90 | rotate:180 | rotate:[-45deg]"
```

## Nilai

| Nilai | Output CSS |
|-------|------------|
| `rotate:0` | `transform: rotate(0deg)` |
| `rotate:1` | `transform: rotate(1deg)` |
| `rotate:2` | `transform: rotate(2deg)` |
| `rotate:3` | `transform: rotate(3deg)` |
| `rotate:6` | `transform: rotate(6deg)` |
| `rotate:12` | `transform: rotate(12deg)` |
| `rotate:45` | `transform: rotate(45deg)` |
| `rotate:90` | `transform: rotate(90deg)` |
| `rotate:180` | `transform: rotate(180deg)` |

## Contoh

```html
<img visual="rotate:0" />   <!-- Tiada putaran -->
<img visual="rotate:45" />  <!-- 45deg -->
<img visual="rotate:90" />  <!-- 90deg -->
<img visual="rotate:180" /> <!-- 180deg -->
```

## Putaran Negatif

Gunakan nilai negatif dengan sintaks sewenang-wenang:

```html
<img visual="rotate:[-45deg]" /> <!-- -45deg -->
<img visual="rotate:[-90deg]" /> <!-- -90deg -->
```

## Nilai Sewenang-Wenang

```html
<img visual="rotate:[17deg]" />
<img visual="rotate:[0.5turn]" />
```

## Kesan Putar Hover

```html
<img 
  visual="transition rotate:0 hover:rotate:12" 
  src="..." 
/>
```
