# Filter Contrast

Laraskan kontras

## Sintaks
```
visual="contrast:[value]"
```

## Nilai

| Nilai | CSS Output | Huraian |
|-------|------------|-------------|
| `low` | `filter: contrast(0.5)` | Kontras rendah |
| `reduced` | `filter: contrast(0.75)` | Kontras dikurangkan |
| `normal` | `filter: contrast(1)` | Kontras normal |
| `high` | `filter: contrast(1.25)` | Kontras tinggi |
| `max` | `filter: contrast(1.5)` | Kontras maksimum |

## Contoh

```html
<img visual="contrast:high">High contrast</img>
```

## Pratonton

<div space="p-x:big p-b:medium m-t:medium" visual="border-w:thin border:neutral-100 dark:border:neutral-800 rounded:medium">

### Penapis Kontras

<div layout="flex col" space="g:medium">
  <p space="m:none" visual="text:neutral-600 dark:text:neutral-400 text-sm"><code>visual="contrast:high"</code> - Laraskan kontras elemen</p>
<div layout="flex" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div space="p:small" visual="bg:primary text:white rounded:small" style="filter: contrast(0.5);">low</div>
  <div space="p:small" visual="bg:primary text:white rounded:small">normal</div>
  <div space="p:small" visual="bg:primary text:white rounded:small" style="filter: contrast(1.5);">high</div>
</div>
</div>

<details>
<summary>Lihat Kod</summary>

```html
<div layout="flex" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div space="p:small" visual="bg:primary text:white rounded:small" style="filter: contrast(0.5);">low</div>
  <div space="p:small" visual="bg:primary text:white rounded:small">normal</div>
  <div space="p:small" visual="bg:primary text:white rounded:small" style="filter: contrast(1.5);">high</div>
</div>
```

</details>

</div>

## Nilai Arbitrari

Sokong nilai tersuai menggunakan sintaks kurungan segi empat:

```html
<div visual="filter:[custom-value]">Custom</div>
```
