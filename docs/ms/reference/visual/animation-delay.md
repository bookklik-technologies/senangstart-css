# Animation Delay

Tetapkan kelewatan animasi

## Sintaks
```
visual="animation-delay:[value]"
```

## Nilai

| Nilai | CSS Output | Huraian |
|-------|------------|-------------|
| `instant` | `animation-delay: 75ms` | Kelewatan 75ms |
| `quick` | `animation-delay: 100ms` | Kelewatan 100ms |
| `fast` | `animation-delay: 150ms` | Kelewatan 150ms |
| `normal` | `animation-delay: 200ms` | Kelewatan 200ms |
| `slow` | `animation-delay: 300ms` | Kelewatan 300ms |

## Contoh

```html
<div visual="animate:bounce animation-delay:slow">Delayed bounce</div>
```

## Pratonton

<div space="p-x:big p-b:medium m-t:medium" visual="border-w:thin border:neutral-100 dark:border:neutral-800 rounded:medium">

### Kelewatan Animasi

<div layout="flex col" space="g:medium">
  <p space="m:none" visual="text:neutral-600 dark:text:neutral-400 text-sm"><code>visual="animation-delay:slow"</code> - Kelewatan sebelum animasi bermula</p>
<div layout="flex" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div space="p:small" visual="bg:primary text:white rounded:small">delay:slow (300ms)</div>
</div>
</div>

<details>
<summary>Lihat Kod</summary>

```html
<div layout="flex" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div space="p:small" visual="bg:primary text:white rounded:small">delay:slow (300ms)</div>
</div>
```

</details>

</div>

## Nilai Arbitrari

Sokong nilai tersuai menggunakan sintaks kurungan segi empat:

```html
<div visual="animation:[custom-value]">Custom</div>
```
