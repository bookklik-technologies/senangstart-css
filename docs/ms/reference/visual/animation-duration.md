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

## Nilai Arbitrari

Sokong nilai tersuai menggunakan sintaks kurungan segi empat:

```html
<div visual="animation:[custom-value]">Custom</div>
```

## Responsif

```html
<!-- Contoh responsif -->
<div visual="mob:... tab:... lap:...">
  Kandungan responsif
</div>
```
