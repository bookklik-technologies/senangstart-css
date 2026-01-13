# Table Layout

Control table layout algorithm

## Syntax
```
layout="table:[value]"
```

## Values

| Value | CSS Output | Description |
|-------|------------|-------------|
| `auto` | `table-layout: auto` | Auto layout |
| `fixed` | `table-layout: fixed` | Fixed layout |

## Examples

```html
<table layout="table:fixed">Fixed width columns</table>
```

## Preview

<div space="p-x:big p-b:medium m-t:medium" visual="border-w:thin border:neutral-100 dark:border:neutral-800 rounded:medium">

### Fixed Table Layout

<div layout="flex col" space="g:medium">
  <p space="m:none" visual="text:neutral-600 dark:text:neutral-400 text-sm"><code>layout="table:fixed"</code> - Columns have fixed equal widths</p>
<table layout="table:fixed" style="width: 100%;" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <tbody>
    <tr>
      <td space="p:small" visual="bg:primary text:white">Fixed</td>
      <td space="p:small" visual="bg:primary text:white">Column</td>
      <td space="p:small" visual="bg:primary text:white">Widths</td>
    </tr>
  </tbody>
</table>
</div>

<details>
<summary>View Code</summary>

```html
<table layout="table:fixed" style="width: 100%;" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <tbody>
    <tr>
      <td space="p:small" visual="bg:primary text:white">Fixed</td>
      <td space="p:small" visual="bg:primary text:white">Column</td>
      <td space="p:small" visual="bg:primary text:white">Widths</td>
    </tr>
  </tbody>
</table>
```

</details>

</div>

<div space="p-x:big p-b:medium m-t:medium" visual="border-w:thin border:neutral-100 dark:border:neutral-800 rounded:medium">

### Auto Table Layout

<div layout="flex col" space="g:medium">
  <p space="m:none" visual="text:neutral-600 dark:text:neutral-400 text-sm"><code>layout="table:auto"</code> - Columns adjust to content width</p>
<table layout="table:auto" style="width: 100%;" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <tbody>
    <tr>
      <td space="p:small" visual="bg:primary text:white">Short</td>
      <td space="p:small" visual="bg:primary text:white">Much Longer Content Here</td>
      <td space="p:small" visual="bg:primary text:white">Med</td>
    </tr>
  </tbody>
</table>
</div>

<details>
<summary>View Code</summary>

```html
<table layout="table:auto" style="width: 100%;" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <tbody>
    <tr>
      <td space="p:small" visual="bg:primary text:white">Short</td>
      <td space="p:small" visual="bg:primary text:white">Much Longer Content Here</td>
      <td space="p:small" visual="bg:primary text:white">Med</td>
    </tr>
  </tbody>
</table>
```

</details>

</div>
