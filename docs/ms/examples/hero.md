# Contoh Bahagian Hero

Bahagian hero halaman pendaratan dibina dengan SenangStart CSS.

## Hero Ringkas

```html
<section
  layout="flex col center"
  space="p:giant min-h:[80vh]"
  visual="bg:dark text:white"
>
  <h1 visual="text-size:vast font:bold text:center">
    Selamat Datang
  </h1>
  <p space="m-t:medium max-w:[600px]" visual="text:light text:center text-size:big">
    Bina antara muka cantik dengan bahasa semula jadi.
  </p>
  <button
    space="m-t:big p-x:big p-y:small"
    visual="bg:primary text:white rounded:medium hover:bg:[#2563EB]"
  >
    Bermula
  </button>
</section>
```

## Hero dengan Dua Butang

```html
<section
  layout="flex col center"
  space="p:giant min-h:[100vh]"
  visual="bg:dark text:white"
>
  <h1 space="m-b:small" visual="text-size:vast font:bold text:center">
    Enjin CSS Niat Nan Utama
  </h1>
  <p space="max-w:[600px] m-b:big" visual="text:light text-size:big text:center">
    Cakap Manusia. Kompil ke Logik.<br>
    Berhenti hafal skala. Mula terangkan niat.
  </p>
  <div layout="flex" space="g:medium">
    <button 
      space="p-x:big p-y:small"
      visual="bg:primary text:white rounded:medium font:bold hover:bg:[#2563EB]"
    >
      Bermula
    </button>
    <button 
      space="p-x:big p-y:small"
      visual="bg:[transparent] text:white rounded:medium border:white border-w:[2px] hover:bg:[rgba(255,255,255,0.1)]"
    >
      Ketahui Lebih
    </button>
  </div>
</section>
```

## Hero dengan Imej

```html
<section
  layout="flex col lap:row center"
  space="p:big lap:p:giant"
  visual="bg:light"
>
  <div layout="flex col" space="w:[100%] lap:w:[50%] p:medium">
    <h1 visual="text-size:giant font:bold text:dark">
      Bina Lebih Pantas, Lancar Lebih Cepat
    </h1>
    <p space="m-t:medium" visual="text:grey text-size:big">
      SenangStart CSS membolehkan anda tulis stail yang dibaca seperti prosa.
    </p>
    <div layout="flex" space="g:small m-t:big">
      <button 
        space="p-x:big p-y:small"
        visual="bg:primary text:white rounded:medium"
      >
        Mula Percuma
      </button>
      <button 
        space="p-x:big p-y:small"
        visual="bg:white text:dark rounded:medium shadow:small"
      >
        Lihat Demo
      </button>
    </div>
  </div>
  <div space="w:[100%] lap:w:[50%] p:medium">
    <div 
      space="w:[100%] h:[400px]"
      visual="bg:primary rounded:big"
    >
      <!-- Placeholder imej -->
    </div>
  </div>
</section>
```

## Hero Gradien

```html
<section
  layout="flex col center"
  space="p:giant min-h:[100vh]"
  style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);"
>
  <h1 visual="text-size:vast font:bold text:white text:center">
    Gradien Cantik
  </h1>
  <p space="m-t:medium max-w:[500px]" visual="text:white text:center opacity:[0.9]">
    Gabungkan SenangStart dengan style inline untuk kesan tersuai.
  </p>
  <button
    space="m-t:big p-x:big p-y:small"
    visual="bg:white text:dark rounded:round font:bold hover:shadow:big"
  >
    Teroka Sekarang
  </button>
</section>
```

## Hero Responsif

```html
<section
  layout="flex col center"
  space="p:medium tab:p:big lap:p:giant min-h:[80vh]"
  visual="bg:dark text:white"
>
  <h1 
    visual="text-size:big tab:text-size:giant lap:text-size:vast font:bold text:center"
  >
    Hero Responsif
  </h1>
  <p 
    space="m-t:small tab:m-t:medium max-w:[600px]" 
    visual="text:light text:center text-size:medium tab:text-size:big"
  >
    Hero ini menyesuaikan dengan semua saiz skrin.
  </p>
  <button
    space="m-t:medium tab:m-t:big p-x:medium tab:p-x:big p-y:small"
    visual="bg:primary text:white rounded:medium"
  >
    Bermula
  </button>
</section>
```
