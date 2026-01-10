# Box Sizing

Kawal cara lebar dan tinggi dikira

## Sintaks
```
layout="[box-sizing-value]"
```

## Nilai

| Nilai | CSS Output | Huraian |
|-------|------------|-------------|
| `box-border` | `box-sizing: border-box` | Termasuk padding dan sempadan dalam saiz |
| `box-content` | `box-sizing: content-box` | Tidak termasuk padding dan sempadan |

## Contoh

```html
<div layout="box-border">Border box</div>
```

## Responsif

```html
<!-- Contoh responsif -->
<div layout="mob:... tab:... lap:...">
  Kandungan responsif
</div>
```
