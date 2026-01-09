# Mengapa Bahasa Semula Jadi?

Falsafah di sebalik pendekatan adjektif semula jadi SenangStart.

## Masalah dengan Nombor

Rangka kerja utiliti tradisional menggunakan skala nombor abstrak:

```html
<!-- Apa maksud nombor-nombor ini? -->
<div class="p-4 m-8 gap-2 text-xl">
```

Setiap pembangun bertanya:
- Adakah `p-4` lebih besar daripada `m-8`?
- Apa beza antara `gap-2` dan `gap-4`?
- Adakah `text-xl` lebih besar daripada `text-lg`?

**Anda sentiasa merujuk dokumentasi.** Beban mental melambatkan anda.

## Penyelesaian Semula Jadi

SenangStart menggunakan perkataan yang anda sudah faham:

```html
<!-- Terus jelas -->
<div space="p:medium m:big g:small" visual="text-size:big">
```

Tiada rujukan diperlukan. Anda *tahu* bahawa:
- `big` lebih besar daripada `medium`
- `medium` lebih besar daripada `small`
- `giant` lebih besar daripada `big`

## Model Mental Fizikal

Setiap skala dipetakan kepada objek fizikal yang boleh anda visualisasikan:

| Kata Kunci | Model Fizikal | Contoh Penggunaan |
|------------|---------------|-------------------|
| `tiny` | 🪨 Batu | Jarak ikon, sempadan |
| `small` | 📦 Kotak mancis | Jarak medan borang |
| `medium` | 📱 Telefon pintar | Padding standard |
| `big` | 💻 Komputer riba | Jarak seksyen |
| `giant` | 🚪 Pintu | Bahagian layout |
| `vast` | 🏠 Rumah | Seksyen hero |

Bila anda fikir "Saya perlukan jarak sebesar komputer riba", anda tulis `big`.

## Komunikasi Mesra AI

Bahasa semula jadi berfungsi lebih baik dengan pembantu AI:

### Pendekatan Tradisional
> "Besarkan padding"  
> AI: "Patut guna p-6, p-8, atau p-12?"

### Pendekatan SenangStart
> "Besarkan padding"  
> AI: "Tukar dari `medium` ke `big`" ✓

AI memahami *niat* di sebalik kata-kata anda.

## Perbualan Semantik

Dengan SenangStart, anda boleh bercakap secara semula jadi:

| Anda Cakap | AI Faham |
|------------|----------|
| "ketatkan" | Kurangkan jarak (medium → small → tiny) |
| "bagi ruang bernafas" | Besarkan jarak (medium → big → giant) |
| "lebih padat" | Guna jarak lebih kecil |
| "rasa sempit" | Besarkan jarak |
| "terlalu banyak ruang kosong" | Kurangkan jarak |

## Pengasingan Tanggungjawab

Tiga atribusi memastikan kod anda teratur:

```html
<div
  layout="flex col center"   <!-- Struktur -->
  space="p:medium g:small"   <!-- Saiz -->
  visual="bg:white rounded:big"  <!-- Penampilan -->
>
```

Sesiapa yang baca kod ini terus tahu:
- **Apa fungsinya** (flexbox, column, di tengah)
- **Berapa besarnya** (padding medium, gap small)
- **Bagaimana rupanya** (putih, bulat)

## Pemikiran Niat Nan Utama

Berhenti fikir dalam pixel. Mula terangkan niat.

| Daripada... | Fikir... |
|-------------|----------|
| "Saya perlukan 16px padding" | "Saya perlukan medium padding" |
| "Tambah 8px gap" | "Tambah small gap" |
| "Buat 32px margin" | "Bagi big margin" |

**Kod anda menjadi swadokumentasi.**
