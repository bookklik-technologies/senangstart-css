# Margin

Tambah margin pada elemen

## Sintaks
```
space="m:[value]" or space="m-{side}:[value]"
```

## Nilai

| Properti | CSS Output | Huraian |
|--------|------------|-------------|
| `m` | `margin: var(--s-{value})` | Semua sisi |
| `m-t` | `margin-top: var(--s-{value})` | Atas |
| `m-r` | `margin-right: var(--s-{value})` | Kanan |
| `m-b` | `margin-bottom: var(--s-{value})` | Bawah |
| `m-l` | `margin-left: var(--s-{value})` | Kiri |
| `m-x` | `margin-left: var(--s-{value}) margin-right: var(--s-{value})` | Mendatar |
| `m-y` | `margin-top: var(--s-{value}) margin-bottom: var(--s-{value})` | Menegak |

## Nilai Skala

`none`, `tiny`, `small`, `medium`, `big`, `giant`, `vast`, `auto`

## Contoh

```html
<div space="m:medium">Margin all sides</div>
<div space="m-x:auto">Centered horizontally</div>
<div space="m-t:big">Top margin</div>
```

## Nilai Arbitrari

Sokong nilai tersuai menggunakan sintaks kurungan segi empat:

```html
<div space="margin:[custom-value]">Custom</div>
```

## Responsif

```html
<!-- Contoh responsif -->
<div space="mob:... tab:... lap:...">
  Kandungan responsif
</div>
```
