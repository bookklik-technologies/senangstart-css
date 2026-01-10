# Cursor

Tetapkan gaya kursor

## Sintaks
```
visual="cursor:[value]"
```

## Nilai

| Nilai | CSS Output | Huraian |
|-------|------------|-------------|
| `auto` | `cursor: auto` | Kursor automatik |
| `default` | `cursor: default` | Kursor lalai |
| `pointer` | `cursor: pointer` | Kursor penunjuk |
| `wait` | `cursor: wait` | Kursor tunggu |
| `text` | `cursor: text` | Kursor teks |
| `move` | `cursor: move` | Kursor alih |
| `not-allowed` | `cursor: not-allowed` | Tidak dibenarkan |
| `grab` | `cursor: grab` | Kursor genggam |
| `grabbing` | `cursor: grabbing` | Kursor menggenggam |

## Contoh

```html
<button visual="cursor:pointer">Clickable</button>
```

## Responsif

```html
<!-- Contoh responsif -->
<div visual="mob:... tab:... lap:...">
  Kandungan responsif
</div>
```
