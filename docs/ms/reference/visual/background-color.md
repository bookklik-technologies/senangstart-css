# Warna Latar Belakang

Mengawal warna latar belakang dengan atribut `visual`.

## Sintaks
```
visual="bg:[warna]"
```

## Nilai

| Property | Output CSS |
|----------|------------|
| `bg:white` | `background-color: var(--c-white)` |
| `bg:primary` | `background-color: var(--c-primary)` |
| `bg:[#hex]` | `background-color: #hex` |

## Contoh

```html
<div visual="bg:white">Latar belakang putih</div>
<div visual="bg:primary">Warna primary</div>
<div visual="bg:[#FF5733]">Hex tersuai</div>
```

## Responsif & Keadaan (States)

```html
<div visual="bg:white hover:bg:light">Lalu kursor untuk tukar</div>
<div visual="bg:light tab:bg:white">Berbeza pada tablet+</div>
```
