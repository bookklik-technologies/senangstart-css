# Stroke Width

Tetapkan lebar gurisan SVG

## Sintaks
```
visual="stroke-w:[value]"
```

## Nilai

| Nilai | CSS Output | Huraian |
|-------|------------|-------------|
| `0` | `stroke-width: 0` | Tiada gurisan |
| `1` | `stroke-width: 1px` | Gurisan 1px |
| `2` | `stroke-width: 2px` | Gurisan 2px |

## Contoh

```html
<svg visual="stroke:black stroke-w:2">...</svg>
```

## Pratonton

<div space="p-x:big p-b:medium m-t:medium" visual="border-w:thin border:neutral-100 dark:border:neutral-800 rounded:medium">

### Lebar Gurisan

<div layout="flex col" space="g:medium">
  <p space="m:none" visual="text:neutral-600 dark:text:neutral-400 text-sm"><code>visual="stroke-w:2"</code> - Kawal ketebalan gurisan SVG</p>
<div layout="flex" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <svg visual="stroke:primary fill:none" width="40" height="40" viewBox="0 0 24 24" style="stroke-width: 1px;"><circle cx="12" cy="12" r="10"/></svg>
  <svg visual="stroke:primary fill:none" width="40" height="40" viewBox="0 0 24 24" style="stroke-width: 2px;"><circle cx="12" cy="12" r="10"/></svg>
  <svg visual="stroke:primary fill:none" width="40" height="40" viewBox="0 0 24 24" style="stroke-width: 3px;"><circle cx="12" cy="12" r="10"/></svg>
</div>
</div>

<details>
<summary>Lihat Kod</summary>

```html
<div layout="flex" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <svg visual="stroke:primary fill:none" width="40" height="40" viewBox="0 0 24 24" style="stroke-width: 1px;"><circle cx="12" cy="12" r="10"/></svg>
  <svg visual="stroke:primary fill:none" width="40" height="40" viewBox="0 0 24 24" style="stroke-width: 2px;"><circle cx="12" cy="12" r="10"/></svg>
  <svg visual="stroke:primary fill:none" width="40" height="40" viewBox="0 0 24 24" style="stroke-width: 3px;"><circle cx="12" cy="12" r="10"/></svg>
</div>
```

</details>

</div>

## Nilai Arbitrari

Sokong nilai tersuai menggunakan sintaks kurungan segi empat:

```html
<div visual="stroke:[custom-value]">Custom</div>
```
