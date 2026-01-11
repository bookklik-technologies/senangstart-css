# Border Width

Tetapkan lebar sempadan untuk semua sisi atau sisi tertentu

## Sintaks
```
visual="border-w:[value]" | visual="border-{t|b|l|r|x|y}-w:[value]"
```

## Nilai

| Nilai | CSS Output | Huraian |
|-------|------------|-------------|
| `none` | `border-width: var(--s-none)` | Tiada sempadan (0px) |
| `thin` | `border-width: var(--s-thin)` | Sempadan nipis (1px) |
| `regular` | `border-width: var(--s-regular)` | Sempadan standard (2px) |
| `thick` | `border-width: var(--s-thick)` | Sempadan tebal (3px) |

## Contoh

```html
<div visual="border:gray-300 border-w:thin">Thin 1px border</div>
<div visual="border:gray-300 border-w:regular">Standard 2px border</div>
<div visual="border:gray-300 border-w:thick">Thick 3px border</div>
<div visual="border-b:primary border-b-w:regular">Bottom border only</div>
<div visual="border-x:primary border-x-w:thin">Horizontal borders</div>
```

## Nilai Arbitrari

Sokong nilai tersuai menggunakan sintaks kurungan segi empat:

```html
<div visual="border:[custom-value]">Custom</div>
```

## Responsif

```html
<!-- Contoh responsif -->
<div visual="mob:... tab:... lap:...">
  Kandungan responsif
</div>
```
