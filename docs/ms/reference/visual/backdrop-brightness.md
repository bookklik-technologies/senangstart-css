# Backdrop Brightness

Laraskan kecerahan latar belakang

## Sintaks
```
visual="backdrop-brightness:[value]"
```

## Nilai

| Nilai | CSS Output | Huraian |
|-------|------------|-------------|
| `dim` | `backdrop-filter: brightness(0.5)` | 50% kecerahan |
| `dark` | `backdrop-filter: brightness(0.75)` | 75% kecerahan |
| `normal` | `backdrop-filter: brightness(1)` | Kecerahan normal |
| `bright` | `backdrop-filter: brightness(1.25)` | 125% kecerahan |
| `vivid` | `backdrop-filter: brightness(1.5)` | 150% kecerahan |

## Contoh

```html
<div visual="backdrop-brightness:dark">Darkened backdrop</div>
```

## Nilai Arbitrari

Sokong nilai tersuai menggunakan sintaks kurungan segi empat:

```html
<div visual="backdrop:[custom-value]">Custom</div>
```
