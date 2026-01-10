# Transform

Gunakan transformasi 2D dan 3D pada elemen termasuk skala, putar, alih, dan senget.

## Skala (Scale)

Ubah saiz elemen secara berkadar.

```html
<img visual="scale:0" />   <!-- scale(0) - tidak kelihatan -->
<img visual="scale:50" />  <!-- scale(0.5) - separuh saiz -->
<img visual="scale:75" />  <!-- scale(0.75) -->
<img visual="scale:90" />  <!-- scale(0.9) -->
<img visual="scale:95" />  <!-- scale(0.95) -->
<img visual="scale:100" /> <!-- scale(1) - normal -->
<img visual="scale:105" /> <!-- scale(1.05) -->
<img visual="scale:110" /> <!-- scale(1.1) -->
<img visual="scale:125" /> <!-- scale(1.25) -->
<img visual="scale:150" /> <!-- scale(1.5) -->
```

### Skala X / Y Secara Berasingan

```html
<img visual="scale-x:50" />  <!-- scaleX(0.5) -->
<img visual="scale-y:150" /> <!-- scaleY(1.5) -->
```

### Kesan Skala Hover

```html
<img 
  visual="transition scale:100 hover:scale:110" 
  src="..." 
/>
```

## Putar (Rotate)

Putar elemen mengikut arah jam atau lawan arah jam.

```html
<img visual="rotate:0" />   <!-- Tiada putaran -->
<img visual="rotate:1" />   <!-- 1 darjah -->
<img visual="rotate:2" />   <!-- 2 darjah -->
<img visual="rotate:3" />   <!-- 3 darjah -->
<img visual="rotate:6" />   <!-- 6 darjah -->
<img visual="rotate:12" />  <!-- 12 darjah -->
<img visual="rotate:45" />  <!-- 45 darjah -->
<img visual="rotate:90" />  <!-- 90 darjah -->
<img visual="rotate:180" /> <!-- 180 darjah -->
```

### Putaran Negatif

Gunakan nilai negatif dengan sintaks arbitrari:

```html
<img visual="rotate:[-45deg]" /> <!-- -45 darjah -->
```

### Nilai Arbitrari

```html
<img visual="rotate:[17deg]" />
<img visual="rotate:[0.5turn]" />
```

## Alih (Translate)

Alih elemen secara mendatar atau menegak.

### Menggunakan Skala Jarak

```html
<div visual="translate-x:small" />   <!-- translateX(var(--s-small)) -->
<div visual="translate-x:medium" />  <!-- translateX(var(--s-medium)) -->
<div visual="translate-y:big" />     <!-- translateY(var(--s-big)) -->
```

### Menggunakan Pecahan

```html
<div visual="translate-x:1/2" />   <!-- translateX(50%) -->
<div visual="translate-y:1/4" />   <!-- translateY(25%) -->
<div visual="translate-x:full" />  <!-- translateX(100%) -->
```

### Alihan Negatif

```html
<div visual="-translate-x:medium" />  <!-- translateX(calc(var(--s-medium) * -1)) -->
<div visual="-translate-y:1/2" />     <!-- translateY(-50%) -->
<div visual="-translate-x:full" />    <!-- translateX(-100%) -->
```

### Nilai Arbitrari

```html
<div visual="translate-x:[100px]" />
<div visual="translate-y:[-50%]" />
```

## Senget (Skew)

Condongkan elemen sepanjang paksi X atau Y.

```html
<div visual="skew-x:0" />  <!-- skewX(0deg) -->
<div visual="skew-x:1" />  <!-- skewX(1deg) -->
<div visual="skew-x:2" />  <!-- skewX(2deg) -->
<div visual="skew-x:3" />  <!-- skewX(3deg) -->
<div visual="skew-x:6" />  <!-- skewX(6deg) -->
<div visual="skew-x:12" /> <!-- skewX(12deg) -->

<div visual="skew-y:3" />  <!-- skewY(3deg) -->
<div visual="skew-y:6" />  <!-- skewY(6deg) -->
```

### Senget Negatif

```html
<div visual="-skew-x:6" />  <!-- skewX(-6deg) -->
<div visual="-skew-y:12" /> <!-- skewY(-12deg) -->
```

## Asal Transform (Transform Origin)

Tetapkan titik asal untuk transformasi.

```html
<img visual="origin:center" />       <!-- tengah (lalai) -->
<img visual="origin:top" />          <!-- atas -->
<img visual="origin:top-right" />    <!-- atas kanan -->
<img visual="origin:right" />        <!-- kanan -->
<img visual="origin:bottom-right" /> <!-- bawah kanan -->
<img visual="origin:bottom" />       <!-- bawah -->
<img visual="origin:bottom-left" />  <!-- bawah kiri -->
<img visual="origin:left" />         <!-- kiri -->
<img visual="origin:top-left" />     <!-- atas kiri -->
```

### Nilai Arbitrari

```html
<img visual="origin:[33%_75%]" />
```

## Menggabungkan Transform

Apabila menggunakan pelbagai transform, gabungkan dengan keadaan hover:

```html
<div 
  visual="
    transition
    scale:100 
    rotate:0
    hover:scale:110 
    hover:rotate:3
  "
>
  Hover untuk transform
</div>
```

## Rujukan

| Token | Output CSS |
|-------|-----------|
| `scale:{n}` | `transform: scale({n/100});` |
| `scale-x:{n}` | `transform: scaleX({n/100});` |
| `scale-y:{n}` | `transform: scaleY({n/100});` |
| `rotate:{darjah}` | `transform: rotate({darjah}deg);` |
| `translate-x:{nilai}` | `transform: translateX({nilai});` |
| `translate-y:{nilai}` | `transform: translateY({nilai});` |
| `-translate-x:{nilai}` | `transform: translateX(-{nilai});` |
| `-translate-y:{nilai}` | `transform: translateY(-{nilai});` |
| `skew-x:{darjah}` | `transform: skewX({darjah}deg);` |
| `skew-y:{darjah}` | `transform: skewY({darjah}deg);` |
| `-skew-x:{darjah}` | `transform: skewX(-{darjah}deg);` |
| `-skew-y:{darjah}` | `transform: skewY(-{darjah}deg);` |
| `origin:{kedudukan}` | `transform-origin: {kedudukan};` |
