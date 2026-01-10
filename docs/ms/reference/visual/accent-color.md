# Warna Aksen

Mengawal warna aksen kawalan borang dengan atribut `visual`.

## Sintaks
```
visual="accent:[warna]"
```

## Nilai

| Nilai | Output CSS |
|-------|------------|
| `accent:primary` | `accent-color: var(--c-primary)` |
| `accent:blue-500` | `accent-color: var(--c-blue-500)` |
| `accent:[#ff0000]` | `accent-color: #ff0000` |

## Contoh

```html
<input type="checkbox" visual="accent:primary" />
<input type="range" visual="accent:blue-500" />
<progress visual="accent:[#22c55e]" value="70" max="100"></progress>
```

## Kegunaan

Sifat `accent-color` berguna untuk mengayakan:
- Kotak semak
- Butang radio
- Peluncur julat
- Bar kemajuan
