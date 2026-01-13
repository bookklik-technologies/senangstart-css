# Transform Scale

Skala elemen

## Sintaks
```
visual="scale:[value]"
```

## Nilai

| Nilai | CSS Output | Huraian |
|-------|------------|-------------|
| `0` | `transform: scale(0)` | Skala ke 0 |
| `50` | `transform: scale(0.5)` | Skala ke 50% |
| `75` | `transform: scale(0.75)` | Skala ke 75% |
| `100` | `transform: scale(1)` | Skala normal |
| `110` | `transform: scale(1.1)` | Skala ke 110% |
| `125` | `transform: scale(1.25)` | Skala ke 125% |
| `150` | `transform: scale(1.5)` | Skala ke 150% |

## Contoh

```html
<div visual="transition:transform hover:scale:110">Hover to grow</div>
```

## Pratonton

<div space="p-x:big p-b:medium m-t:medium" visual="border-w:thin border:neutral-100 dark:border:neutral-800 rounded:medium">

### Transformasi Skala

<div layout="flex col" space="g:medium">
  <p space="m:none" visual="text:neutral-600 dark:text:neutral-400 text-sm"><code>visual="scale:110"</code> - Skala elemen ke atas atau ke bawah</p>
<div layout="flex" space="g:big p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div space="p:small" visual="bg:primary text:white rounded:small" style="transform: scale(0.75);">75%</div>
  <div space="p:small" visual="bg:primary text:white rounded:small">100%</div>
  <div space="p:small" visual="bg:primary text:white rounded:small" style="transform: scale(1.25);">125%</div>
</div>
</div>

<details>
<summary>Lihat Kod</summary>

```html
<div layout="flex" space="g:big p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div space="p:small" visual="bg:primary text:white rounded:small" style="transform: scale(0.75);">75%</div>
  <div space="p:small" visual="bg:primary text:white rounded:small">100%</div>
  <div space="p:small" visual="bg:primary text:white rounded:small" style="transform: scale(1.25);">125%</div>
</div>
```

</details>

</div>

## Nilai Arbitrari

Sokong nilai tersuai menggunakan sintaks kurungan segi empat:

```html
<div visual="transform:[custom-value]">Custom</div>
```
