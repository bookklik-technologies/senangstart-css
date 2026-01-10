# Flex Wrap

Mengawal sama ada item flex membalut dengan atribut `layout`.

## Nilai

| Nilai | Output CSS |
|-------|------------|
| `wrap` | `flex-wrap: wrap` |
| `nowrap` | `flex-wrap: nowrap` |
| `wrap-reverse` | `flex-wrap: wrap-reverse` |

## Contoh

```html
<div layout="flex wrap">Item membalut ke baris baharu</div>
<div layout="flex nowrap">Item kekal dalam satu baris</div>
<div layout="flex wrap-reverse">Balut dalam urutan terbalik</div>
```

## Responsif

```html
<!-- Tiada balutan di mudah alih, balut di tablet+ -->
<div layout="flex nowrap tab:wrap">
  Tingkah laku pembalutan fleksibel
</div>
```
