# Backdrop Brightness

Laraskan kecerahan latar belakang

## Sintaks
```
visual="backdrop-brightness:[value]"
```

## Nilai

| Nilai | CSS Output | Huraian |
|-------|------------|-------------|
| `dim` | `backdrop-filter: brightness(0.5)` | 50% kecerahan |
| `dark` | `backdrop-filter: brightness(0.75)` | 75% kecerahan |
| `normal` | `backdrop-filter: brightness(1)` | Kecerahan normal |
| `bright` | `backdrop-filter: brightness(1.25)` | 125% kecerahan |
| `vivid` | `backdrop-filter: brightness(1.5)` | 150% kecerahan |

## Contoh

```html
<div visual="backdrop-brightness:dark">Darkened backdrop</div>
```

## Pratonton

<div space="p-x:big p-b:medium m-t:medium" visual="border-w:thin border:neutral-100 dark:border:neutral-800 rounded:medium">

### Kecerahan Latar Belakang

<div layout="flex col" space="g:medium">
  <p space="m:none" visual="text:neutral-600 dark:text:neutral-400 text-sm"><code>visual="backdrop-brightness:dark"</code> - Redupkan atau cerahkan latar belakang di sebalik tindanan</p>
<div layout="flex" space="g:medium p:medium" visual="bg-image:gradient-to-br from:orange-500 to:red-500 rounded:medium">
  <div space="p:small" visual="backdrop-brightness:dim rounded:small text:white">dim (50%)</div>
  <div space="p:small" visual="backdrop-brightness:normal rounded:small text:white">normal</div>
  <div space="p:small" visual="backdrop-brightness:vivid rounded:small text:white">bright (150%)</div>
</div>
</div>

<details>
<summary>Lihat Kod</summary>

```html
<div layout="flex" space="g:medium p:medium" visual="bg-image:gradient-to-br from:orange-500 to:red-500 rounded:medium">
  <div space="p:small" visual="backdrop-brightness:dim rounded:small text:white">dim (50%)</div>
  <div space="p:small" visual="backdrop-brightness:normal rounded:small text:white">normal</div>
  <div space="p:small" visual="backdrop-brightness:vivid rounded:small text:white">bright (150%)</div>
</div>
```

</details>

</div>

## Nilai Arbitrari

Sokong nilai tersuai menggunakan sintaks kurungan segi empat:

```html
<div visual="backdrop:[custom-value]">Custom</div>
```
