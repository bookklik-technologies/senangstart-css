# Letter Spacing

Tetapkan jarak huruf

## Sintaks
```
visual="tracking:[value]"
```

## Nilai

| Nilai | CSS Output | Huraian |
|-------|------------|-------------|
| `tighter` | `letter-spacing: -0.05em` | Jarak lebih ketat |
| `tight` | `letter-spacing: -0.025em` | Jarak ketat |
| `normal` | `letter-spacing: 0` | Jarak normal |
| `wide` | `letter-spacing: 0.025em` | Jarak luas |
| `wider` | `letter-spacing: 0.05em` | Jarak lebih luas |
| `widest` | `letter-spacing: 0.1em` | Jarak paling luas |

## Contoh

```html
<div visual="tracking:wide">Wide tracking</div>
```

## Nilai Arbitrari

Sokong nilai tersuai menggunakan sintaks kurungan segi empat:

```html
<div visual="letter:[custom-value]">Custom</div>
```
