# Imej Latar Belakang

Mengawal imej latar belakang dengan atribut `visual`.

## Sintaks
```
visual="bg-image:[url]"
```

## Nilai

| Property | Output CSS |
|----------|------------|
| `bg-image:[image.jpg]` | `background-image: url(image.jpg)` |
| `bg-image:[/path/to/image.png]` | `background-image: url(/path/to/image.png)` |

## Contoh

```html
<div visual="bg-image:[hero.jpg]">Dengan imej latar belakang</div>
<div visual="bg-image:[https://picsum.photos/400/200]">Imej luaran</div>
```
