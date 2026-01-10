# Table Layout

Control the algorithm used to lay out table cells, rows, and columns.

## Usage

### Auto Layout (Default)

With `table-auto`, the table column widths are determined by the content within the cells.

```html
<table layout="table-auto" space="w-full">
  <thead>
    <tr>
      <th>Song</th>
      <th>Artist</th>
      <th>Year</th>
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

### Fixed Layout

With `table-fixed`, the table column widths are determined by the first row. Later rows don't affect column widths.

```html
<table layout="table-fixed" space="w-full">
  <thead>
    <tr>
      <th space="w-1/2">Song</th>
      <th space="w-1/4">Artist</th>
      <th space="w-1/4">Year</th>
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

## When to Use

| Mode | Use When |
|------|----------|
| `table-auto` | Content varies and you want columns to fit their content naturally |
| `table-fixed` | You need consistent column widths regardless of content |

::: tip Performance
`table-fixed` renders faster because the browser doesn't need to analyze all rows to determine column widths.
:::

## Reference

| Token | CSS Output |
|-------|-----------|
| `table-auto` | `table-layout: auto;` |
| `table-fixed` | `table-layout: fixed;` |
