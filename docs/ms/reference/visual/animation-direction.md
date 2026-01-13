# Animation Direction

Tetapkan arah animasi

## Sintaks
```
visual="animation-direction:[value]"
```

## Nilai

| Nilai | CSS Output | Huraian |
|-------|------------|-------------|
| `normal` | `animation-direction: normal` | Arah normal |
| `reverse` | `animation-direction: reverse` | Arah terbalik |
| `alternate` | `animation-direction: alternate` | Arah berselang |
| `alternate-reverse` | `animation-direction: alternate-reverse` | Berselang terbalik |

## Contoh

```html
<div visual="animate:bounce animation-direction:alternate">Alternating</div>
```

## Pratonton

<div space="p-x:big p-b:medium m-t:medium" visual="border-w:thin border:neutral-100 dark:border:neutral-800 rounded:medium">

### Arah Animasi

<div layout="flex col" space="g:medium">
  <p space="m:none" visual="text:neutral-600 dark:text:neutral-400 text-sm"><code>visual="animation-direction:alternate"</code> - Kawal arah main balik</p>
<div layout="flex" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div space="p:small" visual="bg:primary text:white rounded:small">normal</div>
  <div space="p:small" visual="bg:primary text:white rounded:small">reverse</div>
  <div space="p:small" visual="bg:primary text:white rounded:small">alternate</div>
</div>
</div>

<details>
<summary>Lihat Kod</summary>

```html
<div layout="flex" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div space="p:small" visual="bg:primary text:white rounded:small">normal</div>
  <div space="p:small" visual="bg:primary text:white rounded:small">reverse</div>
  <div space="p:small" visual="bg:primary text:white rounded:small">alternate</div>
</div>
```

</details>

</div>
