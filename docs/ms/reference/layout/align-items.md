# Align Items

Jajarkan item sepanjang paksi silang

## Sintaks
```
layout="items:[value]"
```

## Nilai

| Nilai | CSS Output | Huraian |
|-------|------------|-------------|
| `start` | `align-items: flex-start` | Jajar ke permulaan |
| `end` | `align-items: flex-end` | Jajar ke hujung |
| `center` | `align-items: center` | Tengahkan item |
| `baseline` | `align-items: baseline` | Jajar ke garis asas |
| `stretch` | `align-items: stretch` | Regangkan item |

## Contoh

```html
<div layout="flex items:center">Centered</div>
```

## Pratonton

<div space="p-x:big p-b:medium m-t:medium" visual="border-w:thin border:neutral-100 dark:border:neutral-800 rounded:medium">

### Item Tengah

<div layout="flex col" space="g:medium">
  <p space="m:none" visual="text:neutral-600 dark:text:neutral-400 text-sm"><code>layout="items:center"</code> - Item berpusat sepanjang paksi silang</p>
<div layout="flex items:center" space="g:small p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium" style="height: 100px;">
  <span space="p:small" visual="bg:primary text:white rounded:small">Short</span>
  <span space="p:large" visual="bg:primary text:white rounded:small">Tall</span>
  <span space="p:small" visual="bg:primary text:white rounded:small">Short</span>
</div>
</div>

<details>
<summary>Lihat Kod</summary>

```html
<div layout="flex items:center" space="g:small p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium" style="height: 100px;">
  <span space="p:small" visual="bg:primary text:white rounded:small">Short</span>
  <span space="p:large" visual="bg:primary text:white rounded:small">Tall</span>
  <span space="p:small" visual="bg:primary text:white rounded:small">Short</span>
</div>
```

</details>

</div>

<div space="p-x:big p-b:medium m-t:medium" visual="border-w:thin border:neutral-100 dark:border:neutral-800 rounded:medium">

### Item Permulaan

<div layout="flex col" space="g:medium">
  <p space="m:none" visual="text:neutral-600 dark:text:neutral-400 text-sm"><code>layout="items:start"</code> - Item dijajarkan ke permulaan paksi silang</p>
<div layout="flex items:start" space="g:small p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium" style="height: 100px;">
  <span space="p:small" visual="bg:primary text:white rounded:small">Short</span>
  <span space="p:large" visual="bg:primary text:white rounded:small">Tall</span>
  <span space="p:small" visual="bg:primary text:white rounded:small">Short</span>
</div>
</div>

<details>
<summary>Lihat Kod</summary>

```html
<div layout="flex items:start" space="g:small p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium" style="height: 100px;">
  <span space="p:small" visual="bg:primary text:white rounded:small">Short</span>
  <span space="p:large" visual="bg:primary text:white rounded:small">Tall</span>
  <span space="p:small" visual="bg:primary text:white rounded:small">Short</span>
</div>
```

</details>

</div>

<div space="p-x:big p-b:medium m-t:medium" visual="border-w:thin border:neutral-100 dark:border:neutral-800 rounded:medium">

### Item Regang

<div layout="flex col" space="g:medium">
  <p space="m:none" visual="text:neutral-600 dark:text:neutral-400 text-sm"><code>layout="items:stretch"</code> - Item diregangkan untuk mengisi ketinggian bekas</p>
<div layout="flex items:stretch" space="g:small p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium" style="height: 100px;">
  <span layout="flex center" space="p:small" visual="bg:primary text:white rounded:small">1</span>
  <span layout="flex center" space="p:small" visual="bg:primary text:white rounded:small">2</span>
  <span layout="flex center" space="p:small" visual="bg:primary text:white rounded:small">3</span>
</div>
</div>

<details>
<summary>Lihat Kod</summary>

```html
<div layout="flex items:stretch" space="g:small p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium" style="height: 100px;">
  <span layout="flex center" space="p:small" visual="bg:primary text:white rounded:small">1</span>
  <span layout="flex center" space="p:small" visual="bg:primary text:white rounded:small">2</span>
  <span layout="flex center" space="p:small" visual="bg:primary text:white rounded:small">3</span>
</div>
```

</details>

</div>
