# Flex Items

Kawal kelakuan kembang dan kecil flex

## Sintaks
```
layout="[flex-item-value]"
```

## Nilai

| Nilai | CSS Output | Huraian |
|-------|------------|-------------|
| `grow` | `flex-grow: 1` | Benarkan item berkembang |
| `grow-0` | `flex-grow: 0` | Halang perkembangan |
| `shrink` | `flex-shrink: 1` | Benarkan item mengecil |
| `shrink-0` | `flex-shrink: 0` | Halang pengecilan |

## Contoh

```html
<div layout="grow">Growing item</div>
```

## Responsif

```html
<!-- Contoh responsif -->
<div layout="mob:... tab:... lap:...">
  Kandungan responsif
</div>
```
