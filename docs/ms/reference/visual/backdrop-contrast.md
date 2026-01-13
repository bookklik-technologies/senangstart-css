# Backdrop Contrast

Laraskan kontras latar belakang

## Sintaks
```
visual="backdrop-contrast:[value]"
```

## Nilai

| Nilai | CSS Output | Huraian |
|-------|------------|-------------|
| `low` | `backdrop-filter: contrast(0.5)` | Kontras rendah |
| `reduced` | `backdrop-filter: contrast(0.75)` | Kontras dikurangkan |
| `normal` | `backdrop-filter: contrast(1)` | Kontras normal |
| `high` | `backdrop-filter: contrast(1.25)` | Kontras tinggi |
| `max` | `backdrop-filter: contrast(1.5)` | Kontras maksimum |

## Contoh

```html
<div visual="backdrop-contrast:high">High contrast backdrop</div>
```

## Pratonton

<div space="p-x:big p-b:medium m-t:medium" visual="border-w:thin border:neutral-100 dark:border:neutral-800 rounded:medium">

### Kontras Latar Belakang

<div layout="flex col" space="g:medium">
  <p space="m:none" visual="text:neutral-600 dark:text:neutral-400 text-sm"><code>visual="backdrop-contrast:high"</code> - Laraskan kontras di belakang elemen</p>
<div layout="flex" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div space="p:small" visual="bg:primary text:white rounded:small">low</div>
  <div space="p:small" visual="bg:primary text:white rounded:small">normal</div>
  <div space="p:small" visual="bg:primary text:white rounded:small">high</div>
</div>
</div>

<details>
<summary>Lihat Kod</summary>

```html
<div layout="flex" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div space="p:small" visual="bg:primary text:white rounded:small">low</div>
  <div space="p:small" visual="bg:primary text:white rounded:small">normal</div>
  <div space="p:small" visual="bg:primary text:white rounded:small">high</div>
</div>
```

</details>

</div>

## Nilai Arbitrari

Sokong nilai tersuai menggunakan sintaks kurungan segi empat:

```html
<div visual="backdrop:[custom-value]">Custom</div>
```
