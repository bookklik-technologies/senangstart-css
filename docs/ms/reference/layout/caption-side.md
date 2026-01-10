# Kedudukan Kapsyen (Caption Side)

Kawal kedudukan kapsyen jadual.

## Penggunaan

Letakkan kapsyen jadual di atas atau bawah jadual.

```html
<!-- Kapsyen di atas (lalai) -->
<table layout="caption-top">
  <caption>Jadual 1: Jualan Bulanan</caption>
  <thead>
    <tr>
      <th>Bulan</th>
      <th>Jualan</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Januari</td>
      <td>RM1,200</td>
    </tr>
    <tr>
      <td>Februari</td>
      <td>RM1,500</td>
    </tr>
  </tbody>
</table>

<!-- Kapsyen di bawah -->
<table layout="caption-bottom">
  <caption>Jadual 1: Jualan Bulanan</caption>
  <thead>
    <tr>
      <th>Bulan</th>
      <th>Jualan</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Januari</td>
      <td>RM1,200</td>
    </tr>
  </tbody>
</table>
```

## Menggayakan Kapsyen

Gabungkan dengan utiliti visual untuk menggayakan kapsyen:

```html
<table layout="caption-bottom border-collapse" space="w-full">
  <caption 
    visual="text-gray-500 text-size-sm italic" 
    space="p-y-2"
  >
    Sumber: Laporan Kewangan Syarikat 2024
  </caption>
  <!-- ... kandungan jadual ... -->
</table>
```

## Rujukan

| Token | Output CSS |
|-------|-----------|
| `caption-top` | `caption-side: top;` |
| `caption-bottom` | `caption-side: bottom;` |
