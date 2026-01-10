# Runtuhan Sempadan (Border Collapse)

Kawal sama ada sempadan jadual harus runtuh menjadi satu sempadan atau kekal berasingan.

## Penggunaan

Gunakan `border-collapse` untuk menggabungkan sempadan sel jadual bersebelahan, atau `border-separate` untuk menjadikannya berasingan.

```html
<!-- Sempadan runtuh (satu sempadan antara sel) -->
<table layout="border-collapse">
  <tr>
    <td visual="border-gray-300 border-w-[1px]">Sel 1</td>
    <td visual="border-gray-300 border-w-[1px]">Sel 2</td>
  </tr>
  <tr>
    <td visual="border-gray-300 border-w-[1px]">Sel 3</td>
    <td visual="border-gray-300 border-w-[1px]">Sel 4</td>
  </tr>
</table>

<!-- Sempadan berasingan (setiap sel ada sempadan sendiri) -->
<table layout="border-separate">
  <tr>
    <td visual="border-gray-300 border-w-[1px]">Sel 1</td>
    <td visual="border-gray-300 border-w-[1px]">Sel 2</td>
  </tr>
</table>
```

## Perbandingan Visual

| Mod | Penerangan |
|------|-------------|
| `border-collapse` | Sempadan sel bersebelahan bergabung menjadi satu. Ini adalah paparan jadual tradisional. |
| `border-separate` | Setiap sel mengekalkan sempadan sendiri. Membenarkan border-spacing. |

::: tip
Gunakan `border-separate` dengan `border-spacing` untuk menambah jarak antara sel jadual.
:::

## Rujukan

| Token | Output CSS |
|-------|-----------|
| `border-collapse` | `border-collapse: collapse;` |
| `border-separate` | `border-collapse: separate;` |
