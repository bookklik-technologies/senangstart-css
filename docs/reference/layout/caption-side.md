# Caption Side

Control table caption position

## Syntax
```
layout="caption:[value]"
```

## Values

| Value | CSS Output | Description |
|-------|------------|-------------|
| `top` | `caption-side: top` | Caption on top |
| `bottom` | `caption-side: bottom` | Caption on bottom |

## Examples

```html
<caption layout="caption:bottom">Bottom caption</caption>
```

## Preview

<div space="p-x:big p-b:medium m-t:medium" visual="border-w:thin border:neutral-100 dark:border:neutral-800 rounded:medium">

### Caption Top

<div layout="flex col" space="g:medium">
  <p space="m:none" visual="text:neutral-600 dark:text:neutral-400 text-sm"><code>layout="caption:top"</code> - Table caption at the top</p>
<table style="width: 100%;">
  <caption layout="caption:top" space="p:small" visual="text:neutral-600 dark:text:neutral-400">Table Caption (Top)</caption>
  <tbody>
    <tr>
      <td space="p:small" visual="bg:primary text:white rounded:small">Data</td>
      <td space="p:small" visual="bg:primary text:white rounded:small">Data</td>
    </tr>
  </tbody>
</table>
</div>

<details>
<summary>View Code</summary>

```html
<table style="width: 100%;">
  <caption layout="caption:top" space="p:small" visual="text:neutral-600 dark:text:neutral-400">Table Caption (Top)</caption>
  <tbody>
    <tr>
      <td space="p:small" visual="bg:primary text:white rounded:small">Data</td>
      <td space="p:small" visual="bg:primary text:white rounded:small">Data</td>
    </tr>
  </tbody>
</table>
```

</details>

</div>

<div space="p-x:big p-b:medium m-t:medium" visual="border-w:thin border:neutral-100 dark:border:neutral-800 rounded:medium">

### Caption Bottom

<div layout="flex col" space="g:medium">
  <p space="m:none" visual="text:neutral-600 dark:text:neutral-400 text-sm"><code>layout="caption:bottom"</code> - Table caption at the bottom</p>
<table style="width: 100%;">
  <caption layout="caption:bottom" space="p:small" visual="text:neutral-600 dark:text:neutral-400">Table Caption (Bottom)</caption>
  <tbody>
    <tr>
      <td space="p:small" visual="bg:primary text:white rounded:small">Data</td>
      <td space="p:small" visual="bg:primary text:white rounded:small">Data</td>
    </tr>
  </tbody>
</table>
</div>

<details>
<summary>View Code</summary>

```html
<table style="width: 100%;">
  <caption layout="caption:bottom" space="p:small" visual="text:neutral-600 dark:text:neutral-400">Table Caption (Bottom)</caption>
  <tbody>
    <tr>
      <td space="p:small" visual="bg:primary text:white rounded:small">Data</td>
      <td space="p:small" visual="bg:primary text:white rounded:small">Data</td>
    </tr>
  </tbody>
</table>
```

</details>

</div>
