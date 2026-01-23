# Outline

Tetapkan warna garis luar

## Sintaks
```
visual="outline:[color]"
```

## Contoh

```html
<button visual="focus:outline:primary">Focus outline</button>
```

## Pratonton

<div space="p-x:big p-b:medium m-t:medium" visual="border-w:thin border:neutral-100 dark:border:neutral-800 rounded:medium">

### Garis Luar

<div layout="flex col" space="g:medium">
  <p space="m:none" visual="text:neutral-600 dark:text:neutral-400 text-sm"><code>visual="outline:primary"</code> - Garis luar tidak mempengaruhi susun atur</p>
<div layout="flex" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <button space="p:small" visual="outline:primary bg:white dark:bg:neutral-800 rounded:small">outline:primary</button>
</div>
</div>

<details>
<summary>Lihat Kod</summary>

```html
<div layout="flex" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <button space="p:small" visual="outline:primary bg:white dark:bg:neutral-800 rounded:small">outline:primary</button>
</div>
```

</details>

</div>

## Nilai Arbitrari

Sokong nilai tersuai menggunakan sintaks kurungan segi empat:

```html
<div visual="outline:[custom-value]">Custom</div>
```
