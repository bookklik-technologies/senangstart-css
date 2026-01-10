# Transform 3D

Utiliti lanjutan untuk transformasi 3D termasuk perspektif, keterlihatan belakang, dan gaya transform.

## Perspektif (Perspective)

Kawal jarak perspektif untuk transform 3D menggunakan kata sifat semula jadi.

```html
<div visual="perspective:none">...</div>    <!-- Tiada perspektif -->
<div visual="perspective:small">...</div>   <!-- 250px - 3D dramatik -->
<div visual="perspective:medium">...</div>  <!-- 500px - 3D standard -->
<div visual="perspective:big">...</div>     <!-- 750px - 3D halus -->
<div visual="perspective:giant">...</div>   <!-- 1000px - Sangat halus -->
<div visual="perspective:vast">...</div>    <!-- 1500px - Hampir rata -->
```

### Rujukan Skala Perspektif

| Kata | Jarak | Kesan |
|------|-------|-------|
| `none` | - | Tiada perspektif 3D |
| `small` | 250px | Kesan 3D sangat dramatik |
| `medium` | 500px | **Lalai**, 3D seimbang |
| `big` | 750px | Kesan 3D halus |
| `giant` | 1000px | 3D sangat halus |
| `vast` | 1500px | Paparan hampir rata |

### Nilai Arbitrari

```html
<div visual="perspective:[800px]">...</div>
```

## Asal Perspektif (Perspective Origin)

```html
<div visual="perspective-origin:center">...</div>       <!-- tengah (lalai) -->
<div visual="perspective-origin:top">...</div>          <!-- atas -->
<div visual="perspective-origin:top-right">...</div>    <!-- atas kanan -->
<div visual="perspective-origin:right">...</div>        <!-- kanan -->
<div visual="perspective-origin:bottom-right">...</div> <!-- bawah kanan -->
<div visual="perspective-origin:bottom">...</div>       <!-- bawah -->
<div visual="perspective-origin:bottom-left">...</div>  <!-- bawah kiri -->
<div visual="perspective-origin:left">...</div>         <!-- kiri -->
<div visual="perspective-origin:top-left">...</div>     <!-- atas kiri -->
```

## Gaya Transform (Transform Style)

```html
<!-- Anak diratakan pada satah ibu bapa -->
<div visual="transform-style:flat">
  <div visual="rotate:[60deg]">Diratakan</div>
</div>

<!-- Anak mengekalkan kedudukan 3D mereka -->
<div visual="transform-style:preserve-3d">
  <div visual="rotate:[60deg]">3D Dikekalkan</div>
</div>
```

## Keterlihatan Belakang (Backface Visibility)

```html
<div visual="backface:visible">...</div> <!-- Muka belakang kelihatan -->
<div visual="backface:hidden">...</div>  <!-- Muka belakang tersembunyi -->
```

### Contoh Kad Terbalik

```html
<div 
  layout="relative" 
  visual="perspective:medium" 
  space="w:[256px] h:[160px]"
>
  <div 
    layout="absolute inset:0" 
    visual="transition duration:slow transform-style:preserve-3d hover:rotate:[180deg]"
  >
    <!-- Depan -->
    <div 
      layout="absolute inset:0" 
      visual="backface:hidden bg:blue-500 rounded:big"
      space="p:medium"
    >
      Bahagian Depan
    </div>
    
    <!-- Belakang -->
    <div 
      layout="absolute inset:0" 
      visual="backface:hidden bg:green-500 rounded:big rotate:[180deg]"
      space="p:medium"
    >
      Bahagian Belakang
    </div>
  </div>
</div>
```

## Rujukan

| Token | Output CSS |
|-------|-----------|
| `perspective:none` | `perspective: none;` |
| `perspective:small` | `perspective: 250px;` |
| `perspective:medium` | `perspective: 500px;` |
| `perspective:big` | `perspective: 750px;` |
| `perspective:giant` | `perspective: 1000px;` |
| `perspective:vast` | `perspective: 1500px;` |
