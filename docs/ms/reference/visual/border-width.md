# Lebar Sempadan

Tetapkan lebar sempadan menggunakan token skala spacing atau nilai arbitrari.

## Sintaks
```
visual="border-w:[value]"
visual="border-t-w:[value]"   <!-- atas sahaja -->
visual="border-b-w:[value]"   <!-- bawah sahaja -->
visual="border-l-w:[value]"   <!-- kiri sahaja -->
visual="border-r-w:[value]"   <!-- kanan sahaja -->
visual="border-x-w:[value]"   <!-- kiri + kanan -->
visual="border-y-w:[value]"   <!-- atas + bawah -->
```

## Nilai

| Nilai | Output CSS | Penerangan |
|-------|------------|------------|
| `tiny` | `border-width: var(--s-tiny)` | Sempadan 4px |
| `small` | `border-width: var(--s-small)` | Sempadan 8px |
| `medium` | `border-width: var(--s-medium)` | Sempadan 16px |

## Contoh

### Semua Sisi
```html
<div visual="border:gray-300 border-w:small">Sempadan nipis pada semua sisi</div>
<div visual="border:primary border-w:[2px]">Sempadan 2px pada semua sisi</div>
```

### Berarah
```html
<!-- Sempadan atas sahaja -->
<div visual="border-t:primary border-t-w:[2px]">Sempadan atas</div>

<!-- Sempadan bawah sahaja -->
<div visual="border-b:warning border-b-w:small">Sempadan bawah</div>

<!-- Sempadan kiri dan kanan -->
<div visual="border-x:secondary border-x-w:[1px]">Sempadan mengufuk</div>

<!-- Sempadan atas dan bawah -->
<div visual="border-y:success border-y-w:tiny">Sempadan menegak</div>
```

## Nilai Arbitrari

Sokong nilai lebar CSS tersuai:

```html
<div visual="border:primary border-w:[3px]">Sempadan 3px</div>
<div visual="border-t:danger border-t-w:[0.5rem]">Sempadan atas 0.5rem</div>
```

## Responsif

```html
<div visual="border:gray-300 border-w:[1px] tab:border-w:[2px] lap:border-w:small">
  Lebar sempadan responsif
</div>
```

::: tip
Apabila menggunakan utiliti lebar berarah, pasangkan dengan utiliti warna yang sepadan (contoh: `border-t-w` dengan `border-t`).
:::
