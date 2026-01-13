# Scroll Margin

Tetapkan margin skrol untuk snap

## Sintaks
```
visual="scroll-m:[value]"
```

## Nilai

| Nilai | CSS Output | Huraian |
|-------|------------|-------------|
| `scroll-m` | `scroll-margin: {value}` | Semua sisi |
| `scroll-m-t` | `scroll-margin-top: {value}` | Margin atas |
| `scroll-m-r` | `scroll-margin-right: {value}` | Margin kanan |
| `scroll-m-b` | `scroll-margin-bottom: {value}` | Margin bawah |
| `scroll-m-l` | `scroll-margin-left: {value}` | Margin kiri |

## Contoh

```html
<div visual="scroll-m:medium">Scroll margin</div>
```

## Pratonton

<div space="p-x:big p-b:medium m-t:medium" visual="border-w:thin border:neutral-100 dark:border:neutral-800 rounded:medium">

### Margin Skrol

<div layout="flex col" space="g:medium">
  <p space="m:none" visual="text:neutral-600 dark:text:neutral-400 text-sm"><code>visual="scroll-m:medium"</code> - Offset untuk snap skrol</p>
<div layout="flex" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div space="p:small" visual="bg:primary text:white rounded:small">scroll-m:medium</div>
</div>
</div>

<details>
<summary>Lihat Kod</summary>

```html
<div layout="flex" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div space="p:small" visual="bg:primary text:white rounded:small">scroll-m:medium</div>
</div>
```

</details>

</div>

## Nilai Arbitrari

Sokong nilai tersuai menggunakan sintaks kurungan segi empat:

```html
<div visual="scroll:[custom-value]">Custom</div>
```
