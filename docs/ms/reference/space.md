# Rujukan space

Atribusi `space` mengawal saiz dan jarak.

## Sintaksis

```
[breakpoint]:[property]:[scale]
```

**Titik Henti:** `mob:`, `tab:`, `lap:`, `desk:`

**Nilai skala:** `none`, `tiny`, `small`, `medium`, `big`, `giant`, `vast`

## Padding

| Property | Output CSS |
|----------|------------|
| `p` | `padding` (semua sisi) |
| `p-t` | `padding-top` |
| `p-r` | `padding-right` |
| `p-b` | `padding-bottom` |
| `p-l` | `padding-left` |
| `p-x` | `padding-left` + `padding-right` |
| `p-y` | `padding-top` + `padding-bottom` |

```html
<div space="p:medium">Semua sisi</div>
<div space="p-x:big p-y:small">Horizontal/menegak</div>
<div space="p-t:tiny p-b:giant">Atas dan bawah</div>
```

## Margin

| Property | Output CSS |
|----------|------------|
| `m` | `margin` (semua sisi) |
| `m-t` | `margin-top` |
| `m-r` | `margin-right` |
| `m-b` | `margin-bottom` |
| `m-l` | `margin-left` |
| `m-x` | `margin-left` + `margin-right` |
| `m-y` | `margin-top` + `margin-bottom` |

```html
<div space="m:medium">Semua sisi</div>
<div space="m-b:big">Margin bawah</div>
<div space="m-x:auto">Tengah secara horizontal</div>
```

## Gap

| Property | Output CSS |
|----------|------------|
| `g` | `gap` (flex/grid) |
| `g-x` | `column-gap` |
| `g-y` | `row-gap` |

```html
<div layout="flex" space="g:small">Gap kecil</div>
<div layout="grid" space="g-x:big g-y:small">Gap berbeza</div>
```

## Saiz

| Property | Output CSS |
|----------|------------|
| `w` | `width` |
| `h` | `height` |
| `min-w` | `min-width` |
| `max-w` | `max-width` |
| `min-h` | `min-height` |
| `max-h` | `max-height` |

```html
<div space="w:[100%] h:[400px]">Saiz eksplisit</div>
<div space="max-w:[1200px]">Kontena max width</div>
<div space="min-h:[100vh]">Tinggi penuh viewport</div>
```

## Nilai Arbitrari (Escape Hatch)

Guna kurungan `[value]` untuk nilai spesifik:

```html
<div space="w:[350px]">350 piksel</div>
<div space="h:[50vh]">50% tinggi viewport</div>
<div space="p:[20px_40px]">20px menegak, 40px horizontal</div>
<div space="m-t:[5rem]">5rem margin atas</div>
```

## Contoh Responsif

```html
<!-- Padding progresif -->
<section space="p:small tab:p:medium lap:p:big desk:p:giant">
  Membesar dengan saiz skrin
</section>

<!-- Lebar responsif -->
<div space="w:[100%] tab:w:[50%] lap:w:[33%]">
  Penuh → separuh → satu pertiga
</div>

<!-- Gap responsif -->
<div layout="flex" space="g:small tab:g:medium lap:g:big">
  Gap yang membesar
</div>
```

## Rujukan Skala

| Kata Kunci | Nilai Lalai |
|------------|-------------|
| `none` | 0px |
| `tiny` | 4px |
| `small` | 8px |
| `medium` | 16px |
| `big` | 32px |
| `giant` | 64px |
| `vast` | 128px |
