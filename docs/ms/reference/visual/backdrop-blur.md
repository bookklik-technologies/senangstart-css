# Backdrop Blur

Kaburkan latar belakang

## Sintaks
```
visual="backdrop-blur:[value]"
```

## Nilai

| Nilai | CSS Output | Huraian |
|-------|------------|-------------|
| `none` | `backdrop-filter: blur(0)` | Tiada kabur |
| `tiny` | `backdrop-filter: blur(2px)` | Kabur kecil |
| `small` | `backdrop-filter: blur(4px)` | Kabur kecil |
| `medium` | `backdrop-filter: blur(8px)` | Kabur sederhana |
| `big` | `backdrop-filter: blur(12px)` | Kabur besar |
| `giant` | `backdrop-filter: blur(24px)` | Kabur gergasi |
| `vast` | `backdrop-filter: blur(48px)` | Kabur luas |

## Contoh

```html
<div visual="backdrop-blur:medium bg:[rgba(255,255,255,0.5)]">Frosted glass</div>
```

## Pratonton

<div space="p-x:big p-b:medium m-t:medium" visual="border-w:thin border:neutral-100 dark:border:neutral-800 rounded:medium">

### Kabur Latar Belakang

<div layout="flex col" space="g:medium">
  <p space="m:none" visual="text:neutral-600 dark:text:neutral-400 text-sm"><code>visual="backdrop-blur:medium"</code> - Mencipta kesan kaca beku pada kandungan di belakang elemen</p>
<div layout="flex:center" space="p:large" visual="bg-image:gradient-to-br from:blue-500 to:violet-500 rounded:medium">
  <div space="p:medium" visual="backdrop-blur:medium bg:[rgba(255,255,255,0.2)] rounded:small">
    <span visual="text:white">Frosted Glass</span>
  </div>
</div>
</div>

<details>
<summary>Lihat Kod</summary>

```html
<div layout="flex:center" space="p:large" visual="bg-image:gradient-to-br from:blue-500 to:violet-500 rounded:medium">
  <div space="p:medium" visual="backdrop-blur:medium bg:[rgba(255,255,255,0.2)] rounded:small">
    <span visual="text:white">Frosted Glass</span>
  </div>
</div>
```

</details>

</div>

## Nilai Arbitrari

Sokong nilai tersuai menggunakan sintaks kurungan segi empat:

```html
<div visual="backdrop:[custom-value]">Custom</div>
```
