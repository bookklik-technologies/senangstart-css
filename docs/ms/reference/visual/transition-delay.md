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

## Nilai Arbitrari

Sokong nilai tersuai menggunakan sintaks kurungan segi empat:

```html
<div visual="transition:[custom-value]">Custom</div>
```

## Responsif

```html
<!-- Contoh responsif -->
<div visual="mob:... tab:... lap:...">
  Kandungan responsif
</div>
```
