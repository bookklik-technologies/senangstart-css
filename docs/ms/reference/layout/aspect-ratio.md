# Aspect Ratio

Tetapkan nisbah aspek elemen

## Sintaks
```
layout="aspect:[value]"
```

## Nilai

| Nilai | CSS Output | Huraian |
|-------|------------|-------------|
| `auto` | `aspect-ratio: auto` | Nisbah aspek semula jadi |
| `square` | `aspect-ratio: 1 / 1` | Segi empat sama 1:1 |
| `video` | `aspect-ratio: 16 / 9` | Video 16:9 |

## Contoh

```html
<div layout="aspect:square">Square</div>
<div layout="aspect:[4/3]">4:3</div>
```

## Pratonton

<div space="p-x:big p-b:medium m-t:medium" visual="border-w:thin border:neutral-100 dark:border:neutral-800 rounded:medium">

### Nisbah Aspek Segi Empat

<div layout="flex col" space="g:medium">
  <p space="m:none" visual="text:neutral-600 dark:text:neutral-400 text-sm"><code>layout="aspect:square"</code> - Nisbah aspek 1:1</p>
<div layout="flex" space="g:small p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div layout="aspect:square flex center" visual="bg:primary text:white rounded:small" style="width: 80px;">1:1</div>
  <div layout="aspect:video flex center" visual="bg:primary text:white rounded:small" style="width: 80px;">16:9</div>
</div>
</div>

<details>
<summary>Lihat Kod</summary>

```html
<div layout="flex" space="g:small p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div layout="aspect:square flex center" visual="bg:primary text:white rounded:small" style="width: 80px;">1:1</div>
  <div layout="aspect:video flex center" visual="bg:primary text:white rounded:small" style="width: 80px;">16:9</div>
</div>
```

</details>

</div>

## Nilai Arbitrari

Sokong nilai tersuai menggunakan sintaks kurungan segi empat:

```html
<div layout="aspect:[custom-value]">Custom</div>
```
