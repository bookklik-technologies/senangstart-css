# Transform Skew

Condongkan elemen

## Sintaks
```
visual="skew-x:[degrees]" or visual="skew-y:[degrees]"
```

## Nilai

| Nilai | CSS Output | Huraian |
|-------|------------|-------------|
| `0` | `transform: skewX(0deg)` | Tiada condong |
| `3` | `transform: skewX(3deg)` | Condong 3° |
| `6` | `transform: skewX(6deg)` | Condong 6° |
| `12` | `transform: skewX(12deg)` | Condong 12° |

## Contoh

```html
<div visual="skew-x:6">Skewed element</div>
```

## Nilai Arbitrari

Sokong nilai tersuai menggunakan sintaks kurungan segi empat:

```html
<div visual="transform:[custom-value]">Custom</div>
```
