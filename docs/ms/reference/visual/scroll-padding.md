# Scroll Padding

Tetapkan padding skrol untuk snap

## Sintaks
```
visual="scroll-p:[value]"
```

## Nilai

| Nilai | CSS Output | Huraian |
|-------|------------|-------------|
| `scroll-p` | `scroll-padding: {value}` | Semua sisi |
| `scroll-p-t` | `scroll-padding-top: {value}` | Padding atas |
| `scroll-p-r` | `scroll-padding-right: {value}` | Padding kanan |
| `scroll-p-b` | `scroll-padding-bottom: {value}` | Padding bawah |
| `scroll-p-l` | `scroll-padding-left: {value}` | Padding kiri |

## Contoh

```html
<div visual="scroll-p:big">Scroll padding</div>
```

## Pratonton

<div space="p-x:big p-b:medium m-t:medium" visual="border-w:thin border:neutral-100 dark:border:neutral-800 rounded:medium">

### Padding Skrol

<div layout="flex col" space="g:medium">
  <p space="m:none" visual="text:neutral-600 dark:text:neutral-400 text-sm"><code>visual="scroll-p:big"</code> - Padding untuk bekas snap skrol</p>
<div layout="flex" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div space="p:small" visual="bg:primary text:white rounded:small">scroll-p:big</div>
</div>
</div>

<details>
<summary>Lihat Kod</summary>

```html
<div layout="flex" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div space="p:small" visual="bg:primary text:white rounded:small">scroll-p:big</div>
</div>
```

</details>

</div>

## Nilai Arbitrari

Sokong nilai tersuai menggunakan sintaks kurungan segi empat:

```html
<div visual="scroll:[custom-value]">Custom</div>
```
