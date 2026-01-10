# Align Content

Jajarkan baris kandungan dalam bekas flex berbilang baris

## Sintaks
```
layout="content:[value]"
```

## Nilai

| Nilai | CSS Output | Huraian |
|-------|------------|-------------|
| `start` | `align-content: flex-start` | Jajar ke permulaan |
| `end` | `align-content: flex-end` | Jajar ke hujung |
| `center` | `align-content: center` | Tengahkan kandungan |
| `between` | `align-content: space-between` | Ruang antara baris |
| `around` | `align-content: space-around` | Ruang sekeliling baris |
| `evenly` | `align-content: space-evenly` | Ruang sekata |
| `stretch` | `align-content: stretch` | Regangkan baris |

## Contoh

```html
<div layout="flex wrap content:center">Centered rows</div>
```

## Responsif

```html
<!-- Contoh responsif -->
<div layout="mob:... tab:... lap:...">
  Kandungan responsif
</div>
```
