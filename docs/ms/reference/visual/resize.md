# Resize

Kawal saiz semula elemen

## Sintaks
```
visual="resize:[value]"
```

## Nilai

| Nilai | CSS Output | Huraian |
|-------|------------|-------------|
| `none` | `resize: none` | Tiada saiz semula |
| `both` | `resize: both` | Saiz semula kedua-dua |
| `x` | `resize: horizontal` | Saiz semula mendatar |
| `y` | `resize: vertical` | Saiz semula menegak |

## Contoh

```html
<textarea visual="resize:y">Vertical resize only</textarea>
```

## Responsif

```html
<!-- Contoh responsif -->
<div visual="mob:... tab:... lap:...">
  Kandungan responsif
</div>
```
