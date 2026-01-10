# Latar Belakang

Mengawal sifat-sifat latar belakang dengan atribut `visual`.

## Warna Latar Belakang

### Sintaks
```
visual="bg:[warna]"
```

### Nilai

| Property | Output CSS |
|----------|------------|
| `bg:white` | `background-color: var(--c-white)` |
| `bg:primary` | `background-color: var(--c-primary)` |
| `bg:[#hex]` | `background-color: #hex` |

### Contoh

```html
<div visual="bg:white">Latar belakang putih</div>
<div visual="bg:primary">Warna primary</div>
<div visual="bg:[#FF5733]">Hex tersuai</div>
```

---

## Imej Latar Belakang

### Sintaks
```
visual="bg-image:[url]"
```

### Nilai

| Property | Output CSS |
|----------|------------|
| `bg-image:[image.jpg]` | `background-image: url(image.jpg)` |
| `bg-image:[/path/to/image.png]` | `background-image: url(/path/to/image.png)` |

### Contoh

```html
<div visual="bg-image:[hero.jpg]">Dengan imej latar belakang</div>
```

---

## Lampiran Latar Belakang

### Sintaks
```
visual="bg-attachment:[nilai]"
```

### Nilai

| Property | Output CSS |
|----------|------------|
| `bg-attachment:scroll` | `background-attachment: scroll` |
| `bg-attachment:fixed` | `background-attachment: fixed` |
| `bg-attachment:local` | `background-attachment: local` |

### Contoh

```html
<div visual="bg-attachment:fixed">Latar belakang tetap</div>
```

---

## Klip Latar Belakang

### Sintaks
```
visual="bg-clip:[nilai]"
```

### Nilai

| Property | Output CSS |
|----------|------------|
| `bg-clip:border` | `background-clip: border-box` |
| `bg-clip:padding` | `background-clip: padding-box` |
| `bg-clip:content` | `background-clip: content-box` |
| `bg-clip:text` | `background-clip: text` |

### Contoh

```html
<div visual="bg-clip:text">Klip ke teks</div>
```

---

## Asal Latar Belakang

### Sintaks
```
visual="bg-origin:[nilai]"
```

### Nilai

| Property | Output CSS |
|----------|------------|
| `bg-origin:border` | `background-origin: border-box` |
| `bg-origin:padding` | `background-origin: padding-box` |
| `bg-origin:content` | `background-origin: content-box` |

### Contoh

```html
<div visual="bg-origin:padding">Asal dari padding</div>
```

---

## Kedudukan Latar Belakang

### Sintaks
```
visual="bg-position:[nilai]"
```

### Nilai

| Property | Output CSS |
|----------|------------|
| `bg-position:center` | `background-position: center` |
| `bg-position:top` | `background-position: top` |
| `bg-position:bottom` | `background-position: bottom` |
| `bg-position:left` | `background-position: left` |
| `bg-position:right` | `background-position: right` |
| `bg-position:top-left` | `background-position: top left` |
| `bg-position:top-right` | `background-position: top right` |
| `bg-position:bottom-left` | `background-position: bottom left` |
| `bg-position:bottom-right` | `background-position: bottom right` |
| `bg-position:[50%_50%]` | `background-position: 50% 50%` |

### Contoh

```html
<div visual="bg-position:center">Tengah</div>
<div visual="bg-position:[25%_75%]">Kedudukan tersuai</div>
```

---

## Ulangan Latar Belakang

### Sintaks
```
visual="bg-repeat:[nilai]"
```

### Nilai

| Property | Output CSS |
|----------|------------|
| `bg-repeat:repeat` | `background-repeat: repeat` |
| `bg-repeat:no-repeat` | `background-repeat: no-repeat` |
| `bg-repeat:repeat-x` | `background-repeat: repeat-x` |
| `bg-repeat:repeat-y` | `background-repeat: repeat-y` |
| `bg-repeat:round` | `background-repeat: round` |
| `bg-repeat:space` | `background-repeat: space` |

### Contoh

```html
<div visual="bg-repeat:no-repeat">Tanpa ulangan</div>
```

---

## Saiz Latar Belakang

### Sintaks
```
visual="bg-size:[nilai]"
```

### Nilai

| Property | Output CSS |
|----------|------------|
| `bg-size:auto` | `background-size: auto` |
| `bg-size:cover` | `background-size: cover` |
| `bg-size:contain` | `background-size: contain` |
| `bg-size:[100px_100px]` | `background-size: 100px 100px` |

### Contoh

```html
<div visual="bg-size:cover">Tutup penuh</div>
<div visual="bg-size:[200px_auto]">Saiz tersuai</div>
```

---

## Mod Campuran Latar Belakang

### Sintaks
```
visual="bg-blend:[nilai]"
```

### Nilai

| Property | Output CSS |
|----------|------------|
| `bg-blend:normal` | `background-blend-mode: normal` |
| `bg-blend:multiply` | `background-blend-mode: multiply` |
| `bg-blend:screen` | `background-blend-mode: screen` |
| `bg-blend:overlay` | `background-blend-mode: overlay` |
| `bg-blend:darken` | `background-blend-mode: darken` |
| `bg-blend:lighten` | `background-blend-mode: lighten` |

### Contoh

```html
<div visual="bg-blend:multiply">Campuran multiply</div>
```

---

## Contoh Lengkap

```html
<div visual="
  bg:primary 
  bg-image:[pattern.png] 
  bg-size:cover 
  bg-position:center 
  bg-repeat:no-repeat
">
  Latar belakang lengkap
</div>
```
