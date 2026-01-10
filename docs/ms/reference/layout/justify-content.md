# Justify Content

Jajarkan item sepanjang paksi utama

## Sintaks
```
layout="justify:[value]"
```

## Nilai

| Nilai | CSS Output | Huraian |
|-------|------------|-------------|
| `start` | `justify-content: flex-start` | Jajar ke permulaan |
| `end` | `justify-content: flex-end` | Jajar ke hujung |
| `center` | `justify-content: center` | Tengahkan item |
| `between` | `justify-content: space-between` | Ruang antara item |
| `around` | `justify-content: space-around` | Ruang sekeliling item |
| `evenly` | `justify-content: space-evenly` | Ruang sekata |
| `stretch` | `justify-content: stretch` | Regangkan item |

## Contoh

```html
<div layout="flex justify:center">Centered</div>
<div layout="flex justify:between">Spaced</div>
```

## Responsif

```html
<!-- Contoh responsif -->
<div layout="mob:... tab:... lap:...">
  Kandungan responsif
</div>
```
