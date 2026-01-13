# Border Collapse

Control table border collapse

## Syntax
```
layout="border:[value]"
```

## Values

| Value | CSS Output | Description |
|-------|------------|-------------|
| `collapse` | `border-collapse: collapse` | Collapse borders |
| `separate` | `border-collapse: separate` | Separate borders |

## Examples

```html
<table layout="border:collapse">Collapsed table</table>
```

## Preview

<div space="p-x:big p-b:medium m-t:medium" visual="border-w:thin border:neutral-100 dark:border:neutral-800 rounded:medium">

### Border Collapse

<div layout="flex col" space="g:medium">
  <p space="m:none" visual="text:neutral-600 dark:text:neutral-400 text-sm"><code>layout="border:collapse"</code> - Table borders collapse into single lines</p>
<table layout="border:collapse" visual="border:1 border:neutral-300 dark:border:neutral-700" style="width: 100%;">
  <tbody>
    <tr>
      <td space="p:small" visual="border:1 border:neutral-300 dark:border:neutral-700 bg:primary text:white">A1</td>
      <td space="p:small" visual="border:1 border:neutral-300 dark:border:neutral-700 bg:primary text:white">A2</td>
    </tr>
    <tr>
      <td space="p:small" visual="border:1 border:neutral-300 dark:border:neutral-700 bg:primary text:white">B1</td>
      <td space="p:small" visual="border:1 border:neutral-300 dark:border:neutral-700 bg:primary text:white">B2</td>
    </tr>
  </tbody>
</table>
</div>

<details>
<summary>View Code</summary>

```html
<table layout="border:collapse" visual="border:1 border:neutral-300 dark:border:neutral-700" style="width: 100%;">
  <tbody>
    <tr>
      <td space="p:small" visual="border:1 border:neutral-300 dark:border:neutral-700 bg:primary text:white">A1</td>
      <td space="p:small" visual="border:1 border:neutral-300 dark:border:neutral-700 bg:primary text:white">A2</td>
    </tr>
    <tr>
      <td space="p:small" visual="border:1 border:neutral-300 dark:border:neutral-700 bg:primary text:white">B1</td>
      <td space="p:small" visual="border:1 border:neutral-300 dark:border:neutral-700 bg:primary text:white">B2</td>
    </tr>
  </tbody>
</table>
```

</details>

</div>

<div space="p-x:big p-b:medium m-t:medium" visual="border-w:thin border:neutral-100 dark:border:neutral-800 rounded:medium">

### Border Separate

<div layout="flex col" space="g:medium">
  <p space="m:none" visual="text:neutral-600 dark:text:neutral-400 text-sm"><code>layout="border:separate"</code> - Table borders are separate (default)</p>
<table layout="border:separate" visual="border:1 border:neutral-300 dark:border:neutral-700" style="width: 100%; border-spacing: 4px;">
  <tbody>
    <tr>
      <td space="p:small" visual="border:1 border:neutral-300 dark:border:neutral-700 bg:primary text:white rounded:small">A1</td>
      <td space="p:small" visual="border:1 border:neutral-300 dark:border:neutral-700 bg:primary text:white rounded:small">A2</td>
    </tr>
    <tr>
      <td space="p:small" visual="border:1 border:neutral-300 dark:border:neutral-700 bg:primary text:white rounded:small">B1</td>
      <td space="p:small" visual="border:1 border:neutral-300 dark:border:neutral-700 bg:primary text:white rounded:small">B2</td>
    </tr>
  </tbody>
</table>
</div>

<details>
<summary>View Code</summary>

```html
<table layout="border:separate" visual="border:1 border:neutral-300 dark:border:neutral-700" style="width: 100%; border-spacing: 4px;">
  <tbody>
    <tr>
      <td space="p:small" visual="border:1 border:neutral-300 dark:border:neutral-700 bg:primary text:white rounded:small">A1</td>
      <td space="p:small" visual="border:1 border:neutral-300 dark:border:neutral-700 bg:primary text:white rounded:small">A2</td>
    </tr>
    <tr>
      <td space="p:small" visual="border:1 border:neutral-300 dark:border:neutral-700 bg:primary text:white rounded:small">B1</td>
      <td space="p:small" visual="border:1 border:neutral-300 dark:border:neutral-700 bg:primary text:white rounded:small">B2</td>
    </tr>
  </tbody>
</table>
```

</details>

</div>
