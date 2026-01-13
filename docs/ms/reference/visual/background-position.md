# Background Position

Tetapkan kedudukan latar

## Sintaks
```
visual="bg-pos:[value]"
```

## Nilai

| Nilai | CSS Output | Huraian |
|-------|------------|-------------|
| `center` | `background-position: center` | Kedudukan tengah |
| `top` | `background-position: top` | Kedudukan atas |
| `bottom` | `background-position: bottom` | Kedudukan bawah |
| `left` | `background-position: left` | Kedudukan kiri |
| `right` | `background-position: right` | Kedudukan kanan |
| `top-left` | `background-position: top left` | Atas kiri |
| `top-right` | `background-position: top right` | Atas kanan |
| `bottom-left` | `background-position: bottom left` | Bawah kiri |
| `bottom-right` | `background-position: bottom right` | Bawah kanan |

## Contoh

```html
<div visual="bg-pos:center">Centered background</div>
```

## Pratonton

<div space="p-x:big p-b:medium m-t:medium" visual="border-w:thin border:neutral-100 dark:border:neutral-800 rounded:medium">

### Kedudukan Latar

<div layout="flex col" space="g:medium">
  <p space="m:none" visual="text:neutral-600 dark:text:neutral-400 text-sm"><code>visual="bg-pos:center"</code> - Kedudukkan imej latar</p>
<div layout="flex" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div space="p:small" visual="bg:primary text:white rounded:small">center</div>
  <div space="p:small" visual="bg:primary text:white rounded:small">top</div>
  <div space="p:small" visual="bg:primary text:white rounded:small">bottom</div>
</div>
</div>

<details>
<summary>Lihat Kod</summary>

```html
<div layout="flex" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div space="p:small" visual="bg:primary text:white rounded:small">center</div>
  <div space="p:small" visual="bg:primary text:white rounded:small">top</div>
  <div space="p:small" visual="bg:primary text:white rounded:small">bottom</div>
</div>
```

</details>

</div>

## Nilai Arbitrari

Sokong nilai tersuai menggunakan sintaks kurungan segi empat:

```html
<div visual="background:[custom-value]">Custom</div>
```
