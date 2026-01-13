# Scroll Padding

Tetapkan padding skrol untuk snap

## Sintaks
```
visual="scroll-p:[value]"
```

## Nilai

| Nilai | CSS Output | Huraian |
|-------|------------|-------------|
| `scroll-p` | `scroll-padding: {value}` | Semua sisi |
| `scroll-p-t` | `scroll-padding-top: {value}` | Padding atas |
| `scroll-p-r` | `scroll-padding-right: {value}` | Padding kanan |
| `scroll-p-b` | `scroll-padding-bottom: {value}` | Padding bawah |
| `scroll-p-l` | `scroll-padding-left: {value}` | Padding kiri |

## Contoh

```html
<div visual="scroll-p:big">Scroll padding</div>
```

## Nilai Arbitrari

Sokong nilai tersuai menggunakan sintaks kurungan segi empat:

```html
<div visual="scroll:[custom-value]">Custom</div>
```
