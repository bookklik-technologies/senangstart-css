# Border Collapse

Control whether table borders should collapse into a single border or remain separate.

## Syntax
```
layout="border-collapse | border-separate"
```

## Usage

Use `border-collapse` to merge adjacent table cell borders, or `border-separate` to keep them separate.

```html
<!-- Collapsed borders (single border between cells) -->
<table layout="border-collapse">
  <tr>
    <td visual="border-gray-300 border-w-[1px]">Cell 1</td>
    <td visual="border-gray-300 border-w-[1px]">Cell 2</td>
  </tr>
  <tr>
    <td visual="border-gray-300 border-w-[1px]">Cell 3</td>
    <td visual="border-gray-300 border-w-[1px]">Cell 4</td>
  </tr>
</table>

<!-- Separate borders (each cell has its own border) -->
<table layout="border-separate">
  <tr>
    <td visual="border-gray-300 border-w-[1px]">Cell 1</td>
    <td visual="border-gray-300 border-w-[1px]">Cell 2</td>
  </tr>
</table>
```

## Visual Comparison

| Mode | Description |
|------|-------------|
| `border-collapse` | Adjacent cell borders merge into one. This is the traditional table look. |
| `border-separate` | Each cell maintains its own border. Allows for border-spacing. |

::: tip
Use `border-separate` with `border-spacing` to add gaps between table cells.
:::

## Reference

| Token | CSS Output |
|-------|-----------|
| `border-collapse` | `border-collapse: collapse;` |
| `border-separate` | `border-collapse: separate;` |
