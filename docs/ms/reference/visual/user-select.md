# User Select

Kawal pemilihan teks

## Sintaks
```
visual="select:[value]"
```

## Nilai

| Nilai | CSS Output | Huraian |
|-------|------------|-------------|
| `none` | `user-select: none` | Halang pemilihan |
| `text` | `user-select: text` | Benarkan pemilihan teks |
| `all` | `user-select: all` | Pilih semua pada klik |
| `auto` | `user-select: auto` | Kelakuan lalai |

## Contoh

```html
<div visual="select:none">Cannot select this text</div>
```

## Responsif

```html
<!-- Contoh responsif -->
<div visual="mob:... tab:... lap:...">
  Kandungan responsif
</div>
```
