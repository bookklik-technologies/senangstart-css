# Filter Brightness

Laraskan kecerahan

## Sintaks
```
visual="brightness:[value]"
```

## Nilai

| Nilai | CSS Output | Huraian |
|-------|------------|-------------|
| `dim` | `filter: brightness(0.5)` | 50% kecerahan |
| `dark` | `filter: brightness(0.75)` | 75% kecerahan |
| `normal` | `filter: brightness(1)` | Kecerahan normal |
| `bright` | `filter: brightness(1.25)` | 125% kecerahan |
| `vivid` | `filter: brightness(1.5)` | 150% kecerahan |

## Contoh

```html
<img visual="brightness:bright">Brighter image</img>
```

## Nilai Arbitrari

Sokong nilai tersuai menggunakan sintaks kurungan segi empat:

```html
<div visual="filter:[custom-value]">Custom</div>
```
