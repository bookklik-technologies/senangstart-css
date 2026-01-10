# Display

Kawal jenis paparan elemen

## Sintaks
```
layout="[display-value]"
```

## Nilai

| Nilai | CSS Output | Huraian |
|-------|------------|-------------|
| `flex` | `display: flex` | Bekas flexbox |
| `inline-flex` | `display: inline-flex` | Bekas flexbox sebaris |
| `grid` | `display: grid` | Bekas grid |
| `inline-grid` | `display: inline-grid` | Bekas grid sebaris |
| `block` | `display: block` | Elemen blok |
| `inline` | `display: inline-block` | Elemen blok sebaris |
| `hidden` | `display: none` | Elemen tersembunyi |

## Contoh

```html
<div layout="flex">Flexbox container</div>
<div layout="grid">Grid container</div>
<div layout="hidden">Hidden element</div>
```

## Responsif

```html
<!-- Contoh responsif -->
<div layout="mob:... tab:... lap:...">
  Kandungan responsif
</div>
```
