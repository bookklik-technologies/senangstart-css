# Justify Items

Jajarkan item grid pada paksi sebaris

## Sintaks
```
layout="justify-items:[value]"
```

## Nilai

| Nilai | CSS Output | Huraian |
|-------|------------|-------------|
| `start` | `justify-items: start` | Jajar permulaan |
| `end` | `justify-items: end` | Jajar hujung |
| `center` | `justify-items: center` | Jajar tengah |
| `stretch` | `justify-items: stretch` | Regangkan item |

## Contoh

```html
<div layout="grid justify-items:center">Centered items</div>
```

## Pratonton

<div space="p-x:big p-b:medium m-t:medium" visual="border-w:thin border:neutral-100 dark:border:neutral-800 rounded:medium">

### Jajar Item Tengah

<div layout="flex col" space="g:medium">
  <p space="m:none" visual="text:neutral-600 dark:text:neutral-400 text-sm"><code>layout="justify-items:center"</code> - Tengahkan semua item grid secara mendatar dalam sel mereka</p>
<div layout="grid grid-cols:3 justify-items:center" space="g:small p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <span space="p:small" visual="bg:primary text:white rounded:small">1</span>
  <span space="p:small" visual="bg:primary text:white rounded:small">2</span>
  <span space="p:small" visual="bg:primary text:white rounded:small">3</span>
</div>
</div>

<details>
<summary>Lihat Kod</summary>

```html
<div layout="grid grid-cols:3 justify-items:center" space="g:small p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <span space="p:small" visual="bg:primary text:white rounded:small">1</span>
  <span space="p:small" visual="bg:primary text:white rounded:small">2</span>
  <span space="p:small" visual="bg:primary text:white rounded:small">3</span>
</div>
```

</details>

</div>
