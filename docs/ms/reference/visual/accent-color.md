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
  <input type="checkbox" checked style="accent-color: #3b82f6; width: 20px; height: 20px;">
  <input type="radio" checked style="accent-color: #10b981; width: 20px; height: 20px;">
  <input type="range" style="accent-color: #8b5cf6; width: 100px;">
</div>
</div>

<details>
<summary>Lihat Kod</summary>

```html
<div layout="flex" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <input type="checkbox" checked style="accent-color: #3b82f6; width: 20px; height: 20px;">
  <input type="radio" checked style="accent-color: #10b981; width: 20px; height: 20px;">
  <input type="range" style="accent-color: #8b5cf6; width: 100px;">
</div>
```

</details>

</div>

## Nilai Arbitrari

Sokong nilai tersuai menggunakan sintaks kurungan segi empat:

```html
<div visual="accent:[custom-value]">Custom</div>
```
