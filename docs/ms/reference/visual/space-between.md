# Space Between

Tambah ruang antara anak langsung (margin pada setiap anak selepas yang pertama)

## Sintaks
```
visual="space-x:[value]" or visual="space-y:[value]"
```

## Nilai

| Properti | CSS Output | Huraian |
|--------|------------|-------------|
| `space-x` | `margin-left: var(--s-{value})` | Ruang mendatar antara anak |
| `space-y` | `margin-top: var(--s-{value})` | Ruang menegak antara anak |

## Nilai Skala

`none`, `tiny`, `small`, `medium`, `large`, `big`, `giant`

## Contoh

```html
<ul visual="space-y:small"><li>a</li><li>b</li></ul>
<nav layout="flex" visual="space-x:medium">…</nav>
```

## Nilai Arbitrari

Sokong nilai tersuai menggunakan sintaks kurungan segi empat:

```html
<div visual="space:[custom-value]">Custom</div>
```
