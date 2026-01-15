# Transition Duration

Tetapkan tempoh peralihan

## Sintaks
```
visual="duration:[value]"
```

## Nilai

| Nilai | CSS Output | Huraian |
|-------|------------|-------------|
| `instant` | `transition-duration: 75ms` | 75ms |
| `quick` | `transition-duration: 100ms` | 100ms |
| `fast` | `transition-duration: 150ms` | 150ms |
| `normal` | `transition-duration: 200ms` | 200ms |
| `slow` | `transition-duration: 300ms` | 300ms |
| `slower` | `transition-duration: 500ms` | 500ms |
| `lazy` | `transition-duration: 700ms` | 700ms |

## Contoh

```html
<div visual="transition:all duration:slow">Slow transition</div>
```

## Pratonton

<div space="p-x:big p-b:medium m-t:medium" visual="border-w:thin border:neutral-100 dark:border:neutral-800 rounded:medium">

### Tempoh

<div layout="flex col" space="g:medium">
  <p space="m:none" visual="text:neutral-600 dark:text:neutral-400 text-sm"><code>visual="duration:slow"</code> - Kawal kelajuan peralihan</p>
<div layout="flex" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <button space="p:small" visual="bg:primary text:white rounded:small transition:all duration:fast hover:scale:110">fast</button>
  <button space="p:small" visual="bg:primary text:white rounded:small transition:all duration:slow hover:scale:110">slow</button>
</div>
</div>

<details>
<summary>Lihat Kod</summary>

```html
<div layout="flex" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <button space="p:small" visual="bg:primary text:white rounded:small transition:all duration:fast hover:scale:110">fast</button>
  <button space="p:small" visual="bg:primary text:white rounded:small transition:all duration:slow hover:scale:110">slow</button>
</div>
```

</details>

</div>

## Nilai Arbitrari

Sokong nilai tersuai menggunakan sintaks kurungan segi empat:

```html
<div visual="transition:[custom-value]">Custom</div>
```
