# Mod Campuran (Blend Modes)

Mengawal cara elemen bercampur dengan latar belakang atau elemen lain.

## Mod Campuran Elemen

### Sintaks
```
visual="mix-blend:[nilai]"
```

### Nilai

| Property | Output CSS |
|----------|------------|
| `mix-blend:normal` | `mix-blend-mode: normal` |
| `mix-blend:multiply` | `mix-blend-mode: multiply` |
| `mix-blend:screen` | `mix-blend-mode: screen` |
| `mix-blend:overlay` | `mix-blend-mode: overlay` |
| `mix-blend:darken` | `mix-blend-mode: darken` |
| `mix-blend:lighten` | `mix-blend-mode: lighten` |
| `mix-blend:color-dodge` | `mix-blend-mode: color-dodge` |
| `mix-blend:color-burn` | `mix-blend-mode: color-burn` |
| `mix-blend:hard-light` | `mix-blend-mode: hard-light` |
| `mix-blend:soft-light` | `mix-blend-mode: soft-light` |
| `mix-blend:difference` | `mix-blend-mode: difference` |
| `mix-blend:exclusion` | `mix-blend-mode: exclusion` |
| `mix-blend:hue` | `mix-blend-mode: hue` |
| `mix-blend:saturation` | `mix-blend-mode: saturation` |
| `mix-blend:color` | `mix-blend-mode: color` |
| `mix-blend:luminosity` | `mix-blend-mode: luminosity` |

### Contoh

```html
<div visual="mix-blend:multiply">
  Elemen dengan mod multiply
</div>

<div visual="mix-blend:screen">
  Elemen dengan mod screen
</div>

<div visual="mix-blend:overlay">
  Elemen dengan mod overlay
</div>
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
| `bg-blend:color-dodge` | `background-blend-mode: color-dodge` |
| `bg-blend:color-burn` | `background-blend-mode: color-burn` |
| `bg-blend:hard-light` | `background-blend-mode: hard-light` |
| `bg-blend:soft-light` | `background-blend-mode: soft-light` |
| `bg-blend:difference` | `background-blend-mode: difference` |
| `bg-blend:exclusion` | `background-blend-mode: exclusion` |
| `bg-blend:hue` | `background-blend-mode: hue` |
| `bg-blend:saturation` | `background-blend-mode: saturation` |
| `bg-blend:color` | `background-blend-mode: color` |
| `bg-blend:luminosity` | `background-blend-mode: luminosity` |

### Contoh

```html
<div visual="
  bg:primary 
  bg-image:[texture.png] 
  bg-blend:multiply
">
  Latar belakang dengan campuran multiply
</div>

<div visual="
  bg:[#FF5733] 
  bg-image:[pattern.png] 
  bg-blend:overlay
">
  Latar belakang dengan campuran overlay
</div>
```

---

## Penerangan Mod Campuran

### Normal
Mod lalai tanpa campuran.

### Multiply
Mendarabkan warna, menghasilkan warna yang lebih gelap.

### Screen
Kebalikan multiply, menghasilkan warna yang lebih cerah.

### Overlay
Gabungan multiply dan screen, meningkatkan kontras.

### Darken
Memilih warna yang lebih gelap.

### Lighten
Memilih warna yang lebih cerah.

### Color Dodge
Mencerahkan warna latar belakang.

### Color Burn
Menggelapkan warna latar belakang.

### Hard Light
Seperti overlay tetapi lebih kuat.

### Soft Light
Seperti overlay tetapi lebih lembut.

### Difference
Menolak warna yang lebih gelap dari yang lebih cerah.

### Exclusion
Seperti difference tetapi dengan kontras yang lebih rendah.

### Hue
Menggunakan hue dari lapisan atas.

### Saturation
Menggunakan saturation dari lapisan atas.

### Color
Menggunakan hue dan saturation dari lapisan atas.

### Luminosity
Menggunakan luminosity dari lapisan atas.

---

## Contoh Lengkap

```html
<!-- Mix Blend Mode untuk teks di atas imej -->
<div visual="relative">
  <img src="background.jpg" alt="Background">
  <h1 visual="absolute inset:[0] text:white mix-blend:overlay">
    Teks dengan blend mode
  </h1>
</div>

<!-- Background Blend Mode untuk tekstur -->
<div visual="
  bg:primary 
  bg-image:[noise.png] 
  bg-blend:soft-light
  p:big
">
  Kandungan dengan tekstur halus
</div>
```
