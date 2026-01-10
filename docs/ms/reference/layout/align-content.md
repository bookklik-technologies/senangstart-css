# Align Content

Mengawal penjajaran menegak kandungan flex berbilang baris dengan atribut `layout`.

## Sintaks
```
layout="content:[value]"
```

## Nilai

| Nilai | Output CSS |
|-------|------------|
| `content:start` | `align-content: flex-start` |
| `content:end` | `align-content: flex-end` |
| `content:center` | `align-content: center` |
| `content:between` | `align-content: space-between` |
| `content:around` | `align-content: space-around` |
| `content:evenly` | `align-content: space-evenly` |
| `content:stretch` | `align-content: stretch` |

## Contoh

```html
<div layout="flex wrap content:center" space="h:[300px]">
  Kandungan berbilang baris ditengahkan secara menegak
</div>

<div layout="flex wrap content:between" space="h:[300px]">
  Baris dijarakkan antara atas dan bawah
</div>
```

## Nota

`align-content` hanya digunakan apabila terdapat berbilang baris (memerlukan `wrap`).
