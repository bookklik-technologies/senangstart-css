# Gap

Tambah ruang antara item flex/grid

## Sintaks
```
space="g:[value]" or space="g-{axis}:[value]"
```

## Nilai

| Properti | CSS Output | Huraian |
|--------|------------|-------------|
| `g` | `gap: var(--s-{value})` | Semua ruang |
| `g-x` | `column-gap: var(--s-{value})` | Ruang lajur |
| `g-y` | `row-gap: var(--s-{value})` | Ruang baris |

## Nilai Skala

`none`, `tiny`, `small`, `medium`, `big`, `giant`, `vast`

## Contoh

```html
<div layout="flex" space="g:medium">Gap between items</div>
<div layout="grid" space="g-x:big g-y:small">Grid gaps</div>
```

## Nilai Arbitrari

Sokong nilai tersuai menggunakan sintaks kurungan segi empat:

```html
<div space="gap:[custom-value]">Custom</div>
```

## Responsif

```html
<!-- Contoh responsif -->
<div space="mob:... tab:... lap:...">
  Kandungan responsif
</div>
```
