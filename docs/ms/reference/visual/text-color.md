# Text Color

Tetapkan warna teks

## Sintaks
```
visual="text:[color]"
```

## Nilai

| Nilai | CSS Output | Huraian |
|-------|------------|-------------|
| `left` | `text-align: left` | Jajar kiri |
| `center` | `text-align: center` | Jajar tengah |
| `right` | `text-align: right` | Jajar kanan |
| `justify` | `text-align: justify` | Jajar sepenuh |

## Contoh

```html
<div visual="text:white">White text</div>
<div visual="text:center">Centered text</div>
```

## Pratonton

<div space="p-x:big p-b:medium m-t:medium" visual="border-w:thin border:neutral-100 dark:border:neutral-800 rounded:medium">

### Warna Teks

<div layout="flex col" space="g:medium">
  <p space="m:none" visual="text:neutral-600 dark:text:neutral-400 text-sm"><code>visual="text:primary"</code> - Tetapkan warna teks dari tema atau palet</p>
<div layout="flex" space="g:small p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <span visual="text:primary">Primary</span>
  <span visual="text:secondary">Secondary</span>
  <span visual="text:success">Success</span>
  <span visual="text:danger">Danger</span>
</div>
</div>

<details>
<summary>Lihat Kod</summary>

```html
<div layout="flex" space="g:small p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <span visual="text:primary">Primary</span>
  <span visual="text:secondary">Secondary</span>
  <span visual="text:success">Success</span>
  <span visual="text:danger">Danger</span>
</div>
```

</details>

</div>

## Nilai Arbitrari

Sokong nilai tersuai menggunakan sintaks kurungan segi empat:

```html
<div visual="text:[custom-value]">Custom</div>
```
