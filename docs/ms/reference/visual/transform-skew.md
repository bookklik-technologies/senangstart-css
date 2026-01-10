# Senget

Condongkan elemen sepanjang paksi X atau Y.

## Sintaks
```
visual="skew-x:3 | skew-y:6 | -skew-x:6 | -skew-y:12"
```

## Nilai

| Nilai | Output CSS |
|-------|------------|
| `skew-x:3` | `transform: skewX(3deg)` |
| `skew-x:6` | `transform: skewX(6deg)` |
| `skew-y:3` | `transform: skewY(3deg)` |
| `skew-y:6` | `transform: skewY(6deg)` |

## Contoh

```html
<div visual="skew-x:3" />  <!-- skewX(3deg) -->
<div visual="skew-y:6" />  <!-- skewY(6deg) -->
```

## Senget Negatif

```html
<div visual="-skew-x:6" />  <!-- skewX(-6deg) -->
<div visual="-skew-y:12" /> <!-- skewY(-12deg) -->
```
