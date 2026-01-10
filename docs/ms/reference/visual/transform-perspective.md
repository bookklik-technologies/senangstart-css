# Perspektif

Mengawal jarak perspektif untuk transformasi 3D menggunakan adjektif semula jadi.

## Sintaks
```
visual="perspective:none | perspective:small | perspective:medium | perspective:big | perspective:giant | perspective:vast"
```

## Nilai

| Nilai | Jarak | Kesan |
|-------|-------|-------|
| `perspective:none` | - | Tiada perspektif 3D |
| `perspective:small` | 250px | Kesan 3D sangat dramatik |
| `perspective:medium` | 500px | **Lalai**, 3D seimbang |
| `perspective:big` | 750px | Kesan 3D halus |
| `perspective:giant` | 1000px | 3D sangat halus |
| `perspective:vast` | 1500px | Penampilan hampir rata |

## Contoh

```html
<div visual="perspective:none">...</div>    <!-- Tiada perspektif -->
<div visual="perspective:small">...</div>   <!-- 250px - 3D Dramatik -->
<div visual="perspective:medium">...</div>  <!-- 500px - 3D Standard -->
<div visual="perspective:big">...</div>     <!-- 750px - 3D Halus -->
<div visual="perspective:giant">...</div>   <!-- 1000px - Sangat halus -->
<div visual="perspective:vast">...</div>    <!-- 1500px - Hampir rata -->
```

## Nilai Sewenang-Wenang

```html
<div visual="perspective:[800px]">...</div>
```
