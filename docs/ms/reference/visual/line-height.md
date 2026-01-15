# Line Height

Tetapkan ketinggian baris

## Sintaks
```
visual="leading:[value]"
```

## Nilai

| Nilai | CSS Output | Huraian |
|-------|------------|-------------|
| `none` | `line-height: 1` | Tiada ketinggian tambahan |
| `tight` | `line-height: 1.25` | Peneraju ketat |
| `snug` | `line-height: 1.375` | Peneraju ketat |
| `normal` | `line-height: 1.5` | Peneraju normal |
| `relaxed` | `line-height: 1.625` | Peneraju santai |
| `loose` | `line-height: 2` | Peneraju longgar |

## Contoh

```html
<div visual="leading:relaxed">Relaxed line height</div>
```

## Pratonton

<div space="p-x:big p-b:medium m-t:medium" visual="border-w:thin border:neutral-100 dark:border:neutral-800 rounded:medium">

### Ketinggian Baris

<div layout="flex col" space="g:medium">
  <p space="m:none" visual="text:neutral-600 dark:text:neutral-400 text-sm"><code>visual="leading:relaxed"</code> - Kawal jarak menegak antara baris</p>
<div layout="flex:col" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <p space="m:0" visual="leading:tight">Tight leading<br>for headings</p>
  <p space="m:0" visual="leading:normal">Normal leading<br>for body text</p>
  <p space="m:0" visual="leading:loose">Loose leading<br>for readability</p>
</div>
</div>

<details>
<summary>Lihat Kod</summary>

```html
<div layout="flex:col" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <p space="m:0" visual="leading:tight">Tight leading<br>for headings</p>
  <p space="m:0" visual="leading:normal">Normal leading<br>for body text</p>
  <p space="m:0" visual="leading:loose">Loose leading<br>for readability</p>
</div>
```

</details>

</div>

## Nilai Arbitrari

Sokong nilai tersuai menggunakan sintaks kurungan segi empat:

```html
<div visual="line:[custom-value]">Custom</div>
```
