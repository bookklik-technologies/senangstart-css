# Sintaksis Tri-Atribusi

SenangStart mengasingkan aspek stail kepada tiga atribusi yang berbeza.

## Gambaran Keseluruhan

| Atribusi | Tujuan | Contoh |
|---------|--------|--------|
| `layout` | Struktur & kedudukan | `layout="flex col center"` |
| `space` | Saiz & jarak | `space="p:medium g:small"` |
| `visual` | Warna & penampilan | `visual="bg:white rounded:big"` |

## Mengapa Tiga Atribusi?

### Kelas CSS tradisional adalah huru-hara:

```html
<div class="flex flex-col items-center p-4 gap-2 bg-white rounded-lg shadow-md">
```

Semua bercampur aduk. Mana layout? Mana spacing? Mana visual?

### SenangStart adalah teratur:

```html
<div
  layout="flex col center"
  space="p:medium g:small"
  visual="bg:white rounded:big shadow:medium"
>
```

**Pengasingan jelas.** Sesiapa yang baca kod ini terus tahu:
- **Struktur:** Flexbox column, di tengah
- **Saiz:** Medium padding, small gap
- **Penampilan:** Putih, bulat, berlorek

## Atribusi `layout`

Mengawal **bagaimana elemen diposisikan** dan **bagaimana ia mengalir**.

### Jenis Paparan

```html
<div layout="flex">Kontena Flexbox</div>
<div layout="grid">Kontena Grid</div>
<div layout="block">Elemen Block</div>
<div layout="hidden">Elemen Tersembunyi</div>
```

### Arah Flex

```html
<div layout="flex row">Horizontal (lalai)</div>
<div layout="flex col">Menegak</div>
<div layout="flex row-reverse">Horizontal terbalik</div>
<div layout="flex col-reverse">Menegak terbalik</div>
```

### Penjajaran

```html
<div layout="flex center">Tengah kedua-dua paksi</div>
<div layout="flex between">Jarak antara item</div>
<div layout="flex start">Jajar ke permulaan</div>
<div layout="flex end">Jajar ke hujung</div>
```

### Kedudukan

```html
<nav layout="fixed z:top">Navigasi Fixed</nav>
<div layout="sticky">Elemen Sticky</div>
<div layout="absolute z:high">Absolute positioned</div>
<div layout="relative">Relative positioned</div>
```

## Atribusi `space`

Mengawal **saiz dan jarak** menggunakan skala semula jadi.

### Sintaksis

```
[breakpoint]:[property]:[scale]
```

### Padding

```html
<div space="p:medium">Semua sisi</div>
<div space="p-x:big p-y:small">Horizontal & menegak</div>
<div space="p-t:small p-b:big">Atas & bawah</div>
```

### Margin

```html
<div space="m:medium">Semua sisi</div>
<div space="m-b:big">Bawah sahaja</div>
<div space="m-x:auto">Tengah secara horizontal</div>
```

### Sela (Flex/Grid)

```html
<div layout="flex" space="g:small">Small gap</div>
<div layout="grid" space="g:medium">Medium gap</div>
```

### Saiz

```html
<div space="w:[100%] h:[400px]">Saiz eksplisit</div>
<div space="max-w:[1200px] min-h:[80vh]">Kekangan</div>
```

### Nilai Arbitrari (Escape Hatch)

Guna kurungan untuk nilai spesifik:

```html
<div space="w:[350px]">Lebar 350px</div>
<div space="p:[20px_40px]">20px atas/bawah, 40px kiri/kanan</div>
<div space="m-t:[5rem]">5rem margin atas</div>
```

## Atribusi `visual`

Mengawal **warna, tekstur, dan penampilan**.

### Latar Belakang

```html
<div visual="bg:white">Latar belakang putih</div>
<div visual="bg:primary">Warna primary</div>
<div visual="bg:[#FF5733]">Hex tersuai</div>
```

### Teks

```html
<span visual="text:dark">Teks gelap</span>
<span visual="text:grey text-size:small">Kelabu, teks kecil</span>
<span visual="font:bold">Teks tebal</span>
```

### Sempadan & Bayang

```html
<div visual="rounded:medium shadow:big">Bulat dengan bayang</div>
<div visual="border:grey border-w:[2px]">Sempadan kelabu</div>
```

### Menggabungkan Sari Diri

```html
<div visual="bg:white rounded:big shadow:medium text:dark">
  Kad dengan pelbagai visual properties
</div>
```

## Menggabungkan Ketiga-tiga

Berikut contoh lengkap:

```html
<div
  layout="flex col"
  space="w:[320px] p:medium g:small"
  visual="bg:white rounded:big shadow:medium"
>
  <h2 visual="font:bold text-size:big text:dark">Tajuk Kad</h2>
  <p visual="text:grey">Penerangan kad di sini.</p>
  <button
    space="p-x:big p-y:small"
    visual="bg:primary text:white rounded:medium"
  >
    Tindakan
  </button>
</div>
```

**Membaca kod ini:**
- Kontena adalah flex column menegak, lebar 320px, dengan medium padding, small gap, latar belakang putih, sudut bulat big, dan bayang medium
- Tajuk adalah bold, teks big, warna dark
- Butang mempunyai big horizontal padding, small vertical padding, latar belakang primary, teks putih, sudut bulat medium
