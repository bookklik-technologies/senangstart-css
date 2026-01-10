# Sifat Peralihan

Kawal sifat CSS mana yang hendak dialihkan.

## Sintaks
```
visual="transition | transition:all | transition:colors | transition:opacity | transition:shadow | transition:transform | transition-none"
```

## Nilai

| Nilai | Output CSS |
|-------|------------|
| `transition` | Sifat peralihan lalai |
| `transition:all` | `transition-property: all` |
| `transition:colors` | `transition-property: color, background-color, ...` |
| `transition:opacity` | `transition-property: opacity` |
| `transition:shadow` | `transition-property: box-shadow` |
| `transition:transform` | `transition-property: transform` |
| `transition-none` | `transition-property: none` |

## Contoh

```html
<div visual="transition">...</div>           <!-- Sifat lalai -->
<div visual="transition:all">...</div>       <!-- Semua sifat -->
<div visual="transition:colors">...</div>    <!-- Warna sahaja -->
<div visual="transition-none">...</div>      <!-- Tiada peralihan -->
```
