# Filter Sepia

Terapkan penapis sepia

## Sintaks
```
visual="sepia:[value]"
```

## Nilai

| Nilai | CSS Output | Huraian |
|-------|------------|-------------|
| `none` | `filter: sepia(0%)` | Tiada sepia |
| `partial` | `filter: sepia(50%)` | 50% sepia |
| `full` | `filter: sepia(100%)` | Sepia penuh |

## Contoh

```html
<img visual="sepia:full">Vintage look</img>
```

## Nilai Arbitrari

Sokong nilai tersuai menggunakan sintaks kurungan segi empat:

```html
<div visual="filter:[custom-value]">Custom</div>
```
