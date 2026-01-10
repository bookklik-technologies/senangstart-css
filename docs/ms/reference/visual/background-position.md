# Kedudukan Latar Belakang

Mengawal kedudukan imej latar belakang.

## Sintaks
```
visual="bg-position:[nilai]"
```

## Nilai

| Property | Output CSS |
|----------|------------|
| `bg-position:center` | `background-position: center` |
| `bg-position:top` | `background-position: top` |
| `bg-position:bottom` | `background-position: bottom` |
| `bg-position:left` | `background-position: left` |
| `bg-position:right` | `background-position: right` |
| `bg-position:top-left` | `background-position: top left` |
| `bg-position:top-right` | `background-position: top right` |
| `bg-position:bottom-left` | `background-position: bottom left` |
| `bg-position:bottom-right` | `background-position: bottom right` |
| `bg-position:[50%_50%]` | `background-position: 50% 50%` |

## Contoh

```html
<div visual="bg-image:[hero.jpg] bg-position:center">Imej di tengah</div>
<div visual="bg-image:[pattern.png] bg-position:[25%_75%]">Kedudukan tersuai</div>
```
