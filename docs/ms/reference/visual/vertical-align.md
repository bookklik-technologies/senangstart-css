# Vertical Align

Tetapkan penjajaran menegak

## Sintaks
```
visual="align:[value]"
```

## Nilai

| Nilai | CSS Output | Huraian |
|-------|------------|-------------|
| `baseline` | `vertical-align: baseline` | Garis asas |
| `top` | `vertical-align: top` | Atas |
| `middle` | `vertical-align: middle` | Tengah |
| `bottom` | `vertical-align: bottom` | Bawah |
| `text-top` | `vertical-align: text-top` | Atas teks |
| `text-bottom` | `vertical-align: text-bottom` | Bawah teks |
| `sub` | `vertical-align: sub` | Subskrip |
| `super` | `vertical-align: super` | Superskrip |

## Contoh

```html
<img visual="align:middle">Vertically centered</img>
```

## Pratonton

<div space="p-x:big p-b:medium m-t:medium" visual="border-w:thin border:neutral-100 dark:border:neutral-800 rounded:medium">

### Penjajaran Menegak

<div layout="flex col" space="g:medium">
  <p space="m:none" visual="text:neutral-600 dark:text:neutral-400 text-sm"><code>visual="align:middle"</code> - Jajarkan elemen sebaris</p>
<div layout="flex" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div space="p:small" visual="bg:primary text:white rounded:small">top</div>
  <div space="p:small" visual="bg:primary text:white rounded:small">middle</div>
  <div space="p:small" visual="bg:primary text:white rounded:small">bottom</div>
</div>
</div>

<details>
<summary>Lihat Kod</summary>

```html
<div layout="flex" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div space="p:small" visual="bg:primary text:white rounded:small">top</div>
  <div space="p:small" visual="bg:primary text:white rounded:small">middle</div>
  <div space="p:small" visual="bg:primary text:white rounded:small">bottom</div>
</div>
```

</details>

</div>
