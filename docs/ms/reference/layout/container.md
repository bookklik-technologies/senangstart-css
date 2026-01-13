# Container

Cipta bekas berpusat dengan lebar maksimum

## Sintaks
```
layout="container"
```

## Nilai

| Nilai | CSS Output | Huraian |
|-------|------------|-------------|
| `container` | `width: 100%; margin-left: auto; margin-right: auto` | Bekas berpusat |

## Contoh

```html
<div layout="container">Centered content</div>
```

## Pratonton

<div space="p-x:big p-b:medium m-t:medium" visual="border-w:thin border:neutral-100 dark:border:neutral-800 rounded:medium">

### Bekas

<div layout="flex col" space="g:medium">
  <p space="m:none" visual="text:neutral-600 dark:text:neutral-400 text-sm"><code>layout="container"</code> - Bekas berpusat dengan lebar maksimum</p>
<div visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium" space="p:small">
  <div layout="container text:center" space="p:medium" visual="bg:primary text:white rounded:small">Centered Container</div>
</div>
</div>

<details>
<summary>Lihat Kod</summary>

```html
<div visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium" space="p:small">
  <div layout="container text:center" space="p:medium" visual="bg:primary text:white rounded:small">Centered Container</div>
</div>
```

</details>

</div>
