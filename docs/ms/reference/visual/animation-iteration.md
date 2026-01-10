# Kiraan Iterasi Animasi

Kawal berapa kali animasi diulang.

## Sintaks
```
visual="animation-iteration:1 | animation-iteration:2 | animation-iteration:infinite"
```

## Nilai

| Nilai | Output CSS |
|-------|------------|
| `animation-iteration:1` | `animation-iteration-count: 1` |
| `animation-iteration:2` | `animation-iteration-count: 2` |
| `animation-iteration:infinite` | `animation-iteration-count: infinite` |

## Contoh

```html
<div visual="animate:bounce animation-iteration:1">...</div>        <!-- Sekali -->
<div visual="animate:bounce animation-iteration:2">...</div>        <!-- Dua kali -->
<div visual="animate:bounce animation-iteration:infinite">...</div> <!-- Selamanya -->
```
