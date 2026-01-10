# Kelewatan Peralihan

Kawal kelewatan sebelum peralihan bermula.

## Sintaks
```
visual="delay:instant | delay:quick | delay:fast | delay:normal | delay:slow | delay:slower | delay:lazy"
```

## Nilai

| Nilai | Masa |
|-------|------|
| `delay:instant` | 75ms |
| `delay:quick` | 100ms |
| `delay:fast` | 150ms |
| `delay:normal` | 200ms |
| `delay:slow` | 300ms |
| `delay:slower` | 500ms |
| `delay:lazy` | 700ms |

## Contoh

```html
<div visual="transition delay:quick">...</div>   <!-- 100ms kelewatan -->
<div visual="transition delay:normal">...</div>  <!-- 200ms kelewatan -->
<div visual="transition delay:slow">...</div>    <!-- 300ms kelewatan -->
```

## Nilai Arbitrari

```html
<div visual="transition delay:[1s]">...</div>
```
