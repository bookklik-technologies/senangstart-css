# Accent Color

Tetapkan warna aksen untuk kawalan borang

## Sintaks
```
visual="accent:[color]"
```

## Contoh

```html
<input type="checkbox" visual="accent:primary">
```

## Pratonton

<div space="p-x:big p-b:medium m-t:medium" visual="border-w:thin border:neutral-100 dark:border:neutral-800 rounded:medium">

### Warna Aksen

<div layout="flex col" space="g:medium">
  <p space="m:none" visual="text:neutral-600 dark:text:neutral-400 text-sm"><code>visual="accent:primary"</code> - Gaya kawalan borang asli (kotak semak, radio, julat)</p>
<div layout="flex" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <input type="checkbox" checked visual="accent:primary w:[20px] h:[20px]">
  <input type="radio" checked visual="accent:success w:[20px] h:[20px]">
  <input type="range" visual="accent:secondary w:[100px]">
</div>
</div>

<details>
<summary>Lihat Kod</summary>

```html
<div layout="flex" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <input type="checkbox" checked visual="accent:primary w:[20px] h:[20px]">
  <input type="radio" checked visual="accent:success w:[20px] h:[20px]">
  <input type="range" visual="accent:secondary w:[100px]">
</div>
```

</details>

</div>

## Nilai Arbitrari

Sokong nilai tersuai menggunakan sintaks kurungan segi empat:

```html
<div visual="accent:[custom-value]">Custom</div>
```
