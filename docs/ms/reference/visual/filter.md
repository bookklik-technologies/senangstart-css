# Penapis (Filter)

Gunakan kesan visual seperti kabur, skala kelabu dan pelarasan warna pada elemen.

## Kabur (Blur)

Tambah kesan kabur pada elemen.

```html
<img visual="blur-sm" src="..." />   <!-- 4px kabur -->
<img visual="blur" src="..." />      <!-- 8px kabur (lalai) -->
<img visual="blur-md" src="..." />   <!-- 12px kabur -->
<img visual="blur-lg" src="..." />   <!-- 16px kabur -->
<img visual="blur-xl" src="..." />   <!-- 24px kabur -->
<img visual="blur-2xl" src="..." />  <!-- 40px kabur -->
<img visual="blur-3xl" src="..." />  <!-- 64px kabur -->
<img visual="blur-none" src="..." /> <!-- Buang kabur -->
```

### Nilai Arbitrari

```html
<img visual="blur-[2px]" src="..." />
```

## Kecerahan (Brightness)

Laraskan kecerahan elemen. Nilai dalam peratusan (100 = normal).

```html
<img visual="brightness-50" src="..." />  <!-- 50% kecerahan (gelap) -->
<img visual="brightness-75" src="..." />  <!-- 75% kecerahan -->
<img visual="brightness-100" src="..." /> <!-- Normal -->
<img visual="brightness-125" src="..." /> <!-- 125% kecerahan -->
<img visual="brightness-150" src="..." /> <!-- 150% kecerahan (terang) -->
<img visual="brightness-200" src="..." /> <!-- 200% kecerahan -->
```

## Kontras (Contrast)

Laraskan kontras elemen. Nilai dalam peratusan (100 = normal).

```html
<img visual="contrast-50" src="..." />  <!-- 50% kontras (kurang kontras) -->
<img visual="contrast-75" src="..." />  <!-- 75% kontras -->
<img visual="contrast-100" src="..." /> <!-- Normal -->
<img visual="contrast-125" src="..." /> <!-- 125% kontras -->
<img visual="contrast-150" src="..." /> <!-- 150% kontras (lebih kontras) -->
<img visual="contrast-200" src="..." /> <!-- 200% kontras -->
```

## Bayang Jatuh (Drop Shadow)

Tambah kesan bayang jatuh pada elemen.

```html
<img visual="drop-shadow-sm" src="..." />  <!-- Bayang kecil -->
<img visual="drop-shadow" src="..." />     <!-- Bayang lalai -->
<img visual="drop-shadow-md" src="..." />  <!-- Bayang sederhana -->
<img visual="drop-shadow-lg" src="..." />  <!-- Bayang besar -->
<img visual="drop-shadow-xl" src="..." />  <!-- Bayang ekstra besar -->
<img visual="drop-shadow-2xl" src="..." /> <!-- Bayang 2XL -->
<img visual="drop-shadow-none" src="..." /><!-- Buang bayang -->
```

## Skala Kelabu (Grayscale)

Tukar elemen kepada skala kelabu.

```html
<img visual="grayscale" src="..." />    <!-- Skala kelabu penuh (100%) -->
<img visual="grayscale-0" src="..." />  <!-- Tiada skala kelabu (berwarna) -->
<img visual="grayscale-50" src="..." /> <!-- 50% skala kelabu -->
```

## Putaran Hue (Hue Rotate)

Putar hue warna elemen.

```html
<img visual="hue-rotate-0" src="..." />   <!-- Tiada putaran -->
<img visual="hue-rotate-15" src="..." />  <!-- 15 darjah -->
<img visual="hue-rotate-30" src="..." />  <!-- 30 darjah -->
<img visual="hue-rotate-60" src="..." />  <!-- 60 darjah -->
<img visual="hue-rotate-90" src="..." />  <!-- 90 darjah -->
<img visual="hue-rotate-180" src="..." /> <!-- 180 darjah -->
```

## Songsang (Invert)

Songsangkan warna elemen.

```html
<img visual="invert" src="..." />    <!-- Songsang penuh (100%) -->
<img visual="invert-0" src="..." />  <!-- Tiada songsang -->
<img visual="invert-50" src="..." /> <!-- 50% songsang -->
```

## Ketepuan (Saturate)

Laraskan ketepuan warna. Nilai dalam peratusan (100 = normal).

```html
<img visual="saturate-0" src="..." />   <!-- Tiada ketepuan (kelabu) -->
<img visual="saturate-50" src="..." />  <!-- 50% ketepuan -->
<img visual="saturate-100" src="..." /> <!-- Normal -->
<img visual="saturate-150" src="..." /> <!-- 150% ketepuan -->
<img visual="saturate-200" src="..." /> <!-- 200% ketepuan (terang) -->
```

## Sepia

Gunakan kesan nada sepia.

```html
<img visual="sepia" src="..." />    <!-- Sepia penuh (100%) -->
<img visual="sepia-0" src="..." />  <!-- Tiada sepia -->
<img visual="sepia-50" src="..." /> <!-- 50% sepia -->
```

## Gabungan dengan Keadaan Hover

```html
<img 
  visual="grayscale hover:grayscale-0" 
  src="..." 
/>
```

## Rujukan

| Token | Output CSS |
|-------|-----------|
| `blur-none` | `filter: blur(0);` |
| `blur-sm` | `filter: blur(4px);` |
| `blur` | `filter: blur(8px);` |
| `blur-md` | `filter: blur(12px);` |
| `blur-lg` | `filter: blur(16px);` |
| `blur-xl` | `filter: blur(24px);` |
| `blur-2xl` | `filter: blur(40px);` |
| `blur-3xl` | `filter: blur(64px);` |
| `brightness-{nilai}` | `filter: brightness({nilai/100});` |
| `contrast-{nilai}` | `filter: contrast({nilai/100});` |
| `drop-shadow-{saiz}` | `filter: drop-shadow(...);` |
| `grayscale` | `filter: grayscale(100%);` |
| `grayscale-{nilai}` | `filter: grayscale({nilai}%);` |
| `hue-rotate-{darjah}` | `filter: hue-rotate({darjah}deg);` |
| `invert` | `filter: invert(100%);` |
| `invert-{nilai}` | `filter: invert({nilai}%);` |
| `saturate-{nilai}` | `filter: saturate({nilai/100});` |
| `sepia` | `filter: sepia(100%);` |
| `sepia-{nilai}` | `filter: sepia({nilai}%);` |
