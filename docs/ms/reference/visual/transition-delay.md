# Transition Delay

Tetapkan kelewatan peralihan

## Sintaks
```
visual="delay:[value]"
```

## Nilai

| Nilai | CSS Output | Huraian |
|-------|------------|-------------|
| `instant` | `transition-delay: 75ms` | Kelewatan 75ms |
| `quick` | `transition-delay: 100ms` | Kelewatan 100ms |
| `fast` | `transition-delay: 150ms` | Kelewatan 150ms |
| `normal` | `transition-delay: 200ms` | Kelewatan 200ms |
| `slow` | `transition-delay: 300ms` | Kelewatan 300ms |

## Contoh

```html
<div visual="transition:all delay:slow">Delayed transition</div>
```

## Pratonton

<div space="p-x:big p-b:medium m-t:medium" visual="border-w:thin border:neutral-100 dark:border:neutral-800 rounded:medium">

### Kelewatan Peralihan

<div layout="flex col" space="g:medium">
  <p space="m:none" visual="text:neutral-600 dark:text:neutral-400 text-sm"><code>visual="delay:slow"</code> - Kelewatan sebelum peralihan bermula</p>
<div layout="flex" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <button space="p:small" visual="bg:primary text:white rounded:small transition:all delay:instant hover:scale:110">instant</button>
  <button space="p:small" visual="bg:primary text:white rounded:small transition:all delay:slow hover:scale:110">slow</button>
</div>
</div>

<details>
<summary>Lihat Kod</summary>

```html
<div layout="flex" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <button space="p:small" visual="bg:primary text:white rounded:small transition:all delay:instant hover:scale:110">instant</button>
  <button space="p:small" visual="bg:primary text:white rounded:small transition:all delay:slow hover:scale:110">slow</button>
</div>
```

</details>

</div>

## Nilai Arbitrari

Sokong nilai tersuai menggunakan sintaks kurungan segi empat:

```html
<div visual="transition:[custom-value]">Custom</div>
```
