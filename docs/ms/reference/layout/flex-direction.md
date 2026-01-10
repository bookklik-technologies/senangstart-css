# Flex Direction

Tetapkan arah item flex

## Sintaks
```
layout="[direction]"
```

## Nilai

| Nilai | CSS Output | Huraian |
|-------|------------|-------------|
| `row` | `flex-direction: row` | Mendatar (lalai) |
| `col` | `flex-direction: column` | Menegak |
| `row-reverse` | `flex-direction: row-reverse` | Mendatar terbalik |
| `col-reverse` | `flex-direction: column-reverse` | Menegak terbalik |

## Contoh

```html
<div layout="flex row">Row direction</div>
<div layout="flex col">Column direction</div>
```

## Responsif

```html
<!-- Contoh responsif -->
<div layout="mob:... tab:... lap:...">
  Kandungan responsif
</div>
```
