# Fill

Tetapkan warna pengisian SVG

## Sintaks
```
visual="fill:[color]"
```

## Nilai

| Nilai | CSS Output | Huraian |
|-------|------------|-------------|
| `none` | `fill: none` | Tiada pengisian |
| `current` | `fill: currentColor` | Warna semasa |

## Contoh

```html
<svg visual="fill:primary">...</svg>
```

## Pratonton

<div space="p-x:big p-b:medium m-t:medium" visual="border-w:thin border:neutral-100 dark:border:neutral-800 rounded:medium">

### Pengisian SVG

<div layout="flex col" space="g:medium">
  <p space="m:none" visual="text:neutral-600 dark:text:neutral-400 text-sm"><code>visual="fill:primary"</code> - Isi elemen SVG dengan warna</p>
<div layout="flex" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <svg visual="fill:primary" width="40" height="40" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/></svg>
  <svg visual="fill:danger" width="40" height="40" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/></svg>
  <svg visual="fill:success" width="40" height="40" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/></svg>
</div>
</div>

<details>
<summary>Lihat Kod</summary>

```html
<div layout="flex" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <svg visual="fill:primary" width="40" height="40" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/></svg>
  <svg visual="fill:danger" width="40" height="40" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/></svg>
  <svg visual="fill:success" width="40" height="40" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/></svg>
</div>
```

</details>

</div>

## Nilai Arbitrari

Sokong nilai tersuai menggunakan sintaks kurungan segi empat:

```html
<div visual="fill:[custom-value]">Custom</div>
```
