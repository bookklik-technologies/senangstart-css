# Backdrop Blur

Kaburkan latar belakang

## Sintaks
```
visual="backdrop-blur:[value]"
```

## Nilai

| Nilai | CSS Output | Huraian |
|-------|------------|-------------|
| `none` | `backdrop-filter: blur(0)` | Tiada kabur |
| `tiny` | `backdrop-filter: blur(2px)` | Kabur kecil |
| `small` | `backdrop-filter: blur(4px)` | Kabur kecil |
| `medium` | `backdrop-filter: blur(8px)` | Kabur sederhana |
| `big` | `backdrop-filter: blur(12px)` | Kabur besar |
| `giant` | `backdrop-filter: blur(24px)` | Kabur gergasi |
| `vast` | `backdrop-filter: blur(48px)` | Kabur luas |

## Contoh

```html
<div visual="backdrop-blur:medium bg:[rgba(255,255,255,0.5)]">Frosted glass</div>
```

## Nilai Arbitrari

Sokong nilai tersuai menggunakan sintaks kurungan segi empat:

```html
<div visual="backdrop:[custom-value]">Custom</div>
```
