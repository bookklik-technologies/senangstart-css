# Width

Tetapkan lebar elemen

## Sintaks
```
space="w:[value]"
```

## Nilai

| Properti | CSS Output | Huraian |
|--------|------------|-------------|
| `w` | `width: var(--s-{value})` | Lebar |
| `min-w` | `min-width: var(--s-{value})` | Lebar minimum |
| `max-w` | `max-width: var(--s-{value})` | Lebar maksimum |

## Nilai Skala

`none`, `tiny`, `small`, `medium`, `big`, `giant`, `vast`

## Contoh

```html
<div space="w:[100%]">Full width</div>
<div space="max-w:[1200px]">Max width container</div>
<div space="min-w:[300px]">Min width</div>
```

## Nilai Arbitrari

Sokong nilai tersuai menggunakan sintaks kurungan segi empat:

```html
<div space="width:[custom-value]">Custom</div>
```

## Responsif

```html
<!-- Contoh responsif -->
<div space="mob:... tab:... lap:...">
  Kandungan responsif
</div>
```
