# Garis Luar (Outline)

Mengawal sifat-sifat garis luar dengan atribut `visual`.

## Warna Garis Luar

### Sintaks
```
visual="outline:[warna]"
```

### Nilai

| Property | Output CSS |
|----------|------------|
| `outline:primary` | `outline-color: var(--c-primary)` |
| `outline:grey` | `outline-color: var(--c-grey)` |
| `outline:[#hex]` | `outline-color: #hex` |

### Contoh

```html
<button visual="outline:primary">Butang dengan garis luar</button>
```

---

## Lebar Garis Luar

### Sintaks
```
visual="outline-w:[nilai]"
```

### Nilai

| Property | Output CSS |
|----------|------------|
| `outline-w:tiny` | `outline-width: var(--s-tiny)` |
| `outline-w:small` | `outline-width: var(--s-small)` |
| `outline-w:[1px]` | `outline-width: 1px` |
| `outline-w:[2px]` | `outline-width: 2px` |

### Contoh

```html
<div visual="outline:primary outline-w:small">Garis luar nipis</div>
```

---

## Gaya Garis Luar

### Sintaks
```
visual="outline-style:[nilai]"
```

### Nilai

| Property | Output CSS |
|----------|------------|
| `outline-style:solid` | `outline-style: solid` |
| `outline-style:dashed` | `outline-style: dashed` |
| `outline-style:dotted` | `outline-style: dotted` |
| `outline-style:double` | `outline-style: double` |
| `outline-style:none` | `outline-style: none` |

### Contoh

```html
<div visual="outline:primary outline-w:[2px] outline-style:dashed">
  Garis luar putus-putus
</div>
```

---

## Offset Garis Luar

### Sintaks
```
visual="outline-offset:[nilai]"
```

### Nilai

| Property | Output CSS |
|----------|------------|
| `outline-offset:tiny` | `outline-offset: var(--s-tiny)` |
| `outline-offset:small` | `outline-offset: var(--s-small)` |
| `outline-offset:[2px]` | `outline-offset: 2px` |
| `outline-offset:[4px]` | `outline-offset: 4px` |

### Contoh

```html
<button visual="outline:primary outline-w:[2px] outline-offset:small">
  Garis luar dengan jarak
</button>
```

---

## Contoh Lengkap

```html
<button visual="
  outline:primary 
  outline-w:[2px] 
  outline-style:solid 
  outline-offset:small
  focus:outline:blue-600
">
  Butang dengan garis luar lengkap
</button>

<div visual="outline:grey outline-w:tiny outline-style:dotted outline-offset:[1px]">
  Elemen dengan garis luar bertitik
</div>
```
