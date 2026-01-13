# Padding

Tambah padding pada elemen

## Sintaks
```
space="p:[value]" or space="p-{side}:[value]"
```

## Nilai

| Properti | CSS Output | Huraian |
|--------|------------|-------------|
| `p` | `padding: var(--s-{value})` | Semua sisi |
| `p-t` | `padding-top: var(--s-{value})` | Atas |
| `p-r` | `padding-right: var(--s-{value})` | Kanan |
| `p-b` | `padding-bottom: var(--s-{value})` | Bawah |
| `p-l` | `padding-left: var(--s-{value})` | Kiri |
| `p-x` | `padding-left: var(--s-{value}) padding-right: var(--s-{value})` | Mendatar |
| `p-y` | `padding-top: var(--s-{value}) padding-bottom: var(--s-{value})` | Menegak |

## Nilai Skala

`none`, `tiny`, `small`, `medium`, `big`, `giant`, `vast`

## Contoh

```html
<div space="p:medium">Padding all sides</div>
<div space="p-x:big p-y:small">Different padding</div>
<div space="p:[20px]">Custom padding</div>
```

## Nilai Arbitrari

Sokong nilai tersuai menggunakan sintaks kurungan segi empat:

```html
<div space="padding:[custom-value]">Custom</div>
```

## Nota

> [!TIP]
> **Sokongan Skala Tailwind**
> 
> Gunakan awalan `tw-` untuk mengakses skala numerik Tailwind: `p:tw-4` (1rem), `p:tw-8` (2rem)
> 
> [Rujukan](https://tailwindcss.com/docs/padding)
