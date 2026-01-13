# Filter Saturate

Laraskan ketepuan

## Sintaks
```
visual="saturate:[value]"
```

## Nilai

| Nilai | CSS Output | Huraian |
|-------|------------|-------------|
| `none` | `filter: saturate(0)` | Tidak tepu |
| `low` | `filter: saturate(0.5)` | Ketepuan rendah |
| `normal` | `filter: saturate(1)` | Ketepuan normal |
| `high` | `filter: saturate(1.5)` | Ketepuan tinggi |
| `vivid` | `filter: saturate(2)` | Sangat tepu |

## Contoh

```html
<img visual="saturate:vivid">Vivid colors</img>
```

## Nilai Arbitrari

Sokong nilai tersuai menggunakan sintaks kurungan segi empat:

```html
<div visual="filter:[custom-value]">Custom</div>
```
