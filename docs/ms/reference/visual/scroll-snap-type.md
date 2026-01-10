# Jenis Snap Skrol

Mengawal kelakuan snap skrol pada bekas dengan atribut `visual`.

## Sintaks
```
visual="snap:[nilai]"
```

## Nilai

| Nilai | Output CSS |
|-------|------------|
| `snap:none` | `scroll-snap-type: none` |
| `snap:x` | `scroll-snap-type: x mandatory` |
| `snap:x-proximity` | `scroll-snap-type: x proximity` |
| `snap:y` | `scroll-snap-type: y mandatory` |
| `snap:y-proximity` | `scroll-snap-type: y proximity` |
| `snap:both` | `scroll-snap-type: both mandatory` |
| `snap:both-proximity` | `scroll-snap-type: both proximity` |

## Contoh

```html
<!-- Snap skrol mendatar -->
<div visual="snap:x" layout="flex overflow-x:auto">
  <div visual="snap-align:start" space="w:[100vw]">Halaman 1</div>
  <div visual="snap-align:start" space="w:[100vw]">Halaman 2</div>
</div>

<!-- Snap skrol menegak -->
<div visual="snap:y" space="h:[400px]" layout="overflow-y:auto">
  <section visual="snap-align:start" space="h:[400px]">Seksyen 1</section>
  <section visual="snap-align:start" space="h:[400px]">Seksyen 2</section>
</div>
```

## Nota

- **mandatory**: Sentiasa snap ke titik snap selepas skrol
- **proximity**: Hanya snap apabila skrol berakhir dekat titik snap
