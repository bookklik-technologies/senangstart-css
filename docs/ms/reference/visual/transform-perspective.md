# Perspektif

Kawal jarak perspektif untuk transform 3D.

## Sintaks
```
visual="perspective:none | perspective:small | perspective:medium | perspective:big | perspective:giant | perspective:vast"
```

## Nilai

| Nilai | Jarak | Kesan |
|-------|-------|-------|
| `perspective:none` | - | Tiada perspektif 3D |
| `perspective:small` | 250px | Kesan 3D dramatik |
| `perspective:medium` | 500px | **Lalai**, seimbang |
| `perspective:big` | 750px | Kesan 3D halus |
| `perspective:giant` | 1000px | Sangat halus |
| `perspective:vast` | 1500px | Hampir rata |

## Contoh

```html
<div visual="perspective:medium">...</div>  <!-- 500px -->
<div visual="perspective:small">...</div>   <!-- 250px dramatik -->
```

## Nilai Arbitrari

```html
<div visual="perspective:[800px]">...</div>
```
