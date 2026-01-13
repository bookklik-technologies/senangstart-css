# Caret Color

Tetapkan warna karet input teks

## Sintaks
```
visual="caret:[color]"
```

## Contoh

```html
<input visual="caret:primary">
```

## Pratonton

<div space="p-x:big p-b:medium m-t:medium" visual="border-w:thin border:neutral-100 dark:border:neutral-800 rounded:medium">

### Warna Karet

<div layout="flex col" space="g:medium">
  <p space="m:none" visual="text:neutral-600 dark:text:neutral-400 text-sm"><code>visual="caret:primary"</code> - Gaya kursor teks dalam medan input</p>
<div space="p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <input type="text" placeholder="Type here..." style="caret-color: #3b82f6; padding: 0.5rem; border: 1px solid #e5e7eb; border-radius: 0.25rem;">
</div>
</div>

<details>
<summary>Lihat Kod</summary>

```html
<div space="p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <input type="text" placeholder="Type here..." style="caret-color: #3b82f6; padding: 0.5rem; border: 1px solid #e5e7eb; border-radius: 0.25rem;">
</div>
```

</details>

</div>

## Nilai Arbitrari

Sokong nilai tersuai menggunakan sintaks kurungan segi empat:

```html
<div visual="caret:[custom-value]">Custom</div>
```
