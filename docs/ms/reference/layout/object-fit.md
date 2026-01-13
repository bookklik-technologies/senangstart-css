# Object Fit

Kawal bagaimana kandungan media muat dalam bekasnya

## Sintaks
```
layout="object:[value]"
```

## Nilai

| Nilai | CSS Output | Huraian |
|-------|------------|-------------|
| `contain` | `object-fit: contain` | Skala untuk muat, kekalkan nisbah |
| `cover` | `object-fit: cover` | Tutup bekas, mungkin dipotong |
| `fill` | `object-fit: fill` | Regang untuk mengisi |
| `none` | `object-fit: none` | Tiada penskalaan |
| `scale-down` | `object-fit: scale-down` | Lebih kecil antara tiada atau kandung |

## Contoh

```html
<img layout="object:cover">Cover image</img>
```
