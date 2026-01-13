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

## Nilai Arbitrari

Sokong nilai tersuai menggunakan sintaks kurungan segi empat:

```html
<div visual="transition:[custom-value]">Custom</div>
```
