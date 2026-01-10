# Justify Content

Mengawal penjajaran horizontal item flex/grid dengan atribut `layout`.

## Sintaks
```
layout="justify:[value]"
```

## Nilai

| Nilai | Output CSS |
|-------|------------|
| `justify:start` | `justify-content: flex-start` |
| `justify:end` | `justify-content: flex-end` |
| `justify:center` | `justify-content: center` |
| `justify:between` | `justify-content: space-between` |
| `justify:around` | `justify-content: space-around` |
| `justify:evenly` | `justify-content: space-evenly` |
| `justify:stretch` | `justify-content: stretch` |

## Contoh

```html
<div layout="flex justify:start">Diselaraskan ke permulaan</div>
<div layout="flex justify:center">Ditengahkan</div>
<div layout="flex justify:end">Diselaraskan ke penghujung</div>
<div layout="flex justify:between">Ruang antara item</div>
<div layout="flex justify:around">Ruang di sekeliling item</div>
<div layout="flex justify:evenly">Diagihkan sama rata</div>
```

## Responsif

```html
<div layout="flex justify:center tab:justify:between">
  Tengah pada mudah alih, dijarakkan pada tablet+
</div>
```
