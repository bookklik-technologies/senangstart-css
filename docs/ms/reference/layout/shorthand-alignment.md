# Shorthand Alignment

Pintasan penjajaran pantas

## Sintaks
```
layout="[alignment]"
```

## Nilai

| Nilai | CSS Output | Huraian |
|-------|------------|-------------|
| `center` | `justify-content: center; align-items: center` | Tengahkan kedua-dua paksi |
| `start` | `justify-content: flex-start; align-items: flex-start` | Jajar ke permulaan |
| `end` | `justify-content: flex-end; align-items: flex-end` | Jajar ke hujung |
| `between` | `justify-content: space-between` | Ruang antara |
| `around` | `justify-content: space-around` | Ruang sekeliling |
| `evenly` | `justify-content: space-evenly` | Ruang sekata |

## Contoh

```html
<div layout="flex center">Centered content</div>
```

## Pratonton

<div space="p-x:big p-b:medium m-t:medium" visual="border-w:thin border:neutral-100 dark:border:neutral-800 rounded:medium">

### Pintasan Tengah

<div layout="flex col" space="g:medium">
  <p space="m:none" visual="text:neutral-600 dark:text:neutral-400 text-sm"><code>layout="center"</code> - Tengahkan item pada kedua-dua paksi sekaligus</p>
<div layout="flex center" space="p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium" style="height: 100px;">
  <span space="p:small" visual="bg:primary text:white rounded:small">Centered</span>
</div>
</div>

<details>
<summary>Lihat Kod</summary>

```html
<div layout="flex center" space="p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium" style="height: 100px;">
  <span space="p:small" visual="bg:primary text:white rounded:small">Centered</span>
</div>
```

</details>

</div>

<div space="p-x:big p-b:medium m-t:medium" visual="border-w:thin border:neutral-100 dark:border:neutral-800 rounded:medium">

### Pintasan Antara

<div layout="flex col" space="g:medium">
  <p space="m:none" visual="text:neutral-600 dark:text:neutral-400 text-sm"><code>layout="between"</code> - Susun atur space-between pantas</p>
<div layout="flex between" space="p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <span space="p:small" visual="bg:primary text:white rounded:small">Left</span>
  <span space="p:small" visual="bg:primary text:white rounded:small">Right</span>
</div>
</div>

<details>
<summary>Lihat Kod</summary>

```html
<div layout="flex between" space="p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <span space="p:small" visual="bg:primary text:white rounded:small">Left</span>
  <span space="p:small" visual="bg:primary text:white rounded:small">Right</span>
</div>
```

</details>

</div>
