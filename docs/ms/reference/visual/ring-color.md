# Ring Color

Tetapkan warna cincin

## Sintaks
```
visual="ring-color:[color]"
```

## Nilai

| Nilai | CSS Output | Huraian |
|-------|------------|-------------|
| `primary` | `--ring-color: var(--c-primary)` | Warna cincin utama |
| `blue-500` | `--ring-color: var(--c-blue-500)` | Warna cincin biru |

## Contoh

```html
<button visual="ring:small ring-color:primary">Colored ring</button>
```

## Nilai Arbitrari

Sokong nilai tersuai menggunakan sintaks kurungan segi empat:

```html
<div visual="ring:[custom-value]">Custom</div>
```
