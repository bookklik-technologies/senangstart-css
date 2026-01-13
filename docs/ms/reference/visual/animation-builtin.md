# Animation Builtin

Terapkan animasi terbina dalam

## Sintaks
```
visual="animate:[value]"
```

## Nilai

| Nilai | CSS Output | Huraian |
|-------|------------|-------------|
| `none` | `animation: none` | Tiada animasi |
| `spin` | `animation: spin 1s linear infinite` | Berpusing |
| `ping` | `animation: ping 1s cubic-bezier(0, 0, 0.2, 1) infinite` | Kesan ping |
| `pulse` | `animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite` | Berdenyut |
| `bounce` | `animation: bounce 1s infinite` | Melantun |

## Contoh

```html
<div visual="animate:spin">Loading...</div>
```

## Nilai Arbitrari

Sokong nilai tersuai menggunakan sintaks kurungan segi empat:

```html
<div visual="animation:[custom-value]">Custom</div>
```
