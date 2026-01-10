# Forced Color Adjust

Kawal kelakuan mod warna paksa

## Sintaks
```
visual="forced-color:[value]"
```

## Nilai

| Nilai | CSS Output | Huraian |
|-------|------------|-------------|
| `auto` | `forced-color-adjust: auto` | Penyesuaian automatik |
| `none` | `forced-color-adjust: none` | Tiada penyesuaian |

## Contoh

```html
<div visual="forced-color:none">Preserve colors in high contrast</div>
```

## Responsif

```html
<!-- Contoh responsif -->
<div visual="mob:... tab:... lap:...">
  Kandungan responsif
</div>
```
