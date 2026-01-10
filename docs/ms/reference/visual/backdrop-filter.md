# Penapis Latar Belakang (Backdrop Filter)

Gunakan kesan penapis pada kawasan di belakang elemen, mencipta kesan kaca beku dan kabur.

## Kabur Latar Belakang (Backdrop Blur)

Cipta kesan kaca beku dengan kabur.

```html
<div visual="backdrop-blur:none">...</div>    <!-- Tiada kabur -->
<div visual="backdrop-blur:tiny">...</div>    <!-- 2px kabur -->
<div visual="backdrop-blur:small">...</div>   <!-- 4px kabur -->
<div visual="backdrop-blur:medium">...</div>  <!-- 8px kabur -->
<div visual="backdrop-blur:big">...</div>     <!-- 12px kabur -->
<div visual="backdrop-blur:giant">...</div>   <!-- 24px kabur -->
<div visual="backdrop-blur:vast">...</div>    <!-- 48px kabur -->
```

### Contoh Glassmorphism

```html
<div layout="relative" space="h:[400px]" visual="bg-image:[url('bg.jpg')] bg-size:cover">
  <div 
    layout="absolute" 
    space="inset:medium p:big"
    visual="backdrop-blur:medium bg:[rgba(255,255,255,0.3)] rounded:big"
  >
    <h2 visual="text:white font:bold">Kad Kaca Beku</h2>
    <p visual="text:white">Kesan glassmorphism yang cantik</p>
  </div>
</div>
```

## Kecerahan Latar Belakang

```html
<div visual="backdrop-brightness:dim">...</div>     <!-- 50% kecerahan -->
<div visual="backdrop-brightness:dark">...</div>    <!-- 75% kecerahan -->
<div visual="backdrop-brightness:normal">...</div>  <!-- 100% kecerahan -->
<div visual="backdrop-brightness:bright">...</div>  <!-- 125% kecerahan -->
<div visual="backdrop-brightness:vivid">...</div>   <!-- 150% kecerahan -->
```

## Kontras Latar Belakang

```html
<div visual="backdrop-contrast:low">...</div>      <!-- 50% kontras -->
<div visual="backdrop-contrast:reduced">...</div>  <!-- 75% kontras -->
<div visual="backdrop-contrast:normal">...</div>   <!-- 100% kontras -->
<div visual="backdrop-contrast:high">...</div>     <!-- 125% kontras -->
<div visual="backdrop-contrast:max">...</div>      <!-- 150% kontras -->
```

## Skala Kelabu Latar Belakang

```html
<div visual="backdrop-grayscale:none">...</div>     <!-- Warna penuh -->
<div visual="backdrop-grayscale:partial">...</div>  <!-- 50% kelabu -->
<div visual="backdrop-grayscale:full">...</div>     <!-- Kelabu penuh -->
```

## Kelegapan Latar Belakang

```html
<div visual="backdrop-opacity:invisible">...</div>  <!-- 0% kelegapan -->
<div visual="backdrop-opacity:faint">...</div>      <!-- 25% kelegapan -->
<div visual="backdrop-opacity:half">...</div>       <!-- 50% kelegapan -->
<div visual="backdrop-opacity:visible">...</div>    <!-- 75% kelegapan -->
<div visual="backdrop-opacity:solid">...</div>      <!-- 100% kelegapan -->
```

## Tepu Latar Belakang

```html
<div visual="backdrop-saturate:none">...</div>    <!-- Tiada tepu -->
<div visual="backdrop-saturate:low">...</div>     <!-- 50% tepu -->
<div visual="backdrop-saturate:normal">...</div>  <!-- 100% tepu -->
<div visual="backdrop-saturate:high">...</div>    <!-- 150% tepu -->
<div visual="backdrop-saturate:vivid">...</div>   <!-- 200% tepu -->
```

## Rujukan

### Skala Kata Sifat Semula Jadi

| Skala | Kata |
|-------|------|
| Kabur | `none`, `tiny`, `small`, `medium`, `big`, `giant`, `vast` |
| Kecerahan | `dim`, `dark`, `normal`, `bright`, `vivid` |
| Kontras | `low`, `reduced`, `normal`, `high`, `max` |
| Kelegapan | `invisible`, `faint`, `half`, `visible`, `solid` |
| Tepu | `none`, `low`, `normal`, `high`, `vivid` |
| Kelabu/Sepia/Sonsang | `none`, `partial`, `full` |
