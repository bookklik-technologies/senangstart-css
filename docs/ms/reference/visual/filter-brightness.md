# Filter Brightness

Laraskan kecerahan

## Sintaks
```
visual="brightness:[value]"
```

## Nilai

| Nilai | CSS Output | Huraian |
|-------|------------|-------------|
| `dim` | `filter: brightness(0.5)` | 50% kecerahan |
| `dark` | `filter: brightness(0.75)` | 75% kecerahan |
| `normal` | `filter: brightness(1)` | Kecerahan normal |
| `bright` | `filter: brightness(1.25)` | 125% kecerahan |
| `vivid` | `filter: brightness(1.5)` | 150% kecerahan |

## Contoh

```html
<img visual="brightness:bright">Brighter image</img>
```

## Pratonton

<div space="p-x:big p-b:medium m-t:medium" visual="border-w:thin border:neutral-100 dark:border:neutral-800 rounded:medium">

### Penapis Kecerahan

<div layout="flex col" space="g:medium">
  <p space="m:none" visual="text:neutral-600 dark:text:neutral-400 text-sm"><code>visual="brightness:bright"</code> - Laraskan kecerahan elemen</p>
<div layout="flex" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div space="p:small" visual="bg:primary text:white rounded:small brightness:dim">dim</div>
  <div space="p:small" visual="bg:primary text:white rounded:small">normal</div>
  <div space="p:small" visual="bg:primary text:white rounded:small brightness:vivid">vivid</div>
</div>
</div>

<details>
<summary>Lihat Kod</summary>

```html
<div layout="flex" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div space="p:small" visual="bg:primary text:white rounded:small brightness:dim">dim</div>
  <div space="p:small" visual="bg:primary text:white rounded:small">normal</div>
  <div space="p:small" visual="bg:primary text:white rounded:small brightness:vivid">vivid</div>
</div>
```

</details>

</div>

## Nilai Arbitrari

Sokong nilai tersuai menggunakan sintaks kurungan segi empat:

```html
<div visual="filter:[custom-value]">Custom</div>
```
