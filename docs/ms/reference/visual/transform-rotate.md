# Putar

Putar elemen mengikut arah jam atau lawan jam.

## Sintaks
```
visual="rotate:0 | rotate:45 | rotate:90 | rotate:180 | rotate:[-45deg]"
```

## Nilai

| Nilai | Output CSS |
|-------|------------|
| `rotate:0` | `transform: rotate(0deg)` |
| `rotate:45` | `transform: rotate(45deg)` |
| `rotate:90` | `transform: rotate(90deg)` |
| `rotate:180` | `transform: rotate(180deg)` |

## Contoh

```html
<img visual="rotate:0" />   <!-- Tiada putaran -->
<img visual="rotate:45" />  <!-- 45 darjah -->
<img visual="rotate:90" />  <!-- 90 darjah -->
```

## Putaran Negatif

```html
<img visual="rotate:[-45deg]" /> <!-- -45 darjah -->
```
