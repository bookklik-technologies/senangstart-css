# Skala Semula Jadi

SenangStart menggunakan adjektif semula jadi yang dipetakan kepada objek fizikal yang boleh anda visualisasikan.

## Falsafahnya

Daripada nombor arbitrari, fikirkan **objek fizikal**:

| Kata Kunci | Saiz | Model Mental |
|------------|------|--------------|
| `none` | 0px | Tiada ruang |
| `tiny` | 4px | 🪨 **Batu** — Sempadan, offset kecil |
| `small` | 8px | 📦 **Kotak mancis** — Kumpulkan item berkaitan |
| `medium` | 16px | 📱 **Telefon pintar** — Lalai standard |
| `big` | 32px | 💻 **Komputer riba** — Pisahkan seksyen |
| `giant` | 64px | 🚪 **Pintu** — Bahagian layout |
| `vast` | 128px | 🏠 **Rumah** — Seksyen hero |

## Menggunakan Skala

### Bila guna setiap saiz

**`tiny` (4px)** — Untuk butiran halus
- Jarak ikon dalam butang
- Lebar sempadan
- Offset visual kecil

```html
<button space="p-x:small p-y:tiny">
  <icon /> Butang
</button>
```

**`small` (8px)** — Untuk mengumpulkan item berkaitan
- Jarak antara label dan input
- Jarak antara avatar dan nama
- Item senarai yang ketat

```html
<div layout="flex col" space="g:small">
  <label>Emel</label>
  <input type="email" />
</div>
```

**`medium` (16px)** — Lalai standard
- Padding kad
- Margin medan borang
- Jarak komponen standard

```html
<div space="p:medium">
  Kandungan kad standard
</div>
```

**`big` (32px)** — Untuk memisahkan seksyen berbeza
- Antara header dan kandungan
- Antara kumpulan borang
- Antara blok UI utama

```html
<header space="m-b:big">Tajuk Halaman</header>
<main>Kandungan dipisahkan dari header</main>
```

**`giant` (64px)** — Untuk bahagian layout
- Antara seksyen halaman
- Pemisahan struktur utama
- Padding navigasi desktop

```html
<section space="p-y:giant">
  Seksyen halaman utama
</section>
```

**`vast` (128px)** — Untuk seksyen hero dan jarak besar
- Padding seksyen hero
- Jarak hiasan besar
- Seksyen full-bleed

```html
<section space="p:vast" visual="bg:dark">
  <h1>Selamat Datang ke Aplikasi</h1>
</section>
```

## Pemetaan Bahasa Semula Jadi

Bila bercakap tentang pelarasan jarak, guna bahasa semula jadi:

| Anda cakap... | Tindakan |
|---------------|----------|
| "ketatkan" | Kurangkan jarak (medium → small → tiny) |
| "padat" | Guna small atau tiny |
| "bagi ruang" | Besarkan jarak (medium → big → giant) |
| "bernafas" | Besarkan jarak |
| "luas" | Guna big atau giant |
| "sempit" | Terlalu banyak tiny/small, besarkan skala |

## Menyesuaikan Skala

Tindih ganti lalai dalam `senangstart.config.js`:

```javascript
export default {
  theme: {
    spacing: {
      'tiny': '2px',      // Tiny lebih ketat
      'huge': '256px',    // Tambah skala tersuai
      'massive': '512px'  // Lebih besar lagi!
    }
  }
}
```

Guna skala tersuai anda:

```html
<section space="p:huge">Padding huge</section>
<div space="m-b:massive">Margin massive</div>
```
