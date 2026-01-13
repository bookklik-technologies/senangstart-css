# Align Content

Jajarkan baris kandungan dalam bekas flex berbilang baris

## Sintaks
```
layout="content:[value]"
```

## Nilai

| Nilai | CSS Output | Huraian |
|-------|------------|-------------|
| `start` | `align-content: flex-start` | Jajar ke permulaan |
| `end` | `align-content: flex-end` | Jajar ke hujung |
| `center` | `align-content: center` | Tengahkan kandungan |
| `between` | `align-content: space-between` | Ruang antara baris |
| `around` | `align-content: space-around` | Ruang sekeliling baris |
| `evenly` | `align-content: space-evenly` | Ruang sekata |
| `stretch` | `align-content: stretch` | Regangkan baris |

## Contoh

```html
<div layout="flex wrap content:center">Centered rows</div>
```

## Pratonton

<div space="p-x:big p-b:medium m-t:medium" visual="border-w:thin border:neutral-100 dark:border:neutral-800 rounded:medium">

### Kandungan Tengah

<div layout="flex col" space="g:medium">
  <p space="m:none" visual="text:neutral-600 dark:text:neutral-400 text-sm"><code>layout="content:center"</code> - Tengahkan baris bungkus dalam bekas berbilang baris</p>
<div layout="flex wrap content:center" space="g:small p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium" style="height: 150px; max-width: 200px;">
  <span space="p:small" visual="bg:primary text:white rounded:small">1</span>
  <span space="p:small" visual="bg:primary text:white rounded:small">2</span>
  <span space="p:small" visual="bg:primary text:white rounded:small">3</span>
  <span space="p:small" visual="bg:primary text:white rounded:small">4</span>
</div>
</div>

<details>
<summary>Lihat Kod</summary>

```html
<div layout="flex wrap content:center" space="g:small p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium" style="height: 150px; max-width: 200px;">
  <span space="p:small" visual="bg:primary text:white rounded:small">1</span>
  <span space="p:small" visual="bg:primary text:white rounded:small">2</span>
  <span space="p:small" visual="bg:primary text:white rounded:small">3</span>
  <span space="p:small" visual="bg:primary text:white rounded:small">4</span>
</div>
```

</details>

</div>

<div space="p-x:big p-b:medium m-t:medium" visual="border-w:thin border:neutral-100 dark:border:neutral-800 rounded:medium">

### Kandungan Antara

<div layout="flex col" space="g:medium">
  <p space="m:none" visual="text:neutral-600 dark:text:neutral-400 text-sm"><code>layout="content:between"</code> - Ruang antara baris bungkus</p>
<div layout="flex wrap content:between" space="g:small p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium" style="height: 150px; max-width: 200px;">
  <span space="p:small" visual="bg:primary text:white rounded:small">1</span>
  <span space="p:small" visual="bg:primary text:white rounded:small">2</span>
  <span space="p:small" visual="bg:primary text:white rounded:small">3</span>
  <span space="p:small" visual="bg:primary text:white rounded:small">4</span>
</div>
</div>

<details>
<summary>Lihat Kod</summary>

```html
<div layout="flex wrap content:between" space="g:small p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium" style="height: 150px; max-width: 200px;">
  <span space="p:small" visual="bg:primary text:white rounded:small">1</span>
  <span space="p:small" visual="bg:primary text:white rounded:small">2</span>
  <span space="p:small" visual="bg:primary text:white rounded:small">3</span>
  <span space="p:small" visual="bg:primary text:white rounded:small">4</span>
</div>
```

</details>

</div>
