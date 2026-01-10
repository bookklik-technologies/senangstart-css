# Shorthand Alignment

Pintasan penjajaran pantas

## Sintaks
```
layout="[alignment]"
```

## Nilai

| Nilai | CSS Output | Huraian |
|-------|------------|-------------|
| `center` | `justify-content: center; align-items: center` | Tengahkan kedua-dua paksi |
| `start` | `justify-content: flex-start; align-items: flex-start` | Jajar ke permulaan |
| `end` | `justify-content: flex-end; align-items: flex-end` | Jajar ke hujung |
| `between` | `justify-content: space-between` | Ruang antara |
| `around` | `justify-content: space-around` | Ruang sekeliling |
| `evenly` | `justify-content: space-evenly` | Ruang sekata |

## Contoh

```html
<div layout="flex center">Centered content</div>
```

## Responsif

```html
<!-- Contoh responsif -->
<div layout="mob:... tab:... lap:...">
  Kandungan responsif
</div>
```
