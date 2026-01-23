# Rujukan Space

Atribut `space` mengawal saiz dan jarak.

## Sintaksis

```
[breakpoint]:[property]:[scale]
```

**Titik Henti:** `mob:`, `tab:`, `lap:`, `desk:`

**Nilai skala:** `none`, `thin`, `regular`, `thick`, `tiny`, `small`, `medium`, `large`, `big`, `giant`, `vast` (dan pengganda numerik)

## Jarak

- [Padding](./space/padding) - Jarak dalaman (`p`, `p-t`, `p-r`, `p-b`, `p-l`, `p-x`, `p-y`)
- [Margin](./space/margin) - Jarak luar (`m`, `m-t`, `m-r`, `m-b`, `m-l`, `m-x`, `m-y`)
- [Gap](./space/gap) - Jarak flex/grid (`g`, `g-x`, `g-y`)

## Dimensi

- [Lebar](./space/width) - Lebar elemen (`w`, `min-w`, `max-w`)
- [Tinggi](./space/height) - Tinggi elemen (`h`, `min-h`, `max-h`)

## Rujukan

- [Nilai Arbitrari](./space/arbitrary-values) - Sintaks escape hatch `[value]`
- [Rujukan Skala](./space/scale-reference) - Nilai kata kunci skala

## Contoh Pantas

```html
<div space="p:medium m-b:big w:[100%] max-w:[800px]">
  Kad dengan padding sederhana, margin bawah besar, dan lebar terhad
</div>
```
