# Backdrop Invert

Songsangkan warna latar belakang

## Sintaks
```
visual="backdrop-invert:[value]"
```

## Nilai

| Nilai | CSS Output | Huraian |
|-------|------------|-------------|
| `none` | `backdrop-filter: invert(0%)` | Tiada penyongsangan |
| `partial` | `backdrop-filter: invert(50%)` | 50% penyongsangan |
| `full` | `backdrop-filter: invert(100%)` | Penyongsangan penuh |

## Contoh

```html
<div visual="backdrop-invert:full">Inverted backdrop</div>
```

## Pratonton

<div space="p-x:big p-b:medium m-t:medium" visual="border-w:thin border:neutral-100 dark:border:neutral-800 rounded:medium">

### Songsang Latar Belakang

<div layout="flex col" space="g:medium">
  <p space="m:none" visual="text:neutral-600 dark:text:neutral-400 text-sm"><code>visual="backdrop-invert:full"</code> - Songsangkan warna di belakang elemen</p>
<div layout="flex" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div space="p:small" visual="bg:primary text:white rounded:small">none</div>
  <div space="p:small" visual="bg:primary text:white rounded:small">full</div>
</div>
</div>

<details>
<summary>Lihat Kod</summary>

```html
<div layout="flex" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div space="p:small" visual="bg:primary text:white rounded:small">none</div>
  <div space="p:small" visual="bg:primary text:white rounded:small">full</div>
</div>
```

</details>

</div>

## Nilai Arbitrari

Sokong nilai tersuai menggunakan sintaks kurungan segi empat:

```html
<div visual="backdrop:[custom-value]">Custom</div>
```
