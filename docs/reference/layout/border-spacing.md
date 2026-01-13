# Border Spacing

Control spacing between table borders

## Syntax
```
layout="border-spacing:[value]"
```

## Values

| Value | CSS Output | Description |
|-------|------------|-------------|
| `border-spacing` | `border-spacing: {value}` | All spacing |
| `border-spacing-x` | `border-spacing: {value} 0` | Horizontal spacing |
| `border-spacing-y` | `border-spacing: 0 {value}` | Vertical spacing |

## Examples

```html
<table layout="border-separate border-spacing:small">Spaced</table>
```

## Preview

<div space="p-x:big p-b:medium m-t:medium" visual="border-w:thin border:neutral-100 dark:border:neutral-800 rounded:medium">

### Border Spacing

<div layout="flex col" space="g:medium">
  <p space="m:none" visual="text:neutral-600 dark:text:neutral-400 text-sm"><code>layout="border-spacing:small"</code> - Space between table cell borders</p>
<table layout="border:separate" style="width: 100%; border-spacing: 8px;">
  <tbody>
    <tr>
      <td space="p:small" visual="bg:primary text:white rounded:small">A1</td>
      <td space="p:small" visual="bg:primary text:white rounded:small">A2</td>
    </tr>
    <tr>
      <td space="p:small" visual="bg:primary text:white rounded:small">B1</td>
      <td space="p:small" visual="bg:primary text:white rounded:small">B2</td>
    </tr>
  </tbody>
</table>
</div>

<details>
<summary>View Code</summary>

```html
<table layout="border:separate" style="width: 100%; border-spacing: 8px;">
  <tbody>
    <tr>
      <td space="p:small" visual="bg:primary text:white rounded:small">A1</td>
      <td space="p:small" visual="bg:primary text:white rounded:small">A2</td>
    </tr>
    <tr>
      <td space="p:small" visual="bg:primary text:white rounded:small">B1</td>
      <td space="p:small" visual="bg:primary text:white rounded:small">B2</td>
    </tr>
  </tbody>
</table>
```

</details>

</div>

## Arbitrary Values

Supports custom values using bracket syntax:

```html
<div layout="border:[custom-value]">Custom</div>
```
