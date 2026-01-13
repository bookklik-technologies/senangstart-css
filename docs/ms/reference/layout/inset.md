# Inset

Kawal ofset kedudukan

## Sintaks
```
layout="inset:[value]" or layout="top:[value]"
```

## Nilai

| Nilai | CSS Output | Huraian |
|-------|------------|-------------|
| `inset` | `inset: {value}` | Semua sisi |
| `inset-x` | `left: {value}; right: {value}` | Kiri dan kanan |
| `inset-y` | `top: {value}; bottom: {value}` | Atas dan bawah |
| `top` | `top: {value}` | Ofset atas |
| `right` | `right: {value}` | Ofset kanan |
| `bottom` | `bottom: {value}` | Ofset bawah |
| `left` | `left: {value}` | Ofset kiri |

## Contoh

```html
<div layout="absolute inset:0">Full coverage</div>
<div layout="absolute top:medium left:medium">Offset</div>
```

## Pratonton

<div space="p-x:big p-b:medium m-t:medium" visual="border-w:thin border:neutral-100 dark:border:neutral-800 rounded:medium">

### Inset Sifar

<div layout="flex col" space="g:medium">
  <p space="m:none" visual="text:neutral-600 dark:text:neutral-400 text-sm"><code>layout="inset:0"</code> - Tutup keseluruhan induk dengan inset:0</p>
<div layout="relative" space="p:large" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium" style="height: 100px;">
  <span space="p:small" visual="bg:neutral-300 dark:bg:neutral-700 text:neutral-800 dark:text:neutral-200 rounded:small">Parent</span>
  <span layout="absolute inset:0 flex center" visual="bg:primary/50 text:white rounded:medium">inset:0</span>
</div>
</div>

<details>
<summary>Lihat Kod</summary>

```html
<div layout="relative" space="p:large" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium" style="height: 100px;">
  <span space="p:small" visual="bg:neutral-300 dark:bg:neutral-700 text:neutral-800 dark:text:neutral-200 rounded:small">Parent</span>
  <span layout="absolute inset:0 flex center" visual="bg:primary/50 text:white rounded:medium">inset:0</span>
</div>
```

</details>

</div>

<div space="p-x:big p-b:medium m-t:medium" visual="border-w:thin border:neutral-100 dark:border:neutral-800 rounded:medium">

### Inset Arah

<div layout="flex col" space="g:medium">
  <p space="m:none" visual="text:neutral-600 dark:text:neutral-400 text-sm"><code>layout="top:0"</code> - Kedudukan dengan atas, kanan, bawah, kiri</p>
<div layout="relative" space="p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium" style="height: 80px;">
  <span layout="absolute top:0 left:0" space="p:tiny" visual="bg:primary text:white rounded:small">TL</span>
  <span layout="absolute top:0 right:0" space="p:tiny" visual="bg:primary text:white rounded:small">TR</span>
  <span layout="absolute bottom:0 left:0" space="p:tiny" visual="bg:primary text:white rounded:small">BL</span>
  <span layout="absolute bottom:0 right:0" space="p:tiny" visual="bg:primary text:white rounded:small">BR</span>
</div>
</div>

<details>
<summary>Lihat Kod</summary>

```html
<div layout="relative" space="p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium" style="height: 80px;">
  <span layout="absolute top:0 left:0" space="p:tiny" visual="bg:primary text:white rounded:small">TL</span>
  <span layout="absolute top:0 right:0" space="p:tiny" visual="bg:primary text:white rounded:small">TR</span>
  <span layout="absolute bottom:0 left:0" space="p:tiny" visual="bg:primary text:white rounded:small">BL</span>
  <span layout="absolute bottom:0 right:0" space="p:tiny" visual="bg:primary text:white rounded:small">BR</span>
</div>
```

</details>

</div>

## Nilai Arbitrari

Sokong nilai tersuai menggunakan sintaks kurungan segi empat:

```html
<div layout="inset:[custom-value]">Custom</div>
```
