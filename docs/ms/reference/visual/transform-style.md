# Gaya Transform

Kawal sama ada elemen anak diposisikan dalam ruang 3D.

## Sintaks
```
visual="transform-style:flat | transform-style:preserve-3d"
```

## Nilai

| Nilai | Output CSS |
|-------|------------|
| `transform-style:flat` | `transform-style: flat` |
| `transform-style:preserve-3d` | `transform-style: preserve-3d` |

## Rata (Lalai)

Elemen anak diratakan ke satah induk.

```html
<div visual="transform-style:flat">
  <div visual="rotate:[60deg]">Diratakan</div>
</div>
```

## Kekalkan 3D

Elemen anak mengekalkan posisi 3D mereka.

```html
<div visual="transform-style:preserve-3d">
  <div visual="rotate:[60deg]">3D Dikekalkan</div>
</div>
```
