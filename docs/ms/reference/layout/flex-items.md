# Sifat Item Flex

Mengawal cara item flex membesar, mengecil, dan bersaiz dengan atribut `layout`.

## Sintaks
```
layout="grow | grow-0 | shrink | shrink-0"
layout="flex:[value]"
layout="basis:[value]"
```

## Grow & Shrink

| Nilai | Output CSS |
|-------|------------|
| `grow` | `flex-grow: 1` |
| `grow-0` | `flex-grow: 0` |
| `shrink` | `flex-shrink: 1` |
| `shrink-0` | `flex-shrink: 0` |

## Flex Shorthand

| Nilai | Output CSS |
|-------|------------|
| `flex:1` | `flex: 1 1 0%` |
| `flex:auto` | `flex: 1 1 auto` |
| `flex:initial` | `flex: 0 1 auto` |
| `flex:none` | `flex: none` |

## Flex Basis

| Nilai | Output CSS |
|-------|------------|
| `basis:small` | `flex-basis: var(--s-small)` |
| `basis:[200px]` | `flex-basis: 200px` |

## Contoh

```html
<div layout="flex">
  <div layout="grow">Mengambil ruang baki</div>
  <div layout="shrink-0">Tidak akan mengecil</div>
</div>

<div layout="flex">
  <div layout="flex:1">Lebar sama</div>
  <div layout="flex:1">Lebar sama</div>
</div>

<div layout="flex">
  <div layout="basis:[200px] shrink-0">Tetap 200px</div>
  <div layout="grow">Mengambil selebihnya</div>
</div>
```
