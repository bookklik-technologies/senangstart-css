# Backdrop Saturate

Laraskan ketepuan latar belakang

## Sintaks
```
visual="backdrop-saturate:[value]"
```

## Nilai

| Nilai | CSS Output | Huraian |
|-------|------------|-------------|
| `none` | `backdrop-filter: saturate(0)` | Tidak tepu |
| `low` | `backdrop-filter: saturate(0.5)` | Ketepuan rendah |
| `normal` | `backdrop-filter: saturate(1)` | Ketepuan normal |
| `high` | `backdrop-filter: saturate(1.5)` | Ketepuan tinggi |
| `vivid` | `backdrop-filter: saturate(2)` | Sangat tepu |

## Contoh

```html
<div visual="backdrop-saturate:vivid">Vivid backdrop</div>
```

## Nilai Arbitrari

Sokong nilai tersuai menggunakan sintaks kurungan segi empat:

```html
<div visual="backdrop:[custom-value]">Custom</div>
```

## Responsif

```html
<!-- Contoh responsif -->
<div visual="mob:... tab:... lap:...">
  Kandungan responsif
</div>
```
