# Transform Style

Mengawal sama ada elemen anak diposisikan dalam ruang 3D.

## Sintaks
```
visual="transform-style:flat | transform-style:preserve-3d"
```

## Nilai

| Nilai | Output CSS |
|-------|------------|
| `transform-style:flat` | `transform-style: flat` |
| `transform-style:preserve-3d` | `transform-style: preserve-3d` |

## Flat (Lalai)

Anak-anak diratakan ke satah induk.

```html
<div visual="transform-style:flat">
  <div visual="rotate:[60deg]">Diratakan</div>
</div>
```

## Preserve 3D

Anak-anak mengekalkan kedudukan 3D mereka.

```html
<div visual="transform-style:preserve-3d">
  <div visual="rotate:[60deg]">3D Dikekalkan</div>
</div>
```

## Kes Penggunaan

Diperlukan untuk mencipta kesan 3D seperti kad flip di mana elemen anak perlu mengekalkan kedudukan 3D mereka berbanding induk.
