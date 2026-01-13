# Border

Tetapkan warna sempadan untuk semua sisi atau sisi tertentu

## Sintaks
```
visual="border:[color]" | visual="border-{t|b|l|r|x|y}:[color]"
```

## Nilai

| Nilai | CSS Output | Huraian |
|-------|------------|-------------|
| `primary` | `border-color: var(--c-primary); border-style: solid` | Sempadan warna utama |
| `gray-300` | `border-color: var(--c-gray-300); border-style: solid` | Sempadan kelabu cerah |
| `danger` | `border-color: var(--c-danger); border-style: solid` | Sempadan bahaya/ralat |

## Contoh

```html
<div visual="border:primary border-w:thin">Primary border</div>
<div visual="border-t:primary border-t-w:regular">Top only</div>
<div visual="border-b:gray-300 border-b-w:thin">Bottom only</div>
<div visual="border-x:primary border-x-w:regular">Left & right</div>
<div visual="border-y:gray-300 border-y-w:thin">Top & bottom</div>
```

## Nilai Arbitrari

Sokong nilai tersuai menggunakan sintaks kurungan segi empat:

```html
<div visual="border:[custom-value]">Custom</div>
```
