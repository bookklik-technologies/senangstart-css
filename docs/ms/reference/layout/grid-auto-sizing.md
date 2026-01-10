# Grid Auto Sizing

Kawal saiz trek grid yang dijana automatik

## Sintaks
```
layout="auto-cols:[value]" or layout="auto-rows:[value]"
```

## Nilai

| Nilai | CSS Output | Huraian |
|-------|------------|-------------|
| `auto` | `auto` | Saiz automatik |
| `min` | `min-content` | Kandungan minimum |
| `max` | `max-content` | Kandungan maksimum |
| `fr` | `minmax(0, 1fr)` | Unit pecahan |

## Contoh

```html
<div layout="grid auto-cols:min">Auto min columns</div>
```

## Responsif

```html
<!-- Contoh responsif -->
<div layout="mob:... tab:... lap:...">
  Kandungan responsif
</div>
```
