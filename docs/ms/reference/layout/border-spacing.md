# Jarak Sempadan (Border Spacing)

Kawal jarak antara sempadan sel jadual apabila menggunakan `border-separate`.

## Penggunaan

Gunakan `border-spacing` untuk menambah jarak antara sel jadual. Ini hanya berfungsi apabila `border-separate` digunakan.

```html
<table layout="border-separate border-spacing-2">
  <tr>
    <td visual="border-gray-300 border-w-[1px] rounded-md" space="p-2">Sel 1</td>
    <td visual="border-gray-300 border-w-[1px] rounded-md" space="p-2">Sel 2</td>
  </tr>
  <tr>
    <td visual="border-gray-300 border-w-[1px] rounded-md" space="p-2">Sel 3</td>
    <td visual="border-gray-300 border-w-[1px] rounded-md" space="p-2">Sel 4</td>
  </tr>
</table>
```

## Skala Jarak

Gunakan nilai skala jarak untuk jarak yang konsisten:

```html
<table layout="border-separate border-spacing-1">...</table>  <!-- 0.25rem / 4px -->
<table layout="border-separate border-spacing-2">...</table>  <!-- 0.5rem / 8px -->
<table layout="border-separate border-spacing-3">...</table>  <!-- 0.75rem / 12px -->
<table layout="border-separate border-spacing-4">...</table>  <!-- 1rem / 16px -->
<table layout="border-separate border-spacing-6">...</table>  <!-- 1.5rem / 24px -->
<table layout="border-separate border-spacing-8">...</table>  <!-- 2rem / 32px -->
```

## Jarak Mengikut Paksi

Kawal jarak mendatar dan menegak secara berasingan:

```html
<!-- Jarak mendatar sahaja -->
<table layout="border-separate border-spacing-x-4">...</table>

<!-- Jarak menegak sahaja -->
<table layout="border-separate border-spacing-y-2">...</table>
```

## Nilai Arbitrari

```html
<table layout="border-separate border-spacing-[10px]">...</table>
```

## Jadual Gaya Kad

Cipta jadual gaya kad moden dengan sudut bulat pada setiap sel:

```html
<table layout="border-separate border-spacing-3" space="w-full">
  <thead>
    <tr>
      <th visual="bg-primary text-white rounded-lg" space="p-3">Nama</th>
      <th visual="bg-primary text-white rounded-lg" space="p-3">Emel</th>
      <th visual="bg-primary text-white rounded-lg" space="p-3">Peranan</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td visual="bg-gray-50 rounded-lg" space="p-3">John Doe</td>
      <td visual="bg-gray-50 rounded-lg" space="p-3">john@example.com</td>
      <td visual="bg-gray-50 rounded-lg" space="p-3">Admin</td>
    </tr>
  </tbody>
</table>
```

## Rujukan

| Token | Output CSS |
|-------|-----------|
| `border-spacing-{skala}` | `border-spacing: var(--s-{skala});` |
| `border-spacing-x-{skala}` | `border-spacing: var(--s-{skala}) 0;` |
| `border-spacing-y-{skala}` | `border-spacing: 0 var(--s-{skala});` |
