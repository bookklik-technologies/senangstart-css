# Stroke

Tetapkan warna gurisan SVG

## Sintaks
```
visual="stroke:[color]"
```

## Nilai

| Nilai | CSS Output | Huraian |
|-------|------------|-------------|
| `none` | `stroke: none` | Tiada gurisan |
| `current` | `stroke: currentColor` | Warna semasa |

## Contoh

```html
<svg visual="stroke:primary stroke-w:2">...</svg>
```

## Pratonton

<div space="p-x:big p-b:medium m-t:medium" visual="border-w:thin border:neutral-100 dark:border:neutral-800 rounded:medium">

### Gurisan SVG

<div layout="flex col" space="g:medium">
  <p space="m:none" visual="text:neutral-600 dark:text:neutral-400 text-sm"><code>visual="stroke:primary"</code> - Guris elemen SVG dengan warna</p>
<div layout="flex" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <svg visual="stroke:primary fill:none stroke-w:2" width="40" height="40" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/></svg>
  <svg visual="stroke:danger fill:none stroke-w:2" width="40" height="40" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/></svg>
</div>
</div>

<details>
<summary>Lihat Kod</summary>

```html
<div layout="flex" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <svg visual="stroke:primary fill:none stroke-w:2" width="40" height="40" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/></svg>
  <svg visual="stroke:danger fill:none stroke-w:2" width="40" height="40" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/></svg>
</div>
```

</details>

</div>

## Nilai Arbitrari

Sokong nilai tersuai menggunakan sintaks kurungan segi empat:

```html
<div visual="stroke:[custom-value]">Custom</div>
```
