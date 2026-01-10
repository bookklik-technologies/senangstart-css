# Radius Sempadan

Mengawal radius sempadan dengan atribut `visual`.

## Nilai

| Property | Output CSS |
|----------|------------|
| `rounded:none` | `border-radius: 0` |
| `rounded:small` | `border-radius: 4px` |
| `rounded:medium` | `border-radius: 8px` |
| `rounded:big` | `border-radius: 16px` |
| `rounded:round` | `border-radius: 9999px` |

## Contoh

```html
<div visual="rounded:small">Pembulatan halus</div>
<div visual="rounded:big">Pembulatan jelas</div>
<button visual="rounded:round">Butang pill</button>
```
