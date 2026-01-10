# Display

Mengawal jenis paparan elemen dengan atribut `layout`.

## Sintaks
```
layout="[display-value]"
```

## Nilai

| Nilai | Output CSS |
|-------|------------|
| `flex` | `display: flex` |
| `inline-flex` | `display: inline-flex` |
| `grid` | `display: grid` |
| `inline-grid` | `display: inline-grid` |
| `block` | `display: block` |
| `inline` | `display: inline-block` |
| `hidden` | `display: none` |

## Contoh

```html
<div layout="flex">Bekas flexbox</div>
<div layout="grid">Bekas grid</div>
<div layout="hidden">Elemen tersembunyi</div>
<span layout="block">Span tahap block</span>
```

## Responsif

```html
<!-- Tersembunyi pada mudah alih, kelihatan sebagai flex pada tablet+ -->
<div layout="hidden tab:flex">
  Hanya kelihatan pada skrin lebih besar
</div>
```
