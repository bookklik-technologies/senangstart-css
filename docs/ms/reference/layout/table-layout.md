# Susun Atur Jadual (Table Layout)

Kawal algoritma yang digunakan untuk menyusun sel, baris dan lajur jadual.

## Penggunaan

### Susun Atur Auto (Lalai)

Dengan `table-auto`, lebar lajur jadual ditentukan oleh kandungan dalam sel.

```html
<table layout="table-auto" space="w-full">
  <thead>
    <tr>
      <th>Lagu</th>
      <th>Artis</th>
      <th>Tahun</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>The Sliding Mr. Bones (Next Stop, Pottersville)</td>
      <td>Malcolm Lockyer</td>
      <td>1961</td>
    </tr>
    <tr>
      <td>Witchy Woman</td>
      <td>The Eagles</td>
      <td>1972</td>
    </tr>
  </tbody>
</table>
```

### Susun Atur Tetap

Dengan `table-fixed`, lebar lajur jadual ditentukan oleh baris pertama. Baris kemudian tidak menjejaskan lebar lajur.

```html
<table layout="table-fixed" space="w-full">
  <thead>
    <tr>
      <th space="w-1/2">Lagu</th>
      <th space="w-1/4">Artis</th>
      <th space="w-1/4">Tahun</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>The Sliding Mr. Bones (Next Stop, Pottersville)</td>
      <td>Malcolm Lockyer</td>
      <td>1961</td>
    </tr>
  </tbody>
</table>
```

## Bila Hendak Digunakan

| Mod | Gunakan Bila |
|------|----------|
| `table-auto` | Kandungan berbeza dan anda mahu lajur muat kandungannya secara semula jadi |
| `table-fixed` | Anda perlukan lebar lajur yang konsisten tanpa mengira kandungan |

::: tip Prestasi
`table-fixed` dirender lebih cepat kerana pelayar tidak perlu menganalisis semua baris untuk menentukan lebar lajur.
:::

## Rujukan

| Token | Output CSS |
|-------|-----------|
| `table-auto` | `table-layout: auto;` |
| `table-fixed` | `table-layout: fixed;` |
