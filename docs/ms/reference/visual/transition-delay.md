# Transition Delay

Mengawal kelewatan sebelum transisi bermula menggunakan perkataan semula jadi.

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
<div visual="transition delay:instant">...</div>  <!-- Kelewatan 75ms -->
<div visual="transition delay:quick">...</div>    <!-- Kelewatan 100ms -->
<div visual="transition delay:fast">...</div>     <!-- Kelewatan 150ms -->
<div visual="transition delay:normal">...</div>   <!-- Kelewatan 200ms -->
<div visual="transition delay:slow">...</div>     <!-- Kelewatan 300ms -->
<div visual="transition delay:slower">...</div>   <!-- Kelewatan 500ms -->
<div visual="transition delay:lazy">...</div>     <!-- Kelewatan 700ms -->
```

## Kelewatan Sewenang-Wenang

```html
<div visual="transition delay:[1s]">...</div>
```
