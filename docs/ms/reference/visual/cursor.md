# Kursor

Mengawal gaya kursor tetikus dengan atribut `visual`.

## Sintaks
```
visual="cursor:[nilai]"
```

## Nilai

| Nilai | Output CSS |
|-------|------------|
| `cursor:auto` | `cursor: auto` |
| `cursor:default` | `cursor: default` |
| `cursor:pointer` | `cursor: pointer` |
| `cursor:wait` | `cursor: wait` |
| `cursor:text` | `cursor: text` |
| `cursor:move` | `cursor: move` |
| `cursor:help` | `cursor: help` |
| `cursor:not-allowed` | `cursor: not-allowed` |
| `cursor:none` | `cursor: none` |
| `cursor:grab` | `cursor: grab` |
| `cursor:grabbing` | `cursor: grabbing` |

## Contoh

```html
<button visual="cursor:pointer">Klik saya</button>
<div visual="cursor:move">Boleh seret</div>
<button visual="cursor:not-allowed" disabled>Dilumpuhkan</button>
```

## Keadaan

```html
<div visual="cursor:grab active:cursor:grabbing">
  Seret saya
</div>
```
