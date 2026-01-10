# Overflow

Kawal kelakuan limpahan kandungan

## Sintaks
```
layout="overflow:[value]"
```

## Nilai

| Nilai | CSS Output | Huraian |
|-------|------------|-------------|
| `auto` | `overflow: auto` | Bar skrol bila perlu |
| `hidden` | `overflow: hidden` | Sembunyikan limpahan |
| `visible` | `overflow: visible` | Tunjukkan limpahan |
| `scroll` | `overflow: scroll` | Sentiasa tunjuk bar skrol |
| `clip` | `overflow: clip` | Potong limpahan |

## Contoh

```html
<div layout="overflow:hidden">Clipped content</div>
<div layout="overflow:auto">Scrollable</div>
```

## Responsif

```html
<!-- Contoh responsif -->
<div layout="mob:... tab:... lap:...">
  Kandungan responsif
</div>
```
