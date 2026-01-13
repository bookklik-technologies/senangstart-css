# Align Self

Ganti penjajaran untuk satu item

## Sintaks
```
layout="self:[value]"
```

## Nilai

| Nilai | CSS Output | Huraian |
|-------|------------|-------------|
| `auto` | `align-self: auto` | Guna penjajaran induk |
| `start` | `align-self: flex-start` | Jajar ke permulaan |
| `end` | `align-self: flex-end` | Jajar ke hujung |
| `center` | `align-self: center` | Tengahkan item |
| `baseline` | `align-self: baseline` | Jajar ke garis asas |
| `stretch` | `align-self: stretch` | Regangkan item |

## Contoh

```html
<div layout="self:center">Centered item</div>
```

## Pratonton

<div space="p-x:big p-b:medium m-t:medium" visual="border-w:thin border:neutral-100 dark:border:neutral-800 rounded:medium">

### Jajar Kendiri

<div layout="flex col" space="g:medium">
  <p space="m:none" visual="text:neutral-600 dark:text:neutral-400 text-sm"><code>layout="self:center"</code> - Ganti penjajaran induk untuk satu item</p>
<div layout="flex items:start" space="g:small p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium" style="height: 100px;">
  <span space="p:small" visual="bg:neutral-300 dark:bg:neutral-700 text:neutral-800 dark:text:neutral-200 rounded:small">Start</span>
  <span layout="self:center" space="p:small" visual="bg:primary text:white rounded:small">self:center</span>
  <span space="p:small" visual="bg:neutral-300 dark:bg:neutral-700 text:neutral-800 dark:text:neutral-200 rounded:small">Start</span>
</div>
</div>

<details>
<summary>Lihat Kod</summary>

```html
<div layout="flex items:start" space="g:small p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium" style="height: 100px;">
  <span space="p:small" visual="bg:neutral-300 dark:bg:neutral-700 text:neutral-800 dark:text:neutral-200 rounded:small">Start</span>
  <span layout="self:center" space="p:small" visual="bg:primary text:white rounded:small">self:center</span>
  <span space="p:small" visual="bg:neutral-300 dark:bg:neutral-700 text:neutral-800 dark:text:neutral-200 rounded:small">Start</span>
</div>
```

</details>

</div>
