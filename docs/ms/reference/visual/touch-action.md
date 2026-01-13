# Touch Action

Kawal interaksi sentuh

## Sintaks
```
visual="touch:[value]"
```

## Nilai

| Nilai | CSS Output | Huraian |
|-------|------------|-------------|
| `auto` | `touch-action: auto` | Sentuh lalai |
| `none` | `touch-action: none` | Lumpuhkan sentuh |
| `pan-x` | `touch-action: pan-x` | Pan mendatar |
| `pan-y` | `touch-action: pan-y` | Pan menegak |
| `pan-left` | `touch-action: pan-left` | Pan kiri |
| `pan-right` | `touch-action: pan-right` | Pan kanan |
| `pinch-zoom` | `touch-action: pinch-zoom` | Cubit untuk zum |
| `manipulation` | `touch-action: manipulation` | Pan dan cubit sahaja |

## Contoh

```html
<div visual="touch:manipulation">Touch optimized</div>
```

## Pratonton

<div space="p-x:big p-b:medium m-t:medium" visual="border-w:thin border:neutral-100 dark:border:neutral-800 rounded:medium">

### Tindakan Sentuh

<div layout="flex col" space="g:medium">
  <p space="m:none" visual="text:neutral-600 dark:text:neutral-400 text-sm"><code>visual="touch:manipulation"</code> - Kawal gerak isyarat sentuh</p>
<div layout="flex" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div space="p:small" visual="bg:primary text:white rounded:small">pan-x</div>
  <div space="p:small" visual="bg:primary text:white rounded:small">pan-y</div>
  <div space="p:small" visual="bg:primary text:white rounded:small">manipulation</div>
</div>
</div>

<details>
<summary>Lihat Kod</summary>

```html
<div layout="flex" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div space="p:small" visual="bg:primary text:white rounded:small">pan-x</div>
  <div space="p:small" visual="bg:primary text:white rounded:small">pan-y</div>
  <div space="p:small" visual="bg:primary text:white rounded:small">manipulation</div>
</div>
```

</details>

</div>
