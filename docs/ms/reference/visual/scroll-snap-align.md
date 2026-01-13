# Scroll Snap Align

Tetapkan penjajaran snap skrol

## Sintaks
```
visual="snap-align:[value]"
```

## Nilai

| Nilai | CSS Output | Huraian |
|-------|------------|-------------|
| `start` | `scroll-snap-align: start` | Snap ke permulaan |
| `end` | `scroll-snap-align: end` | Snap ke hujung |
| `center` | `scroll-snap-align: center` | Snap ke tengah |
| `none` | `scroll-snap-align: none` | Tiada snap |

## Contoh

```html
<div visual="snap-align:start">Snap to start</div>
```

## Pratonton

<div space="p-x:big p-b:medium m-t:medium" visual="border-w:thin border:neutral-100 dark:border:neutral-800 rounded:medium">

### Penjajaran Snap

<div layout="flex col" space="g:medium">
  <p space="m:none" visual="text:neutral-600 dark:text:neutral-400 text-sm"><code>visual="snap-align:start"</code> - Tempat untuk snap dalam bekas</p>
<div layout="flex" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div space="p:small" visual="bg:primary text:white rounded:small">start</div>
  <div space="p:small" visual="bg:primary text:white rounded:small">center</div>
  <div space="p:small" visual="bg:primary text:white rounded:small">end</div>
</div>
</div>

<details>
<summary>Lihat Kod</summary>

```html
<div layout="flex" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div space="p:small" visual="bg:primary text:white rounded:small">start</div>
  <div space="p:small" visual="bg:primary text:white rounded:small">center</div>
  <div space="p:small" visual="bg:primary text:white rounded:small">end</div>
</div>
```

</details>

</div>
