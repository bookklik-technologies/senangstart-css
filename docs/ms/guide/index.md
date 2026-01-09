# Apa itu SenangStart CSS?

SenangStart CSS ialah rangka kerja CSS utility-first yang menggantikan konvensyen penamaan abstrak dengan **Adjektif Semula Jadi**.

## Masalahnya

Rangka kerja utiliti tradisional memaksa anda menghafal skala arbitrari:

```html
<!-- Apa maksud px-4? -->
<div class="px-4 py-8 mt-16 mb-32">...</div>
```

Adakah `px-4` pixel? Adakah `mt-16` lebih besar daripada `mb-32`? Anda perlu sentiasa merujuk dokumentasi.

## Penyelesaiannya

SenangStart menggunakan perkataan yang anda sudah faham:

```html
<!-- Terus difahami -->
<div space="p-x:small p-y:medium m-t:big m-b:giant">...</div>
```

**Tiada kiraan mental. Tiada jadual rujukan. Hanya terangkan apa yang anda mahu.**

## Prinsip Teras

### 1. Bahasa Semula Jadi Dahulu

| Daripada... | Guna... |
|-------------|---------|
| `px-4` | `tiny` |
| `px-8` | `small` |
| `px-16` | `medium` |
| `px-32` | `big` |
| `px-64` | `giant` |
| `px-128` | `vast` |

### 2. Pengasingan Tanggungjawab

Tiga atribusi, tiga tanggungjawab:

| Atribusi | Tujuan | Contoh |
|---------|--------|--------|
| `layout` | Struktur & aliran | `layout="flex col center"` |
| `space` | Jarak & saiz | `space="p:medium g:small"` |
| `visual` | Warna & penampilan | `visual="bg:white rounded:big"` |

### 3. Mesra AI

SenangStart menghasilkan fail konteks yang membantu pembantu AI memahami sistem reka bentuk anda:

> **Bila pengguna cakap:** "ketatkan"  
> **AI tahu untuk:** Kurangkan jarak (medium → small → tiny)

> **Bila pengguna cakap:** "bagi ruang"  
> **AI tahu untuk:** Besarkan jarak (medium → big → giant)

## Langkah Seterusnya

- [Bermula](/ms/guide/getting-started) — Pasang dan guna SenangStart
- [Skala Semula Jadi](/ms/guide/natural-scale) — Fahami falsafah jarak
- [Sintaksis Tri-Atribusi](/ms/guide/tri-attribute) — Pelajari layout, space, dan visual
