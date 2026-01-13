# Object Position

Letakkan kandungan elemen diganti dalam bekas

## Sintaks
```
layout="object-pos:[value]"
```

## Nilai

| Nilai | CSS Output | Huraian |
|-------|------------|-------------|
| `center` | `object-position: center` | Kedudukan tengah |
| `top` | `object-position: top` | Kedudukan atas |
| `bottom` | `object-position: bottom` | Kedudukan bawah |
| `left` | `object-position: left` | Kedudukan kiri |
| `right` | `object-position: right` | Kedudukan kanan |
| `top-left` | `object-position: top left` | Atas kiri |
| `top-right` | `object-position: top right` | Atas kanan |
| `bottom-left` | `object-position: bottom left` | Bawah kiri |
| `bottom-right` | `object-position: bottom right` | Bawah kanan |

## Contoh

```html
<img layout="object:cover object-pos:top">Top positioned</img>
```

## Pratonton

<div space="p-x:big p-b:medium m-t:medium" visual="border-w:thin border:neutral-100 dark:border:neutral-800 rounded:medium">

### Kedudukan Objek

<div layout="flex col" space="g:medium">
  <p space="m:none" visual="text:neutral-600 dark:text:neutral-400 text-sm"><code>layout="object-pos:center"</code> - Kawal di mana media diletakkan dalam bekas</p>
<div layout="grid grid-cols:3" space="g:small p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div style="height: 50px;" visual="bg:neutral-300 rounded:small" layout="flex items:start justify:center"><span space="p:tiny" visual="bg:primary text:white rounded:small">top</span></div>
  <div style="height: 50px;" visual="bg:neutral-300 rounded:small" layout="flex center"><span space="p:tiny" visual="bg:primary text:white rounded:small">center</span></div>
  <div style="height: 50px;" visual="bg:neutral-300 rounded:small" layout="flex items:end justify:center"><span space="p:tiny" visual="bg:primary text:white rounded:small">bottom</span></div>
</div>
</div>

<details>
<summary>Lihat Kod</summary>

```html
<div layout="grid grid-cols:3" space="g:small p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div style="height: 50px;" visual="bg:neutral-300 rounded:small" layout="flex items:start justify:center"><span space="p:tiny" visual="bg:primary text:white rounded:small">top</span></div>
  <div style="height: 50px;" visual="bg:neutral-300 rounded:small" layout="flex center"><span space="p:tiny" visual="bg:primary text:white rounded:small">center</span></div>
  <div style="height: 50px;" visual="bg:neutral-300 rounded:small" layout="flex items:end justify:center"><span space="p:tiny" visual="bg:primary text:white rounded:small">bottom</span></div>
</div>
```

</details>

</div>

## Nilai Arbitrari

Sokong nilai tersuai menggunakan sintaks kurungan segi empat:

```html
<div layout="object:[custom-value]">Custom</div>
```
