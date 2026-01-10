# Bayang Jatuh

Tambah kesan bayang jatuh pada elemen.

## Sintaks
```
visual="drop-shadow:none | drop-shadow:tiny | drop-shadow:small | drop-shadow:medium | drop-shadow:big | drop-shadow:giant"
```

## Nilai

| Nilai | Output CSS |
|-------|------------|
| `drop-shadow:none` | `filter: drop-shadow(0 0 0 transparent)` |
| `drop-shadow:tiny` | `filter: drop-shadow(0 1px 1px rgba(0,0,0,0.1))` |
| `drop-shadow:small` | `filter: drop-shadow(0 1px 2px rgba(0,0,0,0.15))` |
| `drop-shadow:medium` | `filter: drop-shadow(0 4px 6px rgba(0,0,0,0.2))` |
| `drop-shadow:big` | `filter: drop-shadow(0 8px 12px rgba(0,0,0,0.25))` |
| `drop-shadow:giant` | `filter: drop-shadow(0 16px 24px rgba(0,0,0,0.3))` |

## Contoh

```html
<div visual="drop-shadow:none">...</div>    <!-- Tiada bayang -->
<div visual="drop-shadow:medium">...</div>  <!-- Bayang standard -->
<div visual="drop-shadow:giant">...</div>   <!-- Bayang dramatik -->
```
