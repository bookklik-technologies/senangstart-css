# Topeng (Mask)

Mengawal sifat-sifat topeng CSS dengan atribut `visual`.

## Imej Topeng

### Sintaks
```
visual="mask-image:[nilai]"
```

### Nilai

| Property | Output CSS |
|----------|------------|
| `mask-image:[mask.svg]` | `mask-image: url(mask.svg)` |
| `mask-image:[/path/to/mask.png]` | `mask-image: url(/path/to/mask.png)` |

### Contoh

```html
<div visual="mask-image:[circle-mask.svg]">
  Elemen dengan topeng bulat
</div>
```

---

## Klip Topeng

### Sintaks
```
visual="mask-clip:[nilai]"
```

### Nilai

| Property | Output CSS |
|----------|------------|
| `mask-clip:border` | `mask-clip: border-box` |
| `mask-clip:padding` | `mask-clip: padding-box` |
| `mask-clip:content` | `mask-clip: content-box` |
| `mask-clip:text` | `mask-clip: text` |

### Contoh

```html
<div visual="mask-clip:content">Klip ke content box</div>
```

---

## Komposit Topeng

### Sintaks
```
visual="mask-composite:[nilai]"
```

### Nilai

| Property | Output CSS |
|----------|------------|
| `mask-composite:add` | `mask-composite: add` |
| `mask-composite:subtract` | `mask-composite: subtract` |
| `mask-composite:intersect` | `mask-composite: intersect` |
| `mask-composite:exclude` | `mask-composite: exclude` |

### Contoh

```html
<div visual="mask-composite:intersect">Komposit intersect</div>
```

---

## Mod Topeng

### Sintaks
```
visual="mask-mode:[nilai]"
```

### Nilai

| Property | Output CSS |
|----------|------------|
| `mask-mode:alpha` | `mask-mode: alpha` |
| `mask-mode:luminance` | `mask-mode: luminance` |
| `mask-mode:match-source` | `mask-mode: match-source` |

### Contoh

```html
<div visual="mask-mode:alpha">Mod alpha</div>
```

---

## Asal Topeng

### Sintaks
```
visual="mask-origin:[nilai]"
```

### Nilai

| Property | Output CSS |
|----------|------------|
| `mask-origin:border` | `mask-origin: border-box` |
| `mask-origin:padding` | `mask-origin: padding-box` |
| `mask-origin:content` | `mask-origin: content-box` |

### Contoh

```html
<div visual="mask-origin:padding">Asal dari padding</div>
```

---

## Kedudukan Topeng

### Sintaks
```
visual="mask-position:[nilai]"
```

### Nilai

| Property | Output CSS |
|----------|------------|
| `mask-position:center` | `mask-position: center` |
| `mask-position:top` | `mask-position: top` |
| `mask-position:bottom` | `mask-position: bottom` |
| `mask-position:left` | `mask-position: left` |
| `mask-position:right` | `mask-position: right` |
| `mask-position:top-left` | `mask-position: top left` |
| `mask-position:top-right` | `mask-position: top right` |
| `mask-position:bottom-left` | `mask-position: bottom left` |
| `mask-position:bottom-right` | `mask-position: bottom right` |
| `mask-position:[50%_50%]` | `mask-position: 50% 50%` |

### Contoh

```html
<div visual="mask-position:center">Topeng di tengah</div>
<div visual="mask-position:[25%_75%]">Kedudukan tersuai</div>
```

---

## Ulangan Topeng

### Sintaks
```
visual="mask-repeat:[nilai]"
```

### Nilai

| Property | Output CSS |
|----------|------------|
| `mask-repeat:repeat` | `mask-repeat: repeat` |
| `mask-repeat:no-repeat` | `mask-repeat: no-repeat` |
| `mask-repeat:repeat-x` | `mask-repeat: repeat-x` |
| `mask-repeat:repeat-y` | `mask-repeat: repeat-y` |
| `mask-repeat:round` | `mask-repeat: round` |
| `mask-repeat:space` | `mask-repeat: space` |

### Contoh

```html
<div visual="mask-repeat:no-repeat">Tanpa ulangan</div>
```

---

## Saiz Topeng

### Sintaks
```
visual="mask-size:[nilai]"
```

### Nilai

| Property | Output CSS |
|----------|------------|
| `mask-size:auto` | `mask-size: auto` |
| `mask-size:cover` | `mask-size: cover` |
| `mask-size:contain` | `mask-size: contain` |
| `mask-size:[100px_100px]` | `mask-size: 100px 100px` |

### Contoh

```html
<div visual="mask-size:cover">Topeng tutup penuh</div>
<div visual="mask-size:[200px_auto]">Saiz tersuai</div>
```

---

## Jenis Topeng

### Sintaks
```
visual="mask-type:[nilai]"
```

### Nilai

| Property | Output CSS |
|----------|------------|
| `mask-type:alpha` | `mask-type: alpha` |
| `mask-type:luminance` | `mask-type: luminance` |

### Contoh

```html
<svg>
  <mask id="myMask" visual="mask-type:alpha">
    <!-- Kandungan mask -->
  </mask>
</svg>
```

---

## Contoh Lengkap

```html
<!-- Topeng bulat untuk imej -->
<div visual="
  mask-image:[circle.svg]
  mask-size:cover
  mask-position:center
  mask-repeat:no-repeat
">
  <img src="photo.jpg" alt="Photo">
</div>

<!-- Topeng dengan komposit -->
<div visual="
  mask-image:[pattern.png]
  mask-composite:intersect
  mask-mode:alpha
  mask-size:contain
">
  Kandungan dengan topeng kompleks
</div>

<!-- Topeng gradient -->
<div visual="
  mask-image:[gradient-mask.svg]
  mask-position:top
  mask-size:cover
  mask-repeat:no-repeat
">
  Fade effect dengan topeng
</div>
```

---

## Tips Penggunaan

- Gunakan topeng SVG untuk bentuk yang kompleks
- Gabungkan dengan `mask-composite` untuk efek berlapis
- Gunakan `mask-mode:alpha` untuk topeng berdasarkan ketelusan
- Gunakan `mask-mode:luminance` untuk topeng berdasarkan kecerahan
- Topeng sangat berguna untuk membuat bentuk tersuai dan efek fade
