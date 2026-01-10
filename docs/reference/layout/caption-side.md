# Caption Side

Control the placement of a table caption.

## Usage

Position the table caption above or below the table.

```html
<!-- Caption at top (default) -->
<table layout="caption-top">
  <caption>Table 1: Monthly Sales</caption>
  <thead>
    <tr>
      <th>Month</th>
      <th>Sales</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>January</td>
      <td>$1,200</td>
    </tr>
    <tr>
      <td>February</td>
      <td>$1,500</td>
    </tr>
  </tbody>
</table>

<!-- Caption at bottom -->
<table layout="caption-bottom">
  <caption>Table 1: Monthly Sales</caption>
  <thead>
    <tr>
      <th>Month</th>
      <th>Sales</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>January</td>
      <td>$1,200</td>
    </tr>
  </tbody>
</table>
```

## Styling Captions

Combine with visual utilities to style the caption:

```html
<table layout="caption-bottom border-collapse" space="w-full">
  <caption 
    visual="text-gray-500 text-size-sm italic" 
    space="p-y-2"
  >
    Source: Company Financial Report 2024
  </caption>
  <!-- ... table content ... -->
</table>
```

## Reference

| Token | CSS Output |
|-------|-----------|
| `caption-top` | `caption-side: top;` |
| `caption-bottom` | `caption-side: bottom;` |
