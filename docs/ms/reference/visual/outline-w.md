# Outline W

Tetapkan lebar garis luar

## Sintaks
```
visual="outline-w:[value]"
```

## Nilai

| Nilai | CSS Output | Huraian |
|-------|------------|-------------|
| `none` | `outline-width: var(--s-none)` | Tiada lebar garis luar (0px) |
| `thin` | `outline-width: var(--s-thin)` | Garis luar nipis (1px) |
| `regular` | `outline-width: var(--s-regular)` | Garis luar biasa (2px) |
| `thick` | `outline-width: var(--s-thick)` | Garis luar tebal (3px) |

## Contoh

```html
<button visual="outline-w:regular outline:primary">Outlined button</button>
```

## Pratonton

<div space="p-x:big p-b:medium m-t:medium" visual="border-w:thin border:neutral-100 dark:border:neutral-800 rounded:medium">

### Lebar Garis Luar

<div layout="flex col" space="g:medium">
  <p space="m:none" visual="text:neutral-600 dark:text:neutral-400 text-sm"><code>visual="outline-w:regular"</code> - Pilihan lebar garis luar berbeza</p>
<div layout="flex" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div space="p:medium" visual="outline:primary outline-w:thin rounded:small">thin</div>
  <div space="p:medium" visual="outline:primary outline-w:regular rounded:small">regular</div>
  <div space="p:medium" visual="outline:primary outline-w:thick rounded:small">thick</div>
</div>
</div>

<details>
<summary>Lihat Kod</summary>

```html
<div layout="flex" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div space="p:medium" visual="outline:primary outline-w:thin rounded:small">thin</div>
  <div space="p:medium" visual="outline:primary outline-w:regular rounded:small">regular</div>
  <div space="p:medium" visual="outline:primary outline-w:thick rounded:small">thick</div>
</div>
```

</details>

</div>

## Nilai Arbitrari

Sokong nilai tersuai menggunakan sintaks kurungan segi empat:

```html
<div visual="outline:[custom-value]">Custom</div>
```
