# Contoh Borang

Komponen dan layout borang dibina dengan SenangStart CSS.

## Input Asas

```html
<div layout="flex col" space="g:small">
  <label visual="text:dark font:medium text-size:small">Emel</label>
  <input
    type="email"
    space="p:small w:[100%]"
    visual="border:grey border-w:[1px] rounded:small focus:border:primary"
    placeholder="anda@contoh.com"
  />
</div>
```

## Input dengan Ikon

```html
<div layout="flex col" space="g:small">
  <label visual="text:dark font:medium">Carian</label>
  <div layout="flex relative">
    <span 
      layout="absolute" 
      space="p-l:small" 
      style="top: 50%; transform: translateY(-50%);"
      visual="text:grey"
    >
      🔍
    </span>
    <input
      type="text"
      space="p:small p-l:big w:[100%]"
      visual="border:grey border-w:[1px] rounded:small"
      placeholder="Cari..."
    />
  </div>
</div>
```

## Gaya Butang

```html
<div layout="flex wrap" space="g:small">
  <!-- Primary -->
  <button
    space="p-x:medium p-y:small"
    visual="bg:primary text:white rounded:medium hover:bg:[#2563EB]"
  >
    Primary
  </button>
  
  <!-- Secondary -->
  <button
    space="p-x:medium p-y:small"
    visual="bg:white text:dark rounded:medium border:grey border-w:[1px] hover:bg:light"
  >
    Secondary
  </button>
  
  <!-- Bahaya -->
  <button
    space="p-x:medium p-y:small"
    visual="bg:danger text:white rounded:medium hover:bg:[#DC2626]"
  >
    Bahaya
  </button>
  
  <!-- Ghost -->
  <button
    space="p-x:medium p-y:small"
    visual="bg:[transparent] text:primary hover:bg:light rounded:medium"
  >
    Ghost
  </button>
</div>
```

## Borang Log Masuk

```html
<div
  layout="flex col"
  space="w:[400px] p:big"
  visual="bg:white rounded:big shadow:medium"
>
  <h2 space="m-b:big" visual="font:bold text-size:big text:dark text:center">
    Selamat Kembali
  </h2>
  
  <div layout="flex col" space="g:small m-b:medium">
    <label visual="text:dark font:medium text-size:small">Emel</label>
    <input
      type="email"
      space="p:small"
      visual="border:grey border-w:[1px] rounded:small focus:border:primary"
      placeholder="anda@contoh.com"
    />
  </div>
  
  <div layout="flex col" space="g:small m-b:medium">
    <label visual="text:dark font:medium text-size:small">Kata Laluan</label>
    <input
      type="password"
      space="p:small"
      visual="border:grey border-w:[1px] rounded:small focus:border:primary"
      placeholder="••••••••"
    />
  </div>
  
  <div layout="flex between" space="m-b:medium">
    <label layout="flex center" space="g:tiny">
      <input type="checkbox" />
      <span visual="text:grey text-size:small">Ingat saya</span>
    </label>
    <a visual="text:primary text-size:small">Lupa kata laluan?</a>
  </div>
  
  <button
    space="p:small"
    visual="bg:primary text:white rounded:medium font:medium hover:bg:[#2563EB]"
  >
    Log Masuk
  </button>
  
  <p space="m-t:medium" visual="text:grey text:center text-size:small">
    Tiada akaun? <a visual="text:primary">Daftar</a>
  </p>
</div>
```

## Borang Hubungi

```html
<div
  layout="flex col"
  space="max-w:[600px] p:big"
  visual="bg:white rounded:big shadow:medium"
>
  <h2 space="m-b:big" visual="font:bold text-size:big text:dark">
    Hubungi Kami
  </h2>
  
  <div layout="flex" space="g:medium m-b:medium">
    <div layout="flex col" space="g:small w:[50%]">
      <label visual="text:dark font:medium text-size:small">Nama Pertama</label>
      <input
        type="text"
        space="p:small"
        visual="border:grey border-w:[1px] rounded:small"
      />
    </div>
    <div layout="flex col" space="g:small w:[50%]">
      <label visual="text:dark font:medium text-size:small">Nama Akhir</label>
      <input
        type="text"
        space="p:small"
        visual="border:grey border-w:[1px] rounded:small"
      />
    </div>
  </div>
  
  <div layout="flex col" space="g:small m-b:medium">
    <label visual="text:dark font:medium text-size:small">Emel</label>
    <input
      type="email"
      space="p:small"
      visual="border:grey border-w:[1px] rounded:small"
    />
  </div>
  
  <div layout="flex col" space="g:small m-b:medium">
    <label visual="text:dark font:medium text-size:small">Mesej</label>
    <textarea
      space="p:small"
      visual="border:grey border-w:[1px] rounded:small"
      rows="4"
    ></textarea>
  </div>
  
  <button
    space="p:small"
    visual="bg:primary text:white rounded:medium font:medium"
  >
    Hantar Mesej
  </button>
</div>
```

## Dropdown Pilih

```html
<div layout="flex col" space="g:small">
  <label visual="text:dark font:medium text-size:small">Negara</label>
  <select
    space="p:small"
    visual="border:grey border-w:[1px] rounded:small bg:white"
  >
    <option>Pilih negara</option>
    <option>Malaysia</option>
    <option>Singapura</option>
    <option>Indonesia</option>
  </select>
</div>
```
