# Asal Latar Belakang (Origin)

Mengawal dari mana imej latar belakang diletakkan dalam kotak elemen.

## Sintaks
```
visual="bg-origin:[nilai]"
```

## Nilai

| Property | Output CSS |
|----------|------------|
| `bg-origin:border` | `background-origin: border-box` |
| `bg-origin:padding` | `background-origin: padding-box` |
| `bg-origin:content` | `background-origin: content-box` |

## Contoh

```html
<div visual="bg-image:[icon.png] bg-origin:content">Diletakkan dalam kandungan</div>
```
