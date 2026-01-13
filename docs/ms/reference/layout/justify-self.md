# Justify Self

Jajarkan satu item grid pada paksi sebaris

## Sintaks
```
layout="justify-self:[value]"
```

## Nilai

| Nilai | CSS Output | Huraian |
|-------|------------|-------------|
| `auto` | `justify-self: auto` | Jajar automatik |
| `start` | `justify-self: start` | Jajar permulaan |
| `end` | `justify-self: end` | Jajar hujung |
| `center` | `justify-self: center` | Jajar tengah |
| `stretch` | `justify-self: stretch` | Regangkan item |

## Contoh

```html
<div layout="justify-self:end">End aligned</div>
```

## Pratonton

<div space="p-x:big p-b:medium m-t:medium" visual="border-w:thin border:neutral-100 dark:border:neutral-800 rounded:medium">

### Jajar Kendiri

<div layout="flex col" space="g:medium">
  <p space="m:none" visual="text:neutral-600 dark:text:neutral-400 text-sm"><code>layout="justify-self:center"</code> - Ganti penjajaran mendatar untuk satu item grid</p>
<div layout="grid grid-cols:3" space="g:small p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <span space="p:small" visual="bg:neutral-300 dark:bg:neutral-700 text:neutral-800 dark:text:neutral-200 rounded:small">Default</span>
  <span layout="justify-self:center" space="p:small" visual="bg:primary text:white rounded:small">center</span>
  <span layout="justify-self:end" space="p:small" visual="bg:primary text:white rounded:small">end</span>
</div>
</div>

<details>
<summary>Lihat Kod</summary>

```html
<div layout="grid grid-cols:3" space="g:small p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <span space="p:small" visual="bg:neutral-300 dark:bg:neutral-700 text:neutral-800 dark:text:neutral-200 rounded:small">Default</span>
  <span layout="justify-self:center" space="p:small" visual="bg:primary text:white rounded:small">center</span>
  <span layout="justify-self:end" space="p:small" visual="bg:primary text:white rounded:small">end</span>
</div>
```

</details>

</div>
