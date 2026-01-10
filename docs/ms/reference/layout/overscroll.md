# Overscroll

Kawal kelakuan rantaian skrol

## Sintaks
```
layout="overscroll:[value]"
```

## Nilai

| Nilai | CSS Output | Huraian |
|-------|------------|-------------|
| `auto` | `overscroll-behavior: auto` | Kelakuan lalai |
| `contain` | `overscroll-behavior: contain` | Kandung skrol |
| `none` | `overscroll-behavior: none` | Tiada rantaian skrol |

## Contoh

```html
<div layout="overscroll:contain">Contained scroll</div>
```

## Responsif

```html
<!-- Contoh responsif -->
<div layout="mob:... tab:... lap:...">
  Kandungan responsif
</div>
```
