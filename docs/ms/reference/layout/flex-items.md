# Sifat Item Flex

Mengawal bagaimana item flex membesar, mengecil, dan bersaiz.

## Nilai

| Nilai | Output CSS |
|-------|------------|
| `grow` | `flex-grow: 1` |
| `grow-0` | `flex-grow: 0` |
| `shrink` | `flex-shrink: 1` |
| `shrink-0` | `flex-shrink: 0` |
| `flex:1` | `flex: 1 1 0%` |
| `flex:auto` | `flex: 1 1 auto` |
| `flex:none` | `flex: none` |

## Contoh

```html
<div layout="flex">
  <div layout="grow">Ambil ruang selebihnya</div>
  <div layout="shrink-0">Tidak mengecil</div>
</div>
```
