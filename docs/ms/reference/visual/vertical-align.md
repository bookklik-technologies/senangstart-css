# Vertical Align

Mengawal penjajaran menegak elemen inline dengan atribut `visual`.

## Sintaks
```
visual="vertical-align:baseline | vertical-align:top | vertical-align:middle | vertical-align:bottom"
```

## Nilai

| Nilai | Output CSS |
|-------|------------|
| `vertical-align:baseline` | `vertical-align: baseline` |
| `vertical-align:top` | `vertical-align: top` |
| `vertical-align:middle` | `vertical-align: middle` |
| `vertical-align:bottom` | `vertical-align: bottom` |
| `vertical-align:text-top` | `vertical-align: text-top` |
| `vertical-align:text-bottom` | `vertical-align: text-bottom` |

## Contoh

```html
<img visual="vertical-align:middle" src="icon.png"> Teks diselaraskan

<span visual="vertical-align:top">Diselaraskan ke atas</span>
<span visual="vertical-align:bottom">Diselaraskan ke bawah</span>
```

## Corak Biasa

```html
<!-- Ikon diselaraskan dengan teks -->
<span>
  <img visual="vertical-align:middle" src="icon.svg" space="w:[16px] h:[16px]">
  Teks di sebelah ikon
</span>
```
