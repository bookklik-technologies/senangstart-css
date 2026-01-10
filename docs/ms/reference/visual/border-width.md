# Border Width

Tetapkan lebar sempadan

## Sintaks
```
visual="border-w:[value]"
```

## Nilai

| Nilai | CSS Output | Huraian |
|-------|------------|-------------|
| `tiny` | `border-width: var(--s-tiny); border-style: solid` | Sempadan kecil |
| `small` | `border-width: var(--s-small); border-style: solid` | Sempadan kecil |

## Contoh

```html
<div visual="border:gray-300 border-w:small">Thin border</div>
```

## Nilai Arbitrari

Sokong nilai tersuai menggunakan sintaks kurungan segi empat:

```html
<div visual="border:[custom-value]">Custom</div>
```

## Responsif

```html
<!-- Contoh responsif -->
<div visual="mob:... tab:... lap:...">
  Kandungan responsif
</div>
```
