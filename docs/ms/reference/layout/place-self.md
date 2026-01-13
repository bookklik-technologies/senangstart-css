# Place Self

Pintasan untuk align-self dan justify-self

## Sintaks
```
layout="place-self:[value]"
```

## Nilai

| Nilai | CSS Output | Huraian |
|-------|------------|-------------|
| `auto` | `place-self: auto` | Jajar automatik |
| `start` | `place-self: start` | Jajar permulaan |
| `end` | `place-self: end` | Jajar hujung |
| `center` | `place-self: center` | Jajar tengah |
| `stretch` | `place-self: stretch` | Regangkan item |

## Contoh

```html
<div layout="place-self:center">Centered item</div>
```

## Pratonton

<div space="p-x:big p-b:medium m-t:medium" visual="border-w:thin border:neutral-100 dark:border:neutral-800 rounded:medium">

### Letakkan Kendiri Tengah

<div layout="flex col" space="g:medium">
  <p space="m:none" visual="text:neutral-600 dark:text:neutral-400 text-sm"><code>layout="place-self:center"</code> - Tengahkan satu item dalam kedua-dua arah dalam selnya</p>
<div layout="grid grid-cols:3" space="g:small p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium" style="height: 100px;">
  <span space="p:small" visual="bg:neutral-300 dark:bg:neutral-700 text:neutral-800 dark:text:neutral-200 rounded:small">Default</span>
  <span layout="place-self:center" space="p:small" visual="bg:primary text:white rounded:small">center</span>
  <span space="p:small" visual="bg:neutral-300 dark:bg:neutral-700 text:neutral-800 dark:text:neutral-200 rounded:small">Default</span>
</div>
</div>

<details>
<summary>Lihat Kod</summary>

```html
<div layout="grid grid-cols:3" space="g:small p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium" style="height: 100px;">
  <span space="p:small" visual="bg:neutral-300 dark:bg:neutral-700 text:neutral-800 dark:text:neutral-200 rounded:small">Default</span>
  <span layout="place-self:center" space="p:small" visual="bg:primary text:white rounded:small">center</span>
  <span space="p:small" visual="bg:neutral-300 dark:bg:neutral-700 text:neutral-800 dark:text:neutral-200 rounded:small">Default</span>
</div>
```

</details>

</div>
