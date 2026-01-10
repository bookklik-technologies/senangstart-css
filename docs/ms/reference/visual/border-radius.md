# Border Radius

Tetapkan jejari sempadan

## Sintaks
```
visual="rounded:[value]"
```

## Nilai

| Nilai | CSS Output | Huraian |
|-------|------------|-------------|
| `none` | `border-radius: var(--r-none)` | Tiada pembulatan |
| `small` | `border-radius: var(--r-small)` | Jejari kecil |
| `medium` | `border-radius: var(--r-medium)` | Jejari sederhana |
| `big` | `border-radius: var(--r-big)` | Jejari besar |
| `round` | `border-radius: var(--r-round)` | Sepenuhnya bulat |

## Contoh

```html
<div visual="rounded:medium">Rounded corners</div>
<div visual="rounded:round">Pill shape</div>
```

## Responsif

```html
<!-- Contoh responsif -->
<div visual="mob:... tab:... lap:...">
  Kandungan responsif
</div>
```
