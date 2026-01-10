# Padding

Mengawal jarak dalaman dengan atribut `space`.

## Sifat

| Property | Output CSS |
|----------|------------|
| `p` | `padding` (semua sisi) |
| `p-t` | `padding-top` |
| `p-r` | `padding-right` |
| `p-b` | `padding-bottom` |
| `p-l` | `padding-left` |
| `p-x` | `padding-left` + `padding-right` |
| `p-y` | `padding-top` + `padding-bottom` |

## Nilai Skala

| Kata Kunci | Nilai |
|------------|-------|
| `none` | 0px |
| `tiny` | 4px |
| `small` | 8px |
| `medium` | 16px |
| `big` | 32px |
| `giant` | 64px |
| `vast` | 128px |

## Contoh

```html
<!-- Semua sisi -->
<div space="p:medium">Padding semua sisi</div>

<!-- Horizontal dan menegak -->
<div space="p-x:big p-y:small">Horizontal/menegak</div>

<!-- Sisi individu -->
<div space="p-t:tiny p-b:giant">Atas dan bawah</div>

<!-- Nilai arbitrari -->
<div space="p:[20px_40px]">20px menegak, 40px horizontal</div>
```

## Responsif

```html
<section space="p:small tab:p:medium lap:p:big desk:p:giant">
  Padding yang membesar dengan saiz skrin
</section>
```
