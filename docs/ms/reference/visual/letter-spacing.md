# Letter Spacing

Tetapkan jarak huruf

## Sintaks
```
visual="tracking:[value]"
```

## Nilai

| Nilai | CSS Output | Huraian |
|-------|------------|-------------|
| `tighter` | `letter-spacing: -0.05em` | Jarak lebih ketat |
| `tight` | `letter-spacing: -0.025em` | Jarak ketat |
| `normal` | `letter-spacing: 0` | Jarak normal |
| `wide` | `letter-spacing: 0.025em` | Jarak luas |
| `wider` | `letter-spacing: 0.05em` | Jarak lebih luas |
| `widest` | `letter-spacing: 0.1em` | Jarak paling luas |

## Contoh

```html
<div visual="tracking:wide">Wide tracking</div>
```

## Pratonton

<div space="p-x:big p-b:medium m-t:medium" visual="border-w:thin border:neutral-100 dark:border:neutral-800 rounded:medium">

### Jarak Huruf

<div layout="flex col" space="g:medium">
  <p space="m:none" visual="text:neutral-600 dark:text:neutral-400 text-sm"><code>visual="tracking:wide"</code> - Laraskan jarak antara aksara</p>
<div layout="flex:col" space="g:small p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <span visual="tracking:tighter">tighter spacing</span>
  <span visual="tracking:normal">normal spacing</span>
  <span visual="tracking:widest">widest spacing</span>
</div>
</div>

<details>
<summary>Lihat Kod</summary>

```html
<div layout="flex:col" space="g:small p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <span visual="tracking:tighter">tighter spacing</span>
  <span visual="tracking:normal">normal spacing</span>
  <span visual="tracking:widest">widest spacing</span>
</div>
```

</details>

</div>

## Nilai Arbitrari

Sokong nilai tersuai menggunakan sintaks kurungan segi empat:

```html
<div visual="letter:[custom-value]">Custom</div>
```
