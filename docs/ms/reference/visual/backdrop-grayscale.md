# Backdrop Grayscale

Terapkan skala kelabu pada latar belakang

## Sintaks
```
visual="backdrop-grayscale:[value]"
```

## Nilai

| Nilai | CSS Output | Huraian |
|-------|------------|-------------|
| `none` | `backdrop-filter: grayscale(0%)` | Tiada skala kelabu |
| `partial` | `backdrop-filter: grayscale(50%)` | 50% skala kelabu |
| `full` | `backdrop-filter: grayscale(100%)` | Skala kelabu penuh |

## Contoh

```html
<div visual="backdrop-grayscale:full">Grayscale backdrop</div>
```

## Pratonton

<div space="p-x:big p-b:medium m-t:medium" visual="border-w:thin border:neutral-100 dark:border:neutral-800 rounded:medium">

### Skala Kelabu Latar Belakang

<div layout="flex col" space="g:medium">
  <p space="m:none" visual="text:neutral-600 dark:text:neutral-400 text-sm"><code>visual="backdrop-grayscale:full"</code> - Alih keluar warna dari latar belakang, mencipta kesan tidak tepu</p>
<div layout="flex" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div space="p:small" visual="bg-image:gradient-to-br from:blue-500 to:emerald-500 rounded:small text:white">Original</div>
  <div space="p:small" visual="bg-image:gradient-to-br from:blue-500 to:emerald-500 filter-grayscale:full rounded:small text:white">Grayscale</div>
</div>
</div>

<details>
<summary>Lihat Kod</summary>

```html
<div layout="flex" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div space="p:small" visual="bg-image:gradient-to-br from:blue-500 to:emerald-500 rounded:small text:white">Original</div>
  <div space="p:small" visual="bg-image:gradient-to-br from:blue-500 to:emerald-500 filter-grayscale:full rounded:small text:white">Grayscale</div>
</div>
```

</details>

</div>

## Nilai Arbitrari

Sokong nilai tersuai menggunakan sintaks kurungan segi empat:

```html
<div visual="backdrop:[custom-value]">Custom</div>
```
