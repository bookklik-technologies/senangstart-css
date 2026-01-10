# Penapis (Filter)

Gunakan kesan penapis visual pada elemen menggunakan utiliti berasaskan kata sifat semula jadi.

## Kabur (Blur)

Gunakan kesan kabur pada elemen.

```html
<img visual="blur:none" />    <!-- Tiada kabur -->
<img visual="blur:tiny" />    <!-- 2px kabur -->
<img visual="blur:small" />   <!-- 4px kabur -->
<img visual="blur:medium" />  <!-- 8px kabur -->
<img visual="blur:big" />     <!-- 12px kabur -->
<img visual="blur:giant" />   <!-- 24px kabur -->
<img visual="blur:vast" />    <!-- 48px kabur -->
```

### Nilai Arbitrari

```html
<img visual="blur:[20px]" />
```

## Kecerahan (Brightness)

Laras kecerahan elemen.

```html
<img visual="brightness:dim" />     <!-- 50% kecerahan -->
<img visual="brightness:dark" />    <!-- 75% kecerahan -->
<img visual="brightness:normal" />  <!-- 100% kecerahan -->
<img visual="brightness:bright" />  <!-- 125% kecerahan -->
<img visual="brightness:vivid" />   <!-- 150% kecerahan -->
```

## Kontras (Contrast)

Laras kontras elemen.

```html
<img visual="contrast:low" />      <!-- 50% kontras -->
<img visual="contrast:reduced" />  <!-- 75% kontras -->
<img visual="contrast:normal" />   <!-- 100% kontras -->
<img visual="contrast:high" />     <!-- 125% kontras -->
<img visual="contrast:max" />      <!-- 150% kontras -->
```

## Bayang Jatuh (Drop Shadow)

Tambah kesan bayang jatuh pada elemen.

```html
<div visual="drop-shadow:none">...</div>    <!-- Tiada bayang -->
<div visual="drop-shadow:tiny">...</div>    <!-- Bayang minimal -->
<div visual="drop-shadow:small">...</div>   <!-- Bayang halus -->
<div visual="drop-shadow:medium">...</div>  <!-- Bayang standard -->
<div visual="drop-shadow:big">...</div>     <!-- Bayang besar -->
<div visual="drop-shadow:giant">...</div>   <!-- Bayang dramatik -->
```

## Skala Kelabu (Grayscale)

Tukar elemen kepada skala kelabu.

```html
<img visual="grayscale:none" />     <!-- Warna penuh -->
<img visual="grayscale:partial" />  <!-- 50% kelabu -->
<img visual="grayscale:full" />     <!-- Kelabu penuh -->
<img visual="grayscale" />          <!-- Kelabu penuh (lalai) -->
```

## Putaran Hue (Hue Rotate)

Putar hue elemen.

```html
<img visual="hue-rotate:15" />   <!-- 15 darjah -->
<img visual="hue-rotate:30" />   <!-- 30 darjah -->
<img visual="hue-rotate:60" />   <!-- 60 darjah -->
<img visual="hue-rotate:90" />   <!-- 90 darjah -->
<img visual="hue-rotate:180" />  <!-- 180 darjah -->
```

## Sonsang (Invert)

Sonsangkan warna elemen.

```html
<img visual="invert:none" />     <!-- Tiada sonsangan -->
<img visual="invert:partial" />  <!-- 50% sonsang -->
<img visual="invert:full" />     <!-- Sonsang penuh -->
<img visual="invert" />          <!-- Sonsang penuh (lalai) -->
```

## Tepu (Saturate)

Laras ketepuan elemen.

```html
<img visual="saturate:none" />    <!-- Tiada tepu (kelabu) -->
<img visual="saturate:low" />     <!-- 50% tepu -->
<img visual="saturate:normal" />  <!-- 100% tepu -->
<img visual="saturate:high" />    <!-- 150% tepu -->
<img visual="saturate:vivid" />   <!-- 200% tepu -->
```

## Sepia

Gunakan ton sepia pada elemen.

```html
<img visual="sepia:none" />     <!-- Tiada sepia -->
<img visual="sepia:partial" />  <!-- 50% sepia -->
<img visual="sepia:full" />     <!-- Sepia penuh -->
<img visual="sepia" />          <!-- Sepia penuh (lalai) -->
```

## Rujukan

### Skala Kata Sifat Semula Jadi

| Skala | Kata |
|-------|------|
| Kabur | `none`, `tiny`, `small`, `medium`, `big`, `giant`, `vast` |
| Kecerahan | `dim`, `dark`, `normal`, `bright`, `vivid` |
| Kontras | `low`, `reduced`, `normal`, `high`, `max` |
| Bayang Jatuh | `none`, `tiny`, `small`, `medium`, `big`, `giant` |
| Tepu | `none`, `low`, `normal`, `high`, `vivid` |
| Kelabu/Sepia/Sonsang | `none`, `partial`, `full` |
