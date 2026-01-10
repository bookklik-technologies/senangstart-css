# Height

Tetapkan tinggi elemen

## Sintaks
```
space="h:[value]"
```

## Nilai

| Harta | CSS Output | Huraian |
|--------|------------|-------------|
| `h` | `height: var(--s-{value})` | Tinggi |
| `min-h` | `min-height: var(--s-{value})` | Tinggi minimum |
| `max-h` | `max-height: var(--s-{value})` | Tinggi maksimum |

## Nilai Skala

`none`, `tiny`, `small`, `medium`, `big`, `giant`, `vast`

## Contoh

```html
<div space="h:[100vh]">Full viewport height</div>
<div space="min-h:[400px]">Min height</div>
```

## Nilai Arbitrari

Sokong nilai tersuai menggunakan sintaks kurungan segi empat:

```html
<div space="height:[custom-value]">Custom</div>
```

## Responsif

```html
<!-- Contoh responsif -->
<div space="mob:... tab:... lap:...">
  Kandungan responsif
</div>
```
