# Flex Wrap

Kawal bagaimana item flex membungkus

## Sintaks
```
layout="[wrap-value]"
```

## Nilai

| Nilai | CSS Output | Huraian |
|-------|------------|-------------|
| `wrap` | `flex-wrap: wrap` | Benarkan pembungkusan |
| `nowrap` | `flex-wrap: nowrap` | Halang pembungkusan |
| `wrap-reverse` | `flex-wrap: wrap-reverse` | Bungkus terbalik |

## Contoh

```html
<div layout="flex wrap">Wrapping flex</div>
```

## Responsif

```html
<!-- Contoh responsif -->
<div layout="mob:... tab:... lap:...">
  Kandungan responsif
</div>
```
