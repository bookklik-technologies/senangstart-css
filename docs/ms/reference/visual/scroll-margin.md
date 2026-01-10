# Scroll Margin

Tetapkan margin skrol untuk snap

## Sintaks
```
visual="scroll-m:[value]"
```

## Nilai

| Nilai | CSS Output | Huraian |
|-------|------------|-------------|
| `scroll-m` | `scroll-margin: {value}` | Semua sisi |
| `scroll-m-t` | `scroll-margin-top: {value}` | Margin atas |
| `scroll-m-r` | `scroll-margin-right: {value}` | Margin kanan |
| `scroll-m-b` | `scroll-margin-bottom: {value}` | Margin bawah |
| `scroll-m-l` | `scroll-margin-left: {value}` | Margin kiri |

## Contoh

```html
<div visual="scroll-m:medium">Scroll margin</div>
```

## Nilai Arbitrari

Sokong nilai tersuai menggunakan sintaks kurungan segi empat:

```html
<div visual="scroll:[custom-value]">Custom</div>
```

## Responsif

```html
<!-- Contoh responsif -->
<div visual="mob:... tab:... lap:...">
  Kandungan responsif
</div>
```
