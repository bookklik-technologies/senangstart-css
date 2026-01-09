---
layout: home

hero:
  name: SenangStart CSS
  text: Enjin CSS Niat Nan Utama
  tagline: Cakap Manusia. Kompil ke Logik.
  image:
    src: https://senangstart.com/img/use_senangstart.svg
    alt: SenangStart CSS
  actions:
    - theme: brand
      text: Bermula
      link: /ms/guide/getting-started
    - theme: alt
      text: Lihat di GitHub
      link: https://github.com/bookklik-technologies/senangstart-css

features:
  - icon: 🧠
    title: Bahasa Semula Jadi
    details: Guna tiny, small, medium, big, giant, vast — perkataan yang anda sudah tahu. Tak perlu hafal px-4, px-8, px-16.
  - icon: 🎯
    title: Pengasingan Tanggungjawab
    details: layout untuk struktur, space untuk saiz, visual untuk penampilan. Bersih, semantik, mudah diselenggara.
  - icon: 🤖
    title: Mesra AI
    details: Menghasilkan fail konteks untuk LLM. Cakap "ketatkan" dan AI tahu untuk kurangkan jarak.
  - icon: ⚡
    title: Pilihan Tanpa Bina
    details: Guna CDN JIT runtime untuk stail serta-merta. Tiada langkah bina diperlukan untuk prototaip.
  - icon: 📱
    title: Responsif Secara Rekaan
    details: Titik Henti mobile-first dengan prefiks intuitif seperti mob:, tab:, lap:, desk:.
  - icon: 🎨
    title: Boleh Disesuaikan Sepenuhnya
    details: Tindih ganti mana-mana skala, tambah warna tersuai, lanjutkan tema untuk padankan jenama anda.
---

<style>
:root {
  --vp-home-hero-name-color: transparent;
  --vp-home-hero-name-background: -webkit-linear-gradient(120deg, #2563EB 30%, #3B82F6);
  --vp-home-hero-image-background-image: linear-gradient(-45deg, #2563EB 50%, #3B82F6 50%);
  --vp-home-hero-image-filter: blur(44px);
  --vp-c-brand-1: #2563EB;
  --vp-c-brand-2: #3B82F6;
  --vp-c-brand-3: #DBEAFE;
}
</style>

## Contoh Pantas

```html
<div
  layout="flex col center"
  space="p:big"
  visual="bg:primary text:white rounded:big"
>
  Hello SenangStart!
</div>
```

Ini mencipta flexbox column, di tengah, dengan padding big, latar belakang primary, teks putih, dan sudut bulat big. **Tiada kelas CSS untuk dihafal.**
