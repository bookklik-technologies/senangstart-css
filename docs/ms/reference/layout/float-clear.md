# Float & Clear

Mengawal kelakuan pengapungan dan pembersihan dengan atribut `layout`.

## Sintaks
```
layout="float-[value]"
layout="clear-[value]"
```

## Nilai Float

| Nilai | Output CSS |
|-------|------------|
| `float-left` | `float: left` |
| `float-right` | `float: right` |
| `float-none` | `float: none` |

## Nilai Clear

| Nilai | Output CSS |
|-------|------------|
| `clear-left` | `clear: left` |
| `clear-right` | `clear: right` |
| `clear-both` | `clear: both` |

## Contoh

```html
<img layout="float-left" space="m-r:medium" src="image.jpg">
<p>Teks membungkus di sekeliling imej yang terapung...</p>
<div layout="clear-both"></div>

<img layout="float-right" space="m-l:medium" src="image.jpg">
<p>Teks membungkus di sebelah kiri...</p>
```

## Nota

Untuk kebanyakan susun atur moden, flexbox atau grid lebih diutamakan daripada float. Gunakan float terutamanya untuk membungkus teks di sekeliling imej.
