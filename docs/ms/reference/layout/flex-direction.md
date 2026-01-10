# Flex Direction

Mengawal arah item flex dengan atribut `layout`.

## Sintaks
```
layout="[direction]"
```

## Nilai

| Nilai | Output CSS |
|-------|------------|
| `row` | `flex-direction: row` |
| `col` | `flex-direction: column` |
| `row-reverse` | `flex-direction: row-reverse` |
| `col-reverse` | `flex-direction: column-reverse` |

## Contoh

```html
<div layout="flex row">Mendatar (lalai)</div>
<div layout="flex col">Susunan menegak</div>
<div layout="flex row-reverse">Kanan ke kiri</div>
<div layout="flex col-reverse">Bawah ke atas</div>
```

## Responsif

```html
<!-- Susun pada mudah alih, baris pada tablet+ -->
<div layout="flex col tab:row">
  <div>Item 1</div>
  <div>Item 2</div>
</div>
```
