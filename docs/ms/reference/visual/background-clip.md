# Klip Latar Belakang

Mengawal bagaimana warna atau imej latar belakang diklip pada kotak elemen.

## Sintaks
```
visual="bg-clip:[nilai]"
```

## Nilai

| Property | Output CSS |
|----------|------------|
| `bg-clip:border` | `background-clip: border-box` |
| `bg-clip:padding` | `background-clip: padding-box` |
| `bg-clip:content` | `background-clip: content-box` |
| `bg-clip:text` | `background-clip: text` |

## Contoh

```html
<div visual="bg:primary bg-clip:text text:transparent">Teks dengan latar belakang imej</div>
```
