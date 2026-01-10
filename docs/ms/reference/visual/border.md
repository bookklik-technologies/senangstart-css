# Sempadan

Mengawal sifat-sifat sempadan dengan atribut `visual`.

## Warna Sempadan

### Sintaks
```
visual="border:[warna]"
```

### Nilai

| Property | Output CSS |
|----------|------------|
| `border:grey` | `border-color: var(--c-grey); border-style: solid` |
| `border:primary` | `border-color: var(--c-primary); border-style: solid` |
| `border:[#hex]` | `border-color: #hex; border-style: solid` |

### Contoh

```html
<div visual="border:grey">Sempadan kelabu</div>
<div visual="border:primary">Sempadan primary</div>
```

---

## Lebar Sempadan

### Sintaks
```
visual="border-w:[nilai]"
```

### Nilai

| Property | Output CSS |
|----------|------------|
| `border-w:tiny` | `border-width: var(--s-tiny); border-style: solid` |
| `border-w:small` | `border-width: var(--s-small); border-style: solid` |
| `border-w:[1px]` | `border-width: 1px; border-style: solid` |
| `border-w:[2px]` | `border-width: 2px; border-style: solid` |

### Contoh

```html
<div visual="border:grey border-w:small">Sempadan nipis</div>
<div visual="border:primary border-w:[3px]">Sempadan tebal</div>
```

---

## Gaya Sempadan

### Sintaks
```
visual="border-style:[nilai]"
```

### Nilai

| Property | Output CSS |
|----------|------------|
| `border-style:solid` | `border-style: solid` |
| `border-style:dashed` | `border-style: dashed` |
| `border-style:dotted` | `border-style: dotted` |
| `border-style:double` | `border-style: double` |
| `border-style:groove` | `border-style: groove` |
| `border-style:ridge` | `border-style: ridge` |
| `border-style:inset` | `border-style: inset` |
| `border-style:outset` | `border-style: outset` |
| `border-style:none` | `border-style: none` |

### Contoh

```html
<div visual="border:grey border-w:[2px] border-style:dashed">Sempadan putus-putus</div>
<div visual="border:primary border-w:[2px] border-style:dotted">Sempadan bertitik</div>
```

---

## Contoh Lengkap

```html
<div visual="border:grey border-w:[1px] border-style:solid">
  Elemen bersempadan
</div>

<input visual="border:grey border-w:small focus:border:primary">

<div visual="border:primary border-w:[2px] border-style:dashed rounded:medium">
  Sempadan dengan sudut bulat
</div>
```
