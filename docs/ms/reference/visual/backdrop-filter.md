# Penapis Latar Belakang (Backdrop Filter)

Gunakan kesan visual pada kawasan di belakang elemen, mencipta kesan glassmorphism dan kaca beku.

## Kabur Latar Belakang (Backdrop Blur)

Gunakan kabur pada latar belakang (kandungan di belakang elemen).

```html
<div visual="backdrop-blur-sm bg-[rgba(255,255,255,0.5)]">...</div>   <!-- 4px kabur -->
<div visual="backdrop-blur bg-[rgba(255,255,255,0.5)]">...</div>      <!-- 8px kabur (lalai) -->
<div visual="backdrop-blur-md bg-[rgba(255,255,255,0.5)]">...</div>   <!-- 12px kabur -->
<div visual="backdrop-blur-lg bg-[rgba(255,255,255,0.5)]">...</div>   <!-- 16px kabur -->
<div visual="backdrop-blur-xl bg-[rgba(255,255,255,0.5)]">...</div>   <!-- 24px kabur -->
<div visual="backdrop-blur-2xl bg-[rgba(255,255,255,0.5)]">...</div>  <!-- 40px kabur -->
<div visual="backdrop-blur-3xl bg-[rgba(255,255,255,0.5)]">...</div>  <!-- 64px kabur -->
<div visual="backdrop-blur-none bg-[rgba(255,255,255,0.5)]">...</div> <!-- Buang kabur -->
```

::: tip Glassmorphism
Gunakan `backdrop-blur` dengan latar belakang semi-telus untuk kesan glassmorphism moden.
:::

## Kecerahan Latar Belakang (Backdrop Brightness)

Laraskan kecerahan latar belakang.

```html
<div visual="backdrop-brightness-50">...</div>  <!-- 50% kecerahan -->
<div visual="backdrop-brightness-75">...</div>  <!-- 75% kecerahan -->
<div visual="backdrop-brightness-100">...</div> <!-- Normal -->
<div visual="backdrop-brightness-125">...</div> <!-- 125% kecerahan -->
<div visual="backdrop-brightness-150">...</div> <!-- 150% kecerahan -->
```

## Kontras Latar Belakang (Backdrop Contrast)

Laraskan kontras latar belakang.

```html
<div visual="backdrop-contrast-50">...</div>  <!-- 50% kontras -->
<div visual="backdrop-contrast-75">...</div>  <!-- 75% kontras -->
<div visual="backdrop-contrast-100">...</div> <!-- Normal -->
<div visual="backdrop-contrast-125">...</div> <!-- 125% kontras -->
<div visual="backdrop-contrast-150">...</div> <!-- 150% kontras -->
```

## Skala Kelabu Latar Belakang (Backdrop Grayscale)

Tukar latar belakang kepada skala kelabu.

```html
<div visual="backdrop-grayscale">...</div>    <!-- Skala kelabu penuh -->
<div visual="backdrop-grayscale-0">...</div>  <!-- Tiada skala kelabu -->
<div visual="backdrop-grayscale-50">...</div> <!-- 50% skala kelabu -->
```

## Putaran Hue Latar Belakang (Backdrop Hue Rotate)

Putar hue warna latar belakang.

```html
<div visual="backdrop-hue-rotate-0">...</div>   <!-- Tiada putaran -->
<div visual="backdrop-hue-rotate-15">...</div>  <!-- 15 darjah -->
<div visual="backdrop-hue-rotate-30">...</div>  <!-- 30 darjah -->
<div visual="backdrop-hue-rotate-60">...</div>  <!-- 60 darjah -->
<div visual="backdrop-hue-rotate-90">...</div>  <!-- 90 darjah -->
<div visual="backdrop-hue-rotate-180">...</div> <!-- 180 darjah -->
```

## Songsang Latar Belakang (Backdrop Invert)

Songsangkan warna latar belakang.

```html
<div visual="backdrop-invert">...</div>    <!-- Songsang penuh -->
<div visual="backdrop-invert-0">...</div>  <!-- Tiada songsang -->
<div visual="backdrop-invert-50">...</div> <!-- 50% songsang -->
```

## Kelegapan Latar Belakang (Backdrop Opacity)

Laraskan kelegapan latar belakang.

```html
<div visual="backdrop-opacity-0">...</div>   <!-- Telus sepenuhnya -->
<div visual="backdrop-opacity-25">...</div>  <!-- 25% kelegapan -->
<div visual="backdrop-opacity-50">...</div>  <!-- 50% kelegapan -->
<div visual="backdrop-opacity-75">...</div>  <!-- 75% kelegapan -->
<div visual="backdrop-opacity-100">...</div> <!-- Legap sepenuhnya -->
```

## Ketepuan Latar Belakang (Backdrop Saturate)

Laraskan ketepuan latar belakang.

```html
<div visual="backdrop-saturate-0">...</div>   <!-- Tiada ketepuan -->
<div visual="backdrop-saturate-50">...</div>  <!-- 50% ketepuan -->
<div visual="backdrop-saturate-100">...</div> <!-- Normal -->
<div visual="backdrop-saturate-150">...</div> <!-- 150% ketepuan -->
<div visual="backdrop-saturate-200">...</div> <!-- 200% ketepuan -->
```

## Sepia Latar Belakang (Backdrop Sepia)

Gunakan nada sepia pada latar belakang.

```html
<div visual="backdrop-sepia">...</div>    <!-- Sepia penuh -->
<div visual="backdrop-sepia-0">...</div>  <!-- Tiada sepia -->
<div visual="backdrop-sepia-50">...</div> <!-- 50% sepia -->
```

## Contoh Glassmorphism

```html
<div 
  layout="relative" 
  space="p-8" 
  visual="bg-image-[url('background.jpg')] bg-size-cover"
>
  <div 
    layout="absolute inset-0" 
    visual="backdrop-blur-lg bg-[rgba(255,255,255,0.3)]"
  >
    <h2 visual="text-white font-bold">Kad Kaca Beku</h2>
    <p visual="text-white">Kandungan ini muncul di atas latar belakang kabur.</p>
  </div>
</div>
```

## Rujukan

| Token | Output CSS |
|-------|-----------|
| `backdrop-blur-none` | `backdrop-filter: blur(0);` |
| `backdrop-blur-sm` | `backdrop-filter: blur(4px);` |
| `backdrop-blur` | `backdrop-filter: blur(8px);` |
| `backdrop-blur-md` | `backdrop-filter: blur(12px);` |
| `backdrop-blur-lg` | `backdrop-filter: blur(16px);` |
| `backdrop-blur-xl` | `backdrop-filter: blur(24px);` |
| `backdrop-blur-2xl` | `backdrop-filter: blur(40px);` |
| `backdrop-blur-3xl` | `backdrop-filter: blur(64px);` |
| `backdrop-brightness-{nilai}` | `backdrop-filter: brightness({nilai/100});` |
| `backdrop-contrast-{nilai}` | `backdrop-filter: contrast({nilai/100});` |
| `backdrop-grayscale` | `backdrop-filter: grayscale(100%);` |
| `backdrop-grayscale-{nilai}` | `backdrop-filter: grayscale({nilai}%);` |
| `backdrop-hue-rotate-{darjah}` | `backdrop-filter: hue-rotate({darjah}deg);` |
| `backdrop-invert` | `backdrop-filter: invert(100%);` |
| `backdrop-invert-{nilai}` | `backdrop-filter: invert({nilai}%);` |
| `backdrop-opacity-{nilai}` | `backdrop-filter: opacity({nilai/100});` |
| `backdrop-saturate-{nilai}` | `backdrop-filter: saturate({nilai/100});` |
| `backdrop-sepia` | `backdrop-filter: sepia(100%);` |
| `backdrop-sepia-{nilai}` | `backdrop-filter: sepia({nilai}%);` |
