# Contoh Kad

Komponen kad cantik dibina dengan SenangStart CSS.

## Kad Asas

```html
<div
  layout="flex col"
  space="w:[320px] p:medium"
  visual="bg:white rounded:big shadow:medium"
>
  <h3 visual="font:bold text-size:big text:dark">Tajuk Kad</h3>
  <p space="m-t:small" visual="text:grey">
    Penerangan kad di sini dengan teks membantu.
  </p>
</div>
```

## Kad Profil

```html
<div
  layout="flex col"
  space="w:[320px] p:medium"
  visual="bg:white rounded:big shadow:medium"
>
  <div layout="flex between" space="m-b:big">
    <span visual="font:bold text-size:big text:dark">Profil</span>
    <span visual="text:primary">Edit</span>
  </div>
  <div layout="flex col" space="g:small">
    <label visual="text:grey text-size:small">Nama Pengguna</label>
    <div visual="text:dark">@senang_dev</div>
  </div>
  <div layout="flex col" space="g:small m-t:medium">
    <label visual="text:grey text-size:small">Emel</label>
    <div visual="text:dark">hello@senangstart.dev</div>
  </div>
  <button 
    space="m-t:big p-y:small"
    visual="bg:primary text:white rounded:medium font:medium hover:bg:[#2563EB]"
  >
    Lihat Profil Penuh
  </button>
</div>
```

## Kad Harga

```html
<div
  layout="flex col"
  space="w:[300px] p:big"
  visual="bg:white rounded:big shadow:medium text:center"
>
  <h3 visual="font:bold text-size:big text:dark">Pelan Pro</h3>
  <div space="m-t:small m-b:medium">
    <span visual="text-size:vast font:bold text:dark">RM99</span>
    <span visual="text:grey">/bulan</span>
  </div>
  <div layout="flex col" space="g:small" visual="text:grey text:left">
    <div>✓ Projek tanpa had</div>
    <div>✓ Sokongan keutamaan</div>
    <div>✓ Analitik lanjutan</div>
    <div>✓ Domain tersuai</div>
  </div>
  <button 
    space="m-t:big p:small"
    visual="bg:primary text:white rounded:medium font:bold"
  >
    Mulakan
  </button>
</div>
```

## Kad Ciri

```html
<div
  layout="flex col"
  space="p:big"
  visual="bg:white rounded:big shadow:small hover:shadow:big"
>
  <div space="m-b:medium" visual="text-size:giant">🚀</div>
  <h3 space="m-b:small" visual="font:bold text-size:big text:dark">
    Prestasi Pantas
  </h3>
  <p visual="text:grey">
    Bina sepantas kilat dengan output teroptimum. 
    Pengguna anda akan suka kepantasan.
  </p>
</div>
```

## Kad Horizontal

```html
<div
  layout="flex row"
  space="p:medium g:medium"
  visual="bg:white rounded:big shadow:medium"
>
  <div 
    space="w:[80px] h:[80px]"
    visual="bg:primary rounded:medium"
  ></div>
  <div layout="flex col" space="g:tiny">
    <h3 visual="font:bold text:dark">Tajuk Artikel</h3>
    <p visual="text:grey text-size:small">
      Penerangan ringkas kandungan artikel.
    </p>
    <span visual="text:primary text-size:small">Baca lagi →</span>
  </div>
</div>
```
