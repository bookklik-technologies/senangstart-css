# Animation Duration

Tetapkan tempoh animasi

## Sintaks
```
visual="animation-duration:[value]"
```

## Nilai

| Nilai | CSS Output | Huraian |
|-------|------------|-------------|
| `instant` | `animation-duration: 75ms` | 75ms |
| `quick` | `animation-duration: 100ms` | 100ms |
| `fast` | `animation-duration: 150ms` | 150ms |
| `normal` | `animation-duration: 200ms` | 200ms |
| `slow` | `animation-duration: 300ms` | 300ms |
| `slower` | `animation-duration: 500ms` | 500ms |
| `lazy` | `animation-duration: 700ms` | 700ms |

## Contoh

```html
<div visual="animate:spin animation-duration:slow">Slow spin</div>
```

## Pratonton

<div space="p-x:big p-b:medium m-t:medium" visual="border-w:thin border:neutral-100 dark:border:neutral-800 rounded:medium">

### Tempoh Animasi

<div layout="flex col" space="g:medium">
  <p space="m:none" visual="text:neutral-600 dark:text:neutral-400 text-sm"><code>visual="animation-duration:slow"</code> - Kawal kelajuan animasi</p>
<div layout="flex" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div space="p:small" visual="bg:primary text:white rounded:small">fast: 150ms</div>
  <div space="p:small" visual="bg:primary text:white rounded:small">slow: 300ms</div>
</div>
</div>

<details>
<summary>Lihat Kod</summary>

```html
<div layout="flex" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div space="p:small" visual="bg:primary text:white rounded:small">fast: 150ms</div>
  <div space="p:small" visual="bg:primary text:white rounded:small">slow: 300ms</div>
</div>
```

</details>

</div>

## Nilai Arbitrari

Sokong nilai tersuai menggunakan sintaks kurungan segi empat:

```html
<div visual="animation:[custom-value]">Custom</div>
```
