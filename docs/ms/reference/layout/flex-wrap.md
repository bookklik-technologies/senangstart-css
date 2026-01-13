# Flex Wrap

Kawal bagaimana item flex membungkus

## Sintaks
```
layout="[wrap-value]"
```

## Nilai

| Nilai | CSS Output | Huraian |
|-------|------------|-------------|
| `wrap` | `flex-wrap: wrap` | Benarkan pembungkusan |
| `nowrap` | `flex-wrap: nowrap` | Halang pembungkusan |
| `wrap-reverse` | `flex-wrap: wrap-reverse` | Bungkus terbalik |

## Contoh

```html
<div layout="flex wrap">Wrapping flex</div>
```

## Pratonton

<div space="p-x:big p-b:medium m-t:medium" visual="border-w:thin border:neutral-100 dark:border:neutral-800 rounded:medium">

### Bungkus Diaktifkan

<div layout="flex col" space="g:medium">
  <p space="m:none" visual="text:neutral-600 dark:text:neutral-400 text-sm"><code>layout="wrap"</code> - Item membungkus ke baris seterusnya apabila bekas penuh</p>
<div layout="flex wrap" space="g:small p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium" style="max-width: 200px;">
  <span space="p:small" visual="bg:primary text:white rounded:small">Item 1</span>
  <span space="p:small" visual="bg:primary text:white rounded:small">Item 2</span>
  <span space="p:small" visual="bg:primary text:white rounded:small">Item 3</span>
  <span space="p:small" visual="bg:primary text:white rounded:small">Item 4</span>
</div>
</div>

<details>
<summary>Lihat Kod</summary>

```html
<div layout="flex wrap" space="g:small p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium" style="max-width: 200px;">
  <span space="p:small" visual="bg:primary text:white rounded:small">Item 1</span>
  <span space="p:small" visual="bg:primary text:white rounded:small">Item 2</span>
  <span space="p:small" visual="bg:primary text:white rounded:small">Item 3</span>
  <span space="p:small" visual="bg:primary text:white rounded:small">Item 4</span>
</div>
```

</details>

</div>

<div space="p-x:big p-b:medium m-t:medium" visual="border-w:thin border:neutral-100 dark:border:neutral-800 rounded:medium">

### Tiada Bungkusan

<div layout="flex col" space="g:medium">
  <p space="m:none" visual="text:neutral-600 dark:text:neutral-400 text-sm"><code>layout="nowrap"</code> - Item kekal pada satu baris (mungkin melimpah)</p>
<div layout="flex nowrap" space="g:small p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium" style="max-width: 200px; overflow: hidden;">
  <span space="p:small" visual="bg:primary text:white rounded:small">Item 1</span>
  <span space="p:small" visual="bg:primary text:white rounded:small">Item 2</span>
  <span space="p:small" visual="bg:primary text:white rounded:small">Item 3</span>
</div>
</div>

<details>
<summary>Lihat Kod</summary>

```html
<div layout="flex nowrap" space="g:small p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium" style="max-width: 200px; overflow: hidden;">
  <span space="p:small" visual="bg:primary text:white rounded:small">Item 1</span>
  <span space="p:small" visual="bg:primary text:white rounded:small">Item 2</span>
  <span space="p:small" visual="bg:primary text:white rounded:small">Item 3</span>
</div>
```

</details>

</div>
