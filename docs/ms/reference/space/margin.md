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

## Pratonton

<div space="p-x:big p-b:medium m-t:medium" visual="border-w:thin border:neutral-100 dark:border:neutral-800 rounded:medium">

### Skala Margin

<div layout="flex col" space="g:medium">
  <p space="m:none" visual="text:neutral-600 dark:text:neutral-400 text-sm"><code>space="m:medium"</code> - Saiz margin berbeza dari skala</p>
<div layout="flex col" space="g:tiny p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div space="m:tiny" visual="bg:primary text:white rounded:small">m:tiny</div>
  <div space="m:small" visual="bg:primary text:white rounded:small">m:small</div>
  <div space="m:medium" visual="bg:primary text:white rounded:small">m:medium</div>
</div>
</div>

<details>
<summary>Lihat Kod</summary>

```html
<div layout="flex col" space="g:tiny p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div space="m:tiny" visual="bg:primary text:white rounded:small">m:tiny</div>
  <div space="m:small" visual="bg:primary text:white rounded:small">m:small</div>
  <div space="m:medium" visual="bg:primary text:white rounded:small">m:medium</div>
</div>
```

</details>

</div>

<div space="p-x:big p-b:medium m-t:medium" visual="border-w:thin border:neutral-100 dark:border:neutral-800 rounded:medium">

### Tengah Automatik

<div layout="flex col" space="g:medium">
  <p space="m:none" visual="text:neutral-600 dark:text:neutral-400 text-sm"><code>space="m-x:auto"</code> - Guna m-x:auto untuk tengahkan mendatar</p>
<div space="p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div space="m-x:auto p:small" visual="bg:primary text:white rounded:small" style="width: fit-content;">m-x:auto</div>
</div>
</div>

<details>
<summary>Lihat Kod</summary>

```html
<div space="p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div space="m-x:auto p:small" visual="bg:primary text:white rounded:small" style="width: fit-content;">m-x:auto</div>
</div>
```

</details>

</div>

## Nilai Arbitrari

Sokong nilai tersuai menggunakan sintaks kurungan segi empat:

```html
<div space="margin:[custom-value]">Custom</div>
```

## Nota

> [!TIP]
> **Sokongan Skala Tailwind**
> 
> Gunakan awalan `tw-` untuk mengakses skala numerik Tailwind: `m:tw-4` (1rem), `m-t:tw-8` (2rem)
> 
> [Rujukan](https://tailwindcss.com/docs/margin)
