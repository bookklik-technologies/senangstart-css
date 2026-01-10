# Saiz Latar Belakang

Mengawal saiz imej latar belakang.

## Sintaks
```
visual="bg-size:[nilai]"
```

## Nilai

| Property | Output CSS |
|----------|------------|
| `bg-size:auto` | `background-size: auto` |
| `bg-size:cover` | `background-size: cover` |
| `bg-size:contain` | `background-size: contain` |
| `bg-size:[100px_100px]` | `background-size: 100px 100px` |

## Contoh

```html
<div visual="bg-image:[hero.jpg] bg-size:cover">Tutup seluruh bekas (container)</div>
<div visual="bg-image:[logo.png] bg-size:[200px_auto]">Saiz tersuai</div>
```
