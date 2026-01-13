# Filter Blur

Terapkan penapis kabur

## Sintaks
```
visual="blur:[value]"
```

## Nilai

| Nilai | CSS Output | Huraian |
|-------|------------|-------------|
| `none` | `filter: blur(0)` | Tiada kabur |
| `tiny` | `filter: blur(2px)` | Kabur kecil |
| `small` | `filter: blur(4px)` | Kabur kecil |
| `medium` | `filter: blur(8px)` | Kabur sederhana |
| `big` | `filter: blur(12px)` | Kabur besar |
| `giant` | `filter: blur(24px)` | Kabur gergasi |
| `vast` | `filter: blur(48px)` | Kabur luas |

## Contoh

```html
<div visual="blur:medium">Blurred element</div>
```

## Pratonton

<div space="p-x:big p-b:medium m-t:medium" visual="border-w:thin border:neutral-100 dark:border:neutral-800 rounded:medium">

### Kabur

<div layout="flex col" space="g:medium">
  <p space="m:none" visual="text:neutral-600 dark:text:neutral-400 text-sm"><code>visual="blur:medium"</code> - Terapkan penapis kabur gaussian pada elemen</p>
<div layout="flex" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div space="p:small" visual="bg:primary text:white rounded:small">none</div>
  <div space="p:small" visual="bg:primary text:white rounded:small" style="filter: blur(2px);">small</div>
  <div space="p:small" visual="bg:primary text:white rounded:small" style="filter: blur(4px);">medium</div>
</div>
</div>

<details>
<summary>Lihat Kod</summary>

```html
<div layout="flex" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div space="p:small" visual="bg:primary text:white rounded:small">none</div>
  <div space="p:small" visual="bg:primary text:white rounded:small" style="filter: blur(2px);">small</div>
  <div space="p:small" visual="bg:primary text:white rounded:small" style="filter: blur(4px);">medium</div>
</div>
```

</details>

</div>

## Nilai Arbitrari

Sokong nilai tersuai menggunakan sintaks kurungan segi empat:

```html
<div visual="filter:[custom-value]">Custom</div>
```
