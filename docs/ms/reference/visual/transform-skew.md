# Skew

Memiringkan elemen di sepanjang paksi X atau Y.

## Sintaks
```
visual="skew-x:3 | skew-y:6 | -skew-x:6 | -skew-y:12"
```

## Nilai

| Nilai | Output CSS |
|-------|------------|
| `skew-x:0` | `transform: skewX(0deg)` |
| `skew-x:1` | `transform: skewX(1deg)` |
| `skew-x:2` | `transform: skewX(2deg)` |
| `skew-x:3` | `transform: skewX(3deg)` |
| `skew-x:6` | `transform: skewX(6deg)` |
| `skew-x:12` | `transform: skewX(12deg)` |
| `skew-y:3` | `transform: skewY(3deg)` |
| `skew-y:6` | `transform: skewY(6deg)` |

## Contoh

```html
<div visual="skew-x:0" />  <!-- skewX(0deg) -->
<div visual="skew-x:3" />  <!-- skewX(3deg) -->
<div visual="skew-x:6" />  <!-- skewX(6deg) -->
<div visual="skew-y:3" />  <!-- skewY(3deg) -->
<div visual="skew-y:6" />  <!-- skewY(6deg) -->
```

## Skew Negatif

```html
<div visual="-skew-x:6" />  <!-- skewX(-6deg) -->
<div visual="-skew-y:12" /> <!-- skewY(-12deg) -->
```
