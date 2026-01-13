# Filter Grayscale

Terapkan penapis skala kelabu

## Sintaks
```
visual="grayscale:[value]"
```

## Nilai

| Nilai | CSS Output | Huraian |
|-------|------------|-------------|
| `none` | `filter: grayscale(0%)` | Tiada skala kelabu |
| `partial` | `filter: grayscale(50%)` | 50% skala kelabu |
| `full` | `filter: grayscale(100%)` | Skala kelabu penuh |

## Contoh

```html
<img visual="grayscale:full">Black and white</img>
```

## Pratonton

<div space="p-x:big p-b:medium m-t:medium" visual="border-w:thin border:neutral-100 dark:border:neutral-800 rounded:medium">

### Penapis Skala Kelabu

<div layout="flex col" space="g:medium">
  <p space="m:none" visual="text:neutral-600 dark:text:neutral-400 text-sm"><code>visual="grayscale:full"</code> - Tukar ke skala kelabu</p>
<div layout="flex" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div space="p:small" visual="bg:primary text:white rounded:small">none</div>
  <div space="p:small" visual="bg:primary text:white rounded:small" style="filter: grayscale(50%);">partial</div>
  <div space="p:small" visual="bg:primary text:white rounded:small" style="filter: grayscale(100%);">full</div>
</div>
</div>

<details>
<summary>Lihat Kod</summary>

```html
<div layout="flex" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div space="p:small" visual="bg:primary text:white rounded:small">none</div>
  <div space="p:small" visual="bg:primary text:white rounded:small" style="filter: grayscale(50%);">partial</div>
  <div space="p:small" visual="bg:primary text:white rounded:small" style="filter: grayscale(100%);">full</div>
</div>
```

</details>

</div>

## Nilai Arbitrari

Sokong nilai tersuai menggunakan sintaks kurungan segi empat:

```html
<div visual="filter:[custom-value]">Custom</div>
```
