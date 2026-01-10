# Border Spacing

Control the spacing between table cell borders when using `border-separate`.

## Syntax
```
layout="border-spacing-[value]"
layout="border-spacing-x-[value] | border-spacing-y-[value]"
```

## Usage

Use `border-spacing` to add gaps between table cells. This only works when `border-separate` is applied.

```html
<table layout="border-separate border-spacing-2">
  <tr>
    <td visual="border-gray-300 border-w-[1px] rounded-md" space="p-2">Cell 1</td>
    <td visual="border-gray-300 border-w-[1px] rounded-md" space="p-2">Cell 2</td>
  </tr>
  <tr>
    <td visual="border-gray-300 border-w-[1px] rounded-md" space="p-2">Cell 3</td>
    <td visual="border-gray-300 border-w-[1px] rounded-md" space="p-2">Cell 4</td>
  </tr>
</table>
```

## Spacing Scale

Use the spacing scale values for consistent spacing:

```html
<table layout="border-separate border-spacing-1">...</table>  <!-- 0.25rem / 4px -->
<table layout="border-separate border-spacing-2">...</table>  <!-- 0.5rem / 8px -->
<table layout="border-separate border-spacing-3">...</table>  <!-- 0.75rem / 12px -->
<table layout="border-separate border-spacing-4">...</table>  <!-- 1rem / 16px -->
<table layout="border-separate border-spacing-6">...</table>  <!-- 1.5rem / 24px -->
<table layout="border-separate border-spacing-8">...</table>  <!-- 2rem / 32px -->
```

## Axis-Specific Spacing

Control horizontal and vertical spacing independently:

```html
<!-- Horizontal spacing only -->
<table layout="border-separate border-spacing-x-4">...</table>

<!-- Vertical spacing only -->
<table layout="border-separate border-spacing-y-2">...</table>
```

## Arbitrary Values

```html
<table layout="border-separate border-spacing-[10px]">...</table>
```

## Card-Style Table

Create a modern card-style table with rounded corners on each cell:

```html
<table layout="border-separate border-spacing-3" space="w-full">
  <thead>
    <tr>
      <th visual="bg-primary text-white rounded-lg" space="p-3">Name</th>
      <th visual="bg-primary text-white rounded-lg" space="p-3">Email</th>
      <th visual="bg-primary text-white rounded-lg" space="p-3">Role</th>
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

## Reference

| Token | CSS Output |
|-------|-----------|
| `border-spacing-{scale}` | `border-spacing: var(--s-{scale});` |
| `border-spacing-x-{scale}` | `border-spacing: var(--s-{scale}) 0;` |
| `border-spacing-y-{scale}` | `border-spacing: 0 var(--s-{scale});` |
