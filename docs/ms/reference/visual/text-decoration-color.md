# Text Decoration Color

Tetapkan warna hiasan teks

## Sintaks
```
visual="decoration:[color]/[opacity]"
```

## Contoh

```html
<span visual="underline decoration:primary">Colored underline</span>
<span visual="underline decoration:[#FF5733]">Custom color</span>
<span visual="underline decoration:primary/50">50% opacity underline</span>
```

## Pratonton

<div space="p-x:big p-b:medium m-t:medium" visual="border-w:thin border:neutral-100 dark:border:neutral-800 rounded:medium">

### Warna Hiasan

<div layout="flex col" space="g:medium">
  <p space="m:none" visual="text:neutral-600 dark:text:neutral-400 text-sm"><code>visual="decoration:primary"</code> - Tetapkan warna garis bawah/atas teks</p>
<div layout="flex col" space="g:small p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <span visual="underline decoration:primary text-size:big">primary underline</span>
  <span visual="line-through decoration:danger text-size:big">danger strikethrough</span>
  <span visual="underline decoration:success text-size:big">success underline</span>
</div>
</div>

<details>
<summary>Lihat Kod</summary>

```html
<div layout="flex col" space="g:small p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <span visual="underline decoration:primary text-size:big">primary underline</span>
  <span visual="line-through decoration:danger text-size:big">danger strikethrough</span>
  <span visual="underline decoration:success text-size:big">success underline</span>
</div>
```

</details>

</div>

## Nilai Arbitrari

Sokong nilai tersuai menggunakan sintaks kurungan segi empat:

```html
<div visual="text:[custom-value]">Custom</div>
```
