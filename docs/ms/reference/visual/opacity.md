# Opacity

Tetapkan kelegapan elemen (0-100)

## Sintaks
```
visual="opacity:[value]"
```

## Nilai

| Nilai | CSS Output | Huraian |
|-------|------------|-------------|
| `0` | `opacity: 0` | Tidak kelihatan |
| `25` | `opacity: 0.25` | 25% kelihatan |
| `50` | `opacity: 0.5` | 50% kelihatan |
| `75` | `opacity: 0.75` | 75% kelihatan |
| `100` | `opacity: 1` | Sepenuhnya kelihatan |

## Contoh

```html
<div visual="opacity:50">Half visible</div>
```

## Pratonton

<div space="p-x:big p-b:medium m-t:medium" visual="border-w:thin border:neutral-100 dark:border:neutral-800 rounded:medium">

### Kelegapan

<div layout="flex col" space="g:medium">
  <p space="m:none" visual="text:neutral-600 dark:text:neutral-400 text-sm"><code>visual="opacity:50"</code> - Kawal ketelusan elemen dari tidak kelihatan hingga sepenuhnya kelihatan</p>
<div layout="flex" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div space="p:small" visual="bg:primary text:white rounded:small opacity:25">25%</div>
  <div space="p:small" visual="bg:primary text:white rounded:small opacity:50">50%</div>
  <div space="p:small" visual="bg:primary text:white rounded:small opacity:75">75%</div>
  <div space="p:small" visual="bg:primary text:white rounded:small opacity:100">100%</div>
</div>
</div>

<details>
<summary>Lihat Kod</summary>

```html
<div layout="flex" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div space="p:small" visual="bg:primary text:white rounded:small opacity:25">25%</div>
  <div space="p:small" visual="bg:primary text:white rounded:small opacity:50">50%</div>
  <div space="p:small" visual="bg:primary text:white rounded:small opacity:75">75%</div>
  <div space="p:small" visual="bg:primary text:white rounded:small opacity:100">100%</div>
</div>
```

</details>

</div>
